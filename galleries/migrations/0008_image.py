# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '0002_auto_20150606_2003'),
        ('galleries', '0007_article_embedded_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(related_name='imageSlides', to='galleries.Article')),
                ('image', filer.fields.image.FilerImageField(related_name='slide', to='filer.Image')),
            ],
        ),
    ]
