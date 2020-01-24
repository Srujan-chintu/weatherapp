from django.db import models


# Create your models here.


class WeatherDetails(models.Model):
    today_date=models.TimeField()
    temp=models.FloatField()
    pressure=models.FloatField()
    humidity=models.FloatField()
