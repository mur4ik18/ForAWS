# -*- coding: utf-8 -*-

from django.dispatch import receiver
from django.db.models.signals import post_save

from orders import models


@receiver(post_save, sender=models.Order)
def post_save_order(sender, instance, created, **kwargs):
    previous_submitted = getattr(instance._state, 'submitted', False)
    if previous_submitted != instance.submitted and instance.submitted:
        instance.send_thank_you_email()
