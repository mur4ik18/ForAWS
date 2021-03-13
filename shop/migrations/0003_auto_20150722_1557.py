# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20150722_1534'),
    ]

    operations = [
        migrations.RenameField(
            model_name='size',
            old_name='name',
            new_name='code',
        ),
        migrations.AddField(
            model_name='size',
            name='title',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
    ]
