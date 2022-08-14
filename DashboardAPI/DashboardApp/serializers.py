from rest_framework import serializers
from DashboardApp.models import User,Sensor,Reading

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('UserId', 'UserForename', 'UserSurname', 'UserEmail', 'UserJoinDate')

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ('SensorId', 'SensorName', 'SensorLocation', 'SetupDate', 'UserId')

class ReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reading
        fields = ('ReadingId', 'Value', 'ReadTime', 'SensorId')