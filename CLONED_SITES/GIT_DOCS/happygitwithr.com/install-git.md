<a href="install-git.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="install-git.html" class="active"><span class="header-section-number">6</span> Install Git</a>
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

<span class="header-section-number">6</span> Install Git<a href="install-git.html#install-git" class="anchor"><em></em></a>
===========================================================================================================================

You need Git, so you can use it at the command line and so RStudio can call it.

If there’s any chance it’s installed already, verify that, rejoice, and skip this step. (But consider *updating* an existing installation.)

Otherwise, find installation instructions below for your operating system.

<span class="header-section-number">6.1</span> Git already installed?<a href="install-git.html#git-already-installed" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------------------------------

Go to the shell (Appendix [A](shell.html#shell)). Enter `which git` to request the path to your Git executable:

    which git
    ## /usr/bin/git

and `git --version` to see its version:

    git --version
    ## git version 2.33.1

If you are successful, that’s great! You have Git already. No need to install! Move on.

If, instead, you see something more like `git: command not found`, keep reading.

macOS users might get an immediate offer to install command line developer tools. Yes, you should accept! Click “Install” and read more below.

<span class="header-section-number">6.2</span> Windows<a href="install-git.html#install-git-windows" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------

**Option 1** (*highly recommended*): Install [Git for Windows](https://git-for-windows.github.io/), also known as `msysgit` or “Git Bash”, to get Git in addition to some other useful tools, such as the Bash shell. Yes, all those names are totally confusing, but you might encounter them elsewhere and I want you to be well-informed.

We like this because Git for Windows leaves the Git executable in a conventional location, which will help you and other programs, e.g. RStudio, find it and use it. This also supports a transition to more expert use, because the “Git Bash” shell will be useful as you venture outside of R/RStudio.

-   **NOTE:** When asked about “Adjusting your PATH environment”, make sure to select “Git from the command line and also from 3rd-party software”. Otherwise, we believe it is good to accept the defaults.
-   Note that RStudio for Windows prefers for Git to be installed below `C:/Program Files` and this appears to be the default. This implies, for example, that the Git executable on my Windows system is found at `C:/Program Files/Git/bin/git.exe`. Unless you have specific reasons to otherwise, follow this convention.

This also leaves you with a Git client, though not a very good one. So check out Git clients we recommend (chapter [8](git-client.html#git-client)).

FYI, this appears to be equivalent to what you would download from here: <a href="https://git-scm.com/download/" class="uri">https://git-scm.com/download/</a>.

**Option 2** (*recommended*): Install [Git for Windows](https://git-for-windows.github.io/) via the [Chocolatey](https://chocolatey.org) package manager. If this means anything to you, Chocolatey is like [`apt-get`](https://en.wikipedia.org/wiki/APT_(Debian)) or [Homebrew](https://brew.sh), but for Windows instead of Debian/Ubuntu Linux or macOS. As far as I can tell, using Chocolatey to install Git for Windows gives the same result as installing it yourself (option 1).

This obviously requires that you already have [Chocolatey](https://chocolatey.org) installed or that you are up for installing it. It is not hard and the [instructions are here](https://chocolatey.org/install). This may be worthwhile if it seems likely you will be installing more open source software in the future.

After you install Chocolatey, in a shell (Appendix [A](shell.html#shell)), do:

    choco install git.install

This installs the most current [Git (Install) X.Y.Z](https://chocolatey.org/packages/git.install) Chocolatey package. At the time of writing, that is “Git (Install) 2.33.1”, but that version number will increment over time.

### <span class="header-section-number">6.2.1</span> Updating Git for Windows<a href="install-git.html#updating-git-for-windows" class="anchor"><em></em></a>

If you already have Git for Windows, but it’s not the latest version, it’s a good idea to update. Since v2.16, you can [update like so from the command line](https://stackoverflow.com/a/48924212):

    git update-git-for-windows

<span class="header-section-number">6.3</span> macOS<a href="install-git.html#macos" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------

**Option 1** (*highly recommended*): Install the Xcode command line tools (**not all of Xcode**), which includes Git.

Go to the shell and enter one of these commands to elicit an offer to install developer command line tools:

    git --version
    git config

Accept the offer! Click on “Install”.

Here’s another way to request this installation, more directly:

    xcode-select --install

We just happen to find this Git-based trigger apropos.

Note also that, after upgrading macOS, you might need to re-do the above and/or re-agree to the Xcode license agreement. We have seen this cause the RStudio Git pane to disappear on a system where it was previously working. Use commands like those above to tickle Xcode into prompting you for what it needs, then restart RStudio.

**Option 2** (*recommended*): Install Git from here: <a href="http://git-scm.com/downloads" class="uri">http://git-scm.com/downloads</a>.

-   This arguably sets you up the best for the future. It will certainly get you the latest version of Git of all approaches described here.
-   The GitHub home for the macOS installer is here: <a href="https://github.com/timcharper/git_osx_installer" class="uri">https://github.com/timcharper/git_osx_installer</a>.
    -   At that link, you can find more info if something goes wrong or you are working on an old version of macOS.

**Option 3** (*recommended*): If you anticipate getting heavily into scientific computing, you’re going to be installing and updating lots of software. You should check out [Homebrew](http://brew.sh), “the missing package manager for OS X”. Among many other things, it can install Git for you. Once you have Homebrew installed, do this in the shell:

    brew install git

<span class="header-section-number">6.4</span> Linux<a href="install-git.html#linux" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------

Install Git via your distro’s package manager.

Ubuntu or Debian Linux:

    sudo apt-get install git

Fedora or RedHat Linux:

    sudo yum install git

A comprehensive list for various Linux and Unix package managers:

<a href="https://git-scm.com/download/linux" class="uri">https://git-scm.com/download/linux</a>

[<span class="header-section-number">5</span> Install or upgrade R and RStudio](install-r-rstudio.html)

[<span class="header-section-number">7</span> Introduce yourself to Git](hello-git.html)

On this page
------------

-   <a href="install-git.html#install-git" class="nav-link"><span class="header-section-number">6</span> Install Git</a>
-   <a href="install-git.html#git-already-installed" class="nav-link"><span class="header-section-number">6.1</span> Git already installed?</a>
-   <a href="install-git.html#install-git-windows" class="nav-link"><span class="header-section-number">6.2</span> Windows</a>
    -   <a href="install-git.html#updating-git-for-windows" class="nav-link"><span class="header-section-number">6.2.1</span> Updating Git for Windows</a>
-   <a href="install-git.html#macos" class="nav-link"><span class="header-section-number">6.3</span> macOS</a>
-   <a href="install-git.html#linux" class="nav-link"><span class="header-section-number">6.4</span> Linux</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/install-git.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/install-git.Rmd" id="book-edit">Edit this page <em></em></a>
