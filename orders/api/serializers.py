# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from shop.api.serializers import (
    StockSerializer, SimpleProductSerializer, VoucherSerializer)
from orders import models


class ItemCreateSerializer(serializers.ModelSerializer):

    price = serializers.SerializerMethodField()

    class Meta:
        model = models.Item
        fields = (
            'id',
            'product',
            'stock',
            'price',
            'quantity',
            'updated',
            'created',
        )
        read_only_fields = (
            'updated',
            'created'
        )

    def validate_quantity(self, value):
        '''
        TODO: Validate quantity is available
        '''
        return value

    def get_price(self, item):
        return item.product.price


class ItemSerializer(ItemCreateSerializer):
    stock = StockSerializer()
    product = SimpleProductSerializer()


class OrderSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    voucher = VoucherSerializer(read_only=True)
    discount = serializers.ReadOnlyField(source='get_calculated_discount')
    # tax = serializers.ReadOnlyField(source='get_calculated_tax')
    # shipping = serializers.ReadOnlyField(source='get_calculated_shipping')

    card_number = serializers.CharField(min_length=15, max_length=16, required=False)
    card_month = serializers.IntegerField(min_value=1, max_value=12, required=False)
    card_year = serializers.IntegerField(required=False)
    card_cvv = serializers.CharField(max_length=4, required=False)

    class Meta:
        model = models.Order
        fields = (
            'id',
            'user',
            'submitted',
            'submit_date',
            'items',
            'subtotal',
            'total',

            'voucher',
            'discount',
            'tax',
            'shipping',

            'shipping_full_name',
            'shipping_address',
            'shipping_city',
            'shipping_state',
            'shipping_zip',
            'shipping_country',
            'shipping_method',

            'bill_as_shipping',
            'billing_full_name',
            'billing_address',
            'billing_city',
            'billing_state',
            'billing_zip',
            'billing_country',

            'card_number',
            'card_month',
            'card_year',
            'card_cvv',

            'updated',
            'created'
        )
        read_only_fields = (
            'user',
            'submitted',
            'updated',
            'created'
        )

    def submit(self):
        '''
        Submit order if everything is valid.
        '''
        # make the sale
        success, error = self.instance.submit(self.validated_data)
        if not success:
            raise ValidationError({'detail': error})
        return True
