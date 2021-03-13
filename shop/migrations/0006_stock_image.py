# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_auto_20150723_1555'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='image',
            field=models.ImageField(default=None, upload_to=b'products/%Y/%m/%d/'),
            preserve_default=False,
        ),
    ]
