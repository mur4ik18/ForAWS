# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from rest_framework import filters
from rest_framework.decorators import list_route
from rest_framework.decorators import detail_route

from galleries.api.serializers import ArticleSerializer
from galleries.models import Article


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.published()
    serializer_class = ArticleSerializer
    filter_backends = (filters.SearchFilter, filters.DjangoFilterBackend,)
    filter_fields = ('category', 'subcategory')
    search_fields = ['title', 'short_description', 'content']

    @list_route(methods=['GET'])
    def most_recent(self, request):
        qs = self.filter_queryset(self.get_queryset())
        if not qs.exists():
            return Response({'detail': 'not found'}, status=status.HTTP_404_NOT_FOUND)

        article = qs.order_by('-created').last()
        serializer = self.get_serializer(instance=article)
        return Response(serializer.data)
