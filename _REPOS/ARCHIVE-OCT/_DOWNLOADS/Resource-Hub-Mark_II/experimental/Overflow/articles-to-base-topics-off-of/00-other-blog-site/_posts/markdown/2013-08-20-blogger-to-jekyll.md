<!--


---
 Blogger to Jekyll + Github pages
date: 2013-08-20 12:29:00 IST
updated: 2013-08-20 12:29:00 IST
comments: false
categories: blogger jekyll
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

On Aug 15, I moved my whole blog from blogger to jekyll. I thought It will be easy to migrate but restoring the whole urls was really painfull.

## _Getting Started_

So I started with installing jekyll

{% highlight sh %}
gem install jekyll
{% endhighlight %}

and then initiliased my blog

{% highlight sh %}
jekyll new blog.revathskumar.com
{% endhighlight %}

## _Importing_

Now I need to import all my existing blog posts from blogger to jekyll.
I used a [import script](https://gist.github.com/kennym/1115810) by [@kennym](https://github.com/kennym).

As per the script instructions I took my feed url from blogger and passed to the script, I thought **oh! ya I am done**. But I was wrong, the feed contained only
half of my blog posts.

I thought I am lost, Then I exported the whole blog from blogger and tried to pass into the import script, but import script didn't accept the exported blog.

So I need a way to convert this exported blog to feeds. Then I put the exported blog in my dropbox and provided the public link to [feedburner](http://feedburner.google.com) and tried to generated a new feed url with all the posts.

**Hooray**, It worked a new feed with all my posts and worked well with the import script.

## _Configuring_

Then I update premalink option the **\_config.yml** for custom permalink setting as same I followed on blogger.

{% highlight yaml %}
name: Revath S Kumar
markdown: redcarpet
pygments: true

permalink: '/:year/:month/:title.html'
{% endhighlight %}

## _Pushing to Github_

I created a github repo for my blog with

{% highlight sh %}
hub create blog.revathskumar.com
{% endhighlight %}

[Hub](http://hub.github.com/) is a command line wrapper for Git. The above command will create a repo in my github account and add the git url to my remote.

Then I created a new branch named [gh-pages](http://pages.github.com/). In order to publish blog with github pages your branch name should be gh-pages.

Then I did my initial commit and push to the gh-pages branch.
Now I can see my blog in [revathskumar.github.io/blog.revathskumar.com](http://revathskumar.github.io/blog.revathskumar.com).

## _Custom domain_

Configuing custom domain is easy. Since I am using subdomain for my blog, I went to domain control panel and set the CNAME for the subdomain `blog.revathskumar.com` as `revathskumar.github.io`.

Then I added a file named CNAME, with content `blog.revathskumar.com` in root directory and pushed.

The more details of custom domain can be found in [Official Github pages doc](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

After a bit of time `blog.revathskumar.com` started showing my latest blog on github pages. \o/

Then I verified all the exising urls and new urls and make sure no links are broken and went to bed.
