<a href="/categories/coding/" class="category-link">Coding</a>

# PHP DOM: explained and exemplified

<span title="Last time this post was updated"> Last updated August 6th 2011 </span> <span class="m-x-2" title="Pageviews"> 2.5k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/php-dom-explained-and-exemplified/">0</span>](#disqus_thread) </span>

- <a href="/tags/php/" class="tag-list-link">php</a><span class="tag-list-count">2</span>

This is guide to get started with PHP DOM or a quick reminder to those who have a little while since the last time they used it. The extended documentation is in [PHP.net](http://www.php.net/manual/en/book.dom.php), but it is quite long. Here you might found a quick reference to get started in no time.

<span id="more"></span>

Purpose of the DOM (Docuement Object Model): It is a convention used to represent and manipulate objects in XML, XHTML and HTML documents. Parsing XML and HTML files is very useful. It allows to manipulate RSS Feeds, interact with APIs and web services through XML (e.g. Google Maps, Facebook and Twitter APIs, etc.), extract information from websites (web crawling) and more.

## Getting Started

The DOM implementation in PHP have more than 15 classes! But don't get afraid, for most cases, you might just end up using these ones: DOMNode, DOMDocument, DOMNodeList and DOMElement. In the following UML class diagram of PHP's DOM you will see how these classes are related to each other and them the explanation of each one.

Fig 1.  PHP DOM: UML Class Diagram



### Loading and Saving DOM Documents

[DOMDocument](http://www.php.net/manual/en/class.domdocument.php) — The DOMDocument class which exteds from DOMNode. This class contains the XML (or HTML) elements and configurations. It has configurations attributes, such as format output, preserve white spaces, versions, etc.

<span class="underline">DOMDocument must-know methods (part 1: load and save)</span>

- **Load**: load XML (or HTML) documents. There are different types of loads (quite self-explanatories)
  - mixed [DOMDocument::load](http://us.php.net/manual/en/domdocument.load.php) ( string $filename ) — Load XML from a file
  - bool [DOMDocument::loadHTML](http://us.php.net/manual/en/domdocument.loadhtml.php) ( string $source ) — Load HTML from a string
  - bool [DOMDocument::loadHTMLFile](http://us.php.net/manual/en/domdocument.loadhtmlfile.php) ( string $filename ) — Load HTML from a file
  - mixed [DOMDocument::loadXML](http://us.php.net/manual/en/domdocument.loadxml.php) ( string $source ) — Load XML from a string
- **Save**: it is used to present (screen or file) the whole DOM document.
  - int [DOMDocument::save](http://us.php.net/manual/en/domdocument.save.php) ( string $filename ) — Dumps the internal XML tree back into a file
  - string [DOMDocument::saveHTML](http://us.php.net/manual/en/domdocument.savehtml.php) ( ) — Dumps the internal document into a string using HTML formatting
  - int [DOMDocument::saveHTMLFile](http://us.php.net/manual/en/domdocument.savehtmlfile.php) ( string $filename ) — Dumps the internal document into a file using HTML formatting
  - string [DOMDocument::saveXML](http://us.php.net/manual/en/domdocument.savexml.php) ( ) — Dumps the internal XML tree back into a string

Example using DOMDocument for loading and showing HTML:

`<?php`

` $dom = new DOMDocuement;`

` $dom->loadHTML('http://www.adrianmejiarosario.com'); // load website content to DOM `

` echo $dom->save(); // print to screen`

`?>`



### Iterating through DOM Elements

The first thing you need to do after loading the XML that you want to process, it's to select the data that you are intereted in. To search for you data you need to iterate through the DOM elements and you need to know what methods and objects are using in this process.

<span class="underline">DOMDocument must-know methods (part 2: get data)</span>

- DOMElement [DOMDocument::getElementById](http://us.php.net/manual/en/domdocument.getelementbyid.php) ( string $elementId ) — Searches for an element with a certain id.
- DOMNodeList [DOMDocument::getElementsByTagName](http://us.php.net/manual/en/domdocument.getelementsbytagname.php) ( string $elementName )— Searches for all elements with given tag name.



You may notice that the above methods returns DOMElement and DOMNodeList objects. Now we will explore the properties and attributes that you need to know in order to get the data.



[DOMNodeList](http://www.php.net/manual/en/class.domnodelist.php) — class that contains DOMNodes collection.



<span class="underline"><span class="underline">DOMNodeList must-know elements (part 3: get data from nodes collection)</span></span>



- [DOMNodelist::item](http://us.php.net/manual/en/domnodelist.item.php) ( int $index ) — Retrieves a node specified by index
- int [$DOMNodeList-&gt;length](http://us.php.net/manual/en/class.domnodelist.php#domnodelist.props.length) - Node list length



[DOMElement](http://www.php.net/manual/en/class.domelement.php) — class that extends DOMNode and add new methods but we don't need those for iterating through nodes.

[DOMNode](http://www.php.net/manual/en/class.domnode.php) — The DOMNode class is the pillar class and it is used by all others classes directly or indirectly by one of its children classes.



<span class="underline"><span class="underline">DOMNode must-know properties (part 4: get node data)</span></span>

- string [$DOMNode-&gt;nodeName](http://us.php.net/manual/en/class.domnode.php#domnode.props.nodename)  — Returns node name
- string [$](http://us.php.net/manual/en/class.domnode.php#domnode.props.nodevalue)[DOMNode-&gt;nodeValue](http://us.php.net/manual/en/class.domnode.php#domnode.props.nodename)  — Returns node name
- [DOMNodeList](http://us.php.net/manual/en/class.domnodelist.php) [$](http://us.php.net/manual/en/class.domnode.php#domnode.props.childnodes)[DOMNode-&gt;childNodes](http://us.php.net/manual/en/class.domnode.php#domnode.props.nodename)  — Returns list of nodes



Example using DOMDocument for loading and showing HTML

`<?php`

` //TODO`

`?>`

(status: not finished yet)



### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-08-06-php-dom-explained-and-exemplified.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/ruby-on-rails-architectural-design/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Ruby on Rails Architectural Design

<a href="/cs-getmanifestresourcestream-gotcha/" class="article-nav-older"><strong>older <em></em></strong></a>

C\#'s GetManifestResourceStream Gotcha

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
