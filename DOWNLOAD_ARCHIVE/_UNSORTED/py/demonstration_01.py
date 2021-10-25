"""
Challenge #1:

Write a function that retrieves the last n elements from a list.

Examples:
- last([1, 2, 3, 4, 5], 1) ➞ [5]
- last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]
- last([1, 2, 3, 4, 5], 7) ➞ "invalid"
- last([1, 2, 3, 4, 5], 0) ➞ []

Notes:
- Return "invalid" if n exceeds the length of the list.
- Return an empty list if n == 0.
"""

def last(a, n):
    # Your code here
    return a[ len(a)-n :]

my_list = [4, 3, 9, 9, 7, 6, 12]

print(last(my_list, 3))

# Access of lists
# Get the first element of the list
# print(my_list[0])

# # # how about the last element? 
# print(my_list[len(my_list) - 1])
# # # we dont need the len(my_list) part
# print(my_list[-1])
# # second last element
# print(my_list[-2])


# # Getting sub arrays (slices of an array)
# # Get the first three elements
# # 
# print(my_list[0:3])
# # or
# print(my_list[:3])

# # Get [9, 9, 7]
# print(my_list[2:5])

# # # Get from 9 to end [9, 9, 7, 6, 12]
# print(my_list[2:])

# print(my_list[0:])

# print(my_list[:] is my_list) # this is a copy
# print(my_list is my_list)
 
