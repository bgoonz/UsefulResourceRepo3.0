# how do we implement an array-reverse function in-place? 
def in_place_reverse(arr):
    # out-of-place solution 
    # Python's slicing syntax makes a copy of the array 
    # with the ordering of the elements reversed 
    # Space complexity: O(n)
    # Time complexity: O(n)
    # return arr[::-1]

    # how do we do this while only allocating a constant 
    # amount of additional memory? 
    # how can we re-use the input array? 
    # We're going to use a two-pointer approach, starting at 
    # the ends of the array, swapping the values those pointers 
    # referring to, and then moving those pointers closer 
    # towards the center of the array 
    # Time complexity: O(n)
    # Space: O(1)
    left = 0 
    right = len(arr) - 1

    # we know we need to loop 
    # what's the stopping criteria for our loop? 
    # when the left and right pointers refer to the 
    # same index 
    # criteria: so long as left < right 
    while left < right:
        # swap the values at these two pointers 
        arr[left], arr[right] = arr[right], arr[left]

        # move the pointers closer towards the center 
        left += 1
        right -= 1

    return arr
    
arr = [1,2,3,4,5,6,7,8]
print(in_place_reverse(arr))
