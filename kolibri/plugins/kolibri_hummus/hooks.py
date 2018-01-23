from __future__ import absolute_import, print_function, unicode_literals
from kolibri.core.webpack import hooks as webpack_hooks


class HummusSyncHook(webpack_hooks.WebpackInclusionHook):
    """
    Inherit a hook defining assets to be loaded synchronously in kolibri_hummus/kolibri_hummus.html
    """

    class Meta:
        abstract = True


class HummusAsyncHook(webpack_hooks.WebpackInclusionHook):
    """
    Inherit a hook defining assets to be loaded asynchronously in kolibri_hummus/kolibri_hummus.html
    """

    class Meta:
        abstract = True
