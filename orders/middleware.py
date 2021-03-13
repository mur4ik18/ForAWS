# -*- coding: utf-8 -*-

from orders.models import Order


class OrderMiddleware(object):

    def process_request(self, request):
        order_pk = request.session.get('current_order', None)
        user = order = None

        if request.user.is_authenticated():
            user = request.user

        if order_pk is not None:
            try:
                order = Order.objects.get(pk=order_pk)
            except Order.DoesNotExist:
                pass

        if order is None:
            order = Order.objects.create(user=user)
            order.update_data_from_user()
            order.save()
        elif user is not None and order.user != user:
            order.user = user
            order.update_data_from_user()
            order.save()

        request.session['current_order'] = order.pk
        request.order = order
