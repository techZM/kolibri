from django.conf.urls import include, url
from rest_framework import routers

from .api import MessageThreadViewSet, MessageViewSet

router = routers.SimpleRouter()
router.register(r'message', MessageViewSet, base_name="message")
router.register(r'messagethreads', MessageThreadViewSet, base_name="messagethreads")

urlpatterns = [
    url(r'^', include(router.urls)),
]
