Traceback (most recent call last):
File "C:\Users\Daricus\Anaconda3\Scripts\jupyter-notebook-script.py", line 6, in 
from notebook.notebookapp import main
File "C:\Users\Daricus\Anaconda3\lib\site-packages\notebook\notebookapp.py", line 81, in 
from .services.kernels.kernelmanager import MappingKernelManager
File "C:\Users\Daricus\Anaconda3\lib\site-packages\notebook\services\kernels\kernelmanager.py", line 19, in 
from jupyter_client.session import Session
File "C:\Users\Daricus\Anaconda3\lib\site-packages\jupyter_client\session.py", line 61, in 
from jupyter_client.jsonutil import extract_dates, squash_dates, date_default
File "C:\Users\Daricus\Anaconda3\lib\site-packages\jupyter_client\jsonutil.py", line 11, in 
from dateutil.parser import parse as _dateutil_parse
File "C:\Users\Daricus\Anaconda3\lib\site-packages\dateutil\parser.py", line 158
l.append("%s=%s" % (attr, `value`))
^
SyntaxError: invalid syntax
