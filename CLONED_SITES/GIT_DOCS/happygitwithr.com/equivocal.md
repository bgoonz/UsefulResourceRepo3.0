<a href="equivocal.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="equivocal.html" class="active"><span class="header-section-number">25</span> Equivocal remote setups</a>
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

<span class="header-section-number">25</span> Equivocal remote setups<a href="equivocal.html#equivocal" class="anchor"><em></em></a>
====================================================================================================================================

Just like the previous section about the most common setups, we only consider a very constrained set of remotes:

-   The remote is on GitHub, e.g. its URL looks something like `https://github.com/OWNER/REPO.git` or `git@github.com:OWNER/REPO.git`.
-   The remote is named `origin` or `upstream`.

The setups described here are characterized by *incomplete information*. This section exists mostly to explain feedback that the usethis package might give about a GitHub remote configuration.

To identify any of the remote setups described in section [24](common-remote-setups.html#common-remote-setups), we need information from GitHub:

-   Whether you can push to a repo
-   Whether a repo is a fork
-   For a fork, what is its source repo

Sometimes some of this information is publicly available, but some of it never is, such as repo permissions. This means that programmatic access to this information, i.e. requests to the GitHub API, generally requires authorization by an authenticated GitHub user.

This means that client packages, like usethis, work best when you have configured a GitHub personal access token (PAT). See section [9.3](https-pat.html#get-a-pat) for more details on why and how to do that.

If you’ve configured a PAT and are being told your GitHub config is problematic, consider these other explanations: Are you offline? Is GitHub down? Has your PAT expired? By default, they now expire after 30 days.

<span class="header-section-number">25.1</span> Maybe “ours” or “theirs”<a href="equivocal.html#maybe-ours-or-theirs" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------------------------------

When we detect just one GitHub remote, but we can’t verify the info above, usethis describes the setup as “maybe\_ours\_or\_theirs”.

<img src="img/maybe_ours_or_theirs.png" style="width:60.0%" />

Once a PAT is available, this setup can be identified as being [“ours” (belonging to you)](common-remote-setups.html#ours-you), [“ours” (but belonging to someone else)](common-remote-setups.html#ours-them), or [“theirs”](common-remote-setups.html#theirs).

<span class="header-section-number">25.2</span> Maybe fork<a href="equivocal.html#maybe-fork" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------

When we detect two GitHub remotes, but we can’t verify the info above, usethis describes the setup as “maybe\_fork”.

<img src="img/maybe_fork.png" style="width:60.0%" />

Once a PAT is available, this setup can be identified as being a well-configured [fork](common-remote-setups.html#fork-them) or a [fork with incomplete setup](common-remote-setups.html#fork_upstream_is_not_origin_parent) (or possibly something more weird).

<span class="header-section-number">25.3</span> How to fix<a href="equivocal.html#how-to-fix" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------

These setups aren’t necessarily broken, but usethis needs more information to operate.

To “fix” this, set up a GitHub personal access token. See section [9.3](https-pat.html#get-a-pat) for more details on why and how to do that.

[<span class="header-section-number">24</span> Common remote setups](common-remote-setups.html)

[Useful Git patterns for real life](workflows-intro.html)

On this page
------------

-   <a href="equivocal.html#equivocal" class="nav-link"><span class="header-section-number">25</span> Equivocal remote setups</a>
-   <a href="equivocal.html#maybe-ours-or-theirs" class="nav-link"><span class="header-section-number">25.1</span> Maybe “ours” or “theirs”</a>
-   <a href="equivocal.html#maybe-fork" class="nav-link"><span class="header-section-number">25.2</span> Maybe fork</a>
-   <a href="equivocal.html#how-to-fix" class="nav-link"><span class="header-section-number">25.3</span> How to fix</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/remote-setups-equivocal.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/remote-setups-equivocal.Rmd" id="book-edit">Edit this page <em></em></a>
