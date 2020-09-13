from django.db import models
from django_mysql.models import ListCharField
from users import models as user_models


class Palettes(models.Model):
<<<<<<< HEAD
    id = models.CharField(max_length=7, primary_key=True)
    userId = models.CharField(max_length=255)
    paletteName = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
=======

    """ Palettes Model Definition """

    user_id = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    paletteName = models.CharField(max_length=256)
    description = models.TextField(default="")
>>>>>>> c1a71a7e472f5344396f9077bd1394de3707532f
    colors = ListCharField(
        base_field=models.CharField(max_length=256), size=256, max_length=(65791)
    )
<<<<<<< HEAD
    visit = models.CharField(max_length=255)

=======
    visit = models.IntegerField(default="0")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
>>>>>>> c1a71a7e472f5344396f9077bd1394de3707532f

    def __str__(self):
        return self.paletteName
