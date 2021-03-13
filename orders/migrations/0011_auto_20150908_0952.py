# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0015_voucher'),
        ('orders', '0010_auto_20150906_0924'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='discount',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='order',
            name='voucher',
            field=models.ForeignKey(default=None, blank=True, to='shop.Voucher', null=True),
        ),
    ]
