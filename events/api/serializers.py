
from rest_framework import serializers

from events.models import Event, Media


class MediaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Media
        fields = (
            'id',
            'event',
            'type',
            'link',
            'file',
        )


class EventSerializer(serializers.ModelSerializer):
    media = MediaSerializer(many=True)
    tags = serializers.SerializerMethodField()

    next = serializers.SerializerMethodField()
    previous = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = (
            'id',
            'title',
            'caption',
            'location',
            'address',
            'content',
            'datetime',
            'media',
            'tags',
            'next',
            'previous'
        )

    def get_tags(self, obj):
        return obj.tags.names()

    def get_next(self, obj):
        try:
            return obj.get_next_by_datetime().id
        except Event.DoesNotExist:
            return None

    def get_previous(self, obj):
        try:
            return obj.get_previous_by_datetime().id
        except Event.DoesNotExist:
            return None
