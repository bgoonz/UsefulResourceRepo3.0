List GitHub projects using JavaScript
=====================================

Do you use GitHub? Got a blog/website? Then read on for a handy bit of JavaScript.

Preamble
--------

[GitHub](http://github.com/) is simply fantastic. If you're into open source then it really is the place to host your work. Heck, I even use it for private projects as well.

If you have some kind of blog or personal website why not promote and show-off your projects? It's exactly what I'm doing here. Just look at my [home page](http://aboutcode.net/).

The list of projects is generated using some simple JavaScript. Read on to get the code.

Get the code
------------

Before I go further, I must say that I originally copied this code from [jointheconversation.org](http://jointheconversation.org/). However, I've made enough changes that I think it's worth posting here to share the love.

In your HTML add a `<div>` with an ID. The list of projects will be inserted here.

`

[?](http://aboutcode.net/2010/11/11/list-github-projects-using-javascript.html#)












 |

`<``html``>`

`...`

`<``div` `id``=``"github-projects"``></``div``>`

`...`

`</``html``>`

 |

`

Next, just before `</body>`, add these scripts.

`

[?](http://aboutcode.net/2010/11/11/list-github-projects-using-javascript.html#)


`<``script` `src``=``"<http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js>"` `type``=``"text/javascript"``></``script``>`

`<``script` `src``=``"/scripts/github.js"` `type``=``"text/javascript"``></``script``>`

`<``script` `type``=``"text/javascript"``>`

`$(function() {`

`$("#github-projects").loadRepositories("andrewdavey");`

`});`

`</``script``>`

 |

`

Feel free to load jQuery from wherever you usually do. I just happen to like using a CDN.

Make sure you replace "andrewdavey" with whatever github username you want to display repositories for.

Finally, create the `/scripts/github.js` file. Here comes the magic.

`

[?](http://aboutcode.net/2010/11/11/list-github-projects-using-javascript.html#)


`jQuery.githubUser =` `function``(username, callback) {`

`jQuery.getJSON(``"<http://github.com/api/v1/json/>"` `+ username +` `"?callback=?"``, callback);`

`}`

`jQuery.fn.loadRepositories =` `function``(username) {`

`this``.html(``"<span>Querying GitHub for repositories...</span>"``);`

`var` `target =` `this``;`

`$.githubUser(username,` `function``(data) {`

`var` `repos = data.user.repositories;`

`sortByNumberOfWatchers(repos);`

`var` `list = $(``'<dl/>'``);`

`target.empty().append(list);`

`$(repos).each(``function``() {`

`list.append(``'<dt><a href="'``+` `this``.url +``'">'` `+` `this``.name +` `'</a></dt>'``);`

`list.append(``'<dd>'` `+` `this``.description +` `'</dd>'``);`

`});`

`});`

`function` `sortByNumberOfWatchers(repos) {`

`repos.sort(``function``(a,b) {`

`return` `b.watchers - a.watchers;`

`});`

`}`

`};`

 |

`