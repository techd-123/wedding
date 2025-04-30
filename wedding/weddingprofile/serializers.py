from rest_framework import serializers
from .models import WeddingProfile
from accounts.models import CustomUser
from django.utils import timezone
from datetime import date

class WeddingProfileSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(read_only=True)
    partner = serializers.PrimaryKeyRelatedField(
        queryset=CustomUser.objects.all(),
        required=False,
        allow_null=True
    )
    partner_details = serializers.SerializerMethodField()
    can_edit = serializers.SerializerMethodField()

    class Meta:
        model = WeddingProfile
        fields = [
            'id', 'owner', 'partner', 'bride', 'groom', 'religion', 'caste',
            'wedding_date', 'engagement_date', 'reception_date',
            'wedding_venue', 'engagement_venue', 'reception_venue',
            'partner_can_edit'
        ]
        extra_kwargs = {
            'engagement_date': {'required': False, 'allow_null': True},
            'reception_date': {'required': False, 'allow_null': True},
            'engagement_venue': {'required': False, 'allow_null': True},
            'reception_venue': {'required': False, 'allow_null': True},
            'partner': {'required': False, 'allow_null': True},
        }

    def get_partner_details(self, obj):
        if obj.partner:
            return {
                'id': obj.partner.id,
                'email': obj.partner.email,
                'phone': obj.partner.phone_number
            }
        return None

    def get_can_edit(self, obj):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            user = request.user
            return user == obj.owner or (user == obj.partner and obj.partner_can_edit)
        return False

    