<a href="/categories/coding/" class="category-link">Coding</a>

# How to set up Samba in Ubuntu/Linux, and access it in Mac OS and Windows

<span title="Last time this post was updated"> Last updated July 12th 2011 </span> <span class="m-x-2" title="Pageviews"> 261.1k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-to-set-up-samba-in-ubuntu-linux-and-access-it-in-mac-os-and-windows/">0</span>](#disqus_thread) </span>

- <a href="/tags/productivity/" class="tag-list-link">productivity</a><span class="tag-list-count">4</span>

![How to set up Samba in Ubuntu/Linux, and access it in Mac OS and Windows](/images/samba-filesharing-with-windows-ubuntu-mac-large.jpg)

Samba allows to share files and printers with other computers remotely, regardless their operating system (linux, windows, Mac, ...). This guide show how to intall and configure the Samba service in a Ubuntu machine and access it through windows and mac.

<span id="more"></span>

**<span class="underline">Setting up the Samba File Server on Ubuntu/Linux:</span>**

1.  Open the terminal
2.  Install samba with the following command:   `sudo apt-get install samba smbfs`
3.  Configure samba typing: `vi /etc/samba/smb.conf`
4.  Set your workgroup (if necesary). Go down in the file, until you see :

        # Change this to the workgroup/NT-domain name your Samba server will part of
           workgroup = WORKGROUP

5.  Set your share folders. Do something like this (change your path and comments)

        # Adrian's share
        [MyShare]
          comment = YOUR COMMENTS
          path = /your-share-folder
          read only = no
          guest ok = yes

6.  Restart samba. type: /etc/init.d/smbd restart
7.  Create the share folder: sudo mkdir /your-share-folder
8.  Set the permissions: sudo chmod 0777 /your-share-folder
9.  you are all set in ubuntu

**<span class="underline">Accessing Samba Server Files from:</span>**

<span style="text-decoration: underline;">Mac OS</span>

1.  Open finder
2.  Menu Go -&gt; Connect to server (command-k)
3.  In the "Server Address" textbox, type: smb://&lt;your-ip-address-to-ubuntu&gt;
4.  Connect
5.  Select guest and OK
6.  Your all set, you'll be able to see /&lt;your-share-folder&gt; from here.

<span style="text-decoration: underline;">Windows</span>

1.  Start button -&gt; Run
2.  Type: \\\\&lt;your-ip-address-to-ubuntu&gt;\\&lt;your-share-folder&gt;
3.  All set

If you need to enable the samba ports in your firewall these are the ports:

    port type    port no
    udp        137
    udp        138
    tcp        139
    tcp        445



### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-07-12-how-to-set-up-samba-in-ubuntu-linux-and-access-it-in-mac-os-and-windows.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/faster-windows-xp-removing-msmpeng-exe-and-other-programs/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Faster Windows XP removing Msmpeng.Exe and other programs

<a href="/what-technologies-are-using-the-most-influential-internet-companies/" class="article-nav-older"><strong>older <em></em></strong></a>

What technologies are using the most influential Internet companies?

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents
