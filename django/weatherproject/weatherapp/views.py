from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WeatherDetailsSerializer
from .models import WeatherDetails

# Create your views here.


class WeatherDetailsViewSet(viewsets.ModelViewSet):
    queryset = WeatherDetails.objects.all()
    serializer_class = WeatherDetailsSerializer