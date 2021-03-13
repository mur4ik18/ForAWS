# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20150512_1726'),
    ]

    operations = [
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('type', models.CharField(max_length=10, choices=[(b'video', b'Video'), (b'audio', b'Audio'), (b'image', b'Image')])),
                ('link', models.CharField(default=None, max_length=250, null=True, blank=True)),
                ('file', models.FileField(default=None, null=True, upload_to=b'events/%Y/%m/%d/', blank=True)),
                ('event', models.ForeignKey(related_name='media', to='events.Event')),
            ],
        ),
    ]
