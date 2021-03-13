# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mofa', '0004_about_page'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('full_name', models.CharField(max_length=150)),
                ('email', models.CharField(unique=True, max_length=250)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
