# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20150722_1557'),
    ]

    operations = [
        migrations.CreateModel(
            name='Designer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('icon', models.ImageField(upload_to=b'designers/%Y/%m/%d/')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=150, db_index=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(related_name='products', to='shop.Category')),
                ('designer', models.ForeignKey(related_name='products', to='shop.Designer')),
            ],
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('quantity', models.PositiveIntegerField(default=0, help_text=b'Avaialbe number of products')),
                ('color', models.ForeignKey(related_name='stocks+', to='shop.Color')),
                ('product', models.ForeignKey(related_name='stocks', to='shop.Product')),
                ('size', models.ForeignKey(related_name='stocks+', to='shop.Size')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='stock',
            unique_together=set([('product', 'color', 'size')]),
        ),
    ]
