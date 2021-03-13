# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route
from rest_framework import status
from rest_framework import filters

from orders.api import serializers
from orders import models
from shop.models import Voucher


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.OrderSerializer
    queryset = models.Order.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('submitted',)

    def get_queryset(self):
        return super(OrderViewSet, self).get_queryset().filter(user=self.request.user)

    @list_route(methods=['GET'])
    def current(self, request):
        '''
        If we have a session order use that if not create a new order.
        If there is a logged in user than assign the user to the order.
        '''
        serializer = self.get_serializer(instance=request.order)
        return Response(serializer.data)

    @list_route(methods=['POST'])
    def submit(self, request):
        order = request.order
        serializer = self.get_serializer(instance=order, data=request.data)

        if serializer.is_valid():
            serializer.save()
            serializer.submit()
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        del request.session['current_order']
        return Response(serializer.data)

    @list_route(methods=['POST'],
                permission_classes=())
    def apply_coupon(self, request):
        coupon = request.data.get('coupon', None)
        if coupon is None:
            return Response({'detail': 'Invalid coupon!'},
                            status=status.HTTP_400_BAD_REQUEST)
        voucher = Voucher.objects.get_available_coupon(coupon)
        if not voucher:
            return Response({'detail': 'Invalid coupon!'},
                            status=status.HTTP_400_BAD_REQUEST)
        if not voucher.check_order(request.order):
            return Response({'detail': 'The coupon does\'nt apply to any of the products in your cart!'},
                            status=status.HTTP_400_BAD_REQUEST)
        order = voucher.apply(request.order)
        serializer = self.get_serializer(instance=order)
        return Response(serializer.data)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = models.Item.objects.all()
    permission_classes = ()

    def get_queryset(self):
        'TODO: Filter only user items or session items'
        return super(ItemViewSet, self).get_queryset()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return serializers.ItemCreateSerializer
        return serializers.ItemSerializer

    @list_route(methods=['POST'])
    def add(self, request):
        '''
        If product already exists in this order then increment with posted
        quantity else set the order of the new item
        '''
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        response_status = status.HTTP_201_CREATED
        headers = None

        try:
            item = self.request.order.items.get(
                stock=serializer.validated_data['stock'])
        except models.Item.DoesNotExist:
            item = None

        if item is None:
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
        else:
            item.quantity += serializer.validated_data['quantity']
            item.save()

            response_status = status.HTTP_200_OK
            serializer = self.get_serializer(instance=item)

        serializer = serializers.ItemSerializer(
            instance=serializer.instance,
            context=self.get_serializer_context())

        return Response(serializer.data, status=response_status, headers=headers)

    def perform_create(self, serializer):
        serializer.save(order=self.request.order)
