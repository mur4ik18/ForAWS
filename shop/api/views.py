# -*- coding: utf-8 -*-
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from rest_framework import filters

from shop.api import serializers
from shop import models


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer
    filter_fields = ('parent',)

    def get_queryset(self):
        if 'parent' in self.request.GET or 'pk' in self.kwargs:
            return super(CategoryViewSet, self).get_queryset()
        return models.Category.objects.root_nodes()

    @detail_route(methods=['GET'])
    def siblings(self, request, pk=None):
        category = self.get_object()
        serializer = self.get_serializer(
            instance=category.get_siblings(include_self=True),
            many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    filter_backends = (filters.SearchFilter, filters.DjangoFilterBackend,)
    filter_fields = ('category', 'designer',)
    search_fields = ['name', 'tags__name', 'short_description', 'description']
