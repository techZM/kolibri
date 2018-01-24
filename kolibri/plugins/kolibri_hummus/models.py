import uuid
from gettext import gettext as _

from django.db import models
from kolibri.auth.models import FacilityUser


class UUIDField(models.CharField):
    """
    Adaptation of Django's UUIDField, but with 32-char hex representation as Python representation rather than a UUID instance.
    """

    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 32
        super(UUIDField, self).__init__(*args, **kwargs)

    def prepare_value(self, value):
        if isinstance(value, uuid.UUID):
            return value.hex
        return value

    def deconstruct(self):
        name, path, args, kwargs = super(UUIDField, self).deconstruct()
        del kwargs['max_length']
        return name, path, args, kwargs

    def get_internal_type(self):
        return "UUIDField"

    def get_db_prep_value(self, value, connection, prepared=False):
        if value is None:
            return None
        if not isinstance(value, uuid.UUID):
            try:
                value = uuid.UUID(value)
            except AttributeError:
                raise TypeError(self.error_messages['invalid'] % {'value': value})
        return value.hex

    def from_db_value(self, value, expression, connection, context):
        return self.to_python(value)

    def to_python(self, value):
        if isinstance(value, uuid.UUID):
            return value.hex
        return value


def generate_file_path(instance, filename):
    return 'user_{}/{}'.format(instance.user.id, filename)


class BaseModel(models.Model):

    class Meta:
        abstract = True  # specify this model as an Abstract Model


class MessageThread(BaseModel):
    id = UUIDField(primary_key=True)
    creator = models.ForeignKey(
        FacilityUser,
        related_name='created_message_thread',
        on_delete=models.SET_NULL,
        null=True)
    title = models.CharField(max_length=200)
    deleted = models.BooleanField(default=False)
    participants = models.ManyToManyField(
        FacilityUser,
        related_name='participated_message_threads',
        verbose_name=_("participants"),
        help_text=_("Users who are in the message thread"))


class Message(BaseModel):
    id = UUIDField(primary_key=True)
    message = models.TextField()
    sentTime = models.DateTimeField(auto_now_add=True)
    opened = models.BooleanField(default=False)
    file = models.FileField(upload_to=generate_file_path, null=True)
    sender = models.ForeignKey(
        FacilityUser,
        related_name='messages',
        on_delete=models.SET_NULL,
        null=True)
    thread = models.ForeignKey(
        MessageThread,
        related_name='messages',
        verbose_name=_("thread"))
