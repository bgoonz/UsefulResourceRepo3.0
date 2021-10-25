Sets the working directory in R on a Linux system after <Topdir> and <Root> are replaced with actual folder names.

Alows for sharing code without each user having to change the HOME variable (e.g., "home/myMachine/Projects/First"

```R
setwd(paste0(Sys.getenv("HOME"),"/<TopDir>/<Root>"))
```

For Windows, use proper slash direction and notation.
