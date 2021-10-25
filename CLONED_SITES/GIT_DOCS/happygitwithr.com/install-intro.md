<a href="install-intro.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="install-intro.html" class="active">Half the battle</a>
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
-   [<span class="header-section-number">41</span> Bookdown cheat sheet](bookdown-cheat-sheet.html)
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

Half the battle<a href="install-intro.html#install-intro" class="anchor"><em></em></a>
======================================================================================

Getting all the necessary software installed, configured, and playing nicely together is honestly half the battle when first adopting Git. Brace yourself for some pain. The upside is that you can give yourself a pat on the back once you get through this. And you WILL get through this.

You will find far more resources for how to *use Git* than for installation and configuration. Why? The experts …

-   Have been doing this for years. It’s simply not hard for them anymore.
-   Probably use some flavor of Unix. They may secretly (or not so secretly) take pride in neither using nor knowing Windows.
-   Get more satisfaction and reward for thinking and writing about Git concepts and workflows than Git installation.

In their defense, it’s hard to write installation instructions. Failures can be specific to an individual OS or even individual computer. If you have some new problem and, especially, the corresponding solution, [we’d love to hear from you!](https://github.com/jennybc/happy-git-with-r/issues)

Success and operating systems<a href="install-intro.html#success-and-operating-systems" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------

Our installation instructions have been forged in the fires of [STAT 545](http://stat545.com), [STAT 540](https://stat540-ubc.github.io), and assorted workshops, over several years. We regularly hear from [grateful souls](https://twitter.com/ibddoctor/status/777610645617475584) [on the internet](https://twitter.com/millsGT49/status/647059167509921793) who also have success.

Here’s data on the operating systems we encounter in STAT 545 and other workshops: overall the bulk are split sort of evenly between Mac and Windows (various flavours), with a dash of Linux. Except in a BioConductor context (CSAMA), which is dominated by Mac or Linux.

<table><thead><tr class="header"><th style="text-align: right;"></th><th style="text-align: right;">2014</th><th style="text-align: right;">2015</th><th style="text-align: right;">2016</th><th style="text-align: right;">useR! 2016</th><th style="text-align: right;">CSAMA 2016</th><th style="text-align: right;">CSAMA 2017</th><th style="text-align: right;">r::c 2018</th><th style="text-align: right;">seattle 2018</th></tr></thead><tbody><tr class="odd"><td style="text-align: right;">Mac</td><td style="text-align: right;">16 (41%)</td><td style="text-align: right;">38 (52%)</td><td style="text-align: right;">37 (45%)</td><td style="text-align: right;">28 (44%)</td><td style="text-align: right;">25 (58%)</td><td style="text-align: right;">23 (56%)</td><td style="text-align: right;">51 (57%)</td><td style="text-align: right;">16 (49%)</td></tr><tr class="even"><td style="text-align: right;">Windows 10*</td><td style="text-align: right;">0 (0%)</td><td style="text-align: right;">8 (11%)</td><td style="text-align: right;">30 (36%)</td><td style="text-align: right;">27 (43%)</td><td style="text-align: right;">6 (14%)</td><td style="text-align: right;">8 (20%)</td><td style="text-align: right;">19 (21%)</td><td style="text-align: right;">12 (36%)</td></tr><tr class="odd"><td style="text-align: right;">Windows 8</td><td style="text-align: right;">12 (31%)</td><td style="text-align: right;">9 (12%)</td><td style="text-align: right;">4 (5%)</td><td style="text-align: right;"></td><td style="text-align: right;"></td><td style="text-align: right;">1 ( 2%)</td><td style="text-align: right;">2 (2%)</td><td style="text-align: right;"></td></tr><tr class="even"><td style="text-align: right;">Windows 7</td><td style="text-align: right;">9 (23%)</td><td style="text-align: right;">13 (18%)</td><td style="text-align: right;">10 (12%)</td><td style="text-align: right;"></td><td style="text-align: right;"></td><td style="text-align: right;">1 ( 2%)</td><td style="text-align: right;">13 (14%)</td><td style="text-align: right;">4 (12%)</td></tr><tr class="odd"><td style="text-align: right;">Linux</td><td style="text-align: right;">2 (5%)</td><td style="text-align: right;">5 (7%)</td><td style="text-align: right;">2 (2%)</td><td style="text-align: right;">8 (13%)</td><td style="text-align: right;">12 (28%)</td><td style="text-align: right;">9 (20%)</td><td style="text-align: right;">5 (6%)</td><td style="text-align: right;">1 (3%)</td></tr></tbody></table>

\* Windows 10 is the Windows catchall, when I don’t have more specific info.

[<span class="header-section-number">3</span> Workshops](workshops.html)

[<span class="header-section-number">4</span> Register a GitHub account](github-acct.html)

On this page
------------

-   <a href="install-intro.html#install-intro" class="nav-link">Half the battle</a>
-   <a href="install-intro.html#success-and-operating-systems" class="nav-link">Success and operating systems</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/install-intro.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/install-intro.Rmd" id="book-edit">Edit this page <em></em></a>
