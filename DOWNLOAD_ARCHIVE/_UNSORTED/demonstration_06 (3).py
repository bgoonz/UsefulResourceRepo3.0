"""
Challenge #6:

Create a function that takes a string, checks if it has the same number of "x"s
and "o"s and returns either True or False.

- Return a boolean value (True or False).
- The string can contain any character.
- When no x and no o are in the string, return True.

Examples:
- XO("ooxx") ➞ True
- XO("xooxx") ➞ False
- XO("ooxXm") ➞ True (Case insensitive)
- XO("zpzpzpp") ➞ True (Returns True if no x and o)
- XO("zzoo") ➞ False
"""
def XO(txt):
    if len(txt) == 0:
        return True
    
    lower_txt = txt.lower()
    print(lower_txt)
    num_x = lower_txt.count('x')
    num_o = lower_txt.count('o')

    # the manual way
    # for char in lower_txt:
    #     if char == 'o':
    #         num_o += 1
    #     elif char == 'x':
    #         num_x += 1

    return num_x == num_o


print(XO('ooxx'))
print(XO('xooxx'))
print(XO('ooxXm'))
print(XO('zpzpzpp'))
print(XO(''))
