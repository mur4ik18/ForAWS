# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from mofa import models


@admin.register(models.BackgroundTiming)
class BackgroundTimingAdmin(admin.ModelAdmin):
    list_display = ('time_of_day', 'background_image',)


@admin.register(models.Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('name', 'title')

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(models.Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email')
