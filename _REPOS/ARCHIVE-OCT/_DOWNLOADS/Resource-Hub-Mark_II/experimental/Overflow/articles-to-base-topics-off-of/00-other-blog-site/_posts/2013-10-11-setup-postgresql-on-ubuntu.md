<!--


---
 "Setup postgresql on ubuntu"
date: 2013-10-11 08:00:00
updated: 2013-10-11 08:00:00
categories: postgresql ubuntu
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

## Installation

{% highlight sh %}
sudo apt-get install postgresql-9.2 postgresql-contrib-9.2
postgresql-server-9.2 postgresql-server-dev-9.2
{% endhighlight %}

Unlike MySql, In postgres we can have users coupled with system users. So whenever you try `psql` command the default user will be your current loggedin system user. While installation it creates a user with username **postgres** in the system to access db.

## login into default user

{% highlight sh %}
sudo -u postgres psql
{% endhighlight %}

After login as default user you need to create a new user with username same as your system username.

## create a role

{% highlight sql %}
CREATE USER username WITH PASSWORD 'password' CREATEDB;
{% endhighlight %}

If you forgot to give **CREATEDB** permission while creating user you can alter it using the sql below,

{% highlight sql %}
ALTER USER revath CREATEDB;
{% endhighlight %}

After creating new role/user, logout from the postgres user by typing `\q` in the psql prompt.

Now login into the psql by selecting the default database.

{% highlight sh %}
psql -d postgres
{% endhighlight %}

Now you login with the default user which have the same username as your system user.

After login you can create a new DB.

{% highlight sql %}
CREATE DATABASE db_name
{% endhighlight %}

Using postgres is a bit different from using Mysql,

    `SHOW DATABASES` : `\l`
    `SHOW TABLES`    : `\d`
    `DESC table`     : `\d table`
    `exit`           : `\q`
    `help`           : `\h` or `\?`
