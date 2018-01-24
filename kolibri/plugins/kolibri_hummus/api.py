import uuid

from rest_framework import status, viewsets
from rest_framework.decorators import detail_route, list_route
from rest_framework.permissions import AllowAny, BasePermission
from rest_framework.response import Response

from . import models, serializers


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MessageSerializer

    def get_queryset(self):
        return models.Message.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data
        data['id'] = uuid.uuid4().hex
        data['opened'] = True
        serializer = self.get_serializer(data=data)
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


class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        if not request.user.roles.all().exists():
            return False

        return True


class MessageThreadViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MessageThreadSerializer
    permission_classes = (IsAdminUser, AllowAny,)

    def get_queryset(self):
        return models.MessageThread.objects.all()

    def get_permissions(self):
        if self.action == 'create' or self.action == 'destroy':
            return [IsAdminUser()]
        else:
            return [AllowAny()]

    def create(self, request, *args, **kwargs):
        title = request.data['title']
        thread = models.MessageThread.objects.filter(title=title)
        if thread.exists() and len(thread[0].participants.all()) == 2:
            receiver = thread[0].participants.exclude(pk=request.user.pk)
            if receiver.exists():
                serializer = self.get_serializer(thread.first())
                headers = self.get_success_headers(serializer.data)
                return Response(serializer.data, status=status.HTTP_200_OK, headers=headers)

        data = request.data
        data['id'] = uuid.uuid4().hex
        data['creator'] = request.user.pk

        if request.user.pk not in data['participants']:
            data['participants'].append(request.user.pk)

        serializer = self.get_serializer(data=data)
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
    def recipients(self, request, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        recipients = serializer.data['participants']
        recipients.remove(request.user.pk)
        return Response({'recipients': recipients})
