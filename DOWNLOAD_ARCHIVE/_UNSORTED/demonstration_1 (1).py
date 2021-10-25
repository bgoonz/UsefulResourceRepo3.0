"""
Given a string, implement a function that returns the string with all lowercase
characters.

Example 1:

Input: "LambdaSchool"
Output: "lambdaschool"

Example 2:

Input: "austen"
Output: "austen"

Example 3:

Input: "LLAMA"
Output: "llama"

*Note: You must implement the function without using the built-in method on
string objects in Python. Think about how character encoding works and explore
if there is a mathematical approach that you can take.*
"""
def to_lower_case(string):
    result_str = ''
    # Transfer the characters to ascii
    binary_string = list(string.encode())
    #encoded_chars = [ord(x) for x in string]
    # convert the ascii to lower case letters
    for ascii_char in binary_string:
        if (ascii_char > 64 and ascii_char < 91):
            ascii_char += 32
        # Convert the character back to english
        regular_char = chr(ascii_char)
        result_str += regular_char
    
    return result_str
    # return ''.join([chr(char + 32) if char > 64 and char < 91 else chr(char) for char in string.encode()])


print(to_lower_case("LambdaSchool"))
print(to_lower_case("LLAMA"))
print(to_lower_case("computer science"))
