<a href="/categories/coding/" class="category-link">Coding</a>

# Faster Windows XP removing Msmpeng.Exe and other programs

<span title="Last time this post was updated"> Last updated July 15th 2011 </span> <span class="m-x-2" title="Pageviews"> 62.6k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/faster-windows-xp-removing-msmpeng-exe-and-other-programs/">0</span>](#disqus_thread) </span>

- <a href="/tags/troubleshooting/" class="tag-list-link">troubleshooting</a><span class="tag-list-count">5</span>

At work, I use an Windows XP machine and it some times get really slowly. I noticed from the task manager (ctrl+shift+esc) that the process MsMpEng.exe is consuming most of my CPU time!

**MsMpEng.exe** is a process associated to _Windows Defender_ that help you to "_protected_" the computer, but sometimes it requires too much resources. So, if eating up your available CPU it is better to disable it.

<span id="more"></span>

Disable **MsMpEng.exe**:

1.  start menu -&gt; **run ** (windows key + r)
2.  write **services.msc** and enter
3.  **Stop** the following services: "Microsoft Forefront Client Security Antimalware Service" and "Microsoft Forefront Client Security State Assessment Service" doing a right click.
4.  Set the "Startup Type"  to "Manual" of both services doing double click on them.
5.  You can repeate the same steps 1-4 to remove safely services, like "Indexing Service" which slow down your computer, too. And memory consuming processes.
6.  Enjoy a faster computer!



Note:  You can find other programs/processes that are slowing down you computer doing the following:

1.  Open Task Manager (Ctrl+shift+Esc)
2.  Click in the "Processes" tab.
3.  Menu "View", click "Select Columns...", check "CPU Time", click OK. (figure below)
4.  Click on CPU time, and you will see the process that consume most of your CPU (and make your PC slower)
5.  Search on internet what are this process used for, before removing them.
6.  Use the steps above to remove them if they are not really needed (be careful).

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-07-15-faster-windows-xp-removing-msmpeng-exe-and-other-programs.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/cs-getmanifestresourcestream-gotcha/" class="article-nav-newer"><strong><em></em> newer</strong></a>

C\#'s GetManifestResourceStream Gotcha

<a href="/how-to-set-up-samba-in-ubuntu-linux-and-access-it-in-mac-os-and-windows/" class="article-nav-older"><strong>older <em></em></strong></a>

How to set up Samba in Ubuntu/Linux, and access it in Mac OS and Windows

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
