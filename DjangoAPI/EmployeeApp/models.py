 from django.db import models

# Create your models here.
class Employee(models.Model):
    EmployeeId = models.AutoField(primary_key = True)
    EmployeeUsername = models.CharField(max_length=30)
    EmployeeTask = models.CharField(max_length = 200)
    TaskDate = models.DateField()