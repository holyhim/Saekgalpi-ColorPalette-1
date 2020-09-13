from django.contrib.auth.models import AbstractUser
from django.db import models


# 배열이 되는가?


class User(AbstractUser):

    """ custom user model"""

    signatureColor = models.CharField(default="", max_length=7)
    superhost = models.BooleanField(default=False)
