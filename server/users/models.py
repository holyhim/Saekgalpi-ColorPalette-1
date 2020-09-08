from django.contrib.auth.models import AbstractUser
from django.db import models


# 배열이 되는가?


class User(AbstractUser):
    id = models.CharField()
    email = models.CharField()
    password = models.CharField()
    userName = models.CharField()
    signatureColor = models.CharField()
