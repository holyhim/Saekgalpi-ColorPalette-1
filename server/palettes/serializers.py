from rest_framework import serializers
from .models import Palette


class PaletteSerializer(serializers.ModelSerializer):
    colors = serializers.ListField()

    class Meta:
        model = Palette
        fields = "__all__"
