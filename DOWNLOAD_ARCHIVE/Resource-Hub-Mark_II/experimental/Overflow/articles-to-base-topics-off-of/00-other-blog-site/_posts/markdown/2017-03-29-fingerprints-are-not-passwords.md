<!--


---
 'Fingerprints are not passwords'
excerpt: "What you do when your account locked with biometric info compromised?"
date: 2017-03-29 00:00:00 IST
updated: 2017-03-29 16:00:00 IST
categories: braindump
tags: password, security
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

## Why Fingerprints are not passwords?

What you do when your Gmail or facebook account compromised?
You change your passwords, right?

Now consider your Gmail and Facebook is protected with your fingerprint.
Now when they those accounts are compromised, are you going to get more new fingers?

Passwords are something which the users will be able to change and keep it secret.
You have seen that most bank portals will force users to change the passwords after a interval. 
And they insist that never reuse the password which you used some where else.

Now when you lock you phone, apps and payments using fingerprint, it means you are using the same password
in all the places and this password which you chose can't change.

## How secure is Fingerprint based authentication?

For the sake of argument, you can say that finger print can't be faked, but reality wont agree.
Locking you phone with fingerprint is like keeping a written pass code along with the phone.

We have already saw that [Hackers fakes German minister's fingerprints using photos of her hands](https://www.theguardian.com/technology/2014/dec/30/hacker-fakes-german-ministers-fingerprints-using-photos-of-her-hands). 

May that was a great work by some hackers, but in India fingerprints where [faked by sim card sales people](https://twitter.com/no2uid/status/832871156969410561) to show high sales.

![fake fingerprint](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/fingerprints/jio-fingerprintsales.png)

Fingerprint is something which we leave everywhere when you touch your phone, wallet, door
handle you name it, that means you are advertising that here is my password everywhere and 
use the same to secure everything.

## You don't need to be conscious or alive

For an attacker, who trying to get into you system which secured with fingerprint, its 
easy for them that you don't need to be conscious or alive. They make you unconscious and 
authenticate using your system using your fingers, but if you chose to use password
attacker needs you to be conscious and alive to break in.

Even your friend/roommate can get access into your phone/system while you are asleep or
passed out.

## What Google says about fingerprint security? 

In the [help of pixel phone](https://support.google.com/pixelphone/answer/6300638) Google warn users
that `fingerprint may be less secure than a strong PIN, pattern or password`.

[![google-caution-fingerprint](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/fingerprints/google-caution-fingerprint.png)](https://support.google.com/pixelphone/answer/6300638)

## Conclusion

Your fingerprints can't replace `passwords`, It's meant for identification not for **authentication** or **authorization**.
If you are using fingerprints to secure your data without any password or two factor auth then your data is highly vulnerable to compromise.

Use fingerprints as **usernames**, not passwords.
