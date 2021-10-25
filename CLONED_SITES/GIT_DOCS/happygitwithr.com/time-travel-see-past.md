<a href="time-travel-see-past.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="time-travel-see-past.html" class="active"><span class="header-section-number">29</span> Time travel: See the past</a>
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

<span class="header-section-number">29</span> Time travel: See the past<a href="time-travel-see-past.html#time-travel-see-past" class="anchor"><em></em></a>
============================================================================================================================================================

Sometimes you just need to **see** various files in your project as they were at some significant moment in the past. Examples:

-   “I liked the color scheme of this plot better in last week’s draft”. “What’s up with that new funky outlier in figure 2?”
    -   Here you’ll want to visit scripts and source data as they were the last time you generated visualizations to share with this colleague.
-   “The build has been failing on Windows for two weeks.”
    -   Here you’ll want to inspect package source at the “last known good” version and scrutinize subsequent commits.

All projects move through various states that you regard as “good” vs. “bad” or something in between. It can be useful to explore the past, when trying to get into a “good” state.

<span class="header-section-number">29.1</span> Hyperlinks are awesome!<a href="time-travel-see-past.html#hyperlinks-are-awesome" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------------------------------------------

This is where GitHub (and GitLab or BitBucket) really shine. The ability to quickly explore different commits/states, switch between branches, inspect individual files, and see the discussion in linked issues is incredibly powerful.

Yes, technically, you can visit past states of your project using Git commands locally. But it is significantly more cumbersome. You generally have to checkout these previous states, which raises the prospect of getting comfortable in the “detached head” state and unintentionally making new commits on the wrong branch or on no branch at all.

GitHub’s hyperlink-rich presentation of your repo and its history is one of the top reasons to sync local work to a copy on GitHub, even if you keep it private. It can be much easier to hone in on a state or change of interest by clicking around or using GitHub’s search features. Also, because it is so clearly a remote and read-only action, there is no possibility of goofing up local state or committing new work to the wrong branch.

<span class="header-section-number">29.2</span> Browse commit history and specific commits<a href="time-travel-see-past.html#browse-commit-history-and-specific-commits" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

From your repo’s landing page, access commit history by clicking on “xyz commits”. This is like using `git log` locally, but much more rewarding. If you have a good [local Git client](git-client.html#git-client), it probably also provides a graphical overview of history.

<span id="fig:github-link-to-commit-listing" style="display:block;"></span> <img src="img/screenshots/github-link-to-commits.png" alt="Link to commit listing on GitHub." style="width:100.0%" />

Figure 29.1: Link to commit listing on GitHub.

Once you’re viewing the history, notice three ways to access more info for each commit:

1.  The clipboard icon copies the SHA-1 of the commit. This can be handy if you need to refer to this commit elsewhere, e.g. in an issue thread or a commit message or in a Git command you’re forming for local execution.
2.  Click on the abbreviated SHA-1 itself in order to the view the diff associated with the commit.
3.  Click on the double angle brackets `<>` to browse the state of the entire repo at that point in history.

<span id="fig:github-commit-listing" style="display:block;"></span> <img src="img/screenshots/github-commit-listing.png" alt="Example of a commit listing on GitHub." style="width:100.0%" />

Figure 29.2: Example of a commit listing on GitHub.

Back out of any drilled down view by clicking on `YOU/REPO` to return to your repo’s landing page. This brings you back to the present state and top-level of your repo.

### <span class="header-section-number">29.2.1</span> Use hyperlinks yourself!<a href="time-travel-see-past.html#use-hyperlinks-yourself" class="anchor"><em></em></a>

Once you’ve identified a relevant commit, diff, or file state, you can copy the current URL from your browser and use it to enhance online discussion elsewhere, i.e. to bring other people to this exact view of the repo. The hyperlink-iness of repos hosted on GitHub can make online discussion of a project much more precise and efficient.

<span class="header-section-number">29.3</span> File driven inquiries<a href="time-travel-see-past.html#file-driven-inquiries" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------

What if you’re interested in how a specific file came to be the way it is? First navigate to the file, then notice “Blame” and “History” in the upper right.

<span id="fig:github-specific-file" style="display:block;"></span> <img src="img/screenshots/github-specific-file.png" alt="Visiting a specific file on GitHub." style="width:100.0%" />

Figure 29.3: Visiting a specific file on GitHub.

### <span class="header-section-number">29.3.1</span> Blame<a href="time-travel-see-past.html#blame" class="anchor"><em></em></a>

The “blame” view of a file is related to what `git blame` does on the command line. It reveals who last touched each line of the file, how long ago, and the associated commit message. Click on the commit message to visit that commit. Or click the “stacked rectangles” icon to move further back in time, but staying in blame view. This is handy when doing forensics on a specific and small set of lines.

*add a screenshot (and update that above) but first pick a better example than Happy Git, i.e. one with more contributors / more interesting history*

### <span class="header-section-number">29.3.2</span> History<a href="time-travel-see-past.html#history" class="anchor"><em></em></a>

The “history” view for a file is very much like the overall commit history described above, except it only includes commits that affect the file of interest. This can be handy when your inquiry is rather diffuse and you’re trying to digest the general story arc for a file.

### <span class="header-section-number">29.3.3</span> Hyperlink to specific lines at a specific state<a href="time-travel-see-past.html#hyperlink-to-specific-lines-at-a-specific-state" class="anchor"><em></em></a>

When viewing a file on GitHub, you can click on a line number to highlight it. Use “click … shift-click” to select a range of lines. Notice your browser’s URL shows something of this form:

    https://github.com/OWNER/REPO/blob/SHA/path/to/file.R#L27-L31

If the URL does not contain the SHA, type “y” to toggle into that form.

These file- and SHA-specific URLs are a great way to point people at particular lines of code in online conversations. It’s best practice to use the uglier links that contain the SHA, as they will stand the test of time.

<span class="header-section-number">29.4</span> Search<a href="time-travel-see-past.html#search" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------

Search is always available in the upper-righthand corner of GitHub.

<span id="fig:github-repo-search" style="display:block;"></span> <img src="img/screenshots/github-repo-search.png" alt="Typing into GitHub search bar." style="width:100.0%" />

Figure 29.4: Typing into GitHub search bar.

Once you enter some text in the search box, a dropdown provides the choice to search in the current repo (the default) or all of GitHub. GitHub searches the contents of files (described as “Code”), commit messages, and issues. Take advantage of the search hits across these different domains. Again, this is a powerful way to zoom in on specific lines of code, revisit an interesting time in project history, or re-discover a conversation thread.

### <span class="header-section-number">29.4.1</span> Issue search<a href="time-travel-see-past.html#issue-search" class="anchor"><em></em></a>

If you want to search issues specifically, the search box on any repo’s Issues page is prepopulated with the filters `is:issue` and `is:open`.

[<span class="header-section-number">28</span> Pull, but you have local work](pull-tricky.html)

[<span class="header-section-number">30</span> Fork and clone](fork-and-clone.html)

On this page
------------

-   <a href="time-travel-see-past.html#time-travel-see-past" class="nav-link"><span class="header-section-number">29</span> Time travel: See the past</a>
-   <a href="time-travel-see-past.html#hyperlinks-are-awesome" class="nav-link"><span class="header-section-number">29.1</span> Hyperlinks are awesome!</a>
-   <a href="time-travel-see-past.html#browse-commit-history-and-specific-commits" class="nav-link"><span class="header-section-number">29.2</span> Browse commit history and specific commits</a>
    -   <a href="time-travel-see-past.html#use-hyperlinks-yourself" class="nav-link"><span class="header-section-number">29.2.1</span> Use hyperlinks yourself!</a>
-   <a href="time-travel-see-past.html#file-driven-inquiries" class="nav-link"><span class="header-section-number">29.3</span> File driven inquiries</a>
    -   <a href="time-travel-see-past.html#blame" class="nav-link"><span class="header-section-number">29.3.1</span> Blame</a>
    -   <a href="time-travel-see-past.html#history" class="nav-link"><span class="header-section-number">29.3.2</span> History</a>
    -   <a href="time-travel-see-past.html#hyperlink-to-specific-lines-at-a-specific-state" class="nav-link"><span class="header-section-number">29.3.3</span> Hyperlink to specific lines at a specific state</a>
-   <a href="time-travel-see-past.html#search" class="nav-link"><span class="header-section-number">29.4</span> Search</a>
    -   <a href="time-travel-see-past.html#issue-search" class="nav-link"><span class="header-section-number">29.4.1</span> Issue search</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-see-the-past.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-see-the-past.Rmd" id="book-edit">Edit this page <em></em></a>
