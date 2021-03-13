# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('galleries', '0009_auto_20160620_1457'),
    ]

    operations = [
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.CharField(max_length=10, choices=[('video', 'Video'), ('audio', 'Audio'), ('image', 'Image')])),
                ('link', models.CharField(default=None, max_length=250, null=True, blank=True)),
                ('file', models.FileField(default=None, upload_to='events/%Y/%m/%d/', blank=True, help_text='For full browser support upload only .mp3 audio formats.', null=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(related_name='media', to='galleries.Article')),
            ],
        ),
        migrations.RemoveField(
            model_name='articleimage',
            name='article',
        ),
        migrations.RemoveField(
            model_name='articleimage',
            name='image',
        ),
        migrations.DeleteModel(
            name='ArticleImage',
        ),
    ]
