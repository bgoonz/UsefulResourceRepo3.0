<a href="/categories/coding/" class="category-link">Coding</a>

# Regular Expressions in C\# and Java - CSV Example

<span title="Last time this post was updated"> Last updated November 10th 2011 </span> <span class="m-x-2" title="Pageviews"> 3.1k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/regular-expressions-in-c-and-java-csv-example/">0</span>](#disqus_thread) </span>

- <a href="/tags/regex/" class="tag-list-link">regex</a><span class="tag-list-count">1</span>

Regular expressions are used to find matches in texts. The following is a real application of Regex in C\# and Java.

<span id="more"></span>

CSV are files that all the data is separated by a comma. E.g:

    name,line1,line2,city,zip code,country

You cand easily use String.Split() in C\# to get all the values. But, there are cases when the data can contain comma. E.g:

    "Mr. John Doe, Jr.",7926 Glenbrook Dr., 14623

In this case a regular expression (regex) could be use to determine if the comma is inside a quote or not.



C\# Example:



        public string[] parseCSV(string line)
        {
            List<string> datalist = new List<string>();

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



### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2011-11-10-regular-expressions-in-c-and-java-csv-example.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/learning-algorithms-from-scratch-algorithms-for-dummies/" class="article-nav-newer"><strong><em></em> newer</strong></a>

Learning Algorithms from Scratch / Algorithms for Dummies

<a href="/gitftp-publish-git-repository-over-ftp/" class="article-nav-older"><strong>older <em></em></strong></a>

git+ftp: Publish Git repository over FTP

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>
