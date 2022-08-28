from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

from DashboardApp.models import AlertProfile, User, Sensor, Reading
from DashboardApp.serializers import UserSerializer, SensorSerializer, ReadingSerializer, AlertProfileSerializer

# Create your views here.
@csrf_exempt
def userApi(request, id=0):
    if request.method == 'GET':
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return JsonResponse(user_serializer.data, safe=False)

    elif request.method == 'POST':
        user_data=JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("User added successfully!", safe = False)
        return JsonResponse("Failed to add user", safe=False)

    elif request.method == 'PUT':
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
        return JsonResponse("Deleted user", safe=False)

@csrf_exempt
def sensorApi(request, id=0):
    if request.method == 'GET':
        sensors = Sensor.objects.filter(UserId_id=id)
        sensor_serializer = SensorSerializer(sensors, many=True)
        return JsonResponse(sensor_serializer.data, safe=False)

    elif request.method == 'POST':
        sensor_data = JSONParser().parse(request)
        sensor_serializer = SensorSerializer(data=sensor_data)
        if sensor_serializer.is_valid():
            sensor_serializer.save()
            return JsonResponse("Sensor added successfully!", safe = False)
        return JsonResponse("Failed to add sensor", safe=False)

    elif request.method == 'PUT':
        sensor_data  = JSONParser().parse(request)
        sensor = Sensor.objects.get(SensorId = sensor_data['SensorId'])
        sensor_serializer = SensorSerializer(sensor, data=sensor_data)
        if sensor_serializer.is_valid():
            sensor_serializer.save()
            return JsonResponse("Sensor updated successfully!", safe=False)
        return JsonResponse("Failed to update sensor", safe = False)

    elif request.method == 'DELETE':
        sensor=Sensor.objects.get(SensorId = id)
        sensor.delete()
        return JsonResponse("Deleted sensor", safe = False)

@csrf_exempt
def readingApi(request, id=0):
    if request.method == 'GET':
        if id==0:
            readings = Reading.objects.all()
        else:
            readings = Reading.objects.filter(SensorId_id=id)
        reading_serializer = ReadingSerializer(readings, many=True)
        return JsonResponse(reading_serializer.data, safe=False)

    elif request.method == 'POST':
        reading_data = JSONParser().parse(request)
        reading_serializer = ReadingSerializer(data=reading_data)
        if reading_serializer.is_valid():
            reading_serializer.save()
            return JsonResponse("Reading added successfully!", safe=False)
        return JsonResponse("Failed to add reading!", safe=False)

    elif request.method == 'PUT':
        reading_data = JSONParser.parse(request)
        reading = Reading.objects.get(id=reading_data['ReadingId'])
        reading_serializer = ReadingSerializer(reading, data = reading_data)
        if reading_serializer.isvalid():
            reading_serializer.save()
            return JsonResponse("Reading updated successfuly", safe=False)
        return JsonResponse("Failed to update reading!", safe=False)

    elif request.method == 'DELETE':
        reading=Reading.objects.get(ReadingId = id)
        reading.delete()
        return JsonResponse("Reading Deleted!", safe=False)


@csrf_exempt
def alertProfileApi(request, id=0):
    if request.method == 'GET':
        alertProfile = AlertProfile.objects.filter(AlertProfileId=id)
        alert_profile_serializer = AlertProfileSerializer(data=alertProfile)
        return JsonResponse(alert_profile_serializer.data, safe=False)

    elif request.method == 'POST':
        alert_profile_data = JSONParser().parse(request)
        alert_profile_serializer = AlertProfileSerializer(data=alert_profile_data)
        if alert_profile_serializer.is_valid():
            alert_profile_serializer.save()
            return JsonResponse("Alert Profile Added Successfully!", safe=False)
        return JsonResponse("Failed to add alert profile!", safe=False)

    elif request.method == 'PUT':
        alert_profile_data = JSONParser.parse(request)
        alertProfile = AlertProfile.objects.get(AlertProfileId = alert_profile_data['AlertProfileId'])
        alert_profile_serializer = AlertProfileSerializer(alertProfile, data=alert_profile_data)
        if alert_profile_serializer.is_valid():
            alert_profile_serializer.save()
            return JsonResponse("Alert profile updated successfully!", safe=False)
        return JsonResponse("Failed to update alert profile", safe=False)

    elif request.method == 'DELETE':
        alertProfile=AlertProfile.objects.get(AlertProfileId = id)
        alertProfile.delete()
        return JsonResponse("Deleted alert profile", safe=False)

