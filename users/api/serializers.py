# -*- coding: utf-8 -*-

from rest_framework import serializers

from users import models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'email',
            'phone',
            'password',
            'is_active',

            'shipping_full_name',
            'shipping_address',
            'shipping_city',
            'shipping_state',
            'shipping_zip',
            'shipping_country',

            'billing_full_name',
            'billing_address',
            'billing_city',
            'billing_state',
            'billing_zip',
            'billing_country',
        )
        extra_kwargs = {
            'password': {'write_only': True, 'required': False}
        }

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if 'password' in validated_data and validated_data['password'] != '':
            instance.set_password(validated_data['password'])

        instance.save()

        return instance
