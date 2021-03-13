# -*- coding: utf-8 -*-
import authorize

from django.conf import settings


def config_authorize():
    authorize.Configuration.configure(
        authorize.Environment.PRODUCTION,
        settings.AUTHORIZE_API_LOGIN_ID,
        settings.AUTHORIZE_TRANSACTION_KEY
    )
