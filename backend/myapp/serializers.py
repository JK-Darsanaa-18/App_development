from rest_framework import serializers
from .models import Login, StaffDetails, ShiftForm

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = '__all__'

class StaffDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffDetails
        fields = '__all__'

class ShiftFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShiftForm
        fields = '__all__'
