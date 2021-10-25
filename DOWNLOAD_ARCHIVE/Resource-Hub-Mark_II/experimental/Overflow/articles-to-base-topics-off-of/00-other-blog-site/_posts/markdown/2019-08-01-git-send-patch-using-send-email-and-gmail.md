<!--


---
 'Git: send patch using send-email & Gmail'
excerpt: This post explain who to send the patch via email using the git send-email
  command and your gmail
date: 2019-08-01 00:05:00 IST
updated: 2018-08-01 00:05:00 IST
categories: git
tags: git
image: https://static.revathskumar.com/2019/git-send/password-prompt.png
---
Github revolutionized how we contribute to Open Source. All my past contribution was through Github pull requests.
As a break from that recently I got a opportunity to contribute a minor patch to [wireguard-android][wireguard-android] which is
outside of github ecosystem.

Since `wireguard` follows linux way of accepting patches via **email** I have to setup the `git send-email` command to send my patch.
This post is about my learning on setting up git and use my Gmail to send the patch.

This post is based on `Ubuntu` and expect you already have git installed setup on your machine

## Installation

We will get started with installing the required package from `apt-get`. `git-email` is the package we required to send the patch via email.
We can install this by running the command below.

```
sudo apt-get install git-email
```

Once the installation is success we can configure the `sendmail` smtp configuration.

## Configuration

Add the following to your global/local git config as per your need. Since I am planning to use this
only for wireguard repo I added these into local config.

```
#.git/config
[sendemail]
    smtpserver = smtp.googlemail.com
    smtpencryption = tls
    smtpserverport = 587
    smtpuser = youremail@gmail.com
```

Please remember to replace `youremail@gmail.com` with your original email which you indent to use.
That email should have post access to the email group to which we are sending the patch to.

Also remember not to use `alias` email if you are using gmail co-orporate account.

## Create a application password on gmail

In Gmail instead of using your main password, you can generate different passwords for different application.
Goto [app passwords][apppasswords] in your google account and generate the new password for `git-email` and keep it handy.
I recommend using a password managers since you need this password everytime you need to send the patch.

## Create the patch

Next let's generate the patch files for all the commits which we need to send.

```sh
git format-patch --to=to@list.email.com HEAD~..HEAD
```

The above command will generate patch only for the latest commit.
if you have to send patches of last 2 commits instead of `HEAD~..HEAD` use `HEAD~2..HEAD`.

This will create `.patch` file in the current directory.
Please remember to update the `--to` with actual email address.

## Send patch as email

Once we have the `.patch` files we can initiate send.

```
git send-email *.patch
```

This command will initial the send and will ask for the `to` email and `cc` emails before the gmail password prompt.

![password prompt][password-prompt]{: width="100%"}

    Please make sure to provide only the app password we generated a while ago.

Once the correct password is entered we will get the success message.

![success][success]{: width="100%"}

[apppasswords]: https://myaccount.google.com/apppasswords
[wireguard-android]: https://git.zx2c4.com/wireguard-android/
[password-prompt]: https://static.revathskumar.com/2019/git-send/password-prompt.png
[success]: https://static.revathskumar.com/2019/git-send/git-send-result.png
