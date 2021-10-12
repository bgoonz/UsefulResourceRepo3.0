<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Getting localized month and day names in the browser
====================================================

November 25, 2020 • 1 min read

JavaScript has a [well-supported](https://caniuse.com/?search=datetimeformat) date/time formatting API called [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). Here's a tip — you can use it to generate localized month and day names without the need for a language pack! This is super useful if you're building, say, a date picker or a calendar app.

I've written a couple functions to demonstrate how this works. Consider them MIT licensed if you want to use them!

    function getDayNames(locale = 'en', format = 'long') {
      const formatter = new Intl.DateTimeFormat(locale, { weekday: format, timeZone: 'UTC' });
      const days = [1, 2, 3, 4, 5, 6, 7].map(day => {
        const dd = day < 10 ? `0${day}` : day;
        return new Date(`2017-01-${dd}T00:00:00+00:00`);
      });
      return days.map(date => formatter.format(date));
    }

    function getMonthNames(locale = 'en', format = 'long') {
      const formatter = new Intl.DateTimeFormat(locale, { month: format, timeZone: 'UTC' });
      const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
        const mm = month < 10 ? `0${month}` : month;
        return new Date(`2017-${mm}-01T00:00:00+00:00`);
      });
      return months.map(date => formatter.format(date));
    }

Each function generates a series of Date objects that align with each day of the week and each month of the year, respectively. Then they loop through each date, passing them to the browser's built-in formatter. The formatter is configured to only output the day/month name, giving us exactly what we want!

    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

Need them in a different language? Just set the locale argument accordingly. Here's French, for example:

    getDayNames('fr');
    getMonthNames('fr');
    // ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
    // ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

You can even generate short names by setting the format argument to `short` or `narrow`.

    getDayNames('en', 'short');
    getMonthNames('en', 'short');
    // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

While this trick may not alleviate all your i18n woes, it can certainly reduce the size of your translation packs if you're building something that uses them.

And here's another tip — you can generate localized relative times such as "4 minutes ago" using a similar technique, except with [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat).

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/news/index.html" class="post-tag">news</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../shoelace-a-forward-thinking-library-of-web-components/index.html" class="post-nav-previous"><span class="small">Previous post</span> Shoelace 2.0: a forward-thinking library of web components</a> <a href="../archiving-postleaf/index.html" class="post-nav-next"><span class="small">Up next</span> Archiving Postleaf</a>
