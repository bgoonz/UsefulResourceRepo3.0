"""
Challenge #10:

Given a string of space separated integers, write a function that returns the
maximum and minimum integers.

Example:
- max_and_min("1 2 3 4 5") -> "5 1"
- max_and_min("1 2 -3 4 5") -> "5 -3"
- max_and_min("1 9 3 4 -5") -> "9 -5"

Notes:
- All inputs are valid integers.
- There will always be at least one number in the input string.
- The return string must be two numbers separated by a single space, and
the maximum number is first.
"""
def max_and_min(input_str):
    # Your code here
    """
    Input: String of space-separated numbers 
    Output: A string with two space-separated numbers where the max is first and min is second 
    
    We have `max` and `min` functions that work on numbers 
    We have a variant of a problem where if the input was in a different format, 
    we'd have our solution to the problem 

    1. Turn our input string into a list of numbers 
    2. Use `max` and `min` functions to calculate the max and min
    3. We now have the max and min integers; format them into the required string format  
    """
    split = [str_digit for str_digit in input_str.split(' ')]
    
    lil = min(split)
    big = max(split)

    return f"{big} {lil}"

print(max_and_min("1 9 3 4 -5"))

# print(max([1, 9, 3, 4, -5]))
# print(min([1, 9, 3, 4, -5]))
  