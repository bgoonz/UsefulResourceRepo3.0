library(babynames)
library(dplyr)
library(ggplot2)

babynames <- babynames %>% tbl_df()

babynames %>%
  filter(name == "Hilary" | name == "Hillary") %>%
  filter(year >= 1950, sex == "F") %>%
  ggplot(aes(x = year, y = prop, group = name, color = name)) + geom_line()