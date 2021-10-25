"""
I was bored one day and decided to look at last names in the phonebook for my
area.

I flipped open the phonebook to a random page near the middle and started
perusing. I wrote each last name that I was unfamiliar with down on paper in
increasing order. When I got to the end of the phonebook, I was having so much
fun I decided to start from the beginning and keep going until I reached the
page where I had started.

When I was finished, I had a list of interesting last names that were mostly
alphabetical. The problem was that my list starts somehere near the middle of
the alphabet, reaches the end, and then starts from the beginning of the
alphabet. In other words, my list of names is sorted, but it is "rotated."

Example:

surnames = [
    'glover',
    'kennedy',
    'liu',
    'mcdowell',
    'nixon',
    'sparks',
    'zhang',
    'ahmed',  # <-- rotates here!
    'brandt',
    'davenport',
    'farley',
]

Write a function that finds the index of the "rotation point". The "rotation
point" is where I started working from the beginning of the phone book. The
list I came up was absolutely huge, so make sure your solution is efficient.

*Note: you should be able to come up with a solution that has O(log n) time
complexity.*
"""


def find_rotation_point(surnames):
    # create a floor_index at zero
    # create a ceiling_index at length - 1
    # keep track of first_name in our window
    # first_name = surnames[floor_index]

    # while floor_index < ceiling_index:
        # guess in the middle of floor and ceiling
        # guess = ceiling + floor // 2 (get the middle index)
        # if the word at guess_index is larger than first_name
            # shrink our floor down to the guess_index
        # else
            # shrink our ceiling down to the guess_index
        
        # if we reach a point, where theres only two items left between
        # ceiling and floor, return the item at the ceiling
        # that item will always be alphabetically smaller
    pass
    

surnames = [
    'glover',
    'kennedy',
    'liu',
    'mcdowell',
    'nixon',
    'sparks',
    'zhang',
    'ahmed',  # <-- rotates here!
    'brandt',
    'davenport',
    'farley',
]

print(find_rotation_point(surnames))

