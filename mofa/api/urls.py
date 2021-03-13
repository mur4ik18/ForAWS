from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from events.api.views import EventViewSet
from galleries.api.views import ArticleViewSet
from shop.api import views as shop_views
from mofa.api.views import PageViewSet, SubscriberViewSet, submit_content, search
from orders.api import views as order_views
from users.api import views as user_views


router = DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'events', EventViewSet)
router.register(r'pages', PageViewSet)
router.register(r'subscribers', SubscriberViewSet)

router.register(r'categories', shop_views.CategoryViewSet)
router.register(r'products', shop_views.ProductViewSet)

router.register(r'orders/items', order_views.ItemViewSet)
router.register(r'orders', order_views.OrderViewSet)

router.register(r'users', user_views.UserViewSet)

urlpatterns = [
	url(r'^', include(router.urls)),

    url(r'^search/$', search, name='search'),

    url(r'^submit-content/$', submit_content),

    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),

]
