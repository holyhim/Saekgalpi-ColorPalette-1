from django.db import models
from django_mysql.models import ListCharField
from users import models as user_models
from django.core.exceptions import ValidationError


def validate_palette_Name(value):
    if len(value) > 20:
        raise ValidationError("팔레트 이름을 20 글자 이하로 설정해 주세요.")
    else:
        return value


def validate_palette_Description(value):
    if len(value) < 3:
        raise ValidationError("팔레트 설명을 3 글자 이상으로 설정해 주세요.")
    else:
        return value


class Palettes(models.Model):

    """ Palettes Model Definition """

    user_id = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    paletteName = models.CharField(max_length=256, validators=[validate_palette_Name])
    description = models.TextField(
        default="", validators=[validate_palette_Description]
    )
    colors = ListCharField(
        base_field=models.CharField(max_length=10), size=7, max_length=(7 * 11)
    )
    visit = models.IntegerField(default="0")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.paletteName
