# Generated by Django 4.1 on 2022-08-24 22:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardApp', '0004_sensor_sensorunit'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reading',
            old_name='Value',
            new_name='ReadingValue',
        ),
    ]
