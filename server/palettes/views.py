# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PaletteSerializer
from rest_framework import status, generics
from palettes.models import Palette


class Palette_Search_View(generics.ListAPIView):
    serializer_class = PaletteSerializer

    def get_queryset(self):
        queryset = Palette.objects.all()
        paletteName = self.request.query_params.get("paletteName", None)
        if paletteName is not None:
            queryset = queryset.filter(palette__paletteName=paletteName)
        return queryset


class Palette_List_BrandNew_View(APIView):
    """ 생성순으로 4개의 팔레트 정보를 불러옴 """

    def get(self, request):
        palette_queryset = Palette.objects.order_by("-created_at")[:4]
        palette_queryset_serializer = PaletteSerializer(palette_queryset, many=True)
        return Response(palette_queryset_serializer.data, status=status.HTTP_200_OK)


class Palette_List_Popularity_View(APIView):
    """ 인기순(방문자 순서)으로 16개의 팔레트의 정보를 불러옴 """

    def get(self, request):
        palette_queryset = Palette.objects.all().order_by("-visit")[:16]
        palette_queryset_serializer = PaletteSerializer(palette_queryset, many=True)
        return Response(palette_queryset_serializer.data, status=status.HTTP_200_OK)


class Palette_Info_View(APIView):
    """ 특정한(id) 팔레트의 정보를 불러옴 """

    def get(self, request, id):
        palette_queryset = Palette.objects.filter(id=id)
        palette_queryset_serializer = PaletteSerializer(palette_queryset, many=True)
        return Response(palette_queryset_serializer.data, status=status.HTTP_200_OK)


class Palette_View(APIView):
    def get(self, request):

        """ 모든 팔레트의 정보를 불러옴 """

        palette_queryset = Palette.objects.all()
        palette_queryset_serializer = PaletteSerializer(palette_queryset, many=True)
        return Response(palette_queryset_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):

        """ 팔레트를 생성함 """

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
