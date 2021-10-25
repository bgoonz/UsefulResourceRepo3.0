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
def frequency_sort(s: str) -> str:
    """
    Inputs:
    s -> str

    Output:
    str
    """
    # Build our frequency_dict
    freq_dict = {}
    for char in s:
        if char not in freq_dict:
            freq_dict[char] = 1
        else:
            freq_dict[char] += 1

    output_str = "".join(sorted(s, key=lambda x : freq_dict[x], reverse=True))
    return output_str



s = 'freeabbb'

print(frequency_sort(s))

    