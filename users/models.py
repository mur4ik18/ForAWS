# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.core.mail import send_mail
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password,
                     is_staff, is_superuser, **extra_fields):
        """
        Creates and saves a User with the given username, email and password.
        """
        now = timezone.now()
        email = self.normalize_email(email)
        user = self.model(email=email,
                          is_staff=is_staff, is_active=True,
                          is_superuser=is_superuser,
                          date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        return self._create_user(email, password, False, False,
                                 **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        return self._create_user(email, password, True, True,
                                 **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    # first_name = models.CharField('first name', max_length=30, blank=True)
    # last_name = models.CharField('last name', max_length=30, blank=True)
    email = models.EmailField('email address', blank=True, unique=True)
    phone = models.CharField(max_length=50, default=None, null=True, blank=True)
    is_staff = models.BooleanField('staff status', default=False,
        help_text='Designates whether the user can log into this admin '
                  'site.')

    is_active = models.BooleanField('active', default=True,
        help_text='Designates whether this user should be treated as '
                    'active. Unselect this instead of deleting accounts.')

    date_joined = models.DateTimeField('date joined', default=timezone.now)

    shipping_full_name = models.CharField(
        max_length=150,
        blank=True, null=True, default=None)
    shipping_address = models.CharField(
        max_length=150,
        blank=True, null=True, default=None)
    shipping_city = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    shipping_state = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    shipping_zip = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    shipping_country = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)

    billing_full_name = models.CharField(
        max_length=150,
        blank=True, null=True, default=None)
    billing_address = models.CharField(
        max_length=150,
        blank=True, null=True, default=None)
    billing_city = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    billing_state = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    billing_zip = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)
    billing_country = models.CharField(
        max_length=50,
        blank=True, null=True, default=None)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def email_user(self, subject, message, from_email=None, **kwargs):
        """
        Sends an email to this User.
        """
        send_mail(subject, message, from_email, [self.email], **kwargs)

