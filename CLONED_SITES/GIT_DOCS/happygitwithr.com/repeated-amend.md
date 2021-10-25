<a href="repeated-amend.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="repeated-amend.html" class="active"><span class="header-section-number">26</span> The Repeated Amend</a>
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

<span class="header-section-number">26</span> The Repeated Amend<a href="repeated-amend.html#repeated-amend" class="anchor"><em></em></a>
=========================================================================================================================================

One of the principal joys of version control is the freedom to experiment without fear. If you make a mess of things, you can always go back to a happier version of your project. We describe several methods of such time travel in *link to come*. But you must have a good commit to fall back to!

<span class="header-section-number">26.1</span> Rock climbing analogy<a href="repeated-amend.html#rock-climbing-analogy" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------

> Using a Git commit is like using anchors and other protection when climbing. If you’re crossing a dangerous rock face you want to make sure you’ve used protection to catch you if you fall. Commits play a similar role: if you make a mistake, you can’t fall past the previous commit. Coding without commits is like free-climbing: you can travel much faster in the short-term, but in the long-term the chances of catastrophic failure are high! Like rock climbing protection, you want to be judicious in your use of commits. Committing too frequently will slow your progress; use more commits when you’re in uncertain or dangerous territory. Commits are also helpful to others, because they show your journey, not just the destination.

[R Packages, Hadley Wickham](http://r-pkgs.had.co.nz/git.html#git-commit) (<span class="citation">Wickham ([2015](references.html#ref-r-pkgs-book))</span>)

Let’s talk about this:

> use more commits when you’re in uncertain or dangerous territory

When I’m doing something tricky, I often proceed towards my goal in small increments, checking that everything still works along the way. Yes it works? Make a commit. This is my new worst case scenario. Keep going.

What’s not to love?

This can lead to an awful lot of tiny commits. This is absolutely fine and nothing to be ashamed of. But one day you may start to care about the utility and aesthetics of your Git history.

The Repeated Amend is a pattern where, instead of cluttering your history with lots of tiny commits, you build up a “good” commit gradually, by amending.

*Yes, there are other ways to do this, e.g. via squashing and interactive rebase, but I think amending is the best way to get started.*

<span class="header-section-number">26.2</span> Workflow sketch<a href="repeated-amend.html#workflow-sketch" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------

### <span class="header-section-number">26.2.1</span> Initial condition<a href="repeated-amend.html#initial-condition" class="anchor"><em></em></a>

Start with your project in a functional state:

-   R package? Run your tests or `R CMD check`.
-   Data analysis? Re-run your script or re-render your `.Rmd` with the new chunk.
-   Website or book? Make sure the project still compiles.
-   You get the idea.

Make sure your “working tree is clean” and you are synced up with your GitHub remote. `git status` should show something like:

    On branch master
    Your branch is up to date with 'origin/master'.

    nothing to commit, working tree clean

### <span class="header-section-number">26.2.2</span> Get to work<a href="repeated-amend.html#get-to-work" class="anchor"><em></em></a>

Imagine we start at commit C, with previous commit B and, before that, A:

    ... -- A -- B -- C

Make a small step towards your goal. Re-check that your project “works”.

Stage those changes and make a commit with the message “WIP”, meaning “work in progress”. Do this in RStudio or in the shell (Appendix [A](shell.html#shell)):

    git commit -m "WIP"

The message can be anything, but “WIP” is a common convention. If you use it, whenever you return to a project where the most recent commit message is “WIP”, you’ll know that you were probably in the middle of something. If you push a “WIP” commit, on purpose or by mistake, it signals to other people that more commits might be coming.

Your history now looks like this:

    A -- B -- C -- WIP*

**Don’t push!** The `*` above signifies a commit that exists only in your local repo, not (yet) on GitHub.

Do a bit more work. Re-check that your project is still in a functional state. Commit again but this time **amend** your previous commit. RStudio offers a check box for “Amend previous commit” or in the shell:

    git commit --amend --no-edit

The `--no-edit` part retains the current commit message of “WIP”.

**Don’t push!** Your history now looks like this:

    A -- B -- C -- WIP*

but the changes associated with the `WIP*` commit now represent your last two commits, i.e. all the accumulated changes since state C.

Keep going like this.

Let’s say you’ve finally achieved your goal. One last time, check that your project is functional and in a state you’re willing to share with others.

Commit, amending again, but with a real commit message this time. Think of this as commit D. Push. Do this in RStudio or the shell:

    git commit --amend -m "Implement awesome feature; closes #43"
    git push

Your history – and that on GitHub – look like this:

    A -- B -- C -- D

As far as the world knows, you implemented the feature in one fell swoop. But you got to work on the task incrementally, with the peace of mind that you could never truly break things.

<span class="header-section-number">26.3</span> What if I need to fall back?<a href="repeated-amend.html#what-if-i-need-to-fall-back" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------

Imagine you’re in the middle of a Repeated Amend workflow:

    A -- B -- C -- WIP*

and you make some changes that break your project, e.g. tests start failing. These bad changes are not yet committed, but they are saved. You want to fall back to the last good state, represented by `WIP*`.

In Git lingo, you want to do a **hard reset** to the `WIP*` state. With the command line:

    git reset --hard

which is implicitly the same as

    git reset --hard HEAD

which says: “reset my files to their state at the most recent commit”.

This is also possible in RStudio. Click on “Diff” or “Commit”. Select a file with changes you do not want. Use “Discard All” to discard all changes in that file. Use “Discard chunk” to discard changes in that file, selectively. Repeat this procedure for each affected file until you are back to an acceptable state. Carry on.

If you committed a bad state, go to *link to come* for more reset scenarios.

<span class="header-section-number">26.4</span> Why don’t we push intermediate progress?<a href="repeated-amend.html#why-dont-we-push-intermediate-progress" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Amending a commit is an example of what’s called “rewriting Git history”.

Rewriting history that has already been pushed to GitHub – and therefore potentially pulled by someone else – is a controversial practice. Like most controversial practices, lots of people still indulge in it, as do I.

But there is the very real possibility that you create headaches for yourself and others, so in Happy Git we must recommend that you abstain. Once you’ve pushed something, consider it written in stone and move on.

<span class="header-section-number">26.5</span> Um, what if I did push?<a href="repeated-amend.html#um-what-if-i-did-push" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------

I told you not to!

But OK here we are.

Let’s imagine you pushed this state to GitHub by mistake:

    A -- B -- C -- WIP (85bf30a)

and proceeded to `git commit --amend` again locally, leading to this state:

    A -- B -- C -- WIP* (6e884e6)

I’m deliberately showing two histories that sort of look the same, in terms of commit messages. But the last SHA reveals they are actually different.

You are in a pickle now, as you can’t do a simple push or pull. A push will be rejected and a pull will probably lead to a merge that you don’t want.

You have two choices:

-   Hard reset your local repo to `C` (`git reset --hard HEAD^`) and pull from GitHub. Do this if you have collaborators who may have pulled that state. GitHub and local history now show this:

        A -- B -- C -- WIP (85bf30a)

-   Force push to GitHub (`git push --force`). Do this if you have no collaborators or you have reason to believe they have not pulled. GitHub and local history now show this:

        A -- B -- C -- WIP* (6e884e6)

Now you are synced up again.

[Useful Git patterns for real life](workflows-intro.html)

[<span class="header-section-number">27</span> Dealing with push rejection](push-rejected.html)

On this page
------------

-   <a href="repeated-amend.html#repeated-amend" class="nav-link"><span class="header-section-number">26</span> The Repeated Amend</a>
-   <a href="repeated-amend.html#rock-climbing-analogy" class="nav-link"><span class="header-section-number">26.1</span> Rock climbing analogy</a>
-   <a href="repeated-amend.html#workflow-sketch" class="nav-link"><span class="header-section-number">26.2</span> Workflow sketch</a>
    -   <a href="repeated-amend.html#initial-condition" class="nav-link"><span class="header-section-number">26.2.1</span> Initial condition</a>
    -   <a href="repeated-amend.html#get-to-work" class="nav-link"><span class="header-section-number">26.2.2</span> Get to work</a>
-   <a href="repeated-amend.html#what-if-i-need-to-fall-back" class="nav-link"><span class="header-section-number">26.3</span> What if I need to fall back?</a>
-   <a href="repeated-amend.html#why-dont-we-push-intermediate-progress" class="nav-link"><span class="header-section-number">26.4</span> Why don’t we push intermediate progress?</a>
-   <a href="repeated-amend.html#um-what-if-i-did-push" class="nav-link"><span class="header-section-number">26.5</span> Um, what if I did push?</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-repeated-amend.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-repeated-amend.Rmd" id="book-edit">Edit this page <em></em></a>
