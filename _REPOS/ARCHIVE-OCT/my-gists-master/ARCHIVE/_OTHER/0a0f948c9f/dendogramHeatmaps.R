##### Dendogram Reatmaps in R -- both static and D3.js comparisons #####

library(d3heatmap)

# Comperables (w/scaled values -- better than below)
heatmap(scale(mtcars), Colv=T)
d3heatmap(scale(mtcars), Colv=T, colors="YlOrRd")

# Comperables (w/actual values -- not as strong as above)
heatmap(as.matrix(mtcars), scale="column", Colv=T)
d3heatmap(mtcars, scale = "column", Colv=T, colors="YlOrRd" )

# Refs:
# http://digitheadslabnotebook.blogspot.com/2011/06/drawing-heatmaps-in-r.html
# https://github.com/rstudio/d3heatmap

#Note with d3.js (Rstudio)
# "You can also include them in R Markdown chunks, 
# or use them in Shiny applications with the d3heatmapOutput 
# and renderD3heatmap functions."