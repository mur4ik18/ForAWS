# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0007_auto_20150810_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='link',
            field=models.CharField(default=None, max_length=500, null=True, blank=True),
        ),
    ]
