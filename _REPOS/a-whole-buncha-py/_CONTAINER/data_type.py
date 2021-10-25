"""
Challenge #5:
Create a function that returns the data type of a given argument. There are
seven data types this challenge will be testing for:
- List
- Dictionary
- String
- Integer
- Float
- Boolean
- Date
Examples:
- data_type([1, 2, 3, 4]) ➞ "list"
- data_type({'key': "value"}) ➞ "dictionary"
- data_type("This is an example string.") ➞ "string"
- data_type(datetime.date(2018,1,1)) ➞ "date" 
Notes:
- Return the name of the data type as a lowercase string.
"""
def data_type(value):
    # Solution 1
    if isinstance(value, list):
        return "list"
    elif isinstance(value, dict):
        return "dictionary"
    elif isinstance(value, str):
        return "string"
    elif isinstance(value, int):
        return "integer"
    elif isinstance(value, float):
        return "float"
    elif isinstance(value, bool):
        return "boolean"
    else:
        return "date"

    # Solution 2
    c=value.__class__.__name__
    return c+{'dict': 'ionary', 'str': 'ing', 'int': 'eger'}.get(c, '')

    # Solution 3
    return {
        'int': 'integer',
        'list': 'list',
        'dict': 'dictionary',
        'str': 'string',
        'float': 'float',
        'bool': 'boolean',
        'datetime.date': 'date'
    }[str(type(value))[8:-2]]

    # Solution 4
    types = {
        list: 'list',
        dict: 'dictionary',
        str: 'string',
        int: 'integer',
        float: 'float',
        bool: 'boolean',
        datetime.date: 'date'
    }
    t = type(value)
    return types[t]