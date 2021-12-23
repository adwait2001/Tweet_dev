from django import forms
from django.contrib.auth import get_user_model
from django.forms import fields

from .models import Profile

User=get_user_model()

class UserProfileForm(forms.ModelForm):
    location=forms.CharField(required=False)
    bio=forms.CharField(required=False)
    image=forms.FileField(required=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class ProfileForm(forms.ModelForm):
    first_name=forms.CharField(required=False)
    last_name=forms.CharField(required=False)
    email=forms.CharField(required=False)
    class Meta:
        model = Profile
        fields = ['location', 'bio','skills','job_Profile','image']
