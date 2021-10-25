"""
Given an array of integers `nums` and an integer `target`, return the indices
of the two numbers that add up to the `target`.

Examples:

- two_sum(nums = [2,5,9,13], target = 7) -> [0,1] (nums[0] + nums[1] == 7)
- two_sum(nums = [4,3,5], target = 8) -> [1,2] (nums[1] + nums[2] == 8)

Notes:

- Each input will have only one solution.
- You may not use the same element twice.
- You can return the answer in any order.
"""
def two_sum(nums, target):
    # Your code here
    # 1. Nested for loops / Brute force approach 
    # outer for loop loops over all elements in `nums`
    # O(n^2)
    # for i in range(len(nums)): # O(n)
    #     # inner loop that loops over all numbers in front of outer loop num 
    #     for j in range(i + 1, len(nums)): # O(n)
    #         # we check if the two nums add up to our target 
    #         if nums[i] + nums[j] == target: # O(1)
    #             # return their two indices 
    #             return [i, j] # O(1)
    # # at this point, we went through the entire list, and found no numbers
    # # that sum up to our target 
    # return "No solution found" 

    # O(n) + O(n) = O(2 * n) = O(n)
    # 2. keep a dictionary that keeps track of the numbers as keys and their
    # indices as values 
    dict = {}

    # loop over our list of nums to populate this dictionary 
    for i in range(len(nums)): # O(n)
        dict[nums[i]] = i      # O(1)

    # loop over our list of nums 
    for i in range(len(nums)): # O(n)
        # check if target - nums[i] is in our dictionary 
        # and that we haven't used this number already 
        complement = target - nums[i] # O(1)
        #        O(1)                    # O(1)
        if complement in dict and dict[complement] != i: # O(1)
            # if it is, return the two indices 
            return [i, dict[target - nums[i]]  # O(1)

    return "No solution found"  # O(1)
    