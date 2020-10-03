from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer
from .models import User
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.shortcuts import render, redirect

# Create your views here.
# CRUD에 따라 처리
"""
C : SignUp
R : SignIn, userInfo
U : Edit userinfo
D : Withdraw
"""


class UserView(APIView):
    # test
    def get(self, request):
        if request.method == "GET":
            return Response("users ok", status=200)


class Edit_Password(APIView):
    def post(self, request):
        if request.method == "POST":
            form = PasswordChangeForm(request.user)
            if form.is_valid():
                user = form.save()
                update_session_auth_hash(request, user)
                User.success(request, "비밀번호가 변경이 되었습니다.")
                return redirect("change_password")
            else:
                User.error(request, "Please correct the error below.")
        else:
            form = PasswordChangeForm(request.user)
        return render(request, "accounts/change_password.html", {"form": form})
        # serializer로 변환해야 함


class SignUp(APIView):
    def post(self, request):
        if request.method == "POST":
            data = JSONParser().parse(request)
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            else:
                return Response(serializer.errors, status=status.HTTP_404_BAD_REQUEST)
