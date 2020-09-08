from django.db import models
from django_mysql.models import ListCharField


class Palettes(models.Model):
    name = models.CharField(max_length=7)
    colors = ListCharField(
        base_field=models.CharField(max_length=7), size=7, max_length=(7 * 11)
    )


# Create your models here.
# CharField, Model
