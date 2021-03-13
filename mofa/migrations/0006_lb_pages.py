# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


def lb_pages(apps, schema_editor):
    db_alias = schema_editor.connection.alias
    Page = apps.get_model('mofa', 'Page')
    Page.objects.using(db_alias).bulk_create([
        Page(name='terms-of-use', title='Terms of Use'),
        Page(name='delivery-shipping', title='Delivery & Shipping'),
        Page(name='returns-exchange', title='Returns & Exchange')
    ])


class Migration(migrations.Migration):

    dependencies = [
        ('mofa', '0005_subscriber'),
    ]

    operations = [
        migrations.RunPython(lb_pages)
    ]
