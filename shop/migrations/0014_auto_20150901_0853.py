# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0013_product_price'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='stock',
            options={'verbose_name': 'stock', 'verbose_name_plural': 'stock'},
        ),
        migrations.AlterField(
            model_name='designer',
            name='icon',
            field=filer.fields.image.FilerImageField(on_delete=django.db.models.deletion.SET_NULL, default=None, blank=True, to='filer.Image', null=True),
        ),
        migrations.AlterField(
            model_name='stock',
            name='image',
            field=filer.fields.image.FilerImageField(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='filer.Image', null=True),
        ),
    ]
