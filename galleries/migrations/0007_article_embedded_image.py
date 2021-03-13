# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '0002_auto_20150606_2003'),
        ('galleries', '0006_article_caption'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='embedded_image',
            field=filer.fields.image.FilerImageField(default=None, blank=True, to='filer.Image', null=True),
        ),
    ]
