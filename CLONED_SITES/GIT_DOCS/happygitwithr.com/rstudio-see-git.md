<a href="rstudio-see-git.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="rstudio-see-git.html" class="active"><span class="header-section-number">13</span> Detect Git from RStudio</a>
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

<span class="header-section-number">13</span> Detect Git from RStudio<a href="rstudio-see-git.html#rstudio-see-git" class="anchor"><em></em></a>
================================================================================================================================================

If you want RStudio to help with your Git and GitHub work, it must be able to find the Git executable.

This usually “just works”, so this page is aimed at people who have reason to suspect they have a problem.

This is something you set up once-per-computer.

<span class="header-section-number">13.1</span> Do you have a problem?<a href="rstudio-see-git.html#do-you-have-a-problem" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------

Let’s check if RStudio can find the Git executable.

-   *File &gt; New Project…* Do you see an option to create from Version Control? If yes, good.
-   Select *New Directory* &gt; *Empty Project*. Do you see a checkbox “Create a git repository”? If yes, good, CHECK IT.

Keep reading if things don’t go so well or you want to know more.

<span class="header-section-number">13.2</span> Find Git yourself<a href="rstudio-see-git.html#find-git-yourself" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------

RStudio can only act as a GUI front-end for Git if Git has been successfully installed (chapter [6](install-git.html#install-git)) **AND RStudio can find it**.

A basic test for successful installation of Git is to simply enter `git` in the shell (Appendix [A](shell.html#shell)). If you get a complaint about Git not being found, it means installation was unsuccessful or that it is not being found, i.e. it is not on your `PATH`.

If you are not sure where the Git executable lives, try this in a shell:

-   `which git` (Mac, Linux, Git Bash shell on Windows)

-   `where git` (Windows command prompt, i.e. `cmd.exe`)

<span class="header-section-number">13.3</span> Tell RStudio where to find Git<a href="rstudio-see-git.html#tell-rstudio-where-to-find-git" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If Git appears to be installed and findable, launch RStudio. Quit and re-launch RStudio if there’s **any doubt in your mind** about whether you opened RStudio before or after installing Git. Don’t make me stop this car and restart RStudio for you in office hours. DO IT.

From RStudio, go to *Tools &gt; Global Options &gt; Git/SVN* and make sure that the box *Git executable* points to your Git executable.

On macOS and Linux, the path usually looks something like this:

    /usr/bin/git

If you need to set this on macOS, it can sometimes be hard to navigate to the necessary directory, once you’ve clicked “Browse” and are working with a Finder-type window. The keyboard shortcut “command + shift + g” will summon “Go To Folder”, where you will be able to type or paste any path you want.

On Windows, this path should look something like this:

    C:/Program Files/Git/bin/git.exe

and here is a screenshot on Windows:

<img src="img/windows-rstudio-git-executable-screenshot.png" title="RStudio screenshot showing path to the Git executable" alt="RStudio screenshot showing path to the Git executable" style="width:100.0%" />

**WARNING**: On Windows, do **NOT** use `C:/Program Files/Git/cmd/git.exe`. `bin` in the path is GOOD YES! `cmd` in the path is BAD NO!

**WARNING**: On Windows, do **NOT** set this to `git-bash.exe`. Something that ends in `git.exe` is GOOD YES! `git-bash.exe` is BAD NO!

**Restart RStudio if you make any changes here.** Don’t make me stop this car again and restart RStudio for you in office hours. DO IT.

Re-do the steps at the top of the page to see if RStudio and Git are communicating now.

No joy?

-   I’ve seen this help: With your Project open, go to `Tools > Project Options...`. If available, click on “Git/SVN” and select “Git” in the Version control system dropdown menu. Answer “yes” to the “Confirm New Git Repository” pop up. Answer “yes” to the “Confirm Restart RStudio” pop up.

-   If you installed Git via GitHub for Windows, it is possible the Git executable is really well hidden. Get help or use one of [our recommended methods of installing Git](install-git.html#install-git).

-   Your `PATH` is probably not set up correctly and/or you should re-install Git and control/notice where it’s going. Read more in [14](troubleshooting.html#troubleshooting).

-   Get our help.

[<span class="header-section-number">12</span> Connect RStudio to Git and GitHub](rstudio-git-github.html)

[<span class="header-section-number">14</span> RStudio, Git, GitHub Hell](troubleshooting.html)

On this page
------------

-   <a href="rstudio-see-git.html#rstudio-see-git" class="nav-link"><span class="header-section-number">13</span> Detect Git from RStudio</a>
-   <a href="rstudio-see-git.html#do-you-have-a-problem" class="nav-link"><span class="header-section-number">13.1</span> Do you have a problem?</a>
-   <a href="rstudio-see-git.html#find-git-yourself" class="nav-link"><span class="header-section-number">13.2</span> Find Git yourself</a>
-   <a href="rstudio-see-git.html#tell-rstudio-where-to-find-git" class="nav-link"><span class="header-section-number">13.3</span> Tell RStudio where to find Git</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/connect-can-rstudio-use-git.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/connect-can-rstudio-use-git.Rmd" id="book-edit">Edit this page <em></em></a>
