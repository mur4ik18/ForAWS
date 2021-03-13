# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_auto_20150614_1700'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='media',
            options={},
        ),
        migrations.AlterField(
            model_name='media',
            name='order',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
