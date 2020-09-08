# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PaletteSerializer
from rest_framework import status
from palettes.models import Palettes


class Palette_View(APIView):
    # test
    def get(self, request):
        palette_queryset = Palettes.objects.all()  # 모든 palette의 정보를 불러온다.
        palette_queryset_serializer = PaletteSerializer(palette_queryset, many=True)
        return Response(palette_queryset_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        palette_serializer = PaletteSerializer(
            data=request.data
        )  # Request의 data를 paletteSerializer로 변환

        if palette_serializer.is_valid():

            palette_serializer.save()  # paletteSerializer의 유효성 검사를 한 뒤 DB에 저장
            return Response(
                palette_serializer.data, status=status.HTTP_201_CREATED
            )  # client에게 JSON response 전달
        else:
            return Response(
                palette_serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )


# Create your views here.
# CRUD에 따라 처리
