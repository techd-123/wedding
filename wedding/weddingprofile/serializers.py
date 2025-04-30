# weddingprofile/serializers.py
from rest_framework import serializers
from .models import WeddingProfile
from accounts.models import CustomUser

class WeddingProfileSerializer(serializers.ModelSerializer):
    partner_details = serializers.SerializerMethodField()
    can_edit = serializers.SerializerMethodField()

    class Meta:
        model = WeddingProfile
        fields = [
            'id', 'owner', 'partner', 'bride', 'groom', 'religion', 'caste',
            'wedding_date', 'engagement_date', 'reception_date',
            'wedding_venue', 'engagement_venue', 'reception_venue',
            'partner_can_edit', 'created_at', 'updated_at',
            'partner_details', 'can_edit'  # Make sure these are included
        ]
        read_only_fields = ('owner', 'created_at', 'updated_at')

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