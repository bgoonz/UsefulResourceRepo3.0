<a href="r-test-drive.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

[Happy Git and GitHub for the useR](index.html)
===============================================

<span class="sr-only">Show table of contents</span>

Table of contents
-----------------

-   [Let’s Git started](index.html)
-   [<span class="header-section-number">1</span> Why Git? Why GitHub?](big-picture.html)
-   [<span class="header-section-number">2</span> Contributors](contrib.html)
-   [<span class="header-section-number">3</span> Workshops](workshops.html)
-   Installation
-   [Half the battle](install-intro.html)
-   [<span class="header-section-number">4</span> Register a GitHub account](github-acct.html)
-   [<span class="header-section-number">5</span> Install or upgrade R and RStudio](install-r-rstudio.html)
-   [<span class="header-section-number">6</span> Install Git](install-git.html)
-   [<span class="header-section-number">7</span> Introduce yourself to Git](hello-git.html)
-   [<span class="header-section-number">8</span> Install a Git client](git-client.html)
-   Connect Git, GitHub, RStudio
-   [Can you hear me now?](connect-intro.html)
-   [<span class="header-section-number">9</span> Personal access token for HTTPS](https-pat.html)
-   [<span class="header-section-number">10</span> Set up keys for SSH](ssh-keys.html)
-   [<span class="header-section-number">11</span> Connect to GitHub](push-pull-github.html)
-   [<span class="header-section-number">12</span> Connect RStudio to Git and GitHub](rstudio-git-github.html)
-   [<span class="header-section-number">13</span> Detect Git from RStudio](rstudio-see-git.html)
-   [<span class="header-section-number">14</span> RStudio, Git, GitHub Hell](troubleshooting.html)
-   Early GitHub Wins
-   [Get started with GitHub](usage-intro.html)
-   [<span class="header-section-number">15</span> New project, GitHub first](new-github-first.html)
-   [<span class="header-section-number">16</span> Existing project, GitHub first](existing-github-first.html)
-   [<span class="header-section-number">17</span> Existing project, GitHub last](existing-github-last.html)
-   [<span class="header-section-number">18</span> Test drive R Markdown](rmd-test-drive.html)
-   <a href="r-test-drive.html" class="active"><span class="header-section-number">19</span> Render an R script</a>
-   Git fundamentals
-   [Some Git basics](git-intro.html)
-   [<span class="header-section-number">20</span> Repo, commit, diff, tag](git-basics.html)
-   [<span class="header-section-number">21</span> Git commands](git-commands.html)
-   [<span class="header-section-number">22</span> Branches](git-branches.html)
-   [<span class="header-section-number">23</span> Remotes](git-remotes.html)
-   Remote setups
-   [Git remote setups](remote-scenarios-intro.html)
-   [<span class="header-section-number">24</span> Common remote setups](common-remote-setups.html)
-   [<span class="header-section-number">25</span> Equivocal remote setups](equivocal.html)
-   Daily Workflows
-   [Useful Git patterns for real life](workflows-intro.html)
-   [<span class="header-section-number">26</span> The Repeated Amend](repeated-amend.html)
-   [<span class="header-section-number">27</span> Dealing with push rejection](push-rejected.html)
-   [<span class="header-section-number">28</span> Pull, but you have local work](pull-tricky.html)
-   [<span class="header-section-number">29</span> Time travel: See the past](time-travel-see-past.html)
-   [<span class="header-section-number">30</span> Fork and clone](fork-and-clone.html)
-   [<span class="header-section-number">31</span> Get upstream changes for a fork](upstream-changes.html)
-   [<span class="header-section-number">32</span> Explore and extend a pull request](pr-extend.html)
-   [<span class="header-section-number">33</span> Make a GitHub repo browsable](workflows-browsability.html)
-   Activity prompts
-   [<span class="header-section-number">34</span> Clone a repo](clone.html)
-   [<span class="header-section-number">35</span> Create a bingo card](bingo.html)
-   [<span class="header-section-number">36</span> Burn it all down](burn.html)
-   [<span class="header-section-number">37</span> Resetting](reset.html)
-   [<span class="header-section-number">38</span> Search GitHub](search.html)
-   Notes
-   [Notes](notes-intro.html)
-   [<span class="header-section-number">39</span> Run a course with GitHub](classroom-overview.html)
-   [<span class="header-section-number">40</span> Ideas for content](ideas-for-content.html)
-   [<span class="header-section-number">41</span> Bookdown cheat sheet](bookdown-cheat-sheet.html)
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

<span class="header-section-number">19</span> Render an R script<a href="r-test-drive.html#r-test-drive" class="anchor"><em></em></a>
=====================================================================================================================================

An underappreciated fact is that much of what you can do with R Markdown, you can also do with an R script.

If you’re in analysis mode and want a report as a side effect, write an R script. If you’re writing a report with a lot of R code in it, write Rmd. In either case, render to markdown and/or HTML to communicate with other human beings.

-   In R markdown, prose is top-level and code is tucked into chunks.
-   In R scripts, code is top-level and prose is tucked into comments. You will use `#'` to request that certain comments appear as top-level prose in the rendered output.

You will continue to specify things like the output format via YAML at the top of the file. This will need to be commented with `#'`.

<span class="header-section-number">19.1</span> Morph R Markdown into a renderable R script<a href="r-test-drive.html#morph-r-markdown-into-a-renderable-r-script" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Get yourself a working R Markdown file, such as the one you made in your [Rmd test drive](rmd-test-drive.html#rmd-test-drive). Or use the boilerplate Rmd document RStudio makes with *File &gt; New File &gt; R Markdown …*.

Save the file as `foo.R`, as opposed to `foo.Rmd`. Yes, for a brief moment, you will have R Markdown saved as an R script, but that won’t be true for long.

Transform the Rmd to R:

-   Anything that’s not R code? Like the YAML and the English prose? Protect it with roxygen-style comments: start each line with `#'`.

-   Anything that’s R code? Let it exist “as is” as top-level code. That means you’ll need to change the syntax of R chunk headers like so:

    Before: ```` ```{r setup, include = FALSE} ````  
    After: `#+ r setup, include = FALSE`

    Replace the leading backticks and opening curly brace with `#+`.  
    Delete the trailing curly brace.  
    Delete the 3 backticks that end each chunk.

Render the R script through one of these methods:

-   Click on the “notebook” icon in RStudio to “Compile Report”.
-   In RStudio, do *File &gt; Knit Document*.
-   In R, do `rmarkdown::render("foo.R")`.

You’ll get a markdown and/or HTML report, just as with R Markdown.

If you’re having trouble making all the necessary changes and you’re frustrated, see below for an example you can copy and paste.

All the workflow tips from the [Rmd test drive](rmd-test-drive.html#rmd-test-drive) apply here: when you script an analysis, render it to markdown, commit the `.R`, the `.md`, any associated figures, and push to GitHub. Collaborators can see your code but also browse the result without running it. This makes the current state of your analysis accessible to someone who does not even run R or who wants to take a quick look at things from a cell phone or while on vacation.

<span class="header-section-number">19.2</span> Write a render-ready R script<a href="r-test-drive.html#write-a-render-ready-r-script" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Instead of morphing an R Markdown file, let’s create a render-ready R script directly.

Create a new R script and copy/paste this code into it.

    #' Here's some prose in a very special comment. Let's summarize the built-in
    #' dataset `VADeaths`.
    ## here is a regular code comment, that will remain as such
    summary(VADeaths)

    #' Here's some more prose. I can use usual markdown syntax to make things
    #' **bold** or *italics*. Let's use an example from the `dotchart()` help to
    #' make a Cleveland dot plot from the `VADeaths` data. I even bother to name
    #' this chunk, so the resulting PNG has a decent name.
    #+ dotchart
    dotchart(VADeaths, main = "Death Rates in Virginia - 1940")

Render the R script through one of these methods:

-   Click on the “notebook” icon in RStudio to “Compile Report”.
-   In RStudio, do *File &gt; Knit Document*.
-   In R, do `rmarkdown::render("YOURSCRIPT.R")`.

Revel in your attractive looking report with almost zero effort! Seriously, all you had to do was think about when to use special comments `#'` in order to promote that to nicely rendered text.

Drawing on the workflow tips in [Rmd test drive](rmd-test-drive.html#rmd-test-drive), let’s add some YAML frontmatter, properly commented with `#'`, and request the `github_document`. Here’s the whole script again:

    #' ---
    #' title: "R scripts can be rendered!"
    #' author: "Jenny Bryan"
    #' date: "April 1, 2014"
    #' output: github_document
    #' ---
    #'
    #' Here's some prose in a very special comment. Let's summarize the built-in
    #' dataset `VADeaths`.
    ## here is a regular code comment, that will remain as such
    summary(VADeaths)

    #' Here's some more prose. I can use usual markdown syntax to make things
    #' **bold** or *italics*. Let's use an example from the `dotchart()` help to
    #' make a Cleveland dot plot from the `VADeaths` data. I even bother to name
    #' this chunk, so the resulting PNG has a decent name.
    #+ dotchart
    dotchart(VADeaths, main = "Death Rates in Virginia - 1940")

Behind the scenes here we have used `rmarkdown::render()` to render this script and you can go [visit it on GitHub](https://github.com/jennybc/happy-git-with-r/blob/master/render-r-script-demo.md).

[<span class="header-section-number">18</span> Test drive R Markdown](rmd-test-drive.html)

[Some Git basics](git-intro.html)

On this page
------------

-   <a href="r-test-drive.html#r-test-drive" class="nav-link"><span class="header-section-number">19</span> Render an R script</a>
-   <a href="r-test-drive.html#morph-r-markdown-into-a-renderable-r-script" class="nav-link"><span class="header-section-number">19.1</span> Morph R Markdown into a renderable R script</a>
-   <a href="r-test-drive.html#write-a-render-ready-r-script" class="nav-link"><span class="header-section-number">19.2</span> Write a render-ready R script</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/usage-r-script-and-github.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/usage-r-script-and-github.Rmd" id="book-edit">Edit this page <em></em></a>
