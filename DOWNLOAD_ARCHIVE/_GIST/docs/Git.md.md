# Git Reference:

---

By far, the most widely used modern version control system in the world today is Git. Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel. A staggering number of software projects rely on Git for version control, including commercial projects as well as open source. Developers who have worked with Git are well represented in the pool of available software development talent and it works well on a wide range of operating systems and IDEs (Integrated Development Environments).

Having a distributed architecture, Git is an example of a DVCS (hence Distributed Version Control System). Rather than have only one single place for the full version history of the software as is common in once-popular version control systems like CVS or Subversion (also known as SVN), in Git, every developer's working copy of the code is also a repository that can contain the full history of all changes.

In addition to being distributed, Git has been designed with performance, security and flexibility in mind.

## Performance

The raw performance characteristics of Git are very strong when compared to many alternatives. Committing new changes, branching, merging and comparing past versions are all optimized for performance. The algorithms implemented inside Git take advantage of deep knowledge about common attributes of real source code file trees, how they are usually modified over time and what the access patterns are.

Unlike some version control software, Git is not fooled by the names of the files when determining what the storage and version history of the file tree should be, instead, Git focuses on the file content itself. After all, source code files are frequently renamed, split, and rearranged. The object format of Git's repository files uses a combination of delta encoding (storing content differences), compression and explicitly stores directory contents and version metadata objects.

Being distributed enables significant performance benefits as well.

For example, say a developer, Alice, makes changes to source code, adding a feature for the upcoming 2.0 release, then commits those changes with descriptive messages. She then works on a second feature and commits those changes too. Naturally these are stored as separate pieces of work in the version history. Alice then switches to the version 1.3 branch of the same software to fix a bug that affects only that older version. The purpose of this is to enable Alice's team to ship a bug fix release, version 1.3.1, before version 2.0 is ready. Alice can then return to the 2.0 branch to continue working on new features for 2.0 and all of this can occur without any network access and is therefore fast and reliable. She could even do it on an airplane. When she is ready to send all of the individually committed changes to the remote repository, Alice can "push" them in one command.

## Security

Git has been designed with the integrity of managed source code as a top priority. The content of the files as well as the true relationships between files and directories, versions, tags and commits, all of these objects in the Git repository are secured with a cryptographically secure hashing algorithm called SHA1. This protects the code and the change history against both accidental and malicious change and ensures that the history is fully traceable.

With Git, you can be sure you have an authentic content history of your source code.

Some other version control systems have no protections against secret alteration at a later date. This can be a serious information security vulnerability for any organization that relies on software development.

## Flexibility

One of Git's key design objectives is flexibility. Git is flexible in several respects: in support for various kinds of nonlinear development workflows, in its efficiency in both small and large projects and in its compatibility with many existing systems and protocols.

Git has been designed to support branching and tagging as first-class citizens (unlike SVN) and operations that affect branches and tags (such as merging or reverting) are also stored as part of the change history. Not all version control systems feature this level of tracking.

## Version control with Git

Git is the best choice for most software teams today. While every team is different and should do their own analysis, here are the main reasons why version control with Git is preferred over alternatives:

### Git is good

Git has the functionality, performance, security and flexibility that most teams and individual developers need. These attributes of Git are detailed above. In side-by-side comparisons with most other alternatives, many teams find that Git is very favorable.

### Git is a de facto standard

Git is the most broadly adopted tool of its kind. This makes Git attractive for the following reasons. At Atlassian, nearly all of our project source code is managed in Git.

Vast numbers of developers already have Git experience and a significant proportion of college graduates may have experience with only Git. While some organizations may need to climb the learning curve when migrating to Git from another version control system, many of their existing and future developers do not need to be trained on Git.

In addition to the benefits of a large talent pool, the predominance of Git also means that many third party software tools and services are already integrated with Git including IDEs, and our own tools like DVCS desktop client [Sourcetree](http://www.sourcetreeapp.com/), issue and project tracking software, [Jira](https://www.atlassian.com/software/jira), and code hosting service, [Bitbucket](https://bitbucket.org/product).

If you are an inexperienced developer wanting to build up valuable skills in software development tools, when it comes to version control, Git should be on your list.

### Git is a quality open source project

Git is a very well supported open source project with over a decade of solid stewardship. The project maintainers have shown balanced judgment and a mature approach to meeting the long term needs of its users with regular releases that improve usability and functionality. The quality of the open source software is easily scrutinized and countless businesses rely heavily on that quality.

Git enjoys great community support and a vast user base. Documentation is excellent and plentiful, including books, tutorials and dedicated web sites. There are also podcasts and video tutorials.

Being open source lowers the cost for hobbyist developers as they can use Git without paying a fee. For use in open-source projects, Git is undoubtedly the successor to the previous generations of successful open source version control systems, SVN and CVS.

### Criticism of Git

One common criticism of Git is that it can be difficult to learn. Some of the terminology in Git will be novel to newcomers and for users of other systems, the Git terminology may be different, for example, `revert` in Git has a different meaning than in SVN or CVS. Nevertheless, Git is very capable and provides a lot of power to its users. Learning to use that power can take some time, however once it has been learned, that power can be used by the team to increase their development speed.

For those teams coming from a non-distributed VCS, having a central repository may seem like a good thing that they don't want to lose. However, while Git has been designed as a distributed version control system (DVCS), with Git, you can still have an official, canonical repository where all changes to the software must be stored. With Git, because each developer's repository is complete, their work doesn't need to be constrained by the availability and performance of the "central" server. During outages or while offline, developers can still consult the full project history. Because Git is flexible as well as being distributed, you can work the way you are accustomed to but gain the additional benefits of Git, some of which you may not even realise you're missing.

Now that you understand what version control is, what Git is and why software teams should use it, read on to discover the benefits Git can provide across the whole organization.

# Setting up a repository

[git init](https://www.atlassian.com/git/tutorials/setting-up-a-repository) [git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository) [git config](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

This tutorial provides an overview of how to set up a repository (repo) under Git version control. This resource will walk you through initializing a Git repository for a new or existing project. Included below are workflow examples of repositories both created locally and cloned from remote repositories. This guide assumes a basic familiarity with a command-line interface.

[![video thumbnail](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAABFJREFUKBVjYBgFoyFAhRAAAAJJAAFEkgypAAAAAElFTkSuQmCC)](https://www.youtube.com/watch?v=jUlT-zQ-mbk)

The high level points this guide will cover are:

- Initializing a new Git repo
- Cloning an existing Git repo
- Committing a modified version of a file to the repo
- Configuring a Git repo for remote collaboration
- Common Git version control commands

By the end of this module, you should be able to create a Git repo, use common Git commands, commit a modified file, view your project's history and configure a connection to a Git hosting service (Bitbucket).

## What is a Git repository?

A [Git repository](https://bitbucket.org/product/code-repository) is a virtual storage of your project. It allows you to save versions of your code, which you can access when needed.

## Initializing a new repository: git init

To create a new repo, you'll use the `git init` command. `git init` is a one-time command you use during the initial setup of a new repo. Executing this command will create a new `.git` subdirectory in your current working directory. This will also create a new main branch.

### Versioning an existing project with a new git repository

This example assumes you already have an existing project folder that you would like to create a repo within. You'll first `cd` to the root project folder and then execute the `git init` command.

```
cd /path/to/your/existing/code git init
```

Pointing `git init` to an existing project directory will execute the same initialization setup as mentioned above, but scoped to that project directory.

```
git init <project directory>
```

Visit the [git init](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init) page for a more detailed resource on `git init`.

## Cloning an existing repository: git clone

If a project has already been set up in a central repository, the clone command is the most common way for users to obtain a local development clone. Like `git init`, cloning is generally a one-time operation. Once a developer has obtained a working copy, all [version control](https://bitbucket.org/product/version-control-software) operations are managed through their local repository.

```
git clone <repo url>
```

`git clone` is used to create a copy or clone of remote repositories. You pass `git clone` a repository URL. Git supports a few different network protocols and corresponding URL formats. In this example, we'll be using the Git SSH protocol. Git SSH URLs follow a template of: `git@HOSTNAME:USERNAME/REPONAME.git`

An example Git SSH URL would be: `git@bitbucket.org:rhyolight/javascript-data-store.git` where the template values match:

- `HOSTNAME: bitbucket.org`
- `USERNAME: rhyolight`
- `REPONAME: javascript-data-store`

When executed, the latest version of the remote repo files on the main branch will be pulled down and added to a new folder. The new folder will be named after the REPONAME in this case `javascript-data-store`. The folder will contain the full history of the remote repository and a newly created main branch.

For more documentation on `git clone` usage and supported Git URL formats, visit the [git clone Page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone).

## Saving changes to the repository: git add and git commit

Now that you have a repository cloned or initialized, you can commit file version changes to it. The following example assumes you have set up a project at `/path/to/project`. The steps being taken in this example are:

- Change directories to `/path/to/project`
- Create a new file `CommitTest.txt` with contents ~"test content for git tutorial"~
- git add `CommitTest.txt` to the repository staging area
- Create a new commit with a message describing what work was done in the commit

```
cd /path/to/project echo "test content for git tutorial" >> CommitTest.txt git add CommitTest.txt git commit -m "added CommitTest.txt to the repo"
```

After executing this example, your repo will now have `CommitTest.txt` added to the history and will track future updates to the file.

This example introduced two additional git commands: `add` and `commit`. This was a very limited example, but both commands are covered more in depth on the [git add](https://www.atlassian.com/git/tutorials/saving-changes) and [git commit](https://www.atlassian.com/git/tutorials/saving-changes/git-commit) pages. Another common use case for `git add` is the `--all` option. Executing `git add --all` will take any changed and untracked files in the repo and add them to the repo and update the repo's working tree.

## Repo-to-repo collaboration: git push

It's important to understand that Git's idea of a "working copy" is very different from the working copy you get by checking out source code from an SVN repository. Unlike SVN, Git makes no distinction between the working copies and the central repository---they're all full-fledged [Git repositories](https://bitbucket.org/product/code-repository).

This makes collaborating with Git fundamentally different than with SVN. Whereas SVN depends on the relationship between the central repository and the working copy, Git's collaboration model is based on repository-to-repository interaction. Instead of checking a working copy into SVN's central repository, you push or pull commits from one repository to another.

Of course, there's nothing stopping you from giving certain Git repos special meaning. For example, by simply designating one Git repo as the "central" repository, it's possible to replicate a centralized workflow using Git. This is accomplished through conventions rather than being hardwired into the VCS itself.

### Bare vs. cloned repositories

If you used `git clone` in the previous "Initializing a new Repository" section to set up your local repository, your repository is already configured for remote collaboration. `git clone` will automatically configure your repo with a remote pointed to the Git URL you cloned it from. This means that once you make changes to a file and commit them, you can `git push` those changes to the remote repository.

If you used `git init` to make a fresh repo, you'll have no remote repo to push changes to. A common pattern when initializing a new repo is to go to a hosted Git service like Bitbucket and create a repo there. The service will provide a Git URL that you can then add to your local Git repository and `git push` to the hosted repo. Once you have created a remote repo with your service of choice you will need to update your local repo with a mapping. We discuss this process in the Configuration & Set Up guide below.

If you prefer to host your own remote repo, you'll need to set up a "Bare Repository." Both `git init` and `git clone` accept a `--bare` argument. The most common use case for bare repo is to create a remote central Git repository

## Configuration & set up: git config

Once you have a remote repo setup, you will need to add a remote repo url to your local `git config`, and set an upstream branch for your local branches. The `git remote` command offers such utility.

```
git remote add <remote_name> <remote_repo_url>
```

This command will map remote repository at  to a ref in your local repo under . Once you have mapped the remote repo you can push local branches to it.

```
git push -u <remote_name> <local_branch_name>
```

This command will push the local repo branch under `< local_branch_name >` to the remote repo at `< remote_name >`.

For more in-depth look at `git remote`, see the [`Git remote page`](https://www.atlassian.com/git/tutorials/syncing#git-remote).

In addition to configuring a remote repo URL, you may also need to set global Git configuration options such as username, or email. The `git config` command lets you configure your Git installation (or an individual repository) from the command line. This command can define everything from user info, to preferences, to the behavior of a repository. Several common configuration options are listed below.

Git stores configuration options in three separate files, which lets you scope options to individual repositories (local), user (Global), or the entire system (system):

- Local: `/.git/config` -- Repository-specific settings.
- Global: `/.gitconfig` -- User-specific settings. This is where options set with the --global flag are stored.
- System: `$(prefix)/etc/gitconfig` -- System-wide settings.

Define the author name to be used for all commits in the current repository. Typically, you'll want to use the `--global` flag to set configuration options for the current user.

```
git config --global user.name <name>
```

Define the author name to be used for all commits by the current user.

Adding the `--local` option or not passing a config level option at all, will set the `user.name` for the current local repository.

```
git config --local user.email <email>
```

Define the author email to be used for all commits by the current user.

```
git config --global alias.<alias-name> <git-command>
```

Create a shortcut for a Git command. This is a powerful utility to create custom shortcuts for commonly used git commands. A simplistic example would be:

```
git config --global alias.ci commit
```

This creates a `ci` command that you can execute as a shortcut to `git commit`. To learn more about git aliases visit the [git config page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config).

```
git config --system core.editor <editor>
```

Define the text editor used by commands like `git commit` for all users on the current machine. The `< editor >` argument should be the command that launches the desired editor (e.g., vi). This example introduces the `--system` option. The `--system` option will set the configuration for the entire system, meaning all users and repos on a machine. For more detailed information on configuration levels visit the [git config page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config).

```
git config --global --edit
```

Open the global configuration file in a text editor for manual editing. An in-depth guide on how to configure a text editor for git to use can be found on the [Git config page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config).

### Discussion

All configuration options are stored in plaintext files, so the `git config` command is really just a convenient command-line interface. Typically, you'll only need to configure a Git installation the first time you start working on a new development machine, and for virtually all cases, you'll want to use the `--global` flag. One important exception is to override the author email address. You may wish to set your personal email address for personal and open source repositories, and your professional email address for work-related repositories.

Git stores configuration options in three separate files, which lets you scope options to individual repositories, users, or the entire system:

- `/.git/config` -- Repository-specific settings.
- `~/.gitconfig` -- User-specific settings. This is where options set with the --global flag are stored.
- `$(prefix)/etc/gitconfig` -- System-wide settings.

When options in these files conflict, local settings override user settings, which override system-wide. If you open any of these files, you'll see something like the following:

```
[user] name = John Smith email = john@example.com [alias] st = status co = checkout br = branch up = rebase ci = commit [core] editor = vim
```

You can manually edit these values to the exact same effect as `git config`.

### Example

The first thing you'll want to do after installing Git is tell it your name/email and customize some of the default settings. A typical initial configuration might look something like the following:

Tell Git who you are `git config`

```
git --global user.name "John Smith" git config --global user.email john@example.com
```

Select your favorite text editor

```
git config --global core.editor vim
```

Add some SVN-like aliases

```
git config --global alias.st status git config --global alias.co checkout git config --global alias.br branch git config --global alias.up rebase git config --global alias.ci commit
```

This will produce the `~ /.gitconfig` file from the previous section. Take a more in-depth look at git config on the [git config page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config).

# git init

This page will explore the `git init` command in depth. By the end of this page you will be informed on the core functionality and extended feature set of `git init`. This exploration includes:

- `git init` options and usage
- `.git` directory overview
- custom `git init` directory environment values
- `git init` vs. `git clone`
- `git init` bare repositories
- `git init` templates

The `git init` command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project.

Executing `git init` creates a `.git` subdirectory in the current working directory, which contains all of the necessary Git metadata for the new repository. This metadata includes subdirectories for objects, refs, and template files. A `HEAD` file is also created which points to the currently checked out commit.

Aside from the `.git` directory, in the root directory of the project, an existing project remains unaltered (unlike SVN, Git doesn't require a `.git` subdirectory in every subdirectory).

By default, `git init` will initialize the Git configuration to the `.git` subdirectory path. The subdirectory path can be modified and customized if you would like it to live elsewhere. You can set the `$GIT_DIR` environment variable to a custom path and `git init` will initialize the Git configuration files there. Additionally you can pass the `--separate-git-dir` argument for the same result. A common use case for a separate `.git` subdirectory is to keep your system configuration "dotfiles" (`.bashrc`, `.vimrc`, etc.) in the home directory while keeping the `.git` folder elsewhere.

## Usage

Compared to SVN, the `git init` command is an incredibly easy way to create new version-controlled projects. Git doesn't require you to create a repository, import files, and check out a working copy. Additionally, Git does not require any pre-existing server or admin privileges. All you have to do is cd into your project subdirectory and run `git init`, and you'll have a fully functional Git repository.

```
git init
```

Transform the current directory into a Git repository. This adds a `.git` subdirectory to the current directory and makes it possible to start recording revisions of the project.

```
git init <directory>
```

Create an empty Git repository in the specified directory. Running this command will create a new subdirectory called containing nothing but the `.git` subdirectory.

If you've already run `git init` on a project directory and it contains a `.git` subdirectory, you can safely run `git init` again on the same project directory. It will not override an existing `.git` configuration.

### git init vs. git clone

A quick note: `git init` and `git clone` can be easily confused. At a high level, they can both be used to "initialize a new git repository." However, `git clone` is dependent on `git init`. `git clone` is used to create a copy of an existing repository. Internally, `git clone` first calls `git init` to create a new repository. It then copies the data from the existing repository, and checks out a new set of working files. Learn more on the [git clone page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone).

## Bare repositories --- git init --bare

```
git init --bare <directory>
```

Initialize an empty Git repository, but omit the working directory. Shared repositories should always be created with the `--bare` flag (see discussion below). Conventionally, repositories initialized with the `--bare` flag end in `.git`. For example, the bare version of a repository called `my-project` should be stored in a directory called `my-project.git`.

The `--bare` flag creates a repository that doesn't have a working directory, making it impossible to edit files and commit changes in that repository. You would create a bare repository to git push and git pull from, but never directly commit to it. Central repositories should always be created as bare repositories because pushing branches to a non-bare repository has the potential to overwrite changes. Think of `--bare` as a way to mark a repository as a storage facility, as opposed to a development environment. This means that for virtually all Git workflows, the central repository is bare, and developers local repositories are non-bare.

![Git Tutorial: Bare Repositories](https://wac-cdn.atlassian.com/dam/jcr:88f08a3d-f34e-4c8e-974c-a01f25b2eca1/01.svg?cdnVersion=1823)

The most common use case for  `git init --bare` is to create a remote central repository:

```
ssh <user>@<host> cd path/above/repo git init --bare my-project.git
```

First, you SSH into the server that will contain your central repository. Then, you navigate to wherever you'd like to store the project. Finally, you use the `--bare` flag to create a central storage repository. Developers would then clone `my-project.git` to create a local copy on their development machine.

## git init templates

```
git init <directory> --template=<template_directory>
```

Initializes a new Git repository and copies files from the   into the repository.

Templates allow you to initialize a new repository with a predefined `.git` subdirectory. You can configure a template to have default directories and files that will get copied to a new repository's `.git` subdirectory. The default Git templates usually reside in a `/usr/share/git-core/templates` directory but may be a different path on your machine.

The default templates are a good reference and example of how to utilize template features. A powerful feature of templates that's exhibited in the default templates is Git Hook configuration. You can create a template with predefined Git hooks and initialize your new git repositories with common hooks ready to go. Learn more about Git Hooks at the [Git Hook page](https://www.atlassian.com/git/tutorials/git-hooks).

## Configuration

All configurations of `git init` take a  argument. If you provide the , the command is run inside it. If this directory does not exist, it will be created. In addition to the options and configuration already discussed, `Git init` has a few other command line options. A full list of them follows:

`-Q`

`--QUIET`

Only prints "critical level" messages, Errors, and Warnings. All other output is silenced.

`--BARE`

Creates a bare repository. (See the "Bare Repositories" section above.)

`--TEMPLATE=`

Specifies the directory from which templates will be used. (See the "Git Init Templates" section above.)

`--SEPARATE-GIT-DIR=`

Creates a text file containing the path to . This file acts as a link to the `.git` directory. This is useful if you would like to store your `.git` directory on a separate location or drive from your project's working files. Some common use cases for `--separate-git-dir` are:

- To keep your system configuration "dotfiles" (`.bashrc, .vimrc`, etc.) in the home directory while keeping the `.git` folder elsewhere
- Your Git history has grown very large in disk size and you need to move it elsewhere to a separate high-capacity drive
- You want to have a Git project in a publicly accessible directory like `www:root`

You can call `git init --separate-git-dir` on an existing repository and the `.git dir` will be moved to the specified  path.

`--SHARED[=(FALSE|TRUE|UMASK|GROUP|ALL|WORLD|EVERYBODY|0XXX)]`

Set access permissions for the new repository. This specifies which users and groups using Unix-level permissions are allowed to push/pull to the repository.

## Examples

### Create a new git repository for an existing code base

```
cd /path/to/code \ git init \ git add . \ git commit
```

### Create a new bare repository

```
git init --bare /path/to/repo.git
```

### Create a git init template and initialize a new git repository from the template

```
mkdir -p /path/to/template \ echo "Hello World" >> /absolute/path/to/template/README \git init /new/repo/path --template=/absolute/path/to/template \ cd /new/repo/path \ cat /new/repo/path/README
```

# git clone

Here we'll examine the `git clone` command in depth. `git clone` is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository. In this page we'll discuss extended configuration options and common use cases of `git clone`. Some points we'll cover here are:

- Cloning a local or remote repository
- Cloning a bare repository
- Using shallow options to partially clone repositories
- Git URL syntax and supported protocols

On the [setting up a repository guide](https://www.atlassian.com/git/tutorials/setting-up-a-repository), we covered a basic use case of `git clone`. This page will explore more complex cloning and configuration scenarios.

## Purpose: repo-to-repo collaboration development copy

If a project has already been set up in a central repository, the `git clone` command is the most common way for users to obtain a development copy. Like `git init`, cloning is generally a one-time operation. Once a developer has obtained a working copy, all version control operations and collaborations are managed through their local repository.

### Repo-to-repo collaboration

It's important to understand that Git's idea of a "working copy" is very different from the working copy you get by checking out code from an SVN repository. Unlike SVN, Git makes no distinction between the working copy and the central repository---they're all full-fledged [Git repositories](https://bitbucket.org/product/code-repository).

This makes collaborating with Git fundamentally different than with SVN. Whereas SVN depends on the relationship between the central repository and the working copy, Git's collaboration model is based on repository-to-repository interaction. Instead of checking a working copy into SVN's central repository, you [push](https://www.atlassian.com/git/tutorials/syncing/git-push) or [pull](https://www.atlassian.com/git/tutorials/syncing/git-pull) commits from one repository to another.

![Git Tutorial: Repo to Working Copy Collaboration](https://wac-cdn.atlassian.com/dam/jcr:e5228129-76b1-4b2c-8f10-af789f2ea6c0/03.svg?cdnVersion=1823) ![Git Tutorial: Repo to Repo Collaboration](https://wac-cdn.atlassian.com/dam/jcr:5d68ce55-59a7-4840-a896-eb2014a9f17b/02.svg?cdnVersion=1823)

Of course, there's nothing stopping you from giving certain Git repos special meaning. For example, by simply designating one Git repo as the "central" repository, it's possible to replicate a [centralized workflow](https://www.atlassian.com/git/tutorials/comparing-workflows) using Git. The point is, this is accomplished through conventions rather than being hardwired into the VCS itself.

## Usage

`git clone` is primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location. The original repository can be located on the local filesystem or on remote machine accessible supported protocols. The `git clone` command copies an existing Git repository. This is sort of like SVN checkout, except the "working copy" is a full-fledged Git repository---it has its own history, manages its own files, and is a completely isolated environment from the original repository.

As a convenience, cloning automatically creates a remote connection called "origin" pointing back to the original repository. This makes it very easy to interact with a central repository. This automatic connection is established by creating Git refs to the remote branch heads under `refs/remotes/origin` and by initializing `remote.origin.url` and `remote.origin.fetch` configuration variables.

An example demonstrating using `git clone` can be found on the [setting up a repository guide](https://www.atlassian.com/git/tutorials/setting-up-a-repository). The example below demonstrates how to obtain a local copy of a central repository stored on a server accessible at `example.com` using the SSH username john:

```
git clone ssh://john@example.com/path/to/my-project.git cd my-project # Start working on the project
```

The first command initializes a new Git repository in the `my-project` folder on your local machine and populates it with the contents of the central repository. Then, you can cd into the project and start editing files, committing snapshots, and interacting with other repositories. Also note that the `.git` extension is omitted from the cloned repository. This reflects the non-bare status of the local copy.

### Cloning to a specific folder

```
git clone <repo> <directory>
```

Clone the repository located at `＜repo＞` into the folder called `~＜directory＞!` on the local machine.

### Cloning a specific tag

```
git clone --branch <tag> <repo>
```

Clone the repository located at `＜repo＞` and only clone the ref for `＜tag＞`.

### Shallow clone

```
git clone -depth=1 <repo>
```

Clone the repository located at `＜repo＞` and only clone the\
history of commits specified by the option depth=1. In this example a clone of `＜repo＞` is made and only the most recent commit is included in the new cloned Repo. Shallow cloning is most useful when working with repos that have an extensive commit history. An extensive commit history may cause scaling problems such as disk space usage limits and long wait times when cloning. A Shallow clone can help alleviate these scaling issues.

## Configuration options

### git clone -branch

The `-branch` argument lets you specify a specific branch to clone instead of the branch the remote `HEAD` is pointing to, usually the main branch. In addition you can pass a tag instead of branch for the same effect.

```
git clone -branch new_feature git://remoterepository.git
```

This above example would clone only the `new_feature` branch from the remote Git repository. This is purely a convenience utility to save you time from downloading the `HEAD` ref of the repository and then having to additionally fetch the ref you need.

### git clone -mirror vs. git clone -bare

#### git clone --bare

Similar to `git init --bare,` when the `-bare` argument is passed to `git clone,` a copy of the remote repository will be made with an omitted working directory. This means that a repository will be set up with the history of the project that can be pushed and pulled from, but cannot be edited directly. In addition, no remote branches for the repo will be configured with the `-bare` repository. Like `git init --bare,` this is used to create a hosted repository that developers will not edit directly.

#### git clone --mirror

Passing the `--mirror` argument implicitly passes the `--bare` argument as well. This means the behavior of `--bare` is inherited by `--mirror`. Resulting in a bare repo with no editable working files. In addition, `--mirror` will clone all the extended refs of the remote repository, and maintain remote branch tracking configuration. You can then run `git remote` update on the mirror and it will overwrite all refs from the origin repo. Giving you exact 'mirrored' functionality.

### Other configuration options

For a comprehensive list of other git clone options visit the [official Git documentation](https://git-scm.com/docs/git-clone). In this document, we'll touch on some other common options.

#### git clone --template

```
git clone --template=<template_directory> <repo location>
```

Clones the repo at `＜repo location＞` and applies the template from `＜template directory＞` to the newly created local branch. A thorough refrence on Git templates can be found on our [git init page](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init).

## Git URLs

Git has its own URL syntax which is used to pass remote repository locations to Git commands. Because `git clone` is most commonly used on remote repositories we will examine Git URL syntax here.

### Git URL protocols

**-SSH**

Secure Shell (SSH) is a ubiquitous authenticated network protocol that is commonly configured by default on most servers. Because SSH is an authenticated protocol, you'll need to establish credentials with the hosting server before connecting. `ssh://[user@]host.xz[:port]/path/to/repo.git/`

**- GIT**

A protocol unique to git. Git comes with a daemon that runs on port (9418). The protocol is similar to SSH however it has NO AUTHENTICATION. `git://host.xz[:port]/path/to/repo.git/`

**- HTTP**

Hyper text transfer protocol. The protocol of the web, most commonly used for transferring web page HTML data over the Internet. Git can be configured to communicate over HTTP `http[s]://host.xz[:port]/path/to/repo.git/`

## Summary

In this document we took a deep look at `git clone`. The most important takeaways are:

1\. `git clone` is used to create a copy of a target repo

2\. The target repo can be local or remote

3\. Git supports a few network protocols to connect to remote repos

4\. There are many different configuration options available that change the content of the clone

# git config

In this document, we'll take an in-depth look at the `git config` command. We briefly discussed `git config` usage on our [Setting up a Repository](https://www.atlassian.com/git/tutorials/setting-up-a-repository) page. The `git config` command is a convenience function that is used to set Git configuration values on a global or local project level. These configuration levels correspond to `.gitconfig` text files. Executing `git config` will modify a configuration text file. We'll be covering common configuration settings like email, username, and editor. We'll discuss Git aliases, which allow you to create shortcuts for frequently used Git operations. Becoming familiar with `git config` and the various Git configuration settings will help you create a powerful, customized Git workflow.

## Usage

The most basic use case for `git config` is to invoke it with a configuration name, which will display the set value at that name. Configuration names are dot delimited strings composed of a 'section' and a 'key' based on their hierarchy. For example: `user.email`

`git config user.email`

In this example, email is a child property of the user configuration block. This will return the configured email address, if any, that Git will associate with locally created commits.

### git config levels and files

Before we further discuss `git config` usage, let's take a moment to cover configuration levels. The `git config` command can accept arguments to specify which configuration level to operate on. The following configuration levels are available:

- `**--local**`

By default, `git config` will write to a local level if no configuration option is passed. Local level configuration is applied to the context repository `git config` gets invoked in. Local configuration values are stored in a file that can be found in the repo's .git directory: `.git/config`

- `**--global**`

Global level configuration is user-specific, meaning it is applied to an operating system user. Global configuration values are stored in a file that is located in a user's home directory. `~ /.gitconfig` on unix systems and `C:\Users\\.gitconfig` on windows

- `**--system**`

System-level configuration is applied across an entire machine. This covers all users on an operating system and all repos. The system level configuration file lives in a `gitconfig` file off the system root path. `$(prefix)/etc/gitconfig` on unix systems. On windows this file can be found at `C:\Documents and Settings\All Users\Application Data\Git\config` on Windows XP, and in `C:\ProgramData\Git\config` on Windows Vista and newer.

Thus the order of priority for configuration levels is: local, global, system. This means when looking for a configuration value, Git will start at the local level and bubble up to the system level.

### Writing a value

Expanding on what we already know about `git config`, let's look at an example in which we write a value:

`git config --global user.email "your_email@example.com"`

This example writes the value `your_email@example.com` to the configuration name `user.email`. It uses the `--global` flag so this value is set for the current operating system user.

## git config editor - core.editor

Many Git commands will launch a text editor to prompt for further input. One of the most common use cases for `git config` is configuring which editor Git should use. Listed below is a table of popular editors and matching `git config` commands:

| Editor                             | config command                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| Atom                               | `~ git config --global core.editor "atom --wait"~`                                                |
| emacs                              | `~ git config --global core.editor "emacs"~`                                                      |
| nano                               | `~ git config --global core.editor "nano -w"~`                                                    |
| vim                                | `~ git config --global core.editor "vim"~`                                                        |
| Sublime Text (Mac)                 | `~ git config --global core.editor "subl -n -w"~`                                                 |
| Sublime Text (Win, 32-bit install) | `~ git config --global core.editor "'c:/program files (x86)/sublime text 3/sublimetext.exe' -w"~` |
| Sublime Text (Win, 64-bit install) | `~ git config --global core.editor "'c:/program files/sublime text 3/sublimetext.exe' -w"~`       |
| Textmate                           | `~ git config --global core.editor "mate -w"~`                                                    |

## Merge tools

In the event of a merge conflict, Git will launch a "merge tool." By default, Git uses an internal implementation of the common Unix diff program. The internal Git diff is a minimal merge conflict viewer. There are many external third party merge conflict resolutions that can be used instead. For an overview of various merge tools and configuration, see our guide on [tips and tools to resolve conflits with Git](https://developer.atlassian.com/blog/2015/12/tips-tools-to-solve-git-conflicts/).

```
git config --global merge.tool kdiff3
```

## Colored outputs

Git supports colored terminal output which helps with rapidly reading Git output. You can customize your Git output to use a personalized color theme. The `git config` command is used to set these color values.

### `color.ui`

This is the master variable for Git colors. Setting it to false will disable all Git's colored terminal output.

`$ git config --global color.ui false`

By default, `color.ui` is set to auto which will apply colors to the immediate terminal output stream. The auto setting will omit color code output if the output stream is redirected to a file or piped to another process.

You can set the `color.ui` value to always which will also apply color code output when redirecting the output stream to files or pipes. This can unintentionally cause problems since the receiving pipe may not be expecting color-coded input.

### Git color values

In addition to `color.ui`, there are many other granular color settings. Like `color.ui`, these color settings can all be set to false, auto, or always. These color settings can also have a specific color value set. Some examples of supported color values are:

- normal
- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

Colors may also be specified as hexadecimal color codes like #ff0000, or ANSI 256 color values if your terminal supports it.

### Git color configuration settings

1\. `color.branch`

- Configures the output color of the Git branch command

2\. `color.branch.`<`slot`>

- This value is also applicable to Git branch output. <`slot`> is one of the following:
  - 1\. current: the current branch
  - 2\. local: a local branch
  - 3\. remote: a remote branch ref in refs/remotes
  - 4\. upstream: an upstream tracking branch
  - 5\. plain: any other ref

3\. `color.diff`

- Applies colors to `git diff`, `git log`, and `git show` output

4\. `color.diff`.<`slot`>

- Configuring a <`slot`> value under `color.diff` tells git which part of the patch to use a specific color on.
  - 1\. context: The context text of the diff. Git context is the lines of text content shown in a diff or patch that highlights changes.
  - 2\. plain: a synonym for context
  - 3\. meta: applies color to the meta information of the diff
  - 4\. frag: applies color to the "hunk header" or "function in hunk header"
  - 5\. old: applies a color to the removed lines in the diff
  - 6\. new: colors the added lines of the diff
  - 7\. commit: colors commit headers within the diff
  - 8\. whitespace: sets a color for any whitespace errors in a diff

5\. `color.decorate.`<`slot`>

- Customize the color for `git log --decorate` output. The supported <`slot`> values are: `branch`, `remoteBranch`, `tag`, `stash`, or `HEAD`. They are respectively applicable to local branches, remote-tracking branches, tags, stashed changes and `HEAD`.

6\. `color.grep`

- Applies color to the output of git grep.

7\. `color.grep.` <`slot`>

- Also applicable to git grep. The <`slot`> variable specifies which part of the grep output to apply color.
  - 1\. context: non-matching text in context lines
  - 2\. filename: filename prefix
  - 3\. function: function name lines
  - 4\. linenumber: line number prefix
  - 5\. match: matching text
  - 6\. matchContext: matching text in context lines
  - 7\. matchSelected: matching text in selected lines
  - 8\. selected: non-matching text in selected lines
  - 9\. separator: separators between fields on a line (:, -, and =) and between hunks (--)

8\. color.interactive

- This variable applies color for interactive prompts and displays. Examples are `git add --interactive` and `git clean --interactive `

9\. color.interactive.<`slot`>

- The <`slot`> variable can be specified to target more specific "interactive output". The available <`slot`> values are: prompt, header, help, error; and each act on the corresponding interactive output.

10\. `color.pager`

- Enables or disables colored output when the pager is in use

11\. `color.showBranch `

- Enables or disables color output for the git show branch command

`12\. color.status `

- A boolean value that enables or disables color output for Git status

`13\. color.status.<`slot`>`

Used to specify custom color for specified git status elements. <`slot`> supports the following values:

- 1\. header
  - Targets the header text of the status area
- 2\. added or updated
  - Both target files which are added but not committed
- `3\. changed`
  - Targets files that are modified but not added to the git index
- 4\. untracked
  - Targets files which are not tracked by Git
- 5\. branch
  - Applies color to the current branch
- 6\. nobranch
  - The color the "no branch" warning is shown in
- 7\. unmerged
  - Colors files which have unmerged changes

## Aliases

You may be familiar with the concept of aliases from your operating system command-line; if not, they're custom shortcuts that define which command will expand to longer or combined commands. Aliases save you the time and energy cost of typing frequently used commands. Git provides its own alias system. A common use case for Git aliases is shortening the commit command. Git aliases are stored in Git configuration files. This means you can use the `git config` command to configure aliases.

`git config --global alias.ci commit`

This example creates a ci alias for the `git commit` command. You can then invoke `git commit` by executing `git ci`. Aliases can also reference other aliases to create powerful combos.

`git config --global alias.amend ci --amend`

This example creates an alias amend which composes the ci alias into a new alias that uses `--amend flag`.

## Formatting & whitespace

Git has several "whitespace" features that can be configured to highlight whitespace issues when using git diff. The whitespace issues will be highlighted using the configured color `color.diff.whitespace`

The following features are enabled by default:

- `blank-at-eol` highlights orphan whitespaces at the line endings
- `space-before-tab` highlights a space character that appears before a tab character when indenting a line
- `blank-at-eof` highlights blank lines inserted at the end of a file

The following features are disabled by default

- `indent-with-non-tab` highlights a line that is indented with spaces instead of tabs
- `tab-in-indent` highlights an initial tab indent as an error
- `trailing-space` is shorthand for both blank-at-eol and blank-at-eof
- `cr-at-eol highlights` a carriage-return at the line endings
- `tabwidth=` defines how many character positions a tab occupies. The default value is 8. Allowed values are 1-63

## Summary

In this article, we covered the use of the git `config command`. We discussed how the command is a convince method for editing raw `git config` files on the filesystem. We looked at basic read and write operations for configuration options. We took a look at common config patterns:

- How to configure the Git editor
- How to override configuration levels
- How to reset configuration defaults
- How to customize git colors

![Undoing changes](https://wac-cdn.atlassian.com/dam/jcr:5c4cb0f2-856c-4d39-b014-9340ef1d05e4/hero.svg?cdnVersion=1823)

# Undoing Commits & Changes

[git checkout](https://www.atlassian.com/git/tutorials/undoing-changes) [git clean](https://www.atlassian.com/git/tutorials/undoing-changes) [git revert](https://www.atlassian.com/git/tutorials/undoing-changes) [git reset](https://www.atlassian.com/git/tutorials/undoing-changes) [git rm](https://www.atlassian.com/git/tutorials/undoing-changes)

In this section, we will discuss the available 'undo' Git strategies and commands. It is first important to note that Git does not have a traditional 'undo' system like those found in a word processing application. It will be beneficial to refrain from mapping Git operations to any traditional 'undo' mental model. Additionally, Git has its own nomenclature for 'undo' operations that it is best to leverage in a discussion. This nomenclature includes terms like reset, revert, checkout, clean, and more.

A fun metaphor is to think of Git as a timeline management utility. Commits are snapshots of a point in time or points of interest along the timeline of a project's history. Additionally, multiple timelines can be managed through the use of branches. When 'undoing' in Git, you are usually moving back in time, or to another timeline where mistakes didn't happen.

This tutorial provides all of the necessary skills to work with previous revisions of a software project. First, it shows you how to explore old commits, then it explains the difference between reverting public commits in the project history vs. resetting unpublished changes on your local machine.

## Finding what is lost: Reviewing old commits

The whole idea behind any version control system is to store "safe" copies of a project so that you never have to worry about irreparably breaking your code base. Once you've built up a project history of commits, you can review and revisit any commit in the history. One of the best utilities for reviewing the history of a Git repository is the `git log` command. In the example below, we use `[git log](https://www.atlassian.com/git/tutorials/git-log)` to get a list of the latest commits to a popular open-source graphics library.

```
git log --onelinee2f9a78fe Replaced FlyControls with OrbitControlsd35ce0178 Editor: Shortcuts panel Safari support.9dbe8d0cf Editor: Sidebar.Controls to Sidebar.Settings.Shortcuts. Clean up.05c5288fc Merge pull request #12612 from TyLindberg/editor-controls-panel0d8b6e74b Merge pull request #12805 from harto/patch-123b20c22e Merge pull request #12801 from gam0022/improve-raymarching-example-v2fe78029f1 Fix typo in documentation7ce43c448 Merge pull request #12794 from WestLangley/dev-x17452bb93 Merge pull request #12778 from OndrejSpanel/unitTestFixesb5c1b5c70 Merge pull request #12799 from dhritzkiv/patch-211b48ff4d2 Updated builds.88adbcdf6 WebVRManager: Clean up.2720fbb08 Merge pull request #12803 from dmarcos/parentPoseObject9ed629301 Check parent of poseObject instead of camera219f3eb13 Update GLTFLoader.js15f13bb3c Update GLTFLoader.js6d9c22a3b Update uniforms only when onWindowResize881b25b58 Update ProjectionMatrix on change aspect
```

Each commit has a unique SHA-1 identifying hash. These IDs are used to travel through the committed timeline and revisit commits. By default, `git log` will only show commits for the currently selected branch. It is entirely possible that the commit you're looking for is on another branch. You can view all commits across all branches by executing `git log --branches=*`. The command `[git branch](https://www.atlassian.com/git/tutorials/using-branches)` is used to view and visit other branches. Invoking the command, `git branch -a` will return a list of all known branch names. One of these branch names can then be logged using `git log`.

When you have found a commit reference to the point in history you want to visit, you can utilize the `git checkout` command to visit that commit. `Git checkout` is an easy way to "load" any of these saved snapshots onto your development machine. During the normal course of development, the `HEAD` usually points to `main` or some other local branch, but when you check out a previous commit, `HEAD` no longer points to a branch---it points directly to a commit. This is called a "detached `HEAD`" state, and it can be visualized as the following:

![Git Tutorial: Checking out a previous commit](https://wac-cdn.atlassian.com/dam/jcr:9b234e0d-ee33-4463-ac14-298c9559015d/01%20Checking%20out%20a%20previous%20commit.svg?cdnVersion=1823)

Checking out an old file does not move the `HEAD` pointer. It remains on the same branch and same commit, avoiding a 'detached head' state. You can then commit the old version of the file in a new snapshot as you would any other changes. So, in effect, this usage of `git checkout` on a file, serves as a way to revert back to an old version of an individual file. For more information on these two modes visit the `[git checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)` page

## Viewing an old revision

This example assumes that you've started developing a crazy experiment, but you're not sure if you want to keep it or not. To help you decide, you want to take a look at the state of the project before you started your experiment. First, you'll need to find the ID of the revision you want to see.

```
git log --oneline
```

Let's say your project history looks something like the following:

```
b7119f2 Continue doing crazy things872fa7e Try something crazya1e8fb5 Make some important changes to hello.txt435b61d Create hello.txt9773e52 Initial import
```

You can use `git checkout` to view the "Make some import changes to hello.txt" commit as follows:

```
git checkout a1e8fb5
```

This makes your working directory match the exact state of the `a1e8fb5` commit. You can look at files, compile the project, run tests, and even edit files without worrying about losing the current state of the project. Nothing you do in here will be saved in your repository. To continue developing, you need to get back to the "current" state of your project:

```
git checkout main
```

This assumes that you're developing on the default `main` branch. Once you're back in the `main` branch, you can use either `[git revert ](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)`or `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)` to undo any undesired changes.

## Undoing a committed snapshot

There are technically several different strategies to 'undo' a commit. The following examples will assume we have a commit history that looks like:

```
git log --oneline872fa7e Try something crazya1e8fb5 Make some important changes to hello.txt435b61d Create hello.txt9773e52 Initial import
```

We will focus on undoing the `872fa7e Try something crazy` commit. Maybe things got a little too crazy.

## How to undo a commit with git checkout

Using the `git checkout` command we can checkout the previous commit, `a1e8fb5,` putting the repository in a state before the crazy commit happened. Checking out a specific commit will put the repo in a "detached HEAD" state. This means you are no longer working on any branch. In a detached state, any new commits you make will be orphaned when you change branches back to an established branch. Orphaned commits are up for deletion by Git's garbage collector. The garbage collector runs on a configured interval and permanently destroys orphaned commits. To prevent orphaned commits from being garbage collected, we need to ensure we are on a branch.

From the detached HEAD state, we can execute `git checkout -b new_branch_without_crazy_commit`. This will create a new branch named `new_branch_without_crazy_commit` and switch to that state. The repo is now on a new history timeline in which the `872fa7e` commit no longer exists. At this point, we can continue work on this new branch in which the `872fa7e` commit no longer exists and consider it 'undone'. Unfortunately, if you need the previous branch, maybe it was your `main` branch, this undo strategy is not appropriate. Let's look at some other 'undo' strategies. For more information and examples review our in-depth `[git checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)` discussion.

## How to undo a public commit with git revert

Let's assume we are back to our original commit history example. The history that includes the `872fa7e` commit. This time let's try a revert 'undo'. If we execute `git revert HEAD`, Git will create a new commit with the inverse of the last commit. This adds a new commit to the current branch history and now makes it look like:

```
git log --onelinee2f9a78 Revert "Try something crazy"872fa7e Try something crazya1e8fb5 Make some important changes to hello.txt435b61d Create hello.txt9773e52 Initial import
```

At this point, we have again technically 'undone' the `872fa7e` commit. Although `872fa7e` still exists in the history, the new `e2f9a78` commit is an inverse of the changes in `872fa7e`. Unlike our previous checkout strategy, we can continue using the same branch. This solution is a satisfactory undo. This is the ideal 'undo' method for working with public shared repositories. If you have requirements of keeping a curated and minimal Git history this strategy may not be satisfactory.

## How to undo a commit with git reset

For this undo strategy we will continue with our working example. `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)` is an extensive command with multiple uses and functions. If we invoke `git reset --hard a1e8fb5` the commit history is reset to that specified commit. Examining the commit history with `git log` will now look like:

```
git log --onelinea1e8fb5 Make some important changes to hello.txt435b61d Create hello.txt9773e52 Initial import
```

The log output shows the `e2f9a78` and `872fa7e` commits no longer exist in the commit history. At this point, we can continue working and creating new commits as if the 'crazy' commits never happened. This method of undoing changes has the cleanest effect on history. Doing a reset is great for local changes however it adds complications when working with a shared remote repository. If we have a shared remote repository that has the `872fa7e` commit pushed to it, and we try to `git push` a branch where we have reset the history, Git will catch this and throw an error. Git will assume that the branch being pushed is not up to date because of it's missing commits. In these scenarios, `git revert` should be the preferred undo method.

## Undoing the last commit

In the previous section, we discussed different strategies for undoing commits. These strategies are all applicable to the most recent commit as well. In some cases though, you might not need to remove or reset the last commit. Maybe it was just made prematurely. In this case you can amend the most recent commit. Once you have made more changes in the working directory and staged them for commit by using `[git add](https://www.atlassian.com/git/tutorials/saving-changes)`, you can execute `git commit --amend`. This will have Git open the configured system editor and let you modify the last commit message. The new changes will be added to the amended commit.

## Undoing uncommitted changes

Before changes are committed to the repository history, they live in the staging index and the working directory. You may need to undo changes within these two areas. The staging index and working directory are internal Git state management mechanisms. For more detailed information on how these two mechanisms operate, visit the `[git reset](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)` page which explores them in depth.

## The working directory

The working directory is generally in sync with the local file system. To undo changes in the working directory you can edit files like you normally would using your favorite editor. Git has a couple utilities that help manage the working directory. There is the `[git clean](https://www.atlassian.com/git/tutorials/undoing-changes/git-clean)` command which is a convenience utility for undoing changes to the working directory. Additionally, `git reset` can be invoked with the `--mixed` or `--hard` options and will apply a reset to the working directory.

## The staging index

The `[git add](https://www.atlassian.com/git/tutorials/saving-changes)` command is used to add changes to the staging index. `Git reset` is primarily used to undo the staging index changes. A `--mixed` reset will move any pending changes from the staging index back into the working directory.

## Undoing public changes

When working on a team with remote repositories, extra consideration needs to be made when undoing changes. `Git reset` should generally be considered a 'local' undo method. A reset should be used when undoing changes to a private branch. This safely isolates the removal of commits from other branches that may be in use by other developers. Problems arise when a reset is executed on a shared branch and that branch is then pushed remotely with `git push`. Git will block the push in this scenario complaining that the branch being pushed is out of date from the remote branch as it is missing commits.

The preferred method of undoing shared history is `git revert`. A revert is safer than a reset because it will not remove any commits from a shared history. A revert will retain the commits you want to undo and create a new commit that inverts the undesired commit. This method is safer for shared remote collaboration because a remote developer can then pull the branch and receive the new revert commit which undoes the undesired commit.

## Summary

We covered many high-level strategies for undoing things in Git. It's important to remember that there is more than one way to 'undo' in a Git project. Most of the discussion on this page touched on deeper topics that are more thoroughly explained on pages specific to the relevant Git commands. The most commonly used 'undo' tools are `[git checkout,](https://www.atlassian.com/git/tutorials/using-branches/git-checkout) [git revert](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)`, and `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)`. Some key points to remember are:

- Once changes have been committed they are generally permanent
- Use `git checkout` to move around and review the commit history
- `git revert` is the best tool for undoing shared public changes
- `git reset` is best used for undoing local private changes
