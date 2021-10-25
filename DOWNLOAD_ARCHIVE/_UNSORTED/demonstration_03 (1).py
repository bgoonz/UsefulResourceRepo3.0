"""
Challenge #3:

Create a function that takes a string and returns it as an integer.

Examples:
- string_int("6") ➞ 6
- string_int("1000") ➞ 1000
- string_int("12") ➞ 12
"""
def string_int(txt):
    return int(txt) 

def int_string(num):
    return str(num)

print(type(string_int("6")))

print(type(int_string(6)))
