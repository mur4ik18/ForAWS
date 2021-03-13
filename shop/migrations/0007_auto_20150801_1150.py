# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_stock_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='stock',
            options={'ordering': ['order']},
        ),
        migrations.AddField(
            model_name='stock',
            name='order',
            field=models.PositiveIntegerField(default=1, editable=False, db_index=True),
        ),
    ]
