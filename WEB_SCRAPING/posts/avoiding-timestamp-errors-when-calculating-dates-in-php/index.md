<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

Avoiding timestamp errors when calculating dates in php
=======================================================

August 29, 2007 • 3 min read

![A drawing of a cartoon man pointing upwards](../../images/artwork/pointer.gif)

Heads up! This post was written in 2007, so it may contain information that is no longer accurate. I keep posts like this around for historical purposes and to prevent link rot, so please keep this in mind as you're reading.

— Cory

When calculating dates in PHP, it is easy to add millisecond values such as `60 * 60 * 24` to increment the time by one day. This can become problematic for two main reasons.

Issues with leap years <a href="#issues-with-leap-years" class="direct-link">#</a>
----------------------------------------------------------------------------------

A year has approximately 365.25 days, hence a leap year occurs once every four years. If you start on Tuesday April 1, 2003 at 12:00:00 the timestamp would be `1049198400`. Adding the length of one day (`60 * 60 * 24`, or 86,400ms) would give us `1049198400` + 86,400 = `1049284800`, which is the same as Wed April 02, 2003 12:00:00. No problem here.

Using this same methodology, we realize that adding one year (`60 * 60 * 24 * 365`, or 31,536,000ms) to Wednesday April 02, 2003 12:00:00 would result in `1049284800` + 31,536,000 = `1080820800`. This is problematic because `1080820800` is the timestamp for Thursday 01 April 2004 12:00:00 (we were expecting the next day, 02 April).

Even if we used `60 * 60 * 24 * 365.25` (or 31,557,600ms) to compensate for the quarter-day phenomenon, we would end up with `1049284800` + 31,557,600 = `1080842400`, which is Thursday 01 Apr 2004 18:00:00. This "miscalculation" is due to the leap day that occurred on 29 February 2004.

Issues with daylight saving time <a href="#issues-with-daylight-saving-time" class="direct-link">#</a>
------------------------------------------------------------------------------------------------------

Another issue involves Daylight Saving Time (DST). The calculation is affected similarly and a one hour shift forward or backward will occur if your version of PHP is configured to account for DST. This can turn out to be more drastic than a one hour shift, however. Consider this:

    $current_date = "2007-11-04";
    $timestamp = strtotime($current_date);
    $timestamp += 60 * 60 * 24; // one day increment
    $new_date = date("Y-m-d", $timestamp);

On 04 November 2007, the time "falls back" one hour, thus `$new_date` contains the same value as `$current_date` when `$current_date` is equal to `2007-11-04`. Here are some sample outputs surrounding 04 November 2007:

<table><thead><tr class="header"><th>$current_date</th><th>$new_date</th></tr></thead><tbody><tr class="odd"><td>2007-11-01</td><td>2007-11-02</td></tr><tr class="even"><td>2007-11-02</td><td>2007-11-03</td></tr><tr class="odd"><td>2007-11-03</td><td>2007-11-04</td></tr><tr class="even"><td>2007-11-04</td><td>2007-11-04</td></tr><tr class="odd"><td>2007-11-05</td><td>2007-11-06</td></tr><tr class="even"><td>2007-11-06</td><td>2007-11-07</td></tr></tbody></table>

Consequently, if we were outputting hours, minutes and seconds as well, every day after the DST change would be exactly one hour off (until, of course, the next DST change canceled it out).

A Better Way to Calculate Dates <a href="#a-better-way-to-calculate-dates" class="direct-link">#</a>
----------------------------------------------------------------------------------------------------

Fortunately, we can overcome both of these hurdles simply by using the `strtotime()` function. Instead of adding one day to a timestamp like this:

    $date += 60 * 60 * 24;

We can successfully add one day like this:

    $date = strtotime(date("Y-m-d", strtotime($date)) . " +1 day");

Similarly, we can use the same method for weeks, months, years, etc.:

    $date = strtotime(date("Y-m-d", strtotime($date)) . " +1 week");
    $date = strtotime(date("Y-m-d", strtotime($date)) . " +2 week");
    $date = strtotime(date("Y-m-d", strtotime($date)) . " +1 month");
    $date = strtotime(date("Y-m-d", strtotime($date)) . " +30 days");

Using the `strtotime()` function to add relative blocks of time results in accurate calculations where the previously shown method sometimes fails.

What if you wanted to add one month to `$date`? Using the previous method, you would be forced to estimate the duration of a month or create a really smart algorithm to figure out the exact duration of the given month. Since each month varies in length, the first option is unreliable. The second option has already been incorporated into the `strtotime()` function, so why not use that instead?

More examples <a href="#more-examples" class="direct-link">#</a>
----------------------------------------------------------------

You can use the following examples to experiment with. For further documentation, see the [PHP Manual](http://php.net/)'s section on [`strtotime()`](http://php.net/strtotime/).

    $date = "2005-05-10";
    echo date("Y-m-d", strtotime(date("Y-m-d", strtotime($date)) . " +30 days")); // output is 2005-06-09
    echo date("Y-m-d", strtotime(date("Y-m-d", strtotime($date)) . " +4 weeks")); // output is 2005-06-07
    echo date("Y-m-d", strtotime(date("Y-m-d", strtotime($date)) . " +1 month")); // output is 2005-06-10

<a href="../../tags/development/index.html" class="post-tag">development</a> <a href="../../tags/php/index.html" class="post-tag">php</a> <a href="../../tags/tips/index.html" class="post-tag">tips</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../an-excellent-free-font-resource/index.html" class="post-nav-previous"><span class="small">Previous post</span> DaFont: an excellent free font resource</a> <a href="../javascript-functions-for-basename-and-dirname/index.html" class="post-nav-next"><span class="small">Up next</span> JavaScript functions for basename and dirname</a>
