# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from mofa.api.serializers import FilerModelSerializer

from shop import models


class CategorySerializer(serializers.ModelSerializer):
    has_children = serializers.SerializerMethodField()

    class Meta:
        model = models.Category
        fields = (
            'id',
            'parent',
            'name',
            'icon',
            # 'children',
            'has_children',
        )

    # def build_relational_field(self, field_name, relation_info):
    #     field_class, field_kwargs = super(CategorySerializer, self) \
    #         .build_relational_field(field_name, relation_info)
    #     if field_name == 'children':
    #         kwargs = {
    #             'instance': field_kwargs['queryset'],
    #             'many': True
    #         }
    #         return CategorySerializer, kwargs
    #     return field_class, field_kwargs

    def get_has_children(self, category):
        return not category.is_leaf_node()


class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Color
        fields = (
            'id',
            'name',
            'color'
        )


class SizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Size
        fields = (
            'id',
            'name',
            'code'
        )


class DesignerSerializer(FilerModelSerializer):

    class Meta:
        model = models.Designer
        fields = (
            'id',
            'name',
            'icon'
        )


class StockSerializer(FilerModelSerializer):

    size = SizeSerializer()
    color = ColorSerializer()

    class Meta:
        model = models.Stock
        fields = (
            'id',
            'product',
            'image',
            'color',
            'size',
            'quantity',
        )


class ImageSerializer(FilerModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'image',
        )


class ProductSerializer(serializers.ModelSerializer):
    designer = DesignerSerializer()
    stocks = StockSerializer(many=True, read_only=True)

    images = ImageSerializer(many=True, read_only=True)

    tags = serializers.SerializerMethodField()

    next = serializers.SerializerMethodField()
    previous = serializers.SerializerMethodField()

    class Meta:
        model = models.Product
        fields = (
            'id',
            'name',
            'category',
            'short_description',
            'description',
            'price',
            'designer',
            'stocks',
            'images',
            'tags',
            'next',
            'previous',
        )

    def get_tags(self, obj):
        return obj.tags.names()

    def get_next(self, obj):
        product = models.Product.objects.filter(
            category=obj.category,
            pk__gt=obj.pk).order_by('id').first()
        if product:
            return product.pk
        return None

    def get_previous(self, obj):
        product = models.Product.objects.filter(
            category=obj.category,
            pk__lt=obj.pk).order_by('-id').first()
        if product:
            return product.pk
        return None


class SimpleProductSerializer(ProductSerializer):
    class Meta:
        model = models.Product
        fields = (
            'id',
            'name'
        )


class VoucherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Voucher
        fields = (
            'id',
            'name',
            'code',
            'discount_type',
        )
