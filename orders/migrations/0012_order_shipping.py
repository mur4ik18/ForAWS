# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0011_auto_20150908_0952'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='shipping',
            field=models.FloatField(default=0),
        ),
    ]
