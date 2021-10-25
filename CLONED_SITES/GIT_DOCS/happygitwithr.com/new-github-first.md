<a href="new-github-first.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="new-github-first.html" class="active"><span class="header-section-number">15</span> New project, GitHub first</a>
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

<span class="header-section-number">15</span> New project, GitHub first<a href="new-github-first.html#new-github-first" class="anchor"><em></em></a>
====================================================================================================================================================

We create a new Project, with the preferred “GitHub first, then RStudio” sequence. Why do we prefer this? Because this method of copying the Project from GitHub to your computer also sets up the local Git repository for immediate pulling and pushing. Under the hood, we are doing `git clone`.

You’ve actually done this before during set up (chapter [12](rstudio-git-github.html#rstudio-git-github)). We’re doing it again, *with feeling*.

The workflow is pretty similar for other repository managers like GitLab or Bitbucket. We will specify below when you may need to do something differently.

<span class="header-section-number">15.1</span> Make a repo on GitHub<a href="new-github-first.html#make-a-repo-on-github-2" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------

Go to <a href="https://github.com" class="uri">https://github.com</a> and make sure you are logged in.

Near “Repositories”, click the big green “New” button. Or, if you are on your own profile page, click on “Repositories”, then click the big green “New” button.

How to fill this in:

-   Repository template: No template.
-   Repository name: `myrepo` or whatever you wish to name your new project. Approach this similar to a variable name, in code: descriptive but brief, no whitespace. Letters, digits, `-`, `.`, or `_` are allowed.
-   Description: “Analysis of the stuff” or any short description of the project. Write this for humans.
-   Public.
-   Initialize this repository with: Add a README file.

Click the big green button that says “Create repository”.

Now click the big green button that says “&lt;&gt; Code”.

Copy a clone URL to your clipboard. If you’re taking our default advice, copy the HTTPS URL. But if you’re opting for SSH, then make sure to copy the SSH URL.

<img src="img/github-https-or-ssh-url-annotated.png" title="Selecting an HTTPS vs SSH URL on GitHub" alt="Selecting an HTTPS vs SSH URL on GitHub" style="width:100.0%" />

### <span class="header-section-number">15.1.1</span> GitLab<a href="new-github-first.html#gitlab" class="anchor"><em></em></a>

Log in at <a href="https://gitlab.com" class="uri">https://gitlab.com</a>. Click on the “+” button in the top-right corner, and then on “New project”.

-   Project name: `myrepo` (or whatever you wish)  
-   Public
-   YES Initialize repository with a README

Click the big green button “Create project.”

Copy the HTTPS or SSH clone URL to your clipboard via the blue “Clone” button.

### <span class="header-section-number">15.1.2</span> Bitbucket<a href="new-github-first.html#bitbucket" class="anchor"><em></em></a>

Log in at <a href="https://bitbucket.org" class="uri">https://bitbucket.org</a>. On the left-side pane, click on the “+” button, and then on “Repository” under “Create”.

-   Repository name: `myrepo` (or whatever you wish)
-   Access level: Uncheck to make the repository public.
-   Include a README?: Select either “Yes, with a tutorial (for beginners)” or “Yes, with a template”
-   Version control system: Git

Click the big blue button “Create repository.”

Copy the HTTPS or SSH clone URL that appears when you click on the blue “Clone” button. Make sure you remove the `git clone ...` that shows up at the beginning.

<span class="header-section-number">15.2</span> New RStudio Project via git clone<a href="new-github-first.html#new-rstudio-project-via-git" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In RStudio, start a new Project:

-   *File &gt; New Project &gt; Version Control &gt; Git*. In the “repository URL” paste the URL of your new GitHub repository. It will be something like this `https://github.com/jennybc/myrepo.git`.
-   Be intentional about where you create this Project.
-   Suggest you “Open in new session”.
-   Click “Create Project” to create a new directory, which will be all of these things:
    -   a directory or “folder” on your computer
    -   a Git repository, linked to a remote GitHub repository
    -   an RStudio Project
-   **In the absence of other constraints, I suggest that all of your R projects have exactly this set-up.**

This should download the `README.md` file that we created on GitHub in the previous step. Look in RStudio’s file browser pane for the `README.md` file.

There’s a big advantage to the “GitHub first, then RStudio” workflow: the remote GitHub repo is configured as the `origin` remote for your local repo and your local `main` branch is now tracking the `main` on GitHub. This is a technical but important point about Git. The practical implication is that you are now set up to push and pull. No need to fanny around setting up Git remotes and tracking branches on the command line.

### <span class="header-section-number">15.2.1</span> Optional: peek under the hood<a href="new-github-first.html#optional-peek-under-the-hood" class="anchor"><em></em></a>

Completely optional activity: use command line Git to see what we’re talking about above, i.e. the remote and tracking branch setup.

`git remote -v` or `git remote --verbose` shows the remotes you have setup. Here’s how that looks for someone using HTTPS with GitHub and calling it `origin`:

    ~/tmp/myrepo % git remote -v
    origin  https://github.com/jennybc/myrepo.git (fetch)
    origin  https://github.com/jennybc/myrepo.git (push)

`git branch -vv` prints info about the current branch (`-vv` for “very verbose”, I guess). In particular, we can see that local `main` is tracking the `main` branch on `origin`, a.k.a. `origin/main`.

    ~/tmp/myrepo % git branch -vv
    * main 2899c91 [origin/main] A commit from my local computer

Finally, `git remote show origin` gives yet another view on useful remote and branch information:

    ~/tmp/myrepo % git remote show origin    
    * remote origin
      Fetch URL: https://github.com/jennybc/myrepo.git
      Push  URL: https://github.com/jennybc/myrepo.git
      HEAD branch: main
      Remote branch:
        main tracked
      Local branch configured for 'git pull':
        main merges with remote main
      Local ref configured for 'git push':
        main pushes to main (up to date)

`git clone`, which RStudio did for us, sets all of this up automatically. This is why “GitHub first, then RStudio” is the preferred way to start projects early in your Git/GitHub life.

<span class="header-section-number">15.3</span> Make local changes, save, commit<a href="new-github-first.html#make-local-changes-save-commit-1" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Do this every time you finish a valuable chunk of work, probably many times a day.**

From RStudio, modify the `README.md` file, e.g., by adding the line “This is a line from RStudio”. Save your changes.

Commit these changes to your local repo. How?

-   Click the “Git” tab in upper right pane
-   Check “Staged” box for any files whose existence or modifications you want to commit.
    -   To see more detail on what’s changed in file since the last commit, click on “Diff” for a Git pop-up
-   If you’re not already in the Git pop-up, click “Commit”
-   Type a message in “Commit message”, such as “Commit from RStudio”.
-   Click “Commit”

<span class="header-section-number">15.4</span> Push your local changes to GitHub<a href="new-github-first.html#push-your-local-changes-to-github" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Do this a few times a day, but possibly less often than you commit.**

You have new work in your local Git repository, but the changes are not online yet.

This will seem counterintuitive, but first let’s stop and pull from GitHub.

Why? Establish this habit for the future! If you make changes to the repo in the browser or from another machine or (one day) a collaborator has pushed, you will be happier if you pull those changes in before you attempt to push.

Click the blue “Pull” button in the “Git” tab in RStudio. I doubt anything will happen, i.e. you’ll get the message “Already up-to-date.” This is just to establish a habit.

Click the green “Push” button to send your local changes to GitHub. RStudio will report something along these lines:

    >>> /usr/bin/git push origin HEAD:refs/heads/main
    To https://github.com/jennybc/myrepo.git
       2899c91..b34cade  HEAD -> main

<span class="header-section-number">15.5</span> Confirm the local change propagated to the GitHub remote<a href="new-github-first.html#confirm-the-local-change-propagated-to-the-github-remote-2" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Go back to the browser. I assume we’re still viewing your new GitHub repo.

Refresh.

You should see the new “This is a line from RStudio” in the README.

If you click on “commits,” you should see one with the message “Commit from RStudio”.

<span class="header-section-number">15.6</span> Make a change on GitHub<a href="new-github-first.html#make-a-change-on-github" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Click on README.md in the file listing on GitHub.

In the upper right corner, click on the pencil for “Edit this file”.

Add a line to this file, such as “Line added from GitHub.”

Edit the commit message in “Commit changes” or accept the default.

Click the big green button “Commit changes.”

### <span class="header-section-number">15.6.1</span> GitLab<a href="new-github-first.html#gitlab-1" class="anchor"><em></em></a>

Click on README.md in the file listing on GitLab.

In the upper right corner, click on “Edit”.

Add a line to this file, such as “Line added from GitLab.”

Edit the commit message in “Commit changes” or accept the default.

Click the big green button “Commit changes.”

### <span class="header-section-number">15.6.2</span> Bitbucket<a href="new-github-first.html#bitbucket-1" class="anchor"><em></em></a>

Click on README.md in the file listing on Bitbucket.

In the upper right corner, click on “Edit”.

Add a line to this file, such as “Line added from Bitbucket.”

Click on the blue “Commit” button. A pop-up will show up. Edit the commit message or accept the default.

Click the blue “Commit” button.

<span class="header-section-number">15.7</span> Pull from GitHub<a href="new-github-first.html#pull-from-github" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------

Back in RStudio locally …

Inspect your README.md. It should NOT have the line “Line added from GitHub”. It should be as you left it. Verify that.

Click the blue Pull button.

Look at README.md again. You should now see the new line there.

<span class="header-section-number">15.8</span> The end<a href="new-github-first.html#the-end" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------

Now just “lather, rinse, repeat”. Do work somewhere: locally or on GitHub. Commit it. Push it or pull it, depending on where you did the work, but get local and remote “synced up”. Repeat.

Note that in general (and especially in future when collaborating with other developers) you will usually need to pull changes from the remote (GitHub) before pushing the local changes you have made. For this reason, it’s a good idea to try and get into the habit of pulling before you attempt to push.

[Get started with GitHub](usage-intro.html)

[<span class="header-section-number">16</span> Existing project, GitHub first](existing-github-first.html)

On this page
------------

-   <a href="new-github-first.html#new-github-first" class="nav-link"><span class="header-section-number">15</span> New project, GitHub first</a>
-   <a href="new-github-first.html#make-a-repo-on-github-2" class="nav-link"><span class="header-section-number">15.1</span> Make a repo on GitHub</a>
    -   <a href="new-github-first.html#gitlab" class="nav-link"><span class="header-section-number">15.1.1</span> GitLab</a>
    -   <a href="new-github-first.html#bitbucket" class="nav-link"><span class="header-section-number">15.1.2</span> Bitbucket</a>
-   <a href="new-github-first.html#new-rstudio-project-via-git" class="nav-link"><span class="header-section-number">15.2</span> New RStudio Project via git clone</a>
    -   <a href="new-github-first.html#optional-peek-under-the-hood" class="nav-link"><span class="header-section-number">15.2.1</span> Optional: peek under the hood</a>
-   <a href="new-github-first.html#make-local-changes-save-commit-1" class="nav-link"><span class="header-section-number">15.3</span> Make local changes, save, commit</a>
-   <a href="new-github-first.html#push-your-local-changes-to-github" class="nav-link"><span class="header-section-number">15.4</span> Push your local changes to GitHub</a>
-   <a href="new-github-first.html#confirm-the-local-change-propagated-to-the-github-remote-2" class="nav-link"><span class="header-section-number">15.5</span> Confirm the local change propagated to the GitHub remote</a>
-   <a href="new-github-first.html#make-a-change-on-github" class="nav-link"><span class="header-section-number">15.6</span> Make a change on GitHub</a>
    -   <a href="new-github-first.html#gitlab-1" class="nav-link"><span class="header-section-number">15.6.1</span> GitLab</a>
    -   <a href="new-github-first.html#bitbucket-1" class="nav-link"><span class="header-section-number">15.6.2</span> Bitbucket</a>
-   <a href="new-github-first.html#pull-from-github" class="nav-link"><span class="header-section-number">15.7</span> Pull from GitHub</a>
-   <a href="new-github-first.html#the-end" class="nav-link"><span class="header-section-number">15.8</span> The end</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/usage-new-project-github-first.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/usage-new-project-github-first.Rmd" id="book-edit">Edit this page <em></em></a>
