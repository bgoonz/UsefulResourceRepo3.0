<a href="fork-and-clone.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="fork-and-clone.html" class="active"><span class="header-section-number">30</span> Fork and clone</a>
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

<span class="header-section-number">30</span> Fork and clone<a href="fork-and-clone.html#fork-and-clone" class="anchor"><em></em></a>
=====================================================================================================================================

Use “fork and clone” to get a copy of someone else’s repo if there’s any chance you will want to propose a change to the owner, i.e. send a “pull request”. If you are waffling between “clone” and “fork and clone”, go with “fork and clone”.

<span class="header-section-number">30.1</span> Initial workflow<a href="fork-and-clone.html#initial-workflow" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------

On [GitHub](https://github.com), make sure you are signed in and navigate to the repo of interest. Think of this as `OWNER/REPO`, where `OWNER` is the user or organization who owns the repository named `REPO`.

In the upper right hand corner, click **Fork**.

This creates a copy of `REPO` in your GitHub account and takes you there in the browser. Now we are looking at `YOU/REPO`.

**Clone** `YOU/REPO`, which is your copy of the repo, a.k.a. your fork, to your local machine. You have two options:

-   [Existing project, GitHub first](existing-github-first.html#existing-github-first), an RStudio workflow we’ve used before.
    -   Your fork `YOU/REPO` plays the role of the existing GitHub repo, in this case – not the original repo!
    -   Make a conscious decision about the local destination directory and HTTPS vs SSH URL.
-   Execute `git clone https://github.com/YOU/REPO.git` (or `git clone git@github.com:YOU/REPO.git`) in the shell (Appendix [A](shell.html#shell)).
    -   Clone your fork `YOU/REPO`– not the original repo!
    -   `cd` to the desired parent directory first. Make a conscious decision about HTTPS vs SSH URL.

We’re doing this:

![](img/fork-and-clone.png)

<span class="header-section-number">30.2</span> `usethis::create_from_github("OWNER/REPO")`<a href="fork-and-clone.html#usethiscreate_from_githubownerrepo" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The [usethis package](https://usethis.r-lib.org) has a convenience function, [`create_from_github()`](https://usethis.r-lib.org/reference/create_from_github.html), that can do “fork and clone”. In fact, it goes even further and [configures the `upstream` remote](upstream-changes.html#upstream-changes) and sets the upstream tracking branch for `main` (or whatever the default branch is) to `upstream/main`. Note that `create_from_github()` requires that you have [configured a GitHub personal access token](https-pat.html#https-pat). It hides lots of detail and can feel quite magical.

Due to these difference, we won’t dwell on `create_from_github()` here. But once you get tired of doing all of this “by hand”, check it out!

<span class="header-section-number">30.3</span> Engage with the new repo<a href="fork-and-clone.html#engage-with-the-new-repo" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------

If you did “fork and clone” via [Existing project, GitHub first](existing-github-first.html#existing-github-first), you are probably in an RStudio Project for this new repo.

Regardless, get yourself into this project, whatever that means for you, using your usual method.

Explore the new repo in some suitable way. If it is a package, you could run the tests or check it. If it is a data analysis project, run a script or render an Rmd. Convince yourself that you have gotten the code.

<span class="header-section-number">30.4</span> Don’t mess with `master`<a href="fork-and-clone.html#dont-touch-master" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------

If you make any commits in your local repository, I **strongly recommend** that you work in [a new branch](git-branches.html#git-branches), not `master`.

I **strongly recommend** that you do not make commits to `master` of a repo you have forked.

This will make your life much easier if you want to [pull upstream work](upstream-changes.html#upstream-changes) into your copy. The `OWNER` of `REPO` will also be happier to receive your pull request from a non-`master` branch.

<span class="header-section-number">30.5</span> The original repo as a remote<a href="fork-and-clone.html#the-original-repo-as-a-remote" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Remember we are here:

![](img/fork-and-clone.png)

Here is the current situation in words:

-   You have a fork `YOU/REPO`, which is a repo on GitHub.
-   You have a local clone of your fork.
-   Your fork `YOU/REPO` is the remote known as `origin` for your local repo.
-   You are well positioned to make a pull request to `OWNER/REPO`.

But notice the lack of a direct connection between your local copy of this repo and the original `OWNER/REPO`. This is a problem.

![](img/fork-no-upstream-sad.png)

As time goes on, the original repository `OWNER/REPO` will continue to evolve. You probably want the ability to keep your copy up-to-date. In Git lingo, you will need to get the “upstream changes”.

![](img/fork-triangle-happy.png)

See the workflow [Get upstream changes for a fork](upstream-changes.html#upstream-changes) for how to inspect your remotes, add `OWNER/REPO` as `upstream` if necessary, and pull changes, i.e. how to complete the “triangle” in the figure above.

### <span class="header-section-number">30.5.1</span> No, you can’t do this via GitHub<a href="fork-and-clone.html#no-you-cant-do-this-via-github" class="anchor"><em></em></a>

You might hope that GitHub could automatically keep your fork `YOU/REPO` synced up with the original `OWNER/REPO`. Or that you could do this in the browser interface. Then you could pull those upstream changes into your local repo.

But you can’t.

There are some tantalizing, janky ways to sort of do parts of this. But they have fatal flaws that make them unsustainable. I believe you really do need to [add `upstream` as a second remote on your repo and pull from there](upstream-changes.html#upstream-changes).

[<span class="header-section-number">29</span> Time travel: See the past](time-travel-see-past.html)

[<span class="header-section-number">31</span> Get upstream changes for a fork](upstream-changes.html)

On this page
------------

-   <a href="fork-and-clone.html#fork-and-clone" class="nav-link"><span class="header-section-number">30</span> Fork and clone</a>
-   <a href="fork-and-clone.html#initial-workflow" class="nav-link"><span class="header-section-number">30.1</span> Initial workflow</a>
-   <a href="fork-and-clone.html#usethiscreate_from_githubownerrepo" class="nav-link"><span class="header-section-number">30.2</span> usethis::create_from_github("OWNER/REPO")</a>
-   <a href="fork-and-clone.html#engage-with-the-new-repo" class="nav-link"><span class="header-section-number">30.3</span> Engage with the new repo</a>
-   <a href="fork-and-clone.html#dont-touch-master" class="nav-link"><span class="header-section-number">30.4</span> Don’t mess with master</a>
-   <a href="fork-and-clone.html#the-original-repo-as-a-remote" class="nav-link"><span class="header-section-number">30.5</span> The original repo as a remote</a>
    -   <a href="fork-and-clone.html#no-you-cant-do-this-via-github" class="nav-link"><span class="header-section-number">30.5.1</span> No, you can’t do this via GitHub</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-fork-and-clone.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-fork-and-clone.Rmd" id="book-edit">Edit this page <em></em></a>
