# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '0002_auto_20150606_2003'),
        ('galleries', '0008_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArticleImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(related_name='images', to='galleries.Article')),
            ],
        ),
        migrations.RemoveField(
            model_name='image',
            name='article',
        ),
        migrations.RemoveField(
            model_name='image',
            name='image',
        ),
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.AddField(
            model_name='articleimage',
            name='image',
            field=filer.fields.image.FilerImageField(to='filer.Image'),
        ),
    ]
