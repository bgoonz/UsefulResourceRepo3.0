<a href="classroom-overview.html#content" class="sr-only sr-only-focusable">Skip to main content</a>

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
-   [<span class="header-section-number">33</span> Make a GitHub repo browsable](workflows-browsability.html)
-   Activity prompts
-   [<span class="header-section-number">34</span> Clone a repo](clone.html)
-   [<span class="header-section-number">35</span> Create a bingo card](bingo.html)
-   [<span class="header-section-number">36</span> Burn it all down](burn.html)
-   [<span class="header-section-number">37</span> Resetting](reset.html)
-   [<span class="header-section-number">38</span> Search GitHub](search.html)
-   Notes
-   [Notes](notes-intro.html)
-   <a href="classroom-overview.html" class="active"><span class="header-section-number">39</span> Run a course with GitHub</a>
-   [<span class="header-section-number">40</span> Ideas for content](ideas-for-content.html)
-   [<span class="header-section-number">41</span> Bookdown cheat sheet](bookdown-cheat-sheet.html)
-   Appendix
-   [<span class="header-section-number">A</span> The shell](shell.html)
-   [<span class="header-section-number">B</span> Comic relief](comic-relief.html)
-   [<span class="header-section-number">C</span> Resources](resources.html)
-   [<span class="header-section-number">D</span> References](references.html)

<a href="https://github.com/jennybc/happy-git-with-r" id="book-repo">View book source <em></em></a>

<span class="header-section-number">39</span> Run a course with GitHub<a href="classroom-overview.html#classroom-overview" class="anchor"><em></em></a>
=======================================================================================================================================================

*This content is rather stale and unlikely to see further development.*

GitHub makes a wonderful platform on which to run a course. I’ve been doing this on [github.com](https://github.com) since 2014 in [STAT 545](http://stat545.com), an 80-student grad course in data analysis with R, and in a second large, code-intensive graduate course in statistical genomics. We’re running all of the courses for UBC’s [Master of Data Science program](https://ubc-mds.github.io) off a private instance of [GitHub Enterprise](https://enterprise.github.com/home) hosted in Canada.

<span class="header-section-number">39.1</span> Benefits<a href="classroom-overview.html#benefits" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------

For the instructor

-   If you already use Git/GitHub, it’s extremely efficient to use the same workflows to manage course materials, student work, and communication with students and TAs.
    -   When I switched to Git/GitHub and R Markdown, abandoning my old “system” of accepting all manner of stuff as email attachments? It was the first time I actually ran the code in my students’ final projects, because it was so easy to get it on my computer in an organized fashion. I even made some corrections as pull requests!
-   If you’re still in your early days with Git/GitHub, the sheer volume of operations and regular small deadlines will increase your mastery very quickly. Practice makes perfect! However, I would not recommend running a course on GitHub as your *first* substantial version control project.

For the students

-   I have found that students adjust to Git/GitHub fairly quickly and genuinely like it. They find it gratifying to see their beautiful, figure-rich R Markdown reports up on the internet. Since it’s easy to expose their work within the class, we do a lot of peer review. I find that expertise spreads around the class like a virus. That applies to the main course substance as well as workflow.
-   Many students are specifically interested in learning Git and GitHub, as a complement to the coding and analytical skills we teach in these courses. The fact that we use it for course mechanics kills two birds with one stone. Teaching the use of distributed version control is a valid pedagogical goal in and of itself.

<span class="header-section-number">39.2</span> The STAT 545 student setup<a href="classroom-overview.html#the-stat-545-student-setup" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

GitHub’s Organizations/Teams and API have changed over the 3+ years we’ve been doing this, so my approach has evolved over time and is also shaped by hard experience.

Major points:

-   [Create an Organization](https://help.github.com/articles/creating-a-new-organization-account/) for the course.
    -   Immediately request an [Education discount](https://education.github.com) for the Organization, so that you get unlimited private repos.
-   Have your students register for free, personal [GitHub accounts](https://github.com).
    -   Encourage them to request an [Education discount](https://education.github.com) on their own behalf (aka “student developer pack”). But rest assured, nothing you need for your course machinery will depend on this.
-   Get the GitHub usernames from your students – we use a [Shiny](http://deanattali.com/blog/shiny-persistent-data-storage/) [app](http://deanattali.com/2015/06/14/mimicking-google-form-shiny/)! – plus some shred of information that allows you link them back to your official course list.
-   Create a students [Team](https://help.github.com/enterprise/2.7/admin/guides/user-management/organizations-and-teams/) and a TA Team. I make such teams for each run of the course, e.g. `2016_students` and `2016_ta`.
-   Invite students to join your course organization and the students team. Ditto for TAs and the TA team.
-   Create a canonical name for each student, based on the official course list, i.e. `lastname_firstname`.
-   Create a repository for each student, using the student’s canonical name.
    -   This is a private repository within the course Organization.
    -   I turn wikis off and either let GitHub auto-initialize or immediately push files, including a README, into the repos.
    -   Give the student team read or pull access to each student’s repo. Yes, this allows them to see each others work. I discuss this elsewhere.
    -   Give the TA team write or push access to each student’s repo.
    -   Add the student as collaborator with write or push access.
    -   Unwatch these repos personally! Wow such notification.

That’s the setup! I use the [gh](https://github.com/gaborcsardi/gh) and [purrr](https://github.com/hadley/purrr) packages to script all of this [GitHub API](https://developer.github.com/v3/) work. *In a second wave, I’ll post code snippets for the above operations.*

What you should NOT do (voice of experience, here):

Do NOT allow students to create their own repositories.

-   You will have a naming convention and they will never, ever, ever follow it.
-   You need to have admin rights over their course repo, so you can manipulate it at will via the GitHub API. You will ask them to add you and the TAs as collaborators, but they will not all manage to execute this task.
-   You will want to do various bulk operations on the repos and your API work will be simpler if the repos belong to the same Organization vs looping over randomly named repos owned by random people, subject to their whims.

<span class="header-section-number">39.3</span> The homework-flow<a href="classroom-overview.html#the-homework-flow" class="anchor"><em></em></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

In class, the students [take possession of their repos](http://stat545.com/git08_claim-stat545-repo.html), from RStudio via *File &gt; New Project*. They do the bulk of their coursework here: it is a directory on their computer, a Git repo associated with GitHub remote, and an RStudio project.

Typically homework is done in R Markdown, using the [`github_document`](http://rmarkdown.rstudio.com/github_document_format.html) output format. They commit and push `.Rmd`, `.md`, and any necessary files, such a figures.

Homework is submitted by opening an issue:

-   Issue name is “Mark homework x of lastname\_firstname”. OK not really, but I can dream.
-   Body should contain SHA of their latest commit, tag(s) for the marking TA or the TA team, and, ideally, links to the file(s) to be marked.

TAs leave feedback here. Actual marks are stored elsewhere and distributed via email. As the TAs mark, they close the issues.

After homework submission, we randomly assign each student to review the work of two peers. Each peer review assignment takes the form of an issue, assigned to the reviewer. Students leave feedback for each other here. As the TAs mark, they read and assess these peer reviews (also marked!) and close the issues.

<span class="header-section-number">39.4</span> GitHub as course management system<a href="classroom-overview.html#github-as-course-management-system" class="anchor"><em></em></a>
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*2017-05-29 This section was excised from an article I am writing. It is partially redundant with the above and the the two will be merged.*

[STAT 545](http://stat545.com) is a data wrangling and analysis course at the University of British Columbia. I was the instructor in charge for several years, which coincided with my own adoption of Git/GitHub. GitHub is used to manage the development of course material, to serve the course website, to create a discussion forum, and to host all student-submitted work.

Given that students must submit their work and provide peer review of others’ work via GitHub, the use of hosted version control is an explicit, though modest, part of the course. The website [Happy Git and GitHub for the useR](index.html) holds our battle-tested instructions for setup and early usage. The students achieve basic competence quite quickly and find it gratifying to see their formatted, figure-rich R Markdown reports up on the internet. Since it’s easy to expose their work within the class, we conduct peer review, which helps expertise to spread quickly through the group.

### <span class="header-section-number">39.4.1</span> Use a GitHub Organization<a href="classroom-overview.html#use-a-github-organization" class="anchor"><em></em></a>

[GitHub Organizations](https://help.github.com/articles/differences-between-user-and-organization-accounts/) are “shared accounts where groups of people can collaborate across many projects at once”. This is the most appropriate structure for stewarding course resources, since I can grant TAs and students different levels of access to various repositories. Access can be controlled at the individual user level or, more conveniently, for entire [Teams](https://help.github.com/articles/setting-up-teams/). The TA Team shares write access with me on a private repository for internal matters. I provide each student with their own private repository for coursework and grant other members of the Students Team read access, in order to facilitate peer review. There is a public repository that underpins the course website (see below). We have one other public repository that exists solely so the [Issues](https://github.com/STAT545-UBC/Discussion/issues) can be used as a discussion forum.

GitHub actively encourages the use of its platform in teaching. As an instructor you can request a [free Organization account](https://help.github.com/articles/discounted-organization-accounts/) that provides features normally available only on paid plans, such as private repositories. In fact, GitHub provides tooling for specific teaching workflows via [GitHub Classroom](https://classroom.github.com/), although I do not use it. That is not an intentional knock on their tools. I started teaching with GitHub several years before this existed and developed a different way of using the platform. I also find the [GitHub Education](https://education.github.com) resources to be geared more towards computer science than data science.

### <span class="header-section-number">39.4.2</span> GitHub Pages for course website<a href="classroom-overview.html#github-pages-for-course-website" class="anchor"><em></em></a>

All course content is provided on the [STAT 545 website](http://stat545.com). Each page is generated from an R Markdown document that is rendered to HTML locally using the rmarkdown package, retaining the intermediate Markdown. These pages are a mix of prose and rendered R code, reflecting the live coding done in class. All of these files and their history can be explored in the [source repository](https://github.com/STAT545-UBC/STAT545-UBC.github.io). The TA team has permission to write to this repo, meaning they can (and do!) help me maintain the website. I rejoice that I am no longer the webmaster. We also get typo corrections and other input from the world at large, since this is entirely public.

If I were starting from scratch today, I would continue to use R Markdown, RStudio, and GitHub Pages (see below), but would upgrade to a more modern, automated approach to rendering the pages. I now recommend [R Markdown websites](http://rmarkdown.rstudio.com/rmarkdown_websites.html), [bookdown](https://bookdown.org), or [blogdown](https://bookdown.org/yihui/blogdown/) to manage the process of creating a static website from a large and inter-related set of `.Rmd` files.

GitHub offers several ways to host a website directly from a repository, collectively known as [GitHub Pages](https://help.github.com/categories/github-pages-basics/). The STAT 545 website is a very simple [Organization Page](https://help.github.com/articles/user-organization-and-project-pages/) that uses a [custom domain](https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/), `stat545.com`, instead of the default `orgname.github.io`.

This system for managing course content is a great example of integrating the doing of work and the sharing of it. We analyze data live in class, using R, based on the scripts on the website. I re-render the associated `.R` or `.Rmd`, commit the changed files, push, and see it reflected right away on <a href="http://stat545.com" class="uri">http://stat545.com</a>. There is no separation between having an idea, implementing it, and posting on the website.

### <span class="header-section-number">39.4.3</span> Student-specific private repos<a href="classroom-overview.html#student-specific-private-repos" class="anchor"><em></em></a>

Early in the course I elicit GitHub usernames for registered students, via a [Shiny app](https://shiny.rstudio.com), and invite them to join the course Organization. I then create one private repository per student, in the STAT 545 Organization. The targeted student has write access and the other students have read access. This is somewhat controversial, due to the possibility of cheating, but I have seen more pros than cons for this setup, in the STAT 545 context. In other settings, I have also used one repo per student *per homework assignment*, which allows you to keep the repos completely private until homework submission, then increase their visibility during marking and peer review. Some courses will work better with one model or the other.

Each student does their work in this repo, submitting a major assignment approximately once a week. The first assignment is simply to claim the repository and create a README, which proves they have all the relevant software setup and they can write a little Markdown. Each week we tackle some new data analysis or wrangling task, with increasing latitude for independence. Homework is implemented in R Markdown documents, rendered to Markdown, and pushed to GitHub. Students submit their work by opening an issue in their repo, naming the assignment in the title, providing the SHA of the associated final commit, and linking to the main `.md` file. We leave feedback as comments in the issue thread or, occasionally, propose changes to code via “pull requests”. Two peers are selected at random to review each assignment, a process that we also implement via GitHub Issues.

At the end of term, the student (and their instructor!) can visit the repo to find an organized, navigable sequence of ~10 assignments. Each student leaves with self-written documentation of everything they’ve done, ready to consult in future projects. The last assignments require writing an R package or Shiny app, which they generally do in public repositories under their own accounts. They finish STAT 545 with several months of Git/GitHub experience and the start of a data science portfolio.

[Notes](notes-intro.html)

[<span class="header-section-number">40</span> Ideas for content](ideas-for-content.html)

On this page
------------

-   <a href="classroom-overview.html#classroom-overview" class="nav-link"><span class="header-section-number">39</span> Run a course with GitHub</a>
-   <a href="classroom-overview.html#benefits" class="nav-link"><span class="header-section-number">39.1</span> Benefits</a>
-   <a href="classroom-overview.html#the-stat-545-student-setup" class="nav-link"><span class="header-section-number">39.2</span> The STAT 545 student setup</a>
-   <a href="classroom-overview.html#the-homework-flow" class="nav-link"><span class="header-section-number">39.3</span> The homework-flow</a>
-   <a href="classroom-overview.html#github-as-course-management-system" class="nav-link"><span class="header-section-number">39.4</span> GitHub as course management system</a>
    -   <a href="classroom-overview.html#use-a-github-organization" class="nav-link"><span class="header-section-number">39.4.1</span> Use a GitHub Organization</a>
    -   <a href="classroom-overview.html#github-pages-for-course-website" class="nav-link"><span class="header-section-number">39.4.2</span> GitHub Pages for course website</a>
    -   <a href="classroom-overview.html#student-specific-private-repos" class="nav-link"><span class="header-section-number">39.4.3</span> Student-specific private repos</a>

-   <a href="https://github.com/jennybc/happy-git-with-r/blob/master/notes-classroom-overview.Rmd" id="book-source">View source <em></em></a>
-   <a href="https://github.com/jennybc/happy-git-with-r/edit/master/notes-classroom-overview.Rmd" id="book-edit">Edit this page <em></em></a>
