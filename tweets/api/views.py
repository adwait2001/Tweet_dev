from decimal import Context
import re
from django.http import HttpResponse,Http404,JsonResponse,HttpResponseRedirect
import random
from django.shortcuts import render,redirect
from ..models import Tweets
from ..forms import TweetForm
from django.utils.http import is_safe_url
from django.conf import settings
from ..serializers import (TweetSerializer,TweetActionSerializer,TweetCreateSerializer)
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from rest_framework.authentication import SessionAuthentication
ALLOWED_HOSTS=settings.ALLOWED_HOSTS

# Create your views here.
def home_view(request,*args, **kwargs):
    # return HttpResponse("<h1>Hello World</h1>")
    print(request.user or None)
    return render(request,"pages/home.html",context={},status=200)

def tweet_list_view_pure_django(request,*args, **kwargs):
    qs=Tweets.objects.all()
    tweets_list=[x.serialize() for x in qs]
    
    data={
        "response":tweets_list
    }
    return JsonResponse(data)



def get_paginated_queryset_response(qs,request):
    paginator=PageNumberPagination()
    paginator.page_size=20
    paginated_qs=paginator.paginate_queryset(qs,request)
    serializer=TweetSerializer(paginated_qs,many=True,context={"request":request})
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
def tweet_list_view(request,*args, **kwargs):
    qs=Tweets.objects.all()
    username=request.GET.get('username')
    if username!=None:
        qs=qs.by_username(username)
    return get_paginated_queryset_response(qs,request)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def tweet_feed_view(request,*args, **kwargs):
    user=request.user
    qs=Tweets.objects.feed(user)
    return get_paginated_queryset_response(qs,request)
 


@api_view(['GET'])
def tweet_detail_view(request,tweet_id,*args, **kwargs):
    qs=Tweets.objects.filter(id=tweet_id)
    if not qs.exists():
        return Response({},status=404)
    obj=qs.first()
    serializer=TweetSerializer(obj)
    return Response(serializer.data,status=200)

@api_view(['DELETE','POST'])
@permission_classes([IsAuthenticated])
def tweet_delete_view(request,tweet_id,*args, **kwargs):
    qs=Tweets.objects.filter(id=tweet_id)
    if not qs.exists():
        return Response({},status=404)
    qs=qs.filter(user=request.user)
    if not qs.exists():
        return Response({"message":"you cannot delete the message"},status=403)
    obj=qs.first()
    obj.delete()
    return Response({"message":"Tweet Removed"},status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def tweet_action_view(request,*args, **kwargs):
    '''
        id is required
        Like Unlike Retweet
    '''
    serializer=TweetActionSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data=serializer.validated_data
        tweet_id=data.get("id")
        action=data.get("action")
        content=data.get("content")
        qs=Tweets.objects.filter(id=tweet_id)
        if not qs.exists():
            return Response({},status=404)
        obj=qs.first()
        if action=="like":
            obj.likes.add(request.user)
            serializer=TweetSerializer(obj)
            return Response(serializer.data,status=200)
        elif action=="unlike":
            obj.likes.remove(request.user)
            serializer=TweetSerializer(obj)
            return Response(serializer.data,status=200)
        elif action=="retweet":
            new_tweet=Tweets.objects.create(
                user=request.user,
                parent=obj,
                content=content
            )
            serializer=TweetSerializer(new_tweet)
            return Response(serializer.data,status=201)
    return Response({},status=200)

@api_view(['POST'])
# @authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def tweet_create_view(request,*args, **kwargs):
    serializer=TweetCreateSerializer(data=request.data or None)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data,status=201)
    return Response({},status=400)


def tweet_create_view_pure_django(request,*args, **kwargs):
    user=request.user
    if not request.user.is_authenticated:
        user=None
        if request.is_ajax():
            return JsonResponse({},status=401)
        return redirect(settings.LOGIN_URL)
    form=TweetForm(request.POST or None)
    next_url=request.POST.get("next") or None
    if form.is_valid():                
        obj=form.save(commit=False)
        obj.user=user
        obj.save()
        if request.is_ajax():
            return JsonResponse(obj.serialize(),status=201)
        if next_url!=None and is_safe_url(next_url,ALLOWED_HOSTS):
            return redirect(next_url)
        form=TweetForm()
    if form.errors:
        if request.is_ajax():
            return JsonResponse(form.errors,status=400)
    return render(request,'components/form.html',context={"form":form})

def tweet_detail_view_puredjango(request,tweet_id,*args, **kwargs):
    data={
        "id":tweet_id
    }
    status=200
    try:
        obj=Tweets.objects.get(id=tweet_id)
        data['content']=obj.content
    except: 
        data['message']="Not found"
        status=404
    return JsonResponse(data,status=status)
