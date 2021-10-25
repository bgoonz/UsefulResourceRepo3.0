<a href="pr-extend.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="pr-extend.html" class="active"><span class="header-section-number">32</span> Explore and extend a pull request</a>
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

<span class="header-section-number">32</span> Explore and extend a pull request<a href="pr-extend.html#pr-extend" class="anchor"><em></em></a>
==============================================================================================================================================

Scenario: you maintain an R package on GitHub with pull requests (PRs) from external contributors e.g. Jane Doe, janedoe on GitHub. Sometimes you need to experiment with the PR in order to provide feedback or to decide whether or not to merge. Going further, sometimes you want to add a few commits and then merge. Or maybe there are just some merge conflicts that require your personal, local attention. Let’s also assume that you want the original PR author to get credit for their commits, i.e. you want to preserve history and provenance, not just diffs.

How do you checkout and possibly extend an external PR?

<span class="header-section-number">32.1</span> Terminology<a href="pr-extend.html#terminology" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------

Vocabulary I use throughout.

**fork branch** The name of the branch in the fork from which the PR was made. Best case scenario: informative name like `fix-fluffy-bunny`. Worst case scenario: PR is from `master`.

**local PR branch** The name of the local branch you’ll use to work with the PR. Best case scenario: can be same as fork branch. Worse case scenario: PR is from `master`, so you must make up a new name based on something about the PR, e.g. `pr-666` or `janedoe-master`.

**PR parent** The SHA of the commit in the main repo that is the base for the PR.

**PR remote** The SSH or HTTPS URL for the fork from which the PR was made. Or the nickname of the remote, if you’ve bothered to set that up.

<span class="header-section-number">32.2</span> Official GitHub advice, Version 1<a href="pr-extend.html#official-github-advice-version-1" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Every PR on GitHub has a link to “command line instructions” on how to merge the PR locally via command line Git. On this journey, there is a point at which you can pause and explore the PR locally.

Here are their steps with my vocabulary and some example commands:

-   Create and check out the local PR branch, anticipating its relationship to the fork branch. Template of the Git command, plus an example of how it looks under both naming scenarios:

        # Template of the Git command
        git checkout -b LOCAL_PR_BRANCH master 
        # How it looks under both naming scenarios
        git checkout -b fix-fluffy-bunny master 
        git checkout -b janedoe-master master 

-   Pull from the fork branch of the PR remote:

        # Template of the Git command
        git pull REMOTE FORK_PR_BRANCH
        # How it looks under both naming scenarios
        git pull https://github.com/janedoe/yourpackage.git fix-fluffy-bunny
        git pull https://github.com/janedoe/yourpackage.git master

-   Satisfy yourself that all is well and you want to merge.

-   Checkout `master`:

        git checkout master

-   Merge the local PR branch into master with `--no-ff`, meaning “no fast forward merge”. This ensures you get a true merge commit, with two parents.

        # Template of the Git command
        git merge --no-ff LOCAL_PR_BRANCH
        # How it looks under both naming scenarios
        git merge --no-ff fix-fluffy-bunny
        git merge --no-ff janedoe-master

-   Push `master` to GitHub.

        git push origin master

What’s not to like? The parent commit of the local PR branch will almost certainly not be the parent commit of the fork PR branch, where the external contributor did their work. This often means you get merge conflicts in `git pull`, which you’ll have to deal with ASAP. The older the PR, the more likely this is and the hairier the conflicts will be.

I would prefer to deal with the merge conflicts only *after* I’ve vetted the PR and to resolve the conflicts locally, not on GitHub. So I don’t use this exact workflow.

<span class="header-section-number">32.3</span> Official GitHub advice, Version 2<a href="pr-extend.html#official-github-advice-version-2" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

GitHub has another set of instructions: [Checking out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)

It starts out by referring to the Version 1 instructions, but goes on to address an inactive pull request“, defined as a PR”whose owner has either stopped responding, or, more likely, has deleted their fork".

This workflow may NOT give the original PR author credit (next time it’s easy to test this, I’ll update with a definitive answer). I’ve never used it verbatim because I’ve never had this exact problem re: deleted fork.

<span class="header-section-number">32.4</span> Official GitHub advice, Version 3<a href="pr-extend.html#official-github-advice-version-3" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

GitHub has yet another set of instructions: [Committing changes to a pull request branch created from a fork](https://help.github.com/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork/)

The page linked above explains all the pre-conditions, but the short version is that a maintainer can probably push new commits to a PR, effectively pushing commits to a fork. Strange, but true!

This set of instructions suggests that you clone the fork, checkout the branch from which the PR was made, make any commits you wish, and then push. Any new commits you make will appear in the PR. And then you could merge.

My main takeaway: maintainer can push to the branch of a fork associated with a PR.

<span class="header-section-number">32.5</span> My under-development workflow<a href="pr-extend.html#my-under-development-workflow" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------

*work in progress*

This combines ideas from the three above approaches, but with a few tweaks. I am sketching this up in R code, with the hope of putting this into a function and package at some point. This is a revision of an earlier approach, based on feedback from Jim Hester.

Example of a PR from the `master` branch (suboptimal but often happens) from fictional GitHub user `abcde` on usethis.

    library(git2r)

    ## add the pull requester's fork as a named remote
    remote_add(name = "abcde", url = "git@github.com:abcde/usethis.git")

    ## fetch
    fetch(name = "abcde")

    ## list remote branches and isolate the one I want
    b <- branches(flags = "remote")
    b <- b[["abcde/master"]]

    ## get the SHA of HEAD on this branch
    sha <- branch_target(b)

    ## create local branch
    branch_create(commit = lookup(sha = sha), name = "abcde-master")

    ## check it out
    checkout(object = ".", branch = "abcde-master")

    ## set upstream tracking branch
    branch_set_upstream(repository_head(), name = "abcde/master")

    ## confirm upstream tracking branch
    branch_get_upstream(repository_head())

    ## make one or more commits here

    ## push to the branch in the fork and, therefore, into the PR
    push()

[<span class="header-section-number">31</span> Get upstream changes for a fork](upstream-changes.html)

[<span class="header-section-number">33</span> Make a GitHub repo browsable](workflows-browsability.html)

On this page
------------

-   <a href="pr-extend.html#pr-extend" class="nav-link"><span class="header-section-number">32</span> Explore and extend a pull request</a>
-   <a href="pr-extend.html#terminology" class="nav-link"><span class="header-section-number">32.1</span> Terminology</a>
-   <a href="pr-extend.html#official-github-advice-version-1" class="nav-link"><span class="header-section-number">32.2</span> Official GitHub advice, Version 1</a>
-   <a href="pr-extend.html#official-github-advice-version-2" class="nav-link"><span class="header-section-number">32.3</span> Official GitHub advice, Version 2</a>
-   <a href="pr-extend.html#official-github-advice-version-3" class="nav-link"><span class="header-section-number">32.4</span> Official GitHub advice, Version 3</a>
-   <a href="pr-extend.html#my-under-development-workflow" class="nav-link"><span class="header-section-number">32.5</span> My under-development workflow</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-explore-extend-pull-request.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-explore-extend-pull-request.Rmd" id="book-edit">Edit this page <em></em></a>
