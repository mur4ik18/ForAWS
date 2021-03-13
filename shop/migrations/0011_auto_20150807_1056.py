# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0010_auto_20150805_0457'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=ckeditor.fields.RichTextField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='product',
            name='short_description',
            field=models.TextField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='stock',
            name='image',
            field=filer.fields.image.FilerImageField(blank=True, to='filer.Image', null=True),
        ),
    ]
