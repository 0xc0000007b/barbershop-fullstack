from django.db import models


# Create your models here.


class Reservation(models.Model):
    name = models.CharField(max_length = 50, verbose_name = 'Имя клиента')
    reservation_date = models.DateTimeField(default = None, verbose_name = 'Время записи')

    class Type(models.TextChoices):
        BEARD_SHAVING = "Beard"
        HEAD_SHAVING = "Head"
        WAXING = "Waxing"
        HEAD_MASSAGE = "Head massage"
    type = models.CharField(max_length = 30, choices = Type.choices, default = Type.HEAD_SHAVING, verbose_name = 'Тип услуги')
    type1 = models.CharField(max_length = 30, choices = Type.choices, default = Type.HEAD_SHAVING, verbose_name = 'Тип услуги')
    type2 = models.CharField(max_length = 30, choices = Type.choices, default = Type.HEAD_SHAVING, verbose_name = 'Тип услуги')
    type3 = models.CharField(max_length = 30, choices = Type.choices, default = Type.HEAD_SHAVING, verbose_name = 'Тип услуги')

    date = models.DateTimeField(auto_now_add = True, db_index = True)

    def __str__(self):
        return self.name