```r
# Function
xylist <- function(start, finish){

  x <- seq(start, finish)
  y <- seq(start, finish)^2

  return(list("x" = x, "y" = y))

}

xyOut <- xylist(1,5)
xyOut$x
xyOut$y

```

```r
# Outputs
xyOut <- xylist(1,5)

xyOut$x
[1] 1 2 3 4 5
xyOut$y
[1]  1  4  9 16 25
```
