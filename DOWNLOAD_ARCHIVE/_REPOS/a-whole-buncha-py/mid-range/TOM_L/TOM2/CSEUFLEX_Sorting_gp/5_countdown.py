"""
One of the most straightforward problems we can solve recursively is to print every number from n down to zero in succession.
We can do that simply by writing a function that prints n, then calls itself for n-1:
"""
# import sys

# sys.setrecursionlimit(100000000)
def countdown(n):  # label
    if n == 0: # condition
        return
    print(n) # body
    countdown(n - 1)  # decrement

# n = 10
# def countdown_i(n):
#     while (n > 0): # condition and label
#         print(n) # body
#         n -= 1 # decrement


countdown(1000000)




















# # Base case (note, the base case is not always first)
# def countdown(n):
#     if n == 0:
#         return
#     print(n)
#     countdown(n-1)








# """
# Let's explore what happens when we call our recursive function more than once:
# """


# def countdown(n):
#     # Base case (note, the base case is not always first)
#     if n == 0:
#         return
#     print(n)
#     countdown(n-1)
#     countdown(n-1)


   
# countdown(100)