import os
import sys
from fabric.api import *
from fabric.contrib import django
from fabric.contrib.files import upload_template, exists
from fabric.contrib.project import rsync_project
from contextlib import contextmanager
# import webfactor


REPO = 'git@bitbucket.org:bogdanbursuc/mofa.git'
APP = 'mofa'
GROUP = 'webapps'
ROOT = '/{}'.format(GROUP)
USER_DIR = os.path.join(ROOT, APP)
SRC_DIR = os.path.join(USER_DIR, 'src')
PROGRAM = "{}_{}".format(GROUP, APP)
DOMAIN = 'mofa.zonechat.org'
DJ_SETTINGS = {
    'live': 'mofa.settings',
    'local': 'mofa.local_settings'
}

env.roledefs = {
    'dev': ['root@rzc'],
    # 'webfactor': ['holidayisles@holidayisles.webfactional.com']
}

env.roles = ['dev']
env.use_ssh_config = True


@task
def setup_server():
    # sudo('apt-get update')
    sudo('apt-get install -y nginx python-pip python-virtualenv git mc supervisor')
    sudo('apt-get install -y python-dev libmysqlclient-dev')
    sudo('apt-get install -q -y mysql-server mysql-client')
    sudo('apt-get install python-opencv')
    sudo('apt-get install libjpeg libjpeg-dev libfreetype6 libfreetype6-dev zlib1g-dev')

    with settings(warn_only=True):
        # ensure services are running
        sudo('service nginx start')
        sudo('service mysql start')


def supervisorcmd(command):
    sudo('supervisorctl {}'.format(command))


@task
def requirements():
    with cd(SRC_DIR):
        with virtualenv():
            if exists('requirements.txt'):
                run('pip install -r requirements.txt')


def manage(cmd):
    with cd(SRC_DIR):
        with virtualenv():
            run('python manage.py {}'.format(cmd))


def lmanage(cmd):
    local('./manage.py {}'.format(cmd))


@task
def static():
    'Collect static'
    manage('collectstatic --noinput')


@task
def syncdb():
    with settings(warn_only=True):
        manage('createcachetable default_cache')
        # manage('syncdb')
        manage('migrate')


@task
def pull():
    with cd(SRC_DIR):
        run('git pull')


@task
def update(simple=False):
    if not simple:
        pull()
        static()
    else:
        pull()
        requirements()
        static()
        syncdb()
        supervisorcmd('restart {}'.format(PROGRAM))
    # supervisorcmd('restart {}_celery'.format(PROGRAM))


@task
def supervisor():
    # supervisord
    upload_template(
        os.path.join(os.path.dirname(__file__), 'supervisord.conf'),
        '/etc/supervisor/conf.d/{}.conf'.format(PROGRAM),
        context={
            'ROOT': ROOT,
            'APP': APP,
            'GROUP': GROUP
        })
    sudo('service supervisor restart')


@task
def nginx():
    # nginx
    upload_template(
        os.path.join(os.path.dirname(__file__), 'nginx.conf'),
        '/etc/nginx/sites-available/{}'.format(PROGRAM),
        context={
            'PROGRAM': PROGRAM,
            'USER_DIR': USER_DIR,
            'DOMAIN': DOMAIN
        })
    with cd('/etc/nginx/sites-enabled'):
        if not exists(PROGRAM):
            run('ln -s ../sites-available/{}'.format(PROGRAM))
    sudo('service nginx restart')


@task
def permissions():
    # permissions
    ownership = (USER_DIR,)
    sudo('chown {}:{} -R {}'.format(APP, GROUP, " ".join(ownership)))


def clone():
    with cd(USER_DIR):
        if not exists('src/.git'):
            run('git clone {} src'.format(REPO))


def mkvirutalenv():
    with cd(USER_DIR):
        if not exists(os.path.join(USER_DIR, 'bin')):
            run('virtualenv {}'.format(USER_DIR))


@contextmanager
def virtualenv():
    with prefix('source {}/bin/activate'.format(USER_DIR)):
        yield


def gunicorn():
    with cd(USER_DIR):
        with virtualenv():
            # install && create gunicorn start script ROOT/APP/bin
            gunicorn_file = os.path.join(USER_DIR, 'bin', 'gunicorn_start.sh')
            # install gunicorn
            with hide('stdout'):
                run('pip install gunicorn')
            upload_template(
                os.path.join(os.path.dirname(__file__), 'gunicorn_start.sh'),
                gunicorn_file,
                context={
                    'APP': APP,
                    'ROOT': ROOT,
                    'GROUP': GROUP
                })
            sudo('chmod u+x {}'.format(gunicorn_file))


@task
def celery_install():
    with cd(USER_DIR):
        with virtualenv():
            # install && create celery start script ROOT/APP/bin
            celery_file = os.path.join(USER_DIR, 'bin', 'celery_start.sh')
            # install celery
            with hide('stdout'):
                run('pip install celery')
            upload_template(
                os.path.join(os.path.dirname(__file__), 'celery_start.sh'),
                celery_file,
                context={
                    'APP': APP,
                    'ROOT': ROOT,
                    'GROUP': GROUP
                })
            sudo('chmod u+x {}'.format(celery_file))


def directories():
    sudo('mkdir -p {}'.format(ROOT))
    # sudo('mkdir -p {}'.format(USER_DIR))
    # static/media dir
    sudo('mkdir -p {}'.format(os.path.join(USER_DIR, 'static')))
    sudo('mkdir -p {}'.format(os.path.join(USER_DIR, 'media')))
    sudo('mkdir -p {}'.format(os.path.join(USER_DIR, 'logs')))


def user():
    # create group
    sudo('groupadd -f {}'.format(GROUP))

    # create user with home in environment, username: ROOT/APP
    try:
        sudo('useradd -m -s /bin/bash --gid {0} --home-dir {1} {2}'.format(
            GROUP, USER_DIR, APP))
    except SystemExit:
        # ensure userdir and ownership
        sudo('mkdir -p {}'.format(USER_DIR))
        sudo('chown {0}:{1} {2}'.format(APP, GROUP, USER_DIR))


@task
def install_app():
    '''Clone Repo and create nginx, gunicorn and supervisor start scripts'''
    directories()

    user()

    mkvirutalenv()
    clone()
    gunicorn()

    permissions()

    update()

    supervisor()
    nginx()


def push():
    local('git push')


@task
def cu(message):
    'Commit and update the project'
    local('pip freeze > requirements.txt')

    local('git add -u .')
    local('git add .')
    local("git commit -m '{}'".format(message))

    push()
    update()


def _get_sync_apps():
    try:
        apps = " ".join(SYNC_APPS)
    except NameError:
        apps = ""
    return apps


def _dj_setup(module='live'):
    new_path = os.path.dirname(os.path.dirname(__file__))
    if new_path not in sys.path:
        sys.path.insert(0, new_path)

    django.settings_module(DJ_SETTINGS[module])
    from django.conf import settings
    return settings


@task
def sync_down():
    dj_settings = _dj_setup()
    database_info = dj_settings.DATABASES['default']
    with cd(SRC_DIR):
        # dump using mysqldump
        cmd = 'mysqldump -u {USER} {password} {NAME} > dump.sql'.format(**dict(
            password='' if database_info['PASSWORD'] == ''
                     else '-p{}'.format(database_info['PASSWORD']),
            **database_info))

        run(cmd)

        get('./dump.sql', 'dump.sql')
        run('rm dump.sql')

    dj_settings = _dj_setup('local')
    database_info = dj_settings.DATABASES['default']
    db_name = database_info['NAME']
    mysql = "mysql -u {user} {password}".format(
        user=database_info['USER'],
        password='' if database_info['PASSWORD'] == '' else '-p{}'.format(database_info['PASSWORD']))

    # drop and recreate db
    local("echo 'drop schema `{}`;' | {mysql}".format(db_name, mysql=mysql))
    local("echo 'CREATE SCHEMA `{}` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;' | {mysql}".format(
        db_name,
        mysql=mysql))

    # load data
    local("{mysql} {} < dump.sql".format(db_name, mysql=mysql))

    local('rm dump.sql')

    # # rsync media
    MEDIA_DIR = os.path.join(USER_DIR, 'media')
    rsync_project(remote_dir=MEDIA_DIR + '/',
                  local_dir='./static/media/',
                  # delete=True,
                  upload=False)


@task
def sync_up():
    apps = ''

    lmanage('dumpdata {0} > data.json'.format(apps))
    with cd(SRC_DIR):
        put('data.json', './')
        local('rm data.json')

    with virtualenv(), cd(SRC_DIR):
        manage('flush --no-initial-data --noinput')

        run('echo "delete from auth_permission;" | ./manage.py dbshell')
        run('echo "delete from django_content_type;" | ./manage.py dbshell')
        run('echo "delete from django_site;" | ./manage.py dbshell')

    manage('loaddata data.json')

    # rsync media
    MEDIA_DIR = os.path.join(USER_DIR, 'media')
    rsync_project(remote_dir=MEDIA_DIR,
                  local_dir='./static/media/')

    run('rm data.json')
