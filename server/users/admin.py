from django.contrib import admin
from . import models

# Register your models here.
# users folder에 admin?


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    pass
