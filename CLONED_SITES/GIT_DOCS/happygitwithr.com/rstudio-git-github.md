<a href="rstudio-git-github.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="rstudio-git-github.html" class="active"><span class="header-section-number">12</span> Connect RStudio to Git and GitHub</a>
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

<span class="header-section-number">12</span> Connect RStudio to Git and GitHub<a href="rstudio-git-github.html#rstudio-git-github" class="anchor"><em></em></a>
================================================================================================================================================================

Here we verify that RStudio can issue Git commands on your behalf. Assuming that you’ve gotten local Git to talk to GitHub, this means you’ll also be able to pull from and push to GitHub from RStudio.

In later chapters and in live workshops, we revisit these operations with much more explanation.

If you succeed here, your set up is DONE.

<span class="header-section-number">12.1</span> Prerequisites<a href="rstudio-git-github.html#prerequisites" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------

We assume the following:

-   You’ve registered a free GitHub account (chapter [4](github-acct.html#github-acct)).
-   You’ve installed/updated R and RStudio (chapter [5](install-r-rstudio.html#install-r-rstudio)).
-   You’ve installed Git (chapter [6](install-git.html#install-git)).
-   You’ve introduced yourself to Git (chapter [7](hello-git.html#hello-git)).
-   You’ve confirmed that you can push to / pull from GitHub from the command line (chapter [11](push-pull-github.html#push-pull-github)).

You will also need a test repository on GitHub.

If you just completed the previous chapter, [Connect to GitHub](push-pull-github.html#push-pull-github), that will be perfect! However, I encourage you to delete the *local* repository, so you can experience how we use RStudio to clone it and get a local copy. Delete the folder corresponding to the local repo any way you like. It’s just a regular directory on your computer. Here’s how to do that in the shell, if current working directory is `myrepo`:

    cd ..
    rm -rf myrepo/

If you don’t have a suitable test repository on GitHub, follow the instructions in the next section.

<span class="header-section-number">12.2</span> Make a repo on GitHub<a href="rstudio-git-github.html#make-a-repo-on-github-1" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Go to <a href="https://github.com" class="uri">https://github.com</a> and make sure you are logged in.

Near “Repositories”, click the big green “New” button. Or, if you are on your own profile page, click on “Repositories”, then click the big green “New” button.

How to fill this in:

-   Repository template: No template.
-   Repository name: `myrepo` or whatever you wish (we’ll delete this soon).
-   Description: “Repository for testing my Git/GitHub setup” or similar. It’s nice to have something here, so you’ll see it appear in the README.
-   Public.
-   Initialize this repository with: Add a README file.

Click the big green button that says “Create repository”.

Now click the big green button that says “&lt;&gt; Code”.

Copy a clone URL to your clipboard. If you’re taking our default advice, copy the HTTPS URL. But if you’re opting for SSH, then make sure to copy the SSH URL.

<img src="img/github-https-or-ssh-url-annotated.png" title="Selecting an HTTPS vs SSH URL on GitHub" alt="Selecting an HTTPS vs SSH URL on GitHub" style="width:100.0%" />

<span class="header-section-number">12.3</span> Clone the test GitHub repository to your computer via RStudio<a href="rstudio-git-github.html#clone-the-test-github-repository-to-your-computer-via-rstudio" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In RStudio, start a new Project:

-   *File &gt; New Project &gt; Version Control &gt; Git*. In “Repository URL”, paste the URL of your new GitHub repository. It will be something like this `https://github.com/jennybc/myrepo.git`.
    -   Do you NOT see an option to get the Project from Version Control? Restart RStudio and try again. Still no luck? Go to chapter [13](rstudio-see-git.html#rstudio-see-git) for tips on how to help RStudio find Git.
-   Accept the default project directory name, e.g. `myrepo`, which coincides with the GitHub repo name.
-   Take charge of – or at least notice! – where the Project will be saved locally. A common rookie mistake is to have no idea where you are saving files or what your working directory is. Pay attention. Be intentional. Personally, I would do this in `~/tmp`.
-   I suggest you check “Open in new session”, as that’s what you’ll usually do in real life.
-   Click “Create Project”.

You should find yourself in a new local RStudio Project that represents your test repo on GitHub. This should download the `README.md` file from GitHub. Look in RStudio’s file browser pane for the `README.md` file.

<span class="header-section-number">12.4</span> Make local changes, save, commit<a href="rstudio-git-github.html#make-local-changes-save-commit" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

From RStudio, modify the `README.md` file, e.g., by adding the line “This is a line from RStudio”. Save your changes.

Commit these changes to your local repo. How?

From RStudio:

-   Click the “Git” tab in upper right pane.
-   Check “Staged” box for `README.md`.
-   If you’re not already in the Git pop-up, click “Commit”.
-   Type a message in “Commit message”, such as “Commit from RStudio”.
-   Click “Commit”.

<span class="header-section-number">12.5</span> Push your local changes online to GitHub<a href="rstudio-git-github.html#push-your-local-changes-online-to-github" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Click the green “Push” button to send your local changes to GitHub.

You should not experience a credential challenge, since one of the pre-requisites was successfully pushing to GitHub from the command line (chapter [11](push-pull-github.html#push-pull-github)). RStudio’s Git pane just exposes a specific subset of command line Git and therefore once your credentials work in the shell, they should work in RStudio. If you do experience a credential challenge, that suggests you should have a look at the troubleshooting suggestions for your chosen protocol, either [HTTPS](https-pat.html#pat-troubleshooting) or [SSH](ssh-keys.html#ssh-troubleshooting).

<span class="header-section-number">12.6</span> Confirm the local change propagated to the GitHub remote<a href="rstudio-git-github.html#confirm-the-local-change-propagated-to-the-github-remote-1" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Go back to the browser. I assume we’re still viewing your new GitHub repo.

Refresh.

You should see the new “This is a line from RStudio” in the README.

If you click on “commits”, you should see one with the message “Commit from RStudio”.

If you have made it this far, you are DONE with set up. Congratulations!

<span class="header-section-number">12.7</span> Clean up<a href="rstudio-git-github.html#clean-up-1" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------

Quit the RStudio instance that’s open to your test Project / Git repo.

Delete the local repo any way you like. It’s just a regular directory on your computer.

Here’s how to do that in the shell, if current working directory is `myrepo`:

    cd ..
    rm -rf myrepo/

In the browser, go to your repo’s landing page on GitHub. Click on “Settings”.

Scroll down, click on “delete repository,” and do as it asks.

[<span class="header-section-number">11</span> Connect to GitHub](push-pull-github.html)

[<span class="header-section-number">13</span> Detect Git from RStudio](rstudio-see-git.html)

On this page
------------

-   <a href="rstudio-git-github.html#rstudio-git-github" class="nav-link"><span class="header-section-number">12</span> Connect RStudio to Git and GitHub</a>
-   <a href="rstudio-git-github.html#prerequisites" class="nav-link"><span class="header-section-number">12.1</span> Prerequisites</a>
-   <a href="rstudio-git-github.html#make-a-repo-on-github-1" class="nav-link"><span class="header-section-number">12.2</span> Make a repo on GitHub</a>
-   <a href="rstudio-git-github.html#clone-the-test-github-repository-to-your-computer-via-rstudio" class="nav-link"><span class="header-section-number">12.3</span> Clone the test GitHub repository to your computer via RStudio</a>
-   <a href="rstudio-git-github.html#make-local-changes-save-commit" class="nav-link"><span class="header-section-number">12.4</span> Make local changes, save, commit</a>
-   <a href="rstudio-git-github.html#push-your-local-changes-online-to-github" class="nav-link"><span class="header-section-number">12.5</span> Push your local changes online to GitHub</a>
-   <a href="rstudio-git-github.html#confirm-the-local-change-propagated-to-the-github-remote-1" class="nav-link"><span class="header-section-number">12.6</span> Confirm the local change propagated to the GitHub remote</a>
-   <a href="rstudio-git-github.html#clean-up-1" class="nav-link"><span class="header-section-number">12.7</span> Clean up</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/connect-rstudio-git-github.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/connect-rstudio-git-github.Rmd" id="book-edit">Edit this page <em></em></a>
