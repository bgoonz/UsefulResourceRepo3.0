<a href="git-basics.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="git-basics.html" class="active"><span class="header-section-number">20</span> Repo, commit, diff, tag</a>
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

<span class="header-section-number">20</span> Repo, commit, diff, tag<a href="git-basics.html#git-basics" class="anchor"><em></em></a>
======================================================================================================================================

<span class="header-section-number">20.1</span> Repos or repositories<a href="git-basics.html#repos-or-repositories" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

Git is a version control system whose original purpose was to help groups of developers work collaboratively on big software projects. Git manages the evolution of a set of files – called a **repository** or **repo** – in a highly structured way. Historically, these files would have consisted of source code and the instructions for how to build an application from its source.

Git has been re-purposed by the data science community <span class="citation">(Ram [2013](references.html#ref-Ram2013); Bartlett [2016](references.html#ref-git-for-humans); Perez-Riverol et al. [2016](references.html#ref-ten-simple-rules-git))</span>. We use it to manage the motley collection of files that make up typical data analytical projects, which consist of data, figures, reports, and, yes, some source code.

For new or existing projects, we recommend that you:

-   Dedicate a local directory or folder to it.
-   Make it an RStudio Project. *Optional but recommended; obviously only applies to projects involving R and users of RStudio.*
-   Make it a Git repository.

This setup happens once per project and can happen at project inception or at any later point. Chances are your existing projects each already live in a dedicated directory. Making such a directory an RStudio Project and Git repository boils down to allowing those applications to leave notes for themselves in hidden files or directories. The project is still a regular directory on your computer, that you can locate, name, move, and generally interact with as you wish. You don’t have to handle it with special gloves!

The daily workflow is probably not dramatically different from what you do currently. You work in the usual way, writing R scripts or authoring reports in LaTeX or R Markdown. But instead of only *saving* individual files, periodically you make a **commit**, which takes a snapshot of all the files in the entire project. If you have ever versioned a file [by adding your initials or the date](http://www.phdcomics.com/comics/archive.php?comicid=1531), you have effectively made a commit, albeit only for a single file. It is a version that is significant to you and that you might want to inspect or revert to later. Periodically, you push commits to GitHub. This is like sharing a document with colleagues on DropBox or sending it out as an email attachment. By pushing to GitHub, you make your work and all your accumulated progress accessible to others.

This is a moderate change to your normal, daily workflow. It feels weird at first, but quickly becomes second nature. In [STAT 545](http://stat545.com) students are required to submit all coursework via GitHub, starting in week one. Most have never seen Git before and do not identify as programmers. It is a major topic in class and office hours for the first two weeks. Then we practically never discuss it again.

<span class="header-section-number">20.2</span> Commits, diffs, and tags<a href="git-basics.html#commits-diffs-and-tags" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------

We now connect the fundamental concepts of Git to the data science workflow:

-   repository
-   commit
-   diff

Recall that a repository or repo is just a directory of files that Git manages holistically. A commit functions like a snapshot of all the files in the repo, at a specific moment. Under the hood, that is not exactly how Git implements things. Although mental models don’t have to be accurate in order to be useful, in this case it helps to align the two.

<span id="fig:commit-diff-sha-tag" style="display:block;"></span> <img src="img/commit-diff-sha-tag.png" alt="\label{fig:commit-diff-sha-tag}Partial commit history for our iris example, highlighting diffs, commit messages, SHAs, and tags." style="width:100.0%" />

Figure 20.1: Partial commit history for our iris example, highlighting diffs, commit messages, SHAs, and tags.

Figure [20.1](git-basics.html#fig:commit-diff-sha-tag) is a look at a fictional analysis of the iris data, focusing on the evolution of a script, `iris.R`. Consider version A of this file and a modified version, version B. Assume that version A was part of one Git commit and version B was part of the next commit. The set of differences between A and B is called a “diff” and Git users contemplate diffs a lot. Diff inspection is how you re-explain to yourself how version A differs from version B. Diff inspection is not limited to adjacent commits. You can inspect the diffs between any two commits.

In fact, Git’s notion of any specific version of `iris.R` is as an accumulation of diffs. If you go back far enough, you find the commit where the file was created in the first place. Every later version is stored by Git as that initial version, plus all the intervening diffs in the history that affect the file. We’ll set these internal details aside now, but understanding the importance of these deltas will make Git’s operations less baffling in the long run.

So, by looking at diffs, it’s easy to see how two snapshots differ, but what about the why?

Every time you make a commit you must also write a short **commit message**. Ideally, this conveys the motivation for the change. Remember, the diff will show the content. When you revisit a project after a break or need to digest recent changes made by a colleague, looking at the **history**, by reading commit messages and skimming through diffs, is an extremely efficient way to get up to speed. Figure [20.1](git-basics.html#fig:commit-diff-sha-tag) shows the messages associated with the last three commits.

Every commit needs some sort of nickname, so you can identify it. Git does this automatically, assigning each commit what is called a SHA, a seemingly random string of 40 letters and numbers (it is not, in fact, random but is a SHA-1 checksum hash of the commit). Though you will be exposed to these, you don’t have to handle them directly very often and, when you do, usually the first 7 characters suffice. The commit messages in Figure [20.1](git-basics.html#fig:commit-diff-sha-tag) are prefixed by such truncated SHAs. You can also designate certain snapshots as special with a **tag**, which is a name of your choosing. In a software project, it is typical to tag a release with its version, e.g., “v1.0.3”. For a manuscript or analytical project, you might tag the version submitted to a journal or transmitted to external collaborators. Figure [20.1](git-basics.html#fig:commit-diff-sha-tag) shows a tag, “draft-01”, associated with the last commit.

[Some Git basics](git-intro.html)

[<span class="header-section-number">21</span> Git commands](git-commands.html)

On this page
------------

-   <a href="git-basics.html#git-basics" class="nav-link"><span class="header-section-number">20</span> Repo, commit, diff, tag</a>
-   <a href="git-basics.html#repos-or-repositories" class="nav-link"><span class="header-section-number">20.1</span> Repos or repositories</a>
-   <a href="git-basics.html#commits-diffs-and-tags" class="nav-link"><span class="header-section-number">20.2</span> Commits, diffs, and tags</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/git-basics.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/git-basics.Rmd" id="book-edit">Edit this page <em></em></a>
