# Tags
tag_samba = Tag.create(:name=>"samba")
tag_ubuntu = Tag.create(:name=>"ubuntu")
tag_linux = Tag.create(:name=>"linux")
tag_seo = Tag.create(:name=>"seo")
tag_drupal = Tag.create(:name=>"drupal")
tag_google = Tag.create(:name=>"google")
tag_twitter = Tag.create(:name=>"twitter")
tag_facebook = Tag.create(:name=>"facebook")
tag_programming = Tag.create(:name=>"programming")
tag_social_media = Tag.create(:name=>"social media")
tag_internet = Tag.create(:name=>"internet")
tag_windows = Tag.create(:name=>"windows")
tag_tips = Tag.create(:name=>"tips")
tag_how_to = Tag.create(:name=>"how-to")
tag_c_ = Tag.create(:name=>"c#")
tag_gotchas = Tag.create(:name=>"gotchas")
tag__net = Tag.create(:name=>".net")
tag_git = Tag.create(:name=>"git")
tag_github = Tag.create(:name=>"github")
tag_php = Tag.create(:name=>"php")
tag_dom = Tag.create(:name=>"dom")
tag_xml = Tag.create(:name=>"xml")
tag_product_lines = Tag.create(:name=>"product lines")
tag_bug = Tag.create(:name=>"bug")
tag_testing = Tag.create(:name=>"testing")
tag_microsoft = Tag.create(:name=>"microsoft")
tag_freescale = Tag.create(:name=>"freescale")
tag_zune = Tag.create(:name=>"zune")
tag_ruby_on_rails = Tag.create(:name=>"ruby on rails")
tag_software_architecture = Tag.create(:name=>"software architecture")
tag_web_frameworks = Tag.create(:name=>"web frameworks")
tag_web_development = Tag.create(:name=>"web development")
tag_agile_frameworks = Tag.create(:name=>"agile frameworks")
tag_unix = Tag.create(:name=>"unix")
tag_crontab = Tag.create(:name=>"crontab")
tag_drush = Tag.create(:name=>"drush")
tag_software_engineering = Tag.create(:name=>"software engineering")
tag_reverse_engineering = Tag.create(:name=>"reverse engineering")
tag_gui = Tag.create(:name=>"gui")
tag_aspect_oriented_programming = Tag.create(:name=>"aspect oriented programming")
tag_aspectj = Tag.create(:name=>"aspectj")
tag_dynamic_analysis = Tag.create(:name=>"dynamic analysis")
tag_paper_review = Tag.create(:name=>"paper review")
tag_wide_spectrum_language__wsl_ = Tag.create(:name=>"wide spectrum language (wsl)")
tag_unified_modelling_language__uml_ = Tag.create(:name=>"unified modelling language (uml)")
tag_cobol_legacy_systems = Tag.create(:name=>"cobol legacy systems")
tag_reengineering = Tag.create(:name=>"reengineering")
tag_focused_crawling = Tag.create(:name=>"focused crawling")
tag_metadata_extraction = Tag.create(:name=>"metadata extraction")
tag_learning_object_management = Tag.create(:name=>"learning object management")
tag_ontology = Tag.create(:name=>"ontology")
tag_e_learning = Tag.create(:name=>"e-learning")
tag_hypertext_generation = Tag.create(:name=>"hypertext generation")
tag_adaptation = Tag.create(:name=>"adaptation")
tag_personalisation = Tag.create(:name=>"personalisation")
tag_open_corpus_content = Tag.create(:name=>"open corpus content")
tag_metadata_generation = Tag.create(:name=>"metadata generation")
tag_web_semantics = Tag.create(:name=>"web semantics")
tag_social_bookmarking = Tag.create(:name=>"social bookmarking")
tag_ms_access = Tag.create(:name=>"ms access")
tag_sql = Tag.create(:name=>"sql")
tag_visual_basic = Tag.create(:name=>"visual basic")
tag_macros = Tag.create(:name=>"macros")
tag_wysiwyg = Tag.create(:name=>"wysiwyg")
tag_imce = Tag.create(:name=>"imce")
tag_ckeditor = Tag.create(:name=>"ckeditor")
tag_ftp = Tag.create(:name=>"ftp")
tag_gitignore = Tag.create(:name=>"gitignore")
tag_csv = Tag.create(:name=>"csv")
tag_regex = Tag.create(:name=>"regex")
tag_java = Tag.create(:name=>"java")
tag_mac = Tag.create(:name=>"mac")
tag_algorithms = Tag.create(:name=>"algorithms")
tag_runtime_analysis = Tag.create(:name=>"runtime analysis")
tag_analysis_of_algorithm = Tag.create(:name=>"analysis of algorithm")
tag_for_dummies = Tag.create(:name=>"for dummies")
tag_big_o = Tag.create(:name=>"big-o")
tag_concentration = Tag.create(:name=>"concentration")
tag_procrastination = Tag.create(:name=>"procrastination")
tag_attention = Tag.create(:name=>"attention")
tag_ssh = Tag.create(:name=>"ssh")
tag_cli = Tag.create(:name=>"cli")
tag_command_line = Tag.create(:name=>"command line")
tag_apache = Tag.create(:name=>"apache")
tag_nutch = Tag.create(:name=>"nutch")
tag_search_engines = Tag.create(:name=>"search engines")
tag_web_crawlers = Tag.create(:name=>"web crawlers")
tag_ruby = Tag.create(:name=>"ruby")
tag_textmate = Tag.create(:name=>"textmate")
tag_python = Tag.create(:name=>"python")
tag_svn = Tag.create(:name=>"svn")
tag_subversion = Tag.create(:name=>"subversion")
tag_eclipse = Tag.create(:name=>"eclipse")
tag_svn_properties = Tag.create(:name=>"svn properties")

# Posts
p0 = adrian.posts.create(title: 'How to set up Samba in Ubuntu/Linux, and access it in Mac OS and Windows', content: '<p>Samba allows to share files and printers with other computers remotely, regardless their operating system (linux, windows, Mac, ...).&nbsp;This guide show how to intall and configure the Samba service in a Ubuntu machine and access it through windows and mac.</p>
<p><strong><u>Setting up the Samba File Server on Ubuntu/Linux:</u></strong></p>
<ol>
	<li>Open the terminal</li>
	<li>Install samba with the following command: &nbsp; <code>sudo apt-get install samba smbfs</code></li>
	<li>Configure samba typing: <code>vi /etc/samba/smb.conf</code></li>
	<li>Set your workgroup (if necesary). Go down in the file, until you see :
		<div>
			<blockquote>
				<pre># Change this to the workgroup/NT-domain name your Samba server will part of
   workgroup = WORKGROUP</pre>
			</blockquote>
		</div>
	</li>
	<li>Set your share folders. Do something like this (change your path and comments)
		<div>
			<blockquote>
				<pre># Adrian\'s share
[MyShare]
  comment = YOUR COMMENTS
  path = /your-share-folder
  read only = no
  guest ok = yes
</pre>
			</blockquote>
		</div>
	</li>
	<li>Restart samba. type:&nbsp;/etc/init.d/smbd restart</li>
	<li>Create the share folder: sudo mkdir /your-share-folder</li>
	<li>Set the&nbsp;permissions: sudo chmod 0777 /your-share-folder</li>
	<li>you are all set in ubuntu</li>
</ol>
<div><strong style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; "><u style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; text-decoration: underline; ">Accessing Samba Server Files from:</u></strong></div>
<div><span style="text-decoration: underline;">Mac OS</span></div>
<div>
	<ol>
		<li>Open finder</li>
		<li>Menu Go -&gt; Connect to server (command-k)</li>
		<li>In the "Server Address" textbox, type: smb://&lt;your-ip-address-to-ubuntu&gt;</li>
		<li>Connect</li>
		<li>Select guest and OK</li>
		<li>Your all set, you\'ll be able to see /&lt;your-share-folder&gt; from here.</li>
	</ol>
	<div><span style="text-decoration: underline;">Windows</span></div>
	<div>
		<ol>
			<li>Start button -&gt; Run</li>
			<li>Type: \\&lt;your-ip-address-to-ubuntu&gt;\&lt;your-share-folder&gt;</li>
			<li>All set</li>
		</ol>
	</div>
</div>
<div>If you need to enable the samba ports in your firewall these are the ports:</div>
<div>
	<blockquote>
		<pre>port type	port no
udp		137
udp		138
tcp		139
tcp		445</pre>
	</blockquote>
</div>
<p>&nbsp;</p>
', created_at: '2011-07-12 21:27:35 -0400', updated_at: '2011-07-19 17:44:13 -0400' )
p0.tags << tag_samba
p0.tags << tag_ubuntu
p0.tags << tag_linux
p1 = adrian.posts.create(title: 'Drupal Modules for SEO optimation', content: '<p>Search Engine Optimizations (SEO) could be quite challenging for beginners. It\'s overwhelming the amount of information that a webmaster need to understand in order to make his websites visible, in search engines like Google, Bing, Yahoo, ... Moreover most of this information is quite disperse. The idea here is to provided all the needed information in one place. Starting from steps for all websites and then focusing on Drupal SEO modules. &nbsp; <strong>General Steps:</strong></p>
<ol>
	<li><strong>Sign up</strong>in the webmaster tools for the main search engines:
		<ul>
			<li><a href="http://www.google.com/webmasters/" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">Google Webmaster Tools</a></li>
			<li><a href="siteexplorer.search.yahoo.com" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">Yahoo! Site Explorer</a></li>
			<li><a href="http://www.bing.com/webmaster" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">Bing - Webmaster Center</a></li>
			<li><a href="http://webmaster.yandex.com/" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">Yandex Webmaster</a></li>
		</ul>
	</li>
	<li><strong>Verification.</strong> The next step is to get your website verify by each the search engines that you signed up. There are several options in the verification process, as you can see in their websites. You can choose from: uploading a file to you web directory, or adding a text string in your host name, or adding a meta tag and other methods.</li>
	<li><strong>Metrics</strong>. Before&nbsp;optimizing&nbsp;your website you have to "<strong>know your number</strong>", so you can see if what you are doing is working. Your numbers are the amount of visitors, webpage clicked, top visitied pages. For that, there are free tools available, I have used the following ones.
		<ol>
			<li><a href="http://www.google.com/analytics/" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">Google Analytics</a>: it\'s a very good tool, provides a lot of information such as, number of visitors, top clicked pages, visitor\'s browsers, OS, screen resolution, ISP and more!</li>
			<li><a href="http://www.webalizer.org/" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">The Webalizer</a> is a free web server log file analysis program. It produces detailed usage reports in HTML format. It\'s a program installed on the linux server. (in ubuntu servers just run # sudo apt-get install webalizer)</li>
			<li><a href="http://awstats.sourceforge.net/" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">AWStats</a> is a free powerful and featureful tool that generates advanced web, streaming, ftp or mail server statistics, graphicall.</li>
		</ol>
	</li>
	<li><strong>Checklist</strong>. Every webmaster tool from the&nbsp;different&nbsp;search engines has their checklist and guidelines. Go through them (in the future, I will post a summary here)</li>
</ol>
<p><strong>Drupal Modules</strong> Read <a href="http://yadadrop.com/services/drupal-seo-modules-search-engine-optimization" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">here</a> for now (I will make my own list in the future)</p>
', created_at: '2011-07-12 21:32:33 -0400', updated_at: '2011-07-14 16:05:58 -0400' )
p1.tags << tag_seo
p1.tags << tag_drupal
p2 = adrian.posts.create(title: 'What technologies are using the most influential Internet companies?', content: '<div>Google, Facebook, YouTube, Yahoo, Wikipedia, Hotmail (Windows Live), Twitter, LinkedIn, Amazon.com, WordPress.com, eBay, Bing... You may know probably all these companies; we use some on our daily basis. They bring services to around 2 billion people! And influence our lives everyday. The most influential Internet companies are in the search engine and social media category, so I will focus the analysis in these two. &nbsp;</div>
<div>&nbsp;</div>
<div><u><strong>Search Engines</strong></u></div>
<ol>
	<li>
		<div>Google -&gt;&nbsp;<strong>1,000</strong>,000,000 = 1 billion unique visitors /month</div>
	</li>
	<li>
		<div>Yahoo! Sites -&gt;&nbsp;<strong>689</strong>,000,000 unique visitors /month</div>
	</li>
	<li>
		<div>Bing/Microsoft Sites -&gt;&nbsp;<strong>905</strong>,000,000 unique visitors /month</div>
	</li>
</ol>
<div>&nbsp;</div>
<div><u><strong>Social Media</strong></u></div>
<ol>
	<li>
		<div>Facebook: <strong>750</strong>,000,000+ users</div>
	</li>
	<li>
		<div>Twitter: <strong>200</strong>,000,000 users</div>
	</li>
	<li>
		<div>Gmail: <strong>193</strong>,000,000 users</div>
	</li>
	<li>
		<div>LinkedIn: <strong>100</strong>,000,000+ users</div>
	</li>
	<li>
		<div>Flickr: <strong>32</strong>,000,000 users</div>
	</li>
	<li>
		<div>Google+: unknown yet, but growing quickly!</div>
	</li>
</ol>
<div>&nbsp;</div>
<div>All these websites have something in common: huge amount of traffic! So, there technologies should scale, support high concurrency and easy to maintain. All these features are a good measure to know what programming language you should focus next. Learn from what is already working. All right! Now comes the interesting part! Let see what is happening behind the scenes!&nbsp;</div>
<div>&nbsp;</div>
<div><strong style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; "><img alt="facebook logo" src="http://t1.gstatic.com/images?q=tbn:ANd9GcSsGcRk_O0ncOMinYTG4K1Lle--Ot4ShY4Oc1fDtw5pd_i6qxkoXg" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; cursor: default; width: 64px; height: 64px; "></strong></div>
<div><strong>Facebook &nbsp;</strong></div>
<div>Technologies used:</div>
<ul>
	<li>
		<div>PHP&nbsp;(main programming language)</div>
	</li>
	<li>
		<div>HipHop&nbsp;for PHP (translate PHP to C++)</div>
	</li>
	<li>
		<div>MySQL&nbsp;(database)</div>
	</li>
	<li>
		<div>Cassandra&nbsp;(distributed database management system)</div>
	</li>
	<li>
		<div>Memcached&nbsp;(distributed memory cache)</div>
	</li>
	<li>
		<div>Thrift&nbsp;(integration between many programming languages)</div>
	</li>
	<li>
		<div>Other languages: Java, Erlang, C++, …</div>
	</li>
	<li>
		<div>A lot of tweaks for optimization, custom extensions. For instance, they used modified a Linux distribution to optimized it for Memcached.</div>
	</li>
</ul>
<div>&nbsp;</div>
<div>Who else uses&nbsp;PHP&nbsp;as main language?&nbsp;</div>
<div>Facebook, Wikipedia, Digg, CMS, and many more…&nbsp;</div>
<div>Who else uses&nbsp;Memcached?&nbsp;</div>
<div>YouTube, Facebook, Twitter, Reddit, Zynga. CMS (Drupal, Joomla, WordPress)</div>
<div>&nbsp;</div>
<div><img alt="Twitter" src="http://t0.gstatic.com/images?q=tbn:ANd9GcQkxJl0nu584FrSblIknohzw0tAMtmGSSs9hAnxRS6kFOpzPYmvXQ" style="width: 64px; height: 64px; "></div>
<div><strong>Twitter</strong></div>
<div>Technologies used:</div>
<div>(Be aware that Twitter keeps changing their technologies as they scale. So the list will be kinda chronologically)</div>
<div>&nbsp;</div>
<ul>
	<li>
		<div>Ruby&nbsp;(initially 2006). Ruby on Rails for the web interface and an enhanced Ruby Enterprise Edition.</div>
	</li>
	<li>
		<div>Memcached&nbsp;(distributed memory cache)</div>
	</li>
	<li>
		<div>MySQL&nbsp;&nbsp;(database)</div>
	</li>
	<li>
		<div>Starling&nbsp;(2007-2008): lightweight persistent message queue server written in Ruby.</div>
	</li>
	<li>
		<div>Outages: (it’s not a technology, duh. But, gives an idea why they make some changes later) In 2007, Twitter had been down 2% (equivalent to 6 full days). Especially in big events.</div>
	</li>
	<li>
		<div>Scala&nbsp;(in 2009): is multi-paradigm object-oriented programming language. In April 2009, Twitter changes large portions of their backend from Ruby to Scala.</div>
	</li>
	<li>
		<div>Lucene&nbsp;(in 2011): for their real-time search engine they are change it from MySQL to Lucene.</div>
	</li>
	<li>
		<div>Java&nbsp;(In 2011): They are replacing Ruby on Rails for Java in their search infrastructure. They announce performance improvements in their search engine 3x and 10x throughput.</div>
	</li>
	<li>
		<div>What’s the next change? …Stay tune ;)</div>
	</li>
</ul>
<div>Who else use Scala?&nbsp;</div>
<div>Foursquare, Twitter, …&nbsp;</div>
<div>&nbsp;</div>
<div><img alt="Google Logo" src="http://t1.gstatic.com/images?q=tbn:ANd9GcTWsBtMltVQT9FqsL9zNTKIu-8-7uazpjrnb_6AWnsQ8p8xsbiRYQ" style="width: 64px; height: 62px; "></div>
<div><strong>Google</strong></div>
<div>It’s a mystery what they really use, but here are some hints:</div>
<ul>
	<li>
		<div>C++: for high-performance applications and search engine capabilities.</div>
	</li>
	<li>
		<div>They use a lot of&nbsp;Java&nbsp;and&nbsp;Python.</div>
	</li>
	<li>
		<div>Python: is an interpreted, general-purpose high-level programming language whose design philosophy emphasizes code readability (wikipedia).</div>
	</li>
	<li>
		<div>Big Table: is a compressed, high performance, and proprietary database system.</div>
	</li>
	<li>
		<div>Google File System: Google’s distributed file system to access data efficiently using large clusters.</div>
	</li>
	<li>
		<div>Google Closure Tools: JavaScript tool for rich web applications. It’s used in Gmail, Google Maps and Google Docs.</div>
	</li>
	<li>
		<div>Google Web Toolkit: &nbsp;used to create complex JavaScript front-end in Java. The Java code is “compiled” in JavaScript it’s the general idea.</div>
	</li>
	<li>
		<div>Ajax&nbsp;(Asynchronous JavaScript and XML). &nbsp;It’s used in Google Maps, Google.com and many other Google apps.</div>
	</li>
</ul>
<div>Who else use Python?&nbsp;</div>
<div>YouTube, BitTorrent client, Google, Yahoo, NASA… Used for Artificial Intelligence too…&nbsp;</div>
<div>&nbsp;</div>
<div>In a next post, I’ll continue with the other ones…</div>
', created_at: '2011-07-12 21:35:50 -0400', updated_at: '2011-07-14 18:43:47 -0400' )
p2.tags << tag_google
p2.tags << tag_twitter
p2.tags << tag_facebook
p2.tags << tag_programming
p2.tags << tag_social_media
p2.tags << tag_internet
p3 = adrian.posts.create(title: 'Faster Windows XP removing Msmpeng.Exe and other programs', content: '<p>At work, I use an Windows XP machine and it some times get really slowly. I noticed from the task manager (ctrl+shift+esc) that the process MsMpEng.exe is consuming most of my CPU time!</p>
<p><strong>MsMpEng.exe</strong> is a process associated to <em>Windows Defender</em> that help you to "<em>protected</em>" the computer, but sometimes it requires too much resources. So, if eating up your available CPU it is better to disable it.</p>
<p>Disable <strong>MsMpEng.exe</strong>:</p>
<ol>
	<li>start menu -&gt; <strong>run&nbsp; </strong>(windows key + r)</li>
	<li>write <strong>services.msc</strong> and enter</li>
	<li><strong>Stop </strong>the following services: "Microsoft Forefront Client Security Antimalware Service" and "Microsoft Forefront Client Security State Assessment Service" doing a right click.</li>
	<li>Set the "Startup Type"&nbsp; to "Manual" of both services doing double click on them.</li>
	<li>You can repeate the same steps 1-4 to remove safely services, like "Indexing Service" which slow down your computer, too. And memory consuming processes.&nbsp;</li>
	<li>Enjoy a faster computer!</li>
</ol>
<p>&nbsp;</p>
<p>Here is a screenshot of how the serivices are disabled:</p>
<p><img alt="windows services" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/MsMpEngEXE.PNG" style="width: 594px; height: 52px; "></p>
<p>&nbsp;</p>
<p>Note: &nbsp;You can find other programs/processes that are slowing down you computer doing the following:</p>
<ol>
	<li>Open Task Manager (Ctrl+shift+Esc)</li>
	<li>Click in the "Processes" tab.</li>
	<li>Menu "View", click "Select Columns...", check "CPU Time", click OK. (figure below)</li>
	<li>Click on CPU time, and you will see the process that consume most of your CPU (and make your PC slower)</li>
	<li>Search on internet what are this process used for, before removing them.</li>
	<li>Use the steps above to remove them if they are not really needed (be careful).</li>
</ol>
<p><img alt="Selecting CPU Time from Task Manager" src="http://www.adrianmejiarosario.com/sites/default/files/viewCPUTime.JPG" style="width: 586px; height: 550px; "></p>
', created_at: '2011-07-15 09:18:03 -0400', updated_at: '2011-08-12 16:16:00 -0400' )
p3.tags << tag_windows
p3.tags << tag_tips
p3.tags << tag_how_to
p4 = adrian.posts.create(title: 'C#\'s GetManifestResourceStream Gotcha', content: '<p>In the .NET framework, the method Assembly -&gt; Get Manifest Resource Stream has a gotcha that could take some time to figure out why is not working as intented. I was working in a piece of code (show below), and the GetManifestResourceStream always returned NULL exception error. Even though the file was there...</p>
<p>C# example:</p>
<div>
	<pre>public XmlTextReader GetSyntaxModeFile(SyntaxMode syntaxMode)
{
&nbsp;&nbsp; &nbsp;Assembly assembly = typeof(SyntaxMode).Assembly;
&nbsp;&nbsp; &nbsp;var stream = assembly.GetManifestResourceStream("ICSharpCode.TextEditor.Resources." + syntaxMode.FileName);
&nbsp;&nbsp; &nbsp;if(stream == null)
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;throw new Exception("The resource "+syntaxMode.FileName+" was not loaded properly.");
&nbsp;&nbsp; &nbsp;return new XmlTextReader(stream);
}</pre>
</div>
<p><strong>Solution:</strong></p>
<p>The GetManifestResourceStream method will always returns NULL if the resource \'<strong>built action</strong>\' property is not set to \'<strong>embedded resource</strong>\'</p>
<p><img alt="Build action property set to embedded resource" src="http://adrianmejiarosario.com/sites/default/files/pictures/GetManifestResourceStream.JPG" style="width: 488px; height: 332px;"></p>
<p>After setting this property with all the needed files assembly.<u><strong>GetManifestResourceStream</strong></u> starts returning the corrent stream instead of NULL</p>
', created_at: '2011-07-18 10:42:51 -0400', updated_at: '2011-09-19 16:51:54 -0400' )
p4.tags << tag_tips
p4.tags << tag_c_
p4.tags << tag_gotchas
p4.tags << tag__net
p4.tags << tag_how_to
p5 = adrian.posts.create(title: 'How to set up Git / github in windows', content: '<p>Installing Git in Windows is not as straight forward as in a *nix machine like Linux and Mac. This guide help you to get started quickly.</p>
<p>You will need the following tools:</p>
<ul>
	<li><strong>Putty</strong>: download <a href="http://the.earth.li/~sgtatham/putty/latest/x86/putty.zip">latest version here</a>.</li>
	<li><strong>TortoiseGit</strong>: download the <a href="http://code.google.com/p/tortoisegit/downloads/list" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">latest version here</a>. &nbsp;(e.g.&nbsp;<a href="http://code.google.com/p/tortoisegit/downloads/detail?name=Tortoisegit-1.6.5.0-32bit.msi&amp;can=2&amp;q=" style="color: rgb(0, 0, 204); text-decoration: underline; white-space: nowrap; ">Tortoisegit-1.6.5.0-32bit.msi</a>)</li>
	<li><strong>msysgit</strong>: As today the <a href="http://code.google.com/p/msysgit/downloads/list" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">latest version</a>&nbsp;(e.g.&nbsp;<a href="http://code.google.com/p/msysgit/downloads/detail?name=Git-1.7.6-preview20110708.exe&amp;can=2&amp;q=" style="color: rgb(0, 0, 204); text-decoration: underline; white-space: nowrap; ">Git-1.7.6-preview20110708.exe</a>)</li>
</ul>
<p><u>Setting up Putty</u></p>
<ol>
	<li>Unzip the folder.&nbsp;</li>
	<li>Generate the ssh key using the&nbsp;PUTTYGEN.EXE from the putty folder. After genete it, click "save private key" to save the *.ppk</li>
</ol>
<p><u>Setting up Git / TortoiseGIT on Windows</u></p>
<ol>
	<li>Install msysgit</li>
	<li>Install TortoiseGit</li>
	<li>Config TortoiseGit: do right click and in the contextual menu: TortoiseGit -&gt; Settings -&gt; Git -&gt; config (set your name and password)</li>
	<li>Set remote git server: Settings -&gt; Git -&gt; Remote. Fill it up with your Git server info (e.g. Github, Google code, ...)</li>
</ol>
<p><img alt="GitTortoise Remote Configuration" src="http://adrianmejiarosario.com/sites/default/files/pictures/gitTortoise-RemoteConfig.JPG"><br>
	&nbsp;</p>
', created_at: '2011-07-21 12:52:27 -0400', updated_at: '2011-09-19 16:51:25 -0400' )
p5.tags << tag_git
p5.tags << tag_github
p5.tags << tag_how_to
p6 = adrian.posts.create(title: 'PHP DOM: explained and exemplified', content: '<p>This is guide to get started with PHP DOM or a quick reminder to those who have a little while since the last time they used it.&nbsp;The extended documentation is in&nbsp;<a href="http://www.php.net/manual/en/book.dom.php" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; color: rgb(0, 116, 189); text-decoration: none; ">PHP.net</a>, but it is quite long. Here you might found a quick reference to get started in no time.</p>
<p>Purpose of the DOM (Docuement Object Model): It is a convention used to represent and manipulate objects in XML, XHTML and HTML documents. Parsing XML and HTML files is very useful. It allows to manipulate RSS Feeds, interact with APIs and web services through XML (e.g. Google Maps, Facebook and Twitter APIs, etc.), extract information from websites (web crawling) and more.&nbsp;</p>
<h2>Getting Started</h2>
<p>The DOM implementation in PHP have more than 15 classes! But don\'t get afraid, for most cases, you might just end up using these ones: DOMNode, DOMDocument, DOMNodeList and DOMElement. In the following UML class diagram of PHP\'s DOM&nbsp;you will see how these classes are related to each other and them the explanation of each one.</p>
<p><img alt="PHP DOM UML Class Diagram (lean)" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/PHP_DOM__UML_%28lean%29_Class_Diagram.gif" style="width: 541px; height: 345px; "></p>
<div>Fig 1.&nbsp;&nbsp;PHP DOM: UML Class Diagram</div>
<div>&nbsp;</div>
<h3>Loading and Saving DOM Documents</h3>
<p><a href="http://www.php.net/manual/en/class.domdocument.php">DOMDocument</a>&nbsp;— The DOMDocument class which exteds from DOMNode. This class contains the XML (or HTML) elements and configurations. It has configurations attributes, such as format output, preserve white spaces, versions, etc.</p>
<p><u>DOMDocument must-know methods (part 1: load and save)</u></p>
<ul>
	<li><strong>Load</strong>: load XML (or HTML) documents. There are different types of loads (quite self-explanatories)
		<ul>
			<li>mixed&nbsp;<a href="http://us.php.net/manual/en/domdocument.load.php">DOMDocument::load</a>&nbsp;(&nbsp;string&nbsp;$filename&nbsp;)&nbsp;— Load XML from a file</li>
			<li>bool&nbsp;<a href="http://us.php.net/manual/en/domdocument.loadhtml.php">DOMDocument::loadHTML</a>&nbsp;(&nbsp;string&nbsp;$source&nbsp;)&nbsp;— Load HTML from a string</li>
			<li>bool&nbsp;<a href="http://us.php.net/manual/en/domdocument.loadhtmlfile.php">DOMDocument::loadHTMLFile</a>&nbsp;(&nbsp;string&nbsp;$filename&nbsp;)&nbsp;— Load HTML from a file</li>
			<li>mixed&nbsp;<a href="http://us.php.net/manual/en/domdocument.loadxml.php">DOMDocument::loadXML</a>&nbsp;(&nbsp;string&nbsp;$source&nbsp;)&nbsp;— Load XML from a string</li>
		</ul>
	</li>
	<li><strong>Save</strong>:&nbsp;it is used to present (screen or file) the whole DOM document.
		<ul>
			<li>int&nbsp;<a href="http://us.php.net/manual/en/domdocument.save.php">DOMDocument::save</a>&nbsp;(&nbsp;string&nbsp;$filename&nbsp;)&nbsp;— Dumps the internal XML tree back into a file</li>
			<li>string&nbsp;<a href="http://us.php.net/manual/en/domdocument.savehtml.php">DOMDocument::saveHTML</a>&nbsp;(&nbsp;)&nbsp;— Dumps the internal document into a string using HTML formatting</li>
			<li>int&nbsp;<a href="http://us.php.net/manual/en/domdocument.savehtmlfile.php">DOMDocument::saveHTMLFile</a>&nbsp;(&nbsp;string&nbsp;$filename&nbsp;)&nbsp;— Dumps the internal document into a file using HTML formatting</li>
			<li>string&nbsp;<a href="http://us.php.net/manual/en/domdocument.savexml.php">DOMDocument::saveXML</a>&nbsp;(&nbsp;)&nbsp;— Dumps the internal XML tree back into a string</li>
		</ul>
	</li>
</ul>
<p>&nbsp;Example using DOMDocument for loading and showing HTML:</p>
<div><code>&lt;?php</code></div>
<div><code>&nbsp; $dom = new DOMDocuement;</code></div>
<div><code>&nbsp; $dom-&gt;loadHTML(\'http://www.adrianmejiarosario.com\'); &nbsp;// load website content to DOM&nbsp;</code></div>
<div><code>&nbsp; echo $dom-&gt;save(); &nbsp;// print to screen</code></div>
<div><code>?&gt;</code></div>
<div>&nbsp;</div>
<h3>Iterating through DOM Elements</h3>
<p>The first thing you need to do after loading the XML that you want to process, it\'s to select the data that you are intereted in. To search for you data you need to iterate through the DOM elements and you need to know what methods and objects are using in this process.</p>
<p><u>DOMDocument must-know methods (part 2: get data)</u></p>
<ul>
	<li>DOMElement&nbsp;<a href="http://us.php.net/manual/en/domdocument.getelementbyid.php">DOMDocument::getElementById</a>&nbsp;(&nbsp;string&nbsp;$elementId&nbsp;)&nbsp;— Searches for an element with a certain id.</li>
	<li>DOMNodeList&nbsp;<a href="http://us.php.net/manual/en/domdocument.getelementsbytagname.php">DOMDocument::getElementsByTagName</a>&nbsp;(&nbsp;string&nbsp;$elementName&nbsp;)— Searches for all elements with given tag name.</li>
</ul>
<div>&nbsp;</div>
<div>You may notice that the above methods returns DOMElement and DOMNodeList objects. Now we will explore the properties and attributes that you need to know in order to get the data.</div>
<div>&nbsp;</div>
<div><a href="http://www.php.net/manual/en/class.domnodelist.php">DOMNodeList</a>&nbsp;— class that contains DOMNodes collection.</div>
<div>&nbsp;</div>
<div><u style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; text-decoration: underline; "><u style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; text-decoration: underline; border-style: initial; border-color: initial; ">DOMNodeList must-know elements (part 3: get data from nodes collection)</u></u></div>
<div>&nbsp;</div>
<ul>
	<li><a href="http://us.php.net/manual/en/domnodelist.item.php">DOMNodelist::item</a>&nbsp;(&nbsp;int&nbsp;$index&nbsp;)&nbsp;— Retrieves a node specified by index</li>
	<li>int&nbsp;<a href="http://us.php.net/manual/en/class.domnodelist.php#domnodelist.props.length">$DOMNodeList-&gt;length</a>&nbsp;- Node list length</li>
</ul>
<div>&nbsp;</div>
<div><a href="http://www.php.net/manual/en/class.domelement.php" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; color: rgb(0, 116, 189); text-decoration: none; ">DOMElement</a>&nbsp;— class that extends DOMNode and add new methods but we don\'t need those for iterating through nodes.</div>
<div><a href="http://www.php.net/manual/en/class.domnode.php">DOMNode</a>&nbsp;— The DOMNode class is the pillar class and it is used by all others classes directly or indirectly by one of its children classes.</div>
<div>&nbsp;</div>
<div><u style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; text-decoration: underline; border-style: initial; border-color: initial; "><u style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; text-decoration: underline; border-style: initial; border-color: initial; border-style: initial; border-color: initial; ">DOMNode must-know properties (part 4: get node data)</u></u></div>
<ul>
	<li>string&nbsp;<a href="http://us.php.net/manual/en/class.domnode.php#domnode.props.nodename">$DOMNode-&gt;nodeName</a>&nbsp;&nbsp;— Returns node name</li>
	<li>string&nbsp;<a href="http://us.php.net/manual/en/class.domnode.php#domnode.props.nodevalue">$</a><a href="http://us.php.net/manual/en/class.domnode.php#domnode.props.nodename" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; color: rgb(0, 116, 189); text-decoration: none; ">DOMNode-&gt;nodeValue</a>&nbsp;&nbsp;— Returns node name</li>
	<li><a href="http://us.php.net/manual/en/class.domnodelist.php">DOMNodeList</a>&nbsp;<a href="http://us.php.net/manual/en/class.domnode.php#domnode.props.childnodes">$</a><a href="http://us.php.net/manual/en/class.domnode.php#domnode.props.nodename" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-style: initial; border-color: initial; vertical-align: baseline; color: rgb(0, 116, 189); text-decoration: none; ">DOMNode-&gt;childNodes</a>&nbsp;&nbsp;— Returns list of nodes</li>
</ul>
<div>&nbsp;</div>
<div>Example using DOMDocument for loading and showing HTML</div>
<div><code>&lt;?php</code></div>
<div><code>&nbsp; //TODO</code></div>
<div><code>?&gt;</code></div>
<div>(status: not finished yet)</div>
<div>&nbsp;</div>
', created_at: '2011-08-06 16:37:25 -0400', updated_at: '2011-08-12 16:14:35 -0400' )
p6.tags << tag_php
p6.tags << tag_dom
p6.tags << tag_xml
p7 = adrian.posts.create(title: 'Microsoft Zune Failure Analysis', content: 'All the Zune 30 froze, precisely at 12:01 A.M. on December 31, 2008. These devices got stuck with an irresponsive Zune logo. This bug that didn’t allow users to use the device was cause by a bug in the internal clock driver that handled improperly the last day of a year leap. The Zune 30 model 2006 was the only one affected by this bug; all the other models keep working ok, such as the Zune: 80 and 120 GB with hard drive, and 4, 8, 16 GB with flash drive, because they did not have the component with the error.

At the core of the Zune 30 music players, there is the Freescale iMX31L Multimedia processor and the MC13783 Power Management Chip. These components are also used in many other products like GPS, cellphones, pace makers, etc. Also the bug froze up the Toshiba Gigabeat S media players, since it was using the MC13783 chip. The driver written by Freescale for their MC13783 caused all of the problems in all the devices that were using it. The official solution from Microsoft to this bug was to let the Zune run out of battery completely, and reset it on January 1st. This bug was dissolved successfully by itself the first day of the 2009. 

SUGGESTED PRACTICES

The error occurred with the Microsoft’s Zune 30 could be avoided with effective test coverage. Microsoft and Toshiba relied in the correctness of the components of their supplier Freescale. But, all the components should not be considered reliable until they are properly tested. 

Even though, it is not practical to test all the possible alternatives, good unit testing should test representative input values using equivalent partitioning and boundary-value analysis. Equivalence partitioning is the testing technique that divides the possible inputs into different equivalent classes. All the possible inputs are classified and grouped in equivalent classes, which are a reduced representation of all the kinds of inputs possible and have produce similar outputs. After, the equivalent classes are identified; the cases are generated applying the boundary-value analysis. Since most of the errors in software are located in the boundaries, the boundary-value analysis is an effective technique for testing. Boundary testing is test cases where the inputs are generated from the maximum and minimum input domain, such as typical values, error values, special values, values just inside and outside the boundaries. 

Another good practice that might have detected this problem is the use of peer reviews. The purpose of the peer review is to detect and correct defects in software artifacts, and prevent leakage into final product. In peer reviews, the author examined his own code and one or more developers also examined it. The colleges evaluate and make recommendations to author’s code. This not only favors error detection, but also the college’s suggestion might helps to refactor code and increase performance and quality. The described combination of testing techniques might have revealed the leap-year bug on time.

ENSURING PRODUCT LINES QUALITY

The Zune 30 was not the only product affected by the MC13783 Freescale’s driver’s bug. Also all the devices using this chip experienced the same problem. For instance, the Toshiba’s Gigabeat product line was affected as well. The bug also froze up their Toshiba Gigabeat S due the leap year.

Microsoft Zune’s product line has the following products: Zune: 30, 80 and 120 GB with hard drive, and Zune 4, 8, 16 GB with flash drive.  The only one affected was the Zune 30, because it was the only one using the MC13783 component, which driver happen to had a bug. This individual variability in the product line was not correctly managed.

Software product lines have the purposes of reduce costs, improve quality, and reduce time to market. These goals will be achieved only if the quality attributes are present since the beginning of the project. Testing product lines is one way for assuring quality attributes. Product lines tests vary in scope from involving the entire product line (common components) to specific product variabilities. 

This study case reveals the importance of performing proper testing to the all the variables in a product line. A proper variability management is necessary to ensure the quality of all the products in a product line. All the variabilities, components and features that are varied, should be individually be tested, as well as the common components.

CONCLUSION 

There are some lessons that can be learnt from the study case of the Zune 30 Failure. One is the importance of the unit tests coverage. Even 3rd-party component interfaces should be tested properly to verify its correctness. Testing techniques such as boundary-value analysis and equivalence classes can improve the quality of unit test and will increase the likelihood of catching bugs. The correct product line management is important too. Software product lines reduce costs, time to market and increase quality. Also, test to should be adapted to product lines. All the common components in a product line should be tested as well as the individual variabilities.

', created_at: '2011-08-08 09:42:56 -0400', updated_at: '2011-08-08 09:44:14 -0400' )
p7.tags << tag_product_lines
p7.tags << tag_bug
p7.tags << tag_testing
p7.tags << tag_microsoft
p7.tags << tag_freescale
p7.tags << tag_zune
p8 = adrian.posts.create(title: 'Ruby on Rails Architectural Design', content: '<p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Introduction</p>
<p>Ruby on Rails (RoR) is open source web framework written in the Ruby programming language, and all the applications in Rails are written in Ruby. Ruby on Rails is focused on productivity and enforces agile web development.</p>
<p>Rails framework leverages the features of the Ruby language. Yukishiro Matzumoto designed this language in 1995 influence by Perl, Eiffel, Python, Smalltalk and others. It’s a dynamically typed, fully object-oriented, general-purpose scripting language. Ruby was designed to have an elegant syntax and made as human readable as possible, for instance it does not need colons and parenthesis around parameters. Some parts of the code are read like English declarations.</p>
<p>The Ruby on Rails framework was designed for database-backed web applications. It was created as a response to heavy web frameworks such as J2EE and the .NET framework. In order to make the development process faster, Ruby on Rails uses conventions and assumptions that are considered best ways to accomplish tasks, and it’s designed to encourage those. This convention eliminates configuration code and increases productivity. Many of the common tasks for web development are built-in in the framework to work out-of-the-box. This includes email management, object-database mappers, file structures, code generation, how the elements are named and organized and so on. All of these conventions allow developers to write less code and develop agile applications. Additionally, the enhance maintainability and understandability around the Ruby on Rails developers’ community.</p>
<p>Ruby on Rails architecture has the following features:</p>
<ul>
	<li>Model-View-Controller architecture.</li>
	<li>Representational State Transfer (REST) for web services.</li>
	<li>Supports the major databases (MySQL, Oracle, MS SQL Server, PostgreSQL, IBM DB2, and more).</li>
	<li>Open-source server side scripting language.</li>
	<li>Convention over configuration</li>
	<li>Scripts generators to automate tasks.</li>
	<li>Use of YAML machine, which is a human-readable data serialization format.</li>
</ul>
<p>The above-described features are distributed in the following Rails’ components and the Fig. 2 shows the interaction between some of these components:</p>
<ul>
	<li>Action Mailer</li>
	<li>Action Pack
		<ul style="list-style-type:circle;">
			<li>Action Controller</li>
			<li>Action Dispatcher</li>
			<li>Action View</li>
		</ul>
	</li>
	<li>Active Model</li>
	<li>Active Record</li>
	<li>Active Resource</li>
	<li>Active Support</li>
	<li>Railties</li>
</ul>
<p>&nbsp;</p>
<p><img alt="Ruby on Rails Architecture Diagram" src="https://lh4.googleusercontent.com/-qUDi3Wiv6A0/RwGSHOH-OWI/AAAAAAAAAEI/_WrLZZLVsR0/s640/Rails2.png" style="width: 640px; height: 483px; "></p>
<p><strong>Figure 2. Reference model depicting the overall framework architecture [<a href="https://picasaweb.google.com/Dikiwinky/Ruby#5116531304417868130">source</a>]</strong></p>
<h2>1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Model-View-Controller Pattern</h2>
<p>Ruby on Rails uses the Model-View-Controller (MVC) architectural pattern in order to improve the maintainability of the application. The Model centralizes the business logic, the View manages the display logic, while the Controller deals with the application flow. The MVC allows a clean separation of concerns, in the way that it keeps the business logic separated from HTML views. Additionally, it improves decoupling and testing.</p>
<h3>1.1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Model</h3>
<p>The Model layer carries the business logic of the application and the rules to manipulate the data. In Ruby on Rails, the models are used to manage the interaction with their corresponding elements in the database. The Models represent the information in the database and do the appropriate validations.</p>
<h3>1.1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View</h3>
<p>The view is the front-end of the application, representing the user interface. In Ruby on Rails, views are HTML files with embedded Ruby code. The embedded Ruby code in the HTMLs is fairly simple (loops and conditionals). It is only used to display data to the user in the form of views. Views are used to provide the data to the browsers that requested the web pages. Views can server content in several formats, such as HTML, PDF, XML, RSS and more.</p>
<h3>1.1.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Controller</h3>
<p>Controllers interact with models and views. The incoming requests from the browsers are processed by the controllers, which process the data from the models and pass it to the views for presentation.</p>
<p>&nbsp;</p>
<h2>1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rails Modules</h2>
<h3>1.2.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Action Mailer</h3>
<p>This module is responsible for providing e-mail services. It processes incoming mails and creates new ones. This module can handle simple text or complex rich-format emails. Also it has common tasks built-in, such as, sending out forgotten passwords, welcome messages, and fulfilling any other written-communication’s need. Action Mailer is wrapped around the Action Controller. It provides ways to make email with templates in the same way that Action View uses it to render web pages.</p>
<h3>1.2.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Action Pack</h3>
<p>The Action Pack module provides the controller and view layers of the MVC patterns. These modules capture the user requests made by the browser and map these requests to actions. These actions are defined in the controllers layer and later the actions render a view that is displayed in the browser. Action Pack is divided in 3 sub-modules, which are: Action Dispatch, Action Controller, and Action View.</p>
<ul>
	<li><strong>Action Dispatch:</strong> handles routing of web browser request. It parses the web request and does advanced processing around HTTP, such as handling cookies, sessions, request methods, and so forth.</li>
	<li><strong>Action Controller:</strong> after the action dispatch has processed the request it makes the routing to its corresponding controller. This module provides a base controller from which all the other controllers can inherit. Action Controller contains actions to controls model and view. This module makes data available as needed, controls views rendering and redirection. Additionally, it manages the user sessions, application flow, caching features, helper modules and implement filters for the pre, during and post processing hooks.</li>
	<li><strong>Action View:</strong> it is call by the Action Controller. It renders the presentation of the web page requested. Action View provides master layouts, templates lookups and view helpers that assist the generation of the HTML, feeds and other presentation formats. There are three templates schemas in Rails, which are rhtml, rxml, and rjs. The rhtml format generates HTML views to the users with ERB (embedded ruby code in HTML). The rxml is used to construct XML documents using Ruby, and rjs allow creating dynamic JavaScript code in Ruby useful to implement AJAX functionality.</li>
</ul>
<h3>1.2.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Active Model</h3>
<p>Define the interface between the Action Pack and the Active Record modules. Also, Action Record interfaces can be used outside of Rails framework to provide Object-relational mapping (ORM) functionalities.</p>
<h3>1.2.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Active Record</h3>
<p>Active record is an architectural pattern used to manage data in relational databases through objects. In Ruby on Rails the Active Record module provides object-relational mapping to classes. This module builds the Model layer that connects the database tables with its representation in ruby classes. Rails provide tools to implement the CRUD functionality with zero-configuration. CRUD allows creating, reading, updating and deleting records from the database through ruby objects. An object represents each row in a database tables. Additionally, it also provides advance search capabilities and the ability to create relationships or associations between models. Active Records relies heavily on conventions on how the classes should be named, the tables in the database, the foreign keys and primary keys. However, the database mapping can be accomplished using configuration, but it is highly encouraged to follow the rails convention, such as active record modules.</p>
<p>This modules is used to create model classes, which contains the business logic, handle validations and relationships, automatically maps to a table and encapsulates data access, provides getters and setters, callbacks and also supports several databases.</p>
<h3>1.2.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Active Resource</h3>
<p>Active Resource module is used for managing the connection between RESTful web services and business objects. It follows the same principle of Active Record that is to reduce the amount of code needed to map resources. Active Resources maps model classes to remote REST resources in the same way that Active Record maps model classes to database tables. Active Resource leverages the HTTP protocol and adds code conventions to make it easy to infer complex structures and relations. Active Record also provides proxy capabilities between an Active Resource (client) and a RESTful service. This is accomplished implementing an object-relational mapping for REST web services. When a request to a remote resource is made, a REST XML is generated and transmitted, and then the result is parsed into a ruby object.</p>
<p>1.2.6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RESTful Architecture</p>
<p>REST stands for Representational State Transfer. REST is an alternative to web services, such as SOAP and WSDL. It relies in the HTTP protocol for all the CRUD operations: create, read, update and delete. RESTful web services are appropriated when the web services are completely stateless, limited bandwidth (it’s very useful for mobile devices since it doesn’t the the overhead of other protocols like SOAP), when the data is not generated dynamically so it could be cached to improve performance and when there is a mutual understanding between the service producer and the consumer.</p>
<h3>1.2.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Active Support</h3>
<p>It is a collection of utility classes and standard Ruby libraries extensions that are useful for the development on Ruby on Rails. It includes a rich support for multi-bytes strings, internationalization, time zones and testing.</p>
<h3>1.2.8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Railties</h3>
<p>Railties is the Rails’ core code that builds new applications. It is responsible for “glue”-ing all the above-describe modules all together. Additionally, it handles all the bootstrapping process, the command line interface and provides the Rails’ code generators. Rake is one of the command lines used to perform database tasks, deployment, documentation, testing and cleanups. Rails also supply a built-in testing framework that generates test stubs automatically when code is generated, provides unit testing, functional testing for views and controls, test fixtures and supply test data using YAML.</p>
<p>&nbsp;</p>
<h1>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Architectural Solution</h1>
<p>The selected views to analyze this architecture are Module Views and Component and Connector (C&amp;C) Views. The Module View will contain UML diagrams which represent a static view of all the components, while the Component &amp; Connector View will show the UML diagram that presents a run-time view of a system\'s architecture: what components exist at run-time and how do these components communicate with one another.</p>
<p>2.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Connect and Component View</p>
<p>The Component-and-Connector View is a dynamic view of the system and presents the components, interfaces, connectors and systems. In the interfaces representation we choose to present the Interfaces as UML interfaces. This provides a compact representation of the interfaces and avoids crowding the diagram. The connector types will be represented as associations and connector instances as links to be the consistent with the UML notation that we are using the for the interfaces representation. In the same way the systems will be presented as UML subsystems. Fig. 3</p>
<h2><img alt="Ruby on Rails component view diagram" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/ror-component-view.JPG" style="width: 696px; height: 495px; "></h2>
<p><strong>Figure 3. &nbsp;Dynamic View: Ruby on Rails Connector and Component View</strong></p>
<h2>2.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Modules View</h2>
<p>The Module View shows the code or implementation as modules and presents the interfaces and their relations between each other. The Module View contains the following: modules, interfaces, aggregations, generalizations and dependencies. These views are an appropriate way to show a static view of the architecture. Fig. 4</p>
<p align="left"><img alt="Ruby on Rails static view diagram" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/ror-statict-view.JPG" style="width: 873px; height: 561px; "></p>
<p><strong>Figure 4. Static View: Ruby on Rails Module View</strong></p>
<p>&nbsp;</p>
<p>The Module View shows the code or implementation as modules and presents the interfaces and their relations between each other. The Module View contains the following: modules, interfaces, aggregations, generalizations and relationships. This view is appropriate way to show static view of the architecture.</p>
<p>&nbsp;</p>
<h1>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pitfalls of the Ruby on Rails Architecture</h1>
<p>Since Rails is built on the Ruby language it inherits the goodness and weakness of that language. Ruby is a dynamic scripting language with an elegant syntax and fully object-oriented. Because it is an interpreted language it is slower than other languages that are compiled like Java or C++. In most cases, this difference in speed is not a problem but when the web application needs to scale to millions of concurrent users this performance starts to degrade. The Ruby language is not suited for high concurrency applications, because it is not optimized for speed computing. It was designed to be elegant, simply and for rapid development. Ruby doesn’t have good thread support yet and, like many other scripting languages, Ruby has trouble dealing with long-lived processes. But other languages, like Java, are really good at that because they have been optimized for year to handle threads efficiently. Another weakness is the Ruby’s garbage collector is not as good as Java’s in that each process requires much more memory. In terms of deployment, a web application on Ruby on Rails could be harder to deploy than sites that are using more common technologies, such as PHP. That’s because not all the hosting providers support Rails, but in time the support of Rails is increasing.</p>
<p>There are some kinds applications in which Ruby on Rails is not suitable for:</p>
<ul>
	<li>Static web sites.</li>
	<li>Content Management Systems.</li>
	<li>Sites that depend on large amount of existing code or legacy code.</li>
	<li>Sites with legacy databases.</li>
	<li>Multi-site servers, situations that require dozens or hundreds of websites residing in a single server.</li>
	<li>Very large-scale web applications (millions of concurrent users) that need to deliver high-performance.</li>
</ul>
<p>The Rails architecture sacrifices some flexibility in configuration to increase productivity based on conventions that are considered best practices. This could make experienced developers in other languages feel tied to things in “the Rails way”. On the other hand, Ruby sacrifices speed and resource management to favor elegant syntax, productivity and maintainability. However, most of the small and mid-size enterprise web applications do little computing and factors such as latency, bandwidth and database performance are not very crucial. These factors start to matter in high-traffic websites with millions of concurrent users.</p>
<p>3.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Twitter case study</p>
<p>A study case of high-traffic web application using Rails is Twitter. They started using Ruby on Rails but they reached a point that the scaling of their platform was not cost-effective. This was mainly because Ruby on Rails has poor multi-threading support. As in 2011, they have more than 1 billion tweets per week and 200 million users. In 2011 they reported [1], that are moving their back-end applications from Ruby on Rails to Java, which perform 3x faster searches and handle high concurrency better.</p>
<p>As the Twitter Engineering team stated in [<a href="http://engineering.twitter.com/2011/05/engineering-behind-twitters-new-search.html">1</a>] and [<a href="http://engineering.twitter.com/2011/04/twitter-search-is-now-3x-faster_1656.html">2</a>]:“<em>As part of the effort, we launched a new </em><a href="http://engineering.twitter.com/2010/10/twitters-new-search-architecture.html"><em>real-time search engine</em></a><em>, changing our back-end from MySQL to a real-time version of </em><a href="http://lucene.apache.org/java/docs/index.html"><em>Lucene</em></a><em>. Last week, we launched a replacement for our Ruby-on-Rails front-end: a Java server we call Blender. We are pleased to announce that this change has produced a 3x drop in search latencies and will enable us to rapidly iterate on search features in the coming months.</em>” … And later… “<em>In April 2011, we launched a replacement, called Blender, which improved our search latencies by 3x, gave us 10x throughput, and allowed us to remove Ruby on Rails from the search infrastructure. Today, we are indexing an average of 2,200 TPS while serving 18,000 QPS (1.6B queries per day!). More importantly, Blender completed the infrastructure necessary to make the most significant user-facing change to Twitter search since the acquisition of Summize.”</em></p>
<p>3.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yellopages.com case study</p>
<p>Yellowpages.com on the other hand moved from Java to Ruby on Rails framework. The rationale behind this decision is that they pursued to increase their maintainability, absolute control of URLs, no sessions, and be more agile.&nbsp; They have 170 million page views per month and 2.5 million searches per day.</p>
<p><a href="http://www.brianburridge.com/2008/06/08/yellowpagescom-on-rails/comment-page-1/#comment-15463">Brian Burridge</a> summarizes the process in the following way “YellowPages.com’s move from Java to Rails. They serve up to 23 million visitors a month. The conversion resulted in 20,000 lines of Ruby code instead of 125,000 lines of Java code, and most importantly eased the difficulty they had in maintaining it. Once complete, and optimized their site is now faster than before. They also completed the rewrite in three months with four developers.”</p>
<p>&nbsp;</p>
<h1>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Summary</h1>
<p>Ruby on Rails has received widespread support throughout the software development industry, more specifically the open-source community. This support reflects, to a certain extent, that the framework was able to provide a fairly robust architecture somewhat consistent with the goals that the architect envisioned.</p>
<p>The framework successfully exhibits must of its intended quality attributes. The responsibility of maintaining some of these qualities are deferred to third party components, as is the case of the performance quality, which is deferred to whichever web-server is configured at development or deployment time. The biggest strength of the framework is the way it leverages the Convention over Configuration and Don’t Repeat Yourself principles. This principle enables intuitive approaches when dealing with certain tactics to achieve some of the quality attributes. For instance, modifiability becomes less hassle due to the isolation or centralization of certain changes since the framework relies on default places where certain functionality should be located.</p>
<p>On the other hand, Rails inherits some of the weaknesses of the language used to build it. More specifically, poor concurrency support hinders the scalability potential of an application built using Ruby on Rails. Furthermore, memory management is not as efficient as other languages available. For instance, Java exhibits a much better garbage collector behavior when compared with Ruby on Rails.</p>
<p>Overall, it would be safe to say that the framework architecture meets most of its intended goals, but not without its caveats. The level and speed of adoption in industry and the open-source community could be used as validation of the potential the framework has, but at the same time we see limitations emerging when using the framework. Some of these limitations are part of the driven force behind the ongoing evolution of Ruby on Rails.</p>
', created_at: '2011-08-11 13:03:57 -0400', updated_at: '2011-08-12 16:13:32 -0400' )
p8.tags << tag_ruby_on_rails
p8.tags << tag_software_architecture
p8.tags << tag_web_frameworks
p8.tags << tag_web_development
p8.tags << tag_agile_frameworks
p8.tags << tag_twitter
p9 = adrian.posts.create(title: 'Git auto-commit with Crontab', content: 'You might want to commit from a git repository from time to time for several purposes (backup, control version, continuous integration, etc). One way to accomplish that is using the CronTab (Cron is used to run periodic task in Unix-like systems).

Here is an example. 

1.- Create an script. e.g. baskitup.sh with:
<pre>
<code># MySQL-dump: save a copy of the actual content in the database. (this is for a Drupal site, the backup is done using drupal\'s drush)
php -c ~/www/php.ini  ~/drush/drush.php -r /home/adrimej0/www -u 1 sql-dump --result-file=latest.sql

# Git: add and commit changes
cd /home/adrimej0/www && /home/adrimej0/opt/bin/git commit -a -m "weekly crontab backup `date`"

# send data to Git server
cd /home/adrimej0/www && /home/adrimej0/opt/bin/git push origin master</code>
</pre>

2.- Set up the cron. In the shell write the following
<pre>
<code>$ crontab -e</code>
</pre>
add the following command line for weekly auto-commits:
<pre>
<code>MAILTO="youremail@domain.com"
0 0 * * 0 /home/adrimej0/www/backitup.sh</code>
</pre>

Done. Now your (drupal) site will be backed up every week automatically (every Sunday at midnight).
', created_at: '2011-08-15 10:54:54 -0400', updated_at: '2011-08-24 12:58:24 -0400' )
p9.tags << tag_unix
p9.tags << tag_crontab
p9.tags << tag_git
p9.tags << tag_drupal
p9.tags << tag_drush
p9.tags << tag_how_to
p10 = adrian.posts.create(title: 'Automated Reverse Engineering Java-Swing GUI - Paper Review', content: 'The extraction of Java-Swing GUI information using AspectJ seems like an way to do Reverse Engineering. The extracted information could be use later to migrate applications Java-Swing applications to the web, enhance program understating, generate UML diagrams and a myriad of other uses. This article will be summary of the paper about this topic [1].

The authors of the paper [1] are using aspect oriented programming (AOP) to intercept the application while is running and extract desired information. The information wanted in this case is the following ones: user events, windows and widgets. This type of reverse engineering is performed dynamically. The information is gathered while the user is using the application as usual. The more time the user use the application the more information is gathered. For this task, AspectJ is used. AspectJ is aspect-oriented extension created for Java programming language. AspectJ can interact with java-compiled code (bytecode) and it intercepts specific function calls.  For instance to extract windows and widget the aspect code will detect the Java-Swing calls of: “showFrame()”, “setVisible()”, “show()” in the JFrames, JPanels and widgets. In order to extract the user events, the aspect code intercepts the calls to “JTextField.setText()” for user input in text fields and so forth. Finally, all the information extracted is stored in XML and then can be used for different uses: migration of java-swing applications to web, generate UML design diagrams, you name it! 

Something about the title of the paper [1], it\'s that it mention web migration; however, in the content of the paper there are not depth in that topic. It only explain in detail how to extract information needed for the reverse engineering, but there is no detail in how to use the extracted information to do it web-enabled.

Reference
[1] Samir, H.; Kamel, A.; , "Automated reverse engineering of Java graphical user interfaces for web migration," Information and Communications Technology, 2007. ICICT 2007. ITI 5th International Conference on , vol., no., pp.157-162, 16-18 Dec. 2007', created_at: '2011-09-07 00:19:08 -0400', updated_at: '2011-09-21 14:22:29 -0400' )
p10.tags << tag_software_engineering
p10.tags << tag_reverse_engineering
p10.tags << tag_gui
p10.tags << tag_aspect_oriented_programming
p10.tags << tag_aspectj
p10.tags << tag_dynamic_analysis
p10.tags << tag_paper_review
p11 = adrian.posts.create(title: 'Determining granularity of independent tasks for reengineering a legacy system into an OO system - Paper Review', content: 'In this work [1] the authors explain the process of reengineering a legacy system in COBOL for object-oriented. Reengineering is a multi-step process to convert sequential and procedural-driven system into object-oriented and event-driven system. The proposed method [1] to accomplish this task is to transform the legacy system source code into an intermediary language: Wide Spectrum Language (WSL). The WSL code is used to apply an algorithm to identify the optimal granular unit for independent tasks taking into consideration factors as size, dependencies, and coupling. The detailed techniques used to determine the level of granularity are the following four: Determining Data and Control Dependencies (determine the dependency, if any, between data, variables, and controls), Program Block Identification (identify logical unit of execution of the legacy system), Individual Code line Evaluation (is the minimal granular unit of the legacy system: an code statement), and Procedure Granularity (is the largest self-contained granular units possible).

In my opinion, It’s a good idea to transform legacy system into an intermediary language. This way the process will be language independent. However, they should explain in more detail about the WSL intermediary language. And also, give more details in the transformation from COBOL to WSL and how it can be transform to OO systems. 

Reference:
[1] Millham, R.; Ward, M.; Hongji Yang; , "Determining granularity of independent tasks for reengineering a legacy system into an OO system," Computer Software and Applications Conference, 2003. COMPSAC 2003. Proceedings. 27th Annual International , vol., no., pp. 342- 347, 3-6 Nov. 2003
', created_at: '2011-09-14 11:43:35 -0400', updated_at: '2011-09-21 14:22:11 -0400' )
p11.tags << tag_paper_review
p11.tags << tag_wide_spectrum_language__wsl_
p11.tags << tag_unified_modelling_language__uml_
p11.tags << tag_reverse_engineering
p11.tags << tag_cobol_legacy_systems
p11.tags << tag_reengineering
p12 = adrian.posts.create(title: 'On line Course Organization - Paper Review', content: '<p>This paper [1] proposed a specialized search engine, called Fusion, which index meta-information about available courses. Google can be used to perform this search, but the result will be too broad. Fusion provides specialized results only. In order to accomplish this task, Fusion used the web crawler Nutch, which is used to extract the content of courses. The crawler does real-time decisions to parse and store only the necessary data instead of the whole content. The extraction of the metadata is done using the following technologies: NekoHTML (HTML document parser), Xalan (XSLT for transforming XML to HTML), XPath (used to navigate through elements in the XML). After all the course metadata is extracted, the information is classified according to the IEEE-LTSC LOM (Learning Object Metadata). Finally all the data is stored and used for the web portal.</p>
<div><img alt="architecture online course crawler" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/architecture-online-course-crawler.png" style="width: 500px; height: 236px; "></div>
<div style="text-align: left; ">Source: [1]</div>
<div style="text-align: right; ">&nbsp;</div>
<div>I like the amount of specialized tools used to develop the Fusion (shown bellow). However, as they said in their conclusion this extraction could be extended to support eLearning 2.0 features: personal spaces, user contributions, user feedbacks, user tags, and user comments.</div>
<div>&nbsp;</div>
<div>
	<div>This paper [1] proposed a specialized search engine, called Fusion, which index meta-information about available courses. Google can be used to perform this search, but the result will be too broad. Fusion provides specialized results only. In order to accomplish this task, Fusion used the web crawler Nutch, which is used to extract the content of courses. The crawler does real-time decisions to parse and store only the necessary data instead of the whole content. The extraction of the metadata is done using the following technologies: NekoHTML (HTML document parser), Xalan (XSLT for transforming XML to HTML), XPath (used to navigate through elements in the XML). After all the course metadata is extracted, the information is classified according to the IEEE-LTSC LOM (Learning Object Metadata). Finally all the data is stored and used for the web portal.</div>
	<div>&nbsp;</div>
	<div>I like the amount of specialized tools used to develop the Fusion (shown bellow). However, as they said in their conclusion this extraction could be extended to support eLearning 2.0 features: personal spaces, user contributions, user feedbacks, user tags, and user comments.</div>
	<div>&nbsp;</div>
	<div><strong>Highlighted Mentions:</strong></div>
	<ul>
		<li>Web crawlers: JSpider, Wget and Nutch. Preferred: Nutch.</li>
		<li>Online courses resources: MIT OCW, UIUC, GreatLearning</li>
		<li>Commercial elearning: BlackBoard, WebCT, and Desire2Learn. Open-source: Moodle</li>
		<li>Metadata extraction: Dom-tree approaches: HMM (Hidden Markov Model), CRF (Conditional Random Fields) and SVM (Support Vector Machine)</li>
		<li>HTML Scanner: NekoHTML, XPath</li>
		<li>XSLT processor: “Xalan”</li>
		<li>Glossary: SCORM (Sharable Content Object Reference Model), LOM (Learning Object Management), IEEE-LTSC LOM (Learning Object Metadata), which is developed upon IMS metadata.</li>
		<li>Crawling approaches:&nbsp;Intelligent Crawling with keywords,&nbsp;OPIC algorithm com- puting the importance value of websites,&nbsp;Learnable Crawler using URL seeds, topic keywords and URL prediction,&nbsp;Decision Tree method,...</li>
	</ul>
	<div>&nbsp;</div>
	<div>References:</div>
	<div>[1] Zhang, M., W. Wang, et al. "On Line Course Organization", Advances in Web Based Learning – ICWL 2007. H. Leung, F. Li, R. Lau and Q. Li, Springer Berlin / Heidelberg. 4823: 148-159. 2008</div>
</div>
<p>&nbsp;</p>
<ul style="border-style: initial; border-color: initial; ">
	<li style="border-style: initial; border-color: initial; ">ChinaGrid GreatLearning project, http://greatlearning.grids.cn</li>
	<li style="border-style: initial; border-color: initial; ">MIT’s Open Courseware (OCW), http://ocw.mit.edu/index.html</li>
	<li style="border-style: initial; border-color: initial; ">BlackBoard, http://www.blackboard.com/</li>
	<li style="border-style: initial; border-color: initial; ">WebCT, http://www.webct.com/</li>
	<li style="border-style: initial; border-color: initial; ">Desire2Learn, http://www.desire2learn.com/</li>
	<li style="border-style: initial; border-color: initial; ">Nutch, http://lucene.apache.org/nutch/</li>
	<li style="border-style: initial; border-color: initial; ">LOM, WG12: Learning Object Metadata, http://ltsc.ieee.org/wg12/</li>
	<li style="border-style: initial; border-color: initial; ">SCRORM, http://www.adlnet.org/index.cfm?fuseaction=scormabt</li>
	<li style="border-style: initial; border-color: initial; ">Jena – A Semantic Web Framework for Java, http://jena.sourceforge.net/</li>
</ul>
<p>&nbsp;</p>
', created_at: '2011-09-17 18:37:04 -0400', updated_at: '2011-10-04 15:38:20 -0400' )
p12.tags << tag_paper_review
p12.tags << tag_focused_crawling
p12.tags << tag_metadata_extraction
p12.tags << tag_learning_object_management
p12.tags << tag_ontology
p12.tags << tag_e_learning
p13 = adrian.posts.create(title: 'E-Learning on the Social Semantic Information Sources - Paper Review', content: '<p>The paper [1] is proposing a social bookmarking system called Social Semantic Collaborative Filtering (SSCF). It presents how digital libraries can be combined with social semantic information sources and it exemplifies how these techniques can improve e-Learning. The goal of the SSCF is to enhance individual bookmarks with shared knowledge of the community. The Fig. 1 shows the dificulty (or time-consumptions) of bookmarking all the interested links and then share all of them in a blog for other users.</p>
<p><img alt="Use Case Scenario for SSCF" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/Screen%20shot%202011-09-21%20at%201.24.35%20PM.png" style="width: 600px; height: 222px; "></p>
<p>Source: [1]</p>
<p>In order to solve this problem, they [1] proposed a SSCF bookmarking system, which is based on JeremeDL. This platform joins 3 separated applications: blog, Digital Library, and bookmarking application (Fig. 3), to solve the problems above-mentioned.</p>
<p><img alt="SSCF solution" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/Screen%20shot%202011-09-21%20at%201.26.20%20PM.png" style="width: 600px; height: 442px; "></p>
<p>Source: [1]</p>
<p>JeromeDL can be use to reduce the time of login in 3 different applications as show in the Fig. 5</p>
<p><img alt="JeromeDL time comparison with other systems" src="http://www.adrianmejiarosario.com/sites/default/files/pictures/Screen%20shot%202011-09-21%20at%201.26.39%20PM.png" style="width: 600px; height: 196px; "></p>
<p>Source: [1]</p>
<p>The process that includes SOIC ontology support and alignment is the following:</p>
<ol>
	<li>Users can bookmark blog post, forums, or URL site.</li>
	<li>Extract metadata from the bookmarked site using SOIC browser (<a href="http://sparql.captsolo.net/browser/browser.py?url=URL" target="_blank">http://sparql.captsolo.net/browser/browser.py?url=URL</a>).</li>
	<li>All relevant information is saved to the SSCF RDF repository.</li>
	<li>SSCF module generates bookmark trees and also displays SIOC information.</li>
	<li>Ontology alignment: creating some content using SIOC metadata and delivery mediation mechanism for other SSCF/JeromeDL content.</li>
</ol>
<p>I like the idea of organizing and categorizing URL sites using existing ontologies and web semantics. This allow to group similar content together and enhance navigability of the information. It’s also interesting the way they join multiple applications (library, bookmarks and blog) in other to reduce the time as shown in the Fig. 5. However, it’s not clear to me how if the SSCF is an addon to the JeremeDL system or if is a fork of this project.</p>
<p><strong>Mentions</strong>:</p>
<ul>
	<li>Semantic Web,&nbsp;<a href="http://en.wikipedia.org/wiki/Semantic_Web" target="_blank">http://en.wikipedia.org/wiki/Semantic_Web</a>,</li>
	<li>Ping Semantic Web,&nbsp;<a href="http://pingthesemanticweb.com/" target="_blank">http://pingthesemanticweb.com/</a>, repository for RDF documents</li>
	<li>SIOC (Semantically-Interlinked Online Communities),&nbsp;<a href="http://sioc-project.org/" target="_blank">http://sioc-project.org/</a>, aims to enable the integration of online community information</li>
	<li>Connotea,&nbsp;<a href="http://www.connotea.org/" target="_blank">http://www.connotea.org/</a>, Free online reference management for all researchers, clinicians and scientists.</li>
	<li>Open directory, dmoz.org, uses a hierarchical ontology scheme for organizing site listings.</li>
	<li>RDF (Resource Description Framework),<a href="http://en.wikipedia.org/wiki/Resource_Description_Framework" target="_blank">http://en.wikipedia.org/wiki/Resource_Description_Framework</a>, description or modeling of information that is implemented in web resources</li>
	<li>JeromeDL,&nbsp;<a href="http://www.jeromedl.org/" target="_blank">http://www.jeromedl.org/</a>, Social Semantic Digital Library. As a digital library, it allows institutions to easily publish documents on the Web. It supports a variety of document formats and allows to store and query a rich bibliographic description of each document</li>
</ul>
<p><strong>Ideas</strong>:</p>
<ul>
	<li>Uses a hierarchical ontology scheme for organizing site listings and also uses web semantics to categorize information.</li>
	<li>Join multiple applications to reduce time user\'s time performing common tasks.</li>
</ul>
<p><strong>Reference</strong>:<br>
	[1] Sebastian Ryszard Kruk, Adam Gzella, Jaros law Dobrzanski,Bill McDaniel, and Tomasz Woroniecki; "E-Learning on the Social Semantic Information&nbsp;Sources"; EC-TEL 2007, LNCS 4753, pp. 172–186, 2007. Springer-Verlag Berlin Heidelberg 2007.</p>
', created_at: '2011-09-21 11:50:27 -0400', updated_at: '2011-09-21 14:21:22 -0400' )
p13.tags << tag_paper_review
p13.tags << tag_e_learning
p14 = adrian.posts.create(title: 'Dynamic Hypertext Generation for Reusing Open Corpus Content - Paper Review', content: 'B. Steichen, S. Lawless, V. Wade et al. (2009) [1] proposed an Adaptive Hypermedia (AH) for dynamic hypertext generation of learning content. This system provides personalized learning services, which aims to enrich the learning process and the satisfaction of the learners. In order to accomplish these tasks: the system perform open courses harvesting and identification, generate dynamically hyperlinks based on the learner experience and appropriated learning strategies, and present the content in a uniform presentation across heterogeneous content. National digital content repositories cross institution sharing of learning resources and universities open courseware seed the identification task. Web crawlers are used to harvest the open corpus. Focused crawlers, such as Nalanda and Combine are mentioned and Heritix is recommended.  The harvested data is later indexed to make it more discoverable with open sources solutions, such as Nutch and Swish-e and then retrieve using search engines like Lucene and Lemur. For the metadata classification there are 3 approaches: (i) extraction of the metadata from files that already have it; (ii) infer and generate metadata automatically. Semtag from IBM perform can do this using a Taxonomy Based Disambiguation (TBD) algorithm. Also Klarity and DC.dot are metadata generators. (iii) Use of social bookmarking (digg, flickr, facebook,…) to extract the metadata/content description. For the dynamic hypertext generation a system was develop on top of the Adaptive Personalized eLearning Service (APeLS). This facilitates students to learn about specific concepts using query of keywords. In [2] can found be found also the results of this system.

[1] Steichen, B., Lawless, S., O’Connor, A., & Wade, V. (2009). Dynamic Hypertext Generation for Reusing Open Corpus Content. HT’09, June 29–July 1, 2009, Torino, Italy, 119-128. ACM. 
', created_at: '2011-09-22 12:14:06 -0400', updated_at: '2011-10-04 15:52:28 -0400' )
p14.tags << tag_paper_review
p14.tags << tag_hypertext_generation
p14.tags << tag_adaptation
p14.tags << tag_personalisation
p14.tags << tag_open_corpus_content
p14.tags << tag_metadata_generation
p14.tags << tag_e_learning
p15 = adrian.posts.create(title: 'OCCS: Enabling the Dynamic Discovery, Harvesting and Delivery of Educational Content from Open Corpus Sources - Paper Review', content: 'S. Lawless, V. Wade et al. (2008) [1] introduces the Open Corpus Content Service (OCCS), which is a system to discover, harvest, classify and index educational content from the Internet. It aims to provide a dynamic learning object generation based on the background of the learner. The OCCS employs Heritrix (open source, web-scale, archival web crawler) for discovery educational content available in the WWW. Heritrix uses languages guessers (JTCL) and text classifier (Rainbow) to classify the extracted data. All the content is indexed in ARC files with NutchWAX and Hadoop. Finally the data is presented to the users using WERA (WEb aRchive Access). Additionally, the OCCS system is evaluated using a specific topic and the results are shown in [1].

Something that I like about this paper is that it mentions most of the tool used to implement the OCCS in all this stages. All these tools can be used by the reader to implement similar projects.

This paper seem to be the one of the earliest of a series of papers about the same topic by the same authors:
[2] S. Lawless, L. Hederman, and V. Wade, “Enhancing Access to Open Corpus Educational Content : Learning in the Wild,” HT  ’08 Proceedings of the nineteenth ACM conference on Hypertext and hypermedia, pp. 167-174, 2008.
[3] <a href="http://www.adrianmejiarosario.com/content/dynamic-hypertext-generation-reusing-open-corpus-content-paper-review">B. Steichen, S. Lawless, A. O’Connor, and V. Wade, “Dynamic Hypertext Generation for Reusing Open Corpus Content,” Proceedings of the 20th ACM conference on Hypertext and hypermedia HT 09, pp. 119-128, 2009.</a>

Reference
[1] S. Lawless, L. Hederman, and V. Wade, “OCCS: Enabling the Dynamic Discovery, Harvesting and Delivery of Educational Content from Open Corpus Sources,” 2008 Eighth IEEE International Conference on Advanced Learning Technologies, pp. 676-678, 2008.
', created_at: '2011-09-27 11:25:56 -0400', updated_at: '2011-10-04 16:56:07 -0400' )
p15.tags << tag_paper_review
p15.tags << tag_e_learning
p15.tags << tag_web_semantics
p15.tags << tag_focused_crawling
p16 = adrian.posts.create(title: 'eLearning 2.0 and Social, Practice-Oriented Communities to Improve Knowledge in Companies - Paper Review', content: 'S. R. Kruk et al. (2007) [1] implemented a social bookmarking system called Social Semantic Collaborative Filtering (SSCF). The goal of the SSCF is to enhance individual bookmarks with shared knowledge of the community. It also presents how digital libraries can be combined with social semantic information sources and it exemplifies how these techniques can improve e-Learning. Digital Libraries and other open courses can leverage their potential with the collaborative architectures. Learners can use it to exchange information, and express and synthetize knowledge e-Learning environments. It also makes use of the social bookmarking, web semantics and ontology services in other to organize and classify knowledge.

About this paper, I like the how it states the benefits of this e-Learning systems for companies and institutions and also the benefits web collaboration to boost learning.  Additionally, the idea of using social bookmarking to classify educational content is pretty interesting.

[1]	I. Hamburg, “eLearning 2.0 and Social, Practice-Oriented Communities to Improve Knowledge in Companies”, 2010 Fifth International Conference on Internet and Web Applications and Services, pp. 411-416, 2010.
', created_at: '2011-09-27 11:27:53 -0400', updated_at: '2011-10-04 16:54:22 -0400' )
p16.tags << tag_paper_review
p16.tags << tag_social_bookmarking
p16.tags << tag_e_learning
p16.tags << tag_web_semantics
p17 = adrian.posts.create(title: 'Focused Crawling for Automatic Service Discovery, Annotation, and Classification in Industrial Digital Ecosystems - Paper Review', content: 'H. Dong et al. (2011) [1] introduce an approach to enhance disperse and heterogeneous industrial digital ecosystem for e-Learning. Its target is to discover and classify the industrial information automatically using focused crawlers. The focused crawler perform 5 operations: webpage fetcher (multithreading web crawling given a URL list), policy center  (fetching boundaries, max. depth, multithreading priority), webpage pool (store data as plain text), webpage parser (use heuristics rules on website layouts to extract desired data), service metadata generator (produce metadata and in ontology markup language), and service metadata classifier (used structured domains of knowledge to classify the data). [4] also explain in detail the Ontology Markup Language (OML) and perform several test and performance measures, such as harvest rate, precision, recall, harmony, f-measure, fallout rate, and more.

This paper provides a detailed methodology to perform focused web crawling of educational content. It also provides great details about the classification of the content using web semantics and ontology services. Examples of Web Ontology Language (OWL) are shown. Another thing that I like is the amount of metrics they have to measure the performance of the system. However, this project doesn\'t explain how the user is going to interact with the recollected data and the presentation layer.

[1] H. Dong and F. K. Hussain, “Focused Crawling for Automatic Service Discovery, Annotation, and Classification in Industrial Digital Ecosystems,” IEEE Transactions on Industrial Electronics, vol. 58, no. 6, pp. 2106-2116, Jun. 2011.', created_at: '2011-10-04 16:04:55 -0400', updated_at: '2011-10-04 16:48:02 -0400' )
p17.tags << tag_paper_review
p17.tags << tag_e_learning
p17.tags << tag_focused_crawling
p17.tags << tag_web_semantics
p18 = adrian.posts.create(title: 'Integration of Visualization Techniques and Completion Strategy to Improve Learning in Computer Programming', content: 'The advantages of different presentation media are explored in the work of N. Hashim and S. Salam in “Integration of Visualization Techniques and Completion Strategy to Improve Learning in Computer Programming” [1]. They compare the advantages of Mobile-based training (MBT) over Web-based training (WBT) for learning computer programming. Additionally, they explain some features that aid the learning process, such as visualization techniques and completion strategy. Visualization techniques refers to the use of static (images and text) and dynamic (animation, voice and videos) presentation. Completion strategy is an assessment technique in which the learner have to prove their knowledge gained. This is done by filling blanks of incomplete code snippets, rewrite programs to improve performance, and so forth. 

Reference
[1] N. Hashim and S. Salam, “Integration of Visualization Techniques and Completion Strategy to Improve Learning in Computer Programming,” 2009 IEEE International Conference of Soft Computing and Pattern Recognition, pp. 665-669, 2009.
', created_at: '2011-10-26 12:52:02 -0400', updated_at: '2011-10-26 12:52:02 -0400' )
p18.tags << tag_paper_review
p18.tags << tag_e_learning
p19 = adrian.posts.create(title: 'An Approach to Annotation of Learning Texts on Programming within a Web-Based Educational System - Paper Review', content: 'V. Mihál and M. Bieliková presents “An Approach to Annotation of Learning Texts on Programming within a Web-Based Educational System”. This work leverage the usage of annotation to enhance programming learning experience. Annotations provide to learners supplementary information that they otherwise will have to find by themselves somewhere else.  They describe different types of annotation: manual and automatic. For the manual annotations the user the user provides insert related notes to material. Automatic annotation are done without human intervention. It uses ontologies and language processing to identify related content and insert it in the appropriated place. 

Reference
V. Mihál and M. Bieliková, “An Approach to Annotation of Learning Texts on Programming within a Web-Based Educational System,” 2009 IEEE Fourth International Workshop on Semantic Media Adaptation and Personalization, pp. 99-104, 2009.
', created_at: '2011-10-26 13:26:15 -0400', updated_at: '2011-10-26 13:26:15 -0400' )
p19.tags << tag_paper_review
p19.tags << tag_e_learning
p20 = adrian.posts.create(title: 'Update Drupal sites', content: 'The better way to learn is by a concrete example. I update a site called "heyshuga" from Drupal 7.8 to 7.9. Here are the steps

1. Download the latest version of drupal

$ wget http://drupal.org/files/projects/drupal-x.y.tar.gz
$ tar -zxvf drupal-x.y.tar.gz

-or using drush-

$ drush dl drupal

2. Copy the new files to the old directory

$ cp -R drupal-x.y/* drupal-x.y/.htaccess /path/to/your/installation


3. Run the drupal update

www.yousite.com/update.php



', created_at: '2011-11-04 02:04:24 -0400', updated_at: '2012-01-25 23:38:08 -0500' )
p20.tags << tag_drupal
p21 = adrian.posts.create(title: 'How to execute SQL statements on MS Access?', content: 'Sometimes is quicker to use SQL statements than create tables using the MS Access Visual Designer. For instance, if you already have the SQL code from other databases this could be useful.

Here are the steps of how to create a new table programmatically in Access (2007):

1. Open/create your database on MS Access
2. Menu: \'Databases Tools\' > \'Visual Basic\' (this will open the visual basic editor
3. in the Visual Basic Editor, Menu: Run
4. Insert the name of your macro and click \'create\' button
5. Insert a code similar to the shown below. Replace the path in \'OpenDatabase\' with your database path; and fill \'dbs.Execute\' with your own SQL statements



Sub createdb()
    Dim dbs As Database

    \' Modify this line to include the path to Northwind
    \' on your computer.
    Set dbs = OpenDatabase("C:\\amr\\projects\\sites\\files\\tf_pledge_reminder_email.accdb")

    \' Create a table with two text fields.
    dbs.Execute "create table RIT_TF_PLG_REM_EMAIL_TEST2 (   pref_mail_name  VARCHAR(60), pd_to_date      NUMBER,   this_payment    NUMBER )"

    dbs.Close
End Sub

6. Menu: Run
7. You are all set.

If you have any questions you can contact me or write a comment', created_at: '2011-11-09 11:12:16 -0500', updated_at: '2011-11-09 11:12:40 -0500' )
p21.tags << tag_ms_access
p21.tags << tag_sql
p21.tags << tag_visual_basic
p21.tags << tag_macros
p21.tags << tag_how_to
p22 = adrian.posts.create(title: 'How to setup Drupal WYSIWYG and Images uploading?', content: '<p>It have been a pain for me to upload images and deal with tons of WYSIWYG editors... After many trials in this post I recompiled my experiences and the best method that I have found so far. If you have any suggestion I&#39;m willing to hear it, too.</p>
<div>
	<strong>1. Install and enable the following modules:</strong></div>
<div>
	&nbsp;</div>
<div>
	http://drupal.org/project/ckeditor (disable the WYSIWYG module if you have it install it)</div>
<div>
	http://drupal.org/project/imce -or- http://drupal.org/project/elfinder</div>
<div>
	&nbsp;</div>
<div>
	- optional -</div>
<div>
	http://drupal.org/project/ckeditor_link</div>
<div>
	&nbsp;</div>
<div>
	<div>
		How to setup Drupal WYSIWYG and Images uploading?</div>
	<div>
		&nbsp;</div>
	<div>
		It have been a pain for me to upload images and deal with tons of WYSIWYG editors... After many trials in this post I recompiled my experiences and the best method that I have found so far. If you have any suggestion I&#39;m willing to hear it, too.</div>
	<div>
		&nbsp;</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>1. Install and enable the following modules:</strong></div>
	<div>
		&nbsp;</div>
	<div>
		http://drupal.org/project/ckeditor (disable the WYSIWYG module if you have it install it)</div>
	<div>
		http://drupal.org/project/imce -or- http://drupal.org/project/elfinder</div>
	<div>
		&nbsp;</div>
	<div>
		- optional -</div>
	<div>
		http://drupal.org/project/ckeditor_link</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>2. Setting up IMCE</strong></div>
	<div>
		a. Install and enable the IMCE module at module administration page.</div>
	<div>
		b. Create configuration profiles and assign them to user roles at /?q=/admin/config/media/imce <strong>-or-</strong> Menu: Configuration &raquo; Media &raquo; IMCE&nbsp;</div>
	<div>
		c. Test it at /imce.</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>3. Setup text formats. </strong>You can create two new ones to be used by the ckeditor (basic and full):</div>
	<div>
		a. Menu: Configuration &raquo; Content authoring &raquo; Text formats</div>
	<div>
		b. Click &quot;+ Add text format&quot; and add two new formats &quot;ckeditor-basic&quot; and &quot;ckeditor-full&quot; with the &quot;administrator&quot; and &quot;authenticated users&quot; check boxes marked. Everything else could remain in their default values.</div>
	<div>
		c. Back to Configuration &raquo; Content authoring, you can rearrange the order, the top most one will be the default.</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>4. Setup CKEditor</strong></div>
	<div>
		After you install the CKEditor module, download the latest version of ckeditor from http://ckeditor.com/download</div>
	<div>
		a. &quot;Create a new profile&quot; link</div>
	<div>
		b. Setup the name in the &quot;Basic Setup&quot; section and choose one of Input format that you created in step (3)</div>
	<div>
		c. In &quot;Editor Appearance&quot; you can setup the toolbar load (basic, full, advance)</div>
	<div>
		d. In &quot;FILE BROWSER SETTINGS&quot; select &quot;IMCE&quot; as the &quot;File browser type&quot;</div>
	<div>
		e. Save and you can repeated this steps for full and basic.</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>5. You are all set.&nbsp;</strong>When you add new content your Textbox and imaging uploading should look like this:</div>
</div>
<div>
	&nbsp;</div>
<div>
	<img alt="" src="http://adrianmejiarosario.com/sites/default/files/Screen%20Shot%202011-11-09%20at%205.05.23%20PM.png" style="width: 500px; height: 325px; " /></div>
<div>
	&nbsp;</div>
', created_at: '2011-11-09 17:07:20 -0500', updated_at: '2011-11-09 17:08:44 -0500' )
p22.tags << tag_drupal
p22.tags << tag_wysiwyg
p22.tags << tag_imce
p22.tags << tag_ckeditor
p23 = adrian.posts.create(title: 'git+ftp: Publish Git repository over FTP ', content: '<p>I have been working with websites for a while and also with different web hosts. The default way to upload content is through FTP but it takes a lot of time because upload the entire site each time. Some web hosts &nbsp;have ssh and git, which is great for deployement because you can keep track of the versions and also upload only the files that changes.</p>
<div>
	&nbsp;</div>
<div>
	In order to use git for local development and ftp (for hosting that doesn&#39;t support git/ssh) there are some options:</div>
<div>
	&nbsp;</div>
<div>
	<a href="https://github.com/resmo/git-ftp">https://github.com/resmo/git-ftp</a> - Git powered FTP client written as shell script.</div>
<div>
	<a href="https://github.com/ezyang/git-ftp">https://github.com/ezyang/git-ftp</a> - A quick and efficient way of pushing changed files to a website via FTP using python.</div>
<div>
	&nbsp;</div>
<div>
	I have use ezyang/git-ftp to deploy my drupal websites with good results.</div>
<div>
	&nbsp;</div>
<div>
	1. Install &#39;git-python&#39; first from <a href="http://gitorious.org/git-python">http://gitorious.org/git-python</a> -or- using `easy_install gitpython`</div>
<div>
	2. git clone <a href="https://github.com/ezyang/git-ftp.git">https://github.com/ezyang/git-ftp.git</a></div>
<div>
	3. You can create an alias for easy access in `~/.bash_profile` such as `alias git-ftp=&quot;python ~/git-ftp/git-ftp.py &quot;`</div>
<div>
	4. Just run the command `python ~/git-ftp/git-ftp.py ` where is your git repository that you want to upload. I will prompt all the ftp details and also will create the config file for you.</div>
<div>
	&nbsp;</div>
<div>
	You might want to setup files to ignore. If you are using drupal you should create a .gitignore file with a content similar to this:</div>
<div>
	&nbsp;</div>
<div>
	<pre>
.DS_Store*


# Ignore configuration files that may contain sensitive information.

sites/*/settings*.php


# Ignore paths that contain user-generated content.

sites/*/files

sites/*/private</pre>
</div>
<div>
	&nbsp;</div>
', created_at: '2011-11-09 22:34:58 -0500', updated_at: '2011-11-09 22:51:21 -0500' )
p23.tags << tag_git
p23.tags << tag_ftp
p23.tags << tag_web_development
p23.tags << tag_drupal
p23.tags << tag_gitignore
p24 = adrian.posts.create(title: 'Regular Expressions in C# and Java - CSV Example', content: '<p>Regular expressions are used to find matches in texts. The following is a real application of Regex in C# and Java.&nbsp;</p>
<div>
	<div>
		CSV are files that all the data is separated by a comma. E.g:</div>
	<pre>
name,line1,line2,city,zip code,country</pre>
	<div>
		You cand easily use String.Split() in C# to get all the values. But, there are cases when the data can contain comma. E.g:</div>
	<pre>
&quot;Mr. John Doe, Jr.&quot;,7926 Glenbrook Dr., 14623</pre>
	<div>
		In this case a regular expression (regex) could be use to determine if the comma is inside a quote or not.</div>
	<div>
		&nbsp;</div>
	<div>
		C# Example:</div>
	<div>
		&nbsp;</div>
	<div>
		<pre>
    public string[] parseCSV(string line)
    {
        List&lt;string&gt; datalist = new List&lt;string&gt;();

        /*
         * Define a regular expression for csv.
         * This Pattern will match on either quoted text or text between commas, including
         * whitespace, and accounting for beginning and end of line.
         */

        Regex rx = new Regex(&quot;\&quot;([^\&quot;]*)\&quot;|(?&lt;=,|^)([^,]*)(?:,|$)&quot;,
          RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // Find matches.
        MatchCollection matches = rx.Matches(line);

        // Report the number of matches found.
        Console.WriteLine(&quot;{0} matches found.&quot;, matches.Count);

        // Report on each match.
        foreach (Match match in matches)
        {
            if (match.Groups[1].Value.Length &gt; 0)
                datalist.Add(match.Groups[1].Value); // match csv values inside commas
            else
                datalist.Add(match.Groups[2].Value); // match csv values outside commas
        }
        return datalist.ToArray();
    }</pre>
	</div>
	<div>
		&nbsp;</div>
	<div>
		&nbsp;</div>
	<div>
		Java Example:</div>
	<div>
		<pre>
    public String[] parse(String csvLine) {
        Pattern csvPattern = Pattern.compile(&quot;\&quot;([^\&quot;]*)\&quot;|(?&lt;=,|^)([^,]*)(?:,|$)&quot;);
        matcher = csvPattern.matcher(csvLine);
        allMatches.clear();
        String match;

        while (matcher.find()) {
                match = matcher.group(1);

                if (match!=null) {
                        allMatches.add(match);
                }
                else {
                        allMatches.add(matcher.group(2));
                }
        }

        size = allMatches.size();               
        if (size &gt; 0) {
                return allMatches.toArray(new String[size]);
        }
        else {
                return new String[0];
        }                       
    } </pre>
	</div>
</div>
<p>&nbsp;</p>
', created_at: '2011-11-10 10:09:57 -0500', updated_at: '2011-12-06 23:08:13 -0500' )
p24.tags << tag_c_
p24.tags << tag_csv
p24.tags << tag_regex
p24.tags << tag_java
p25 = adrian.posts.create(title: 'How to remove programs from the start up in Mac OS X', content: '<p>Well... I have done this so many times in Windows (it&#39;s just executing &quot;msconfig&quot; you can edit the startup items).&nbsp;Today, I had the need to do the same in the Mac OS X Lion.</p>
<p>Here is how to do it</p>
<ol>
	<li>
		System Preferences &gt; Users &amp; Groups</li>
	<li>
		Tab &quot;Login Items&quot;</li>
	<li>
		You can remove the programs (-) from the list and they won&#39;t show up in the next startup.</li>
</ol>
<p><img alt="Login Items Mac" src="http://adrianmejiarosario.com/sites/default/files/loginItems.png" style="width: 669px; height: 501px; " /></p>
<p>&nbsp;</p>
', created_at: '2011-11-18 12:18:23 -0500', updated_at: '2011-11-18 13:04:48 -0500' )
p25.tags << tag_mac
p25.tags << tag_how_to
p26 = adrian.posts.create(title: 'Learning Algorithms from Scratch / Algorithms for Dummies', content: '<p>When you are programming you face challenges all the way. Getting the problems solved is just the tip of the iceberg, getting it done efficiently is the rest.</p>
<p class="p1"><b>Why should you care for efficiency?</b></p>
<p class="p1">Solutions to the same problem might take years with certain algorithm, and just minutes using efficient algorithms. For instance, if you have applications that are used for thousands of people over internet, every fraction of second counts. Therefore, efficient algorithms is a must.</p>
<p class="p1"><b>How I do my algorithms more efficient?</b></p>
<p class="p1">To improve something you first need to know the actual state. In this case you need to measure the actual effectiveness of your algorithm in other to improve it. It&#39;s very common to use running time analysis to measure the speed of algorithms independently from the hardware used (old pc, supercomputer it doesn&#39;t matter).&nbsp;</p>
<p class="p1"><b>Run-time analysis</b></p>
<p class="p1">A common way to analyze the algorithms is using the big-O notation. The good thing about this notation is that is independent from the computer used to run the algorithm. You know that if you use a very slow computer (e.g. pentium I) v.s. a supercomputer use in NASA, the latter will run the program much faster. Big-O notation abstract the hardware and just focus in the algorithm per se. The only variable in the big-O notation gives the relative time needed to process an algorithm in function of the input n. Let&#39;s clarify this with an example.</p>
<p class="p1"><strong>Ex.1</strong> - You want to sort an array A of n integers.&nbsp;</p>
<p class="p1">Depending in the algorithm used to do that you may have:</p>
<ul>
	<li class="p1">
		<b>selection</b> sort has a running time of O(n^2);</li>
	<li class="p1">
		<b>merge sort</b> --&gt; O(n log n)</li>
</ul>
<p class="p1">Right now, it doesn&#39;t matter if are not familiar with these algorithms (we will cover this the next lessons), the point here is that we have n integer and big-O notations give us a mathematical expression that is in function of the input n. If you&nbsp;<a href="http://fooplot.com/index.php?&amp;type0=0&amp;type1=0&amp;type2=0&amp;type3=0&amp;type4=0&amp;y0=x%5E2&amp;y1=x*log%28x%29&amp;y2=&amp;y3=&amp;y4=&amp;r0=&amp;r1=&amp;r2=&amp;r3=&amp;r4=&amp;px0=&amp;px1=&amp;px2=&amp;px3=&amp;px4=&amp;py0=&amp;py1=&amp;py2=&amp;py3=&amp;py4=&amp;smin0=0&amp;smin1=0&amp;smin2=0&amp;smin3=0&amp;smin4=0&amp;smax0=2pi&amp;smax1=2pi&amp;smax2=2pi&amp;smax3=2pi&amp;smax4=2pi&amp;thetamin0=0&amp;thetamin1=0&amp;thetamin2=0&amp;thetamin3=0&amp;thetamin4=0&amp;thetamax0=2pi&amp;thetamax1=2pi&amp;thetamax2=2pi&amp;thetamax3=2pi&amp;thetamax4=2pi&amp;ipw=0&amp;ixmin=-5&amp;ixmax=5&amp;iymin=-3&amp;iymax=3&amp;igx=1&amp;igy=1&amp;igl=1&amp;igs=0&amp;iax=1&amp;ila=1&amp;xmin=-5&amp;xmax=5&amp;ymin=-3&amp;ymax=3"><span class="s1">plot in a graph n^2 and n log n</span></a>. You&#39;ll see that n^2 grows much faster than n log(n). That means that the algorithm n^2 will take longer than n*log(n) to process as the size of the array n increases.</p>
<p class="p1"><b>Common order of Growth</b></p>
<p class="p1">To give you an idea of the common order of growth of runtime expressions. Take a look at the following graph and table. The slower the function growth the better is the algorithm. In order from better performance to worst is:</p>
<p class="p1">1 -- log n -- n -- n log n -- n^2 -- n^3 -- 2^n -- n! ...</p>
<p class="p2"><img alt="" src="http://adrianmejiarosario.com/sites/default/files/Screen%20Shot%202011-12-22%20at%203.22.12%20PM.png" style="width: 300px; height: 306px; " /></p>
<p class="p2">&nbsp;</p>
<p class="p2"><img alt="" src="http://adrianmejiarosario.com/sites/default/files/Screen%20Shot%202011-12-22%20at%203.23.45%20PM.png" style="width: 300px; height: 257px; " /></p>
<p class="p2">&nbsp;</p>
<p class="p1">&nbsp;</p>
<p class="p1"><b>Approximate growth rate from code.</b></p>
<p class="p1">There are a whole theory and math behind the Big-O notation and other notations related. At this time, just take a look of the typical code and its growth order.</p>
<p class="p1"><img alt="" src="http://adrianmejiarosario.com/sites/default/files/Screen%20Shot%202011-12-22%20at%204.51.48%20PM.png" style="width: 600px; height: 427px; " /></p>
<p>&nbsp;</p>
<p><strong>Cases (the good, the bad, and the ugly)</strong></p>
<p>Remember that n is the number of elements in the input. All this runtime growth rate are in function of the input elements. There is another important thing to consider about the input elements: the order! The order of the input elements matters, and that&#39;s why algorithms are analyzed in 3 different cases:</p>
<ol>
	<li>
		Worst-case performance: the input is distributed as worst as it could be for an algorithm. &nbsp;&nbsp;</li>
	<li>
		Average-case scenario: approximation of the most common arrange of inputs.</li>
	<li>
		Best-case scenario: most favorable distribution of the inputs.</li>
	<li>
		One more: Space. this is how much space the algorithm cosume to execute.&nbsp;</li>
</ol>
<p class="p2">If you want more depth in these topic read here:&nbsp;</p>
<ul>
	<li class="p2">
		<span style="color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; line-height: 16px; background-color: rgb(255, 255, 255); font-size: small; ">Analysis (</span><a href="http://gcu.googlecode.com/files/02Analysis.pdf" style="color: rgb(85, 26, 139); font-family: Helvetica, Arial, sans-serif; line-height: 16px; background-color: rgb(255, 255, 255); font-size: small; ">pdf</a><span style="color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; line-height: 16px; background-color: rgb(255, 255, 255); font-size: small; ">) (</span><a href="http://gcu.googlecode.com/files/02Analysis.key.zip" style="color: rgb(85, 26, 139); font-family: Helvetica, Arial, sans-serif; line-height: 16px; background-color: rgb(255, 255, 255); font-size: small; ">keynote</a><span style="color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; line-height: 16px; background-color: rgb(255, 255, 255); font-size: small; ">)</span></li>
	<li class="p2">
		<span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; font-size: small; line-height: 16px; ">Algorithm @&nbsp;</span>ocw.mit.edu: lectures <a href="http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-1-administrivia-introduction-analysis-of-algorithms-insertion-sort-mergesort">1 </a>and <a href="http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/video-lectures/lecture-2-asymptotic-notation-recurrences-substitution-master-method">2</a></li>
	<li class="p2">
		http://algs4.cs.princeton.edu/home/</li>
</ul>
<p class="p2">&nbsp;</p>
', created_at: '2011-12-22 14:27:07 -0500', updated_at: '2011-12-22 16:17:10 -0500' )
p26.tags << tag_algorithms
p26.tags << tag_runtime_analysis
p26.tags << tag_analysis_of_algorithm
p26.tags << tag_for_dummies
p26.tags << tag_big_o
p27 = adrian.posts.create(title: 'Concentration problems? Procastination? You\'re not the only one.', content: '<p>&nbsp;</p>
<p>Procastination and concentration problems are big deals from a lot of people, specially for students. There are too many distractions that are more fun than our homework.</p>
<p>I read an interesting&nbsp;<a href="http://altmedicine.about.com/od/optimumhealthessentials/a/Concentration.htm">article about concentration</a>&nbsp;that I&#39;d like to share a summary with my own notes:</p>
<p>There is no substitute for paying attention... here are Five tips to improve your attention/concentration/focus/productivity:</p>
<p><strong>F =&nbsp;</strong><u><strong>Five More Rule</strong></u></p>
<div>
	There are two kinds of people -- those who have learned how to work through frustration, and those who wish they had. From now on, if you&#39;re in the middle of a task and tempted to give up -- just do 5 MORE. Read 5 MORE pages. Finish 5 MORE math problems. Work 5 MORE minutes.</div>
<div>
	&nbsp;</div>
<div>
	<strong>O =&nbsp;<u>One Think At a Time</u></strong></div>
<div>
	&nbsp;</div>
<div>
	Quite self-explantory, isn&#39;t it? We know the theory, now let&#39;s put in practice.</div>
<div>
	&nbsp;</div>
<div>
	<div>
		<strong>C =&nbsp;<u>Conquer Procrastination</u></strong></div>
	<div>
		&nbsp;</div>
	<div>
		Don&#39;t feel like concentrating? Are you putting off a task or project you&#39;re supposed to be working on? That&#39;s a form of procrastination. R. D. Clyde said, &quot;It&#39;s amazing how long it takes to complete something we&#39;re not working on.&quot; ~ Every time you catch yourself doing something that you are not suppose to be doing (facebook, twitter, 9gag) quite it right away, and get back to your homework/work.</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>U =&nbsp;<u>Use Your Hands as Blinkers</u></strong></div>
	<div>
		&nbsp;</div>
	<div>
		Give multi-tasking a rest. Focus in one task at time!</div>
	<div>
		&nbsp;</div>
	<div>
		<strong>S =&nbsp;<u>See As If For the First or Last Time</u></strong></div>
	<div>
		&nbsp;</div>
	<div>
		uhm... maybe not very useful but it says: Want to know how to be &quot;here and now&quot; and fully present instead of mindlessly rushing here, there, and everywhere? Frederick Franck said, &quot;When the eye wakes up to see again, it suddenly stops taking anything for granted.&quot; Evelyn Underhill said, &quot;For lack of attention, a thousand forms of loveliness elude us every day.&quot;</div>
	<div>
		&nbsp;</div>
	<div>
		<div>
			<strong>What people have said about concentration</strong></div>
		<ul>
			<li>
				&quot;I used to think the human brain was the most fascinating part of the body, and then I realized, &#39;What is telling me that?&#39;&quot; - Emo Phillips</li>
			<li>
				&quot;I&#39;m getting so absent-minded and forgetful. Sometimes in the middle of a sentence, I . . . &quot; - Milton Berle&nbsp;</li>
			<li>
				&quot;Iron rusts from disuse, stagnant water loses its purity and in cold weather becomes frozen, even so does inaction sap the vigors of the mind.&quot; Leonardo da Vinci&nbsp;</li>
			<li>
				&quot;Tell me to what you pay attention, and I will tell you who you are.&quot; - Jose Ortega y Gasset</li>
			<li>
				I would go without shirt or shoe sooner than lose for a minute the two separate sides of my head.&quot; - Rudyard Kipling</li>
			<li>
				&quot;It&#39;s not that I don&#39;t want to listen to people. I very much want to listen to people. I jut can&#39;t hear them over my talking.&quot; - Paula Poundstone</li>
		</ul>
	</div>
</div>
<p>&nbsp;</p>
', created_at: '2012-01-04 11:46:24 -0500', updated_at: '2012-01-04 11:46:24 -0500' )
p27.tags << tag_concentration
p27.tags << tag_procrastination
p27.tags << tag_attention
p28 = adrian.posts.create(title: 'SSH login without password', content: '<p>If you want to login to a remote server using SSH and don&#39;t have to type the password again and again, here is a little trick</p>
<p>$&nbsp;cat ~/.ssh/id_rsa.pub | ssh &lt;user&gt;@&lt;server.domain&gt; &#39;cat &gt;&gt; .ssh/authorized_keys&#39;</p>
<p>After you run this and enter your password (for the last time), you can login to your server just typing:</p>
<p>$ ssh &lt;user&gt;@&lt;server.domain&gt;</p>
<p>You are all set.</p>
', created_at: '2012-01-19 15:27:03 -0500', updated_at: '2012-01-19 15:29:54 -0500' )
p28.tags << tag_ssh
p28.tags << tag_ubuntu
p28.tags << tag_linux
p28.tags << tag_cli
p28.tags << tag_command_line
p29 = adrian.posts.create(title: 'Get Started with the web crawler Apache Nutch 1.x ', content: '<p>Apache Nutch is an open source <strong>scalable</strong> Web crawler written in Java and based on Lucene/Solr for the indexing and search part.&nbsp;It has a highly modular architecture, allowing developers to create plug-ins for media-type parsing, data retrieval, querying and clustering. [<a href="http://en.wikipedia.org/wiki/Nutch">*</a>]</p>
<div>
	<u><strong>Motivation</strong></u></div>
<div>
	By using Nutch, we can find web page hyperlinks in an automated manner, reduce lots of maintenance work, for example checking broken links, and create a copy of all the visited pages for searching over. That&rsquo;s where Apache Solr comes in. Solr is an open source full text search framework, with Solr we can search the visited pages from Nutch. Luckily, integration between Nutch and Solr is pretty straightforward.</div>
<div>
	&nbsp;</div>
<div>
	Whole-web crawling is designed to handle very large crawls which may take weeks to complete, running on multiple machines. This also permits more control over the crawl process, and incremental crawling. It is important to note that whole web crawling does not necessarily mean crawling the entire world wide web. We can limit a whole web crawl to just a list of the URLs we want to crawl. This is done by using a filter just like we the one we used when we did the crawl command. [<a href="http://wiki.apache.org/nutch/NutchTutorial">*</a>]</div>
<div>
	&nbsp;</div>
<div>
	Some of the advantages of Nutch, when compared to a simple Fetcher</div>
<ul>
	<li>
		highly scalable and relatively feature rich crawler</li>
	<li>
		features like politeness which obeys robots.txt rules</li>
	<li>
		robust and scalable - you can run Nutch on a cluster of 100 machines</li>
	<li>
		quality - you can bias the crawling to fetch &ldquo;important&rdquo; pages first</li>
</ul>
<p><u><strong>Basics about Nutch</strong></u></p>
<p>First you need to know that, Nutch data is composed of:</p>
<ul>
	<li>
		The crawl database, or <strong>crawldb</strong>. This contains information about every url known to Nutch, including whether it was fetched, and, if so, when.</li>
	<li>
		The link database, or <strong>linkdb</strong>. This contains the list of known links to each url, including both the source url and anchor text of the link.</li>
	<li>
		A set of <strong>segments</strong>. Each segment is a set of urls that are fetched as a unit. Segments are directories with the following subdirectories:</li>
</ul>
<ol>
	<li>
		<strong>crawl_generate</strong> names a set of urls to be fetche</li>
	<li>
		<strong>crawl_fetch</strong> contains the status of fetching each url</li>
	<li>
		<strong>content</strong> contains the raw content retrieved from each url</li>
	<li>
		<strong>parse_text</strong> contains the parsed text of each url</li>
	<li>
		<strong>parse_data</strong> contains outlinks and metadata parsed from each url</li>
	<li>
		<strong>crawl_parse</strong> contains the outlink urls, used to update the crawldb</li>
</ol>
<p><u><strong>Nutch and Hadoop</strong></u></p>
<p>As of the official Nutch 1.3 release the source code architecture has been greatly simplified to allow us to run Nutch in one of two modes; namely local and deploy. By default, Nutch no longer comes with a Hadoop distribution, however when run in local mode e.g. running Nutch in a single process on one machine, then we use Hadoop as a dependency. This may suit you fine if you have a small site to crawl and index, but most people choose Nutch because of its capability to run on in deploy mode, within a Hadoop cluster. This gives you the benefit of a distributed file system (HDFS) and MapReduce processing style. &nbsp;If you are interested in deployed mode <a href="http://wiki.apache.org/nutch/NutchHadoopTutorial">read here</a>.</p>
<p><u><strong>Getting hands dirt with Nutch</strong></u></p>
<p><strong>1 Setup Nutch from binary distribution</strong></p>
<ol>
	<li>
		Unzip your binary Nutch package to $HOME/nutch-1.3</li>
	<li>
		cd $HOME/nutch-1.3/runtime/local</li>
	<li>
		From now on, we are going to use ${NUTCH_RUNTIME_HOME} to refer to the current directory.</li>
</ol>
<div>
	&nbsp;</div>
<div>
	<strong>2. Verify your Nutch installation</strong></div>
<ol>
	<li>
		run &quot;bin/nutch&quot;</li>
	<li>
		You can confirm a correct installation if you seeing the following: &nbsp;Usage: nutch [-core] COMMAND</li>
</ol>
<div>
	<u>Some troubleshooting tips:</u></div>
<div>
	Run the following command if you are seeing &quot;Permission denied&quot;:</div>
<div>
	chmod +x bin/nutch</div>
<div>
	Setup JAVA_HOME if you are seeing JAVA_HOME not set. On Mac, you can run the following command or add it to ~/.bashrc:</div>
<div>
	export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Versions/1.6/Home #mac</div>
<div>
	Ubuntu:</div>
<div>
	export JAVA_HOME=/usr/lib/jvm/java-1.6.0-openjdk&nbsp;</div>
<div>
	export NUTCH_HOME=/var/www/nutch-1.3/runtime/local</div>
<div>
	&nbsp;</div>
<div>
	<u>Example of using Nutch to crawl wikipedia pages:</u></div>
<div>
	Here we are try to crawl&nbsp;<span class="s2"><a href="http://en.wikipedia.org/wiki/Collective_intelligence">http://en.wikipedia.org/wiki/Collective_intelligence</a>&nbsp;and sublinks in the same domain.</span></div>
<ol class="ol1">
	<li class="li1">
		$ cd NUTCH_HOME/runtime/local</li>
	<li class="li2">
		<span class="s1">$ echo &quot;<a href="http://en.wikipedia.org/wiki/Collective_intelligence"><span class="s2">http://en.wikipedia.org/wiki/Collective_intelligence</span></a>&quot; &gt; urls</span></li>
	<li class="li1">
		add: `+^http://([a-z0-9]*\.)*wikipedia.org/` in&nbsp;conf/regex-urlfilter.txt</li>
	<li class="li1">
		$ bin/nutch crawl urls -dir crawl-wiki-ci -depth 2</li>
	<li class="li1">
		<b>statistics associated with the crawldb</b>
		<ol class="ol1">
			<li class="li1">
				$ nutch readdb crawl-wiki-ci/crawldb/ -stats
				<ol class="ol1">
					<li class="li1">
						CrawlDb statistics start: crawl-wiki-ci/crawldb/Statistics for CrawlDb: crawl-wiki-ci/crawldb/<br />
						TOTAL urls:&nbsp;&nbsp;&nbsp;&nbsp; 2727<br />
						retry 0:&nbsp;&nbsp;&nbsp;&nbsp; 2727<br />
						min score:&nbsp;&nbsp;&nbsp;&nbsp; 0.0<br />
						avg score:&nbsp;&nbsp;&nbsp;&nbsp; 8.107811E-4<br />
						max score:&nbsp;&nbsp;&nbsp;&nbsp; 1.341<br />
						status 1 (db_unfetched):&nbsp;&nbsp;&nbsp;&nbsp; 2665<br />
						status 2 (db_fetched):&nbsp;&nbsp;&nbsp;&nbsp; 61<br />
						status 3 (db_gone):&nbsp;&nbsp;&nbsp;&nbsp; 1<br />
						CrawlDb statistics: done</li>
				</ol>
			</li>
		</ol>
	</li>
	<li class="li1">
		<b>Dump of the URLs from the crawldb</b>
		<ol class="ol1">
			<li class="li1">
				$ nutch readdb crawl-wiki-ci/crawldb/ -dump crawl-wiki-ci/stats
				<ol class="ol1">
					<li class="li1">
						<span class="s3"><a href="http://en.wikipedia.org/wiki/Special:RecentChangesLinked/MIT_Center_for_Collective_Intelligence"><span class="s2">http://en.wikipedia.org/wiki/Special:RecentChangesLinked/MIT_Center_for_Collective_Intelligence</span></a></span>&nbsp;&nbsp;&nbsp;&nbsp; Version: 7Status: 1 (db_unfetched)<br />
						Fetch time: Sat Feb 04 00:50:50 EST 2012<br />
						Modified time: Wed Dec 31 19:00:00 EST 1969<br />
						Retries since fetch: 0<br />
						Retry interval: 2592000 seconds (30 days)<br />
						Score: 1.9607843E-4<br />
						Signature: null<br />
						Metadata:<br />
						&hellip;.&nbsp;</li>
				</ol>
			</li>
		</ol>
	</li>
	<li class="li1">
		<b>Top 10 highest rate links</b>
		<ol class="ol1">
			<li class="li1">
				$ nutch readdb crawl-wiki-ci/crawldb/ -topN 10 crawl-wiki-ci/stats/top10/
				<ol class="ol1">
					<li class="li2">
						<span class="s1">1.3416613&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Collective_intelligence"><span class="s2">http://en.wikipedia.org/wiki/Collective_intelligence</span></a>0.030499997&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Howard_Bloom"><span class="s2">http://en.wikipedia.org/wiki/Howard_Bloom</span></a><br />
						0.02763889&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Groupthink"><span class="s2">http://en.wikipedia.org/wiki/Groupthink</span></a><br />
						0.02591739&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Wikipedia"><span class="s2">http://en.wikipedia.org/wiki/Wikipedia</span></a><br />
						0.024347823&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Pierre_L%C3%A9vy_(philosopher)"><span class="s2">http://en.wikipedia.org/wiki/Pierre_L%C3%A9vy_(philosopher)</span></a><br />
						0.023733648&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Wikipedia:Citation_needed"><span class="s2">http://en.wikipedia.org/wiki/Wikipedia:Citation_needed</span></a><br />
						0.017142152&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/w/opensearch_desc.php"><span class="s2">http://en.wikipedia.org/w/opensearch_desc.php</span></a><br />
						0.016599996&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Artificial_intelligence"><span class="s2">http://en.wikipedia.org/wiki/Artificial_intelligence</span></a><br />
						0.016499996&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Consensus_decision_making"><span class="s2">http://en.wikipedia.org/wiki/Consensus_decision_making</span></a><br />
						0.015199998&nbsp;&nbsp;&nbsp;&nbsp; <a href="http://en.wikipedia.org/wiki/Group_selection"><span class="s2">http://en.wikipedia.org/wiki/Group_selection</span></a></span></li>
				</ol>
			</li>
		</ol>
	</li>
	<li class="li1">
		<b>Dump of a Nutch segment</b>
		<ol class="ol1">
			<li class="li1">
				$ nutch readseg -dump crawl-wiki-ci/segments/20120204004509/ crawl-wiki-ci/stats/segments
				<ol class="ol1">
					<li class="li1">
						CrawlDatum::Version: 7<br />
						Status: 1 (db_unfetched)<br />
						Fetch time: Sat Feb 04 00:45:03 EST 2012<br />
						Modified time: Wed Dec 31 19:00:00 EST 1969<br />
						Retries since fetch: 0<br />
						Retry interval: 2592000 seconds (30 days)<br />
						Score: 1.0<br />
						Signature: null<br />
						Metadata: _ngt_: 1328334307529</li>
					<li class="li1">
						<br />
						Content::<br />
						Version: -1<br />
						url: <a href="http://en.wikipedia.org/wiki/Collective_intelligence"><span class="s4">http://en.wikipedia.org/wiki/Collective_intelligence</span></a><br />
						base: <a href="http://en.wikipedia.org/wiki/Collective_intelligence"><span class="s4">http://en.wikipedia.org/wiki/Collective_intelligence</span></a><br />
						contentType: application/xhtml+xml<br />
						metadata: Content-Language=en Age=52614 Content-Length=29341 Last-Modified=Sat, 28 Jan 2012 17:27:22 GMT _fst_=33 nutch.segment.name=20120204004509 Connection=close X-Cache-Lookup=MISS from <a href="http://sq72.wikimedia.org/"><span class="s4">sq72.wikimedia.org:80</span></a> Server=Apache X-Cache=MISS from <a href="http://sq72.wikimedia.org/"><span class="s4">sq72.wikimedia.org</span></a> X-Content-Type-Options=nosniff Cache-Control=private, s-maxage=0, max-age=0, must-revalidate Vary=Accept-Encoding,Cookie Date=Fri, 03 Feb 2012 15:08:18 GMT Content-Encoding=gzip nutch.crawl.score=1.0 Content-Type=text/html; charset=UTF-8<br />
						Content:<br />
						&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;<a href="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><span class="s4">http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd</span></a>&quot;&gt;<br />
						&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; class=&quot;client-nojs&quot; xmlns=&quot;<a href="http://www.w3.org/1999/xhtml"><span class="s4">http://www.w3.org/1999/xhtml</span></a>&quot;&gt;<br />
						&lt;head&gt;<br />
						&lt;title&gt;Collective intelligence - Wikipedia, the free encyclopedia&lt;/title&gt;<br />
						&lt;meta &hellip;.<b>&nbsp;</b></li>
				</ol>
			</li>
		</ol>
	</li>
</ol>
<p class="li1">&nbsp;</p>
<p class="li1"><b>References:</b></p>
<ul>
	<li class="li1">
		http://wiki.apache.org/nutch/NutchTutorial</li>
	<li class="li1">
		http://en.wikipedia.org/wiki/Nutch</li>
</ul>
', created_at: '2012-02-04 01:32:32 -0500', updated_at: '2012-02-06 01:38:21 -0500' )
p29.tags << tag_how_to
p29.tags << tag_apache
p29.tags << tag_nutch
p29.tags << tag_search_engines
p29.tags << tag_web_crawlers
p30 = adrian.posts.create(title: 'How do I change the Ruby/Python version Textmate uses?', content: '<p>&nbsp;</p>
<p>I&#39;m using textMate to develop ruby code. It&#39;s very handy because I can run it just pressing (cmd-R). But by default it&#39;s running ruby 1.8.7 and I want 1.9.2 version.</p>
<p>This is the steps to change it:</p>
<p>Find the right path with</p>
<div>
	<div>
		<strong>~$ &nbsp;which rvm-auto-ruby</strong></div>
	<div>
		/Users/adrian/.rvm/bin/rvm-auto-ruby</div>
</div>
<div>
	<strong>~$ &nbsp;which python3.2</strong></div>
<div>
	/usr/local/bin/python3.2</div>
<div>
	&nbsp;</div>
<p>Then copy it to TextMate preferences in a new variable called &quot;TM_RUBY&quot;, and &quot;TM_PYTHON&quot; as shown bellow:</p>
<p><img alt="" src="http://adrianmejiarosario.com/sites/default/files/Screen%20Shot%202012-02-09%20at%201.50.41%20AM.png" style="width: 792px; height: 402px; " /></p>
<p><img alt="" src="http://adrianmejiarosario.com/sites/default/files/Screen%20Shot%202012-02-09%20at%2012.48.17%20AM.png" style="width: 600px; height: 320px; " /></p>
', created_at: '2012-02-09 00:50:04 -0500', updated_at: '2012-02-09 01:52:43 -0500' )
p30.tags << tag_ruby
p30.tags << tag_textmate
p30.tags << tag_how_to
p30.tags << tag_python
p31 = adrian.posts.create(title: 'Adding Subversion (SVN) Properties to your code', content: '<p>When you are coding in a team enviroment it&#39;s good to have the subversion properties in your files, that way any other developer can see quickly who made the last changes and when.</p>
<p>You can add the following lines at the bottom of your code:</p>
<div>
	//-----------------------------------------------------------------------------</div>
<div>
	// &nbsp;REVISION HISTORY</div>
<div>
	// &nbsp;$LastChangedDate: $</div>
<div>
	// &nbsp;$Revision: $</div>
<div>
	// &nbsp;$LastChangedBy: $</div>
<div>
	// &nbsp;$Id: $</div>
<div>
	//-----------------------------------------------------------------------------</div>
<div>
	&nbsp;</div>
<div>
	And when you perform your svn commit will be automatically populated something like this:</div>
<div>
	//-----------------------------------------------------------------------------</div>
<div>
	// &nbsp;REVISION HISTORY</div>
<div>
	// &nbsp;$LastChangedDate: 2012-02-11 18:24:39 -0500 (Sat, 11 Feb 2012) $</div>
<div>
	// &nbsp;$Revision: 61 $</div>
<div>
	// &nbsp;$LastChangedBy: adriansky $</div>
<div>
	// &nbsp;$Id: Heap.java 61 2012-02-11 23:24:39Z adriansky $</div>
<div>
	//-----------------------------------------------------------------------------</div>
<div>
	&nbsp;</div>
<div>
	Also you need to set the SVN properties for that file. The Properties that you need are the following:</div>
<ul>
	<li>
		svn:eol-style &nbsp;---&gt; LF</li>
	<li>
		svn:keywords ---&gt; LastChangedDate Revision LastChangedBy Id</li>
</ul>
<div>
	If you are using Eclipse you can edit it following this steps:</div>
<ol>
	<li>
		right click file you want to add svn properties</li>
	<li>
		Menu team &gt; set properties (image bellow)</li>
	<li>
		Select the Property name from the combobox&nbsp;(image bellow)</li>
	<li>
		Add the text property in the text box&nbsp;(image bellow)</li>
	<li>
		You can also use files to avoid all the typing every time. right click and &#39;save as...&#39; to &lt;<a href="http://adrianmejiarosario.com/sites/default/files/svn-keywords.txt" target="_blank">svn-keywords</a>&gt; and&nbsp;&lt;<a href="http://adrianmejiarosario.com/sites/default/files/svn-eol-style.txt" onclick="window.open(this.href, \'\', \'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no\'); return false;">svn-eol-property</a>&gt;.</li>
	<li>
		Commit and you are all set.</li>
</ol>
<p>Eclipse Menu to add svn properties</p>
<p><img alt="Eclipse SVN Property Menu" src="http://adrianmejiarosario.com/sites/default/files/svnprop1.png" style="width: 600px; height: 564px; " /></p>
<p>Adding SVN properties typing</p>
<p><img alt="" src="http://adrianmejiarosario.com/sites/default/files/svnprop2.png" style="width: 525px; height: 520px; " /></p>
<p>Adding SVN property from file</p>
<p><img alt="SVN property from file" src="http://adrianmejiarosario.com/sites/default/files/svnprop3.png" style="width: 525px; height: 520px; " /></p>
', created_at: '2012-02-11 18:35:31 -0500', updated_at: '2012-02-11 18:51:07 -0500' )
p31.tags << tag_svn
p31.tags << tag_subversion
p31.tags << tag_eclipse
p31.tags << tag_svn_properties
