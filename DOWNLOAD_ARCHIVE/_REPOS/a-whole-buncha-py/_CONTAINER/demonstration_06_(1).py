"""
Challenge #6:

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u as vowels for this challenge (but not y).

The input string will only consist of lower case letters and/or spaces.
"""
def get_count(input_str):
    # Your code here
    # i = 0
    # lower_str = input_str.lower()
    # vowels_str = 'aeiou'
    # vowels_arr = []
    # while i < len(lower_str):
    #     char = lower_str[i]
    #     if char in vowels_str:
    #         vowels_arr.append(char)
    #     i += 1

    return len([char for char in input_str.lower() if char in 'aeiou'])



sample_str = 'auidah kEoLmno' # 7 vowels

print(get_count(sample_str))