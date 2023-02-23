from django.contrib import admin
from .models import *


# Register your models here.
class AdminReservation(admin.ModelAdmin):
    list_display = ('id', 'name', 'type', 'reservation_date', 'date')
    list_editable = ('type', 'reservation_date')
    list_display_links = ('id', 'name')
    list_filter = ('type', 'type1', 'reservation_date')
    search_fields = ('id', 'name', 'type')


admin.site.register(Reservation, AdminReservation)
