<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Getting duplicate ids in an HTML document
=========================================

April 05, 2019 • 1 min read

I needed a way to identify all HTML elements with duplicate IDs. This is a seemingly simple task, but unfortunately, I didn't find anything out there that fit the bill.

I did find a couple functions that returned the duplicates, but they didn't include the first occurrence (I guess they assume the first occurrence isn't a duplicate, but all subsequent occurrences are).

So here's a function that does the job.

    function getAllDuplicateIds() {  
      const elements = [...document.querySelectorAll('[id]')];  
      const ids = elements.map(el => el.id);  
      const dups = elements.filter(el => ids.filter(id => id === el.id).length > 1);  
      
      return dups;  
    }

This function will return an array of elements in the document that have duplicate IDs. If no duplicates are found, an empty array is returned.

If you only need all occurrences *after* the first, here's a similar ES6 function for that, too.

    function getDuplicateIds() {  
     const elements = [...document.querySelectorAll('[id]')];  
     const ids = [];  
     const dups = [];  
       
     elements.map(el => ids.includes(el.id) ? dups.push(el) : ids.push(el.id));  
       
     return dups;  
    }

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/html/index.html" class="post-tag">html</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/claviska) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../a-clever-way-to-style-the-mark-element/index.html" class="post-nav-previous"><span class="small">Previous post</span> A clever way to style the &lt;mark&gt; element</a> <a href="../introducing-surreal-cms-7/index.html" class="post-nav-next"><span class="small">Up next</span> Introducing Surreal CMS 7</a>
