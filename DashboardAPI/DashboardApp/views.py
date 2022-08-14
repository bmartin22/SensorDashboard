from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from DashboardApp.models import User, Sensor, Reading
from DashboardApp.serializers import UserSerializer, SensorSerializer, ReadingSerializer

# Create your views here.

def userApi(request, id=0):
    if request.method == 'GET':
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)

    elif request.method == 'POST':
        user_data=JSONParser().parse()
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("User added successfully!", safe = False)
        return JsonResponse("Failed to add user", safe=False)

    elif requst.method == 'PUT':
        user_data = JSONParser().parse(request)
        user=User.objects.get(UserId = user_data['UserId'])
        user_serializer=UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("User updated successfully!", safe=False)
        return JsonResponse("Failed to update user", safe=False)

    elif request.method == 'DELETE':
        user=User.objects.get(UserId=id)
        user.delete()
        return JsonResponse("Deleted", safe=False)

def sensorApi(request, id=0):
    if request.method == 'GET':

    elif request.method == 'POST':

    elif requst.method == 'PUT':

    elif request.method == 'DELETE':


def readingApi(request, id=0):
    if request.method == 'GET':

    elif request.method == 'POST':

    elif requst.method == 'PUT':

    elif request.method == 'DELETE':

