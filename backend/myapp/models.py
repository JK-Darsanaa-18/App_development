from django.db import models

class Login(models.Model):
    emailId = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

class StaffDetails(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    SHIFT_CHOICES = [
        ('Morning', 'Morning'),
        ('Afternoon', 'Afternoon'),
        ('Night', 'Night'),
    ]
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_no = models.CharField(max_length=15)
    address = models.TextField()
    shift = models.CharField(max_length=10, choices=SHIFT_CHOICES)
    dob = models.DateField()
    email = models.EmailField()

class ShiftForm(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    time = models.TimeField()
    date = models.DateField()
    location = models.CharField(max_length=255)
    requiredstaff = models.IntegerField()
