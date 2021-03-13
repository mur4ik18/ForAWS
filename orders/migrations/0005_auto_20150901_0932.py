# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_auto_20150819_1532'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='bill_as_shipping',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='billing_address',
            field=models.CharField(default=None, max_length=150, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='billing_city',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='billing_country',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='billing_full_name',
            field=models.CharField(default=None, max_length=150, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='billing_state',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='billing_zip',
            field=models.CharField(default=None, max_length=50, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_address',
            field=models.CharField(default=None, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_city',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_country',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_full_name',
            field=models.CharField(default=None, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_method',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_state',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_zip',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
    ]
