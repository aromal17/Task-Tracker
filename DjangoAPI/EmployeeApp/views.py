from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp .models import Employee
from EmployeeApp.serializers import EmployeeSerializer
# Create your views here.

@csrf_exempt
def employeeApi(request,id = 0):
    if request.method == 'GET':
        employee = Employee.objects.all()
        employee_serializer = EmployeeSerializer(employee,many = True)
        return JsonResponse(employee_serializer.data,safe = False)
    
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data = employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added successfully!!!",safe = False)
        print(employee_serializer.errors)
        return JsonResponse("failed to add to db!!!",safe = False)
    
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(EmployeeId = employee_data['EmployeeId'])
        employee_serializer = EmployeeSerializer(employee,data = employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully!!!",safe = False)
        print(employee_serializer.errors)
        return JsonResponse("COuld not update!!!",safe = False)
    
    elif request.method == 'DELETE':
        employee = Employee.objects.get(EmployeeId = id)
        employee.delete()
        return JsonResponse("Deleted Successfully",safe = False)


