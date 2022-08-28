from collections import UserDict
from django.db import models
from django.utils.timezone import now

# Create your models here.


class Sensor(models.Model):
    SensorId = models.AutoField(primary_key=True)
    SensorName = models.CharField(max_length=100)
    SensorLocation = models.CharField(max_length=100, null=True)
    SensorUnit = models.CharField(max_length=20, null=True)
    SetupDate = models.DateField(auto_now_add=True, null=True)
    UserId = models.ForeignKey('User', on_delete=models.SET_NULL, null=True)
    AlertProfileId = models.ForeignKey('AlertProfile', on_delete=models.SET_NULL, null=True)

class User(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserForename = models.CharField(max_length=100, null=True)
    UserSurname = models.CharField(max_length=100, null=True)
    UserEmail = models.CharField(max_length=100)
    UserJoinDate =  models.DateField(auto_now_add=True, null=True)
    
class Reading(models.Model):
    ReadingId = models.AutoField(primary_key=True)
    SensorId = models.ForeignKey('Sensor',on_delete=models.SET_NULL, null=True)
    ReadingValue = models.DecimalField(max_digits=10, decimal_places=4)
    ReadTime = models.DateTimeField(auto_now_add=True, null=False)

class AlertProfile(models.Model):
    AlertProfileId = models.AutoField(primary_key=True)
    AlertProfileName = models.CharField(max_length=100, null=True)
    HighThreshold = models.DecimalField(max_digits=10, decimal_places=4, null=True)
    TargetValue = models.DecimalField(max_digits=10, decimal_places=4, null=True)
    LowThreshold = models.DecimalField(max_digits=10, decimal_places=4, null=True)
    AlertEmail = models.CharField(max_length=100, null=True)

class Alert(models.Model):
    AlertId = models.AutoField(primary_key=True)
    AlertReading = models.DecimalField(max_digits=10, decimal_places=4)
    UserSurname = models.CharField(max_length=100, null=True)
    SensorId = models.ForeignKey('Sensor', on_delete=models.SET_NULL, null=True)
    AlertTime = models.DateTimeField(auto_now_add=True, null=False)
