<a href="troubleshooting.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="troubleshooting.html" class="active"><span class="header-section-number">14</span> RStudio, Git, GitHub Hell</a>
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

<span class="header-section-number">14</span> RStudio, Git, GitHub Hell<a href="troubleshooting.html#troubleshooting" class="anchor"><em></em></a>
==================================================================================================================================================

Problems we have seen and possible solutions.

If you experience some new problem and, especially, find the corresponding solution, [we’d love to hear from you!](https://github.com/jennybc/happy-git-with-r/issues)

<span class="header-section-number">14.1</span> I think I have installed Git but damn if I can find it<a href="troubleshooting.html#i-think-i-have-installed-git-but-damn-if-i-can-find-it" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

When you install Git, try to control or record where it is being installed! Make a mental or physical note of these things.

You may be able to find Git after the fact with these commands in the shell (Appendix [A](shell.html#shell)):

-   `which git` (Mac, Linux, or anything running a bash shell)

-   `where git` (Windows, when not in a bash shell)

It is not entirely crazy to just re-install Git, using a method that leaves it in a more conventional location, and to pay very close attention to where it’s being installed. Live and learn.

<span class="header-section-number">14.2</span> RStudio Git pane disappears on Mac OS<a href="troubleshooting.html#rstudio-git-pane-disappears-on-mac-os" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Sometimes the RStudio Git pane disappears on a system where it was previously working. This usually happens to people who installed Git by installing the Xcode command line tools. It is usually a sign that you need to re-agree to the Xcode license agreement. This is necessary after a Mac OS upgrade, re-installing Xcode, or even quiet Xcode upgrades that sometimes seem to happen without the user’s knowledge.

In the shell, you could execute `git status` and you might see a message along these lines:

    Agreeing to the Xcode/iOS license requires admin privileges, please run “sudo xcodebuild -license” and then retry this command.

If you get such clear instructions, by all means do what it says, i.e. run `sudo xcodebuild -license`, to re-agree to the license.

In any case, you need to tickle the Xcode command line tools to prompt you for whatever it needs. Here are other commands that, depending on the situation, might trigger the necessary prompts:

    xcode-select --install

or

    git config --global --list

Then **restart RStudio**.

<span class="header-section-number">14.3</span> Dysfunctional PATH<a href="troubleshooting.html#dysfunctional-path" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------

Some cases of RStudio *not* automatically detecting the Git executable stem from problems with `PATH`. This is the set of directories where your computer will look for executables, such as Git (today) or `make`. Certain methods of Git installation, especially on Windows and/or older OSes, have a higher tendency to put Git in an unconventional location or to fail to add the relevant directory to `PATH`.

How to see your `PATH`?

In the shell:

    echo $PATH

Take a good hard look at this. See the point above about finding your Git executable or re-installing it while you are **wide awake**. Is the Git executable’s parent directory in your `PATH`? No? **Fix that.**

At this point I recommend that you do a Google search to find instructions on how to modify `PATH` on your specific operating system.

<span class="header-section-number">14.4</span> Push/Pull buttons greyed out in RStudio<a href="troubleshooting.html#pushpull-buttons-greyed-out-in-rstudio" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Are you sure your local repository is associated with a remote repository, e.g. a GitHub repo? In a shell with working directory set to the local Git repo, enter this command:

    ~/tmp/myrepo % git remote -v                                           
    origin  git@github.com:jennybc/myrepo.git (fetch)
    origin  git@github.com:jennybc/myrepo.git (push)

We want to see that fetch and push are set to remote URLs that point to the remote repo.

If you discover you still need to set a remote, get the HTTPS or SSH URL, as appropriate, for your GitHub repo. This is easy to get onto your clipboard from the repo’s GitHub page. Do this in the shell:

    git remote add origin https://github.com/jennybc/myrepo.git

Download all the files from the online GitHub repository and deal with any conflicts (substituting `master` for `main`, if relevant).

    git pull origin main

Call `git remote -v` again. Once you are satisfied that your GitHub remote is set properly, you can move on to the next step.

Are you sure the current branch is *tracking* a branch on the remote? In that same shell, in your repo, do this:

    ~/tmp/myrepo % git branch -vv
    * main 2899c91 [origin/main] A commit from my local computer

The above shows successful confirmation that the local `main` branch is tracking `origin/main`, i.e. the `main` branch on GitHub. If you don’t see the `[origin/main]` bit, that is a problem. By the way, `git branch -r` and `git remote show origin` are two more commands that are helpful for examining your remote setup.

When connecting a local repo to a new GitHub repo, a lot of people remember to add the GitHub remote, but forget to also cement this tracking relationship for any relevant branches.

If you discover your local `main` branch is not yet tracking `main` on GitHub, fix that like so:

    git push --set-upstream origin main

This is equivalent to `git push -u origin main` but conveys more about what you are doing.

Call `git branch -vv` or `git branch -r` or `git remote show origin` again to confirm that the `main` branch on GitHub is the tracking branch for the local `main` branch.

<span class="header-section-number">14.5</span> I have no idea if my local repo and my remote repo are connected.<a href="troubleshooting.html#i-have-no-idea-if-my-local-repo-and-my-remote-repo-are-connected." class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

See the above section on “Push/Pull buttons greyed out in RStudio.”

<span class="header-section-number">14.6</span> Push rejected, i.e. fail at the Git/GitHub level<a href="troubleshooting.html#push-rejected-i.e.-fail-at-the-gitgithub-level" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You might have changes on the remote AND on your local repo. Just because you don’t remember making any edits in the browser doesn’t mean you didn’t. Humor me.

Pull first. Resolve any conflicts. Then try your push again.

<span class="header-section-number">14.7</span> RStudio is not making certain files available for staging/committing<a href="troubleshooting.html#rstudio-is-not-making-certain-files-available-for-stagingcommitting" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Do you have a space in your directory or file names? [A space in a file name is a space in your soul.](https://twitter.com/aaronquinlan/status/711593127551733761) Get rid of it.

Is your Git repo / RStudio Project inside a folder that … eventually rolls up to Google Drive, DropBox, Microsoft OneDrive, or a network drive? If yes, I recommend you move the repo / Project into a plain old directory that lives directly on your computer and that is not managed by, e.g., Google Drive.

If you cannot deal with the two root causes identified above, then it is possible that a more powerful Git client (chapter [8](git-client.html#git-client)) will be able to cope with these situations. But I make no promises. You should also try Git operations from the command line.

<span class="header-section-number">14.8</span> I hear you have some Git repo inside your Git repo<a href="troubleshooting.html#i-hear-you-have-some-git-repo-inside-your-git-repo" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Do not create a Git repository inside another Git repository. Just don’t.

If you have a genuine need for this, which is really rare, the proper way to do it is via [submodules](http://git-scm.com/book/en/v2/Git-Tools-Submodules).

In STAT 545, we certainly do not need to do this and when we’ve seen it, it’s been a mistake. This has resulted in the unexpected and complete loss of the inner Git repository. To be sure, there was more going on here (cough, GitHub Desktop client), but non-standard usage of Git repos makes it much easier to make costly mistakes.

[<span class="header-section-number">13</span> Detect Git from RStudio](rstudio-see-git.html)

[Get started with GitHub](usage-intro.html)

On this page
------------

-   <a href="troubleshooting.html#troubleshooting" class="nav-link"><span class="header-section-number">14</span> RStudio, Git, GitHub Hell</a>
-   <a href="troubleshooting.html#i-think-i-have-installed-git-but-damn-if-i-can-find-it" class="nav-link"><span class="header-section-number">14.1</span> I think I have installed Git but damn if I can find it</a>
-   <a href="troubleshooting.html#rstudio-git-pane-disappears-on-mac-os" class="nav-link"><span class="header-section-number">14.2</span> RStudio Git pane disappears on Mac OS</a>
-   <a href="troubleshooting.html#dysfunctional-path" class="nav-link"><span class="header-section-number">14.3</span> Dysfunctional PATH</a>
-   <a href="troubleshooting.html#pushpull-buttons-greyed-out-in-rstudio" class="nav-link"><span class="header-section-number">14.4</span> Push/Pull buttons greyed out in RStudio</a>
-   <a href="troubleshooting.html#i-have-no-idea-if-my-local-repo-and-my-remote-repo-are-connected." class="nav-link"><span class="header-section-number">14.5</span> I have no idea if my local repo and my remote repo are connected.</a>
-   <a href="troubleshooting.html#push-rejected-i.e.-fail-at-the-gitgithub-level" class="nav-link"><span class="header-section-number">14.6</span> Push rejected, i.e. fail at the Git/GitHub level</a>
-   <a href="troubleshooting.html#rstudio-is-not-making-certain-files-available-for-stagingcommitting" class="nav-link"><span class="header-section-number">14.7</span> RStudio is not making certain files available for staging/committing</a>
-   <a href="troubleshooting.html#i-hear-you-have-some-git-repo-inside-your-git-repo" class="nav-link"><span class="header-section-number">14.8</span> I hear you have some Git repo inside your Git repo</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/connect-troubleshooting.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/connect-troubleshooting.Rmd" id="book-edit">Edit this page <em></em></a>
