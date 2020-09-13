from django.db import models
from django_mysql.models import ListCharField
from users import models as user_models


class Palettes(models.Model):

    """ Palettes Model Definition """

    user_id = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    paletteName = models.CharField(max_length=256)
    description = models.TextField(default="")
    colors = ListCharField(
        base_field=models.CharField(max_length=10), size=6, max_length=(6 * 11)
    )
    visit = models.IntegerField(default="0")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.paletteName
