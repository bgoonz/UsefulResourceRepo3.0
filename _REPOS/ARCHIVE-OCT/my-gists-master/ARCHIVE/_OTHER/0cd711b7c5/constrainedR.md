```r
library(mosaic)

f <- makeFun(x^2 + y ~ x & y)
g <- makeFun(x^2 - y^2 ~ x & y)

  # levelset <- 10
  # plotFun(f(x,y) ~ x & y, xlim = range(-10, 10),
  #         levels = levelset, ylim = range(-10, 10), filled = F)
  # plotFun(g(x,y) ~ x & y, levels = levelset,  xlim = range(-10, 10),
  #         ylim = range(-10, 10), filled = F, add = T)

plotFun(f(x,y) ~ x & y, xlim = range(-10, 10),
       ylim = range(-10, 10), filled = F, levels = seq(0, 100, by = 5))
plotFun(g(x,y) ~ x & y,  xlim = range(-10, 10),
        ylim = range(-10, 10), filled = F, add = T, col = "red", levels = seq(0, 100, by = 5))


x <- seq(-10, 10, len = 20)
y <- seq(-10, 10, len = 20)
f <- function(x ,y){
  x^2 + y
}

fb <- function(x){f(x[1], x[2])}


fz <- outer(x, y, f)
contour(x, y, fz)
polygon(c(-10, -10, 0), c(0, 10, 0), col = "grey",
        density = c(30,40))


    # # Equalities
    # x <= 0
    # y >= 0
    # y + x <= 0 # Representing y = 0 - 1*x
    #
    # # Rewritten
    # x <= 0
    # -y <= 0
    # x + y <= 0
    #
    # A
    #   1   0
    #   0  -1
    #   1   1
    #
    # b
    # 0
    # 0
    # 0

A <- matrix(c(1, 0, 0, -1, 1, 1), 3, 2, byrow = T)
b <- c(0, 0, 0)
constrOptim(c(-5, 2),fb, NULL, A, b)
```
