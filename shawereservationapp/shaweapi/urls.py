from rest_framework import routers
from .api import ReservationsViewSet
router = routers.DefaultRouter()
router.register('reservations', ReservationsViewSet)

urlpatterns = router.urls