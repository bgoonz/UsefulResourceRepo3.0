"""
Demonstration #2

Given a non-empty array of integers `nums`, 
every element appears twice except except for one. 
Write a function that finds the element that only appears once.

Examples:

- single_number([3,3,2]) -> 2
- single_number([5,2,3,2,3]) -> 5
- single_number([10]) -> 10
"""
# def single_number(nums):
#     # loop over each item
#     for num in nums:
#         # count the item
#         count = nums.count(num)
#         if count > 1: 
#             continue
#         else: 
#             return num
def single_number(nums):
    count_dict = {}
    for num in nums:
        # if new num, add to dict
        if num not in count_dict:
            count_dict[num] = 1
        # else, increase the count
        else:
            count_dict[num] += 1

    for num in nums:
        if count_dict[num] == 1:
            return num


print(single_number([3,3,2]))
print(single_number([5,2,3,2,3]))
print(single_number([10]))


# Dictionary (KEY / VALUE PAIR)
# Objects / Hashmaps / Hash tables / Hashs /

phonebook = {
    "Abe": 1234,
    "Bill": 555,
}

# # get Abes phone number
# print(phonebook['Abe']) # O(1)

# if "Abe" in phonebook:
#     print("Yes")

# names = ['Abe', 'Bill']

# if "Abe" in names:
#     print("Yes in array")
