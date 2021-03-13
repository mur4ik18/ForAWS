# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_auto_20150805_0455'),
    ]

    operations = [
        migrations.AlterField(
            model_name='designer',
            name='icon',
            field=filer.fields.image.FilerImageField(to='filer.Image'),
        ),
    ]
