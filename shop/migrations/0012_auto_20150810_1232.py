# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0011_auto_20150807_1056'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={},
        ),
        migrations.AlterModelOptions(
            name='stock',
            options={},
        ),
        migrations.AlterField(
            model_name='image',
            name='order',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='stock',
            name='order',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
