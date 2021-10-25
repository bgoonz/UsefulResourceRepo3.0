<a href="push-rejected.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="push-rejected.html" class="active"><span class="header-section-number">27</span> Dealing with push rejection</a>
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

<span class="header-section-number">27</span> Dealing with push rejection<a href="push-rejected.html#push-rejected" class="anchor"><em></em></a>
================================================================================================================================================

Problem: You want to push changes to GitHub, but you are rejected like so:

    $ git push
    To https://github.com/YOU/REPO.git
     ! [rejected]        master -> master (fetch first)
    error: failed to push some refs to 'https://github.com/YOU/REPO.git'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

This means that your local Git history and that on the GitHub remote are not compatible, i.e. they have diverged.

I suggest that you use `git status`, your [Git client](git-client.html#git-client), or visit your GitHub remote in the browser to get more information about the situation, i.e. to get a sense of this work that you do not have.

In the abstract, this is the state on GitHub:

    A -- B -- C (on GitHub)

And this is your local state:

    A -- B -- D (what you have)

You can’t cause some sort of merge to happen to the GitHub copy when you push.

Instead, you’ve got pull the commit `C` and somehow integrate it into your `D`-containing history. Then you will be able to push again.

This is covered in the workflow [Pull, but you have local work](pull-tricky.html#pull-tricky).

But before you behold the full horror of that, this is a great time to reflect on what we can learn from this situation.

<span class="header-section-number">27.1</span> She who pushes first wins!<a href="push-rejected.html#she-who-pushes-first-wins" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

You may have noticed that you – the author of `D` – are faffing around with Git more than the person who committed and pushed `C`, i.e. your collaborator.

There is a lesson to be learned here!

If you had pushed `D` first, you’d be relaxing and they’d be figuring out how to integrate `C` into their history in order to push. So push your work often. Don’t go dark and work “offline” for long stretches of time.

Obviously, you should push work to `master` because it’s “ready” to share (or at least “ready enough”), not to avoid Git merges.

There is a truly legitimate point here: It is better for the overall health of a project to be committing, pushing, and integrating more often, not less. This does not eliminate the need to integrate different lines of work, but it makes each integration smaller, less burdensome, and less prone to error.

<span class="header-section-number">27.2</span> Stay in touch<a href="push-rejected.html#stay-in-touch" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------

Another take away is this: the sooner you know about `C`, the better. Pull (or fetch) often.

Let’s think about your commit `D`. Maybe it was built up over a couple of days via the [Repeated Amend pattern](repeated-amend.html#repeated-amend). Maybe `C` was sitting there on GitHub the whole time or appeared very early in your process.

Consider that it might be easier to integrate `C` into your work `D` sooner rather than later. Sometimes this is not true, but more often it is.

In general, it pays off to be proactively aware of what others are doing (e.g. to pull or fetch often) than to always be in reactive mode, learning about your collaborator’s work only when your push is rejected.

<span class="header-section-number">27.3</span> Use branches<a href="push-rejected.html#use-branches" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------

Finally, your early experiences collaborating with others and yourself in `master` will give you a visceral understanding of why most Git users eventually start to use [branches](git-branches.html#git-branches).

Branches afford explicit workflows for integrating different lines of work on your own terms. This is much nicer than trying to do a tricky merge or rebase in a frustrated panic, because you need to push your work to GitHub at the end of the day.

[<span class="header-section-number">26</span> The Repeated Amend](repeated-amend.html)

[<span class="header-section-number">28</span> Pull, but you have local work](pull-tricky.html)

On this page
------------

-   <a href="push-rejected.html#push-rejected" class="nav-link"><span class="header-section-number">27</span> Dealing with push rejection</a>
-   <a href="push-rejected.html#she-who-pushes-first-wins" class="nav-link"><span class="header-section-number">27.1</span> She who pushes first wins!</a>
-   <a href="push-rejected.html#stay-in-touch" class="nav-link"><span class="header-section-number">27.2</span> Stay in touch</a>
-   <a href="push-rejected.html#use-branches" class="nav-link"><span class="header-section-number">27.3</span> Use branches</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-push-rejected.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-push-rejected.Rmd" id="book-edit">Edit this page <em></em></a>
