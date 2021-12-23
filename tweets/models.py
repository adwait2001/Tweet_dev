from django.db import models, reset_queries
from django.conf import settings
from multiselectfield import MultiSelectField
import random
from django.db.models import Q
# Create your models here.


User=settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey("Tweets", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class TweetQuerySet(models.QuerySet):
    def by_username(self, username):
        return self.filter(user__username__iexact=username)
    def feed(self,user):
        profiles_exist = user.following.exists()
        followed_users_id = []
        if profiles_exist:
            followed_users_id = user.following.values_list("user__id", flat=True) # [x.user.id for x in profiles]
        return self.filter(
            Q(user__id__in=followed_users_id) |
            Q(user=user)
        ).distinct().order_by("-timestamp")

class TweetManager(models.Manager):
    def get_queryset(self,*args, **kwargs):
        return TweetQuerySet(self.model, using=self._db)
    
    def feed(self,user):
         return self.get_queryset().feed(user)


CHOICES = (
    ('react','REACT'),
    ('django', 'DJANGO'),
    ('Node.js','NODE.JS'),
    ('Asp.net','ASP.NET'),
    ('Php','PHP'),
)

class Tweets(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="tweets")
    parent = models.ForeignKey("self", null=True, on_delete=models.SET_NULL)
    content=models.TextField(blank=True,null=True)
    image=models.FileField(upload_to='images/', blank=True, null=True)
    likes=models.ManyToManyField(User,related_name='tweet_user',through=TweetLike)
    timestamp = models.DateTimeField(auto_now_add=True)
    stack=MultiSelectField(choices=CHOICES,blank=True, null=True)
    
    objects = TweetManager()
    # def __str__(self):
    #     return self.content

    class Meta:
        ordering=['-id']


    @property
    def is_retweet(self):
        return self.parent != None
    