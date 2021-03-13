# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0014_auto_20150901_0853'),
    ]

    operations = [
        migrations.CreateModel(
            name='Voucher',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('code', models.CharField(max_length=10)),
                ('discount_type', models.PositiveSmallIntegerField(choices=[(0, b'Amount'), (1, b'Percent')])),
                ('amount', models.FloatField(default=0)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('category', models.ForeignKey(default=None, blank=True, to='shop.Category', null=True)),
            ],
        ),
    ]
