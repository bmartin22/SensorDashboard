# Generated by Django 4.1 on 2022-08-30 22:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardApp', '0009_alert_userid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='alert',
            name='UserId',
        ),
    ]
