"""
Given two strings `a` and `b`, write a function to determine if `a` is an
**anagram** of `b`.

*Note: an anagram is a word, phrase, or name formed by rearranging the letters
of another, such as cinema, formed from iceman.*

**Example:**

Input: `a` = "anagram", `b` = "nagaram"
Output `True`

**Example:**

Input: `a` = "bat", `b` = "tar"
Output `False`
"""
def is_anagram(a, b):
    # Your code here
    # two words are anagrams of each other if they 
    # contain the exact same number of each char

    # check if a and b have the same number of occurrences 
    # of each character as one another 

    # store the number of occurrences of a and b in their 
    # own dicts 

    # compare across keys in the two dicts and ensure that 
    # those keys both have the same value in both dicts 
    a_dict = {}
    b_dict = {}

    for char in a:
        if char in a_dict:
            a_dict[char] += 1
        else:
            a_dict[char] = 1

    for char in b:
        if char in b_dict:
            b_dict[char] += 1
        else:
            b_dict[char] = 1

    if len(a_dict) != len(b_dict):
        return False

    for char, occurrences in a_dict.items():
        if char not in b_dict:
            return False
        if b_dict[char] != occurrences:
            return False 

    return True 
