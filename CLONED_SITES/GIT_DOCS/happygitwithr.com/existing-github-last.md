<a href="existing-github-last.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="existing-github-last.html" class="active"><span class="header-section-number">17</span> Existing project, GitHub last</a>
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

<span class="header-section-number">17</span> Existing project, GitHub last<a href="existing-github-last.html#existing-github-last" class="anchor"><em></em></a>
================================================================================================================================================================

This an explicit workflow for connecting an existing local R project to GitHub, when for some reason you cannot or don’t want to do a “GitHub first” workflow (see chapters [15](new-github-first.html#new-github-first) and [16](existing-github-first.html#existing-github-first)).

When does this come up? Example: it’s an existing project that is already a Git repo with a history you care about. Then you have to do this properly.

This may be less desirable for a novice because there are more opportunities to get confused and make a mistake. But this workflow is not that hard, even with command line Git, and is even easier if you use conveniences from the [usethis](https://cran.r-project.org/package=usethis) package or the RStudio IDE. All of these are covered below.

<span class="header-section-number">17.1</span> Prepare the local project<a href="existing-github-last.html#prepare-the-local-project" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

We assume you’ve got your existing R project isolated in a directory on your computer. If that’s not already true, make it so. Create a directory and marshal all the existing data and R scripts there. It doesn’t really matter where you do this, but note where the project currently lives.

I encourage you to make this project into an RStudio project, although it is not absolutely required. If you opt-out of this, the instructions using command line Git or usethis will still work for you, outside of RStudio.

### <span class="header-section-number">17.1.1</span> Make or verify an RStudio Project<a href="existing-github-last.html#make-or-verify-an-rstudio-project" class="anchor"><em></em></a>

If the project is not already an RStudio Project, make it so:

-   Within RStudio you can do: *File &gt; New Project &gt; Existing Directory* and, if you wish, “Open in new session”.
-   Alternatively, from R, call `usethis::create_project("path/to/your/project")`, substituting the path to your existing project directory.

If your project is already an RStudio Project, launch it.

### <span class="header-section-number">17.1.2</span> Make or verify a Git repo<a href="existing-github-last.html#make-or-verify-a-git-repo" class="anchor"><em></em></a>

You should be in RStudio now, in your project.

Is it already a Git repository? The presence of the Git pane should tip you off. If yes, you’re done.

If not, you have several options:

-   In the R Console, call `usethis::use_git()`.
-   In RStudio, go to *Tools &gt; Project Options … &gt; Git/SVN*. Under “Version control system”, select “Git”. Confirm New Git Repository? Yes!
-   In the shell, with working directory set to the project’s directory, do `git init`.

If you used usethis or RStudio to initialize the Git repo, the Project should re-launch in RStudio. Do that yourself if you did `git init`. RStudio should now have a Git pane.

<span class="header-section-number">17.2</span> Stage and commit<a href="existing-github-last.html#stage-and-commit-1" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------

If your local project was already a Git repo and was up-to-date, move on. Otherwise, you probably need to stage and commit.

-   Click the “Git” tab in upper right pane
-   Check “Staged” box for all files you want to commit.
    -   Default: stage everything
    -   When to do otherwise: this will all go to GitHub. So consider if that is appropriate for each file. **You can absolutely keep a file locally, without committing it to the Git repo and sending to GitHub**. Just let it sit there in your Git pane, without being staged. No harm will be done. If this is a long-term situation, list the file in `.gitignore`.
-   If you’re not already in the Git pop-up, click “Commit”
-   Type a message in “Commit message”.
-   Click “Commit”

<span class="header-section-number">17.3</span> Make and connect a GitHub repo with usethis<a href="existing-github-last.html#make-and-connect-a-github-repo-with-usethis" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To use usethis for this task, you must have configured a personal access token (PAT). This will already by configured for anyone using HTTPS as their protocol, because they are already using the PAT to authenticate for other Git operations. But if you are an SSH person, you will need to configure a PAT, which is explained in chapter [9](https-pat.html#https-pat). It is fine to have both a PAT and SSH keys.

In your project, in the R Console, call:

    usethis::use_github()
    #> ✓ Creating GitHub repository 'jennybc/myrepo'
    #> ✓ Setting remote 'origin' to 'https://github.com/jennybc/myrepo.git'
    #> ✓ Pushing 'main' branch to GitHub and setting 'origin/main' as upstream branch
    #> ✓ Opening URL 'https://github.com/jennybc/myrepo'

This creates a new repo on GitHub, adds it as the `origin` remote, sets up your local default branch to track same on `origin`, and opens it in your browser.

<span class="header-section-number">17.4</span> Make and connect a GitHub repo without usethis<a href="existing-github-last.html#make-and-connect-a-github-repo-without-usethis" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### <span class="header-section-number">17.4.1</span> Make a new repo on GitHub<a href="existing-github-last.html#make-a-new-repo-on-github" class="anchor"><em></em></a>

Go to <a href="https://github.com" class="uri">https://github.com</a> and make sure you are logged in.

Near “Repositories”, click the big green “New” button. Or, if you are on your own profile page, click on “Repositories”, then click the big green “New” button.

How to fill this in:

-   Repository template: No template.
-   Repository name: Ideally this will be the name of your local project’s directory (and RStudio Project). Why confuse yourself? But it must be a valid GitHub repo name, which means only letters, digits, `-`, `.`, or `_` are allowed. For future projects, think about this in advance, i.e. make sure each project’s local name is also a valid GitHub repo name.
-   Description: “Analysis of the stuff” or any short description of the project. Write this for humans.
-   Public.
-   **DO NOT initialize this repository with anything**.

Click the big green button that says “Create repository”.

Now click the big green button that says “&lt;&gt; Code”.

Copy a clone URL to your clipboard. If you’re taking our default advice, copy the HTTPS URL. But if you’re opting for SSH, then make sure to copy the SSH URL.

<img src="img/github-https-or-ssh-url-annotated.png" title="Selecting an HTTPS vs SSH URL on GitHub" alt="Selecting an HTTPS vs SSH URL on GitHub" style="width:100.0%" />

### <span class="header-section-number">17.4.2</span> Connect local repo to GitHub repo<a href="existing-github-last.html#connect-local-repo-to-github-repo" class="anchor"><em></em></a>

You can do this in the shell or, with recent versions of RStudio, via RStudio.

### <span class="header-section-number">17.4.3</span> In RStudio<a href="existing-github-last.html#in-rstudio" class="anchor"><em></em></a>

Click on the “two purple boxes and a white square” in the Git pane. Click “Add remote”. Paste the GitHub repo’s URL here and pick a remote name, almost certainly `origin`. Now “Add”.

We should be back in the “New Branch” dialog (if not, click on the “two purple boxes and a white square” in the Git pane again). I assume you’re on the `main` branch and want it to track `main` on GitHub (or whatever default branch you are using). Enter `main` as the branch name and make sure “Sync branch with remote” is checked. Click “Create” (yes, even though the branch already exists). In the next dialog, choose “overwrite”.

### <span class="header-section-number">17.4.4</span> In the shell<a href="existing-github-last.html#in-the-shell" class="anchor"><em></em></a>

In a shell, do this, substituting your URL:

    git remote add origin https://github.com/jennybc/myrepo.git

Push and cement the tracking relationship between your local `main` branch and `main` on GitHub (or whatever your default branch is named):

    git push --set-upstream origin main

<span class="header-section-number">17.5</span> Confirm the local files propagated to the GitHub remote<a href="existing-github-last.html#confirm-the-local-files-propagated-to-the-github-remote" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Go back to the browser. I assume we’re still viewing your new GitHub repo.

Refresh.

You should see all the project files you committed there.

If this project already had a Git history, it should be reflected on GitHub.

<span class="header-section-number">17.6</span> The end<a href="existing-github-last.html#the-end-1" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------

Now just “lather, rinse, repeat”. Do work somewhere: locally or on GitHub. Commit it. Push it or pull it, depending on where you did the work, but get local and remote “synced up”. Repeat.

Note that in general (and especially in future when collaborating with other developers) you will usually need to pull changes from the remote (GitHub) before pushing the local changes you have made. For this reason, it’s a good idea to try and get into the habit of pulling before you attempt to push.

[<span class="header-section-number">16</span> Existing project, GitHub first](existing-github-first.html)

[<span class="header-section-number">18</span> Test drive R Markdown](rmd-test-drive.html)

On this page
------------

-   <a href="existing-github-last.html#existing-github-last" class="nav-link"><span class="header-section-number">17</span> Existing project, GitHub last</a>
-   <a href="existing-github-last.html#prepare-the-local-project" class="nav-link"><span class="header-section-number">17.1</span> Prepare the local project</a>
    -   <a href="existing-github-last.html#make-or-verify-an-rstudio-project" class="nav-link"><span class="header-section-number">17.1.1</span> Make or verify an RStudio Project</a>
    -   <a href="existing-github-last.html#make-or-verify-a-git-repo" class="nav-link"><span class="header-section-number">17.1.2</span> Make or verify a Git repo</a>
-   <a href="existing-github-last.html#stage-and-commit-1" class="nav-link"><span class="header-section-number">17.2</span> Stage and commit</a>
-   <a href="existing-github-last.html#make-and-connect-a-github-repo-with-usethis" class="nav-link"><span class="header-section-number">17.3</span> Make and connect a GitHub repo with usethis</a>
-   <a href="existing-github-last.html#make-and-connect-a-github-repo-without-usethis" class="nav-link"><span class="header-section-number">17.4</span> Make and connect a GitHub repo without usethis</a>
    -   <a href="existing-github-last.html#make-a-new-repo-on-github" class="nav-link"><span class="header-section-number">17.4.1</span> Make a new repo on GitHub</a>
    -   <a href="existing-github-last.html#connect-local-repo-to-github-repo" class="nav-link"><span class="header-section-number">17.4.2</span> Connect local repo to GitHub repo</a>
    -   <a href="existing-github-last.html#in-rstudio" class="nav-link"><span class="header-section-number">17.4.3</span> In RStudio</a>
    -   <a href="existing-github-last.html#in-the-shell" class="nav-link"><span class="header-section-number">17.4.4</span> In the shell</a>
-   <a href="existing-github-last.html#confirm-the-local-files-propagated-to-the-github-remote" class="nav-link"><span class="header-section-number">17.5</span> Confirm the local files propagated to the GitHub remote</a>
-   <a href="existing-github-last.html#the-end-1" class="nav-link"><span class="header-section-number">17.6</span> The end</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/usage-existing-project-github-last.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/usage-existing-project-github-last.Rmd" id="book-edit">Edit this page <em></em></a>
