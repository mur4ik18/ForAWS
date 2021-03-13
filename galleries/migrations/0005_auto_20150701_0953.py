# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('galleries', '0004_auto_20150614_1700'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='subcategory',
            field=models.CharField(max_length=15, choices=[('science', 'science'), ('food', 'food'), ('human', 'human'), ('spirit', 'spirit'), ('nature', 'nature'), ('tech', 'tech')]),
        ),
    ]
