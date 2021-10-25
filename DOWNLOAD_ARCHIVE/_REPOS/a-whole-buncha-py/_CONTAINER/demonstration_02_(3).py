"""
Challenge #2:

Given a list of numbers, create a function that returns the list but with each
element's index in the list added to itself. You should add 0 to the number at
index 0, add 1 to the number at index 1, etc.

Examples:
- add_indexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
- add_indexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
- add_indexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

Notes:
- The input list will only contain integers.
"""

def add_indexes(numbers):
    # output = []
    # for index, item in enumerate(numbers):
    #     new_num = index + item
    #     output.append(new_num)

    # lets use list comprehension
    output = [index+item for index, item in enumerate(numbers) if item % 2 == 0]

    return output

# Loops in python
my_iterable = [1, 2, 3, 4, 5] # Iterable object
print(add_indexes(my_iterable))

# i = 0
# while i < len(my_list):
#     print(f'{i}: {my_list[i]}')
#     i += 1    

# Iterates over all items of an iterable object
# my_iterable = 'abcde'
# for item in my_iterable:
#     print(item)

# # # Loop over indexes
# for index in range(len(my_iterable)):
#     print(f'{index}: {my_iterable[index]}')


# index, item = (1, 'banana')

# print(list(enumerate(my_iterable)))
# for index, item in enumerate(my_iterable):
#     print(f'{index}: {item}')
