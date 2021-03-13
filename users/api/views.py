# -*- coding: utf-8 -*-

from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate, login

from users.api import serializers
from users import models


class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        return super(UserViewSet, self).get_queryset().filter(
            pk=self.request.user.pk)

    @list_route(['GET'])
    def current(self, request):
        serializer = self.get_serializer(instance=self.request.user)
        return Response(serializer.data)

    @list_route(
        ['POST'],
        permission_classes=[])
    def auth(self, request):
        data = request.data
        if 'email' not in data or 'password' not in data:
            return Response({'detail': 'Incorrect authentication fields supplied.'},
                            status=status.HTTP_400_BAD_REQUEST)

        email = data.get('email')
        password = data.get('password')

        user = authenticate(email=email, password=password)
        if user is None:
            qs = models.User.objects.filter(email=email)
            if qs.exists():
                return Response({'detail': 'Incorrect credentials supplied.'},
                                status=status.HTTP_400_BAD_REQUEST)
            else:
                # create the user
                models.User.objects.create_user(email, password)
                user = authenticate(email=email, password=password)

        login(request, user)

        serializer = self.get_serializer(instance=user)
        return Response(serializer.data)
