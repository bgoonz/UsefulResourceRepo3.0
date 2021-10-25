<a href="bookdown-cheat-sheet.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   [<span class="header-section-number">19</span> Render an R script](r-test-drive.html)
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
-   <a href="bookdown-cheat-sheet.html" class="active"><span class="header-section-number">41</span> Bookdown cheat sheet</a>
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

<span class="header-section-number">41</span> Bookdown cheat sheet<a href="bookdown-cheat-sheet.html#bookdown-cheat-sheet" class="anchor"><em></em></a>
=======================================================================================================================================================

Here’s where I park *little* *examples* **for myself** about bookdown mechanics that I keep forgetting.

The bookdown book: <a href="https://bookdown.org/yihui/bookdown/" class="uri">https://bookdown.org/yihui/bookdown/</a>

<span class="header-section-number">41.1</span> Heading blah blah<a href="bookdown-cheat-sheet.html#heading-blah-blah" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------

<span class="header-section-number">41.2</span> About labelling things<a href="bookdown-cheat-sheet.html#id-example" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

You can label chapter and section titles using `{#label}` after them, e.g., we can reference Section [41.2](bookdown-cheat-sheet.html#id-example). If you do not manually label them, there will be automatic labels anyway, e.g., this reference to the unlabelled heading [41.1](bookdown-cheat-sheet.html#heading-blah-blah) uses the automatically generated label `\@ref(heading-blah-blah)`.

<span class="header-section-number">41.3</span> Cross-references<a href="bookdown-cheat-sheet.html#cross-references" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

Add an explicit label by adding `{#label}` to the end of the section header. If you know you’re going to refer to something, this is probably a good idea.

To refer to in a chapter- or section-number-y way, use `\@ref(label)`.

-   `\@ref(install-git)` example: In chapter [6](install-git.html#install-git) we explain how to install Git.

If you are happy with the section header as the link text, use it inside a single set of square brackets:

-   `[A picture is worth a thousand words]`: example “A picture is worth a thousand words” via [A picture is worth a thousand words](git-client.html#a-picture-is-worth-a-thousand-words)

There are two ways to specify custom link text:

-   `[link text][Section header text]`, e.g., “pic = 1000 words” via [pic = 1000 words](git-client.html#a-picture-is-worth-a-thousand-words)
-   `[link text](#label)`, e.g., “RStudio, meet Git” via [RStudio, meet Git](rstudio-see-git.html#rstudio-see-git)

The Pandoc documentation provides more details on automatic section IDs and implicit header references.

<span class="header-section-number">41.4</span> Figures, tables, citations<a href="bookdown-cheat-sheet.html#figures-tables-citations" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Figures and tables with captions will be placed in `figure` and `table` environments, respectively.

    par(mar = c(4, 4, .1, .1))
    plot(pressure, type = 'b', pch = 19)

<span id="fig:nice-fig" style="display:block;"></span> <img src="notes-bookdown-cheat-sheet_files/figure-html/nice-fig-1.png" alt="Here is a nice figure!" style="width:80.0%" />

Figure 41.1: Here is a nice figure!

Reference a figure by its code chunk label with the `fig:` prefix, e.g., see Figure [41.1](bookdown-cheat-sheet.html#fig:nice-fig). Similarly, you can reference tables generated from `knitr::kable()`, e.g., see Table [41.1](bookdown-cheat-sheet.html#tab:nice-tab).

    knitr::kable(
      head(iris, 20), caption = 'Here is a nice table!',
      booktabs = TRUE
    )

<table><caption> <span id="tab:nice-tab">Table 41.1: </span>Here is a nice table!</caption><thead><tr class="header"><th style="text-align: right;">Sepal.Length</th><th style="text-align: right;">Sepal.Width</th><th style="text-align: right;">Petal.Length</th><th style="text-align: right;">Petal.Width</th><th style="text-align: left;">Species</th></tr></thead><tbody><tr class="odd"><td style="text-align: right;">5.1</td><td style="text-align: right;">3.5</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">4.9</td><td style="text-align: right;">3.0</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">4.7</td><td style="text-align: right;">3.2</td><td style="text-align: right;">1.3</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">4.6</td><td style="text-align: right;">3.1</td><td style="text-align: right;">1.5</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">5.0</td><td style="text-align: right;">3.6</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">5.4</td><td style="text-align: right;">3.9</td><td style="text-align: right;">1.7</td><td style="text-align: right;">0.4</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">4.6</td><td style="text-align: right;">3.4</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.3</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">5.0</td><td style="text-align: right;">3.4</td><td style="text-align: right;">1.5</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">4.4</td><td style="text-align: right;">2.9</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">4.9</td><td style="text-align: right;">3.1</td><td style="text-align: right;">1.5</td><td style="text-align: right;">0.1</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">5.4</td><td style="text-align: right;">3.7</td><td style="text-align: right;">1.5</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">4.8</td><td style="text-align: right;">3.4</td><td style="text-align: right;">1.6</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">4.8</td><td style="text-align: right;">3.0</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.1</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">4.3</td><td style="text-align: right;">3.0</td><td style="text-align: right;">1.1</td><td style="text-align: right;">0.1</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">5.8</td><td style="text-align: right;">4.0</td><td style="text-align: right;">1.2</td><td style="text-align: right;">0.2</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">5.7</td><td style="text-align: right;">4.4</td><td style="text-align: right;">1.5</td><td style="text-align: right;">0.4</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">5.4</td><td style="text-align: right;">3.9</td><td style="text-align: right;">1.3</td><td style="text-align: right;">0.4</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">5.1</td><td style="text-align: right;">3.5</td><td style="text-align: right;">1.4</td><td style="text-align: right;">0.3</td><td style="text-align: left;">setosa</td></tr><tr class="odd"><td style="text-align: right;">5.7</td><td style="text-align: right;">3.8</td><td style="text-align: right;">1.7</td><td style="text-align: right;">0.3</td><td style="text-align: left;">setosa</td></tr><tr class="even"><td style="text-align: right;">5.1</td><td style="text-align: right;">3.8</td><td style="text-align: right;">1.5</td><td style="text-align: right;">0.3</td><td style="text-align: left;">setosa</td></tr></tbody></table>

You can write citations, too. For example, we are using the **bookdown** package <span class="citation">(Xie [2021](references.html#ref-R-bookdown))</span> in this sample book, which was built on top of R Markdown and **knitr** <span class="citation">(Xie [2015](references.html#ref-knitr-book))</span>.

<span class="header-section-number">41.5</span> How the square bracket links work<a href="bookdown-cheat-sheet.html#how-the-square-bracket-links-work" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Context: you prefer to link with text, not a chapter or section number.

-   GOOD! Here’s a link to [Contributors](contrib.html#contrib).
-   BAD. You can see contributors in [2](contrib.html#contrib).

Facts and vocabulary

-   Each chapter is a file. These files should begin with the chapter title using a level-one header, e.g., `# Chapter Title`.
-   A chapter can be made up of sections, indicated by lower-level headers, e.g., `## A section within the chapter`.
-   There are three ways to address a section when creating links within your book:
    -   **Explicit identifier**: In `# My header {#foo}` the explicit identifier is `foo`.
    -   **Automatically generated identifier**: `my-header` is the auto-identifier for `# My header`. Pandoc creates auto-identifiers according to rules laid out in [Extension: auto\_identifiers](http://pandoc.org/README.html#extension-auto_identifiers).
    -   The header text, e.g., `My header` be used verbatim as an **implicit header reference**. See [Extension: implicit\_header\_references](http://pandoc.org/README.html#extension-implicit_header_references) for more.
-   All 3 forms can be used to create cross-references but you build the links differently.
-   Advantage of explicit identification: You are less likely to update the section header and then forget to make matching edits to references elsewhere in the book.

How to make text-based links using explicit identifiers, automatic identifiers, and implicit references:

-   Use implicit reference alone to get a link where the text is exactly the section header:
    -   `[Introduce yourself to Git]` [Introduce yourself to Git](hello-git.html#hello-git)
    -   `[Success and operating systems]` [Success and operating systems](install-intro.html#success-and-operating-systems)
-   You can provide custom text for the link with all 3 methods of addressing a section:
    -   Implicit header reference: `[link text][Recommended Git clients]` [link text](git-client.html#recommended-git-clients)  
    -   Explicit identifier: `[hello git! I'm Jenny](#hello-git)` [hello git! I’m Jenny](hello-git.html#hello-git)
    -   Automatic identifier: `[Any text you want](#recommended-git-clients)` [Any text you want](git-client.html#recommended-git-clients)

[<span class="header-section-number">40</span> Ideas for content](ideas-for-content.html)

[<span class="header-section-number">A</span> The shell](shell.html)

On this page
------------

-   <a href="bookdown-cheat-sheet.html#bookdown-cheat-sheet" class="nav-link"><span class="header-section-number">41</span> Bookdown cheat sheet</a>
-   <a href="bookdown-cheat-sheet.html#heading-blah-blah" class="nav-link"><span class="header-section-number">41.1</span> Heading blah blah</a>
-   <a href="bookdown-cheat-sheet.html#id-example" class="nav-link"><span class="header-section-number">41.2</span> About labelling things</a>
-   <a href="bookdown-cheat-sheet.html#cross-references" class="nav-link"><span class="header-section-number">41.3</span> Cross-references</a>
-   <a href="bookdown-cheat-sheet.html#figures-tables-citations" class="nav-link"><span class="header-section-number">41.4</span> Figures, tables, citations</a>
-   <a href="bookdown-cheat-sheet.html#how-the-square-bracket-links-work" class="nav-link"><span class="header-section-number">41.5</span> How the square bracket links work</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/notes-bookdown-cheat-sheet.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/notes-bookdown-cheat-sheet.Rmd" id="book-edit">Edit this page <em></em></a>
