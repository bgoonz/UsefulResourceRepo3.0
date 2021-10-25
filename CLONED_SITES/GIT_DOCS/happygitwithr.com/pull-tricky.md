<a href="pull-tricky.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="pull-tricky.html" class="active"><span class="header-section-number">28</span> Pull, but you have local work</a>
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

<span class="header-section-number">28</span> Pull, but you have local work<a href="pull-tricky.html#pull-tricky" class="anchor"><em></em></a>
==============================================================================================================================================

Problem: You want to pull changes from upstream, but you have done some new work locally since the last time you pulled. This often comes up because [what you actually want to do is *push*](push-rejected.html#push-rejected), but Git won’t let you until you first incorporate the upstream changes.

For the sake of simplicity, assume we’re dealing with the `master` branch and the remote is called `origin`.

Recent commit history of `origin/master`:

    A--B--C

Recent commit history of the local `master` branch:

    A--B--D

or maybe

    A--B--(uncommitted changes)

Your goal: get commit `C` into your local branch, while retaining the work in commit `D` or your uncommitted changes.

-   Local state is `A--B--(uncommitted changes)`: You could use `git stash`. Or you could just make a commit to simplify your life (see next bullet).
-   Local state is `A--B--D`: You can get to `A--B--C--D` or `A--B--(something that includes C and D)`.
-   Local state is `A--B--D--(uncommitted changes)`: You could just make a commit – a new one or amend `D` – to simplify your life (see previous bullet).

We prioritize simple approaches that are good for early Git use, but mention nicer long-term alternatives.

<span class="header-section-number">28.1</span> Local work is uncommitted<a href="pull-tricky.html#local-work-is-uncommitted" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------

Remote state is `A--B--C`.  
Local state is `A--B--(uncommitted changes)`.

### <span class="header-section-number">28.1.1</span> Happy simple cases<a href="pull-tricky.html#happy-simple-cases" class="anchor"><em></em></a>

There are two happy scenarios, in which `git pull` will “just work”:

-   You’ve introduced completely new files that don’t exist in the remote branch and, therefore, cannot possibly have conflicting changes. You’re in luck! You can just `git pull`.
-   The files affected by your local work have ZERO overlap with the files affected by the changes you need to pull from the remote. You’re also in luck! You can just `git pull`.

Summary of these happy `git pull` scenarios:

                     Remote: A--B--C

    Local before 'git pull': A--B--(uncommitted changes)
     Local after 'git pull': A--B--C--(uncommitted changes)

What has actually happened here is that `git pull` resulted in a *fast-forward merge*, i.e. we placed commit `C` right on the end of your history. This would also be the case in the simpler situation where recent local history was just `A--B`, i.e. you had not added any local work since the last sync up with `origin/master`.

### <span class="header-section-number">28.1.2</span> `git stash` works, sometimes<a href="pull-tricky.html#git-stash-works-sometimes" class="anchor"><em></em></a>

If your changes affect a file (`foo.R` in the example below) that has also been changed in commit `C`, you cannot `git pull`. It doesn’t hurt to try, but you will fail and it will look something like this:

    jenny@2015-mbp ethel $ git pull
    remote: Enumerating objects: 5, done.
    remote: Counting objects: 100% (5/5), done.
    remote: Compressing objects: 100% (2/2), done.
    remote: Total 3 (delta 1), reused 1 (delta 0), pack-reused 0
    Unpacking objects: 100% (3/3), done.
    From github.com:jennybc/ethel
       db046b4..2d33a6f  master     -> origin/master
    Updating db046b4..2d33a6f
    error: Your local changes to the following files would be overwritten by merge:
            foo.R
    Please commit your changes or stash them before you merge.
    Aborting

Now what? First, you must safeguard your local changes by either stashing or committing them. (I personally would choose to commit and execute a workflow described in [28.2](pull-tricky.html#git-pull-with-local-commits).)

I am not a big fan of `git stash`; I think it’s usually better to take every possible chance to solidify your skills around core concepts and operations, e.g., make a commit, possibly in a branch. But if you want to use `git stash`, this opportunity is as good as it gets.

`git stash` is a way to temporarily store some changes to get them out of the way. Now you can do something else, without a lot of fuss. In our case, “do something else” is to get the upstream changes with a nice, simple `git pull`. Then you reapply and delete the stash and pick up where you left off.

For more details about stashing, I recommend

-   The stashing coverage in the “Filesystem interactions” chapter of Git in Practice ([book website](https://gitinpractice.com) or [read on GitHub](https://github.com/GitInPractice/GitInPractice#readme))
-   [7.3 Git Tools - Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning) in [Pro Git](https://git-scm.com/book/en/v2).

Here’s the best case scenario for “stash, pull, unstash” in the example above:

    git stash save
    git pull
    git stash pop

And here’s the output from our example:

    jenny@2015-mbp ethel $ git stash save
    Saved working directory and index state WIP on master: db046b4 Merge branch 'master'of github.com:jennybc/ethel

    jenny@2015-mbp ethel $ git pull
    Updating db046b4..2d33a6f
    Fast-forward
     foo.R | 2 +-
     1 file changed, 1 insertion(+), 1 deletion(-)

    jenny@2015-mbp ethel $ git stash pop
    Auto-merging foo.R
    On branch master
    Your branch is up-to-date with 'origin/master'.

    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   foo.R

    no changes added to commit (use "git add" and/or "git commit -a")
    Dropped refs/stash@{0} (012c4dcd3a4c3af6757c4c3ca99a9eaeff1eb2a4)

That is what success looks like. You’ve achieved this:

          Remote: A--B--C

    Local before: A--B--(uncommitted changes)
     Local after: A--B--C--(uncommitted changes)

As above, we have just enjoyed a fast-forward merge, made possible by temporarily stashing then unstashing the uncommitted local changes.

### <span class="header-section-number">28.1.3</span> `git stash` with conflicts<a href="pull-tricky.html#git-stash-with-conflicts" class="anchor"><em></em></a>

If your local changes have some overlap with changes you are pulling, you will, instead get a merge conflict from `git stash pop`. Now you have some remedial work to do. In this case, you have gained nothing by using `git stash` in the first place, which explains my general lack of enthusiasm for `git stash`.

Here’s how to execute the `git stash` workflow in our example, in the face of conflicts (based on [this Stack Overflow answer](https://stackoverflow.com/a/27382210/2825349)):

    jenny@2015-mbp ethel $ git stash save
    Saved working directory and index state WIP on master: 2d33a6f Back to 5

    jenny@2015-mbp ethel $ git pull
    Updating 2d33a6f..1eddf9e
    Fast-forward
     foo.R | 1 +
     1 file changed, 1 insertion(+)
     
    jenny@2015-mbp ethel $ git stash pop
    Auto-merging foo.R
    CONFLICT (content): Merge conflict in foo.R

At this point, you must resolve the merge conflict (*future link*). Literally, at each locus of conflict, pick one version or the other (upstream or stashed) or create a hybrid yourself. Remove the all the markers inserted to demarcate the conflicts. Save.

Since `git stash pop` did not go smoothly, we need to manually reset (*future link*) and delete the stash to finish.

    jenny@2015-mbp ethel $ git reset
    Unstaged changes after reset:
    M       foo.R

    jenny@2015-mbp ethel $ git stash drop
    Dropped refs/stash@{0} (7928db50288e9b4d934803b6b451a000fd7242ed)

Phew, we are done. We’ve achieved this:

          Remote: A--B--C

    Local before: A--B--(uncommitted changes)
     Local after: A--B--C--(uncommitted changes*)

The asterisk on `uncommitted changes*` indicates that your uncommitted changes might now reflect adjustments made when you resolved the conflicts.

<span class="header-section-number">28.2</span> Local work is committed<a href="pull-tricky.html#git-pull-with-local-commits" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------

Remote state is `A--B--C`.  
Local state is `A--B--D`.

### <span class="header-section-number">28.2.1</span> Pull (fetch and merge)<a href="pull-tricky.html#pull-fetch-and-merge" class="anchor"><em></em></a>

The simplest option is to fetch the commits from upstream and merge them, which is what `git pull` does. This is a good option if you’re new to Git. It leads to a messier history, but when you are new, this is the least of your worries. Merge, be happy, and carry on.

Here is the best case, no-merge-conflicts version of `git pull`:

    jenny@2015-mbp ethel $ git pull

    < YOU WILL PROBABLY BE KICKED INTO AN EDITOR HERE RE: MERGE COMMIT MESSAGE! >

    Merge made by the 'recursive' strategy.
     README.md | 4 ++--
     1 file changed, 2 insertions(+), 2 deletions(-)

Depending on your version of Git, your config, and your use of a GUI, you might be required to confirm/edit a commit message for the merge commit.

Or what if things don’t go this smoothly? If commit `C` (on the remote) and commit `D` (local) have changes to the same parts of one or more files, Git may not be able to automatically merge and you will get merge conflicts. It will look something like this:

    jenny@2015-mbp ethel $ git pull
    Auto-merging foo.R
    CONFLICT (content): Merge conflict in foo.R
    Automatic merge failed; fix conflicts and then commit the result.

You must resolve these conflicts (*future link*). Literally, at each locus of conflict, pick one version or the other (upstream or local) or create a hybrid yourself. Remove the all the markers inserted to demarcate the conflicts. Save.

Mark the affected file `foo.R` as resolved via `git add` and make an explicit `git commit` to finalize this merge.

    jenny@2015-mbp ethel $ git add foo.R
    jenny@2015-mbp ethel $ git commit
    [master 20b297b] Merge branch 'master' of github.com:jennybc/ethel

Again, do not be surprised if, during `git commit`, you find yourself in an editor, confirming/editing the commit message for the merge commit.

We’ve achieved this:

          Remote: A--B--C

    Local before: A--B--D
     Local after: A--B--D--(merge commit)
                      \_C_/

### <span class="header-section-number">28.2.2</span> Pull and rebase<a href="pull-tricky.html#pull-and-rebase" class="anchor"><em></em></a>

`git pull --rebase` creates a nicer history than `git pull` when integrating local and remote commits. It avoids a merge commit, so the history is less cluttered and is linear. It can make merge conflicts more onerous to resolve, which is why I still recommend `git pull` as the entry-level solution.

Here is the best case, no-merge-conflicts version of `git pull --rebase`:

    jenny@2015-mbp ethel $ git pull --rebase
    First, rewinding head to replay your work on top of it...
    Applying: Take max

Notice that you were NOT kicked into an editor to fiddle with the commit message for the merge commit, because there is no merge commit! This is the beauty of rebasing.

We’ve achieved this:

          Remote: A--B--C

    Local before: A--B--D
     Local after: A--B--C--D

It is as if we pulled the upstream work in commit `C`, then did the local work embodied in commit `D`. We have no cluttery merge commits and a linear history. Nice!

The bad news: As with plain vanilla `git pull`, it is still possible to get merge conflicts with `git pull --rebase`. If you have multiple local commits, you can even find yourself resolving conflicts over and over, as these commits are sequentially replayed. Hence this is a better fit for more experienced Git users and in situations where conflicts are unlikely (those tend to be correlated, actually).

At this point, if you try to do `git pull --rebase` and get bogged down in merge conflicts, I recommend `git rebase --abort` to back out. For now, just pursue a more straightforward strategy.

<span class="header-section-number">28.3</span> Other approaches<a href="pull-tricky.html#other-approaches" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------

There are many more ways to handle this situation, which you can discover and explore as you gain experience and start to care more about the history. We sketch some ideas here.

### <span class="header-section-number">28.3.1</span> Use a temporary branch for local work<a href="pull-tricky.html#use-a-temporary-branch-for-local-work" class="anchor"><em></em></a>

Recall:  
Remote state is `A--B--C`.  
Local state is `A--B--(uncommitted changes)`.

This is an alternative to the stash workflow that has the advantage of giving you practice with Git techniques that are more generally useful. It also leads to a nice history.

Create a new, temporary branch and commit your uncommitted changes there. Checkout `master` and `git pull` to get changes from upstream. You now need to recover the work from the commit in the temporary branch. Options:

-   Merge the temporary branch into `master`.
-   Cherry pick the commit from the temporary branch into `master`.

In either case, it is still possible you will need to deal with merge conflicts.

In either case, if you felt forced to commit before you were ready or to accept an ugly merge commit, you can either do a mixed reset to “uncommit” but keep the changes on `master` or keep amending until you are satisfied with the commit.

<span class="header-section-number">28.4</span> Some local work is committed, some is not<a href="pull-tricky.html#some-local-work-is-committed-some-is-not" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is an awkward hybrid situation that can be handled with a combination of strategies seen above: make a pragmatic commit on `master` or a temporary branch. Integrate the upstream and local changes in `master`. If you aren’t happy with the final pragmatic commit (which only exists locally), reset or amend until you are.

[<span class="header-section-number">27</span> Dealing with push rejection](push-rejected.html)

[<span class="header-section-number">29</span> Time travel: See the past](time-travel-see-past.html)

On this page
------------

-   <a href="pull-tricky.html#pull-tricky" class="nav-link"><span class="header-section-number">28</span> Pull, but you have local work</a>
-   <a href="pull-tricky.html#local-work-is-uncommitted" class="nav-link"><span class="header-section-number">28.1</span> Local work is uncommitted</a>
    -   <a href="pull-tricky.html#happy-simple-cases" class="nav-link"><span class="header-section-number">28.1.1</span> Happy simple cases</a>
    -   <a href="pull-tricky.html#git-stash-works-sometimes" class="nav-link"><span class="header-section-number">28.1.2</span> git stash works, sometimes</a>
    -   <a href="pull-tricky.html#git-stash-with-conflicts" class="nav-link"><span class="header-section-number">28.1.3</span> git stash with conflicts</a>
-   <a href="pull-tricky.html#git-pull-with-local-commits" class="nav-link"><span class="header-section-number">28.2</span> Local work is committed</a>
    -   <a href="pull-tricky.html#pull-fetch-and-merge" class="nav-link"><span class="header-section-number">28.2.1</span> Pull (fetch and merge)</a>
    -   <a href="pull-tricky.html#pull-and-rebase" class="nav-link"><span class="header-section-number">28.2.2</span> Pull and rebase</a>
-   <a href="pull-tricky.html#other-approaches" class="nav-link"><span class="header-section-number">28.3</span> Other approaches</a>
    -   <a href="pull-tricky.html#use-a-temporary-branch-for-local-work" class="nav-link"><span class="header-section-number">28.3.1</span> Use a temporary branch for local work</a>
-   <a href="pull-tricky.html#some-local-work-is-committed-some-is-not" class="nav-link"><span class="header-section-number">28.4</span> Some local work is committed, some is not</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-pull.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-pull.Rmd" id="book-edit">Edit this page <em></em></a>
