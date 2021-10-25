rr

Search a sorted list by repeatedly dividing the search interval in half. Begin with an interval covering the whole list. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

The binary search algorithm breaks the list down in half on every iteration, rather than sequentially combing through the list. On large lists, this method can be really useful.

The time complexity of the binary search algorithm is O(log n). The best-case time complexity would be O(1) when the central index would directly match the desired value. The worst-case scenario could be the values at either extremity of the list or values not in the list.
