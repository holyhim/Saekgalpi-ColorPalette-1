from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parser import JSONparser
from .serializers import UserSerializer
from .models import User

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


class UserPost(APIView):
    def post(self, request):
        if request.method == "POST":
            data = JSONparser().parse(request)
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            else:
                return Response(serializer.errors, status=status.HTTP_404_BAD_REQUEST)
