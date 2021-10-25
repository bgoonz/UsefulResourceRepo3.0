<a href="push-pull-github.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="push-pull-github.html" class="active"><span class="header-section-number">11</span> Connect to GitHub</a>
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

<span class="header-section-number">11</span> Connect to GitHub<a href="push-pull-github.html#push-pull-github" class="anchor"><em></em></a>
============================================================================================================================================

Objective: make sure that you can pull from and push to GitHub from your computer.

I do not explain all the shell (Appendix [A](shell.html#shell)) and Git commands in detail. This is a black box diagnostic / configuration exercise. In later chapters and in live workshops, we revisit these operations with much more narrative.

I assume you’ve decided whether to use HTTPS (see chapter [9](https-pat.html#https-pat) or SSH (see chapter [10](ssh-keys.html#ssh-keys)) and you’ve prepared your credential.

<span class="header-section-number">11.1</span> Make a repo on GitHub<a href="push-pull-github.html#make-a-repo-on-github" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------

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

<span class="header-section-number">11.2</span> Clone the repo to your local computer<a href="push-pull-github.html#clone-the-repo-to-your-local-computer" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

We have a few ways to do this: with command line Git or via RStudio.

### <span class="header-section-number">11.2.1</span> Clone with command line Git<a href="push-pull-github.html#clone-with-command-line-git" class="anchor"><em></em></a>

Go to the shell (Appendix [A](shell.html#shell)).

Take charge of – or at least notice! – what directory you’re in. `pwd` displays the working directory. `cd` is the command to change directory. Personally, I would do this sort of thing in `~/tmp`.

Clone `myrepo` from GitHub to your computer. Use the URL we just copied from GitHub. This URL should have **your GitHub username** and the name of **your practice repo**. If your shell (Appendix [A](shell.html#shell)) cooperates, you should be able to paste the whole `https://....` bit that we copied above. But some shells are not (immediately) clipboard aware. In that sad case, you must type it. **Accurately.**

    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

This should look something like this:

    ~/tmp % git clone https://github.com/jennybc/myrepo.git
    Cloning into 'myrepo'...
    remote: Enumerating objects: 3, done.
    remote: Counting objects: 100% (3/3), done.
    remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
    Receiving objects: 100% (3/3), done.

Make this new repo your working directory, list its files, display the README, and get some information on its connection to GitHub:

    cd myrepo
    ls
    head README.md
    git remote show origin

This should look something like this:

    ~/tmp % cd myrepo

    ~/tmp/myrepo % ls
    README.md

    ~/tmp/myrepo % head README.md 
    # myrepo
    checking stuff for Happy Git

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

<span class="header-section-number">11.3</span> Make a local change, commit, and push<a href="push-pull-github.html#make-a-local-change-commit-and-push" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Add a line to README and verify that Git notices the change:

    echo "A line I wrote on my local computer  " >> README.md
    git status

This should look something like this:

    ~/tmp/myrepo % echo "A line I wrote on my local computer" >> README.md

    ~/tmp/myrepo % git status
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
            modified:   README.md

    no changes added to commit (use "git add" and/or "git commit -a")

Stage (“add”) and commit this change and push to your remote repo on GitHub.

If you’re a new GitHub user and using HTTPS, you might be challenged for your username and password. Even though GitHub no longer allows username/password authentication, many general Git tools still frame the authentication task with this vocabulary. By all means, provide your GitHub username when prompted. However, the most critical piece is to **provide your PAT as the password**. Do not enter your web password. Enter your PAT. If you already stored your PAT with `gitcreds::gitcreds_set()`, it should be discovered automatically and you will not see a credential challenge.

    git add README.md
    git commit -m "A commit from my local computer"
    git push

This should look something like this:

    ~/tmp/myrepo % git add README.md

    ~/tmp/myrepo % git commit -m "A commit from my local computer"
    [main e92528c] A commit from my local computer
     1 file changed, 1 insertion(+)
     
    ~/tmp/myrepo % git push
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 12 threads
    Compressing objects: 100% (2/2), done.
    Writing objects: 100% (3/3), 327 bytes | 327.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
    To https://github.com/jennybc/myrepo.git
       31dcaef..e92528c  main -> main

Do you see an error like this?

    ~/tmp/myrepo % git push                                                     
    remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
    remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
    fatal: Authentication failed for 'https://github.com/jennybc/myrepo.git/'

This means you have provided your GitHub *web password*, instead of your *personal access token* (PAT). Go back to chapter [9](https-pat.html#https-pat) to get a PAT. Try `git push` again and hopefully you’ll get another prompt, allowing you to correct things and provide your PAT.

If you ever feel you need to overwrite a bad credential with a new one, the easiest way to do this is to call `gitcreds::gitcreds:set()` from R.

### <span class="header-section-number">11.3.1</span> Windows and line endings<a href="push-pull-github.html#windows-and-line-endings" class="anchor"><em></em></a>

On Windows, you might see a message about `LF will be replaced by CRLF`. This is normal and does not require any action on your part. Windows handles line endings differently from other operating systems, but the default setup for Git for Windows is appropriate for most people and situations.

Here’s a command to reveal the current line ending configuration and some typical output **on Windows**:

    $ git config --show-origin --get core.autocrlf
    file:"C:\\ProgramData/Git/config"      true

If your value shows as `false`, you can set it to `true` with this command:

    $ git config --global core.autocrlf true

`true` is the current default setting for `core.autocrlf` for [Git for Windows](install-git.html#install-git-windows), our recommended method for installing Git on Windows. The need to set this explicitly in your global user config suggests you should consider reinstalling or updating Git for Windows.

<span class="header-section-number">11.4</span> Confirm the local change propagated to the GitHub remote<a href="push-pull-github.html#confirm-the-local-change-propagated-to-the-github-remote" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Go back to the browser. I assume we’re still viewing your new GitHub repo.

Refresh.

You should see the new “A line I wrote on my local computer” in the README.

If you click on “commits,” you should see one with the message “A commit from my local computer.”

If you have made it this far, you and your test repo are ready to graduate to using Git and GitHub with RStudio (chapter [12](rstudio-git-github.html#rstudio-git-github)).

<span class="header-section-number">11.5</span> Clean up<a href="push-pull-github.html#clean-up" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------

If you’re ready to conclude this test of your Git installation and GitHub configuration, we can clean up the test repository now.

**Local** When you’re ready to clean up, you can delete the local repo any way you like. It’s just a regular directory on your computer.

Here’s how to do that in the shell, if current working directory is `myrepo`:

    cd ..
    rm -rf myrepo/

**GitHub** In the browser, go to your repo’s landing page on GitHub. Click on “Settings”.

Scroll down, click on “delete repository,” and do as it asks.

[<span class="header-section-number">10</span> Set up keys for SSH](ssh-keys.html)

[<span class="header-section-number">12</span> Connect RStudio to Git and GitHub](rstudio-git-github.html)

On this page
------------

-   <a href="push-pull-github.html#push-pull-github" class="nav-link"><span class="header-section-number">11</span> Connect to GitHub</a>
-   <a href="push-pull-github.html#make-a-repo-on-github" class="nav-link"><span class="header-section-number">11.1</span> Make a repo on GitHub</a>
-   <a href="push-pull-github.html#clone-the-repo-to-your-local-computer" class="nav-link"><span class="header-section-number">11.2</span> Clone the repo to your local computer</a>
    -   <a href="push-pull-github.html#clone-with-command-line-git" class="nav-link"><span class="header-section-number">11.2.1</span> Clone with command line Git</a>
-   <a href="push-pull-github.html#make-a-local-change-commit-and-push" class="nav-link"><span class="header-section-number">11.3</span> Make a local change, commit, and push</a>
    -   <a href="push-pull-github.html#windows-and-line-endings" class="nav-link"><span class="header-section-number">11.3.1</span> Windows and line endings</a>
-   <a href="push-pull-github.html#confirm-the-local-change-propagated-to-the-github-remote" class="nav-link"><span class="header-section-number">11.4</span> Confirm the local change propagated to the GitHub remote</a>
-   <a href="push-pull-github.html#clean-up" class="nav-link"><span class="header-section-number">11.5</span> Clean up</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/connect-git-github.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/connect-git-github.Rmd" id="book-edit">Edit this page <em></em></a>
