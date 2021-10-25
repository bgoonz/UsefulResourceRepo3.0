<a href="git-remotes.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="git-remotes.html" class="active"><span class="header-section-number">23</span> Remotes</a>
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

<span class="header-section-number">23</span> Remotes<a href="git-remotes.html#git-remotes" class="anchor"><em></em></a>
========================================================================================================================

Remote repositories are versions of your project that are hosted on the Internet or another network. A single project can have 1, 2 or even hundreds of remotes. You pull others changes from remotes and push your changes to remotes.

<span class="header-section-number">23.1</span> Listing what remotes exist<a href="git-remotes.html#listing-what-remotes-exist" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------

`git remote` lists the names of available remotes, but usually it is more useful to see what URLs each note corresponds to (with `-v`).

    git remote -v

    ## origin   https://github.com/jennybc/happy-git-with-r (fetch)
    ## origin   https://github.com/jennybc/happy-git-with-r (push)

<span class="header-section-number">23.2</span> Adding a new remote<a href="git-remotes.html#adding-a-new-remote" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------

`git clone` automatically adds a new remote, so often you do not need to do this manually initially. However, after the initial clone, it is often useful to add additional remotes.

Use `git remote add` to add a new remote

    git remote add happygit https://github.com/jennybc/happy-git-with-r.git

Note: when you add a remote you give it a nickname (here `happygit`), which you can use in git commands in place of the entire URL.

    git fetch happygit

Sidebar on nicknames: there is a strong convention to use `origin` as the nickname of your main remote. At this point, it is common for the main remote of a repo to be hosted on GitHub (or GitLab or Bitbucket). It is tempting to use a more descriptive nickname (such as `github`), but you might find that following convention is worth it. It makes your setup easier for others to understand and for you to transfer information that you read in documentation, on Stack Overflow, or in blogs.

A common reason to add a second remote is when you have done a “fork and clone” of a repo and your personal copy is set up as the `origin` remote. Eventually you will want to pull changes from the original repository. It is common to use `upstream` as the nickname for this remote.

<span class="header-section-number">23.3</span> Fetching data from remotes<a href="git-remotes.html#fetching-data-from-remotes" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------

To get new data from a remote use `git fetch <remote_name>`. This retrieves the data locally, but importantly it does *not* change the state of your repository or your files in any way. To incorporate the data into your repository, you need to merge or rebase your project with the remote project.

    # Fetch the data
    git fetch happygit

    # Now merge it with our local master
    git merge happygit/master master

    # git pull is a shortcut which does the above in one command
    git pull happygit master

For more detail on `git pull` workflows, see [28](pull-tricky.html#pull-tricky).

<span class="header-section-number">23.4</span> Pushing to remotes<a href="git-remotes.html#pushing-to-remotes" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------------------------

Use `git push <remote> <branch>` to push your local changes to the `<branch>` branch on the `<remote>` remote.

    # push my local changes to the origin remote's master branch
    git push origin master

    # push my local changes to the happygit remote's test branch
    git push happygit test

<span class="header-section-number">23.5</span> Renaming and changing remotes<a href="git-remotes.html#renaming-and-changing-remotes" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------

`git remote rename` can be used to rename a remote

    git remote rename happygit hg

`git remote set-url` can be used to change the URL for a remote. This is sometimes useful if you initially set up a remote using https, but now want to use the SSH URL instead (or vise versa).

    git remote set-url happygit git@github.com:jennybc/happy-git-with-r.git

One fairly common workflow is you initially cloned a repository on GitHub locally (without forking it), but now want to create your own fork and push changes to it. As described earlier, it is common to call the main repository `upstream` and to call your fork `origin`. So, in this case, you need to first rename the existing remote (from `origin` to `upstream`). Then add your fork as a new remote, with the name `origin`.

    git remote rename origin upstream
    git remote add origin git@github.com:jimhester/happy-git-with-r.git

<span class="header-section-number">23.6</span> Upstream tracking branches<a href="git-remotes.html#upstream-tracking-branches" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------

It is possible to set the branch on the remote each of your local remotes corresponds to. `git clone` sets this up automatically, so for your own master branch this is not something you will run into. However by default if you create a new branch and try to push to it you will see something like this.

    git checkout -b mybranch
    git push
    # fatal: The current branch foo has no upstream branch.
    # To push the current branch and set the remote as upstream, use
    #
    #     git push --set-upstream origin foo

You can do as the error message says and explicitly set the upstream branch with `--set-upstream`. However I would recommend instead changing the default behavior of `push` to automatically set the upstream branch to the branch with the same name on the remote.

You can do this by changing the git `push.default` option to `current`.

    git config --global push.default current

See also Working with Remotes:

<a href="https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" class="uri">https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes</a>

[<span class="header-section-number">22</span> Branches](git-branches.html)

[Git remote setups](remote-scenarios-intro.html)

On this page
------------

-   <a href="git-remotes.html#git-remotes" class="nav-link"><span class="header-section-number">23</span> Remotes</a>
-   <a href="git-remotes.html#listing-what-remotes-exist" class="nav-link"><span class="header-section-number">23.1</span> Listing what remotes exist</a>
-   <a href="git-remotes.html#adding-a-new-remote" class="nav-link"><span class="header-section-number">23.2</span> Adding a new remote</a>
-   <a href="git-remotes.html#fetching-data-from-remotes" class="nav-link"><span class="header-section-number">23.3</span> Fetching data from remotes</a>
-   <a href="git-remotes.html#pushing-to-remotes" class="nav-link"><span class="header-section-number">23.4</span> Pushing to remotes</a>
-   <a href="git-remotes.html#renaming-and-changing-remotes" class="nav-link"><span class="header-section-number">23.5</span> Renaming and changing remotes</a>
-   <a href="git-remotes.html#upstream-tracking-branches" class="nav-link"><span class="header-section-number">23.6</span> Upstream tracking branches</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/git-remotes.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/git-remotes.Rmd" id="book-edit">Edit this page <em></em></a>
