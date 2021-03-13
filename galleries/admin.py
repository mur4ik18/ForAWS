from django.contrib import admin
from image_cropping import ImageCroppingMixin
from suit.admin import SortableTabularInline

from galleries.models import Article, Media
from filer.fields.image import FilerImageField

class MediaTabluarInline(SortableTabularInline):
    model = Media
    extra = 1
    sortable = 'order'


@admin.register(Article)
class ArticleAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('title', 'category', 'subcategory', 'published', 'updated', 'created')
    list_filter = ('category', 'subcategory')

    inlines = [MediaTabluarInline]

    search_fields = ('title',)
    save_as = True

    date_hierarchy = 'created'

    class Media:
        js = ('js/admin/galleries_article.js',)
