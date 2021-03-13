# -*- coding: utf-8 -*-
import os.path
from django.utils.timezone import now

from django.db import models
from django.core.exceptions import ValidationError
from filer.fields.image import FilerImageField
from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField
from image_cropping import ImageRatioField


CATEGORIES = (
    ('read', 'read'),
    ('see', 'see'),
    ('listen', 'listen'),
    ('watch', 'watch')
)
SUBCATEGORIES = (
    ('science', 'science'),
    ('food', 'food'),
    ('human', 'human'),
    ('spirit', 'spirit'),
    ('nature', 'nature'),
    ('tech', 'tech'),
    # ('whateve', 'whateve'),
)


def validate_audio_format(value):
    if hasattr(value.file, 'content_type') and \
            not value.file.content_type.startswith('audio/'):
        raise ValidationError("Invalid file format.")


class ArticleManager(models.Manager):

    def published(self):
        return self.filter(published=True).order_by('-created')


class Article(models.Model):
    category = models.CharField(max_length=15, choices=CATEGORIES)
    subcategory = models.CharField(max_length=15, choices=SUBCATEGORIES)

    title = models.CharField(max_length=250)

    image = models.ImageField(upload_to='galleries/%Y/%m/%d/',
                              null=True, blank=True, default=None)
    cropping = ImageRatioField('image', '600x300', free_crop=True)

    video = models.CharField(max_length=250, null=True, blank=True, default=None)
    # todo validate audio files
    audio = models.FileField(null=True, blank=True, validators=[validate_audio_format],
                             help_text="For full browser support upload only .mp3 audio formats.")
    caption = models.CharField(max_length=250, default=None, null=True, blank=True)
    short_description = RichTextField(null=True, blank=True)
    content = RichTextField(null=True, blank=True)
    embedded_image = FilerImageField(default=None, null=True, blank=True)

    published = models.BooleanField(default=False)

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    tags = TaggableManager()

    objects = ArticleManager()

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title

    def __unicode__(self):
        return unicode('%s, %s, %s, %s, %s' % (self.category, self.subcategory, self.title, self.image, self.video))


class Media(models.Model):
    TYPES = (
        ('video', 'Video'),
        ('audio', 'Audio'),
        ('image', 'Image')
    )

    article = models.ForeignKey(Article, related_name='media')

    type = models.CharField(max_length=10, choices=TYPES)
    link = models.CharField(max_length=500, default=None, null=True, blank=True)
    file = models.FileField(upload_to='articles/%Y/%m/%d/', default=None,
                            null=True, blank=True,
                            help_text="For full browser support upload only .mp3 audio formats.")

    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        if self.type == 'video':
            return 'Video: {}'.format(self.link)
        else:
	    return "File: "
            # return "{}: {}".format(self.get_type_display(),
            #                        os.path.basename(self.file.name))
