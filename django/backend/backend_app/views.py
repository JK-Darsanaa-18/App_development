from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import User
from .models import Staff,Shift
from .models import Attendance
from .serializers import AttendanceSerializer
from .serializers import StaffSerializer
from .serializers import UserSerializer

from .models import TimeOffRequest  # Make sure to create this model
from .serializers import TimeOffRequestSerializer  # Make sure to create this serializer
from rest_framework import status
from .models import ShiftSwapRequest
from .serializers import ShiftSwapRequestSerializer,ShiftSerializer
@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def read_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def update_user(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    serializer = UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_user(request, user_id):
    user = get_object_or_404(User, pk=user_id)
    user.delete()
    return Response({'message': 'User deleted successfully'})

# In your Django views.py

@api_view(['GET'])
def get_time_off_requests(request):
    requests = TimeOffRequest.objects.all()
    serializer = TimeOffRequestSerializer(requests, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_time_off_request(request):
    serializer = TimeOffRequestSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)
@api_view(['GET'])
def get_time_off_requests(request):
    requests = TimeOffRequest.objects.all()
    serializer = TimeOffRequestSerializer(requests, many=True)
    return Response(serializer.data)

@api_view(['PATCH'])
def update_time_off_request(request, pk):
    try:
        request_obj = TimeOffRequest.objects.get(pk=pk)
    except TimeOffRequest.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = TimeOffRequestSerializer(request_obj, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_shift_swap_requests(request):
    requests = ShiftSwapRequest.objects.all()
    serializer = ShiftSwapRequestSerializer(requests, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_shift_swap_request(request):
    serializer = ShiftSwapRequestSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['PATCH'])
def update_shift_swap_request(request, pk):
    try:
        request_obj = ShiftSwapRequest.objects.get(pk=pk)
    except ShiftSwapRequest.DoesNotExist:
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ShiftSwapRequestSerializer(request_obj, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def list_staff(request):
    staff = Staff.objects.all()
    serializer = StaffSerializer(staff, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_staff(request):
    serializer = StaffSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_staff(request, pk):
    staff = get_object_or_404(Staff, pk=pk)
    serializer = StaffSerializer(staff)
    return Response(serializer.data)

@api_view(['PUT'])
def update_staff(request, pk):
    staff = get_object_or_404(Staff, pk=pk)
    serializer = StaffSerializer(staff, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_staff(request, pk):
    staff = get_object_or_404(Staff, pk=pk)
    staff.delete()
    return Response({'message': 'Staff deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
@api_view(['GET'])
def list_attendance(request):
    attendance_records = Attendance.objects.all()
    serializer = AttendanceSerializer(attendance_records, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def create_attendance(request):
    serializer = AttendanceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_attendance(request, pk):
    attendance = get_object_or_404(Attendance, pk=pk)
    serializer = AttendanceSerializer(attendance)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def list_shifts(request):
    shifts = Shift.objects.all()
    serializer = ShiftSerializer(shifts, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_shift(request):
    serializer = ShiftSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_shift(request, pk):
    shift = get_object_or_404(Shift, pk=pk)
    serializer = ShiftSerializer(shift)
    return Response(serializer.data)

@api_view(['PUT'])
def update_shift(request, pk):
    shift = get_object_or_404(Shift, pk=pk)
    serializer = ShiftSerializer(shift, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_shift(request, pk):
    shift = get_object_or_404(Shift, pk=pk)
    shift.delete()
    return Response({'message': 'Shift deleted successfully'}, status=status.HTTP_204_NO_CONTENT)