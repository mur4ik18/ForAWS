# -*- coding: utf-8 -*-
from django.db import models
from django.db.models import Sum, F
from django.utils.timezone import now

from mptt.models import MPTTModel, TreeForeignKey
from paintstore.fields import ColorPickerField
from ckeditor.fields import RichTextField
from filer.fields.image import FilerImageField
from taggit.managers import TaggableManager


class Category(MPTTModel):
    ICONS = (
        ('women', 'Women'),
        ('men', 'Men'),
        ('bottoms', 'Bottoms'),
        ('tops', 'Tops'),
        ('dresses', 'Dresses'),
        ('jumpsuits', 'Jumpsuits')
    )
    parent = TreeForeignKey('self', null=True, blank=True,
                            related_name='children', db_index=True)

    name = models.CharField(max_length=50)
    icon = models.CharField(max_length=50, choices=ICONS)

    order = models.SmallIntegerField(default=0)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    class MPTTMeta:
        order_insertion_by = ['order']

    def __str__(self):
        return self.name


class Color(models.Model):
    name = models.CharField(max_length=50)
    color = ColorPickerField()

    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Designer(models.Model):
    name = models.CharField(max_length=50)
    icon = FilerImageField(null=True, blank=True, default=None,
                           on_delete=models.SET_NULL)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=150, db_index=True)

    category = models.ForeignKey(Category, related_name='products')
    designer = models.ForeignKey(Designer, related_name='products')

    short_description = models.TextField(null=True, blank=True)

    description = RichTextField(null=True, blank=True)

    price = models.FloatField(default=0)

    tags = TaggableManager()

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Stock(models.Model):
    product = models.ForeignKey(Product, related_name='stocks')
    image = FilerImageField(null=True, blank=True, on_delete=models.SET_NULL)
    color = models.ForeignKey(Color, related_name='stocks+')
    size = models.ForeignKey(Size, related_name='stocks+')

    quantity = models.PositiveIntegerField(
        default=0,
        help_text='Avaialbe number of products')

    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = 'stock'
        verbose_name_plural = 'stock'
        unique_together = (
            ('product', 'color', 'size'),
        )

    def __str__(self):
        return "{} {} ({} {})".format(
            self.quantity,
            self.product,
            self.color,
            self.size)

    @property
    def price(self):
        return self.quantity * self.product.price


class Image(models.Model):
    product = models.ForeignKey(Product, related_name='images')
    image = FilerImageField()

    order = models.PositiveIntegerField(default=0)


class VoucherManager(models.Manager):

    def get_available_coupon(self, coupon):
        today = now().date()
        try:
            return self.get(code=coupon.upper(),
                            start_date__lte=today,
                            end_date__gte=today)
        except Voucher.DoesNotExist:
            return False
        return False


class Voucher(models.Model):
    DISCOUNT_TYPES = (
        (0, 'Amount'),
        (1, 'Percent')
    )

    category = models.ForeignKey(Category, null=True, blank=True, default=None)

    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10)
    discount_type = models.PositiveSmallIntegerField(choices=DISCOUNT_TYPES)
    amount = models.FloatField(default=0)

    start_date = models.DateField()
    end_date = models.DateField()

    objects = VoucherManager()

    def save(self, *args, **kwargs):
        if self.code:
            self.code = self.code.upper()
        super(Voucher, self).save(*args, **kwargs)

    def apply(self, order):
        '''
        Add this voucher to the order.
        '''
        order.voucher = self
        order.save()

        return order

    def get_categories_ids(self):
        return self.category.get_descendants(include_self=True).values_list('pk', flat=True)

    def get_total_for_order(self, order):
        '''
        Calculate.
        '''
        # Find products to which the voucher applies.
        # get total value of those products
        total = order.items.filter(
            product__category__in=self.get_categories_ids()).aggregate(
            total=Sum(F('quantity') * F('product__price'), output_field=models.FloatField()))
        total = total['total']
        if not total:
            return 0
        if self.discount_type == 0:
            if total < self.amount:
                return total
            return self.amount
        elif self.discount_type == 1:
            return total * self.amount / 100
        return 0

    def check_order(self, order):
        '''
        Check if the category applies to any of the items.
        '''
        return order.items.filter(
            product__category__in=self.get_categories_ids()).exists()
