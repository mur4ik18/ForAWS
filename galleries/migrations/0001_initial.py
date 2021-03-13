# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('category', models.CharField(max_length=15, choices=[('read', 'read'), ('image', 'image'), ('listen', 'listen'), ('video', 'video')])),
                ('subcategory', models.CharField(max_length=15, choices=[('science', 'science'), ('food', 'science'), ('human', 'human'), ('spirit', 'spirit'), ('nature', 'nature'), ('tech', 'tech'), ('whateve', 'whateve')])),
                ('title', models.CharField(max_length=250)),
                ('image', models.ImageField(default=None, null=True, upload_to='galleries/%Y/%m/%d/', blank=True)),
                ('video', models.CharField(default=None, max_length=250, null=True, blank=True)),
                ('audio', models.FileField(null=True, upload_to=b'', blank=True)),
                ('content', models.TextField(null=True, blank=True)),
                ('published', models.BooleanField(default=False)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
