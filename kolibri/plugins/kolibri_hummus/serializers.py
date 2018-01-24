from rest_framework import serializers

from .models import Message, MessageThread


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'message', 'sentTime', 'opened', 'file', 'sender', 'thread')


class MessageThreadSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True)

    def to_representation(self, instance):
        value = super(MessageThreadSerializer, self).to_representation(instance)

        if 'request' in self.context and self.context['request'].method == "GET":

            unread_count = instance.messages.filter(opened=False).count()
            value.update(
                {
                    "unread_count": unread_count
                })
        return value

    class Meta:
        model = MessageThread
        fields = ('id', 'creator', 'title', 'deleted', 'participants', 'messages')
