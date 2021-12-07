from django.shortcuts import render,redirect

from django.utils.http import is_safe_url
from django.conf import settings

ALLOWED_HOSTS=settings.ALLOWED_HOSTS

# Create your views here.
def home_view(request,*args, **kwargs):
    # return HttpResponse("<h1>Hello World</h1>")
    print(request.user or None)
    return render(request,"pages/home.html",context={},status=200)


def tweets_list_view(request, *args, **kwargs):
    return render(request, "tweets/list.html")

def tweets_detail_view(request, tweet_id, *args, **kwargs):
    return render(request, "tweets/detail.html", context={"tweet_id": tweet_id})

