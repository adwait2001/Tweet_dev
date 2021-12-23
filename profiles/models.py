from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from multiselectfield import MultiSelectField

# Create your models here.
User=settings.AUTH_USER_MODEL

class FollowerRelation(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    profile=models.ForeignKey("Profile",on_delete=models.CASCADE)
    timestamp=models.DateField(auto_now_add=True)




CHOICES = (
    ('react','REACT'),
    ('django', 'DJANGO'),
    ('Node.js','NODE.JS'),
    ('Asp.net','ASP.NET'),
    ('Php','PHP'),
)

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    location=models.CharField(max_length=220,null=True,blank=True)
    job_Profile=models.TextField(blank=True,null=True)
    bio=models.TextField(blank=True,null=True)
    image=models.FileField(upload_to='images/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True,blank=True)
    updated = models.DateTimeField(auto_now_add=True,blank=True)
    followers=models.ManyToManyField(User,related_name="following",blank=True)
    skills=MultiSelectField(choices=CHOICES)

def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)

post_save.connect(user_did_save, sender=User)

