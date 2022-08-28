from rest_framework import serializers
from DashboardApp.models import AlertProfile, User, Sensor, Reading

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('UserId', 'UserForename', 'UserSurname', 'UserEmail', 'UserJoinDate')

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ('SensorId', 'SensorName', 'SensorLocation', 'SensorUnit', 'SetupDate', 'UserId', 'AlertProfileId')

class ReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reading
        fields = ('ReadingId', 'ReadingValue', 'ReadTime' , 'SensorId')

class AlertProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlertProfile
        fields = ('AlertProfileId', 'HighThreshold', 'TargetValue', 'LowThreshold', 'AlertEmail')


