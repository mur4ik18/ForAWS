# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import galleries.models
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('galleries', '0002_auto_20150608_1045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='audio',
            field=models.FileField(blank=True, null=True, upload_to=b'', validators=[galleries.models.validate_audio_format]),
        ),
        migrations.AlterField(
            model_name='article',
            name='content',
            field=ckeditor.fields.RichTextField(null=True, blank=True),
        ),
    ]
