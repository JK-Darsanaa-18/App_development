from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LoginViewSet, StaffDetailsViewSet, ShiftFormViewSet

router = DefaultRouter()
router.register(r'logins', LoginViewSet)
router.register(r'staffdetails', StaffDetailsViewSet)
router.register(r'shiftforms', ShiftFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
