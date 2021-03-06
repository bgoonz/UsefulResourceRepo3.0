<a href="workflows-browsability.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

[Happy Git and GitHub for the useR](index.html)
===============================================

<span class="sr-only">Show table of contents</span>

Table of contents
-----------------

-   [Let’s Git started](index.html)
-   [<span class="header-section-number">1</span> Why Git? Why GitHub?](big-picture.html)
-   [<span class="header-section-number">2</span> Contributors](contrib.html)
-   [<span class="header-section-number">3</span> Workshops](workshops.html)
-   Installation
-   [Half the battle](install-intro.html)
-   [<span class="header-section-number">4</span> Register a GitHub account](github-acct.html)
-   [<span class="header-section-number">5</span> Install or upgrade R and RStudio](install-r-rstudio.html)
-   [<span class="header-section-number">6</span> Install Git](install-git.html)
-   [<span class="header-section-number">7</span> Introduce yourself to Git](hello-git.html)
-   [<span class="header-section-number">8</span> Install a Git client](git-client.html)
-   Connect Git, GitHub, RStudio
-   [Can you hear me now?](connect-intro.html)
-   [<span class="header-section-number">9</span> Personal access token for HTTPS](https-pat.html)
-   [<span class="header-section-number">10</span> Set up keys for SSH](ssh-keys.html)
-   [<span class="header-section-number">11</span> Connect to GitHub](push-pull-github.html)
-   [<span class="header-section-number">12</span> Connect RStudio to Git and GitHub](rstudio-git-github.html)
-   [<span class="header-section-number">13</span> Detect Git from RStudio](rstudio-see-git.html)
-   [<span class="header-section-number">14</span> RStudio, Git, GitHub Hell](troubleshooting.html)
-   Early GitHub Wins
-   [Get started with GitHub](usage-intro.html)
-   [<span class="header-section-number">15</span> New project, GitHub first](new-github-first.html)
-   [<span class="header-section-number">16</span> Existing project, GitHub first](existing-github-first.html)
-   [<span class="header-section-number">17</span> Existing project, GitHub last](existing-github-last.html)
-   [<span class="header-section-number">18</span> Test drive R Markdown](rmd-test-drive.html)
-   [<span class="header-section-number">19</span> Render an R script](r-test-drive.html)
-   Git fundamentals
-   [Some Git basics](git-intro.html)
-   [<span class="header-section-number">20</span> Repo, commit, diff, tag](git-basics.html)
-   [<span class="header-section-number">21</span> Git commands](git-commands.html)
-   [<span class="header-section-number">22</span> Branches](git-branches.html)
-   [<span class="header-section-number">23</span> Remotes](git-remotes.html)
-   Remote setups
-   [Git remote setups](remote-scenarios-intro.html)
-   [<span class="header-section-number">24</span> Common remote setups](common-remote-setups.html)
-   [<span class="header-section-number">25</span> Equivocal remote setups](equivocal.html)
-   Daily Workflows
-   [Useful Git patterns for real life](workflows-intro.html)
-   [<span class="header-section-number">26</span> The Repeated Amend](repeated-amend.html)
-   [<span class="header-section-number">27</span> Dealing with push rejection](push-rejected.html)
-   [<span class="header-section-number">28</span> Pull, but you have local work](pull-tricky.html)
-   [<span class="header-section-number">29</span> Time travel: See the past](time-travel-see-past.html)
-   [<span class="header-section-number">30</span> Fork and clone](fork-and-clone.html)
-   [<span class="header-section-number">31</span> Get upstream changes for a fork](upstream-changes.html)
-   [<span class="header-section-number">32</span> Explore and extend a pull request](pr-extend.html)
-   <a href="workflows-browsability.html" class="active"><span class="header-section-number">33</span> Make a GitHub repo browsable</a>
-   Activity prompts
-   [<span class="header-section-number">34</span> Clone a repo](clone.html)
-   [<span class="header-section-number">35</span> Create a bingo card](bingo.html)
-   [<span class="header-section-number">36</span> Burn it all down](burn.html)
-   [<span class="header-section-number">37</span> Resetting](reset.html)
-   [<span class="header-section-number">38</span> Search GitHub](search.html)
-   Notes
-   [Notes](notes-intro.html)
-   [<span class="header-section-number">39</span> Run a course with GitHub](classroom-overview.html)
-   [<span class="header-section-number">40</span> Ideas for content](ideas-for-content.html)
-   [<span class="header-section-number">41</span> Bookdown cheat sheet](bookdown-cheat-sheet.html)
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

<span class="header-section-number">33</span> Make a GitHub repo browsable<a href="workflows-browsability.html#workflows-browsability" class="anchor"><em></em></a>
===================================================================================================================================================================

**The unreasonable effectiveness of GitHub browsability**. One of my favorite aspects of GitHub is the ability to inspect a repository’s files in a browser. Certain practices make browsing more rewarding and can postpone the day when you must create a proper website for a project. Perhaps indefinitely.

<span class="header-section-number">33.1</span> Be savvy about your files<a href="workflows-browsability.html#be-savvy-about-your-files" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Keep files in the plainest, web-friendliest form that is compatible with your main goals. Plain text is the very best. GitHub offers special handling for certain types of files:

-   Markdown files, which may be destined for conversion into, e.g., HTML
-   Markdown files named `README.md`
-   HTML files, often the result of compiling Markdown files
-   Source code, such as `.R` files
-   Delimited files, such as CSVs and TSVs
-   PNG files

<span class="header-section-number">33.2</span> Get over your hang ups re: committing derived products<a href="workflows-browsability.html#get-over-your-hang-ups-re-committing-derived-products" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Let’s acknowledge the discomfort some people feel about putting derived products under version control. Specifically, if you’ve got an R Markdown document `foo.Rmd`, it can be `knit()` to produce the intermediate product `foo.md`, which can be converted to the ultimate output `foo.html`. Which of those files are you “allowed” to put under version control? Source-is-real hardliners will say only `foo.Rmd` but pragmatists know this can be a serious bummer in real life. Just because I *can* rebuild everything from scratch, it doesn’t mean I *want* to.

The taboo of keeping derived products under version control originates from compilation of binary executables from source. Software built on a Mac would not work on Windows and so it made sense to keep these binaries out of the holy source code repository. Also, you could assume the people with access to the repository have the full development stack and relish opportunities to use it. None of these arguments really apply to the `foo.Rmd --> foo.md --> foo.html` workflow. We don’t have to blindly follow traditions from the compilation domain!

In fact, looking at the diffs for `foo.md` or `foo-figure-01.png` can be extremely informative. This is also true in larger data analytic projects after a `make clean; make all` operation. By looking at the diffs in the downstream products, you often catch unexpected changes. This can tip you off to changes in the underlying data and/or the behavior of packages you depend on.

This chapter explores cool things GitHub can do with various file types, if they happen to end up in your repo. I won’t ask you how they got there.

<span class="header-section-number">33.3</span> Markdown<a href="workflows-browsability.html#markdown" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------

You will quickly discover that GitHub renders Markdown files very nicely. By clicking on `foo.md`, you’ll get a decent preview of `foo.html`. Yay! You should read [GitHub’s own guide](https://guides.github.com/features/mastering-markdown/) on how to leverage automatic Markdown rendering.

Exploit this aggressively. Make Markdown your default format for narrative text files and use them liberally to embed notes to yourself and others in a repository hosted on Github. It’s an easy way to get pseudo-webpages inside a project “for free”. You may never even compile these files to HTML explicitly; in many cases, the HTML preview offered by GitHub is all you ever need.

<span class="header-section-number">33.4</span> R Markdown<a href="workflows-browsability.html#r-markdown" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------

What does this mean for R Markdown files? **Keep intermediate Markdown. Or only render to Markdown.** Commit both `foo.Rmd` and `foo.md`, even if you choose to `.gitignore` the final product, e.g. `foo.html` or `foo.pdf` or `foo.docx`. From [September 2014](https://github.com/github/markup/pull/343), GitHub renders R Markdown files nicely, like Markdown, and with proper syntax highlighting, which is great. But, of course, the code blocks just sit there un-executed, so my advice about keeping Markdown still holds.

If your target output format is not Markdown, you want [YAML frontmatter](https://gist.github.com/jennybc/402761e30b9be8023af9) that looks something like this for `.Rmd`:

    ---
    title: "Something fascinating"
    author: "Jenny Bryan"
    date: "`r format(Sys.Date())`"
    output:
      html_document:
        keep_md: TRUE
    ---

or like this for `.R`:

    #' ---
    #' title: "Something fascinating"
    #' author: "Jenny Bryan"
    #' date: "`r format(Sys.Date())`"
    #' output:
    #'   html_document:
    #'     keep_md: TRUE
    #' ---

The `keep_md: TRUE` part says to keep the intermediate Markdown. In RStudio, when editing `.Rmd`, click on the gear next to “Knit HTML” for YAML authoring help.

Since 2016, `rmarkdown` offers a [custom output format for GitHub-flavored markdown, `github_document`](http://rmarkdown.rstudio.com/github_document_format.html). Read about [R Markdown workflows](rmd-test-drive.html#rmd-test-drive) for explicit examples of how to use this. If Markdown is your target output format, your [YAML can be even simpler](https://gist.github.com/jennybc/402761e30b9be8023af9) and look like this for `.Rmd`:

    ---
    output: github_document
    ---

or like this for `.R`:

    #' ---
    #' output: github_document
    #' ---

For a quick, stand-alone document that doesn’t fit neatly into a repository or project (yet), make it a [Gist](https://gist.github.com). Example: Hadley Wickham’s [advice on what you need to do to become a data scientist](https://gist.github.com/hadley/820f09ded347c62c2864). Gists can contain multiple files, so you can still provide the R script or R Markdown source **and** the resulting Markdown, as I’ve done in this write-up of [Twitter-sourced tips for cross-tabulation](https://gist.github.com/jennybc/04b71bfaaf0f88d9d2eb). I’ve collected [YAML examples](https://gist.github.com/jennybc/402761e30b9be8023af9) for all the above scenarios in a gist.

<span class="header-section-number">33.5</span> `README.md`<a href="workflows-browsability.html#readme.md" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------

You probably already know that GitHub renders `README.md` at the top-level of your repo as the *de facto* landing page. This is analogous to what happens when you point a web browser at a directory instead of a specific web page: if there is a file named `index.html`, that’s what the server will show you by default. On GitHub, files named `README.md` play exactly this role for directories in your repo.

Implication: for any logical group of files or mini project-within-your-project, create a sub-directory in your repository. And then create a `README.md` file to annotate these files, collect relevant links, etc. Now when you navigate to the sub-directory on GitHub the nicely rendered `README.md` will simply appear. The GitHub repo that backs the [gapminder](https://cran.r-project.org/package=gapminder) data package has a [README in the `data-raw` subdirectory](https://github.com/jennybc/gapminder/tree/master/data-raw#readme) that explains exactly how the package data is created. In fact, it is generated programmatically from [`README.Rmd`](https://github.com/jennybc/gapminder/blob/master/data-raw/README.Rmd).

Some repositories consist solely of `README.md`. Examples: Jeff Leek’s write-ups on [How to share data with a statistician](https://github.com/jtleek/datasharing) or [Developing R packages](https://github.com/jtleek/rpackages). I am becoming a bigger fan of `README`-only repos than gists because repo issues trigger notifications, whereas comments on gists do not.

If you’ve got a directory full of web-friendly figures, such as PNGs, you can use [code like this](https://gist.github.com/jennybc/0239f65633e09df7e5f4) to generate a `README.md` for a quick DIY gallery, as Karl Broman has done with [his FruitSnacks](https://github.com/kbroman/FruitSnacks/blob/master/PhotoGallery.md). I did same for all the [fantastic O RLY book covers](https://github.com/jennybc/orly-full-res#readme) made by The Practical Dev.

I have also used this device to share Keynote slides on GitHub (*mea culpa!*). Export them as PNGs images and throw ’em into a README gallery: slides on [file organization](https://github.com/Reproducible-Science-Curriculum/rr-organization1/tree/27883c8fc4cdd4dcc6a8232f1fe5c726e96708a0/slides/organization-slides) and some on [file naming](https://github.com/Reproducible-Science-Curriculum/rr-organization1/tree/27883c8fc4cdd4dcc6a8232f1fe5c726e96708a0/slides/naming-slides).

<span class="header-section-number">33.6</span> Finding stuff<a href="workflows-browsability.html#finding-stuff" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------------------------

OK these are pure GitHub tips but if you’ve made it this far, you’re obviously a keener.

-   Press `t` to activate [the file finder](https://github.com/blog/793-introducing-the-file-finder) whenever you’re in a repo’s file and directory view. AWESOME, especially when there are files tucked into lots of subdirectories.
-   Press `y` to [get a permanent link](https://help.github.com/articles/getting-permanent-links-to-files/) when you’re viewing a specific file. Watch what changes in the URL. This is important if you are about to *link* to a file or [to specific lines](http://stackoverflow.com/questions/23821235/how-to-link-to-specific-line-number-on-github). Otherwise your links will break easily in the future. If the file is deleted or renamed or if lines get inserted or deleted, your links will no longer point to what you intended. Use `y` to get links that include a specific commit in the URL.

<span class="header-section-number">33.7</span> HTML<a href="workflows-browsability.html#html" class="anchor"><em></em></a>
---------------------------------------------------------------------------------------------------------------------------

If you have an HTML file in a GitHub repository, simply visiting the file shows the raw HTML. Here’s a nice ugly example:

-   <a href="https://github.com/STAT545-UBC/STAT545-UBC.github.io/blob/master/bit003_api-key-env-var.html" class="uri">https://github.com/STAT545-UBC/STAT545-UBC.github.io/blob/master/bit003_api-key-env-var.html</a>

No one wants to look at that. <s>You can provide this URL to [rawgit.com](http://rawgit.com) to serve this HTML more properly and get a decent preview.</s>

<s>You can form two different types of URLs with [rawgit.com](http://rawgit.com):</s>

-   <s>For sharing low-traffic, temporary examples or demos with small numbers of people, do this:</s>
    -   <s><a href="https://rawgit.com/STAT545-UBC/STAT545-UBC.github.io/master/bit003_api-key-env-var.html" class="uri">https://rawgit.com/STAT545-UBC/STAT545-UBC.github.io/master/bit003_api-key-env-var.html</a></s>
    -   <s>Basically: replace `https://github.com/` with `https://rawgit.com/`</s>
-   <s>For use on production websites with any amount of traffic, do this:</s>
    -   <s><a href="https://cdn.rawgit.com/STAT545-UBC/STAT545-UBC.github.io/master/bit003_api-key-env-var.html" class="uri">https://cdn.rawgit.com/STAT545-UBC/STAT545-UBC.github.io/master/bit003_api-key-env-var.html</a></s>
    -   <s>Basically: replace `https://github.com/` with `https://cdn.rawgit.com/`</s>

*2018-10-09 update: RawGit [announced](https://rawgit.com/) that it is in a sunset phase and will soon shut down. They recommended: [jsDelivr](https://www.jsdelivr.com/rawgit), [GitHub Pages](https://pages.github.com/), [CodeSandbox](https://codesandbox.io/), and [unpkg](https://unpkg.com/#/) as alternatives.*

This sort of enhanced link might be one of the useful things to put in a `README.md` or other Markdown file in the repo.

You may also want to check out this [Chrome extension](https://chrome.google.com/webstore/detail/github-html-preview/cphnnfjainnhgejcpgboeeakfkgbkfek?hl=en) or [GitHub & BitBucket HTML Preview](https://htmlpreview.github.io), though recently I’ve more success with [rawgit.com](http://rawgit.com). (Neither work with private GitHub repos, which is all the more reason to keep intermediate markdown files for HTML, as described above.)

Sometimes including HTML files will cause GitHub to think that your R repository is HTML. Besides being slightly annoying, this can make it difficult for people to find your work if they are searching specifically for R repos. You can exclude these files or directories from GitHub’s language statistics by [adding a .gitattributes file](https://github.com/github/linguist#using-gitattributes) that marks them as ‘documentation’ rather than code. [See an example here](https://github.com/jennybc/googlesheets/blob/master/.gitattributes).

<span class="header-section-number">33.8</span> Source code<a href="workflows-browsability.html#source-code" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------

You will notice that GitHub does automatic syntax highlighting for source code. For example, notice the coloring of this [R script](https://github.com/jennybc/ggplot2-tutorial/blob/master/gapminder-ggplot2-stripplot.r). The file’s extension is the primary determinant for if/how syntax highlighting will be applied. You can see information on recognized languages, the default extensions and more at [github/linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). You should be doing it anyway, but let this be another reason to follow convention in your use of file extensions.

Note you can click on “Raw” in this context as well, to get just the plain text and nothing but the plain text.

<span class="header-section-number">33.9</span> Delimited files<a href="workflows-browsability.html#delimited-files" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

GitHub will nicely render tabular data in the form of `.csv` (comma-separated) and `.tsv` (tab-separated) files. You can read more in the [blog post](https://github.com/blog/1601-see-your-csvs) announcing this feature in August 2013 or in [this GitHub help page](https://help.github.com/articles/rendering-csv-and-tsv-data).

Advice: take advantage of this! If something in your repo can be naturally stored as delimited data, by all means, do so. Make the comma or tab your default delimiter and use the file suffixes GitHub is expecting. I have noticed that GitHub is more easily confused than R about things like quoting, so always inspect the GitHub-rendered `.csv` or `.tsv` file in the browser. You may need to do light cleaning to get the automagic rendering to work properly. Think of it as yet another way to learn about imperfections in your data.

Here’s an example of a tab delimited file on GitHub: [lotr\_clean.tsv](https://github.com/jennybc/lotr/blob/master/lotr_clean.tsv), originally found <s>here</s> (nope, IBM shut down manyeyes July 2015).

Note you can click on “Raw” in this context as well, to get just the plain text and nothing but the plain text.

<span class="header-section-number">33.10</span> PNGs<a href="workflows-browsability.html#pngs" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------

PNG is the “no brainer” format in which to store figures for the web. But many of us like a vector-based format, such as PDF, for general purpose figures. Bottom line: PNGs will drive you less crazy than PDFs on GitHub. To reduce the aggravation around viewing figures in the browser, make sure to have a PNG version in the repo.

Examples:

-   [This PNG figure](https://github.com/jennybc/STAT545A/blob/master/hw06_scaffolds/01_justR/stripplot_wordsByRace_The_Fellowship_Of_The_Ring.png) just shows up in the browser
-   A different figure [stored as PDF](https://github.com/jennybc/ggplot2-tutorial/blob/master/gapminder-country-colors.pdf) <s>produces the dreaded, annoying “View Raw” speed bump. You’ll have to click through and, on my OS + browser, wait for the PDF to appear in an external PDF viewer.</s> *2015-06-19 update: since I first wrote this GitHub has [elevated its treament of PDFs](https://github.com/blog/1974-pdf-viewing) so YAY. It’s slow but it works.*

Hopefully we are moving towards a world where you can have “web friendly” and “vector” at the same time, without undue headaches. As of [October 2014](https://github.com/blog/1902-svg-viewing-diffing), GitHub provides enhanced viewing and diffing of SVGs. So don’t read this advice as discouraging SVGs. Make them! But consider keeping a PNG around as emergency back up for now.

<span class="header-section-number">33.11</span> Other document formats<a href="workflows-browsability.html#other-document-formats" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------

You may also have a document you want others to be able to browse and interact with, but it is not in the markdown format. Fortunately, the open-source Pandoc program, written by John MacFarlane, allows you to convert a range of formats into markdown, including the widely used `.docx` format.

When you click the Knit button in RStudio it is actually Pandoc which performs the final conversion to HTML or Microsoft Word (`.docx`) formats. If you are willing to use the command-line, you can perform the opposite conversion (eg `.docx` to `.md`), commonly retaining features such as headings, tables, equations and even figures.

As some boilerplate, running in Windows PowerShell `pandoc --extract-media .\media  -f docx .\example.docx -t markdown_github -o example_image.md` converts a word document called `example.docx` to markdown, and extracts the images into a directory which corresponds to a filepath in the newly created `example.md` document. A full list of supported formats and example code for conversions are available at <a href="https://pandoc.org/" class="uri">https://pandoc.org/</a>.

You can also perform simple conversions to GitHub-flavored markdown from different markdown flavours (Pandoc supports `markdown_mmd`, `markdown_php_extra` and `markdown_strict`) from within RStudio. To do so you need to rename the file by changing the extension (eg from `foo.md` to `foo.Rmd`), then open the renamed file in RStudio and add the following text to the top of the document.

    ---
    output: github_document
    ---

You can then click on “Knit” then “Knit to github document” to perform the conversion. See [Output format](workflows-browsability.html##%20Output%20format) for more details of controlling output formats with the YAML frontmatter.

<span class="header-section-number">33.12</span> Linking to a ZIP archive of your repo<a href="workflows-browsability.html#linking-to-a-zip-archive-of-your-repo" class="anchor"><em></em></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The browsability of GitHub makes your work accessible to people who care about your content but who don’t (yet) use Git themselves. What if such a person wants all the files? Yes, there is a clickable “Download ZIP” button offered by GitHub. But what if you want a link to include in an email or other document? If you add `/archive/master.zip` *to the end* of the URL for your repo, you construct a link that will download a ZIP archive of your repository. Click here to try this out on a very small repo:

<a href="https://github.com/jennybc/lotr/archive/master.zip" class="uri">https://github.com/jennybc/lotr/archive/master.zip</a>

Go look in your downloads folder!

<span class="header-section-number">33.13</span> Links and embedded figures<a href="workflows-browsability.html#links-and-embedded-figures" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   To link to another page in your repo, just use a relative link: `[admin](courseAdmin/)` will link to the `courseAdmin/` directory inside the current directory. `[admin](/courseAdmin/)` will link to the top-level `courseAdmin/` directory from any where in the repo

-   The same idea also works for images. `![](image.png)` will include `image.png` located in the current directory

<span class="header-section-number">33.14</span> Let people correct you on the internet<a href="workflows-browsability.html#let-people-correct-you-on-the-internet" class="anchor"><em></em></a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

They love that!

You can create a link that takes people directly to an editing interface in the browser. Behind the scenes, assuming the click-er is signed into GitHub but is not you, this will create a fork in their account and send you a pull request. When I click the link below, I am able to actually commit directly to `master` for this repo.

[CLICK HERE to suggest an edit to this page!](https://github.com/jennybc/happy-git-with-r/edit/master/workflows-make-github-repo-browsable.Rmd)

Here’s what that link looks like in the Markdown source:

    [CLICK HERE to suggest an edit to this page!](https://github.com/jennybc/happy-git-with-r/edit/master/workflows-make-github-repo-browsable.Rmd)

and here it is with placeholders:

    [INVITATION TO EDIT](<URL to your repo>/edit/master/<path to target source file>)

AFAIK, to do that in a slick automatic way across an entire repo/site, you need to be using Jekyll or some other automated system. But you could easily handcode such links on a small scale.

[<span class="header-section-number">32</span> Explore and extend a pull request](pr-extend.html)

[<span class="header-section-number">34</span> Clone a repo](clone.html)

On this page
------------

-   <a href="workflows-browsability.html#workflows-browsability" class="nav-link"><span class="header-section-number">33</span> Make a GitHub repo browsable</a>
-   <a href="workflows-browsability.html#be-savvy-about-your-files" class="nav-link"><span class="header-section-number">33.1</span> Be savvy about your files</a>
-   <a href="workflows-browsability.html#get-over-your-hang-ups-re-committing-derived-products" class="nav-link"><span class="header-section-number">33.2</span> Get over your hang ups re: committing derived products</a>
-   <a href="workflows-browsability.html#markdown" class="nav-link"><span class="header-section-number">33.3</span> Markdown</a>
-   <a href="workflows-browsability.html#r-markdown" class="nav-link"><span class="header-section-number">33.4</span> R Markdown</a>
-   <a href="workflows-browsability.html#readme.md" class="nav-link"><span class="header-section-number">33.5</span> README.md</a>
-   <a href="workflows-browsability.html#finding-stuff" class="nav-link"><span class="header-section-number">33.6</span> Finding stuff</a>
-   <a href="workflows-browsability.html#html" class="nav-link"><span class="header-section-number">33.7</span> HTML</a>
-   <a href="workflows-browsability.html#source-code" class="nav-link"><span class="header-section-number">33.8</span> Source code</a>
-   <a href="workflows-browsability.html#delimited-files" class="nav-link"><span class="header-section-number">33.9</span> Delimited files</a>
-   <a href="workflows-browsability.html#pngs" class="nav-link"><span class="header-section-number">33.10</span> PNGs</a>
-   <a href="workflows-browsability.html#other-document-formats" class="nav-link"><span class="header-section-number">33.11</span> Other document formats</a>
-   <a href="workflows-browsability.html#linking-to-a-zip-archive-of-your-repo" class="nav-link"><span class="header-section-number">33.12</span> Linking to a ZIP archive of your repo</a>
-   <a href="workflows-browsability.html#links-and-embedded-figures" class="nav-link"><span class="header-section-number">33.13</span> Links and embedded figures</a>
-   <a href="workflows-browsability.html#let-people-correct-you-on-the-internet" class="nav-link"><span class="header-section-number">33.14</span> Let people correct you on the internet</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/workflows-make-github-repo-browsable.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/workflows-make-github-repo-browsable.Rmd" id="book-edit">Edit this page <em></em></a>
