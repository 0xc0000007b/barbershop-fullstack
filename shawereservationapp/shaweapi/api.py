from .models import *
from .serializers import ReservationSerializer
from rest_framework import viewsets, permissions


class ReservationsViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    permission_classes =  [
            permissions.AllowAny
        ]
    serializer_class = ReservationSerializer
