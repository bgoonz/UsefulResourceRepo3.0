<a href="rmd-test-drive.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="rmd-test-drive.html" class="active"><span class="header-section-number">18</span> Test drive R Markdown</a>
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
-   [<span class="header-section-number">41</span> Bookdown cheat sheet](bookdown-cheat-sheet.html)
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

<span class="header-section-number">18</span> Test drive R Markdown<a href="rmd-test-drive.html#rmd-test-drive" class="anchor"><em></em></a>
============================================================================================================================================

We will author an R Markdown document and render it to HTML. We discuss how to keep the intermediate Markdown file, the figures, and what to commit to Git and push to GitHub. If GitHub is the primary venue, we render directly to GitHub-flavored markdown and never create HTML.

Here is the official R Markdown documentation: <a href="http://rmarkdown.rstudio.com" class="uri">http://rmarkdown.rstudio.com</a>

<span class="header-section-number">18.1</span> Hello World<a href="rmd-test-drive.html#hello-world" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------

We’ll practice with RStudio’s boilerplate R Markdown document.

Launch RStudio in a Project that is a Git repo that is connected to a GitHub repo.

We are modelling “walk before you run” here. It is best to increase complexity in small increments. We test our system’s ability to render the [“hello world”](http://en.wikipedia.org/wiki/%22Hello,_world!%22_program) of R Markdown documents before we muddy the waters with our own, probably buggy, documents.

Do this: *File &gt; New File &gt; R Markdown …*

-   Give it an informative title. This will appear in the document but does not necessarily have anything to do with the file’s name. But the title and filename should be related! Why confuse yourself? The title is for human eyeballs, so it can contain spaces and punctuation. The filename is for humans and computers, so it should have similar words in it but no spaces and no punctuation.
-   Accept the default Author or edit if you wish.
-   Accept the default output format of HTML.
-   Click OK.

Save this document to a reasonable filename and location. The filename should end in `.Rmd` or `.rmd`. Save in the top-level of this RStudio project and Git repository, that is also current working directory. Trust me on this and do this for a while.

You might want to commit here. So you can see what’s about to change …

Click on “Knit HTML” or do *File &gt; Knit Document*. RStudio should display a preview of the resulting HTML. Also look at the file browser. You should see the R Markdown document, i.e. `foo.Rmd` AND the resulting HTML `foo.html`.

Congratulations, you’ve just made your first reproducible report with R Markdown.

You might want to commit here.

<span class="header-section-number">18.2</span> Push to GitHub<a href="rmd-test-drive.html#push-to-github" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------

Push the current state to GitHub.

Go visit it in the browser.

Do you see the new files? An R Markdown document and the associated HTML? Visit both in the browser. Verify this:

-   Rmd is quite readable. But the output is obviously not there.
-   HTML is ugly.

<span class="header-section-number">18.3</span> Output format<a href="rmd-test-drive.html#output-format" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------

Do you really want HTML? Do you only want HTML? If so, you can skip this step!

The magical process that turns your R Markdown to HTML is like so: `foo.Rmd --> foo.md --> foo.html`. Note the intermediate markdown, `foo.md`. By default RStudio discards this, but you might want to hold on to that markdown.

Why? GitHub gives very special treatment to markdown files. They are rendered in an almost HTML-like way. This is great because it preserves all the charms of plain text but gives you a pseudo-webpage for free when you visit the file in the browser. In contrast, HTML is rendered as plain text on GitHub and you’ll have to take special measures to see it the way you want.

In many cases, you *only want the markdown*. In that case, we switch the output format to `github_document`. This means render will be `foo.Rmd --> foo.md`, where `foo.md` is GitHub-flavored markdown. If you still want the HTML *but also the intermediate markdown*, there’s a way to request that too.

**Output format** is one of the many things we can control in the YAML frontmatter – the text at the top of your file between leading and trailing lines of `---`.

You can make some changes via the RStudio IDE: click on the “gear” in the top bar of the source editor, near the “Knit HTML” button. Select “Output options” and go to the Advanced tab and check “Keep markdown source file.” Your YAML should now look more like this:

        ---
        title: "Something fascinating"
        author: "Jenny Bryan"
        date: "2021-10-24"
        output:
          html_document:
            keep_md: true
        ---

You should have gained the line `keep_md: true`. You can also simply edit the file yourself to achieve this.

In fact this hand-edit is necessary if you want to keep only markdown and get GitHub-flavored markdown. In that case, make your YAML look like this:

        ---
        title: "Something fascinating"
        author: "Jenny Bryan"
        date: "2021-10-24"
        output: github_document
        ---

Save!

You might want to commit here.

Render via “Knit HTML” button.

Now revisit the file browser. In addition to `foo.Rmd`, you should now see `foo.md`. If there are R chunks that make figures, the usage of markdown output formats will also cause those figure files to be left behind in a sensibly named sub-directory, `foo_files`.

If you commit and push `foo.md` and everything inside `foo_files`, then anyone with permission to view your GitHub repo can see a decent-looking version of your report.

If your output format is `html_document`, you should still see `foo.html`. If your output format is `github_document` and you see `foo.html`, that’s leftover from earlier experiments. Delete that. It will only confuse you later.

You might want to commit here.

<span class="header-section-number">18.4</span> Push to GitHub<a href="rmd-test-drive.html#push-to-github-1" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------

Push the current state to GitHub.

Go visit it in the browser.

Do you see the modifications and new file(s)? Your Rmd should be modified (the YAML frontmatter changed). And you should have gained at least, the associated markdown file.

-   Visit the markdown file and compare to our previous HTML.
-   Do you see how the markdown is much more useful on GitHub? Internalize that.

<span class="header-section-number">18.5</span> Put your stamp on it<a href="rmd-test-drive.html#put-your-stamp-on-it" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------

Select everything but the YAML frontmatter and … delete it!

Write a single English sentence.

Insert an empty R chunk, via the “Chunk” menu in upper right of source editor or with corresponding keyboard shortcut.

    ```{r}
    ## insert your brilliant WORKING code here
    ```

Insert 1 to 3 lines of functioning code that begin the task at hand. “Walk through” and run those lines using the “Run” button or the corresponding keyboard shortcut. You MUST make sure your code actually works!

Satisfied? Save!

You might want to commit here.

Now render the whole document via “Knit HTML.” Voilà!

You might want to commit here.

<span class="header-section-number">18.6</span> Develop your report<a href="rmd-test-drive.html#develop-your-report" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

In this incremental manner, develop your report. Add code to this chunk. Refine it. Add new chunks. Go crazy! But keep running the code “manually” to make sure it works.

If it doesn’t work with you babysitting it, I can guarantee you it will fail, in a more spectacular and cryptic way, when run at arms-length via “Knit HTML” or `rmarkdown::render()`.

Clean out your workspace and restart R and re-run everything periodically, if things get weird. There are lots of chunk menu items and keyboard shortcuts to accelerate this workflow. Render the whole document often to catch errors when they’re easy to pinpoint and fix. Save often and commit every time you reach a point that you’d like as a “fall back” position.

You’ll develop your own mojo soon, but this should give you your first successful R Markdown experience.

<span class="header-section-number">18.7</span> Publish your report<a href="rmd-test-drive.html#publish-your-report" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

If you’ve been making HTML, you can put that up on the web somewhere, email to your collaborator, whatever.

No matter what, technically you can publish this report merely by pushing a rendered version to GitHub. However, certain practices make this effort at publishing more satisfying for your audience.

Here are two behaviors I find very frustrating:

-   “Here is my code. Behold.” This is when someone only pushes their source, i.e. R Markdown or R code AND they want other people to look at their “product”. The implicit assumption is that target audience will download code and run it. Sometimes the potential payoff simply does not justify this effort.
-   “Here is my HTML. Behold.” This is when someone doesn’t bother to edit the default output format and accepts HTML only. What am I supposed to do with HTML on GitHub?

Creating, committing, and pushing markdown is a very functional, lighweight publishing strategy. Use `output: github_document` or `keep_md: true` if output is `html_document`. In both cases, it is critical to also commit and push everything inside `foo_files`. Now people can visit and consume your work like any other webpage.

This is (sort of) another example of keeping things machine- and human-readable, which is bliss. By making `foo.Rmd` available, others can see and run your **actual code**. By sharing `foo.md` and/or `foo.html`, others can casually browse your end product and decide if they even want to bother.

<span class="header-section-number">18.8</span> HTML on GitHub<a href="rmd-test-drive.html#html-on-github" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------

HTML files, such as `foo.html`, are not immediately useful on GitHub (though your local versions are easily viewable). Visit one and you’ll see the raw HTML. Yuck. But there are ways to get a preview: such as <a href="http://htmlpreview.github.io" class="uri">http://htmlpreview.github.io</a>. Expect much pain with HTML files inside private repos (hence the recommendations above to emphasize markdown). When it becomes vital for the whole world to see proper HTML in its full glory, it’s time to use a more sophisticated web publishing strategy.

I have more [general ideas](workflows-browsability.html#workflows-browsability) about how to make a GitHub repo function as a website.

<span class="header-section-number">18.9</span> Troubleshooting<a href="rmd-test-drive.html#rmd-troubleshooting" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------

**Make sure RStudio and the `rmarkdown` package (and its dependencies) are up-to-date.** In case of catastrophic failure to render the boilerplate R Markdown document, consider that your software may be too old. Details on the system used to render this document and how to check your setup:

-   rmarkdown version 2.11. Use `packageVersion("rmarkdown")` to check yours.
-   R version 4.1.1 (2021-08-10). Use `R.version.string` to check yours.
-   RStudio IDE 1.2.1555. Use *RStudio &gt; About RStudio* or `RStudio.Version()$version` to check yours.

**Get rid of your `.Rprofile`**, at least temporarily. I have found that a “mature” `.Rprofile` that has accumulated haphazardly over the years can cause trouble. Specifically, if you’ve got anything in there relating to `knitr`, `markdown`, `rmarkdown` and RStudio itself, it may be preventing the installation or usage of the most recent goodies. Comment the whole file out or rename it something else and relaunch or even re-install RStudio.

**“I have ignored your advice and dumped a bunch of code in at once. Now my Rmd does not render.”** If you can’t figure out what’s wrong by reading the error messages, pick one:

-   Back out of these changes, get back to a functional state (possibly with no code), and restore them gradually. Run your code interactively to make sure it works. Render the entire document frequently. Commit after each successful addition! When you re-introduce the broken code, now it will be part of a small change and the root problem will be much easier to pinpoint and fix.
-   Tell knitr to soldier on, even in the presence of errors. Some problems are easier to diagnose if you can execute specific R statements during rendering and leave more evidence behind for forensic examination.
    -   Insert this chunk near the top of your `.Rmd` document:

            ```{r setup, include = FALSE, cache = FALSE}
            knitr::opts_chunk$set(error = TRUE)
            ```

    -   If it’s undesirable to globally accept errors, you can still do this for a specific chunk like so:

            ```{r wing-and-a-prayer, error = TRUE}
            ## your sketchy code goes here ;)
            ```

-   Adapt the [“git bisect” strategy](http://webchick.net/node/99):
    -   Put `knitr::knit_exit()` somewhere early in your `.Rmd` document, either in inline R code or in a chunk. Keep moving it earlier until things work. Now move it down in the document. Eventually you’ll be able to narrow down the location of your broken code well enough to find the line(s) and fix it.

**Check your working directory.** It’s going to break your heart as you learn how often your mistakes are really mundane and basic. Ask me how I know. When things go wrong consider:

-   What is the working directory?
-   Is that file I want to read/write actually where I think it is?

Drop these commands into R chunks to check the above:

-   `getwd()` will display working directory at **run time**. If you monkeyed around with working directory with, e.g., the mouse, maybe it’s set to one place for your interactive development and another when “Knit HTML” takes over?
-   `list.files()` will list the files in working directory. Is the file you want even there?

**Don’t try to change working directory within an R Markdown document**. Just don’t. See [knitr FAQ \#5](https://yihui.name/knitr/faq/). That is all.

**Don’t be in a hurry to create a complicated sub-directory structure.** RStudio/`knitr`/`rmarkdown` (which bring you the “Knit HTML” button) are rather opinionated about the working directory being set to the `.Rmd` file’s location and about all files living together in one big happy directory. This can all be worked around. For example, I [recommend the here package](https://github.com/jennybc/here_here#readme) for building file paths, once you require sub-directories. But don’t do this until you really need it.

[<span class="header-section-number">17</span> Existing project, GitHub last](existing-github-last.html)

[<span class="header-section-number">19</span> Render an R script](r-test-drive.html)

On this page
------------

-   <a href="rmd-test-drive.html#rmd-test-drive" class="nav-link"><span class="header-section-number">18</span> Test drive R Markdown</a>
-   <a href="rmd-test-drive.html#hello-world" class="nav-link"><span class="header-section-number">18.1</span> Hello World</a>
-   <a href="rmd-test-drive.html#push-to-github" class="nav-link"><span class="header-section-number">18.2</span> Push to GitHub</a>
-   <a href="rmd-test-drive.html#output-format" class="nav-link"><span class="header-section-number">18.3</span> Output format</a>
-   <a href="rmd-test-drive.html#push-to-github-1" class="nav-link"><span class="header-section-number">18.4</span> Push to GitHub</a>
-   <a href="rmd-test-drive.html#put-your-stamp-on-it" class="nav-link"><span class="header-section-number">18.5</span> Put your stamp on it</a>
-   <a href="rmd-test-drive.html#develop-your-report" class="nav-link"><span class="header-section-number">18.6</span> Develop your report</a>
-   <a href="rmd-test-drive.html#publish-your-report" class="nav-link"><span class="header-section-number">18.7</span> Publish your report</a>
-   <a href="rmd-test-drive.html#html-on-github" class="nav-link"><span class="header-section-number">18.8</span> HTML on GitHub</a>
-   <a href="rmd-test-drive.html#rmd-troubleshooting" class="nav-link"><span class="header-section-number">18.9</span> Troubleshooting</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/usage-rmd-and-github.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/usage-rmd-and-github.Rmd" id="book-edit">Edit this page <em></em></a>
