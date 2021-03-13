# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_auto_20150723_1108'),
    ]

    operations = [
        migrations.RenameField(
            model_name='size',
            old_name='title',
            new_name='name',
        ),
    ]
