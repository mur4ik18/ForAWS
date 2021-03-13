# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_auto_20150905_0028'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='tax',
            field=models.FloatField(default=0),
        ),
    ]
