# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import authorize

from django.conf import settings
from django.db import models
from django.utils.timezone import now
from django.core.mail import send_mail
from django.template.loader import render_to_string

from users.models import User
from shop.models import Product, Stock, Voucher
from mofa.utils import config_authorize


class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', null=True, blank=True,
                             default=None)

    voucher = models.ForeignKey(Voucher, null=True, blank=True, default=None)
    discount = models.FloatField(default=0)

    # updates when submitting order
    subtotal = models.FloatField(default=0)
    total = models.FloatField(default=0)
    tax = models.FloatField(default=0)
    shipping = models.FloatField(default=0)

    trans_id = models.CharField(max_length=50,
                                null=True, blank=True, default=None)
    paid = models.BooleanField(default=False)
    shipped = models.BooleanField(default=False)

    submitted = models.BooleanField(default=False)
    submit_date = models.DateTimeField(default=None, null=True, blank=True)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    shipping_full_name = models.CharField(null=True, blank=True, max_length=150)
    shipping_address = models.CharField(null=True, blank=True, max_length=150)
    shipping_city = models.CharField(null=True, blank=True, max_length=50)
    shipping_state = models.CharField(null=True, blank=True, max_length=50)
    shipping_zip = models.CharField(null=True, blank=True, max_length=50)
    shipping_country = models.CharField(null=True, blank=True, max_length=50)
    shipping_method = models.CharField(null=True, blank=True, max_length=50)

    bill_as_shipping = models.BooleanField(default=False)

    billing_full_name = models.CharField(
        max_length=150,
        blank=True, null=True, default=None)
    billing_address = models.CharField(
        max_length=150,
        blank=True, null=True, default=None)
    billing_city = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    billing_state = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    billing_zip = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    billing_country = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    @classmethod
    def from_db(cls, db, field_names, values):
        new = super(Order, cls).from_db(db, field_names, values)
        new._state.submitted = new.submitted
        return new

    def submit(self, data):
        config_authorize()

        card_number = data.get('card_number', '')
        card_month = data.get('card_month', '')
        card_year = data.get('card_year', '')
        card_cvv = data.get('card_cvv', '')

        subtotal = 0
        for item in self.items.all():
            subtotal += item.quantity * item.product.price
        self.subtotal = subtotal
        self.total = subtotal
        self.discount = self.get_calculated_discount()

        payment_data = {
            'email': self.user.email,
            'credit_card': {
                'card_number': card_number,
                'card_code': str(card_cvv),
                'expiration_date': '{0:02}/{1}'.format(card_month, card_year)
            },
            'shipping': {
                'first_name': self.get_shipping_first_name(),
                'last_name': self.get_shipping_last_name(),
                'address': self.shipping_address,
                'city': self.shipping_city,
                'state': self.shipping_state,
                'zip': self.shipping_zip,
                'country': 'US'
            },
            'billing': {
                'first_name': self.get_billing_first_name(),
                'last_name': self.get_billing_last_name(),
                'address': self.billing_address,
                'city': self.billing_city,
                'state': self.billing_state,
                'zip': self.billing_zip,
                'country': 'US'
            },
            'tax': {
                'amount': self.get_calculated_tax(),
                'name': 'Tax name',
                'description': 'Tax description'
            },
            'shipping_and_handling': {
                'amount': self.get_calculated_shipping(),
                'name': self.shipping_method
            }
        }
        # add amount last in order to include everything
        payment_data['amount'] = self.total

        try:
            result = authorize.Transaction.sale(payment_data)
        except authorize.AuthorizeInvalidError as e:
            print('Error', e)
            return False, str(e)
        except authorize.AuthorizeResponseError as e:
            print('Error', e)
            return False, str(e)

        self.trans_id = result.transaction_response.trans_id
        self.paid = True
        self.submitted = True
        self.submit_date = now()
        self.save()

        return True, None

    def get_calculated_tax(self):
        if self.submitted:
            return self.tax
        self.tax = settings.TAX_VALUE * self.total / 100
        self.total += self.tax
        return self.tax

    def get_calculated_shipping(self):
        if self.submitted:
            return self.shipping

        self.shipping = 10
        if 'FREE' in self.shipping_method.lower():
            self.shipping = 0
        self.total += self.shipping
        return self.shipping

    def get_calculated_discount(self):
        if self.submitted:
            return self.discount
        self.discount = 0

        if self.voucher:
            self.discount = self.voucher.get_total_for_order(self)

        self.total -= self.discount
        return self.discount

    def get_shipping_first_name(self):
        return self.shipping_full_name.split(' ')[0]

    def get_shipping_last_name(self):
        if ' ' in self.shipping_full_name:
            return self.shipping_full_name.split(' ')[1]
        return ''

    def get_billing_first_name(self):
        return self.billing_full_name.split(' ')[0]

    def get_billing_last_name(self):
        if ' ' in self.billing_full_name:
            return self.billing_full_name.split(' ')[1]
        return ''

    def update_data_from_user(self):
        if not self.user:
            return
        self.shipping_full_name = self.user.shipping_full_name
        self.shipping_address = self.user.shipping_address
        self.shipping_city = self.user.shipping_city
        self.shipping_state = self.user.shipping_state
        self.shipping_zip = self.user.shipping_zip
        self.shipping_country = self.user.shipping_zip

        self.billing_full_name = self.user.billing_full_name
        self.billing_address = self.user.billing_address
        self.billing_city = self.user.billing_city
        self.billing_state = self.user.billing_state
        self.billing_zip = self.user.billing_zip
        self.billing_country = self.user.billing_zip

    def send_thank_you_email(self):
        to = [self.user.email]
        from_email = settings.DEFAULT_FROM_EMAIL
        subject = '[MOFA] Thank you for your order: #{}'.format(self.pk)
        body = render_to_string("emails/thank_you.html", context={'order': self})

        return send_mail(subject, body, from_email, to)

    def send_shipped_email(self):
        to = [self.user.email]
        from_email = settings.DEFAULT_FROM_EMAIL
        subject = '[MOFA] Your order number #{} has been shipped'.format(self.pk)
        body = render_to_string("emails/shipped.html", context={'order': self})

        return send_mail(subject, body, from_email, to)

    def ship(self):
        self.shipped = True
        self.save()

        self.send_shipped_email()


class Item(models.Model):
    order = models.ForeignKey(Order, related_name='items')
    product = models.ForeignKey(Product, related_name='items+')
    stock = models.ForeignKey(Stock, related_name='items+')

    quantity = models.PositiveIntegerField(default=1)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (
            ('order', 'stock'),
        )
