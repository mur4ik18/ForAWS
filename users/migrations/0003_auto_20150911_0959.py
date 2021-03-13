# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20150813_1716'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='billing_address',
            field=models.CharField(default=None, max_length=150, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='billing_city',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='billing_country',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='billing_full_name',
            field=models.CharField(default=None, max_length=150, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='billing_state',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='billing_zip',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='shipping_address',
            field=models.CharField(default=None, max_length=150, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='shipping_city',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='shipping_country',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='shipping_full_name',
            field=models.CharField(default=None, max_length=150, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='shipping_state',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='user',
            name='shipping_zip',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
    ]
