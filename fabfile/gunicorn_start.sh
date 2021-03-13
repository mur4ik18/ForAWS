#!/bin/bash

NAME=":APP"                                         # Name of the application
DJANGODIR=%(ROOT)s/%(APP)s/src                           # Django project directory
SOCKFILE=%(ROOT)s/%(APP)s/run/gunicorn.sock              # we will communicte using this unix socket
USER=%(APP)s                                           # the user to run as
GROUP=%(GROUP)s                                        # the group to run as
NUM_WORKERS=3                                       # how many worker processes should Gunicorn spawn
DJANGO_SETTINGS_MODULE=%(APP)s.settings               # which settings file should Django use
DJANGO_WSGI_MODULE=%(APP)s.wsgi                       # WSGI module name

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $DJANGODIR
source ../bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Create the run directory if it doesn't exist
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR
chown -R $USER $RUNDIR

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec ../bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  --user=$USER --group=$GROUP \
  --log-level=debug \
  --bind=unix:$SOCKFILE
