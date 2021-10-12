<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Adding and removing virtual hosts on Ubuntu 14.04
=================================================

March 29, 2016 • 1 min read

Here's a cheat sheet for working with virtual hosts on an Ubuntu server. The instructions assume you're not logged in as the root user. Change *[example.com](http://example.com/)* to your own domain/subdomain.

Adding a virtual host <a href="#adding-a-virtual-host" class="direct-link">#</a>
--------------------------------------------------------------------------------

Create the directory for your new site and grant permissions. If your user isn't part of the `www-data` group, you might want to adjust the second line:

    sudo mkdir -p /var/www/example.com/public\_html
    sudo chown -R $USER:www-data /var/www/example.com/public\_html
    sudo chmod -R 755 /var/www/example.com

Add an index page (optional):

    vim /var/www/example.com/public\_html/index.php

Create the virtual host config file:

    sudo vim /etc/apache2/sites-available/example.com.conf

Here's a very basic example config file you can start with. Paste it in and adjust as necessary:

    <VirtualHost *:80>
      ServerAdmin admin@example.com
      ServerName example.com
      ServerAlias www.example.com

      DocumentRoot /var/www/example.com/public\_html
      <Directory /var/www/example.com/public\_html>
        Options -Indexes
        AllowOverride All
        Order Allow,Deny
        Allow from All
      </Directory>

      ErrorLog ${APACHE\_LOG\_DIR}/error.log
      CustomLog ${APACHE\_LOG\_DIR}/access.log combined
    </VirtualHost>

Now enable the new virtual host and restart Apache:

    sudo a2ensite example.com.conf
    sudo service apache2 restart

If your DNS is already configured, your site should be available at *[example.com](http://example.com/)*.

Removing a virtual host <a href="#removing-a-virtual-host" class="direct-link">#</a>
------------------------------------------------------------------------------------

First, disable the virtual host and restart Apache:

    sudo rm /etc/apache2/sites-available-example.com.conf
    sudo rm -Rf /var/www/example.com

At this point, the site is disabled and will no longer be accessible.

Now just remove the config file and cleanup the `/var/www/` directory to permanently remove the site and all of its files:

    sudo rm /etc/apache2/sites-available/example.com.conf
    sudo rm -Rf /var/www/example.com

<a href="../../tags/tips/index.html" class="post-tag">tips</a> <a href="../../tags/apache/index.html" class="post-tag">apache</a> <a href="../../tags/ubuntu/index.html" class="post-tag">ubuntu</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../lessons-from-a-failed-kickstarter/index.html" class="post-nav-previous"><span class="small">Previous post</span> Lessons from a failed Kickstarter</a> <a href="../how-to-upgrade-or-downgrade-nodejs-using-npm/index.html" class="post-nav-next"><span class="small">Up next</span> How to upgrade or downgrade Node.js using npm</a>
