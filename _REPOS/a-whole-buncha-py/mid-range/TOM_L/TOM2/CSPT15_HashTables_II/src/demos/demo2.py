"""
Given a string, sort it in decreasing order based on the frequency of characters.
Example 1:
```plaintext
Input:
"free"
Output:
"eefr"
Explanation:
'e' appears twice while 'f' and 'r' appear once.
So 'e' must appear before 'f' and 'r'. Therefore, "eerf" is also a valid answer.
```
Example 2:
```plaintext
Input:
"dddbbb"
Output:
"dddbbb"
Explanation:
Both 'd' and 'b' appear three times, so "bbbddd" is also a valid answer.
Note that "dbdbdb" is incorrect, as the same characters must be together.
```
Example 3:
```plaintext
Input:
"Bbcc"
Output:
"ccBb"
Explanation:
"ccbB" is also a valid answer, but "Bbcc" is incorrect.
Note that 'B' and 'b' are treated as two different characters.
```
"""

# use the counter from collections to save us some time
import collections

def frequency_sort(s: str) -> str:
    """
    Inputs:
    s -> str
    Output:
    str
    """
    # Your code here
    # count up all of the occurrences of each letter
    # ref: https://docs.python.org/3/library/collections.html#collections.Counter
    letters_count = collections.Counter(s)

    # create a list to build the string
    string_build = list() # []

    # iterate over the sorted counts (using the ".most_common()" method) extracting the letter and frequency key value pair
    for letter, frequency in letters_count.most_common():
        # letter * frequency
        # "V" * 5 -> "VVVVV"
        # append the letter * frequency to the string_build list
        string_build.append(letter * frequency)
    
    # turn the list back in to a string and return it (use a join?)
    return "".join(string_build)

print(frequency_sort("free"))  # => "eefr"
print(frequency_sort("dddbbb"))  # => "dddbbb"
