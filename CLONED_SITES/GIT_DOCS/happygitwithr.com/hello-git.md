<a href="hello-git.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="hello-git.html" class="active"><span class="header-section-number">7</span> Introduce yourself to Git</a>
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

<span class="header-section-number">7</span> Introduce yourself to Git<a href="hello-git.html#hello-git" class="anchor"><em></em></a>
=====================================================================================================================================

In the shell (Appendix [A](shell.html#shell)):

    git config --global user.name 'Jane Doe'
    git config --global user.email 'jane@example.com'
    git config --global --list

substituting your name and **the email associated with your GitHub account**.

The [usethis package](https://usethis.r-lib.org) offers an alternative approach. You can set your Git user name and email from within R:

    ## install if needed (do this exactly once):
    ## install.packages("usethis")

    library(usethis)
    use_git_config(user.name = "Jane Doe", user.email = "jane@example.org")

<span class="header-section-number">7.1</span> More about `git config`<a href="hello-git.html#more-about-git-config" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

An easy way to get into a shell from RStudio is *Tools &gt; Terminal* or *Tools &gt; Shell*. More about the shell in the Appendix [A](shell.html#shell).

Special Windows gotchas: If you are struggling on Windows, consider there are different types of shell and you might be in the wrong one. You want to be in a “Git Bash” shell, as opposed to Power Shell or the legacy `cmd.exe` command prompt. Read more in [the Appendix](shell.html#windows-shell-hell). This might also be a reason to do this configuration via the usethis package in R.

What user name should you give to Git? This does not have to be your GitHub user name, although it can be. Another good option is your actual first name and last name. If you commit from different machines, sometimes people work that info into the user name. Your commits will be labelled with this user name, so make it informative to potential collaborators and future you.

What email should you give to Git? This **must** be the email associated with your GitHub account.

These commands return nothing. You can check that Git understood what you typed by looking at the output of `git config --global --list`.

### <span class="header-section-number">7.1.1</span> Configure the Git editor<a href="hello-git.html#git-editor" class="anchor"><em></em></a>

Another Git option that many people eventually configure is the editor. At some point, you will fail to give Git what it wants in terms of a commit message and it will kick you into an editor. This can be distressing, if it’s not your editor of choice and you don’t even know how to save and quit. You can enforce your will with something along these lines:

    git config --global core.editor "emacs"

Substitute your preferred editor for `"emacs"` here. Software Carpentry’s Git lesson has a comprehensive listing of the exact `git config` command needed for [many combinations of OS and editor](http://swcarpentry.github.io/git-novice/02-setup/).

### <span class="header-section-number">7.1.2</span> Configure the default name for an initial branch<a href="hello-git.html#configure-the-default-name-for-an-initial-branch" class="anchor"><em></em></a>

You may also want to configure the default name for the initial branch in a new repo. Historically, this has been `master`, as that was baked into Git itself. It’s increasingly common to use `main` instead, but you have to opt-in to this.

In 2020, the `init.defaultBranch` setting was introduced so that this became user-configurable. Shortly thereafter, major Git hosts like GitHub and GitLab made `main` the default initial branch name for repos created on their platforms and also provided considerable support for renaming existing default branches.

You can set your default initial branch name to `main` like so, in the shell:

    git config --global init.defaultBranch main

or from R (the default for `name` is `"main"`):

    usethis::git_default_branch_configure()

[<span class="header-section-number">6</span> Install Git](install-git.html)

[<span class="header-section-number">8</span> Install a Git client](git-client.html)

On this page
------------

-   <a href="hello-git.html#hello-git" class="nav-link"><span class="header-section-number">7</span> Introduce yourself to Git</a>
-   <a href="hello-git.html#more-about-git-config" class="nav-link"><span class="header-section-number">7.1</span> More about git config</a>
    -   <a href="hello-git.html#git-editor" class="nav-link"><span class="header-section-number">7.1.1</span> Configure the Git editor</a>
    -   <a href="hello-git.html#configure-the-default-name-for-an-initial-branch" class="nav-link"><span class="header-section-number">7.1.2</span> Configure the default name for an initial branch</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/install-introduce-self-git.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/install-introduce-self-git.Rmd" id="book-edit">Edit this page <em></em></a>
