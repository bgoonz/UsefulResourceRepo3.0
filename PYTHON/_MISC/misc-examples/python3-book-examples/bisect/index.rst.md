# bisect \-\-- Maintain Lists in Sorted Order

::: {.module synopsis="Maintains a list in sorted order without having to call sort each time an item is added to the list."} bisect :::

Purpose

: Maintains a list in sorted order without having to call sort each time an item is added to the list.

The `bisect` module implements an algorithm for inserting elements into a list while maintaining the list in sorted order.

## Inserting in Sorted Order

Here is a simple example in which `insort()` is used to insert items into a list in sorted order.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} bisect_example.py :::

The first column of the output shows the new random number. The second column shows the position where the number will be inserted into the list. The remainder of each line is the current sorted list.

```{.sourceCode .none}
$ python3 bisect_example.py

New  Pos  Contents
---  ---  --------
 14    0 [14]
 85    1 [14, 85]
 77    1 [14, 77, 85]
 26    1 [14, 26, 77, 85]
 50    2 [14, 26, 50, 77, 85]
 45    2 [14, 26, 45, 50, 77, 85]
 66    4 [14, 26, 45, 50, 66, 77, 85]
 79    6 [14, 26, 45, 50, 66, 77, 79, 85]
 10    0 [10, 14, 26, 45, 50, 66, 77, 79, 85]
  3    0 [3, 10, 14, 26, 45, 50, 66, 77, 79, 85]
 84    9 [3, 10, 14, 26, 45, 50, 66, 77, 79, 84, 85]
 77    8 [3, 10, 14, 26, 45, 50, 66, 77, 77, 79, 84, 85]
  1    0 [1, 3, 10, 14, 26, 45, 50, 66, 77, 77, 79, 84, 85]
```

This is a simple example,. In fact, given the amount of data being manipulated, it might be faster to simply build the list and then sort it once. By contrast, for long lists, significant time and memory savings can be achieved using an insertion sort algorithm such as this, especially when the operation to compare two members of the list requires expensive computation.

## Handling Duplicates

The result set shown previously includes a repeated value, `77`. The `bisect` module provides two ways to handle repeats: New values can be inserted either to the left of existing values, or to the right. The `insort()` function is actually an alias for `insort_right()`, which inserts an item after the existing value. The corresponding function `insort_left()` inserts an item before the existing value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} bisect_example2.py :::

When the same data is manipulated using `bisect_left()` and `insort_left()`, the results are the same sorted list but the insert positions are different for the duplicate values.

```{.sourceCode .none}
$ python3 bisect_example2.py

New  Pos  Contents
---  ---  --------
 14    0 [14]
 85    1 [14, 85]
 77    1 [14, 77, 85]
 26    1 [14, 26, 77, 85]
 50    2 [14, 26, 50, 77, 85]
 45    2 [14, 26, 45, 50, 77, 85]
 66    4 [14, 26, 45, 50, 66, 77, 85]
 79    6 [14, 26, 45, 50, 66, 77, 79, 85]
 10    0 [10, 14, 26, 45, 50, 66, 77, 79, 85]
  3    0 [3, 10, 14, 26, 45, 50, 66, 77, 79, 85]
 84    9 [3, 10, 14, 26, 45, 50, 66, 77, 79, 84, 85]
 77    7 [3, 10, 14, 26, 45, 50, 66, 77, 77, 79, 84, 85]
  1    0 [1, 3, 10, 14, 26, 45, 50, 66, 77, 77, 79, 84, 85]
```

::: {.seealso}

- `bisect`{.interpreted-text role="pydoc"}
- [Wikipedia: Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort) \-- A description of the insertion sort algorithm. :::
