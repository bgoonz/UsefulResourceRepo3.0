JavaScript’s Map, Reduce, and Filter

In 2011, JavaScript introduced `map`, `reduce`, and `filter` as powerful alternatives when translating elements, finding cumulative values, or building subsets based on conditions. These methods help the developer manage less complexity, work without side effects, and often make code more readable.

    for(let i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) === i) {
            models.push(array[i]);
        }
    }

We can see it traverses an array and inserts non-duplicate elements into a new array. But to figure this out we had to glean these 5 things.

<table style="width:99%;"><colgroup><col style="width: 19%" /><col style="width: 80%" /></colgroup><thead><tr class="header"><th>code piece</th><th>meaning</th></tr></thead><tbody><tr class="odd"><td><code>let i = 0</code></td><td>starts at left side of array</td></tr><tr class="even"><td><code>i &lt; array.length</code></td><td>finishes at right side of array</td></tr><tr class="odd"><td><code>i++</code></td><td>increments by one</td></tr><tr class="even"><td><code>array.indexOf(array[i]) === i</code></td><td>if value is first instance in array, it’ll match index. okay this means it’s checking if it’s a duplicate</td></tr><tr class="odd"><td><code>models.push(...)</code></td><td><code>models</code> must be a list. But what data’s in it? What are their data types? I must search the file for “models”. Rinse. Repeat.</td></tr></tbody></table>

We needed to check 5 pieces of information to determine what was going on. And this is a single `for` loop!

# A Functional Approach

This same effect could be written using JavaScript’s built-in `filter()` method.

    let uniqueProducts = array.filter(function(elem, i, array) {
            return array.indexOf(elem) === i;
        }
    );

Simple and elegant.

Seeing `filter` communicates code behavior so I know exactly what it’s doing. Compared to the looping approach above:

- Checking \#1, \#2, \#3 is unnecessary because `filter()` does these automatically.
- \#4 is the same but without the additional `if(...)` block.
- A big hurdle was \#5. I had to search thru the code base to find what `models` even was. Did it already have data? Was it targeting specific data types? `map`, `reduce`, and `filter` solves this problem by not depending on code outside the callbacks, called side-effects.

In sum, `map`, `reduce` and `filter` makes code less complex, without side effects, and often more readable.

Let’s look at each.

# map()

**Use it when**: You want to translate/map all elements in an array to another set of values.

Example: convert Fahrenheit temps to Celsius.

    let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

    let celcius = fahrenheit.map(function(elem) {
        return Math.round((elem - 32) * 5 / 9);
    });

    // ES6
    // fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

    celcius //  [-18, 0, 7, 10, 24, 27, 37, 49]

**What it does**: Traverses the array from left to right invoking a callback function on each element with parameters (below). For each callback the value returned becomes the element in the new array. After all elements have been traversed map() returns the new array with all the translated elements\[1\].

**parameters**:

    array.map(function(elem, index, array) {
          ...
    }, thisArg);

<table><thead><tr class="header"><th>param</th><th>meaning</th></tr></thead><tbody><tr class="odd"><td>elem</td><td>element value</td></tr><tr class="even"><td>index</td><td>index in each traversal, moving from left to right</td></tr><tr class="odd"><td>array</td><td>original array invoking the method</td></tr><tr class="even"><td>thisArg</td><td>(Optional) object that will be referred to as <code>this</code> in callback</td></tr></tbody></table>

# filter()

**Use it when**: You want to remove unwanted elements based on a condition.

Example: remove duplicate elements from an array.

    let uniqueArray = array.filter(function(elem, index, array) {
            return array.indexOf(elem) === index;
        }
    );

    // ES6
    // array.filter((elem, index, arr) => arr.indexOf(elem) === index);

**What it does**: Like `map()` it traverses the array from left to right invoking a callback function on each element. The returned value must be a boolean identifying whether the element will be kept or discarded. After all elements have been traversed `filter()` returns a new array with all elements that returned true\[2\].

It has the same parameters as `map()`

**parameters**:

    array.filter(function(elem, index, array) {
          ...
    }, thisArg);

<table><thead><tr class="header"><th>param</th><th>meaning</th></tr></thead><tbody><tr class="odd"><td>elem</td><td>element value</td></tr><tr class="even"><td>index</td><td>index in each traversal, moving from left to right</td></tr><tr class="odd"><td>array</td><td>original array invoking the method</td></tr><tr class="even"><td>thisArg</td><td>(Optional) object that will be referred to as <code>this</code> in callback</td></tr></tbody></table>

# reduce()

**Use it when**: You want to find a cumulative or concatenated value based on elements across the array.

Example: Sum up orbital rocket launches in 2014.

    let rockets = [
        { country:'Russia', launches:32 },
        { country:'US', launches:23 },
        { country:'China', launches:16 },
        { country:'Europe(ESA)', launches:7 },
        { country:'India', launches:4 },
        { country:'Japan', launches:3 }
    ];

    let sum = rockets.reduce(function(prevVal, elem) {
        return prevVal + elem.launches;
    }, 0);

    // ES6
    // rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);

    sum // 85

**What it does**: Like `map()` it traverses the array from left to right invoking a callback function on each element. The value returned is the cumulative value passed from callback to callback. After all elements have been traversed `reduce()` returns the cumulative value\[3\].

**parameters**:

    array.reduce(function(prevVal, elem, index, array) {
          ...
    }, initialValue);

<table style="width:99%;"><colgroup><col style="width: 13%" /><col style="width: 86%" /></colgroup><thead><tr class="header"><th>param</th><th>meaning</th></tr></thead><tbody><tr class="odd"><td>prevValue</td><td>cumulative value returned thru each callback</td></tr><tr class="even"><td>elem</td><td>element value</td></tr><tr class="odd"><td>index</td><td>index of the traversal, moving from left to right</td></tr><tr class="even"><td>array</td><td>original array invoking the method</td></tr><tr class="odd"><td>initialValue</td><td>(Optional) object used as first argument in the first (leftmost) callback.</td></tr></tbody></table>

# Misc

- Each are methods on the Array’s prototype object.
- Changing an element in the `array` parameter in any callback will persist across all remaining callbacks but has no effect on the returned array.
- Callback functions are invoked on indexes with any value, even `undefined`, but not ones deleted or never assigned a value.

It’s worth noting `for` loops still definitely have a place when working with large arrays (e.g. over 1,000 elements) or needing to break the traversal if a condition is met.
