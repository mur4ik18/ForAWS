# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from datetime import timedelta

from django.template import Library
from django.utils.timezone import now

from mofa.models import BackgroundTiming

register = Library()


@register.assignment_tag()
def get_current_bg():
    tod = (now() + timedelta(hours=1)).time()
    bg = BackgroundTiming.objects.filter(
        time_of_day__lte=tod).order_by('-time_of_day').first()
    if bg:
        return bg
    return None
