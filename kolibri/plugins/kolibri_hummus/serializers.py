import uuid

from rest_framework import serializers

from .models import Message, MessageThread


class MessageSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        value = super(MessageSerializer, self).to_representation(instance)

        if 'request' in self.context:
            value['id'] = uuid.uuid4().hex

        return value

    class Meta:
        model = Message
        fields = ('id', 'message', 'sentTime', 'opened', 'file', 'sender', 'thread')


class MessageThreadSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageThread
        fields = ('id', 'creator', 'title', 'deleted', 'participants')
