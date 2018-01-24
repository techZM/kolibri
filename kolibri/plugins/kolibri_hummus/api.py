import uuid

from django.http import QueryDict
from rest_framework import status, viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response

from . import models, serializers


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MessageSerializer

    def get_queryset(self):
        return models.Message.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data.dict()
        data['id'] = uuid.uuid4().hex
        data['sender'] = request.user.pk
        new_dict = QueryDict('', mutable=True)
        new_dict.update(data)

        serializer = self.get_serializer(data=new_dict)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    @list_route(methods=['get'])
    def all_unread_messages_count(self, request, **kwargs):
        messages = self.get_queryset()
        count = 0
        for message in messages:
            if not message.opened:
                count += 1

        return Response({'unread_messages_count': count})


class MessageThreadViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MessageThreadSerializer

    def get_queryset(self):
        return models.MessageThread.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data.dict()
        data['id'] = uuid.uuid4().hex
        data['sender'] = request.user.pk
        new_dict = QueryDict('', mutable=True)
        new_dict.update(data)

        serializer = self.get_serializer(data=new_dict)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    @detail_route(methods=['get'])
    def unread_messages_count_in_thread(self, request, **kwargs):
        instance = self.get_object()
        count = 0
        for message in instance.messages.all():
            if not message.opened:
                count += 1

        return Response({'unread_messages_count': count})

    @detail_route(methods=['get'])
    def last_message(self, request, **kwargs):
        instance = self.get_object()
        messages = sorted(instance.messages.all(), key=lambda x: x.sentTime, reverse=True)
        return Response({'last_message': messages[0].message})
