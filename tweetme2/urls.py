"""tweetme2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include,re_path
from tweets.views import (tweets_list_view,tweets_detail_view,home_view)
from accounts.views import (register_view,login_view,logout_view)
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('',home_view),
    path('admin/', admin.site.urls),
    path('global/', tweets_list_view),
    path('register/',register_view),
    path('login/',login_view),
    path('logout/',logout_view),
    path('<int:tweet_id>/', tweets_detail_view),
    path('api/tweet/',include('tweets.api.urls')),
    re_path('profiles?/',include('profiles.urls')),
    re_path(r'api/profiles?/', include('profiles.api.urls')),
    path('react/',TemplateView.as_view(template_name='react_via_dj.html'))
]  

if settings.DEBUG:
    urlpatterns+=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
