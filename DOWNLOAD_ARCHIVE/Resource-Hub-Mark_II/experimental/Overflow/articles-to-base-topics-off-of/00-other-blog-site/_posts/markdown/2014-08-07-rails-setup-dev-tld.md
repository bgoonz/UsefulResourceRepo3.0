<!--


---
 "Rails : Setup .dev TLD"
excerpt: "Rails : Setup .dev TLD"
date: 2014-08-07 00:00:00 IST
updated: 2014-08-07 00:00:00 IST
categories: rails
tags: rails
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

While I was working with PHP, I used to setup _.dev_ domain with [Apache VirtualHost](http://www.phprepo.in/2011/09/adding-virtual-host-in-apache-on-ubuntu/) for my development. But after I moved to Ruby on Rails, I never used it since Rails were not using apache server and port 80.

In the begining I tried to set domain with `/etc/hosts`, but I came to know that hosts file won't accept PORT. They only map IP address. But now I managed to find a way to setup _.dev_ domain for rails development.

You can either setup this manually or [use invoker](#invoker) gem.

<div id="manual"></div>
## 1. Manual Setup

To setup _.dev_ domain, the prerequisites are [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) and [rinetd](http://www.boutell.com/rinetd/). **dnsmasq** is a DNS subsystem provides a local DNS server for the network, with forwarding of all query types to upstream recursive DNS servers and cacheing of common record types. **rinetd** is a internet redirection server rinetd redirects TCP connections from one IP address and port to another

### Installation

On ubuntu use `apt-get` to install both dnsmasq &amp; rinetd

```sh
sudo apt-get install dnsmasq rinetd
```

### Configure dnsmasq

create `/etc/dnsmasq.d/dev-tld` and add the below configuration into it.

```
local=/dev/
address=/dev/127.0.0.1
```

### Configure rinetd

The configuration file for rinetd resides at `/etc/rinetd.conf`. The syntax to add
redirection rule is

```
<to ip> <to port> <from ip> <from port>
```

in order to redirect your rails app running on port 4000 to default http port 80,
append the below config to /etc/rinetd.conf

```
0.0.0.0 80 0.0.0.0 4000
0.0.0.0 443 0.0.0.0 3003
```

The second line in above config is needed only if you use SSL. After saving the config restart the rinetd, dnsmasq &amp; network.

```sh
sudo service rinetd restart
sudo service dnsmasq restart
sudo /etc/init.d/networking restart
```

If you think these steps are hassle, you can set things with invoker gem.

<div id="invoker"></div>
## 2. Setup with invoker

You can automate all these **dnsmasq** &amp; **rinetd** setup using [invoker](http://invoker.codemancers.com/) gem.

{% highlight sh %}
gem install invoker
{% endhighlight %}

and run its setup command

{% highlight sh %}
rvmsudo invoker setup
{% endhighlight %}

More details about invoker configuration is available on [invoker.codemancers.com](http://invoker.codemancers.com/#tld)

You are done, Now you can type **&lt;you app&gt;.dev** in the browser instead of `localhost:4000`.
