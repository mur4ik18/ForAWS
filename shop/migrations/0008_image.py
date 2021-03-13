# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '0002_auto_20150606_2003'),
        ('shop', '0007_auto_20150801_1150'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order', models.PositiveIntegerField(default=1, editable=False, db_index=True)),
                ('image', filer.fields.image.FilerImageField(to='filer.Image')),
                ('product', models.ForeignKey(related_name='images', to='shop.Product')),
            ],
            options={
                'ordering': ['order'],
                'abstract': False,
            },
        ),
    ]
