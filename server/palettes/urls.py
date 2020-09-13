from django.urls import path
from . import views


app_name = "palettes"
urlpatterns = [
    # User에 관한 API를 처리하는 View로 Request를 넘김
    path("", views.Palette_View.as_view()),
    path("<int:id>/", views.Palette_Info_View.as_view(), name="id"),
]
