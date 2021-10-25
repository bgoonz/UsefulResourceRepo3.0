<!--


---
 Handle multiple github accounts
excerpt: 'Have you ever came into a situation where you have to separate the work and personal github accounts and find it difficult to switch between those on same machine, this post will explain how to handle this situation'
date: 2018-12-12 21:05:00 IST
updated: 2018-12-12 21:05:00 IST
categories: github
tags: git, github
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

Have you ever came into a situation where you have to separate the work and personal github accounts and find it difficult to switch between those on same machine in a busy working day? This post is for **YOU!**. 

Recently when I started with my new client, they had a demand that we can't use our existing (personal) `github.com` account for work. We have to create a new github account with the new clients email address and use it. But github didn't allow to add same ssh key in the new account. We have to generate new ssh key.

Considering we have generated new ssh key and added to new github account there are couple of challenges.

* We have to use the new ssh key for anything related to client projects
* the committer and author email should be set to client email address
* if you are using [hub][hub], hub should be able to use the token from the new github account. 

# <a class="anchor" name="per-repo" href="#per-repo"><i class="anchor-icon"></i></a>Settings per repo

If the client has only one repo, the ssh key, committer email and author email can be set in git local config using `git config --local` command.

we can use [core.sshCommand][git_config_ssh] config to override the ssh command Eg:

```sh
git config --local core.sshCommand "ssh -i ~/.ssh/id_client"
```

Use [user.email][git_config_user_email] and [user.name][git_config_user_name] configs to override the committer email/name and author email/name.


```sh
git config --local user.email "email@client.com"
git config --local user.name "Your name"
```

As of now **hub** won't allow to override the config on [per repo basis][hub_per_repo_config_issue]

# <a class="anchor" name="multi-repo" href="#multi-repo"><i class="anchor-icon"></i></a>Settings for multi repo

Overriding the git settings per repo will be an issue if you have multiple client repos. When you clone a new repo you have to
remember to run these commands. 

To fix this we can utilize the **Environment variables** to override the settings.

[GIT_SSH_COMMAND][git_env_ssh] instead of `core.sshCommand`  
[GIT_AUTHOR_NAME][git_env_author_name] **/** `GIT_COMMITTER_NAME` instead of `user.name`  
`GIT_COMMITTER_EMAIL` **/** `GIT_AUTHOR_EMAIL` **/** `EMAIL` instead of `user.email`  

But setting these `ENV` variables for every git command is not possible. [direnv][direnv] to save us from this issue.

**Direnv** helps to load specific `ENV` variables while switching to directories and the best part is `direnv` is smart enough to load the
`ENV` in the parent folder if you directly switching to a child directly. The [setup][direnv_setup] instruction is available in it's README.

To work out this easily let's move all the repos of this client to a parent folder.

```
clientProjects
    |
    |-> Project 1
    |
    |-> Project 2
```

and inside the `clientProjects` let's have `.envrc` file with necessary `ENV` variables.

```env
export GIT_SSH_COMMAND='ssh -i ~/.ssh/id_client'
export GIT_AUTHOR_NAME='Name'
export GIT_COMMITTER_NAME='Name'
export GIT_AUTHOR_EMAIL='email@client.com'
export GIT_COMMITTER_EMAIL='email@client.com'
export EMAIL='email@client.com'
```

Once the `.envrc` is created run the command `dotenv allow .` in the folder to load the `ENV` variables. This is needed only once after you update the `.envrc` rest all when you change directory the `clientProject` or to any child folder these `ENV` variables will get loaded. 

Now if you run any `git` command inside this `clientProjects` folder at any level, `git` will take up the values from these
`ENV` variables.

# <a class="anchor" name="configure-hub" href="#configure-hub"><i class="anchor-icon"></i></a>Configure hub

If you are a [hub][hub] user and you already have the hub config (personal account) on the machine, all the above config won't help to use hub specific 
commands like `pull-request` etc to work with new client specific github account.

To do that, let's move the existing `hub` config from `$HOME/.config/hub` to `$HOME/.config/hub-personal` and add 

```
export HUB_CONFIG="$HOME/.config/hub-personal"
```

into the `.bashrc` or `.zshrc`.

Later, add `export HUB_CONFIG="$HOME/.config/hub-client"` into the our `.envrc` in the `clientProjects` folder try `hub login` from the `clientProjects` folder.

That's it.
No more worry about switching accounts before starting the client work or getting access denied error.

Special thanks to [@emilsoman][emil_twitter] for introducing me to `$GIT_SSH_COMMAND` and [@isaacaggrey][isaacaggrey_github] for [hub config workaround][hub_config_workaround]

If you are interested in getting github notification of specific organization into a specific email, check my other post on [Github : Routing organization notifications to official email][github_email_routing].

[hub]: https://github.com/github/hub
[hub_per_repo_config_issue]: https://github.com/github/hub/issues/1300
[git_config_ssh]: https://git-scm.com/docs/git-config#git-config-coresshCommand
[git_config_user_name]: https://git-scm.com/docs/git-config#git-config-username
[git_config_user_email]: https://git-scm.com/docs/git-config#git-config-useremail
[direnv]: https://github.com/direnv/direnv
[git_env_ssh]: https://git-scm.com/docs/git#git-codeGITSSHcode
[git_env_author_name]: https://git-scm.com/docs/git#git-codeGITAUTHORNAMEcode
[emil_twitter]: https://twitter.com/emilsoman
[hub_config_workaround]: https://github.com/github/hub/issues/1300#issuecomment-318872894
[isaacaggrey_github]: https://github.com/isaacaggrey
[github_email_routing]: https://blog.revathskumar.com/2013/12/github-routing-organization-notifications.html
