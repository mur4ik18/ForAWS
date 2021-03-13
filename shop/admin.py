from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from mptt.forms import TreeNodeChoiceField
from suit.admin import SortableTabularInline

from shop import models


@admin.register(models.Category)
class CategoryAdmin(MPTTModelAdmin):
    list_display = ('parent', 'name')
    mptt_indent_field = 'name'


@admin.register(models.Color)
class ColorAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Size)
class SizeAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Designer)
class DesignerAdmin(admin.ModelAdmin):
    pass


class StockInline(SortableTabularInline):
    model = models.Stock
    extra = 0
    sortable = 'order'


class ImageInline(SortableTabularInline):
    model = models.Image
    extra = 0
    sortable = 'order'


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'designer',)
    list_filter = ('category', 'designer')
    search_fields = ['name']

    inlines = [StockInline, ImageInline]

    def formfield_for_foreignkey(self, db_field, request=None, **kwargs):
        db = kwargs.get('using')
        if db_field.name == 'category':
            if 'queryset' not in kwargs:
                queryset = self.get_field_queryset(db, db_field, request)
                if queryset is not None:
                    kwargs['queryset'] = queryset
            return TreeNodeChoiceField(**kwargs)
        return super(ProductAdmin, self).formfield_for_foreignkey(
            db_field, request, **kwargs)


@admin.register(models.Stock)
class StockAdmin(admin.ModelAdmin):
    list_display = ('product', 'image', 'size', 'color', 'quantity')


@admin.register(models.Voucher)
class VoucherAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'code', 'get_discount_type_display', 'amount',
        'start_date', 'end_date'
    )
