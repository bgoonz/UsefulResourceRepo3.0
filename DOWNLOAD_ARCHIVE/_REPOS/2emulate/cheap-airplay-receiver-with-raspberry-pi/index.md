<a href="/categories/coding/" class="category-link">Coding</a>

# Cheap Airplay receiver with Raspberry Pi

<span title="Last time this post was updated"> Last updated February 15th 2014 </span> <span class="m-x-2" title="Pageviews"> 6.8k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/cheap-airplay-receiver-with-raspberry-pi/">0</span>](#disqus_thread) </span>

- <a href="/tags/raspberrypi/" class="tag-list-link">raspberrypi</a><span class="tag-list-count">1</span>

![Cheap Airplay receiver with Raspberry Pi](/images/RaspiModelB.png)

I got excited about the idea of having a Raspberry Pi. It is in essence one of the smallest complete computer that you can get for $35 bucks! Ok, after I got one I had to do something useful with it… So I make it a Airplay receiver to play music remotely from any of my apple devices!

<span id="more"></span>

There is a couple of ways to make it work. The easiest one is to install the RaspBMC, a popular media center.(<http://www.raspberrypi.org/downloads>) You can even turn it into a home theater (<http://www.makeuseof.com/tag/raspberry-pi-home-theater-system/>). However, I’m not going to explain any of those ways because just installing them gives you 99% of the functionality. As a developer, I want to have control of the computers, and I’m not afraid of the console. So, I installed Raspbian instead, which is a lightweight Ubuntu/Debian Linux optimized for Raspberry Pi.

\#Getting started

**1. Install Raspbian “wheezy”**

Download the image from <http://www.raspberrypi.org/downloads> and follow the instructions. You have to format the SD card and “copy” the image. You can download this formatting tool: <https://www.sdcard.org/downloads/formatter_4>. After that, plug the SD card in Raspberry, also the Ethernet cable and power cord. For more instructions follow <http://lifehacker.com/5976912/a-beginners-guide-to-diying-with-the-raspberry-pi>.

**2. Setup Pi**

You need to connect it to an HDMI display to set it up using a USB mouse and keyboard or you can use SSH if you had set that up.

**3. Access the Terminal**

From the terminal type the following commands in you Raspberry Pi:

Become root and update the system

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>sudo apt-get update &amp;&amp; sudo apt-get upgrade</code></pre></td></tr></tbody></table>

**3. Setup Audio**

Audio ports could either be bind to the HDMI connection or to the audio output jack (you need sudo to execute any sound command).

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>sudo amixer cset numid=3 1</code></pre></td></tr></tbody></table>

Connect the speakers to you Raspberry Pi. You can test that they work with these:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>sudo speaker-test -t pink -l 1
sudo speaker-test -t sine -l 1</code></pre></td></tr></tbody></table>

You can also adjust the volume

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>sudo alsamixer</code></pre></td></tr></tbody></table>

**4. Install Airplay software**

I tested with 2 different programs, both of them did the trick for me.

- <https://github.com/juhovh/shairplay>
- <https://github.com/abrasive/shairport>

The latter is more popular so I will give the instructions for that one:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6</code></pre></td><td><pre><code>apt-get install -y libssl-dev libavahi-client-dev libasound2-dev git
git clone https://github.com/abrasive/shairport.git
cd shairport
./configure
make
./shairport -a &#39;AirPi&#39;</code></pre></td></tr></tbody></table>

**5. Run Airplay (shairport) on boot.**

It’s nice to run airport receiver automatically when you connect your Pi.

Create a file to start shairport

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1</code></pre></td><td><pre><code>nano /etc/init.d/airplay</code></pre></td></tr></tbody></table>

Type the following into `airplay`:

airplay

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>#!/bin/bash
/usr/local/bin/shairport -a &quot;AirPi&quot;</code></pre></td></tr></tbody></table>

Close the editing mode and exit the file. Then register the script to be run on boot.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2</code></pre></td><td><pre><code>chmod a+x /etc/init.d/airplay
update-rc.d airplay defaults</code></pre></td></tr></tbody></table>

Reboot your Pi and you are good to go! (If you have any questions you can write a comment below)

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2014-02-15-cheap-airplay-receiver-with-raspberry-pi.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/" class="article-nav-newer"><strong><em></em> newer</strong></a>

AngularJS tutorial for beginners with NodeJS ExpressJS and MongoDB (Part I)

<a href="/algorithms-for-dummies-part-1-sorting/" class="article-nav-older"><strong>older <em></em></strong></a>

Algorithms for dummies (Part 1): Big-O Notation and Sorting

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
