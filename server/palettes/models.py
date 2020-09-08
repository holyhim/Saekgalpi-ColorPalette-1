from django.db import models

from django_mysql.models import ListCharField


class Palettes(models.Model):
    id = models.CharField(max_length=7)
    userId = models.CharField()
    paletteName = models.CharField()
    description = models.CharField()
    colors = ListCharField(
        base_field=models.CharField(max_length=7), size=7, max_length=(7 * 11)
    )
    visit = models.CharField()


# Create your models here.
# CharField, Model
