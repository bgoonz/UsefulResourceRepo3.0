"""
Challenge #5:

Create a function that returns a list of strings sorted by length in ascending
order.

Examples:
- sort_by_length(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
- sort_by_length(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
- sort_by_length(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
- sort_by_length([]) ➞ []
"""
#len
# def len(a):
    # do some stuff
    # return num

def convert_to_length(str):
    return len(str)

#arr.map((item) => {return item.length}) 

def sort_by_length(lst):
    # sorted_list = sorted(lst, key=lambda item: len(item))
    sorted_list = sorted(lst, key=len)
    return sorted_list



str_list = ["aa", "c", "dddd", "bbb"]


print(sort_by_length(str_list))
