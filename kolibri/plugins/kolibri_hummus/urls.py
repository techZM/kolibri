from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^', views.HummusView.as_view()),
]
