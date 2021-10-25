#
"""Initializing a defaultdict.
"""

# end_pymotw_header
import collections


def default_factory():
    return "default value"


d = collections.defaultdict(default_factory, foo="bar")
print("d:", d)
print("foo =>", d["foo"])
print("bar =>", d["bar"])
