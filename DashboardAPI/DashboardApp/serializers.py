from rest_framework import serializers
from DashboardApp.models import Alert, AlertProfile, User, Sensor, Reading

#adpated from https://github.com/ArtOfEngineer/PythonDjangoAngular10/blob/master/DjangoAPI/EmployeeApp/serializers.py
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
        fields = ('AlertProfileId', 'AlertProfileName', 'HighThreshold', 'TargetValue', 'LowThreshold', 'AlertEmail')

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = ('AlertId','AlertReading','UserSurname','SensorId','AlertTime')
