<!--


---
 "PHP : Setup server for capistrano deployment"
excerpt: "PHP : Setup server for capistrano deployment"
date: 2015-06-23 00:00:00 IST
updated: 2015-06-23 00:00:00 IST
categories: capistrano
tags: php, capistrano, deployment
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

When I was Rails developer I used to deploy using capistrano with a single command 

```sh
cap production deploy
```

But when I came back to PHP development, the old FTP drag and drop welcomed me and I was like WTF?. I couldn't agree to this, since it takes too much time for deployment. So I decided to setup capistrano for my [Yii](http://yiiframework.com/) project.

Since I was a ruby developer all the ruby and capistrano setup was already there in my laptop. But I need to setup these things in server. This blog post deals only with the setting up server only. The setting up of Yii project for capistation deployment comes in next post.

## Setting up server

### Installing ruby, git and capistrano

First step to setting up server for cap deployment is install ruby and git. I usually install ruby using [Ruby Version Manager (rvm)](http://rvm.io). It helps me to manage the ruby versions.

```sh
apt-get install -y build-essential git-core libyaml-dev 
 
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -L get.rvm.io | bash -s stable
 
source /home/lookup/.rvm/scripts/rvm
rvm reload
rvm install 2.2.2
 
gem install capistrano --no-ri --no-rdoc
```

#### Add a usergroup and user for deployment.

After installing ruby and git, we need to add a new usergroup and user for deployment and give appropriate permissions for the deployment directory. I used the default `/var/www` directory for the deployment.

```sh
sudo addgroup www # create a new usergroup
sudo adduser deploy # create a new user
sudo adduser deploy www # add deploy user to www group
```
Since apache will run as `www-data` user we need to add `www-data` to our newly created user group.

```sh
sudo adduser www-data www
```

Now we need to give appropriate permission for the usergroup. Open `/etc/sudoers` file and add the following.

```sh
# open /etc/sudoers
deploy ALL=(ALL:ALL) ALL
```
and run the following commands to set the permissions of deploy directory in my case `/var/www` for `deploy` user.

```sh
# Set the ownership of the folder to members of `www` group
sudo chown -R :www  /var/www
 
# Set folder permissions recursively
sudo chmod -R g+rwX /var/www
 
# Ensure permissions will affect future sub-directories etc.
sudo chmod g+s /var/www
```

Now our server is ready for deployment. Next we need to setup our Yii project.
