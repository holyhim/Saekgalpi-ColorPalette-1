from django.urls import path
from . import views

app_name = "users"
urlpatterns = [
    # User에 관한 API를 처리하는 View로 Request를 넘김
    path("", views.UserView.as_view()),
    path("post/", views.SignUp, name="post"),
]
