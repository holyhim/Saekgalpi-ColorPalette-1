from django.contrib.auth.models import AbstractUser
from django.db import models


# 배열이 되는가? 된다 200 ok


class User(AbstractUser):
    user_id = models.CharField(max_length=255, primary_key=True)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=11)
    userName = models.CharField(max_length=100)
    signatureColor = models.CharField(max_length=7)
