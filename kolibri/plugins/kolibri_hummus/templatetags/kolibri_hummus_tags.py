# coding=utf-8
"""
kolibri_hummus template tags
========================
Tags for including plugin javascript assets into a template.
"""

from __future__ import absolute_import, print_function, unicode_literals
from django import template
from kolibri.core.webpack.utils import webpack_asset_render
from .. import hooks

register = template.Library()


@register.simple_tag()
def kolibri_hummus_assets():
    """
    Using in a template will inject script tags that include the javascript assets defined
    by any concrete hook that subclasses HummusSyncHook.
    :return: HTML of script tags to insert into kolibri_hummus/kolibri_hummus.html
    """
    return webpack_asset_render(hooks.HummusSyncHook, async=False)


@register.simple_tag()
def kolibri_hummus_async_assets():
    """
    Using in a template will inject script tags that include the javascript assets defined
    by any concrete hook that subclasses HummusSyncHook.
    :return: HTML of script tags to insert into kolibri_hummus/kolibri_hummus.html
    """
    return webpack_asset_render(hooks.HummusAsyncHook, async=True)
