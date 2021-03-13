from django.db import models
from django.contrib import admin
from suit.admin import SortableTabularInline
from suit.widgets import SuitSplitDateTimeWidget
from events.models import Event, Media


class MediaTabluarInline(SortableTabularInline):
    model = Media
    extra = 1
    sortable = 'order'


class EventAdmin(admin.ModelAdmin):
    model = Event
    list_display = ('title', 'datetime', 'location', 'address',)
    date_hierarchy = 'datetime'
    inlines = [MediaTabluarInline]
    formfield_overrides = {
        models.DateTimeField: {'widget': SuitSplitDateTimeWidget}
    }

admin.site.register(Event, EventAdmin)
