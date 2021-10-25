<a href="git-branches.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="git-branches.html" class="active"><span class="header-section-number">22</span> Branches</a>
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

<span class="header-section-number">22</span> Branches<a href="git-branches.html#git-branches" class="anchor"><em></em></a>
===========================================================================================================================

Branching means that you take a detour from the main stream of development and do work without changing the main stream. It allows one or many people to work in parallel without overwriting each other’s work.

Branching in git is very lightweight, which means creating a branch and switching between branches is nearly instantaneous. This means git encourages workflows which create small branches for exploration or new features, often merging them back together quickly.

<span class="header-section-number">22.1</span> Create a new branch<a href="git-branches.html#create-a-new-branch" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------

You can create a new branch with `git branch`, then checkout the branch with `git checkout`. To distinguish it from the main stream of development, presumably on `master`, we’ll call this a “feature branch”.

    git branch issue-5
    git checkout issue-5

You can also use the shortcut `git checkout -b issue-5` to create and checkout the branch all at once.

Once you have switched to a branch, you can commit to it as usual.

<span class="header-section-number">22.2</span> Switching branches<a href="git-branches.html#switching-branches" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------

You use `git checkout` to switch between branches.

But what do you do if you are working on a branch and need to switch, but the work on the current branch is not complete? One option is the [Git stash](https://git-scm.com/book/en/v2/ch00/_git_stashing), but generally a better option is to safeguard the current state with a temporary commit. Here I use “WIP” as the commit message to indicate work in progress.

    git commit --all -m "WIP"
    git checkout master

Then when you come back to the branch and continue your work, you need to undo the temporary commit by [resetting](reset.html#reset) your state. Specifically, we want a mixed reset. This is “working directory safe”, i.e. it does not affect the state of any files. But it does peel off the temporary WIP commit. Below, the reference `HEAD^` says to roll the commit state back to the parent of the current commit (`HEAD`).

    git checkout issue-5
    git reset HEAD^

If this is difficult to remember, or to roll the commit state back to a different previous state, the reference can also be given as the SHA of a specific commit, which you can see via `git log`.

<span class="header-section-number">22.3</span> Merging a branch<a href="git-branches.html#merging-a-branch" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------

Once you have done your work and committed it to the feature branch, you can switch back to `master` and merge the feature branch.

    git checkout master
    git merge issue-5

<span class="header-section-number">22.4</span> Dealing with conflicts<a href="git-branches.html#dealing-with-conflicts" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------

Most of the time, the merge will go smoothly. However if both the branches you are merging changed the same part of the same file you will get a merge conflict.

    git merge issue-5
    # Auto-merging index.html
    # CONFLICT (content): Merge conflict in index.html
    # Automatic merge failed; fix conflicts and then commit the result.

The first thing to do is **NOT PANIC**. Merge conflicts are not the end of the world and most are relatively small and straightforward to resolve.

The first step to solving a merge conflict is determining which files are in conflict, which you can do with `git status`:

    git status
    # On branch master
    # You have unmerged paths.
    #   (fix conflicts and run "git commit")
    # 
    # Unmerged paths:
    #   (use "git add <file>..." to mark resolution)
    # 
    #     both modified:      index.html
    # 
    # no changes added to commit (use "git add" and/or "git commit -a")

So this shows only `index.html` is unmerged and needs to be resolved. We can then open the file to see what lines are in conflict.

    <<<<<<< HEAD:index.html
    <div id="footer">contact : email.support@github.com</div>
    =======
    <div id="footer">
     please contact us at support@github.com
    </div>
    >>>>>>> issue-5:index.html

In this conflict, the lines between `<<<<<< HEAD:index.html` and `======` are the content from the branch you are currently on. The lines between `=======` and `>>>>>>> issue-5:index.html` are from the feature branch we are merging.

To resolve the conflict, edit this section until it reflects the state you want in the merged result. Pick one version or the other or create a hybrid. Also remove the conflict markers `<<<<<<`, `======` and `>>>>>>`.

    <div id="footer">
    please contact us at email.support@github.com
    </div>

Now run `git add index.html` and `git commit` to finalize the merge. CONFLICTS RESOLVED.

### <span class="header-section-number">22.4.1</span> Bailing out<a href="git-branches.html#bailing-out" class="anchor"><em></em></a>

If, during the merge, you get confused about the state of things or make a mistake, use `git merge --abort` to abort the merge and go back to the state prior to running `git merge`. Then you can try to complete the merge again.

Git Basic Branching and Merging:

<a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" class="uri">https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging</a>

[<span class="header-section-number">21</span> Git commands](git-commands.html)

[<span class="header-section-number">23</span> Remotes](git-remotes.html)

On this page
------------

-   <a href="git-branches.html#git-branches" class="nav-link"><span class="header-section-number">22</span> Branches</a>
-   <a href="git-branches.html#create-a-new-branch" class="nav-link"><span class="header-section-number">22.1</span> Create a new branch</a>
-   <a href="git-branches.html#switching-branches" class="nav-link"><span class="header-section-number">22.2</span> Switching branches</a>
-   <a href="git-branches.html#merging-a-branch" class="nav-link"><span class="header-section-number">22.3</span> Merging a branch</a>
-   <a href="git-branches.html#dealing-with-conflicts" class="nav-link"><span class="header-section-number">22.4</span> Dealing with conflicts</a>
    -   <a href="git-branches.html#bailing-out" class="nav-link"><span class="header-section-number">22.4.1</span> Bailing out</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/git-branches.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/git-branches.Rmd" id="book-edit">Edit this page <em></em></a>
