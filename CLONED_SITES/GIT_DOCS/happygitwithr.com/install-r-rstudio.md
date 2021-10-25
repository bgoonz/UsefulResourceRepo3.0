<a href="install-r-rstudio.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="install-r-rstudio.html" class="active"><span class="header-section-number">5</span> Install or upgrade R and RStudio</a>
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
-   [<span class="header-section-number">41</span> Bookdown cheat sheet](bookdown-cheat-sheet.html)
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

<span class="header-section-number">5</span> Install or upgrade R and RStudio<a href="install-r-rstudio.html#install-r-rstudio" class="anchor"><em></em></a>
============================================================================================================================================================

1.  Install a pre-compiled binary of R for your OS from here:  
    <a href="https://cloud.r-project.org" class="uri">https://cloud.r-project.org</a>  
    Already have R installed? **Hold on: This is a great time to make sure your R installation is current.** Check your current version like so:

        R.version.string
        #> [1] "R version 4.1.1 (2021-08-10)"

2.  Install RStudio Desktop.  
    Already have RStudio? **Hold on: This is a great time to upgrade to the latest Preview version.** Download it here:  
    <a href="https://www.rstudio.com/products/rstudio/download/preview/" class="uri">https://www.rstudio.com/products/rstudio/download/preview/</a>

3.  Update your R packages:

        update.packages(ask = FALSE, checkBuilt = TRUE)

<span class="header-section-number">5.1</span> How to think about upgrading R and RStudio<a href="install-r-rstudio.html#how-to-think-about-upgrading-r-and-rstudio" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Get current, people.** You don’t want to adopt new things on day one. But at some point, running old versions of software adds unnecessary difficulty.

In live workshops, there is a limit to how much we can help with ancient versions of R or RStudio. Also, frankly, there is a limit to our motivation. By definition, these problems are going away and we’d rather focus on edge cases with current versions, which affect lots of people.

Is your R version “old”? R had a *major* version change in April 2020, with the release of 4.0.0. It is a good idea to be on the current major version, meaning 4.something at this point, especially if you want to get the most out of a workshop.

Each major version is followed by several years of smaller releases (minor and patch releases). You can be more relaxed about upgrading minor versions, but you still want to stay reasonably current. As the 4.something series unfolds, I advise that you never fall more than 1 minor version behind.

Concrete example: let’s say the released version of R is 4.7.1, which is totally fictional and well beyond the current version of R at the time of writing. It’s probably OK if you are still on 4.6.whatever, which is one minor version behind and is called “r-oldrel”. Being one minor version behind usually doesn’t cause trouble. Once you are 2 minor versions behind (4.5.whatever or earlier in this example), you will start to suffer. In particular, you can no longer install pre-built binary add-on packages from CRAN.

Is your RStudio “old”? Unless you have a specific reason to prefer the released version, try the Preview. RStudio is fairly conservative with official releases, so the Preview version is used by many people for their daily work. This allows you to enjoy the latest goodies much sooner. The Preview version updates much more frequently (and in smaller increments) than the released version. This is something you might update once every month or so.

[<span class="header-section-number">4</span> Register a GitHub account](github-acct.html)

[<span class="header-section-number">6</span> Install Git](install-git.html)

On this page
------------

-   <a href="install-r-rstudio.html#install-r-rstudio" class="nav-link"><span class="header-section-number">5</span> Install or upgrade R and RStudio</a>
-   <a href="install-r-rstudio.html#how-to-think-about-upgrading-r-and-rstudio" class="nav-link"><span class="header-section-number">5.1</span> How to think about upgrading R and RStudio</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/install-r-rstudio.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/install-r-rstudio.Rmd" id="book-edit">Edit this page <em></em></a>
