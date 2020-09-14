from django.contrib import admin
from . import models

# Register your models here.


@admin.register(models.Palette)
class PaletteAdmin(admin.ModelAdmin):

    pass
