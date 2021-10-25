"""
We'll say that a positive 
int divides itself if every digit in the number 
divides into the number evenly. So for example 
128 divides itself since 1, 2, and 8 all divide into 128 evenly. 

And we'll say that 0 does not divide into anything evenly, 
so no number with a 0 digit divides itself. 

Write a function to determine if a number divides itself.

[source - https://codingbat.com/prob/p165941]
"""

# loop through the digits in the number
# - use % to get the rightmost digit
# - use / to discard the rightmost
# - if dividing by the single digit leaves a remainder return false
# - if the digit is a zero return false

# - if the loop exits without returning false then return true

# def divides_self(num):
#     # TODO: find the bug...
#     # set a temp variable to hold the number
#     value = num
#     # Loop over the digits in the number
#     # check if the num mod 10 is zero
#     if num % 10 == 0:
#         # return False
#         return False
#     # while the num is not zero
#     while num != 0:
#         # check if our value moded against our num modded against 10 is not zero
#         if value % (num % 10) != 0:
#             # return False
#             return False
        
#         # divide our value by 10 to make sure we do not get an infinite loop
#         value //= 10

#     # return True
#     return True

# anonymous student submission
def divides_self(num):
    value = [int(x) for x in str(num)]
    for v in value:
        if v == 0 or num % v != 0:
            return False
    return True

def mannie_divides_self(num):  
    value = num
    while value != 0:
        digit = int(value % 10)
        if digit ==  0 or num % digit != 0:
            return False
        value = value // 10
    return True
print(divides_self(128))  # > True
print(divides_self(12))  # > True
print(divides_self(120)) # > False
