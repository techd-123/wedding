from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser, OTP
from django.utils import timezone
from datetime import timedelta
from django.conf import settings

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone_number', 'password']
        extra_kwargs = {
            'email': {'required': False},
            'phone_number': {'required': False}
        }
    
    def validate(self, data):
        if not data.get('email') and not data.get('phone_number'):
            raise serializers.ValidationError("Either email or phone number must be provided")
        return data
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class OTPVerifySerializer(serializers.Serializer):
    email_or_phone = serializers.CharField()
    otp = serializers.CharField(max_length=6)
    otp_type = serializers.ChoiceField(choices=[('email', 'Email'), ('phone', 'Phone')])

class ResendOTPSerializer(serializers.Serializer):
    email_or_phone = serializers.CharField()
    otp_type = serializers.ChoiceField(choices=[('email', 'Email'), ('phone', 'Phone')])

class LoginSerializer(serializers.Serializer):
    email_or_phone = serializers.CharField()
    password = serializers.CharField()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'phone_number', 
                  'is_email_verified', 'is_phone_verified', 'is_active']