from django.db import models
from django_mysql.models import ListCharField


class Palettes(models.Model):
    id = models.CharField(max_length=7, primary_key=True)
    userId = models.CharField(max_length=255)
    paletteName = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    colors = ListCharField(
        base_field=models.CharField(max_length=7), size=7, max_length=(7 * 11)
    )
    visit = models.CharField(max_length=255)


# Create your models here.
# CharField, Model
