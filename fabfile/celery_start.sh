#!/bin/bash

DJANGODIR=%(ROOT)s/%(APP)s/src                           # Django project directory
USER=%(APP)s                                           # the user to run as
GROUP=%(GROUP)s                                        # the group to run as
NUM_WORKERS=3                                       # how many worker processes should Gunicorn spawn
DJANGO_SETTINGS_MODULE=%(APP)s.settings               # which settings file should Django use
DJANGO_WSGI_MODULE=%(APP)s.wsgi                       # WSGI module name

echo "Starting celery as `whoami`"

# Activate the virtual environment
cd $DJANGODIR
source ../bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH
export C_FORCE_ROOT=1

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec ../bin/celery -A %(APP)s worker -l info
