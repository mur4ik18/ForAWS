from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


from mofa import views


urlpatterns = [
	#mobile url
	url(r'^mobile/$', views.mobile, name='mobile'),
	url(r'^mobile/about/$', views.about, name='about'),
	url(r'^mobile/testing/$', views.testing, name="testing"),
	url(r'^mobile/mo-news/', views.monews, name='monews'),
	url(r'^mobile/submit-content/', views.subcontent, name='subcontent'),
	url(r'^mobile/checkout/', views.checkout, name="checkout"),
	url(r'^mobile/thankyou/', views.thankyou, name="thankyou"),
	url(r'^mobile/emarket/$', views.emarket, name="emarket"),
	url(r'^mobile/emarket/mostrecent/$', views.emarketMostrecent, name="emarketMostrecent"),
	url(r'^mobile/emarket/individual/$', views.emarketIndividual, name="emarketIndividual"),
	url(r'^mobile/gallery/$', views.gallery, name="gallery"),
	url(r'^mobile/gallery/mostrecent/$', views.galleryMostrecent, name="galleryMostrecent"),
	url(r'^mobile/gallery/individual/$', views.galleryIndividual, name="galelryIndividual"),
	url(r'^mobile/garden/$', views.garden, name="garden"),
	url(r'^mobile/garden/mostrecent/$', views.gardenMostrecent, name="gardenMostrecent"),
	url(r'^mobile/garden/individual/$', views.gardenIndividual, name="gardenIndividual"),
	url(r'^mobile/preview/$', views.preview, name="preview"),
	url(r'^mobile/bg/$', views.getBg, name="getBg"),
	
	#desktop urls
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/', include('mofa.api.urls')),


    url(r'^ckeditor/', include('ckeditor.urls')),

    url(r'^html/(?P<path>.*)$', views.home, name='home'),

    url(r'^$', views.app, name='app'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    url(r'^(.*)', views.app, name='app'),

]
