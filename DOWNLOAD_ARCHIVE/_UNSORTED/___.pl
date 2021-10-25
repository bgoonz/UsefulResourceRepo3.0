DJORG-CS8-ubqyczuB) ╭─charlettabullard@charletta ~/Desktop/LambdaCS8/DJORG-CS8  ‹master*›
╰─$ python manage.py runserver
Traceback (most recent call last):
  File "manage.py", line 8, in <module>
    from django.core.management import execute_from_command_lineModuleNotFoundError: No module named 'django'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "manage.py", line 14, in <module>
    ) from exc
ImportError: Couldn't import Django. Are you sure it's installed and available on your PYTHONPATH environment variable? Did you forget to activate a virtual environment?