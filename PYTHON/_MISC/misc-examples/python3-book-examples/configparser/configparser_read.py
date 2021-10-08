# Copyright (c) 2010 Doug Hellmann.  All rights reserved.
#
"""Reading a configuration file.
"""

# end_pymotw_header
from configparser import ConfigParser

parser = ConfigParser()
parser.read("simple.ini")

print(parser.get("bug_tracker", "url"))
