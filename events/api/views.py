# from rest_framework import generics
import datetime
from dateutil.relativedelta import relativedelta

from rest_framework import viewsets
from rest_framework import status
from rest_framework import filters
from rest_framework.decorators import list_route
from rest_framework.response import Response

from events.api.serializers import EventSerializer
from events.models import Event


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ['title', 'caption', 'location', 'address', 'content']

    def get_int(self, name):
        try:
            return int(self.request.GET.get(name))
        except (TypeError, KeyError):
            pass

        return None

    @list_route(methods=['get'])
    def last(self, request):
        year = self.get_int('year')
        month = self.get_int('month')
        day = self.get_int('day')

        queryset = self.get_queryset()

        if not day:
            day = 1
            start = datetime.date(year, month, 1)
            end = start + relativedelta(months=1)
            queryset = queryset.filter(datetime__range=(start, end))
        else:
            queryset = queryset.filter(datetime=datetime.date(year, month, day))

        event = queryset.last()
        if not event:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(event)
        return Response(data=serializer.data)
