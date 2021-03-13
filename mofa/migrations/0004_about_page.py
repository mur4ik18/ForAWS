# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


def about_page(apps, schema_editor):
    db_alias = schema_editor.connection.alias
    Page = apps.get_model('mofa', 'Page')
    Page.objects.using(db_alias).create(
        name='about',
        title='About Mofa')


class Migration(migrations.Migration):

    dependencies = [
        ('mofa', '0003_auto_20150702_0517'),
    ]

    operations = [
        migrations.RunPython(about_page)
    ]
