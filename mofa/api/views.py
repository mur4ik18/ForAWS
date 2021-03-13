# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from collections import namedtuple

from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import filters

from mofa.api import serializers
from mofa import models
from shop.models import Product
from shop.api.serializers import ProductSerializer
from events.models import Event
from events.api.serializers import EventSerializer
from galleries.models import Article
from galleries.api.serializers import ArticleSerializer


SearchView = namedtuple('SearchView', ['search_fields'])


class PageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Page.objects.all()
    serializer_class = serializers.PageSerializer
    filter_fields = ['name']


class SubscriberViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = models.Subscriber.objects.all()
    serializer_class = serializers.SubscriberSerializer


@api_view(['POST'])
def submit_content(request):
    serializer = serializers.SubmitContentSerializer(data=request.DATA)
    if serializer.is_valid():
        serializer.send()
        return Response({'success': True})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def search(request):
    search_filter = filters.SearchFilter()

    products = search_filter.filter_queryset(
        request,
        Product.objects.all(),
        SearchView(['name', 'tags__name', 'short_description', 'description']))
    events = search_filter.filter_queryset(
        request,
        Event.objects.all(),
        SearchView(['title', 'caption', 'location', 'address', 'content']))
    articles = search_filter.filter_queryset(
        request,
        Article.objects.published(),
        SearchView(['title', 'short_description', 'content']))

    return Response({
        'products': ProductSerializer(instance=products, many=True).data,
        'events': EventSerializer(instance=events, many=True).data,
        'articles': ArticleSerializer(instance=articles, many=True).data
    })
