from django.contrib import admin
from . import models

# Register your models here.


@admin.register(models.Palettes)
class PaletteAdmin(admin.ModelAdmin):

    pass
