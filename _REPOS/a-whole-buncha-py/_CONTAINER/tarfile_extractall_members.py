# Copyright (c) 2009 Doug Hellmann All rights reserved.
#
"""
"""


#end_pymotw_header
import tarfile
import os

os.mkdir('outdir')
with tarfile.open('example.tar', 'r') as t:
    t.extractall('outdir',
                 members=[t.getmember('README.txt')],
                 )
print(os.listdir('outdir'))
