# Analysis of Algorithms

**Exercise I**: _Give an analysis of the running time of each snippet of pseudocode with respect to the input size n of each of the following:_

```
a)  a = 0
    while (a < n * n * n)
      a = a + n * n
```

```
b)  sum = 0
    for (i = 0; i < n; i++)
      for (j = i + 1; j < n; j++)
        for (k = j + 1; k < n; k++)
          for (l = k + 1; l < 10 + k; l++)
            sum++
```

```
c)  bunnyEars = function(bunnies) {
      if (bunnies == 0) return 0
      return 2 + bunnyEars(bunnies-1)
    }
```

**Exercise II**:
Suppose that you have an _n_-story building and plenty of eggs. Suppose also that an egg gets broken if it is thrown off floor _f_ or higher, and doesn't get broken if dropped off a floor less than floor _f_. Devise a strategy to determine the value of _f_ such that the number of dropped eggs is minimized.

## PSEUDOCODE in thestyle of C

int toss_an_egg(int \*arr) {

int sum = 0;
for(int i = 0; i < arr.length; i++) {
for(int j = 0; j < arr.length; j++) {
if(sum < (arr[j] - arr[i]))
sum = (arr[j] - arr[i]));
}
}
return sum;
}

int n = 5
building = int[n]

int min*egg_brakes = toss_eggs(builting)
\_f*(n) = min*egg_brakes(n)
this implies a relationship of O(n) for the \_f* and the toss_an_egg function

in this situation I think this algorithm would give the minimal broken eggs using the specs mentioned above
