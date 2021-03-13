import os.path

from django.db import models
from django.utils.timezone import now
from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField


EVENT_DATETIME_FORMAT = '%d %B %y - %I:%M %p'


class Event(models.Model):
    title = models.CharField(max_length=100)
    caption = models.CharField(max_length=250)

    location = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    content = RichTextField()

    datetime = models.DateTimeField(default=now)

    tags = TaggableManager()

    class Meta:
        ordering = ['datetime']

    def __str__(self):
        return "{} ({})".format(self.title,
                                self.datetime.strftime(EVENT_DATETIME_FORMAT))


class Media(models.Model):
    TYPES = (
        ('video', 'Video'),
        ('audio', 'Audio'),
        ('image', 'Image')
    )

    event = models.ForeignKey(Event, related_name='media')

    type = models.CharField(max_length=10, choices=TYPES)
    link = models.CharField(max_length=500, default=None, null=True, blank=True)
    file = models.FileField(upload_to='events/%Y/%m/%d/', default=None,
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

