<a href="upstream-changes.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="upstream-changes.html" class="active"><span class="header-section-number">31</span> Get upstream changes for a fork</a>
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

<span class="header-section-number">31</span> Get upstream changes for a fork<a href="upstream-changes.html#upstream-changes" class="anchor"><em></em></a>
==========================================================================================================================================================

This workflow is relevant if you have done [fork and clone](fork-and-clone.html#fork-and-clone) and now you need to pull subsequent changes from the original repo into your copy.

Sometimes you set this up right away, when you fork and clone, even though you don’t need it yet. Congratulations, you are planning for the future!

It’s also very typical to do this step a few days or months later. Maybe you’re taking an interest in someone else’s work for the second time and you want to make another pull request. Or you just want your copy to reflect their recent work. It is also totally normal to set this up upon first need.

Vocabulary: `OWNER/REPO` refers to the original GitHub repo, owned by `OWNER`, who is not you. `YOU/REPO` refers to your copy on GitHub, i.e. your fork.

<span class="header-section-number">31.1</span> No, you can’t do this via GitHub<a href="upstream-changes.html#no-you-cant-do-this-via-github-1" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You might hope that GitHub could automatically keep your fork `YOU/REPO` synced up with the original `OWNER/REPO`. Or that you could do this in the browser interface. Then you could pull those upstream changes into your local repo.

But you can’t.

There are some tantalizing, janky ways to sort of do parts of this. But they have fatal flaws that make them unsustainable. I believe you really do need to add `OWNER/REPO` as a second remote on your repo and pull from there.

<span class="header-section-number">31.2</span> Initial conditions<a href="upstream-changes.html#initial-conditions" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

Get into the repo of interest, i.e. your local copy. For many of you, this means launching it as an RStudio Project. You’ll probably also want to open a terminal (Appendix [A](shell.html#shell)) within RStudio for some Git work via *Tools &gt; Terminal &gt; New Terminal*.

Make sure you are on the `master` branch and your “working tree is clean”. `git status` should show something like:

    On branch master
    Your branch is up to date with 'origin/master'.

    nothing to commit, working tree clean

BTW I recommend that you [never make your own commits to the `master` branch of a fork](fork-and-clone.html#dont-touch-master). However, if you have already done so, we are going to address your sorry situation below.

<span class="header-section-number">31.3</span> List your remotes<a href="upstream-changes.html#list-your-remotes" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------

Let’s inspect [the current remotes](git-remotes.html#git-remotes) for your local repo. In the shell (Appendix [A](shell.html#shell)):

    git remote -v

Most of you will see output along these lines (let’s call this BEFORE):

    origin  https://github.com/YOU/REPO.git (fetch)
    origin  https://github.com/YOU/REPO.git (push)

There is only one remote, named `origin`, corresponding to your fork on GitHub. This figure depicts a BEFORE scenario:

![](img/fork-no-upstream-sad.png)

This is sad, because there is no direct connection between `OWNER/REPO` and your local copy of the repo.

The state we want to see is like this (let’s call this AFTER):

    origin    https://github.com/YOU/REPO.git (fetch)
    origin    https://github.com/YOU/REPO.git (push)
    upstream  https://github.com/OWNER/REPO.git (fetch)
    upstream  https://github.com/OWNER/REPO.git (push)

Notice the second remote, named `upstream`, corresponding to the original repo on GitHub. This figure depicts AFTER, the scenario we want to achieve:

![](img/fork-triangle-happy.png)

Sidebar: If you used `usethis::create_from_github("OWNER/REPO")` for your original “fork and clone”, the `upstream` should already be set up. In that case, you can skip to the part where we pull from `upstream`.

<span class="header-section-number">31.4</span> Add the `upstream` remote<a href="upstream-changes.html#add-the-upstream-remote" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

Let us add `OWNER/REPO` as the `upstream` remote.

On [GitHub](https://github.com), make sure you are signed in and navigate to the original repo, `OWNER/REPO`. It is easy to get to from your fork, `YOU/REPO`, via “forked from” links near the top.

Use the big green “Clone or download” button to get the URL for `OWNER/REPO` on your clipboard. Be intentional about whether you copy the HTTPS or SSH URL.

### <span class="header-section-number">31.4.1</span> Command line Git<a href="upstream-changes.html#command-line-git" class="anchor"><em></em></a>

Use a command like this, but make an intentional choice about using an HTTPS vs SSH URL.

    git remote add upstream https://github.com/OWNER/REPO.git

The nickname `upstream` can technically be whatever you want. There is a strong tradition of using `upstream` in this context and, even though I have better ideas, I believe it is best to conform. Every book, blog post, and Stack Overflow thread that you read will use `upstream` here. Save your psychic energy for other things.

### <span class="header-section-number">31.4.2</span> RStudio<a href="upstream-changes.html#rstudio" class="anchor"><em></em></a>

This feels a bit odd, but humor me. Click on “New Branch” in the Git pane.

![](img/rstudio-new-branch.png)\]

This will reveal a button to “Add Remote”. Click it. Enter `upstream` as the remote name and paste the URL for `OWNER/REPO` that you got from GitHub. Click “Add”. Decline the opportunity to add a new branch by clicking “Cancel”.

<span class="header-section-number">31.5</span> Verify your `upstream` remote<a href="upstream-changes.html#verify-your-upstream-remote" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Let’s inspect [the current remotes](git-remotes.html#git-remotes) for your local repo AGAIN. In the shell:

    git remote -v

Now you should see something like

    origin    https://github.com/YOU/REPO.git (fetch)
    origin    https://github.com/YOU/REPO.git (push)
    upstream  https://github.com/OWNER/REPO.git (fetch)
    upstream  https://github.com/OWNER/REPO.git (push)

Notice the second remote, named `upstream`, corresponding to the original repo on GitHub. We have gotten to this:

![](img/fork-triangle-happy.png)

<span class="header-section-number">31.6</span> Pull changes from `upstream`<a href="upstream-changes.html#pull-changes-from-upstream" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Now we can pull the changes that we don’t have from `OWNER/REPO` into our local copy.

    git pull upstream master --ff-only

This says: “pull the changes from the remote known as `upstream` into the `master` branch of my local repo”. We are being explicit about the remote and the branch in this case, because (as our `git remote -v` commands reveal), `upstream/master` is **not** the default tracking branch for local `master`.

I **highly recommend** using the `--ff-only` flag in this case, so that you also say “if I have made my own commits to `master`, please force me to confront this problem NOW”. Here’s what it looks like if a fast-forward merge isn’t possible:

    $ git pull upstream master --ff-only
    From github.com:OWNER/REPO
     * branch              master     -> FETCH_HEAD
    fatal: Not possible to fast-forward, aborting.

See [Um, what if I did touch `master`?](upstream-changes.html#touched-master) to get yourself back on the happy path.

<span class="header-section-number">31.7</span> Push these changes to `origin/master`<a href="upstream-changes.html#push-these-changes-to-originmaster" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is, frankly, totally optional and many people who are facile with Git do not bother.

If you take my advice to [never work in `master` of a fork](fork-and-clone.html#dont-touch-master), then the state of the `master` branch in your fork `YOU/REPO` does not matter. You will never make a pull request from `master`.

If, however, your grasp of all these Git concepts is tenuous at best, it can be helpful to try to keep things simple and orderly and synced up.

Feel free to push the newly updated state of local `master` to your fork `YOU/REPO` and enjoy the satisfaction of being “caught up” with `OWNER/REPO`.

In the shell:

    git push

Or use the green “Push” button in RStudio.

<span class="header-section-number">31.8</span> Um, what if I did touch `master`?<a href="upstream-changes.html#touched-master" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------

I told you not to!

But OK here we are.

Let’s imagine this is the state of the original repo `OWNER/REPO`:

    ... -- A -- B -- C -- D -- E -- F

and and this is the state of the `master` branch in your local copy:

    ... -- A -- B -- C -- X -- Y -- Z

The two histories agree, up to commit or state `C`, then they diverge.

If you want to preserve the work in commits `X`, `Y`, and `Z`, create a new branch right now, with tip at `Z`, via `git checkout -b my-great-innovations` (pick your own branch name!). Then checkout `master` via `git checkout master`.

I now assume you have either preserved the work in `X`, `Y`, and `Z` (with a branch) or have decided to let it go.

Do a hard reset of the `master` branch to `C`.

    git reset --hard C

You will have to figure out how to convey `C` in Git-speak. Specify it relative to `HEAD` or provide the SHA. See *future link about resets* for more support.

The instructions above for pulling changes from upstream should now work. Your `master` branch should reflect the history of `OWNER/REPO`:

    ... -- A -- B -- C -- D -- E -- F

If you chose to create a branch with your work, you will also have that locally:

    ... -- A -- B -- C -- D -- E -- F (master)
                       \
                        -- X -- Y -- Z (my-great-innovations)

If you pushed your alternative history (with commits `X`, `Y`, and `Z`) to your fork `YOU/REPO` and you like keeping everything synced up, you will also need to force push `master` via `git push --force`, but we really really don’t like discussing force pushes in Happy Git. We only do so here, because we are talking about a fork, which is fairly easy to replace if things so sideways.

[<span class="header-section-number">30</span> Fork and clone](fork-and-clone.html)

[<span class="header-section-number">32</span> Explore and extend a pull request](pr-extend.html)

On this page
------------

-   <a href="upstream-changes.html#upstream-changes" class="nav-link"><span class="header-section-number">31</span> Get upstream changes for a fork</a>
-   <a href="upstream-changes.html#no-you-cant-do-this-via-github-1" class="nav-link"><span class="header-section-number">31.1</span> No, you can’t do this via GitHub</a>
-   <a href="upstream-changes.html#initial-conditions" class="nav-link"><span class="header-section-number">31.2</span> Initial conditions</a>
-   <a href="upstream-changes.html#list-your-remotes" class="nav-link"><span class="header-section-number">31.3</span> List your remotes</a>
-   <a href="upstream-changes.html#add-the-upstream-remote" class="nav-link"><span class="header-section-number">31.4</span> Add the upstream remote</a>
    -   <a href="upstream-changes.html#command-line-git" class="nav-link"><span class="header-section-number">31.4.1</span> Command line Git</a>
    -   <a href="upstream-changes.html#rstudio" class="nav-link"><span class="header-section-number">31.4.2</span> RStudio</a>
-   <a href="upstream-changes.html#verify-your-upstream-remote" class="nav-link"><span class="header-section-number">31.5</span> Verify your upstream remote</a>
-   <a href="upstream-changes.html#pull-changes-from-upstream" class="nav-link"><span class="header-section-number">31.6</span> Pull changes from upstream</a>
-   <a href="upstream-changes.html#push-these-changes-to-originmaster" class="nav-link"><span class="header-section-number">31.7</span> Push these changes to origin/master</a>
-   <a href="upstream-changes.html#touched-master" class="nav-link"><span class="header-section-number">31.8</span> Um, what if I did touch master?</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-upstream-changes-into-fork.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-upstream-changes-into-fork.Rmd" id="book-edit">Edit this page <em></em></a>
