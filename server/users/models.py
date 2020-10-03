from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.exceptions import ValidationError


def validate_user_Name(value):
    if len(value) > 13:
        raise ValidationError("이름을 13 글자 이하로 설정해 주세요")
    else:
        return value


class User(AbstractUser):

    """ custom user model"""

    signatureColor = models.CharField(default="", max_length=7)
    superhost = models.BooleanField(default=False)

    def __str__(self):
        return self.username
