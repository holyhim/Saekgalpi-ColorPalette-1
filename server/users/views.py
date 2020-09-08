# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

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
        return Response("users ok", status=200)
