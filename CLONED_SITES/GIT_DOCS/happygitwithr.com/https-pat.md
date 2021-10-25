<a href="https-pat.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="https-pat.html" class="active"><span class="header-section-number">9</span> Personal access token for HTTPS</a>
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

<span class="header-section-number">9</span> Personal access token for HTTPS<a href="https-pat.html#https-pat" class="anchor"><em></em></a>
===========================================================================================================================================

When we interact with a remote Git server, such as GitHub, we have to include credentials in the request. This proves we are a specific GitHub user, who’s allowed to do whatever we’re asking to do.

Git can communicate with a remote server using one of two protocols, HTTPS or SSH, and the different protocols use different credentials.

Here we describe the credential setup for the HTTPS protocol, which is what we recommend if you have no burning reason to pick SSH. With HTTPS, we will use a **personal access token (PAT)**. Head over to chapter [10](ssh-keys.html#ssh-keys) if you really want to set up SSH keys.

Let it be known that the password that you use to login to GitHub’s website is NOT an acceptable credential when talking to GitHub as a Git server. This was possible in the past (and may yet be true for other Git servers), but those days are over at GitHub. You can learn more in their blog post [Token authentication requirements for Git operations](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/).

Here’s the error you’ll see if you try to do that now:

    remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
    remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
    fatal: Authentication failed for 'https://github.com/OWNER/REPO.git/'

The recommendation to use a personal access token (PAT) is exactly what we cover in this chapter.

<span class="header-section-number">9.1</span> TL;DR<a href="https-pat.html#tldr" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------

This is a very minimal account of getting and storing a PAT. This might be all you need when you’re first getting yourself set up. You can always come back later and read other parts of this chapter.

Go to <a href="https://github.com/settings/tokens" class="uri">https://github.com/settings/tokens</a> and click “Generate token”.

Or, from R, do:

    usethis::create_github_token()

Look over the scopes; I highly recommend selecting “repo”, “user”, and “workflow”. Recommended scopes will be pre-selected if you used `create_github_token()`.

Click “Generate token”.

Copy the generated PAT to your clipboard. Or leave that browser window open and available for a little while, so you can come back to copy the PAT.

Provide this PAT next time a Git operation asks for your password<span class="footnote-ref"><sup>2</sup></span>.

You could even get out ahead of this and store the PAT explicitly right now. In R, call `gitcreds::gitcreds_set()` to get a prompt where you can paste your PAT:

    > gitcreds::gitcreds_set()

    ? Enter password or token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    -> Adding new credentials...
    -> Removing credentials from cache...
    -> Done.

You should be able to work with GitHub now, i.e. push and pull. If you’re still doing your initial setup, now is a great time to move on to [Connect to GitHub](push-pull-github.html#push-pull-github).

Read on to learn more about:

-   [How to decide between the HTTPS and SSH protocols](https-pat.html#https-vs-ssh)
-   [PAT scopes, names, and expiration](https-pat.html#get-a-pat)
-   [PAT storage](https-pat.html#store-pat)
-   [Troubleshooting](https-pat.html#pat-troubleshooting)

<span class="header-section-number">9.2</span> HTTPS versus SSH<a href="https-pat.html#https-vs-ssh" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------

I find HTTPS easier to get working quickly and **strongly recommend** it when you first start working with Git/GitHub. HTTPS is what GitHub recommends, presumably for exactly the same reasons. The “ease of use” argument in favor of HTTPS is especially true for Windows users. I started with HTTPS, preferred SSH for a while, and have returned to HTTPS. The main thing to know is that this is not an all-or-nothing decision and it’s a relatively easy decision to revisit later.

Another advantage of HTTPS is that the PAT we’ll set up for that can also be used with GitHub’s REST API. That might not mean anything to you (yet), but there are many R packages that call GitHub’s API on your behalf (devtools+usethis, remotes, pak, gh, etc.). Configuring your PAT kills two birds with one stone: this single credential can be used to authenticate to GitHub as a regular Git server and for its REST API. If you authenticate via SSH for “regular” Git work, you will still have to set up a PAT for work that uses the REST API.

<img src="img/pat-kills-both-birds.jpeg" title="Diagram showing different ways of interacting with GitHub as a server and the credential needed for each method" alt="Diagram showing different ways of interacting with GitHub as a server and the credential needed for each method" style="width:80.0%" />

A properly configured PAT means all of this will “just work”:

-   Remote HTTPS operations via command line Git and, therefore, via RStudio
-   Remote HTTPS operations via the gert R package and, therefore, usethis
-   GitHub API operations via the gh R package and, therefore, usethis

### <span class="header-section-number">9.2.1</span> URL determines the protocol<a href="https-pat.html#url-determines-protocol" class="anchor"><em></em></a>

Even though I’m suggesting that you adopt HTTPS as a lifestyle, it’s good to know that you actually have very granular control over the protocol. It is determined by the URL used to access a remote repo. Feel free to skip this section if you are new to Git (we mention some concepts and commands that won’t make much sense ’til you’ve used Git a little).

HTTPS remote URLs look like `https://github.com/<OWNER>/<REPO>.git`.  
SSH remote URLs look like `git@github.com:<OWNER>/<REPO>.git`.

<img src="img/github-https-url.png" title="Getting an HTTPS or SSH URL from GitHub" alt="Getting an HTTPS or SSH URL from GitHub" style="width:49.0%;height:49.0%" /><img src="img/github-ssh-url.png" title="Getting an HTTPS or SSH URL from GitHub" alt="Getting an HTTPS or SSH URL from GitHub" style="width:49.0%;height:49.0%" />

When you execute a command such as `git push origin my-cool-feature-branch`, Git looks up the URL you’ve stored for the `origin` remote and uses the protocol implicit in the URL’s format. The protocol is a game time decision.

This implies that:

-   It’s fine to use HTTPS for one remote in a repo and SSH for another.  
-   It’s fine to use HTTPS in one repo and SSH in another.  
-   It’s fine to interact with a GitHub repo via HTTPS from one computer and via SSH from another.  
-   It’s fine to adopt HTTPS for new work, even if some of your pre-existing repos use SSH.

You just have to be aware that mixed use of HTTPS and SSH means you’ll have to configure both sorts of credentials.

Changing a specific remote from HTTPS to SSH (and back again) is a straightforward operation with `git remote set-url REMOTE_NAME DESIRED_URL`:

    ~/rrr/happy-git-with-r % git remote -v
    origin  https://github.com/jennybc/happy-git-with-r.git (fetch)
    origin  https://github.com/jennybc/happy-git-with-r.git (push)

    ~/rrr/happy-git-with-r % git remote set-url origin git@github.com:jennybc/happy-git-with-r.git

    ~/rrr/happy-git-with-r % git remote -v
    origin  git@github.com:jennybc/happy-git-with-r.git (fetch)
    origin  git@github.com:jennybc/happy-git-with-r.git (push)

    ~/rrr/happy-git-with-r % git remote set-url origin https://github.com/jennybc/happy-git-with-r.git

We can do the same from R using functions in usethis:

    usethis::git_remotes()
    #> $origin
    #> [1] "https://github.com/jennybc/happy-git-with-r.git"

    usethis::use_git_remote(
      "origin",
      "git@github.com:jennybc/happy-git-with-r.git",
      overwrite = TRUE
    )

    usethis::git_remotes()
    #> $origin
    #> [1] "git@github.com:jennybc/happy-git-with-r.git"

    usethis::use_git_remote(
      "origin",
      "https://github.com/jennybc/happy-git-with-r.git",
      overwrite = TRUE
    )

<span class="header-section-number">9.3</span> Generate a personal access token (PAT)<a href="https-pat.html#get-a-pat" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------

On github.com, assuming you’re signed in, you can manage your personal access tokens from <a href="https://github.com/settings/tokens" class="uri">https://github.com/settings/tokens</a>, also reachable via *Settings &gt; Developer settings &gt; Personal access tokens*. You could click on “Generate new token” here or, perhaps even better, you could call `usethis::create_github_token()` from R:

    usethis::create_github_token()

The usethis approach takes you to a pre-filled form where we have pre-selected some recommended scopes, which you can look over and adjust before clicking “Generate token”. At the time of writing, the usethis-recommended scopes are “repo”, “user”, “gist”, and “workflow”.

<img src="img/new-personal-access-token-screenshot.png" title="Screenshot: Getting a new personal access token on GitHub" alt="Screenshot: Getting a new personal access token on GitHub" style="width:100.0%" />

It is a very good idea to describe the token’s purpose in the *Note* field, because one day you might have multiple PATs. We recommend naming each token after its use case, such as the computer or project you are using it for, e.g. “personal-macbook-air” or “vm-for-project-xyz”. In the future, you will find yourself staring at this list of tokens, because inevitably you’ll need to re-generate or delete one of them. Make it easy to figure out which token you’ve come here to fiddle with.

GitHub encourages the use of perishable tokens, with a default *Expiration* period of 30 days. Unless you have a specific reason to fight this, I recommend accepting this default. I assume that GitHub’s security folks have good reasons for their recommendation. But, of course, you can adjust the *Expiration* behaviour as you see fit, including “No expiration”.

Once you’re happy with the token’s *Note*, *Expiration*, and *Scopes*, click “Generate token”.

You won’t be able to see this token again, so don’t close or navigate away from this browser window until you store the PAT locally. Copy the PAT to the clipboard, anticipating what we’ll do next: trigger a prompt that lets us store the PAT in the Git credential store.

Treat this PAT like a password! Do not ever hard-wire your PAT into your code! A PAT should always be retrieved implicitly, for example, from the Git credential store. We’re about to help you store the PAT in a safe place, where command line Git, RStudio, and R packages can discover it.

If you use a password management app, such as 1Password or LastPass (highly recommended!), you might want to also add this PAT (and its *Note*) to the entry for GitHub, where you’re already storing your username and password. Storing your PAT in the Git credential store is a semi-persistent convenience, sort of like a browser cache or “remember me” on a website<span class="footnote-ref"><sup>3</sup></span> and it’s conceivable you will need to re-enter your PAT in the future. You could decide to embrace the impermanence of your PAT and, if it somehow goes missing, you’ll just [re-generate the PAT and re-store it](https-pat.html#regenerate-pat). If you accept the default 30-day expiration period, this is a workflow you’ll be using often anyway. But if you create long-lasting tokens or want to feel free to play around with the functions for setting or clearing your Git credentials, it can be handy to have your own record of your PAT in a secure place, like 1Password or LastPass.

<span class="header-section-number">9.4</span> Store your PAT<a href="https-pat.html#store-pat" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------

At this point, I assume you’ve generated a PAT and have it available, in one or both of these ways:

-   In a secure, long-term system for storing secrets, like 1Password or LastPass
-   For the next few minutes, in a browser window or on the clipboard

There are a couple ways to get your PAT into the Git credential store:

-   Call an R function to explicitly store (or update) your credentials.
-   Do something in command line Git or RStudio that triggers a credential challenge.

### <span class="header-section-number">9.4.1</span> Call an R function to store your credentials<a href="https-pat.html#call-an-r-function-to-store-your-credentials" class="anchor"><em></em></a>

There are two R packages for accessing the Git credential store:

-   [gitcreds](https://r-lib.github.io/gitcreds/)
-   [credentials](https://docs.ropensci.org/credentials/)

It is likely that these packages will eventually combine into one and, even now, they are largely interoperable. You don’t need to follow the instructions for both packages – pick one!

#### <span class="header-section-number">9.4.1.1</span> gitcreds package<a href="https-pat.html#gitcreds-package" class="anchor"><em></em></a>

If you don’t have gitcreds installed, install via `install.packages("gitcreds")`. If you’ve installed usethis, you will already have gitcreds, because usethis uses gh and gh uses gitcreds.

Call `gitcreds::gitcreds_set()`. If you don’t have a PAT stored already, it will prompt you to enter your PAT. Paste!

    > gitcreds::gitcreds_set()

    ? Enter password or token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    -> Adding new credentials...
    -> Removing credentials from cache...
    -> Done.

If you already have a stored credential, `gitcreds::gitcreds_set()` reveals this and will even let you inspect it. This helps you decide whether to keep the existing credential or replace it. When in doubt, embrace a new, known-to-be-good credential over an old one, of dubious origins.

    > gitcreds::gitcreds_set()

    -> Your current credentials for 'https://github.com':

      protocol: https
      host    : github.com
      username: PersonalAccessToken
      password: <-- hidden -->

    -> What would you like to do? 

    1: Keep these credentials
    2: Replace these credentials
    3: See the password / token

    Selection: 2

    -> Removing current credentials...

    ? Enter new password or token: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    -> Adding new credentials...
    -> Removing credentials from cache...
    -> Done.

You can check that you’ve stored a credential with `gitcreds_get()`:

    gitcreds_get()
    #> <gitcreds>
    #>   protocol: https
    #>   host    : github.com
    #>   username: PersonalAccessToken
    #>   password: <-- hidden -->

Other functions that can help you feel confident about your PAT setup include:

    usethis::gh_token_help()

    usethis::git_sitrep()

    gh::gh_whoami()

#### <span class="header-section-number">9.4.1.2</span> credentials package<a href="https-pat.html#credentials-package" class="anchor"><em></em></a>

If you don’t have credentials installed, install via `install.packages("credentials")`. If you’ve installed usethis, you will already have credentials, because usethis uses gert and gert uses credentials.

Call `set_github_pat()`. If you don’t have a PAT stored already, it will prompt you to enter your PAT. Paste!

    credentials::set_github_pat()

If successful, your initial (and subsequent) calls will look like this:

    credentials::set_github_pat()
    #> If prompted for GitHub credentials, enter your PAT in the password field
    #> Using GITHUB_PAT from Jennifer (Jenny) Bryan (credential helper: osxkeychain)

Other functions that can help you feel confident about your PAT setup include:

    usethis::gh_token_help()

    usethis::git_sitrep()

    gh::gh_whoami()

### <span class="header-section-number">9.4.2</span> Store credentials through organic Git use<a href="https-pat.html#store-credentials-through-organic-git-use" class="anchor"><em></em></a>

*Before gitcreds and credentials existed (see above), we had to orchestrate a credential challenge by setting up (and then tearing down) a toy repo. That still occurs naturally in the guided exercise in [Connect to GitHub](push-pull-github.html#push-pull-github). But I strongly recommend managing your PAT more directly and explicitly with `gitcreds::gitcreds_set()` and related functions in gitcreds.*

<span class="header-section-number">9.5</span> HTTPS PAT problems and solutions<a href="https-pat.html#pat-troubleshooting" class="anchor"><em></em></a>
--------------------------------------------------------------------------------------------------------------------------------------------------------

This section is for people who need to know even more about PAT management, because they’re in a nonstandard situation or troubleshooting.

### <span class="header-section-number">9.5.1</span> Valid PAT gets stored, but later told the PAT is invalid<a href="https-pat.html#valid-pat-gets-stored-but-later-told-the-pat-is-invalid" class="anchor"><em></em></a>

Let’s say you generate a fresh PAT and successfully store it as described above. Maybe you even use it successfully. But later, you’re told your PAT is invalid! How can this be?

Here are some likely explanations:

1.  Your PAT truly is invalid. By default, PATs have an expiration date now. One day you really will wake up and find the PAT has gone bad overnight and you need to re-generate and re-store it.
2.  You have an invalid PAT stored *somewhere else*, that you’ve forgotten about, probably in `.Renviron`. This old, invalid PAT is preventing R packages from even discovering your new, valid PAT.

#### <span class="header-section-number">9.5.1.1</span> PAT has expired<a href="https-pat.html#regenerate-pat" class="anchor"><em></em></a>

You are going to be re-generating and re-storing your PAT on a schedule dictated by its expiration period. By default, once per month.

When the PAT expires, return to <a href="https://github.com/settings/tokens" class="uri">https://github.com/settings/tokens</a> and click on its *Note*. (You do label your tokens nicely by use case, right? Right?) At this point, you can optionally adjust scopes and then click “Regenerate token”. You can optionally modify its *Expiration* and then click “Regenerate token” (again). As before, copy the PAT to the clipboard, call `gitcreds::gitcreds_set()`, and paste!

Hopefully it’s becoming clear why each token’s *Note* is so important. The actual token may be changing, e.g., once a month, but its use case (and scopes) are much more persistent and stable.

#### <span class="header-section-number">9.5.1.2</span> Old `GITHUB_PAT` in `.Renviron`<a href="https-pat.html#old-github_pat-in-.renviron" class="anchor"><em></em></a>

These usethis functions will diagnose this problem:

    usethis::gh_token_help()

    usethis::git_sitrep()

In the past, it was common to store a PAT as the `GITHUB_PAT` environment variable in `.Renviron`. But now, thanks to gitcreds and credentials, we can store and retrieve a PAT, from R, the same way as command line Git does.

If you have any doubt about your previous practices, open `.Renviron`, look for a line setting the `GITHUB_PAT` environment variable, and delete it. `usethis::edit_r_environ()` can be helpful for getting `.Renviron` open for editing. Don’t forget to restart R for this change to take effect.

### <span class="header-section-number">9.5.2</span> PAT doesn’t persist on macOS or Windows<a href="https-pat.html#pat-doesnt-persist-on-macos-or-windows" class="anchor"><em></em></a>

The credential helpers used by Git take advantage of official OS-provided credential stores, where possible, such as macOS Keychain and Windows Credential Manager.

If you’re trying to follow the advice here and your PAT never persists, consider that you may need to update Git to get its more modern credential helpers. This is absolutely an area of Git that has improved rapidly in recent years and the gitcreds and credentials package work best with recent versions of Git. I have not needed to explicitly activate a credential helper on macOS or Windows with any recent version of Git.

Here’s a command to reveal the current credential helper and what I see these days.

macOS

    $ git config --show-origin --get credential.helper
    file:/Users/jenny/.gitconfig    osxkeychain

Windows

    $ git config --show-origin --get credential.helper
    file:C:/Program Files/Git/mingw64/etc/gitconfig manager

If you want to know how more about how gitcreds and credentials are managing your PAT, learn about [`git credential <fill|approve|reject>`](https://git-scm.com/docs/git-credential). For keeners, that documentation gives you the gory details on how credentials are stored and retrieved:

> Git has an internal interface for storing and retrieving credentials from system-specific helpers, as well as prompting the user for usernames and passwords. The `git-credential` command exposes this interface to scripts which may want to retrieve, store, or prompt for credentials in the same manner as Git.

On Windows, your Git credentials are probably being stored via Credential Manager.

On macOS, your Git credentials are probably being stored in the Keychain.

If you really want to poke around directly to explore or clean out your GitHub credentials, launch Credential Manager (Windows) or Keychain Access (macOS) and search for “github.com”.

### <span class="header-section-number">9.5.3</span> PAT doesn’t persist on Linux<a href="https-pat.html#pat-doesnt-persist-on-linux" class="anchor"><em></em></a>

The credential helpers used by Git take advantage of official OS-provided credential stores on macOS and Windows, but sadly there is no exact equivalent on Linux.

The easiest thing to do is to configure Git to “cache” your credentials (vs “store”), which is more time-limited. Then set the cache timeout to some suitably long period of time. Here, we set the timeout to ten million seconds or around 16 weeks, enough for a semester.

    git config --global credential.helper 'cache --timeout=10000000'

This still may not make your PAT available to R packages. In this case, you may need to use the older, less secure approach of storing your PAT in `.Renviron`. `usethis::edit_r_environ()` opens that file for editing.

    usethis::edit_r_environ()

Add a line like this, but substitute your PAT:

    GITHUB_PAT=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Make sure this file ends in a newline! Lack of a newline can lead to silent failure to load startup files, which can be tricky to debug. Take care that this file is not accidentally pushed to the cloud, e.g. Google Drive or GitHub.

Restart R for changes in `.Renviron` to take effect.

[Can you hear me now?](connect-intro.html)

[<span class="header-section-number">10</span> Set up keys for SSH](ssh-keys.html)

On this page
------------

-   <a href="https-pat.html#https-pat" class="nav-link"><span class="header-section-number">9</span> Personal access token for HTTPS</a>
-   <a href="https-pat.html#tldr" class="nav-link"><span class="header-section-number">9.1</span> TL;DR</a>
-   <a href="https-pat.html#https-vs-ssh" class="nav-link"><span class="header-section-number">9.2</span> HTTPS versus SSH</a>
    -   <a href="https-pat.html#url-determines-protocol" class="nav-link"><span class="header-section-number">9.2.1</span> URL determines the protocol</a>
-   <a href="https-pat.html#get-a-pat" class="nav-link"><span class="header-section-number">9.3</span> Generate a personal access token (PAT)</a>
-   <a href="https-pat.html#store-pat" class="nav-link"><span class="header-section-number">9.4</span> Store your PAT</a>
    -   <a href="https-pat.html#call-an-r-function-to-store-your-credentials" class="nav-link"><span class="header-section-number">9.4.1</span> Call an R function to store your credentials</a>
    -   <a href="https-pat.html#store-credentials-through-organic-git-use" class="nav-link"><span class="header-section-number">9.4.2</span> Store credentials through organic Git use</a>
-   <a href="https-pat.html#pat-troubleshooting" class="nav-link"><span class="header-section-number">9.5</span> HTTPS PAT problems and solutions</a>
    -   <a href="https-pat.html#valid-pat-gets-stored-but-later-told-the-pat-is-invalid" class="nav-link"><span class="header-section-number">9.5.1</span> Valid PAT gets stored, but later told the PAT is invalid</a>
    -   <a href="https-pat.html#pat-doesnt-persist-on-macos-or-windows" class="nav-link"><span class="header-section-number">9.5.2</span> PAT doesn’t persist on macOS or Windows</a>
    -   <a href="https-pat.html#pat-doesnt-persist-on-linux" class="nav-link"><span class="header-section-number">9.5.3</span> PAT doesn’t persist on Linux</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/connect-https-pat.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/connect-https-pat.Rmd" id="book-edit">Edit this page <em></em></a>
