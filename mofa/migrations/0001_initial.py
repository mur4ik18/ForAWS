# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BackgroundTiming',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('background_image', models.ImageField(upload_to=b'background/%Y/%m/%d/%H-%m/')),
                ('time_of_day', models.TimeField(help_text=b'At which time of the day this background is taken in account.')),
            ],
            options={
                'ordering': ['time_of_day'],
            },
        ),
    ]
