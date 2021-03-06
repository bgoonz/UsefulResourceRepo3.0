# heapq \-- Heap Sort Algorithm

::: {.module synopsis="In-place heap sort algorithm"} heapq :::

Purpose

: The heapq implements a min-heap sort algorithm suitable for use with Python\'s lists.

A _heap_ is a tree-like data structure in which the child nodes have a sort-order relationship with the parents. _Binary heaps_ can be represented using a list or array organized so that the children of element N are at positions 2 \* _N_ + 1 and 2 \* _N_ + 2 (for zero-based indexes). This layout makes it possible to rearrange heaps in place, so it is not necessary to reallocate as much memory when adding or removing items.

A max-heap ensures that the parent is larger than or equal to both of its children. A min-heap requires that the parent be less than or equal to its children. Python\'s `heapq` module implements a min-heap.

## Example Data

The examples in this section use the data in `heapq_heapdata.py`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_heapdata.py :::

The heap output is printed using `heapq_showtree.py`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_showtree.py :::

## Creating a Heap

There are two basic ways to create a heap: `heappush()` and `heapify()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_heappush.py :::

When `heappush()` is used, the heap sort order of the elements is maintained as new items are added from a data source.

```{.sourceCode .none}
$ python3 heapq_heappush.py

random : [19, 9, 4, 10, 11]

add  19:

                 19
------------------------------------

add   9:

                 9
        19
------------------------------------

add   4:

                 4
        19                9
------------------------------------

add  10:

                 4
        10                9
    19
------------------------------------

add  11:

                 4
        10                9
    19       11
------------------------------------
```

If the data is already in memory, it is more efficient to use `heapify()` to rearrange the items of the list in place.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_heapify.py :::

The result of building a list in heap order one item at a time is the same as building an unordered list and then calling `heapify()`.

```{.sourceCode .none}
$ python3 heapq_heapify.py

random    : [19, 9, 4, 10, 11]
heapified :

                 4
        9                 19
    10       11
------------------------------------
```

## Accessing the Contents of a Heap

Once the heap is organized correctly, use `heappop()` to remove the element with the lowest value.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_heappop.py :::

In this example, adapted from the stdlib documentation, `heapify()` and `heappop()` are used to sort a list of numbers.

```{.sourceCode .none}
$ python3 heapq_heappop.py

random    : [19, 9, 4, 10, 11]
heapified :

                 4
        9                 19
    10       11
------------------------------------


pop      4:

                 9
        10                19
    11
------------------------------------

pop      9:

                 10
        11                19
------------------------------------
```

To remove existing elements and replace them with new values in a single operation, use `heapreplace()`.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_heapreplace.py :::

Replacing elements in place makes it possible to maintain a fixed-size heap, such as a queue of jobs ordered by priority.

```{.sourceCode .none}
$ python3 heapq_heapreplace.py

start:

                 4
        9                 19
    10       11
------------------------------------

replace  4 with  0:

                 0
        9                 19
    10       11
------------------------------------

replace  0 with 13:

                 9
        10                19
    13       11
------------------------------------
```

## Data Extremes from a Heap

`heapq` also includes two functions to examine an iterable and find a range of the largest or smallest values it contains.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_extremes.py :::

Using `nlargest()` and `nsmallest()` is efficient only for relatively small values of _n_ \> 1, but can still come in handy in a few cases.

```{.sourceCode .none}
$ python3 heapq_extremes.py

all       : [19, 9, 4, 10, 11]
3 largest : [19, 11, 10]
from sort : [19, 11, 10]
3 smallest: [4, 9, 10]
from sort : [4, 9, 10]
```

## Efficiently Merging Sorted Sequences

Combining several sorted sequences into one new sequence is easy for small data sets.

```{.sourceCode .python}
list(sorted(itertools.chain(*data)))
```

For larger data sets, this technique can use a considerable amount of memory. Instead of sorting the entire combined sequence, `merge()` uses a heap to generate a new sequence one item at a time, determining the next item using a fixed amount of memory.

::: {.literalinclude caption="" start-after="#end_pymotw_header"} heapq_merge.py :::

Because the implementation of `merge()` uses a heap, it consumes memory based on the number of sequences being merged, rather than the number of items in those sequences.

```{.sourceCode .none}
$ python3 heapq_merge.py

0: [33, 58, 71, 88, 95]
1: [10, 11, 17, 38, 91]
2: [13, 18, 39, 61, 63]
3: [20, 27, 31, 42, 45]

Merged:
10 11 13 17 18 20 27 31 33 38 39 42 45 58 61 63 71 88 91 95
```

::: {.seealso}

- `heapq`{.interpreted-text role="pydoc"}
- [Wikipedia: Heap (data structure)](<https://en.wikipedia.org/wiki/Heap_(data_structure)>) \-- A general description of heap data structures.
- `Queue-PriorityQueue`{.interpreted-text role="ref"} \-- A priority queue implementation from `Queue`{.interpreted-text role="mod"} in the standard library. :::
