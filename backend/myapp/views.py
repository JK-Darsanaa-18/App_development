from rest_framework import viewsets
from .models import Login, StaffDetails, ShiftForm
from .serializers import LoginSerializer, StaffDetailsSerializer, ShiftFormSerializer
from django.http import HttpResponse

# ViewSets for CRUD operations
class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

class StaffDetailsViewSet(viewsets.ModelViewSet):
    queryset = StaffDetails.objects.all()
    serializer_class = StaffDetailsSerializer

class ShiftFormViewSet(viewsets.ModelViewSet):
    queryset = ShiftForm.objects.all()
    serializer_class = ShiftFormSerializer

# Home view
def home(request):
    return HttpResponse("Welcome to the API home page. Use /api/ to access the API endpoints.")
