from __future__ import absolute_import, print_function, unicode_literals
from django.views.generic.base import TemplateView


class HummusView(TemplateView):
    template_name = "kolibri_hummus/kolibri_hummus.html"
