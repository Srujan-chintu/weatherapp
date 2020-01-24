from rest_framework import serializers
from .models import *

class WeatherDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherDetails
        fields = ['today_date', 'temp', 'pressure', 'humidity']