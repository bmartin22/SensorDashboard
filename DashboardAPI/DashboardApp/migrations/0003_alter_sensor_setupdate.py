# Generated by Django 4.1 on 2022-08-23 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DashboardApp', '0002_alter_user_userjoindate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='SetupDate',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
