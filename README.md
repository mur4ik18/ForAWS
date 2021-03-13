# README #

### Mofa Installation instructions ###

General Requirements:

    Linux Webserver
    Minimum of Ubuntu 14.04 Operating system
    Python 2.7
    MySQL 5
    Apache 2
    NodeJS (Most Recent)
    Django V.1.8.3

Installation Manual:

    Launch an empty, ubuntu-based linux webserver from any vendor (AWS Recommended)
    Install/Configure Apache
    Install Packages from the Ubuntu Repositories
        To begin the process, we'll download and install all of the items we need from the Ubuntu repositories. This will
        include the Apache web server, the mod_wsgi module used to interface with our Django app, and pip, the Python
        package manager that can be used to download our Pyth-related tools.

        To get everything we need, update your server's local package index and then install the appropriate packages.
        If you are using Django with Python 2, the commands you need are:
            sudo apt-get update
            sudo apt-get install python-pip apache2 libapache2-mod-wsgi
        Reference - https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-apache-and-mod_wsgi-on-ubuntu-14-04

    Install and Configure MySql - Database

      * Run the following commands on the server:
            sudo apt-get update
            sudo apt-get install mysql-server
            Continue installing from the prompts taking notes of every password you create for MySQL
    Install npm and node-js

      * Run the following commands on the server:
            sudo apt-get install npm
            sudo npm install Node-Js

    Install virtualenv

      * Virtualenv encapsulates your projects requirements so they do not conflict with other project or the system’s
        installation of python
            Run: sudo apt-get install virtualenv
            Pull the project from the repository (git)
            Go into the project directory and create the virtual environment
            Run: virtualenv <name of environment> (Without the <>)

      * To start the virtual environment
            Run: source <name of environment>/bin/activate

      * If it is functioning your prompt should have the name in parentheses on the left of every line.

      * To deactivate the environment, run: deactivate

    Using virtualenv install python requirements stored in requirements.txt

      * Run: pip install requirements.txt

      * Take note of any packages that will need to be installed globally and install them manually (sudo pip install <package>)

    Edit the settings.py to reflect your database credentials

    Have Django make migrations (python manage.py makemigrations)

    Run the migrations (python manage.py migrate)
    
    Create a superuser

      * Run: python manage.py createsuperuser

      * Follow the prompts to create the new superuser. !This user will have complete control of the site!

    Run the development server to see if any error arose (python manage.py runserver)
    
    Configure Apache to point to the path you placed the project into (take note the project stores its static files
    outside the main project folder. Copy the static and media folders manually to the outer folders)



### Notes ###

#######

Django must remain installed as Version 1.8.3 - Understand Django is held back for compatibility with various plug-ins such as suit and filer. These have caused a wide variety of issues, test in a secure environment before deploying with up to date versions.  

#######

