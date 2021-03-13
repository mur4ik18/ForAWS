# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework import serializers
from filer.models import imagemodels


from mofa import models


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Page
        fields = (
            'id',
            'name',
            'title',
            'content'
        )


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subscriber
        fields = (
            'full_name',
            'email'
        )


class SubmitContentSerializer(serializers.Serializer):
    full_name = serializers.CharField(max_length=150)
    email = serializers.EmailField(max_length=250)
    webaddress = serializers.CharField(required=False)
    about = serializers.CharField()

    def send(self):
        to = [settings.RECEIVER_EMAIL]
        from_email = settings.DEFAULT_FROM_EMAIL
        subject = '[MOFA] New Contact Message'
        body = render_to_string("emails/submit_content.html", context=self.validated_data)

        return send_mail(subject, body, from_email, to)


class FilerImageField(serializers.RelatedField):

    def to_representation(self, value):
        return {
            'url': value.url,
            'caption': value.default_caption,
            'alt_text': value.default_alt_text
        }


class FilerModelSerializer(serializers.ModelSerializer):

    def build_relational_field(self, field_name, relation_info):
        if relation_info.related_model == imagemodels.Image:
            _holder = self.serializer_related_field
            self.serializer_related_field = FilerImageField
            result = super(FilerModelSerializer, self).build_relational_field(field_name, relation_info)
            self.serializer_related_field = _holder
            return result
        return super(FilerModelSerializer, self).build_relational_field(field_name, relation_info)

# FilerModelSerializer.serializer_field_mapping.update(
#     serializers.ModelSerializer.serializer_field_mapping)
