# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_auto_20150608_1633'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='file',
            field=models.FileField(default=None, upload_to=b'events/%Y/%m/%d/', blank=True, help_text=b'For full browser support upload only .mp3 audio formats.', null=True),
        ),
    ]
