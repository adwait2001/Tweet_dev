from django.db import models
from django.conf import settings
import random
# Create your models here.


User=settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey("Tweets", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Tweets(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    parent = models.ForeignKey("self", null=True, on_delete=models.SET_NULL)
    content=models.TextField(blank=True,null=True)
    image=models.FileField(upload_to='images/', blank=True, null=True)
    likes=models.ManyToManyField(User,related_name='tweet_user',through=TweetLike)
    timestamp = models.DateTimeField(auto_now_add=True)


    # def __str__(self):
    #     return self.content

    class Meta:
        ordering=['-id']


    @property
    def is_retweet(self):
        return self.parent != None
    