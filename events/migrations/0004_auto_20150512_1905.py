# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_media'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='media',
            options={'ordering': ['order']},
        ),
        migrations.AddField(
            model_name='media',
            name='order',
            field=models.PositiveIntegerField(default=1, editable=False, db_index=True),
        ),
    ]
