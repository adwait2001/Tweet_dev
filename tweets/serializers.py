from rest_framework import serializers

from .models import Tweets

from django.conf import settings


MAX_TWEET_LENGTH=settings.MAX_TWEET_LENGTH

TWEET_ACTION_OPTIONS=settings.TWEET_ACTION_OPTIONS

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
    likes=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=Tweets
        fields=['id','content','likes']

    def get_likes(self,obj):
        return obj.likes.count()

    def validate_content(self,value):
        if len(value)>MAX_TWEET_LENGTH:
            raise serializers.ValidationError("this tweet is longer")
        return value

class TweetSerializer(serializers.ModelSerializer):
    likes=serializers.SerializerMethodField(read_only=True)
    parent = TweetCreateSerializer(read_only=True)
    class Meta:
        model=Tweets
        fields=['id','content','likes','is_retweet','parent']

    def get_likes(self,obj):
        return obj.likes.count()

  