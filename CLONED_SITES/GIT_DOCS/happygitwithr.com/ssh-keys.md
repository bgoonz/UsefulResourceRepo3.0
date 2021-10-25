<a href="ssh-keys.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   <a href="ssh-keys.html" class="active"><span class="header-section-number">10</span> Set up keys for SSH</a>
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

<span class="header-section-number">10</span> Set up keys for SSH<a href="ssh-keys.html#ssh-keys" class="anchor"><em></em></a>
==============================================================================================================================

When we interact with a remote Git server, such as GitHub, we have to include credentials in the request. This proves we are a specific GitHub user, who’s allowed to do whatever we’re asking to do.

Git can communicate with a remote server using one of two protocols, HTTPS or SSH, and the different protocols use different credentials.

Here we describe the credential setup for the SSH protocol. If you’re not sure whether to use HTTPS or SSH, please read [HTTPS versus SSH](https-pat.html#https-vs-ssh). From now on, we assume you’ve made an intentional choice to set up SSH keys.

<span class="header-section-number">10.1</span> SSH keys<a href="ssh-keys.html#ssh-keys-1" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------

SSH keys provide a more secure way of logging into a server than using a password alone. While a password can eventually be cracked with a brute force attack, SSH keys are nearly impossible to decipher by brute force alone. Generating a key pair provides you with two long strings of characters: a public and a private key. You can place the public key on any server (like GitHub!), and then unlock it by connecting to it with a client that already has the private key (your computer!). When the two match up, the system unlocks without the need for a password. You can increase security even more by protecting the private key with a passphrase.

Adapted from instructions provided by [GitHub](https://help.github.com/categories/ssh/) and [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2).

<span class="header-section-number">10.2</span> SSH outline and advice<a href="ssh-keys.html#ssh-outline-and-advice" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

High level overview of what must happen:

-   Create a public-private SSH key pair. Literally, 2 special files, in a special place. Optionally, encrypt the private key with a passphrase (best practice).
-   Add the private key to your ssh-agent. If you protected it with a passphrase, you may have additional configuration.
-   Add your public key to your GitHub profile.

Advice:

-   If you are new to programming and the shell, you’ll probably find HTTPS easier at first (chapter [9](https-pat.html#https-pat)). You can always switch to SSH later. You can use one method from computer A and the other from computer B.
-   You should swap out your SSH keys periodically. Something like once a year.
-   It’s best practice to protect your private key with a passphrase. This can make setup and usage harder, so if you’re not up for that (yet), either don’t use a passphrase or seriously consider using HTTPS instead.
-   Don’t do weird gymnastics in order to have only one key pair, re-used over multiple computers. You should probably have one key per computer (I do this). Some people even have one key per computer, per service (I do not do this).
-   It is normal to associate multiple public keys with your GitHub account. For example, one public key for each computer you connect with.

<span class="header-section-number">10.3</span> Do you already have keys?<a href="ssh-keys.html#do-you-already-have-keys" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------

You can check this from RStudio or from the shell.

Global advice: if you do have existing keys, but have no clue where they came from or why you created them, you should seriously consider creating a new SSH key pair. It’s up to you to figure out whether/how to delete the old ones. But don’t let that keep you from creating new keys and moving forward.

### <span class="header-section-number">10.3.1</span> From RStudio<a href="ssh-keys.html#from-rstudio" class="anchor"><em></em></a>

Go to *Tools &gt; Global Options…&gt; Git/SVN*. If you see something like `~/.ssh/id_rsa` in the SSH RSA Key box, you definitely have existing keys.

Caveat: RStudio only looks for a key pair named `id_rsa` and `id_rsa.pub`. This makes sense, because historically that has been the most common.

However, these days both GitHub and GitLab are encouraging users to generate SSH keys with the Ed25519 algorithm, which results in a key pair named `id_ed25519` and `id_ed25519.pub`. At the time of writing, RStudio will not display such a key pair, which can be confusing. Therefore, it’s probably a good idea to also check for existing keys in the shell.

### <span class="header-section-number">10.3.2</span> From the shell<a href="ssh-keys.html#from-the-shell" class="anchor"><em></em></a>

Go to the shell (appendix [A](shell.html#shell)).

List existing keys:

    ls -al ~/.ssh/

If you are told `~/.ssh/` doesn’t exist, you don’t have SSH keys!

If you see a pair of files like `id_rsa.pub` and `id_rsa` or `id_ed25519` and `id_ed25519.pub`, you have a key pair already. The typical pattern is `id_FOO.pub` (the public key) and `id_FOO` (the private key), where `FOO` reflects the key type. If you’re happy to stick with your existing keys, skip to the sections about adding a key to the ssh-agent and GitHub.

<span class="header-section-number">10.4</span> Create an SSH key pair<a href="ssh-keys.html#create-an-ssh-key-pair" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

### <span class="header-section-number">10.4.1</span> Option 1: Set up from RStudio<a href="ssh-keys.html#option-1-set-up-from-rstudio" class="anchor"><em></em></a>

Go to *Tools &gt; Global Options…&gt; Git/SVN &gt; Create RSA Key…*.

RStudio prompts you for a passphrase. It is optional, but also a best practice. Configuring your system for smooth operation with a passphrase-protected key introduces more moving parts. If you’re completely new at all this, skip the passphrase (or use HTTPS!) and implement it next time, when you are more comfortable with system configuration. I did not use a passphrase at first, but I do now, and record it in a password manager.

Click “Create” and RStudio will generate an SSH key pair, stored in the files `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`.

Note that RStudio currently only generates RSA keys, whereas the standard recommendation by GitHub and GitLab is to use Ed25519 keys. If you want to comply with that advice, generate your keys in the shell for now.

### <span class="header-section-number">10.4.2</span> Option 2: Set up from the shell<a href="ssh-keys.html#option-2-set-up-from-the-shell" class="anchor"><em></em></a>

Create the key pair like so, but substitute a comment that means something to you, especially if you’ll have multiple SSH keys in your life. Consider the email associated with your GitHub account or the name of your computer or some combination, e.g. `your_email@example.com` or `macbook-pro` or `jane-2020-macbook-pro`.

    ssh-keygen -t ed25519 -C "DESCRIPTIVE-COMMENT"

If it appears that your system is too old to support the Ed25519 algorithm, do this instead:

    ssh-keygen -t rsa -b 4096 -C "DESCRIPTIVE-COMMENT"

Accept the proposal to save the key in the default location. Just press Enter here:

    Enter file in which to save the key (/Users/jenny/.ssh/id_ed25519):

You have the option to protect the key with a passphrase. It is optional, but also a best practice. Configuring your system for smooth operation with a passphrase-protected key introduces more moving parts. If you’re completely new at all this, skip the passphrase and implement it next time, when you are more comfortable with system configuration. I did not use a passphrase at first, but I do now, and record it in a password manager.

    Enter passphrase (empty for no passphrase):
    Enter same passphrase again: 

The process should complete now and should have looked like this:

    ~ % ssh-keygen -t ed25519 -C "jenny-2020-mbp"        
    Generating public/private ed25519 key pair.
    Enter file in which to save the key (/Users/jenny/.ssh/id_ed25519): 
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /Users/jenny/.ssh/id_ed25519.
    Your public key has been saved in /Users/jenny/.ssh/id_ed25519.pub.
    The key fingerprint is:
    SHA256:XUEaY/elhcQJz3M9jx/SdC0zh10lCA7uNpqgkm5G/R0 jenny-2020-mbp
    The key's randomart image is:
    +--[ED25519 256]--+
    |        . =o==oo*|
    |       . + =.=+B+|
    |        . o . @oB|
    |       . . .  oO+|
    |  . .   S .  ..o.|
    | o o . E .    ...|
    |+ . . + .       .|
    |.+   . .         |
    |o.               |
    +----[SHA256]-----+

### <span class="header-section-number">10.4.3</span> Add key to ssh-agent<a href="ssh-keys.html#add-key-to-ssh-agent" class="anchor"><em></em></a>

Tell your ssh-agent about the key and, especially, set it up to manage the passphrase, if you chose to set one.

Things get a little OS-specific around here. When in doubt, consult [GitHub’s instructions for SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh), which is kept current for Mac, Windows, and Linux. It also accounts for more unusual situations than I can.

#### <span class="header-section-number">10.4.3.1</span> Mac OS<a href="ssh-keys.html#mac-os" class="anchor"><em></em></a>

Make sure ssh-agent is enabled. Here’s what success look like (the `pid` will vary):

    ~ % eval "$(ssh-agent -s)"
    Agent pid 15360

Sometimes this fails like so:

    ~ % eval "$(ssh-agent -s)"
    mkdtemp: private socket dir: No such file or directory

A similar failure might be reported as “Permission denied”. You should try again, but as the superuser. Don’t forget to use `exit` to go back to your normal user account, when you are done!

    ~ % sudo su
    Password:
    sh-3.2# eval "$(ssh-agent -s)"
    Agent pid 15385
    sh-3.2# exit
    exit

Add your key to the ssh agent. If you set a passphrase, you’ll be challenged for it here. Give it. The `-K` option stores your passphrase in the keychain.

    ~ % ssh-add -K ~/.ssh/id_ed25519
    Enter passphrase for /Users/jenny/.ssh/id_ed25519: 
    Identity added: /Users/jenny/.ssh/id_ed25519 (jenny-2020-mbp)

If you’re on macOS Sierra 10.12.2 and higher, you need to do one more thing. Create a file `~/.ssh/config` with these contents:

    Host *
      AddKeysToAgent yes
      UseKeychain yes
      IdentityFile ~/.ssh/id_ed25519

You can omit the line about `UseKeychain` if you didn’t use a passphrase. But if you did, this should store your passphrase *persistently* in the keychain. Otherwise, you will have to enter it every time you log in. Useful StackOverflow thread: [How can I permanently add my SSH private key to Keychain so it is automatically available to ssh?](https://apple.stackexchange.com/questions/48502/how-can-i-permanently-add-my-ssh-private-key-to-keychain-so-it-is-automatically).

#### <span class="header-section-number">10.4.3.2</span> Windows<a href="ssh-keys.html#windows" class="anchor"><em></em></a>

In a Git Bash shell, make sure ssh-agent is running:

    $ eval $(ssh-agent -s)
    Agent pid 59566

Add your key, substituting the correct name for your key.

    $ ssh-add ~/.ssh/id_ed25519

#### <span class="header-section-number">10.4.3.3</span> Linux<a href="ssh-keys.html#linux-1" class="anchor"><em></em></a>

In a shell, make sure ssh-agent is running:

    $ eval "$(ssh-agent -s)"
    Agent pid 59566

Add your key, substituting the correct name for your key.

    ssh-add ~/.ssh/id_ed25519

<span class="header-section-number">10.5</span> Provide public key to GitHub<a href="ssh-keys.html#provide-public-key-to-github" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

Now we store a copy of your public key on GitHub.

### <span class="header-section-number">10.5.1</span> RStudio to clipboard<a href="ssh-keys.html#rstudio-to-clipboard" class="anchor"><em></em></a>

Go to *Tools &gt; Global Options…&gt; Git/SVN*. If your key pair is named like `id_rsa.pub` and `id_rsa`, RStudio will see it and offer to “View public key”. Do that and accept the offer to copy to your clipboard.

If your key pair is named differently, such as `id_ed25519.pub` and `id_ed25519`, you’ll have to copy the public key another way.

### <span class="header-section-number">10.5.2</span> Shell to clipboard<a href="ssh-keys.html#shell-to-clipboard" class="anchor"><em></em></a>

Copy the public key onto your clipboard. For example, open `~/.ssh/id_ed25519.pub` in an editor and copy the contents to your clipboard. Or do one of the following at the command line:

-   Mac OS: `pbcopy < ~/.ssh/id_ed25519.pub`
-   Windows: `clip < ~/.ssh/id_ed25519.pub`
-   Linux: `xclip -sel clip < ~/.ssh/id_ed25519.pub`

Linux: if needed, install `xclip` via `apt-get` or `yum`. For example, `sudo apt-get install xclip`.

### <span class="header-section-number">10.5.3</span> On GitHub<a href="ssh-keys.html#on-github" class="anchor"><em></em></a>

Now we register the public key with GitHub. Click on your profile pic in upper right corner and go to *Settings &gt; SSH and GPG keys*. Click “New SSH key”. Paste your public key in the “Key” box. Give it an informative title, presumably repeating the descriptive comment you used above, during key creation. Click “Add SSH key”.

In theory, we’re done! You can use [`ssh -T git@github.com`](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection) to test your connection to GitHub. If you’re not sure what to make of the output, see the link for details. Of course, the best test is to work through the realistic usage examples elsewhere in this guide.

<span class="header-section-number">10.6</span> Troubleshooting<a href="ssh-keys.html#ssh-troubleshooting" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------

### <span class="header-section-number">10.6.1</span> HTTPS URL when you meant to use SSH<a href="ssh-keys.html#https-url-when-you-meant-to-use-ssh" class="anchor"><em></em></a>

If you think you have SSH set up correctly and yet you are still challenged for credentials, consider this: for the repo in question, have you possibly set up GitHub, probably called `origin`, as an HTTPS remote, instead of SSH?

How to see the remote URL(s) associated with the current repo in the shell:

    git remote -v

An SSH remote will look like this:

    git@github.com:USERNAME/REPOSITORY.git

whereas an HTTPS remote will look like this:

    https://github.com/USERNAME/REPOSITORY.git

You can fix this with `git remote set-url`, which is demonstrated in [URL determines the protocol](https-pat.html#url-determines-protocol).

### <span class="header-section-number">10.6.2</span> git2r – or some other tool – can’t find SSH keys on Windows<a href="ssh-keys.html#git2r-or-some-other-tool-cant-find-ssh-keys-on-windows" class="anchor"><em></em></a>

Have you seen this error message?

    Error in .local(object, ...) : 
      Error in 'git2r_push': error authenticating: failed connecting agent

We’ve seen it when working with Git/GitHub from R via the [git2r](https://cran.r-project.org/web/packages/git2r/index.html) package.

The root cause is confusion about the location of `.ssh/` on Windows. R’s idea of your home directory on Windows often differs from the default location of config files for Git and ssh, such as `.ssh/`. On \*nix systems, these generally coincide and there’s no problem.

Two important directories on Windows are the user’s HOME and USERPROFILE. R usually associates `~` with HOME, but Git and ssh often consult USERPROFILE for their config files. On my Windows 10 VM, I see:

    normalizePath("~")
    #> [1] "C:\\Users\\JennyVM\\Documents"

    as.list(Sys.getenv(
      c("HOME", "USERPROFILE")
    ))
    #> $HOME
    #> [1] "C:/Users/JennyVM/Documents"
    #> 
    #> $USERPROFILE
    #> [1] "C:\\Users\\JennyVM"

    list.files(
      Sys.getenv("USERPROFILE"),
      pattern = "ssh|git",
      include.dirs = TRUE,
      all.files = TRUE
    )
    #> [1] ".gitconfig" ".ssh"

Two workarounds:

-   Tell git2r explicitly where to find your public and private key and pass the resulting `cred` object to your git2r calls.

        cred <- git2r::cred_ssh_key(
          publickey = "~/../.ssh/id_rsa.pub",
          privatekey = "~/../.ssh/id_rsa"
        )

-   [Create a symbolic link](https://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/) so that `.ssh/` in R’s home directory points to your actual `.ssh/` directory. Example contributed by Ian Lyttle on Windows 7 using Command Prompt:

        MKLINK /D "C:\Users\username\Documents\.ssh" "C:\Users\username\.ssh"

Finally, if git2r seems unable to get your SSH passphrase from ssh-agent, install the getPass package:

    install.packages("getPass")

and git2r should launch a popup where you can enter your passphrase. Thanks to Ian Lyttle for this tip.

This link provides a great explanation of the uncertainty about where `.ssh/` and user’s `.gitconfig` are located on Windows: [git on Windows - location of configuration files](https://www.onwebsecurity.com/configuration/git-on-windows-location-of-global-configuration-file.html). Bottom line: place your config and keys where your main tool expects them to be and create symbolic links to help other tools find this stuff.

### <span class="header-section-number">10.6.3</span> Other<a href="ssh-keys.html#other" class="anchor"><em></em></a>

Other things to double-check:

-   Did you add the SSH to your ssh-agent?
-   Did you configure Mac OS Sierra or High Sierra to persistently store your passphrase in the keychain?
-   Did you add the public key to GitHub?

[<span class="header-section-number">9</span> Personal access token for HTTPS](https-pat.html)

[<span class="header-section-number">11</span> Connect to GitHub](push-pull-github.html)

On this page
------------

-   <a href="ssh-keys.html#ssh-keys" class="nav-link"><span class="header-section-number">10</span> Set up keys for SSH</a>
-   <a href="ssh-keys.html#ssh-keys-1" class="nav-link"><span class="header-section-number">10.1</span> SSH keys</a>
-   <a href="ssh-keys.html#ssh-outline-and-advice" class="nav-link"><span class="header-section-number">10.2</span> SSH outline and advice</a>
-   <a href="ssh-keys.html#do-you-already-have-keys" class="nav-link"><span class="header-section-number">10.3</span> Do you already have keys?</a>
    -   <a href="ssh-keys.html#from-rstudio" class="nav-link"><span class="header-section-number">10.3.1</span> From RStudio</a>
    -   <a href="ssh-keys.html#from-the-shell" class="nav-link"><span class="header-section-number">10.3.2</span> From the shell</a>
-   <a href="ssh-keys.html#create-an-ssh-key-pair" class="nav-link"><span class="header-section-number">10.4</span> Create an SSH key pair</a>
    -   <a href="ssh-keys.html#option-1-set-up-from-rstudio" class="nav-link"><span class="header-section-number">10.4.1</span> Option 1: Set up from RStudio</a>
    -   <a href="ssh-keys.html#option-2-set-up-from-the-shell" class="nav-link"><span class="header-section-number">10.4.2</span> Option 2: Set up from the shell</a>
    -   <a href="ssh-keys.html#add-key-to-ssh-agent" class="nav-link"><span class="header-section-number">10.4.3</span> Add key to ssh-agent</a>
-   <a href="ssh-keys.html#provide-public-key-to-github" class="nav-link"><span class="header-section-number">10.5</span> Provide public key to GitHub</a>
    -   <a href="ssh-keys.html#rstudio-to-clipboard" class="nav-link"><span class="header-section-number">10.5.1</span> RStudio to clipboard</a>
    -   <a href="ssh-keys.html#shell-to-clipboard" class="nav-link"><span class="header-section-number">10.5.2</span> Shell to clipboard</a>
    -   <a href="ssh-keys.html#on-github" class="nav-link"><span class="header-section-number">10.5.3</span> On GitHub</a>
-   <a href="ssh-keys.html#ssh-troubleshooting" class="nav-link"><span class="header-section-number">10.6</span> Troubleshooting</a>
    -   <a href="ssh-keys.html#https-url-when-you-meant-to-use-ssh" class="nav-link"><span class="header-section-number">10.6.1</span> HTTPS URL when you meant to use SSH</a>
    -   <a href="ssh-keys.html#git2r-or-some-other-tool-cant-find-ssh-keys-on-windows" class="nav-link"><span class="header-section-number">10.6.2</span> git2r – or some other tool – can’t find SSH keys on Windows</a>
    -   <a href="ssh-keys.html#other" class="nav-link"><span class="header-section-number">10.6.3</span> Other</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/connect-ssh-keys.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/connect-ssh-keys.Rmd" id="book-edit">Edit this page <em></em></a>
