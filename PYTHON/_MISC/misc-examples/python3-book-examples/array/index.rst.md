# array \-\-- Sequence of Fixed-type Data

::: {.module synopsis="Manage sequences of fixed-type data efficiently."} array :::

Purpose

: Manage sequences of fixed-type numerical data efficiently.

The `array` module defines a sequence data structure that looks very much like a `list`, except that all of the members have to be of the same primitive type. The types supported are all numeric or other fixed-size primitive types such as bytes.

Refer to `Type Codes for array Members`{.interpreted-text role="table"} for some of the supported types. The standard library documentation for `array` includes a complete list of type codes.

---

Code Type Minimum size (bytes)

---

`b` int 1

`B` int 1

`h` signed short 2

`H` unsigned short 2

`i` signed int 2

`I` unsigned int 2

`l` signed long 4

`L` unsigned long 4

`q` signed long long 8

`Q` unsigned long long 8

`f` float 4

`d` double float 8

---

: Type Codes for array Members

## Initialization

An `array` is instantiated with an argument describing the type of data to be allowed, and possibly an initial sequence of data to store in the array.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} array_string.py :::

In this example, the array is configured to hold a sequence of bytes and is initialized with a simple byte string.

```{.sourceCode .none}
$ python3 array_string.py

As byte string: b'This is the array.'
As array      : array('b', [84, 104, 105, 115, 32, 105, 115, 32,
 116, 104, 101, 32, 97, 114, 114, 97, 121, 46])
As hex        : b'54686973206973207468652061727261792e'
```

## Manipulating Arrays

An `array` can be extended and otherwise manipulated in the same ways as other Python sequences.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} array_sequence.py :::

The supported operations include slicing, iterating, and adding elements to the end.

```{.sourceCode .none}
$ python3 array_sequence.py

Initial : array('i', [0, 1, 2])
Extended: array('i', [0, 1, 2, 0, 1, 2])
Slice   : array('i', [2, 0, 1])
Iterator:
[(0, 0), (1, 1), (2, 2), (3, 0), (4, 1), (5, 2)]
```

## Arrays and Files

The contents of an array can be written to and read from files using built-in methods coded efficiently for that purpose.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} array_file.py :::

This example illustrates reading the data \"raw,\" meaning directly from the binary file, versus reading it into a new array and converting the bytes to the appropriate types.

```{.sourceCode .none}
$ python3 array_file.py

A1: array('i', [0, 1, 2, 3, 4])
Raw Contents: b'0000000001000000020000000300000004000000'
A2: array('i', [0, 1, 2, 3, 4])
```

`tofile()` uses `tobytes()` to format the data, and `fromfile()` uses `frombytes()` to convert it back to an array instance.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} array_tobytes.py :::

Both `tobytes()` and `frombytes()` work on byte strings, not Unicode strings.

```{.sourceCode .none}
$ python3 array_tobytes.py

A1: array('i', [0, 1, 2, 3, 4])
Bytes: b'0000000001000000020000000300000004000000'
A2: array('i', [0, 1, 2, 3, 4])
```

## Alternative Byte Ordering

If the data in the array is not in the native byte order, or if the data needs to be swapped before being sent to a system with a different byte order (or over the network), it is possible to convert the entire array without iterating over the elements from Python.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} array_byteswap.py :::

The `byteswap()` method switches the byte order of the items in the array from within C, so it is much more efficient than looping over the data in Python.

```{.sourceCode .none}
$ python3 array_byteswap.py

      A1 hex           A1       A2 hex           A2
------------ ------------ ------------ ------------
 b'78563412'    305419896  b'12345678'   2018915346
 b'79563412'    305419897  b'12345679'   2035692562
 b'7a563412'    305419898  b'1234567a'   2052469778
 b'7b563412'    305419899  b'1234567b'   2069246994
 b'7c563412'    305419900  b'1234567c'   2086024210
```

::: {.seealso}

- `array`{.interpreted-text role="pydoc"}
- `struct`{.interpreted-text role="mod"} \-- The `struct` module.
- [Numerical Python](http://www.scipy.org) \-- NumPy is a Python library for working with large data sets efficiently.
- `Python 2 to 3 porting notes for array <porting-array>`{.interpreted-text role="ref"} :::
