# Generated by Django 4.1 on 2022-08-26 22:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardApp', '0006_alertprofile_sensor_alertprofileid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Alert',
            fields=[
                ('AlertId', models.AutoField(primary_key=True, serialize=False)),
                ('AlertReading', models.DecimalField(decimal_places=4, max_digits=10)),
                ('UserSurname', models.CharField(max_length=100, null=True)),
                ('AlertTime', models.DateTimeField(auto_now_add=True)),
                ('SensorId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='DashboardApp.sensor')),
            ],
        ),
    ]