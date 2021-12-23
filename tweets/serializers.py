from rest_framework import serializers

from .models import Tweets
from drf_extra_fields.fields import Base64ImageField

from django.conf import settings
from profiles.serializers import PublicProfileSerializer

MAX_TWEET_LENGTH=settings.MAX_TWEET_LENGTH

TWEET_ACTION_OPTIONS=settings.TWEET_ACTION_OPTIONS

# CHOICES = (
#     ('react','REACT'),
#     ('django', 'DJANGO'),
#     ('Node.js','NODE.JS'),
#     ('Asp.net','ASP.NET'),
#     ('Php','PHP'),
# )
class TweetActionSerializer(serializers.Serializer):
    id=serializers.IntegerField()
    action=serializers.CharField()
    content=serializers.CharField(allow_blank=True,required=False)
    

    def validate_actions(self,value):
        value=value.lower().strip()
        if not value in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError("not valid action")
        return value

class TweetCreateSerializer(serializers.ModelSerializer):
    user=PublicProfileSerializer(source="user.profile",read_only=True)
    likes=serializers.SerializerMethodField(read_only=True)
    stack=serializers.ListField()
    # image=Base64ImageField(max_length=None, use_url=True,) # From DRF Extra Fields

    class Meta:
        model=Tweets
        fields=['user','id','content','likes','timestamp','stack','image']
        
    def get_likes(self,obj):
        return obj.likes.count()

    def validate_content(self,value):
        if len(value)>MAX_TWEET_LENGTH:
            raise serializers.ValidationError("this tweet is longer")
        return value
    
    # def get_user(self,obj):
    #     return obj.user.id

class TweetSerializer(serializers.ModelSerializer):
    user=PublicProfileSerializer(source="user.profile",read_only=True)
    likes=serializers.SerializerMethodField(read_only=True)
    parent = TweetCreateSerializer(read_only=True)
    
    def get_likes(self,obj):
        return obj.likes.count()
    

    # def get_user(self,obj):
    #     return obj.user.id
    class Meta:
        model=Tweets
        fields=['user','id','content','likes','is_retweet','parent','timestamp','stack','image']

    