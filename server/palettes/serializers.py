from rest_framework import serializers
from .models import Palettes


class PaletteSerializer(serializers.ModelSerializer):
    colors = serializers.ListField()

    class Meta:
        model = Palettes
        fields = "__all__"
