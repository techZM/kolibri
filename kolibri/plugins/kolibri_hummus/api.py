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
    def unreadcount(self, request, **kwargs):
        messages = self.get_queryset()
        count = 0
        for message in messages:
            if not message.opened:
                count += 1

        return Response({'unreadcount': count})


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

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.deleted = True
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @detail_route(methods=['get'])
    def unreadcount_in_thread(self, request, **kwargs):
        instance = self.get_object()
        count = 0
        for message in instance.messages.all():
            if not message.opened:
                count += 1

        return Response({'unreadcount': count})

    @detail_route(methods=['get'])
    def last_message(self, request, **kwargs):
        instance = self.get_object()
        messages = sorted(instance.messages.all(), key=lambda x: x.sentTime, reverse=True)
        return Response({'last_message': messages[0].message})

    @detail_route(methods=['get'])
    def recipients(self, request, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        recipients = serializer.data['participants']
        recipients.remove(request.user.pk)
        return Response({'recipients': recipients})
