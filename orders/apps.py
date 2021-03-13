from django import apps


class OrdersAppConfig(apps.AppConfig):
    name = 'orders'
    module = 'orders'

    def ready(self):
        from orders import signals
