# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'category', 'verbose_name_plural': 'categories'},
        ),
        migrations.AlterField(
            model_name='category',
            name='icon',
            field=models.CharField(max_length=50, choices=[(b'women', b'Women'), (b'men', b'Men'), (b'bottoms', b'Bottoms'), (b'tops', b'Tops'), (b'dresses', b'Dresses'), (b'jumpsuits', b'Jumpsuits')]),
        ),
    ]
