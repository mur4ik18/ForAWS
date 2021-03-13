# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from image_cropping.templatetags.cropping import cropped_thumbnail
# from django.contrib.staticfiles.templatetags.staticfiles import static

from galleries.models import Article
from mofa.api.serializers import FilerImageField
from galleries import models

class MediaSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Media
        fields = (
            'id',
            'article',
            'type',
            'link',
            'file',
        )


class ArticleSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    media = MediaSerializer(many=True)

    next = serializers.SerializerMethodField()
    previous = serializers.SerializerMethodField()

    cropping = serializers.SerializerMethodField()

    embedded_image = FilerImageField(read_only=True)

    class Meta:
        model = models.Article
        fields = (
            'id',
            'category',
            'subcategory',
            'title',
            'image',
            'cropping',
            'video',
            'audio',
            'caption',
            'short_description',
            'content',
            'embedded_image',
            'updated',
            'created',
            'tags',
            'next',
            'previous',
            'media'
        )

    def get_tags(self, obj):
        return obj.tags.names()

    def get_next(self, obj):
        article = Article.objects.filter(
            **self.get_siblings_qs_kwargs(obj)
        ).order_by('created').only('pk').first()

        if article:
            return article.pk

        return None

    def get_previous(self, obj):
        article = Article.objects.filter(
            **self.get_siblings_qs_kwargs(obj)
        ).order_by('-created').only('pk').first()

        if article:
            return article.pk

        return None

    def get_siblings_qs_kwargs(self, obj):
        request = self.context.get('request', None)
        if request is None:
            return {}

        kwargs = {
            'category': obj.category,
            'created__lt': obj.created
        }
        if request.GET.get('subcategory', False):
            kwargs['subcategory'] = obj.subcategory

        return kwargs

    def get_cropping(self, obj):
        return cropped_thumbnail(None, obj, 'cropping')