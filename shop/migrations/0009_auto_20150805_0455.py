# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0008_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='image',
            field=filer.fields.image.FilerImageField(to='filer.Image'),
        ),
    ]
