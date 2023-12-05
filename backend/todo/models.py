from django.db import models

# Create your models here.
class Todo(models.Model):
    name = models.CharField("Name", max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name