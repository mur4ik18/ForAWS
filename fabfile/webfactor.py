import os
from fabric.api import *
from fabric.contrib.project import rsync_project
from contextlib import contextmanager

WF_APP = 'isles'
WF_APP_DIR = '/home/holidayisles/webapps/isles'
WF_SRC_DIR = '/home/holidayisles/webapps/isles/src'


@contextmanager
def virtualenv():
    with prefix('source {}/bin/activate'.format(WF_APP_DIR)), shell_env(DJANGO_SETTINGS_MODULE='isles.live_settings'):
        yield


def pip(cmd):
    with virtualenv():
        run('pip install {0}'.format(cmd))


@task
@roles('webfactor')
def bootstrap():
    from . import REPO

    # install virtualenv and pip
    run('easy_install-2.7 virtualenv')
    run('easy_install-2.7 pip')

    with cd(WF_APP_DIR):
        # create env
        run('virtualenv .')

        # clone repo into src dir
        run('git clone {0} src'.format(REPO))


def requirements():
    with cd(WF_APP_DIR):
        pip('-r src/requirements.txt')


def pull():
    with cd(WF_SRC_DIR):
        run('git pull')


def manage(cmd):
    with cd(WF_SRC_DIR):
        with virtualenv():
            run('python manage.py {}'.format(cmd))


def lmanage(cmd):
    local('./manage.py {}'.format(cmd))


def static():
    'Collect static'
    manage('collectstatic --noinput')


def syncdb():
    manage('syncdb')
    with settings(warn_only=True):
        manage('migrate')


@task
@roles('webfactor')
def restart():
    with cd(WF_APP_DIR):
        run('apache2/bin/stop')
        run('apache2/bin/start')


@task
@roles('webfactor')
def update():
    pull()
    requirements()
    static()
    syncdb()
    restart()


@task
@roles('webfactor')
def sync_up():
    apps = ''

    lmanage('dumpdata {0} > data.json'.format(apps))
    with cd(WF_SRC_DIR):
        put('data.json', './')
        local('rm data.json')

    with virtualenv(), cd(WF_SRC_DIR):
        manage('flush --no-initial-data --noinput')

        run('echo "delete from auth_permission;" | ./manage.py dbshell')
        run('echo "delete from django_content_type;" | ./manage.py dbshell')
        run('echo "delete from django_site;" | ./manage.py dbshell')

    manage('loaddata data.json')
    run('rm data.json')

    # rsync media
    MEDIA_DIR = os.path.join(os.path.dirname(WF_APP_DIR), 'media')
    rsync_project(remote_dir=MEDIA_DIR,
                  local_dir='./static/media/')


@task
@roles('webfactor')
def sync_down():
    apps = ''

    manage('dumpdata {0} > data.json'.format(apps))
    with cd(WF_SRC_DIR):
        get('data.json', './')
        run('rm data.json')

    lmanage('flush --no-initial-data --noinput')

    local('echo "delete from auth_permission;" | ./manage.py dbshell')
    local('echo "delete from django_content_type;" | ./manage.py dbshell')
    local('echo "delete from django_site;" | ./manage.py dbshell')

    lmanage('loaddata data.json')
    local('rm data.json')

    # rsync media
    MEDIA_DIR = os.path.join(os.path.dirname(WF_APP_DIR), 'media')
    rsync_project(remote_dir=MEDIA_DIR + '/',
                  local_dir='./static/media/',
                  upload=False)
