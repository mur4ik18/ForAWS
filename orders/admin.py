from django.contrib import admin

from orders import models


class ItemInline(admin.TabularInline):
    model = models.Item
    extra = 0


def mark_shipped(modeladmin, request, queryset):
    for order in queryset.filter(paid=True, submitted=True):
        order.ship()
mark_shipped.short_description = 'Mark order as shipped (only paid orders)'


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'subtotal',
        'total',
        'tax',
        'trans_id',
        'paid',
        'updated'
    )
    inlines = [ItemInline]
    actions = [mark_shipped]

    def get_queryset(self, request):
        return super(OrderAdmin, self).get_queryset(request).filter(submitted=True)
