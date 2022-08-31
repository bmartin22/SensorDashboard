from django.urls import re_path
from DashboardApp import views
#from django.conf.urls.static import static
#from django.conf import settings



urlpatterns=[
    re_path(r'^user/$',views.userApi),
    re_path(r'^user/([0-9]+)$',views.userApi),

    re_path(r'^sensor/$',views.sensorApi),
    re_path(r'^sensor/([0-9]+)$',views.sensorApi),

    re_path(r'^reading/$',views.readingApi),
    re_path(r'^reading/([0-9]+)$',views.readingApi),

    re_path(r'^alert_profile/$',views.alertProfileApi),
    re_path(r'^alert_profile/([0-9]+)$',views.alertProfileApi)

    #re_path(r'^savefile/',views.saveFile)
]#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)