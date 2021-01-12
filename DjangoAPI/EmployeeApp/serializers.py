from rest_framework import serializers
from EmployeeApp.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('EmployeeId','EmployeeUsername','EmployeeTask','TaskDate')  