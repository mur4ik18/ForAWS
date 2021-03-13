# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import galleries.models
import image_cropping.fields
import ckeditor.fields
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0001_initial'),
        ('galleries', '0003_auto_20150608_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='short_description',
            field=ckeditor.fields.RichTextField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='article',
            name='tags',
            field=taggit.managers.TaggableManager(to='taggit.Tag', through='taggit.TaggedItem', help_text='A comma-separated list of tags.', verbose_name='Tags'),
        ),
        migrations.AlterField(
            model_name='article',
            name='audio',
            field=models.FileField(validators=[galleries.models.validate_audio_format], upload_to=b'', blank=True, help_text='For full browser support upload only .mp3 audio formats.', null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='category',
            field=models.CharField(max_length=15, choices=[('read', 'read'), ('see', 'see'), ('listen', 'listen'), ('watch', 'watch')]),
        ),
        migrations.AlterField(
            model_name='article',
            name=b'cropping',
            field=image_cropping.fields.ImageRatioField('image', '600x300', hide_image_field=False, size_warning=False, allow_fullsize=False, free_crop=True, adapt_rotation=False, help_text=None, verbose_name='cropping'),
        ),
    ]
