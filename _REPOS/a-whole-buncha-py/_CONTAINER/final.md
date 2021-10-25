

## Devision 06 - Introducing Data Types and Conditionals

Welcome to this section, where we will talk about numeric data types, and conditional program execution. After looking at the numeric and boolean data types, we will turn our attention to executing code, based on logical conditions.

### Step 01: Numeric Data Types

In previous sections, we created variables of this kind: `number = 5` , `value = 2.5`, etc. The `5` here is an integer, and integers represent numbers, such as `1`, `2`, `6`, `-1` and `-2`. In Python, the `class` for this particular data type is `int`.

If you write code like `type(5)`, you’d get `'int'` as the output.

In Python, there are no primitive types. What does that mean? Every value that you see in a Python program, is an object, an instance of some `class`.

In later sections, We’ll understand what is a `class`, and what is an object or an instance. For now, the most important thing for you to remember, is that behind every value, there is a `class`.

**Snippet-01:**

Let’s look at `2.5`, which is a floating point value.

If you go ahead and do `type(2.5)`, what would you see? You would see it’s of type \``float`.

```python
    >>> type(2.5)
    <class 'float'>
    >>> type(2.55)
    <class 'float'>
```

When you perform a division operation between two integers, there is a chance that the result of the operation is a `float`. If you do `5/2`, the result is `2.5`. If we were to do `4/2`, even then it’s of type `float`.

```python
    >>> type(5/2)
    <class 'float'>
    >>> type(4/2)
    <class 'float'>
    >>> 4/2
    2.0
    >>> 1 + 2
    3
```

All the operations we looked at until now, can also be performed on floating point values.

```python
    >>> value1 = 4.5
    >>> value2 = 3.2
    >>> value1 + value2
    7.7
    >>> value1 - value2
    1.2999999999999998
    >>> value1 / value2
    1.40625
    >>> value1 % value2
    1.2999999999999998
```

`value1 - value2` returns `1.299999999999998`. Why?

Floating point numbers don’t really represent accurate values. That’s one of the things you need to always keep in mind.

Typically, if you’re doing any highly sensitive financial calculations, don’t use `float`s to represent your values. Instead, use `Decimal`. More about it later.

Operations can also be performed between `int` and `float`.

```python
    >>> i + value1
    14.5
    >>> i - value1
    5.5
    >>> i / value1
    2.2222222222222223
    >>>
```

Result of an operation between a `int` and a `float`, is always a `float`.

**Summary**

In this step, we:

- Looked at the two basic numeric types: `int` and `float`.
- Saw the basic operations you can do among `int`s, among `float`s, and also between `int`s and `float`s.

### Step 02: Programming Exercise PE-DT-01

In this step, let’s do a simple exercise with numeric values.

**Exercises**

1. You need to create a method called `simple_interest`, and pass three parameters: `principal`, `interest` and `duration` \(in years\). You also want to calculate the amount after the specific duration, and return it back. Call this method with a few example values.

For example, if you want to call `simple_interest` with `10000`, with an interest of `5` percent, for a duration of `5` years, the correct answer would be as follows: `10000` is the principal. In addition to `10000`, you get the interest. The interest for one year is `10000 * 0.05`, as the interest figure is in percentage.So that’s `500` a year, into `5` which is `2500`. The result would be `12500`, and this value should be printed.

**Solution 1**

```python
    def calculate_simple_interest(principal, interest, duration) :
            return principal * (1 + interest * 0.01 * duration)

    print(calculate_simple_interest(10000,5,5))
```

**Summary**

In this step, we:

- Wrote a very simple method to do a simple interest calculation

### Step 03: Puzzles On Numeric Types

In this section, we are looking at numeric types. In this specific step, we would be looking at a few puzzles related to values of these types.

**Snippet-01:**

Let’s create a simple variable `i = 1`. `i = i + 1`. What would be the value of `i` after that?

```python
    >>> i = 1
    >>> i = i + 1
    >>> i
    2
```

It would be `2`. There is a shortcut way of doing the same thing, by using the `+=` operator.

```python
    >>> i += 1
    >>> i
    3
```

Typically in other programming languages, you can do something of this kind: `i++`. There is no provision in Python to use increment operators like `++`, in either prefix or suffix mode, like `++i`, or `i++`.

```python
    >>> i++
      File "<stdin>", line 1
        i++
          ^
    SyntaxError: invalid syntax
    >>> ++i
    3
```

Let’s look at compound assignments.

```python
    >>> i += 1
    >>> i
    4
    >>> i -= 1
    >>> i
    3
    >>> i /= 1
    >>> i *= 2
    >>> i
    6.0
```

What you see here, is Dynamic Typing in Python. The type of a variable can change during the lifetime of the program.

```python
>>> i = 2
>>> type(i)
<type 'int'>
>>> i = i/2.0
>>> type(i)
<type 'float'>
```

Let’s create a couple more numbers. `number1 = 5` and `number2 = 2`. What could be the result of `number1 / number2`? You know it, it’s `2.5` .

`number1 // nummber2` truncates the value of `2.5`, to `2`.

```python
    >>> number1//number2
    2
```

If you can do `number1 // number2`, can you also do this: `number1 //= number2`?

```python
    >>> number1 //= 2
    >>> number1
    2
```

`5 ** 3` is `5` ‘to the power of’ `3`, which is `5 * 5 * 5`, or `125`.

```python
    >>> 5 ** 3
    125
    >>> pow(5,3)
    125
```

This can also be achieved by invoking `pow(5, 3)`. We have an operator, as well as a method at our disposal.

The last thing we will look at, are type conversion functions.

If you need to convert an `int` value to a `float`, or a `float` to an `int`.

```python
    >>> int(5.6)
    5
```

What if you want to round a value? `5.6` is nearer to `6` than `5`. You can use a function called `round()`, and here,`round(5.6)` gives the correct result `6`.

```python
    >>> round(5.6)
    6
    >>> round(5.4)
    5
    >>> round(5.5)
    6
```

`round()` can also allows you to specify number of decimals in the result.

```python
    >>> round(5.67, 1)
    5.7
    >>> round(5.678, 2)
    5.68
```

You can also convert `int` to `float`, by using the function `float()`.

```python
    >>> float(5)
    5.0
```

**Summary**

In this step, we:

- Looked at a few corner cases related to your numeric types.
- Examined the different operators available for use with values of numeric types
- Learned about the usage of type conversion functions

### Step 04: Introducing Boolean Type

We will now shift our attention to the `bool` data type.

A boolean value is something which can be either “true” or “false”.

**Snippet-01:**

In Python, “true” is represented by `True`, and “false” by `False`. It’s important to remember that it’s `True` with a capital `'T'`, and `False` with a capital `'F'`.

```python
    >>> True
    True
    >>> False
    False
    >>> true
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'true' is not defined
    >>> false
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'false' is not defined
```

The boolean variable `is_even` indicates whether a number is even or not.

```python
    >>> is_even = True
    >>> is_odd = False
```

Let’s create a variable `i = 10`. We want to find out if `i > 15`. What do you think is the result? `False`.

```python
    >>> i = 10
    >>> i > 15
    False
    >>> i < 15
    True
```

In general, boolean values can represent the result of logical conditions.

Let’s look at other operations that can result in `bool` values. We looked at `>` and `<`. Another operation which you can perform, is `>=`.

```python
    >>> i >= 15
    False
    >>> i >= 10
    True
    >>> i > 10
    False
    >>> i <= 10
    True
    >>> i < 10
    False
```

`==` is the comparison operator. We are only comparing the value of `i` against `10`, not changing its value.

```python
    >>> i == 10
    True
    >>> i == 11
    False
```

**Summary**

In this step, we:

- Were introduced to the `bool` data type
- Learned that `bool` variables are useful handy while testing logical conditions

### Step 05: Introducing Conditionals

In this step, let’s look at `if` statement.

Sometimes you need to execute code only when certain conditions are true. You can use a `if` condition, which is the simplest conditional in Python. Let’s look at an example.

**Snippet-01:**

Let’s say `i` has a value of `5`. You want to print something, only if `i` has a value greater than `3`. How do you do that?

```python
    >>> i = 5
    >>> if i>3:
    ...     print(f"{i} is greater than 3")
    ...
    5 is greater than 3
```

The syntax of the `if` is very simple: `if` followed by a condition; with the condition you want to check. It looks like: `if i>3: ...` You need to indent the body of the `if` with `<SPACE>`s as usual.

Let’s say `i` has a value of `2`. What would happen if we execute the same code again?

```python
    >>> i = 2
    >>> if i>3:
    ...     print(f"{i} is greater than 3")
    ...
```

You would see that nothing is printed to the console. Based on the value of `i` , either the statement is executed, or it’s not. That’s what an `if` helps us to do.

The way you can think about an `if`, is the body of code under the `if` is executed only when this condition is `True`. If this condition is not `True`, that code is not executed at all.

```python
    >>> if(False):
    ...   print("False")
    ...
    >>> if(True):
    ...   print("True")
    ...
    True
```

Let’s take two different numbers, say `a = 5`, and `b = 7`. We want to compare them, and predict if `a` is greater that `b` .

```python
    >>> a = 5
    >>> b = 7
    >>> if(a>b):
    ...   print("a is greater than b")
    ...

    >>> a = 9
    >>> if(a>b):
    ...   print("a is greater than b")
    ...
    a is greater than b
```

**Summary**

In this step, we:

- Were introduced to the `if` statement, the simplest Python conditional
- Understood how an `if` helps in implementing conditional program logic

### Step 06: Classroom Exercise CE-DT-01

In this step, let’s look at a couple of exercises with the if statement.

**Snippet-01:**

Let’s say we define four variables: `a = 1`, `b = 2` , `c = 3` and `d = 5`. we want to find out, if `a + b` is greater than `c + d`.

```python
    >>> a = 1
    >>> b = 2
    >>> c = 3
    >>> d = 5
    >>> if a+b > c+d :
    ...    print("a+b > c +d")
    ...
    >>> a = 9
    >>> if a+b > c+d :
    ...    print("a+b > c +d")
    ...
    a+b > c +d
```

Let’s say we are given three values meant to be the angles of a triangle. Their values are `angle1 = 30`, `angle2 = 20` and `angle3 = 60`. You want to find out if these three angles actually form a valid triangle. You know that the sum of the angles of a triangle is always `180` degrees.

```python
    >>> angle1 = 30
    >>> angle2 = 20
    >>> angle3 = 60
    >>> if(angle1 + angle2 + angle3 == 180):
    ...      print("Valid Triangle")
    ...
    >>> angle2 = 90
    >>> if(angle1 + angle2 + angle3 == 180):
    ...      print("Valid Triangle")
    ...
    Valid Triangle
```

The last exercise is to check if a number is even or not.

Hint L you need to use one of the operators we talked about earlier. That’s right, use the modulo operator `%`.

```python
    >>> i = 2
    >>> if(i%2==0):
    ...   print("i is even")
    ...
    i is even

    >>> i = 3
    >>> if(i%2==0):
    ...   print("i is even")
    ...
```

**Summary**

In this step, we:

- Looked at a few exercises related to the if statement, for writing and testing conditions.

### Step 07 - Logical Operators - and or not

In this step, let’s look at the different operators that can be used on `bool` values. These operators are called logical operators - `and`, `or` , `not` and `^` \(xor\).

Let’s say we have a value `True`, and the other `False`, and we want to play around with them.

Logical operator `and` returns true only when both operands are `True`.

```python
    >>> True and False
    False
    >>> True and True
    True
    >>> True and False
    False
    >>> False and True
    False
    >>> False and False
```

Logical operator `or` returns true when atleast one of the operands is `True`.

```python
    False
    >>> True or False
    True
    >>> False or True
    True
    >>> True or True
    True
    >>> False or False
```

Logical operator `not` returns negation.

```python
    False
    >>> not True
    False
    >>> not(True)
    False
    >>> not False
    True
    >>> not(False)
    True
```

The XOR operation, denoted by the `^` operator, is `True` when operands have different boolean values.

```python
    >>> True ^ True
    False
    >>> True ^ False
    True
    >>> False ^ True
    True
    >>> False ^ False
    False
```

**Summary**

In this step, we:

- Looked at the logical operators that act on boolean values, such as `and`, `or`, `not` and `^`
- Explored each of these operators, finding out when they return `True`, and when `False`.

### Step 08: Puzzles On Logical Operators

In this step, Let’s look at a few simple puzzles to look at the logical operators.

**Snippet-01:**

Let’s say `i` has a value of `10`, and `j` has a value of `15`. You want to find out if both `i` and `j` are even. How do you do that?

```python
    >>> i = 10
    >>> j = 15
    >>> if i%2==0 and j%2==0:
    ...   print("i and j are even")
    ...
    >>> j = 14
    >>> if i%2==0 and j%2==0:
    ...   print("i and j are even")
    ...
    i and j are even

    >>> if i%2==0 or j%2==0:
    ...
      File "<stdin>", line 2
        ^
    IndentationError: expected an indented block
    >>> if i%2==0 or j%2==0:
    ...   print("atleast one of i and j are even")
    ...
    atleast one of i and j are even
```

If we want to find out if at least one of `i` and `j` is even, we can use the `or` operator.

```python
    >>> i = 15
    >>> j
    14
    >>> if i%2==0 or j%2==0:
    ...   print("atleast one of i and j are even")
    ...
    atleast one of i and j are even
    >>> j = 23
    >>> if i%2==0 or j%2==0:
    ...   print("atleast one of i and j are even")
    ...
    >>> i
    15
```

Now try and guess the value of this. `if(True ^ False): print("Message")`

```python
    >>> if(True ^ False):
    ...     print("This will Print")
    ...
    This will Print
    >>> if(False ^ True):
    ...     print("This will Print")
    ...
    This will Print
    >>> if(True ^ True):
    ...     print("This will Print")
    ...
```

Xor operation using `^` - message will get printed if the operands are different.

What would happen if both of them are `True`? No message is printed.

So you would use `^` in situations, where you’d want one of the operands to be `True`, and the other to be `False`.

Let’s say, `x = 5`, and you want to check `if not x == 6: print("This")`. What will be the result of running this code?

```python
    >>> x = 5
    >>> if not x == 6:
    ...   print("This")
    ...
    This
    >>> x = 6
    >>> if not x == 6:
    ...   print("This")
    ...
```

Actually, there is a shortcut for such a condition: `if x != 6 : print("This")`.

```python
    >>> if x!=6:
    ...   print("This")
    ...
    >>> x=5
    >>> if x!=6:
    ...   print("This")
    ...
    This
```

`int()` is a conversion function, which when given say a `float` value, returns an `int` value. Consider `int(True)`, what would happen?

```python
    >>> int(True)
    1
    >>> int(False)
    0
```

`int(True)` returns 1. `int(False)` returns 0.

```python
    >>> x = -6
    >>> if x:
    ...   print("something")
    ...
    something
```

One of the most interesting facts about boolean stuff, is anything which is non-zero, is considered to be `True`.

`0` is the only integer value which is considered to be `False`.

```python
    >>> bool(6)
    True
    >>> bool(-6)
    True
    >>> bool(0)
    False
    >>>
```

So, if I have a value of `x = -6`, and execute `if x: print("something")` what do you think will happen?

`"something"` will be printed.

You can use the function `bool()`, to convert `int` to a `bool` value.

- `bool(6)` returns `True`
- `bool(-6)` returns `True`
- `bool(0)` returns `False`.

Except for `bool(0)`, all the other results would be `True`.

**Summary**

In this step, we:

- Looked at a few puzzles related to the logical operators
- Looked at conversion functions such as `bool()` and `int()` to convert between boolean and integer data

### Step 09:

In this step, let’s look at two other important components of an `if` statement: `else` and `elif`. Let’s start with `else`.

**Snippet-01:**

Consider a scenario where `i` has a value of `2`. Let’s try to print a message `"i is even"` if `i` is an even number. Otherwise, print `"i is odd"`.

Earlier we wrote code along these lines: `if i % 2 == 0 : print("i is even")`. However if this condition is not `True`, we would want to `print("i is odd")`. How do we accomplish that?

```python
    >>> i = 2
    >>> if i%2 == 0:
    ...   print("i is even");
    ... else:
    ...   print("i is odd");
    ...
    i is even
```

An `else` clause provides an alternative code body to execute, if the `if` condition is `False`.

```python
    >>> i = 3
    >>> if i%2 == 0:
    ...   print("i is even");
    ... else:
    ...   print("i is odd");
    ...
    i is odd
```

Let’s look at `elif`.

We want to do something if `i` has value of `3`, and something totally different if `i` has a value of `4`.

In short, we want to specify 2 alternatives to the `if` condition. How can that be done?

```python
    >>> if i==1:
    ...   print("i is 1")
    ... elif i==2:
    ...   print("i is 2")
    ... else:
    ...   print("i is not 1 or 2")
    ...
    i is not 1 or 2
    >>>
```

That’s where the **`elif`** clause comes into the picture. The code in `elif` is executed if the previous conditions are false and the current `elif` condition is true.

**Summary**

In this step, we:

- Looked at two important components of the `if` statement: `else` and `elif`.
- Understood that the `elif` clauses and the final `else` clause provide alternative conditions to check, when earlier if conditions are true.

### Step 10: Classroom Exercise CE-DT-02

In this step, let’s do a simple exercise with `if`, `else` and `elif`.

Before getting to the exercise, let’s try and learn how to get console input from the user.

Until now, we had been hard-coding all the data we were to use. Let’s make that part more dynamic now.

**Snippet-01:**

How do we get input from the user? We want to get input from the console, and assign it to a variable. The way we can do that, is by statement `value = input()`

```python
    value = input("Enter a Value: ")
    print("you entered ", value)
```

We can call the `input()` method with a text ‘prompt’, such as `"Enter A Value: "`. What we can initially do here, is print the value which was entered, back to the console, by `print("you entered ", integer_value)`.

An interesting point to explore here, is the type of data input at the console.

Let’s do a `print(type(value))`.

```python
    value = input("Enter a Value: ")
    print("you entered ", value)
    print(type(value))
```

Input a value of `Test`. It has a class of `str`.

Let’s run it again to see other possibilities. This time, let’s enter a numeric value, say `12`. what would happen?

We again get `str`.

We want to get an integer value from the input. How can we do it?

`int()` function converts string to int. Let’s use it.

```python
value = input("Enter a Value: ")
integer_value = int(value)
print("you entered ", integer_value)
print(type(integer_value))
```

Let’s run our code once again.

`"Enter A Value: "` is prompted, and we enter `15`. And now, of it says `"You entered 15"`, and the type it indicates to us, is `int`.

**Design a menu**

- Ask the User for input:
  - Enter two numbers
  - Choose the Option:
    - 1 - Add
    - 2 - Subtract
    - 3 - Multiply
    - 4 - Divide
- Perform the Operation
- Publish the Result

Let’s design a menu, and then ask the user for input.

We have codes for each of the operations : add is `1`, subtract is `2`, divide is `3`, and multiply is `4`.

In the first version of the program let’s get all the inputs and print them out.

**Solution**

The first version of the program is simple to write

```python
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))
print(f"You entered {number1}")
print(f"You entered {number2}")
print(number1 + number2)
print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")
print("5 - Exit")
choice = int(input("Choose Operation: "))
print(choice)
```

We will continue this exercise to complete it, in the next step.

**Summary**

In this step, we:

- Looked at the in-built `input()` function that can read console input
- Learned that `input()` always returns what the user enters, as a string
- We can convert the string from `input()`, to the data type we expect by invoking conversion functions

### Step 11: Continued - Classroom Exercise CE-DT-02

**Exercises**

In the previous step, we got the input from the user. Let’s continue the exercise in this step. We want to write an if condition.

**Solution \(Continued\)**

Extending the solution is easy. Write appropriate `if`, `elif` and `else` conditions.

```python
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))

print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")

choice = int(input("Choose Operation: "))

# print(number1 + number2)
# print(choice)
if choice==1:
    result = number1 + number2
elif choice==2:
    result = number1 - number2
elif choice==3:
    result = number1 / number2
elif choice==4:
    result = number1 * number2
else:
    result = "Invalid Choice"

print(result)
```

We added the following code to account for invalid input.

```python
else:
    result = "Invalid Choice"
```

**Summary**

In this step, we:

- Augmented the Menu Exercise to get all the input from the console, and compute a value from them
- Corrected the logic to handle incorrect input

### Step 12: Puzzles On Conditionals

In this step, let’s look at a few puzzles related to these `if`, `elif` and `else` clauses.

**Puzzle-01**

Let’s start with the first puzzle. Guess the output.

```python
k = 15
if (k > 20):
  print(1)
elif (k > 10):
  print(2)
elif (k < 20):
  print(3)
else:
  print(4)
```

When we run it, you can see that the output is `2`.

`k` has a value of `15`, is it greater than `20`? No! Execution goes to the `elif`, is `k` greater then `10`? Yes. It prints `2` and goes out of the complete `if`-`else` block.

Inside the `if` conditional, the `if`, `elif` and `else` clauses are all independent ones. Only one matching block is ever executed.

**Puzzle-02**

What do you think would be the output of this particular piece of code?

```python
l = 15
    if (l < 20):
        print("l<20")
if (l > 20):
    print("l>20")
else:
    print("Who am I?")
```

Note that there are two totally different `if` conditions in here : `if l < 20: ...` immediately followed by`if l > 20: ... else: ...`.

The first `if` is true. `l<20` is printed.

The second `if` is a separate statement. The condition is false. So. `else` gets executed. Therefore, `"who am I"` gets printed.

**Puzzle-03**

Let’s run this code.

```python
m = 15
if m>20:
    if m<20:
        print("m>20")
    else:
        print("Who am I?")
```

You can see that nothing is printed.

The most important thing to focus on here, is indentation.

The second `if` block is executed only if the first `if` is true.

**Puzzle-04**

What would be the output?

```python
number = 5
if number < 0:
  number = number + 10
number = number + 5
print(number)
```

`10` is printed.

The most important thing to focus on here, is indentation.

Only `number = number + 10` is part of `if` block. It is not executed because the condition is false.

`number = number + 5` is not part of `if`. So, it gets executed.

Let’s add a couple of spaces before `number = number + 5`.

What would be the output?

```python
number = 5
if number < 0:
  number = number + 10
  number = number + 5
print(number)
```

`5` is printed.

Both the statements `number = number + 10` and `number = number + 5` are part of `if` block. They are not executed because the condition is false.

**Summary**

In this step, we:

- Looked at a few puzzles related to `if`, `elif` and `else`
- Explored the importance of indentation and the different condition clauses inside an `if` statement

### Step 01: The Python Type To Denote Text

Let’s start looking at another important data type in Python, that’s used to represent strings. Not surprisingly, it is in fact named `str`!

Let’s look at valid string representations.

```python
    >>> message = "Hello World"
    >>> message = 'Hello World'
    >>> message = 'Hello World"
      File "<stdin>", line 1
        message = 'Hello World"                          ^
     SyntaxError: EOL while scanning string literal
```

In Python, you can use either \`\`\``or`""\` to delimit string values.

`type()` method can be used to find type of a variable.

```python
    >>> message = "Hello World"
    >>> type(message)
    <class 'str'>
```

The `str` `class` provides a lot of utility methods.

```python
    >>> message.upper()
    'HELLO WORLD'
    >>> message.lower()
    'hello world'
    >>> message = "hello"
```

`message.capitalize()` does init caps. Only first character is changed to uppercase.

```python
    >>> "hello".capitalize()
    'Hello'
    >>> 'hello'.capitalize()
    'Hello'
```

You can also run this directly - `'hello'.capitalize()`. Isn’t that cool!

That’s because each piece of text in python is an object of the `str` `class`, and we can directly call methods of that `class` on `str` objects.

Now let’s shift our attention to methods, which gives us more information about the specific contents of a string.

- We want to find out if this string contains numeric values?
- Does it contain alphabets only?
- Does it contain alpha-numeric values?
- Is it lowercase?
- Is it uppercase?

To find if a piece of text contains only lower case alphabets.

```python
    >>> 'hello'.islower()
    True
    >>> 'Hello'.islower()
    False
```

If the first letter is in uppercase, then `istitle()` will return a `True` value.

```python
    >>> 'Hello'.istitle()
    True
    >>> 'hello'.istitle()
    False
```

To find if a piece of text contains only upper case alphabets.

```python
    >>> 'hello'.isupper()
    False
    >>> 'Hello'.isupper()
    False
    >>> 'HELLO'.isupper()
    True
```

`isdigit()` checks if a string is a numeric value.

```python
    >>> '123'.isdigit()
    True
    >>> 'A23'.isdigit()
    False
    >>> '2 3'.isdigit()
    False
    >>> '23'.isdigit()
    True
```

`isalpha()` checks if a string only contains alphabets.

```python
    >>> '23'.isalpha()
    False
    >>> '2A'.isalpha()
    False
    >>> 'ABC'.isalpha()
    True
```

`isalnum()` checks if a string only contains alphabets and/or numerals.

```python
    >>> 'ABC123'.isalnum()
    True
    >>> 'ABC 123'.isalnum()
    False
```

Lastly, we look at things which you can use, to check characters of a string.

`endswith` is self explanatory.

```python
    >>> 'Hello World'.endswith('World')
    True
    >>> 'Hello World'.endswith('ld')
    True
    >>> 'Hello World'.endswith('old')
    False
    >>> 'Hello World'.endswith('Wo')
    False
```

`startswith` is self explanatory as well.

```python
    >>> 'Hello World'.startswith('Wo')
    False
    >>> 'Hello World'.startswith('He')
    True
    >>> 'Hello World'.startswith('Hell0')
    False
    >>> 'Hello World'.startswith('Hello')
    True
```

`find` method returns if a piece of text is present in another string. Returns the first match index.

```python
    >>> 'Hello World'.find('Hello')
    0
    >>> 'Hello World'.find('ello')
    1
```

A value of `-1` is returned, if you’re searching for something which is not present in the string.

If you are searching for `'Ello'` with a capital `'E'` ,you’ll not be able to find it. Search is case sensitive.

```python
    >>> 'Hello World'.find('Ello')
    -1
    >>> 'Hello World'.find('bello')
    -1
    >>> 'Hello World'.find('Ello')
    -1
```

### Step 02: Type Conversion Puzzles

We’ll now try and convert values from one type to another, and try and play around with them.

`str` converts boolean value to a text value.

```python
    >>> str(True)
    'True'
```

All text value except for empty string represent True. So, `bool` returns True for everything except empty string.

```python
    >>> bool('True')
    True
    >>> bool('true')
    True
    >>> bool('tru')
    True
    >>> bool('false')
    True
    >>> bool('False')
    True
    >>> bool('')
    False
```

Let’s try and convert a few integer values to strings.

```python
    >>>str(123)
    '123'
    >>> str(12345)
    '12345'
    >>> str(12345.45678)
    '12345.45678'
```

Let’s do the reverse.

```python
    >>> int('45')
    45
    >>> int('45.56')
    ValueError: invalid literal for int()
```

if we do `int('45.56')`, you can see that it throws an error. It says “I cannot convert this to an `int`, as `45.56` is an invalid integer”.

You can also pass an additional parameter to `int` indicating the numeric system - 16 for Hexa decimal, 8 for Octal etc. Default is 10 - Decimal.

```python
    >>> int('45abc',16)
    285372
    >>> int('a',16)
    10
    >>> int('b',16)
    11
    >>> int('c',16)
    12
    >>> int('f',16)
    15
    >>> int('g',16)
    ValueError: invalid literal for int() with base 16: 'g'
```

You can also convert string to float.

```python
    >>> float("34.43")
    34.43
    >>> float("34.43rer")
    ValueError: could not convert string to float: '34.43rer'
```

**Summary**

In this quick step, we looked at converting different types to strings, and converting strings to different types. So we looked at `int`, `bool` and `float` values, and we looked at how to convert them to string, and how to convert strings back to these specific types.

### Step 02: Strings Are Immutable

In this step, let’s learn an important fact about strings in Python.

String values are immutable.

What does immutability mean, and why do we say strings are immutable?

Let’s create a very simple string: `message = 'Hello'`, and we’re saying `message.upper()`. But what does it do? It prints `'HELLO'`, with all characters in uppercase. Well, what would happen if you do `print(message)`? It says `'Hello'`.

```python
    >>> message = "Hello"
    >>> message.upper()
    'HELLO'
    >>> message
    'Hello'
```

You would see we tried change the content of message, but it has not changed.

When we execute `message.upper()`, a new string is created, and it is returned back. Original string remained unchanged. This is called immutability.

Once you define a string in Python, you’ll not be able to change the value of it.

You can use - “OK. I can do something of this kind: `message = message.upper()`”.

What would happen now?

Will the value of `message` get changed? It prints `'HELLO'`, with all caps.

Did the value of `message` change? Does this prove that strings are mutable?

The important thing you need to understand about all this stuff, is how objects are stored inside Python.

There are things called variables, and there are things called objects.

When we run `message = 'Hello'`

- We are creating one object of `str` class with a values `'Hello'`.
- We are creating one variable called `message`
- The location of `'Hello'` is stored into `message`

In Python, your variables are nothing but a name.

If location of `'Hello'` in memory is `A`, then the value stored in `message` is `A`. `message` is called a reference.

What happens with `message = message.upper()`?

A new object is created with value `'HELLO'` at a different location `B`.

A reference ot location `B` is stored into `message` variable.

Summary : The original value at location `A` has not changed and cannot be changed for `str` variables. Hence ‘str’ objects are immutable.

Variables are just names referring to a location. They don’t really contain the value. Variables contain a reference to the location that contains the object.

### Step 03: Python Has No Separate Character Type

One of the things that surprises people new to Python, is that there is no character data type in Python.

Typically we have text data types in all the languages, don’t we? `'Hello World'` for example, is text data, and we stored it in `message`. This is called a string.

In other languages, you would have something to represent a single character symbol. For example in Java, you can have a `char` data type, to store a single character `ch`, in which `'h'` is one character. But in Python, there is no separate data type to store single characters.

For example, let’s see how Python treats the first character of the following string `message`. The way you can access the first character of a string is by saying `message[0]`.

```python
    >>> message = "Hello World"
    >>> message[0]
    'H'
    >>> type(message[0])
    <class 'str'>
    >>> type(message)
    <class 'str'>
```

`type(message[0])` and `type(message)` print the same type `str`. No difference.

In Python, whether you’re talking about a string, or you’re talking about a single character symbol, they are all represented by the same `class`, `str`.

`message[100]` throws an `IndexError`.

```python
    >>> message[0]
    'H'
    >>> message[1]
    'e'
    >>> message[2]
    'l'
    >>> message[3]
    'l'
    >>> message[100]
    IndexError: string index out of range
```

It says: “The given index is out of the range of the value of that specific string”.

Let’s say we would want to print all the characters in this string.

The way you could do that, is by saying: `for ch in message: print(ch)`.

**Summary**

In this short step, we looked at the fact that there is no separate character class, or data type in Python. We also looked at how do we loop over a given string, and print all the characters present inside this string.

### Step 04: The `string` `module`

In this step, we will introduce you to the `string` `module`.

If we would want to use anything from a module in Python, you need to import that specific `module` into your program.

```python
    >>> import string
```

If you do a `string.` and press , it would show the different things which are part of the `string` `module`.

```python
    >>> string.
    string.Formatter(       string.ascii_uppercase  string.octdigits
    string.Template(        string.capwords(        string.printable
    string.ascii_letters    string.digits           string.punctuation
    string.ascii_lowercase  string.hexdigits        string.whitespace
```

Let’s explore some of these.

```python
    >>> string.ascii_letters
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    >>> string.ascii_lowercase
    'abcdefghijklmnopqrstuvwxyz'
    >>> string.ascii_uppercase
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    >>> string.digits
    '0123456789'
    >>> string.hexdigits
    '0123456789abcdefABCDEF'
    >>> string.punctuation
    '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    >>> string.ascii_letters
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
```

You have a set of printable characters, punctuation characters and a lot more.

You can check a text value against any of these

```python
    >>> 'a' in string.ascii_letters
    True
    >>> 'ab' in string.ascii_letters
    True
    >>> 'abc' in string.ascii_letters
    True
```

`in` operation on a string, checks if a given string.

```python
    >>> '1' in '13579'
    True
    >>> '2' in '13579'
    False
    >>> '4' in '13579'
    False
```

**Summary**

In this step, we explored more exercises involving the `str` module of Python.

### Step 05: More Exercises With The `str` Module

Let’s start with an Exercise - find if a specific character is a vowel or not.

```python
    >>> char = 'a'
    >>> vowel_string = 'aeiouAEIOU'
    >>> char in vowel_string
    True
    >>> char = 'b'
    >>> char in vowel_string
    False
```

he other thing you can do, is just have the capital vowels, or just the lowercase versions.

```python
    >>> vowel_string = 'AEIOU'
    >>> char.upper() in vowel_string
    False
    >>> char = 'a'
    >>> char.upper() in vowel_string
    True
```

Now let’s move on to the next one.

We want to find out and print all the capital alphabets, from `A` to `Z`.

There was a small clue at the start of the previous step, regarding importing the `string` `module`. We did the `string` `module`, and we saw that `string` `module` contained a number of things.

```python
    >>> string.ascii_uppercase
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    >>> for char in string.ascii_uppercase:
    ...   print(char)
    ...
    A
    B
    C
    D
    E
    F
    G
    H
    I
    J
    K
    L
    M
    N
    O
    P
    Q
    R
    S
    T
    U
    V
    W
    X
    Y
    Z
```

Try another easy exercise: print all the lower characters. Instead of `string.ascii_uppercase`, you have `string.ascii_lowercase`.

```python
    >>> for char in string.ascii_lowercase:
    ...   print(char)
    ...
    a
    b
    c
    d
    e
    f
    g
    h
    i
    j
    k
    l
    m
    n
    o
    p
    q
    r
    s
    t
    u
    v
    w
    x
    y
    z
```

An even easier exercise, would be to print all the digits.

```python
    >>> for char in string.
    string.Formatter(       string.ascii_uppercase  string.octdigits
    string.Template(        string.capwords(        string.printable
    string.ascii_letters    string.digits           string.punctuation
    string.ascii_lowercase  string.hexdigits        string.whitespace
    >>> for char in string.digits:
    ...   print(char)
    ...
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    >>>
```

The last exercise which we want to leave you with, is to check if something is a consonant.

A consonant is an alphabet which is not a vowel, so any alphabet which is not in `'aeiou'` is a consonant. The simplest way of doing this is to say `consonant_string = 'bcdfghj...'` and so on. Looks like a very long solution? There is an easier way out.

```python
    >>> vowel_string = 'aeiou'
    >>> char = 'b'
    >>> char.isalpha() and char.lower() not in vowel_string
    True
```

### Step 06: More Exercises On Strings

In the step, let’s look at a few more puzzles and exercises related to strings. Let’s say we have a simple string, `string_example`, and this is contains an English sentence. `'This is a great thing.'`

Let’s try to to print each of the words present in this string, on a separate line.

So we would want to print `'This'`, `'is'`, `'a'`, `'great'` and `'thing'` on individual lines.

One of the clues we’ll give you is, try and do `string_example. <TAB>`. There are a huge list of methods, which would come up if you do that.

```python
    >>> string_example = "This is a great thing"
    >>> string_example.
    string_example.capitalize(    string_example.join(
    string_example.casefold(      string_example.ljust(
    string_example.center(        string_example.lower(
    string_example.count(         string_example.lstrip(
    string_example.encode(        string_example.maketrans(
    string_example.endswith(      string_example.partition(
    string_example.expandtabs(    string_example.replace(
    string_example.find(          string_example.rfind(
    string_example.format(        string_example.rindex(
    string_example.format_map(    string_example.rjust(
    string_example.index(         string_example.rpartition(
    string_example.isalnum(       string_example.rsplit(
    string_example.isalpha(       string_example.rstrip(
    string_example.isdecimal(     string_example.split(
    string_example.isdigit(       string_example.splitlines(
    string_example.isidentifier(  string_example.startswith(
    string_example.islower(       string_example.strip(
    string_example.isnumeric(     string_example.swapcase(
    string_example.isprintable(   string_example.title(
    string_example.isspace(       string_example.translate(
    string_example.istitle(       string_example.upper(
    string_example.isupper(       string_example.zfill(
```

One of the methods in the list is the `split()` method.

```python
    >>> string_example.split()
    ['This', 'is', 'a', 'great', 'thing']
    >>> for word in string_example.split():
    ...    print(word)
    ...
    This
    is
    a
    great
    thing
```

`split_lines()` method looks for a `'\n'`, and it divides the string based on it. If you have a string which contains newlines, and you would want to divide it into a number of strings with each line as a new element, the method you can use is `split_lines()`.

```python
    >>> string_example = "This\nis\n\ngreat\nthing"
    >>> print(string_example)
    This
    is

    great
    thing
    >>> string_example = "This\nis\na\ngreat\nthing"
    >>> print(string_example)
    This
    is
    a
    great
    thing
    >>> string_example.splitlines()
    ['This', 'is', 'a', 'great', 'thing']
    >>>
```

The last thing which we look at, is **concatenation operator**.

```python
    >>> 1 + 2
    3
    >>> "1" + "2"
    '12'
    >>> "1" + 1
    TypeError: must be str, not int
    >>> "ABC" + "DEF"
    'ABCDEF'
```

In Python, you cannot do `+` operator between two different types. `+` with two strings is concatenation. `+` with two numbers is addition.

One other interesting operator on strings is multiplication. If you do a `'1' * 20`, What do you think will be the output?

```python
    >>> 1 * 20
    20
    >>> '1' * 20
    '11111111111111111111'
    >>> 'A' * 10
    'AAAAAAAAAA'
```

If you multiply a string with `number`, the string value is concatenated `number` times.

The last thing which we look at in this step, is comparing strings.

Let’s say we have a string with a value `str = 'test'`, and you have another string to with a value `str1 = 'test1'`.

We want to check whether both these strings are the same.

```python
    >>> str = "test"
    >>> str2 = "test1"
    >>> str == str2
    False
    >>> str2 = "test"
    >>> str == str2
    True
```

You can compare strings using the `==` operator.

**Summary**

In this step, we explored a few exercises on strings, covering areas such as:

- Splitting a given sentence into individual words
- The concatenation operator, `+`
- The string multiplication pattern, `*`
- The use of the `==` operator to compare strings

---

## Devision 07 - Introducing Loops

Welcome to the section on Loops. In this section, we will look at a variety of loops that are available in Python. We will look mainly at the **`for`** loop, and the **`while`** loop.

### Step 01: Revisited: The for Loop

Let’s start with revising the basics of the for loop, we have learned in the previous steps.

We saw that a `for` loop helps us to loop around the same set of code statements, many times over.

Let’s look at a few simple examples, once again.

**Snippet-01**

The syntax of a `for` loop is very simple.

For example, this code snippet will tell you all about it: `for i in range(1, 11): print(i)`.

What does this do? Very simple, it prints from `1` to `10`.

In the call to the `range()` function, the second parameter is exclusive. We are actually looping from `1` to `10`, and this piece of code, `print(i)`, is being executed for different values of `i`.

```python
    >>> for i in range(1,11):
    ...   print(i)
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
```

`for` loop can also be used to loop round the characters in a string.

```python
    >>> for ch in "Hello World":
    ...   print(ch)
    ...
    H
    e
    l
    l
    o
    W
    o
    r
    l
    d
```

`for` loop can be used to loop around all the words in a given sentence.

```python
    >>> for word in "Hello World".split():
    ...   print(word)
    ...
    Hello
    World
```

`for` loop can be used to loop around a specific list of values.

```python
    >>> for item in (3, 6, 9):
    ...   print(item)
    ...
    3
    6
    9
```

**Summary**

In this step, we started with discussing and revising basic concepts about the `for` loop

### Step 02: Programming Exercise PE-LO-01

Welcome back to this step, where we would do a lot of exercises with the `for` loop.

**Exercises**

1. The first exercise is to find out if a number is prime. We want to write a method, `is_prime()`, which accepts an integer value as parameter, and returns whether it’s a prime. \(**Hint**: A prime number is something which is only divisible by `1` and itself\).
   1. `5` is only divisible by `1` and `5`. It is not divisible by any other number. Same is the case with `7` and `11`.
   2. However, `6` is divisible by `1`, `2`, `3` and `6`. So it’s not a prime number.
2. The second exercise is to write a method to calculate the sum up to a given integer, starting from `1`. **Hint**: If I would want to find that the sum up to `6`. what’s needed is `1 + 2 + 3 + 4 + 5 + 6`.
3. The third exercise is to find that the sum of divisors of a given integer. **Hint**: Let’s say we want to find out the sum of the divisors of `15`. The divisors of `15` are `1`, `3`, `5` and `15`. So I would want to calculate `1 + 3 + 5 + 15`, and return that value.
4. Fourth exercise is to print a numbered triangle, when given a specific integer.

Hint: Given an input `5`, we would want to print the number triangle of these kind:

```python
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5.
```

These are the exercises for the `for` loop. We also test our skills, with creating method and executing them, in our IDE.

**Solution 1**

Let’s start with creating the `is_prime()` method, in a file named `for_exercises`.

We would want to accept an `int` parameter, and find out if it is prime, or not.

We need to check whether it’s divisible by any other number, other than `1` and itself. If we are passed in a value of `5`, you want to see if it’s divisible by any of `2`, `3` or `4`.

```python
def is_prime(number):
```

We can use a `for` loop. We can structure it like this: `for divisor in range(1, number): ...`. We would not want to divide it with `1`, but start with `2` instead, and go up to `number-1`, which is `4`.

```python
for divisor in range(2,number):
```

How can we check if the `number` is divisible by `divisor`?

By using the `%` operator. If `number` is divisible by `divisor` we return `False`.

```python
for divisor in range(2,number):
    if number % divisor == 0:
        return False
```

What happens if the code comes up to the end? It would mean we tried with `2`, `3` and `4`, but `number` was not divisible by all of them. In that case, `number` would be prime, and we can safely return `True`.

```python
for divisor in range(2,number):
    if number % divisor == 0:
        return False

return True
```

For `1`, the rules are a little different, as it is neither a prime or composite. We will add an `if` condition to check if the number is `1`. `if(number < 2):`

This `if` condition is called a guard check or a boundary check, to make sure that you are processing only the right input. If `number` has a value less than `2`, do nothing. OK, it’s not a prime.

Here is the entire code at one place, for your reference:

```python
def is_prime(number):
    if(number < 2):
        return False
    for divisor in range(2,number):
        if number % divisor == 0:
            return False
    return True
print(is_prime(5));
```

### Step 03: Continued - Programming Exercise PE-LO-01

In the previous step, we looked at solving the `is_prime()` exercise. In this step, let’s look at an implementation of `sum_up_to_n()`. Here is the entire code for this exercise:

```python
def sum_upto_n(number):
    sum = 0
    for i in range(1, number+1):
        sum = sum + i
    return sum
print(sum_upto_n(6))
print(sum_upto_n(10))
```

**Summary**

In this step, we:

- Wrote a Python function to compute the sum of all integers, from `1`, up to the input integer `n`.

### Step 04: Continued - Programming Exercise PE-LO-01

Let’s focus on the third exercise, `sum_of_divisors`.

One of the clues we can give you, is that `sum_of_divisors()` is very similar to `is_prime()`.

You want to find out if a number is dividing `15`, and if it’s dividing `15`, with the remainder of `0`, then you need to add that up.

```python
def calculate_sum_of_divisors(number):
    sum = 0
    if(number < 2):
        return sum
    for divisor in range(1,number+1):
        if number % divisor == 0:
            sum = sum + divisor
    return sum
print(calculate_sum_of_divisors(6))
print(calculate_sum_of_divisors(15))
```

### Step 05: Continued - Programming Exercise PE-LO-01

In this step, Let’s look at the last exercise - `print_a_number_triangle`.

For example, if we call such a function with input `5`, the output needs to be:

```python
1

1 2

1 2 3

1 2 3 4

1 2 3 4 5
```

Let start with a simple thing. Let’s try and print `1 2 3 4 5` first, and then we would look at how to print the rest of the output. Lets proceed with defining this method.

We can say `def print_a_number_triangle(number): ...` that takes a number as an input. You want to print a sequence of integers starting from `1`, up to that specific `number`. How can you do that? Let’s try this: `for i in range(1,number+1): print(i)` What would happen? Let’s call `print_a_number_triangle(5)` now. It prints:

```python
    1
    2
    3
    4
    5
```

on individual lines.

To print this sequence on a single line, let’s delimit them with `<SPACE>` instead. Call `print()` like this instead: `for i in range(1,number+1): print(i, end=" ")`.

Let’s see what would happen now. `1 2 3 4 5`

To solve our exercise, we want to repeat this again and again.

Yes, we need another for loop around it!

```python
for j in range(1, number+1):
    for i in range(1, number + 1):
        print(i, end=" ")
```

Make sure that you have the indentation right. This is called `loop within a loop`.

The output of above program is

`1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5`

Let’s add `print("\n")`, so we have a new line at the end of each outer loop iteration.

```python
for j in range(1, number+1):
    for i in range(1, number + 1):
        print(i, end=" ")
    print("\n")
```

Output

```python
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
```

We are printing a square, not a triangle.

What we want to do is to print up to `1` in first line, upto `2` in second line and so on.

How can we do that? Think about it.

When you are inside this loop, you can see the variable `j`.

Instead of `number+1`, let’s say `j + 1`.

When `j` has a value of `1`, `for` will print from `1` to `1`. When `j` has a value of `2`, print from `1` to `2`, literally printing `1 2`. When j has a value of `3`, I’ll print from `1` to `3`. Let’s try this and see what would happen.

```python
for j in range(1, number+1):
    for i in range(1, j + 1):
        print(i, end=" ")
    print("\n")
```

You can see that our number triangle is ready!

```python
1

1 2

1 2 3

1 2 3 4

1 2 3 4 5
```

Here is the entire code for you:

```python
def print_a_number_triangle(number):
    for j in range(1, number + 1):
        for i in range(1, j + 1):
            print(i, end=' ')
        print()
print_a_number_triangle(6)
```

An important point to note is, a couple of these things can be done in a much simpler way. We will look at these options when we talk about functional programming.

**Summary**

In this step, we:

- Presented a solution to the exercise for printing a number triangle.

### Step 06: Introducing The while Loop

Let’s look at one of the other loops which is present in Python, called the **`while`** loop.

In the `for` loop, we can specify the range of our iteration, by using the `range()` function.

In a `while` loop, we specify a logical condition. While the condition is true, loop continues running.

Do you remember one place where we use the condition until now? It was in an `if` statement.

Let’s see how to use a simple `while` loop.

**Snippet-01:**

```python
    >>> i = 5
    >>> if i == 5:
    ...   print("i is 5")
    ...
    i is 5
```

Let’s say `i` has a value of `0`, and we then do: `while i < 5: print(i)`.

```python
    >>> i = 0
    >>> while i < 5:
    ...   print(i)
    ...
    0
    0
    0
    0
    0
    0
    0
    0
    ^CTraceback (most recent call last):
      File "<stdin>", line 2, in <module>
    KeyboardInterrupt
    >>>
    KeyboardInterrupt
```

If we leave it to run, you’d see that it continuously prints `0` again, and again. Let’s do a `<CTRL-C>` or `<COMMAND-C>` to interrupt this.

What is happening here?

Initially `i` is `0`, and the condition `i < 5` is `True`, and `print(i)` is executed. Next iteration, it checks the condition, it is `True`, and `0` is printed. This continues to happen. What’s happening is an **infinite loop**.

One of the important things to make sure in a `while` loop, is to increment the value of `i`. We need to say something like `i = i + 1`.

```python
    >>> while i < 5:
    ...   print(i)
    ...   i = i + 1
    ...
    0
    1
    2
    3
    4
```

So how does it work? \*`i` initially had a value of `0`. First the condition is checked. It’s `True`, so `0` is printed and then the value of `i` is incremented to `1`.

- `i` is still less than `5`, so the loop continues to execute, and this happens until `4` is printed. `i` again gets incremented to `4 + 1`, or `5`.
- Then we check the condition `i < 5`. This is now `False`. Control goes out of the `while` loop, and terminates it.

When executing a `while`, control flow is just based on a condition. As long as the condition is `True`, we keep executing the code. An important thing to remember, is to make sure the control variable is updated.

```python
    >>> for i in range(0,5): print(i)
    ...
    0
    1
    2
    3
    4
```

A `for` loop is much simpler to code than a `while`. With `while`, we have to write an expression statement, to increment the value.

The question you might have is - What are the situations when you should use a while?

We will look at that very soon.

**Summary**

In this video, we:

- Were introduced to the concept of a `while` loop in Python
- Understood the importance of a control variable being incremented inside the loop
- Observed differences between the working of a `while`, and a `for` loop

### Step 07: Programming Exercise PE-LO-02

In the previous step, we were introduced to `while` loop. In this step, let’s look at a couple of exercises using the `while` loop.

**Exercises**

1. `print_squares_upto_limit(30)`: We need to print all the squares of numbers, up to a limit of `30`. The output needs to be `1 4 9 16 25`.
2. `print_cubes_upto_limit(30)`: We need to print all the cubes of numbers, up to a limit of `30`.The output needs to be 1 8 27.

**Exercise 1: Solution**

Here is the entire code for your reference:

```python
def print_squares_upto_limit(limit):
    i = 1
    while i * i < limit:
        print(i*i, end = " ")
        i = i + 1
```

Now the next exercise, was to print cubes up to a limit.

The expression in the `while` condition should now be `i*i*i < 30`.

```python
def print_cubes_upto_limit(limit):
    i = 1
    while i * i * i < limit:
        print(i*i*i, end = " ")
        i = i + 1
print_cubes_upto_limit(80)
```

Could we have implemented above two examples with `for` loop? It would’ve been a little more difficult.

Typically, we use a `for` loop when we know how many times the loop will be executed is clear at the start.

If we do not know, how many times a loop will run, `while` is a better option.

### Step 08: While Example

Earlier we used `if` statement to implement a solution for this:

- Ask the User for input:
  - Enter two numbers
  - Choose the Option:
    - 1 - Add
    - 2 - Subtract
    - 3 - Multiply
    - 4 - Divide
- Perform the Operation
- Publish the Result

We would want to enhance it to execute in a loop multiple times, until the user chooses to exit. We will add an option 5 - Exit.

- Ask the User for input:
  - Enter two numbers
  - Choose the Option:
    - 1 - Add
    - 2 - Subtract
    - 3 - Multiply
    - 4 - Divide
    - 5 - Exit
- Perform the Operation
- Publish the Result
- Repeat until Option 5 is chosen.

**Snippet-01 Explained**

Here’s the earlier code we wrote with if:

```python
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))

print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")

choice = int(input("Choose Operation: "))

# print(number1 + number2)
# print(choice)
if choice==1:
    result = number1 + number2
elif choice==2:
    result = number1 - number2
elif choice==3:
    result = number1 / number2
elif choice==4:
    result = number1 * number2
else:
    result = "Invalid Choice"

print(result)
```
