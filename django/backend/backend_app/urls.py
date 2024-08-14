from django.urls import path
from .views import (
    create_user, read_users, update_user, delete_user,get_time_off_requests, create_time_off_request,get_time_off_requests, update_time_off_request,get_shift_swap_requests, create_shift_swap_request,update_shift_swap_request,
    list_staff, create_staff, retrieve_staff, update_staff, delete_staff,list_shifts,create_shift,retrieve_shift,update_shift,delete_shift,    list_attendance, create_attendance, retrieve_attendance,
)

urlpatterns = [
    # API views
    path('create_user/', create_user),
    path('read_users/', read_users),
    path('update_user/<int:user_id>/', update_user),
    path('delete_user/<int:user_id>/', delete_user),
    path('timeoffs/', get_time_off_requests),
    path('timeoffs/create/', create_time_off_request),
    path('timeoffs/<int:pk>/', update_time_off_request),
    path('shiftswaps/', get_shift_swap_requests),
    path('shiftswaps/create/', create_shift_swap_request),
    path('shiftswaps/<int:pk>/', update_shift_swap_request),
    path('staff/', list_staff, name='list_staff'),
    path('staff/create/', create_staff, name='create_staff'),
    path('staff/<int:pk>/', retrieve_staff, name='retrieve_staff'),
    path('staff/<int:pk>/update/', update_staff, name='update_staff'),
    path('staff/<int:pk>/delete/', delete_staff, name='delete_staff'),
    # Shift Management URLs
    path('shifts/', list_shifts, name='list_shifts'),
    path('shifts/create/', create_shift, name='create_shift'),
    path('shifts/<int:pk>/', retrieve_shift, name='retrieve_shift'),
    path('shifts/<int:pk>/update/', update_shift, name='update_shift'),
    path('shifts/<int:pk>/delete/', delete_shift, name='delete_shift'), 
     path('attendance/', list_attendance, name='list_attendance'),
    path('attendance/create/', create_attendance, name='create_attendance'),
    path('attendance/<int:pk>/', retrieve_attendance, name='retrieve_attendance'),
]
