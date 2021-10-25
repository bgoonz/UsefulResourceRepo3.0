"""
You are a new author that is working on your first book. You are working on a
series of drafts. Each draft is based on the previous draft. The latest draft
of your book has a serious typo. Since each newer draft is based on the
previous draft, all the drafts after the draft containing the typo also include
the typo.
Suppose you have `n` drafts `[1, 2, 3, ..., n]` and you need to find out the
first one containing the typo (which causes all the following drafts to have
the typo as well).
You are given access to an API tool `containsTypo(draft)` that will return
`True` if the draft contains a typo and `False` if it does not.
You need to implement a function that will find the *first draft that contains
a typo*. Also, you have to pay a fee for every call to `containsTypo()`, so
make sure that your solution minimizes the number of API calls.
Example:
Given `n = 5`, and `draft = 4` is the first draft containing a typo.
containsTypo(3) -> False
containsTypo(5) -> True
containsTypo(4) -> True
"""
def containsTypo(n):
    return True

def firstDraftWithTypo(n):
    # Your code here
    # starting starting left point to 1
    left = 1
    # set a right side to n
    right = n

    # while the left side is less than the right side
    while left < right:
        # find the mid point with normalization
        # to deal with larger data sets
        # https://www.codecademy.com/articles/normalization
        midpoint = left + (right - left) // 2
    
    # if containsTypo(at the mid point):
    if containsTypo(midpoint):
        # set our right to our midpoint
        right = midpoint
    # otherwise
    else:
        # set our left to our midpoint plus one
        left = midpoint + 1
    
    # return left
    return left

# Aarons Version
# def firstDraftWithTypo(n):
#     start = 0
#     end = n
#     mid = 0
#     while start != end - 1:
#         mid = (start + end)//2
#         if containsTypo(mid):
#             end = mid
#         else:
#             start = mid
#     return end