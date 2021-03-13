# -*- coding: utf-8 -*-
from django.db import models

from ckeditor.fields import RichTextField


class BackgroundTiming(models.Model):
    background_image = models.ImageField(upload_to='background/%Y/%m/%d/%H-%m/')

    time_of_day = models.TimeField(help_text="At which time of the day this background is taken in account.")

    class Meta:
        ordering = ['time_of_day']


class Page(models.Model):
    name = models.CharField(max_length=50, editable=False)
    title = models.CharField(max_length=150)

    content = RichTextField(null=True, blank=True, default=None)


class Subscriber(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.CharField(max_length=250, unique=True)

    created = models.DateTimeField(auto_now_add=True)
