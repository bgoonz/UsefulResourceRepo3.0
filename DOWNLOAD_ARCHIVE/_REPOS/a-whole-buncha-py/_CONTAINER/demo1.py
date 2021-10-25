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

L => l
"""
l = ['A', 'B', 'C']

"""
- encode chars...
- iterate over encoded chars...
  - if the encoded chars are between 64 and 91 exclusive...
    increment the encoded chars at a current index by 32

- create and empty list to hold decoded chars
- decode the chars... (iterate over the encoded chars)...
  - append the current encoded char to the decoded char as teh chr of the current number

- convert the array in to a string...

return the string to the caller
"""

def change_things(lst):
  out_list = []
  encoded_chars = []
  for c in lst:
    encoded_chars.append(ord(c))

  for num in lst:
    if num > 64 and num < 91:
      print("Change the number")
      out_list.append(chr(num + 32))
    else:
      print("Don't change the number!")
      out_list.append(chr(num))
  return out_list

# print(change_things(l))
def to_lower_case(string): # O(n)
  # Your code here
  encoded_chars = []
  for c in string:
    encoded_chars.append(ord(c))
  
  for i in range(len(encoded_chars)):
    if encoded_chars[i] > 64 and encoded_chars[i] < 91:
      encoded_chars[i] += 32
    
  decoded_chars = []
  for num in encoded_chars:
    decoded_chars.append(chr(num))

  final_string = "".join(decoded_chars)

  return final_string

# test...
print(to_lower_case("Lambda School"))
print(to_lower_case("austen"))
print(to_lower_case("LLAMA"))
print(to_lower_case("23423';';;';';ABC'"))
