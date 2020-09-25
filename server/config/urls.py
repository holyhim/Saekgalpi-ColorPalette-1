"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework_jwt.views import (
    obtain_jwt_token,
    verify_jwt_token,
    refresh_jwt_token,
)

urlpatterns = [
    path("admin/", admin.site.urls),
    # django-apps urls
    path("users/", include("users.urls"), name="users"),
    path("palettes/", include("palettes.urls"), name="palettes"),
    # django-restframework urls
    path("api-auth/", include("rest_framework.urls")),
    # django-rest-auth urls
    path("rest-auth/", include("rest_auth.urls")),
    path("rest-auth/registration/", include("rest_auth.registration.urls")),
    # jwt urls
    path("jwt-auth/", obtain_jwt_token),  # jwt 발행
    path("jwt-valid/", verify_jwt_token),  # jwt 유효성 검사
    path("jwt-renewal/", refresh_jwt_token),  # jwt 갱신
]
