# Search Engine Optimization (SEO) Starter Guide

## Who is this guide for?

If you own, manage, monetize, or promote online content via Google Search, this guide is meant for you. You might be the owner of a growing and thriving business, the website owner of a dozen sites, the SEO specialist in a web agency or a DIY SEO expert passionate about the mechanics of Search: this guide is meant for you. If you're interested in having a complete overview of the basics of SEO according to our best practices, you are indeed in the right place. This guide won't provide any secrets that'll automatically rank your site first in Google (sorry!), but following the best practices will hopefully make it easier for search engines to crawl, index, and understand your content.

Search engine optimization (SEO) is often about making small modifications to parts of your website. When viewed individually, these changes might seem like incremental improvements, but when combined with other optimizations, they could have a noticeable impact on your site's user experience and performance in organic search results. You're likely already familiar with many of the topics in this guide, because they're essential ingredients for any web page, but you may not be making the most out of them.

You should build a website to benefit your users, and gear any optimization toward making the user experience better. One of those users is a search engine, which helps other users discover your content. SEO is about helping search engines understand and present content. Your site may be smaller or larger than our example site and offer vastly different content, but the optimization topics in this guide applies to sites of all sizes and types. We hope our guide gives you some fresh ideas on how to improve your website, and we'd love to hear your questions, feedback, and success stories in the [Google Search Central Help Community](https://g.co/WebmasterHelpForum).

## Getting started

### Glossary

Here's a short glossary of important terms used in this guide:

- Index - Google stores all web pages that it knows about in its *index*. The index entry for each page describes the content and location (URL) of that page. *To index* is when Google fetches a page, reads it, and adds it to the index: *Google indexed several pages on my site today*.
- Crawl - The process of looking for new or updated web pages. Google discovers URLs by following links, by reading sitemaps, and by many other means. *Google crawls the web, looking for new pages, then indexes them (when appropriate).*
- Crawler - Automated software that crawls (fetches) pages from the web and indexes them.
- Googlebot - The generic name of Google's crawler. *Googlebot crawls the web constantly.*
- SEO - Search engine optimization: the process of making your site better for search engines. Also the job title of a person who does this for a living: *We just hired a new SEO to improve our presence on the web.*

### Are you on Google?

#### Determine whether your site is in Google's index

Do a `site:` search for your site's home URL. If you see results, you're in the index. For example, a search for `site:wikipedia.org` returns [these results](https://www.google.com/search?q=site:wikipedia.org).

#### If your site isn't in Google

Although Google crawls billions of pages, it's inevitable that some sites will be missed. When our crawlers miss a site, it's frequently for one of the following reasons:

- The site isn't well connected from other sites on the web
- You've just launched a new site and Google hasn't had time to crawl it yet
- The design of the site makes it difficult for Google to crawl its content effectively
- Google received an error when trying to crawl your site
- Your policy blocks Google from crawling the site

### How do I get my site on Google?

Inclusion in Google's search results is free and easy; you don't even need to submit your site to Google. Google is a fully automated search engine that uses web crawlers to explore the web constantly, looking for sites to add to our index. In fact, the vast majority of sites listed in our results aren't manually submitted for inclusion, but found and added automatically when we crawl the web. [Learn how Google discovers, crawls, and serves web pages.](https://developers.google.com/search/docs/beginner/how-search-works)

We offer [webmaster guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines) for building a Google-friendly website. While there's no guarantee that our crawlers will find a particular site, following these guidelines can help make your site appear in our search results.

Google Search Console provides tools to help you submit your content to Google and monitor how you're doing in Google Search. If you want, Search Console can even send you alerts on critical issues that Google encounters with your site. [Sign up for Search Console](https://search.google.com/search-console).

Here are a few basic questions to ask yourself about your website when you get started.

- Is my website showing up on Google?
- Do I serve high-quality content to users?
- Is my local business showing up on Google?
- Is my content fast and easy to access on all devices?
- Is my website secure?

You can find additional getting started information on <https://g.co/webmasters>

The rest of this document provides guidance on how to improve your site for search engines, organized by topic. You can download a short, printable checklist of tips from <https://g.co/WebmasterChecklist>.

### Do you need an SEO expert?

An SEO expert is someone trained to improve your visibility on search engines. By following this guide, you'll learn enough to be well on your way to an optimized site. In addition to that, you may want to consider hiring an SEO professional that can help you audit your pages.

Deciding to hire an SEO is a big decision that can potentially improve your site and save time. Make sure to research the potential advantages of hiring an SEO, as well as the damage that an irresponsible SEO can do to your site. Many SEOs and other agencies and consultants provide useful services for website owners, including:

- Review of your site content or structure
- Technical advice on website development: for example, hosting, redirects, error pages, use of JavaScript
- Content development
- Management of online business development campaigns
- Keyword research
- SEO training
- Expertise in specific markets and geographies

Before beginning your search for an SEO, it's a great idea to become an educated consumer and get familiar with how search engines work. We recommend going through the entirety of this guide and specifically these resources:

- [Google 101: How Google crawls, indexes and serves the web](https://developers.google.com/search/docs/beginner/how-search-works)
- [Google Webmaster Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines)
- [How to hire an SEO](https://www.youtube.com/watch?v=piSvFxV_M04)

If you're thinking about hiring an SEO, the earlier the better. A great time to hire is when you're considering a site redesign, or planning to launch a new site. That way, you and your SEO can ensure that your site is designed to be search engine-friendly from the bottom up. However, a good SEO can also help improve an existing site.

For a detailed rundown on the need for hiring an SEO and what things to look out for, you can read [Do you need an SEO](https://developers.google.com/search/docs/beginner/do-i-need-seo).

## Help Google find your content

The first step to getting your site on Google is to be sure that Google can find it. The best way to do that is to submit a *sitemap*. A sitemap is a file on your site that tells search engines about new or changed pages on your site. [Learn more about how to build and submit a sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview).

Google also finds pages through links from other pages. Learn how to encourage people to discover your site by [Promoting your site](https://developers.google.com/search/docs/beginner/seo-starter-guide#promote).

## Tell Google which pages you *don't want* crawled

### For non-sensitive information, block unwanted crawling by using robots.txt

A robots.txt file tells search engines whether they can access and therefore crawl parts of your site. This file, which must be named robots.txt, is placed in the root directory of your site. It is possible that pages blocked by robots.txt can still be crawled, so for sensitive pages, use a more secure method.

# brandonsbaseballcards.com/robots.txt\

# Tell Google not to crawl any URLs in the shopping cart or images in the icons folder,\

# because they won't be useful in Google Search results.\

User-agent: googlebot\Disallow: /checkout/\
Disallow: /icons/

You may not want certain pages of your site crawled because they might not be useful to users if found in a search engine's search results. If you do want to prevent search engines from crawling your pages, Google Search Console has a friendly robots.txt generator to help you create this file. Note that if your site uses subdomains and you wish to have certain pages not crawled on a particular subdomain, you'll have to create a separate robots.txt file for that subdomain. For more information on robots.txt, we suggest this guide on [using robots.txt files](https://developers.google.com/search/docs/advanced/robots/intro).

[Read about several other ways to prevent content from appearing in search results.](https://developers.google.com/search/docs/advanced/crawling/control-what-you-share#how-to-block-content)

Avoid:

- Letting your internal search result pages be crawled by Google. Users dislike clicking a search engine result only to land on another search result page on your site.
- Allowing URLs created as a result of proxy services to be crawled.

### For sensitive information, use more secure methods

A robots.txt file is not an appropriate or effective way of blocking sensitive or confidential material. It only instructs well-behaved crawlers that the pages are not for them, but it does not prevent your server from delivering those pages to a browser that requests them. One reason is that search engines could still reference the URLs you block (showing just the URL, no title or snippet) if there happen to be links to those URLs somewhere on the Internet (like referrer logs). Also, non-compliant or rogue search engines that don't acknowledge the Robots Exclusion Standard could disobey the instructions of your robots.txt. Finally, a curious user could examine the directories or subdirectories in your robots.txt file and guess the URL of the content that you don't want seen.

In these cases, use the `noindex` tag if you just want the page not to appear in Google, but don't mind if any user with a link can reach the page. For real security, use proper authorization methods, like requiring a user password, or taking the page off your site entirely.

## Help Google (and users) understand your content

### Let Google see your page the same way a user does

When Googlebot crawls a page, it should [see the page the same way an average user does](https://developers.google.com/search/blog/2014/05/understanding-web-pages-better). For optimal rendering and indexing, always allow Googlebot access to the JavaScript, CSS, and image files used by your website. If your site's robots.txt file disallows crawling of these assets, it directly harms how well our algorithms render and index your content. This can result in suboptimal rankings.

Recommended action: [Use the URL Inspection tool](https://support.google.com/webmasters/answer/9012289). It will allow you to see exactly how Googlebot sees and renders your content, and it will help you identify and fix a number of indexing issues on your site.

### Create unique, accurate page titles

A `<title>` tag tells both users and search engines what the topic of a particular page is. Place the `<title>` tag within the `<head>` element of the HTML document, and create a unique title for each page on your site.

<html>\
<head>\ <title>Brandon's Baseball Cards - Buy Cards, Baseball News, Card Prices</title>\ <meta  name="description"  content="Brandon's Baseball Cards provides a large selection of\
    vintage and modern baseball cards for sale.\
    We also offer daily baseball news and events.">\
</head>\
<body>\
...

### Create good titles and snippets in search results

If your document appears in a search results page, the contents of the `title` tag may appear in the first line of the results (if you're unfamiliar with the different parts of a Google Search result, you might want to check out [the anatomy of a search result video](https://www.youtube.com/watch?v=MOfhHPp5sWs)).

The title for your homepage can list the name of your website/business and could include other bits of important information like the physical location of the business or maybe a few of its main focuses or offerings.

#### Accurately describe the page's content

Choose a title that reads naturally and effectively communicates the topic of the page's content.

Avoid:

- Choosing a title that has no relation to the content on the page.
- Using default or vague titles like "Untitled" or "New Page 1".

#### Create unique titles for each page

Make sure each page on your site has a unique title, which helps Google know how the page is distinct from the others on your site. If your site uses separate mobile pages, remember to use good titles on the mobile versions too.

Avoid:

- Using a single title across all of your site's pages or a large group of pages.

#### Use brief, but descriptive titles

Titles can be both short and informative. If the title is too long or otherwise deemed less relevant, Google may show only a portion of it or one that's automatically generated in the search result. Google may also show different titles depending on the user's query or device used for searching.

Avoid:

- Using extremely lengthy titles that are unhelpful to users.
- Stuffing unneeded keywords in your `title` tags.

### Use the `description` meta tag

A page's `description` meta tag gives Google and other search engines a summary of what the page is about. A page's title may be a few words or a phrase, whereas a page's `description` meta tag might be a sentence or two or even a short paragraph. Like the `<title>` tag, the `description` meta tag is placed within the `<head>` element of your HTML document.

<html>\
<head>\ <title>Brandon's Baseball Cards - Buy Cards, Baseball News, Card Prices</title>\ <meta  name="description"  content="Brandon's Baseball Cards provides a large selection of vintage and modern baseball cards for sale. We also offer daily baseball news and events.">\
</head>\
<body>\
...

#### What are the merits of `description` meta tags?

`description` meta tags are important because Google might use them as snippets for your pages. Note that we say "might" because Google may choose to use a relevant section of your page's visible text if it does a good job of matching up with a user's query. Adding `description` meta tags to each of your pages is always a good practice in case Google cannot find a good selection of text to use in the snippet. The Google Search Central blog has informative posts on [improving snippets with better `description` meta tags](https://developers.google.com/search/blog/2007/09/improve-snippets-with-meta-description). We also have a handy article on [how to create good titles and snippets](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets).

![Sample plain blue link search result for baseball cards](https://lh3.googleusercontent.com/e8E_nJoEuJQpTGAkYbA9lJ-Q0F7OeZujctlt853e-_2P6ChmDhgrxzWZa33uBSFCXw8=w350)

####  Accurately summarize the page content 

Write a description that would both inform and interest users if they saw your `description` meta tag as a snippet in a search result. While there's no minimal or maximal length for the text in a `description` meta tag, we recommend making sure that it's long enough to be fully shown in Search (note that users may see different sized snippets depending on how and where they search), and contains all the relevant information users would need to determine whether the page will be useful and relevant to them.

Avoid:

- Writing a `description` meta tag that has no relation to the content on the page.
- Using generic descriptions like "This is a web page" or "Page about baseball cards".
- Filling the description with only keywords.
- Copying and pasting the entire content of the document into the `description` meta tag.

#### Use unique descriptions for each page

Having a different `description` meta tag for each page helps both users and Google, especially in searches where users may bring up multiple pages on your domain (for example, searches using the `site:` operator). If your site has thousands or even millions of pages, hand-crafting `description` meta tags probably isn't feasible. In this case, you could automatically generate `description` meta tags based on each page's content.

Avoid:

- Using a single `description` meta tag across all of your site's pages or a large group of pages.

### Use heading tags to emphasize important text

Use meaningful headings to indicate important topics, and help create a hierarchical structure for your content, making it easier for users to navigate through your document.

#### Imagine you're writing an outline

Similar to writing an outline for a large paper, put some thought into what the main points and sub-points of the content on the page will be and decide where to use heading tags appropriately.

Avoid:

- Placing text in heading tags that wouldn't be helpful in defining the structure of the page.
- Using heading tags where other tags like `<em>` and `<strong>` may be more appropriate.
- Erratically moving from one heading tag size to another.

#### Use headings sparingly across the page

Use heading tags where it makes sense. Too many heading tags on a page can make it hard for users to scan the content and determine where one topic ends and another begins.

Avoid:

- Excessive use of heading tags on a page.
- Very long headings.
- Using heading tags only for styling text and not presenting structure.

### Add structured data markup

[Structured data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data) is code that you can add to your sites' pages to describe your content to search engines, so they can better understand what's on your pages. Search engines can use this understanding to display your content in useful (and eye-catching!) ways in search results. That, in turn, can help you attract just the right kind of customers for your business.

![Image showing a search result enhanced by review stars using structured data.](https://lh3.googleusercontent.com/xdiS_kHu0WVaH0lfWRjs78vYG1esJ297aPIDCoBwVx6g1Zm8Oa9EHUit2A4yfkiCfv0=w527)

For example, if you've got an online store and mark up an individual product page, this helps us understand that the page features a bike, its price, and customer reviews. We may display that information in the snippet for search results for relevant queries. We call these rich results.

In addition to using structured data markup for rich results, we may use it to serve relevant results in other formats. For instance, if you've got a brick-and-mortar store, marking up the opening hours allows your potential customers to find you exactly when they need you, and inform them if your store is open/closed at the time of searching.

![Google Search result for ice cream stores, showing rich results enabled by structured data.](https://lh3.googleusercontent.com/IuoQrJBjUNsrOHmuHAQ99ehEiX6zCR2NZLl_2wZFkUkSjyotostXtkc2uIqDQgbieEI=w675)

You can mark up many business-relevant entities:

- Products you're selling
- Business location
- Videos about your products or business
- Opening hours
- Events listings
- Recipes
- Your company logo, and many more!

[See a full list of supported content types](https://developers.google.com/search/docs/advanced/structured-data/search-gallery).

We recommend that you use structured data with any of the supported notations markup to describe your content. You can add the markup to the HTML code to your pages, or use tools like [Data Highlighter and Markup Helper](https://developers.google.com/search/docs/beginner/seo-starter-guide#data-highlighter).

#### Check your markup using the Rich Results Test

Once you've marked up your content, you can use the [Google Rich Results test](https://search.google.com/test/rich-results) to make sure that there are no mistakes in the implementation. You can either enter the URL where the content is, or copy the actual HTML which includes the markup.

Avoid:

- Using invalid markup.

#### Use Data Highlighter and Markup Helper

If you want to give structured markup a try without changing the source code of your site, you can use [Data Highlighter](https://www.google.com/webmasters/tools/data-highlighter), which is a free tool integrated in Search Console that supports a subset of content types.

If you'd like to get the markup code ready to copy and paste to your page, try the [Markup Helper](https://www.google.com/webmasters/markup-helper/).

Avoid:

- Changing the source code of your site when you are unsure about implementing markup.

#### Keep track of how your marked up pages are doing

The various [Rich result reports](https://support.google.com/webmasters/answer/7552505) in Search Console shows you how many pages on your site we've detected with a specific type of markup, how many times they appeared in search results, and how many times people clicked on them over the past 90 days. It also shows any errors we've detected.

Avoid:

- Adding markup data which is not visible to users.
- Creating fake reviews or adding irrelevant markups.

## Manage your appearance in Google Search results

Correct structured data on your pages also makes your page eligible for many special features in Google Search results, including review stars, fancy decorated results, and more. [See the gallery of search result types that your page can be eligible for.](https://developers.google.com/search/docs/advanced/structured-data/search-gallery)

## Organize your site hierarchy

### Understand how search engines use URLs

Search engines need a unique URL per piece of content to be able to crawl and index that content, and to refer users to it. Different content (for example, different products in a shop) as well as modified content (for example, translations or regional variations) need to use separate URLs in order to be shown in search appropriately.

URLs are generally split into multiple distinct sections:

protocol://hostname/path/filename?querystring#fragment

For example:

https://www.example.com/RunningShoes/Womens.htm?size=8#info

Google recommends that all websites use `https://` when possible. The hostname is where your website is hosted, commonly using the same domain name that you'd use for email. Google differentiates between the www and non-www version (for example, `www.example.com` or just `example.com`). When adding your website to Search Console, we recommend adding both `http://` and `https://` versions, as well as the www and non-www versions.

Path, filename, and query string determine which content from your server is accessed. These three parts are case-sensitive, so `FILE` would result in a different URL than `file`. The hostname and protocol are case-insensitive; upper or lower case wouldn't play a role there.

A fragment (in this case, `#info`) generally identifies which part of the page the browser scrolls to. Because the content itself is usually the same regardless of the fragment, search engines commonly ignore any fragment used.

When referring to the homepage, a trailing slash after the hostname is optional since it leads to the same content (`https://example.com/` is the same as `https://example.com`). For the path and filename, a trailing slash would be seen as a different URL (signaling either a file or a directory), for example, `https://example.com/fish` is not the same as `https://example.com/fish/`.

### Navigation is important for search engines

The navigation of a website is important in helping visitors quickly find the content they want. It can also help search engines understand what content the website owner thinks is important. Although Google's search results are provided at a page level, Google also likes to have a sense of what role a page plays in the bigger picture of the site.

![Example of a useful page hierarchy for a website.](https://lh3.googleusercontent.com/FkXf1NMLRBDRD0-82WWHYCu7_nHxCzkUaMDFDAuGiFRYIrtgO3wqSJdtSFhpnyu3yeE=w314)

### Plan your navigation based on your homepage

All sites have a home or root page, which is usually the most frequented page on the site and the starting place of navigation for many visitors. Unless your site has only a handful of pages, think about how visitors will go from a general page (your root page) to a page containing more specific content. Do you have enough pages around a specific topic area that it would make sense to create a page describing these related pages (for example, root page -> related topic listing -> specific topic)? Do you have hundreds of different products that need to be classified under multiple category and subcategory pages?

### Using breadcrumb lists

A breadcrumb is a row of internal links at the top or bottom of the page that allows visitors to quickly navigate back to a previous section or the root page. Many breadcrumbs have the most general page (usually the root page) as the first, leftmost link and list the more specific sections out to the right. We recommend using [breadcrumb structured data markup](https://developers.google.com/search/docs/advanced/structured-data/breadcrumb) when showing breadcrumbs.

![Website with a breadcrumb list showing the current page hierarchy.](https://lh3.googleusercontent.com/iRXf8tJ7BTCs_Uwd4U2TgIKTXp_KOP8B-HGo-oqQ4ktQWdVQXKeZZbglL0QxOk6sdg=w650)

### Create a simple navigational page for users

A navigational page is a simple page on your site that displays the structure of your website, and usually consists of a hierarchical listing of the pages on your site. Visitors may visit this page if they are having problems finding pages on your site. While search engines will also visit this page, getting good crawl coverage of the pages on your site, it's mainly aimed at human visitors.

#### Create a naturally flowing hierarchy

Make it as easy as possible for users to go from general content to the more specific content they want on your site. Add navigation pages when it makes sense and effectively work these into your internal link structure. Make sure all of the pages on your site are reachable through links, and that they don't require an internal search functionality to be found. Link to related pages, where appropriate, to allow users to discover similar content.

Avoid:

- Creating complex webs of navigation links, for example, linking every page on your site to every other page.
- Going overboard with slicing and dicing your content (so that it takes twenty clicks to reach from the homepage).

#### Use text for navigation

Controlling most of the navigation from page to page on your site through text links makes it easier for search engines to crawl and understand your site. When using JavaScript to create a page, use `a` elements with URLs as `href` attribute values, and generate all menu items on page-load, instead of waiting for a user interaction.

Avoid:

- Having a navigation based entirely on images, or animations.
- [Requiring script or plugin-based event-handling for navigation](https://developers.google.com/search/docs/advanced/guidelines/rich-media-files).

#### Create a navigational page for users, a sitemap for search engines

Include a simple navigational page for your entire site (or the most important pages, if you have hundreds or thousands) for users. Create an XML sitemap file to ensure that search engines discover the new and updated pages on your site, listing all relevant URLs together with their primary content's last modified dates.

Avoid:

- Letting your navigational page become out of date with broken links.
- Creating a navigational page that simply lists pages without organizing them, for example by subject.

#### Show useful 404 pages

Users will occasionally come to a page that doesn't exist on your site, either by following a broken link or typing in the wrong URL. Having a [custom 404 page](https://developers.google.com/search/docs/advanced/crawling/soft-404-errors#pagegone) that kindly guides users back to a working page on your site can greatly improve a user's experience. Consider including a link back to your root page and providing links to popular or related content on your site. You can use Google Search Console to find the [sources of URLs causing "not found" errors](https://support.google.com/webmasters/answer/7440203).

Avoid:

- Allowing your 404 pages to be indexed in search engines (make sure that your web server is configured to give a 404 HTTP status code or---in the case of JavaScript-based sites---include the `noindex` tag when non-existent pages are requested).
- Blocking 404 pages from being crawled through the robots.txt file.
- Providing only a vague message like "Not found", "404", or no 404 page at all.
- Using a design for your 404 pages that isn't consistent with the rest of your site.

### Simple URLs convey content information

Creating descriptive categories and filenames for the documents on your website not only helps you keep your site better organized, it can create easier, friendlier URLs for those that want to link to your content. Visitors may be intimidated by extremely long and cryptic URLs that contain few recognizable words.

URLs like the following can be confusing and unfriendly:

https://www.brandonsbaseballcards.com/folder1/22447478/x2/14032015.html

If your URL is meaningful, it can be more useful and easily understandable in different contexts:

https://www.brandonsbaseballcards.com/article/ten-rarest-baseball-cards.html

### URLs are displayed in search results

Lastly, remember that the URL to a document is usually displayed in some form in a Google Search result near the document title.

Google is good at crawling all types of URL structures, even if they're quite complex, but spending the time to make your URLs as simple as possible is a good practice.

#### Use words in URLs

URLs with words that are relevant to your site's content and structure are friendlier for visitors navigating your site.

Avoid:

- Using lengthy URLs with unnecessary parameters and session IDs.
- Choosing generic page names like `page1.html`.
- Using excessive keywords like `baseball-cards-baseball-cards-baseballcards.html`.

#### Create a simple directory structure

Use a directory structure that organizes your content well and makes it easy for visitors to know where they're at on your site. Try using your directory structure to indicate the type of content found at that URL.

Avoid:

- Having deep nesting of subdirectories like `.../dir1/dir2/dir3/dir4/dir5/dir6/page.html`.
- Using directory names that have no relation to the content in them.

#### Provide one version of a URL to reach a document

To prevent users from linking to one version of a URL and others linking to a different version (this could split the reputation of that content between the URLs), focus on using and referring to one URL in the structure and internal linking of your pages. If you do find that people are accessing the same content through multiple URLs, setting up a [301 redirect](https://developers.google.com/search/docs/advanced/crawling/301-redirects) from non-preferred URLs to the dominant URL is a good solution for this. If you cannot redirect, you may also use the [`rel="canonical"`](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) link element.

Avoid:

- Having pages from subdomains and the root directory access the same content, for example, `domain.com/page.html` and `sub.domain.com/page.html`.

## Optimize your content

### Make your site interesting and useful

Creating compelling and useful content will likely influence your website more than any of the other factors discussed here. Users know good content when they see it and will likely want to direct other users to it. This could be through blog posts, social media services, email, forums, or other means.

Organic or word-of-mouth buzz is what helps build your site's reputation with both users and Google, and it rarely comes without quality content.

![Creating interesting new content can generate links from other websites.](https://lh3.googleusercontent.com/DkplPJOMr83QiKJqfOxYW3KA4_ypm_OHoOEbR0catg24TTzgEQFIgf3sMQnasWIGcK8=w419)

### Know what your readers want (and give it to them)

Think about the words that a user might search for to find a piece of your content. Users who know a lot about the topic might use different keywords in their search queries than someone who is new to the topic. For example, a long-time football fan might search for "fifa", an acronym for the Fédération Internationale de Football Association, while a new fan might use a more general query like "football playoffs". Anticipating these differences in search behavior and accounting for them while writing your content (using a good mix of keyword phrases) could produce positive results. Google Ads provides a handy [Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) that helps you discover new keyword variations and see the approximate search volume for each keyword. Also, Google Search Console provides you with the top search queries your site appears for and the ones that led the most users to your site in the [Performance Report](https://support.google.com/webmasters/answer/7576553).

Consider creating a new, useful service that no other site offers. You could also write an original piece of research, break an exciting news story, or leverage your unique user base. Other sites may lack the resources or expertise to do these things.

#### Write easy-to-read text

Users enjoy content that is well written and easy to follow.

Avoid:

- Writing sloppy text with many spelling and grammatical mistakes.
- Awkward or poorly written content.
- Embedding text in images and videos for textual content: users may want to copy and paste the text and search engines can't read it.

#### Organize your topics clearly

It's always beneficial to organize your content so that visitors have a good sense of where one content topic begins and another ends. Breaking your content up into logical chunks or divisions helps users find the content they want faster.

Avoid:

- Dumping large amounts of text on varying topics onto a page without paragraph, subheading, or layout separation.

#### Create fresh, unique content

New content will not only keep your existing visitor base coming back, but also bring in new visitors.

Avoid:

- Rehashing (or even copying) existing content that will bring little extra value to users.
- Having duplicate or near-duplicate versions of your content across your site.

[Learn more about duplicate content](https://developers.google.com/search/docs/advanced/guidelines/duplicate-content).

#### Optimize content for your users, not search engines

Designing your site around your visitors' needs while making sure your site is easily accessible to search engines usually produces positive results.

Avoid:

- Inserting numerous unnecessary keywords aimed at search engines but are annoying or nonsensical to users.
- Having blocks of text like "frequent misspellings used to reach this page" that add little value for users.
- [Deceptively hiding text from users](https://developers.google.com/search/docs/advanced/guidelines/hidden-text-links), but displaying it to search engines.

### Act in a way that cultivates user trust

Users feel comfortable visiting your site if they feel that it's trustworthy.

A site with a good reputation is trustworthy. Cultivate a reputation for expertise and trustworthiness in a specific area.\
Provide information about who publishes your site, provides the content, and its goals. If you have a shopping or other financial transaction website, make sure you have clear and satisfying [customer service information](https://developers.google.com/search/blog/2021/07/customer-support) to help users resolve issues. If you have a news sites, provide clear information about who is responsible for the content.

Using appropriate technologies is also important. If a shopping checkout page doesn't have a secure connection, users cannot trust the site.

### Make expertise and authoritativeness clear

Expertise and authoritativeness of a site increases its quality. Be sure that content on your site is created or edited by people with expertise in the topic. For example, providing expert or experienced sources can help users understand articles' expertise. Representing well-established consensus in pages on scientific topics is a good practice if such consensus exists.

### Provide an appropriate amount of content for your subject

Creating high quality content takes a significant amount of at least one of the following: time, effort, expertise, and talent/skill. Make sure content is factually accurate, clearly written, and comprehensive. So, for example, if you describe your page as a recipe, provide a complete recipe that is easy to follow, rather than just a set of ingredients or a basic description of the dish.

Avoid:

- Providing insufficient content for the purpose of the page.

### Avoid distracting advertisements

We expect advertisements to be visible. However, don't let the advertisements distract users or prevent them from consuming the site content. For example, advertisements, supplement contents, or interstitial pages (pages displayed before or after the content you are expecting) that make it difficult to use the website. [Learn more about this topic.](https://www.thinkwithgoogle.com/marketing-resources/better-ad-standards/)

Avoid:

- Putting distracting advertisements on your pages.

### Use links wisely

#### Write good link text

Link text is the visible text inside a link. This text tells users and Google something about the page you're linking to. Links on your page may be internal---pointing to other pages on your site---or external---leading to content on other sites. In either of these cases, the better your anchor text is, the easier it is for users to navigate and for Google to understand what the page you're linking to is about.

![Diagram recommending useful link text on your site.](https://lh3.googleusercontent.com/kJ9Hr6MZ3i8pG7U0v40uFT4NV1Ys7TEcG4fkLOhq6E1sUJY9UoUyWHoMj0uRGaiwxzl1=w557)

With appropriate anchor text, users and search engines can easily understand what the linked pages contain.

##### Choose descriptive text

Write anchor text that provides at least a basic idea of what the page linked to is about.

##### Avoid:

- Writing generic anchor text like "page", "article", or "click here".
- Using text that is off-topic or has no relation to the content of the page linked to.
- Using the page's URL as the anchor text in most cases, although there are certainly legitimate uses of this, such as promoting or referencing a new website's address.

##### Write concise text

Aim for short but descriptive text-usually a few words or a short phrase.

##### Avoid:

- Writing long anchor text, such as a lengthy sentence or short paragraph of text.

##### Format links so they're easy to spot

Make it easy for users to distinguish between regular text and the anchor text of your links. Your content becomes less useful if users miss the links or accidentally click them.

##### Avoid:

- Using CSS or text styling that make links look just like regular text.

##### Think about anchor text for internal links too

You may usually think about linking in terms of pointing to outside websites, but paying more attention to the anchor text used for internal links can help users and Google navigate your site better.

##### Avoid:

- Using excessively keyword-filled or lengthy anchor text just for search engines.
- Creating unnecessary links that don't help with the user's navigation of the site.

#### Be careful who you link to

You can confer some of your site's reputation to another site when your site links to it. Sometimes users can take advantage of this by adding links to their own site in your comment sections or message boards. Or sometimes you might mention a site in a negative way and don't want to confer any of your reputation upon it. For example, imagine that you're writing a blog post on the topic of comment spamming and you want to call out a site that recently comment spammed your blog. You want to warn others of the site, so you include the link to it in your content; however, you certainly don't want to give the site some of your reputation from your link. This would be a good time to use `nofollow`.

Another example when the `nofollow` attribute can come handy are widget links. If you are using a third party's widget to enrich the experience of your site and engage users, check if it contains any links that you did not intend to place on your site along with the widget. Some widgets may add links to your site which are not your editorial choice and contain anchor text that you as a website owner may not control. If removing such unwanted links from the widget is not possible, you can always disable them with `nofollow`. If you create a widget for functionality or content that you provide, make sure to include the `nofollow` on links in the default code snippet.

Lastly, if you're interested in nofollowing all of the links on a page, you can add the tag `<meta name="robots" content="nofollow">` inside the `<head>` tag for the page. You can find [more details about robots meta tags](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag) in our documentation.

#### Combat comment spam with `nofollow`

To tell Google not to follow or pass your page's reputation to the pages linked, set the value of the `rel` attribute of a link to `nofollow` or `ugc`. Nofollowing a link means adding `rel="nofollow"` or a [more specific attribute such as `ugc`](https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links) inside the link's anchor tag, as shown here:

<a href="http://www.example.com" rel="nofollow">Anchor text here</a>

or:

<a href="http://www.example.com" rel="ugc">Anchor text here</a>

When would this be useful? If your site has a blog with public commenting turned on, links within those comments could pass your reputation to pages that you may not be comfortable vouching for. Blog comment areas on pages are highly susceptible to comment spam. Nofollowing these user-added links ensures that you're not giving your page's hard-earned reputation to a spammy site.

![Illustration of a user comment containing external links.](https://lh3.googleusercontent.com/OIdXcVtnsrmHLXym120A-WH6u1hwO6guBWNaPz7COSPAHTaK7IcOnfFvf-F4ulySYQ=w599)

#### Automatically add `nofollow` to comment columns and message boards

Many blogging software packages automatically `nofollow` user comments, but those that don't can most likely be manually edited to do this. This advice also goes for other areas of your site that may involve user-generated content, such as guest books, forums, shout-boards, referrer listings, etc. If you're willing to vouch for links added by third parties (for example, if a commenter is trusted on your site), then there's no need to use `nofollow` on links; however, linking to sites that Google considers spammy can affect the reputation of your own site. The Google Search Central documentation has [more tips on avoiding comment spam](https://developers.google.com/search/docs/advanced/guidelines/prevent-comment-spam), for example by using CAPTCHAs and turning on comment moderation.

![Illustration of a CAPTCHA popup](https://lh3.googleusercontent.com/zaP4cQILTJ-tz2ejO5t2Y-GiR8Mq-zrBbmrHHR2U0_mOPPXaf9s0hUV3KubIkSunfRGj=w350)

## Optimize your images

### Use HTML images

Use HTML image elements to embed images in your content.

#### Use the HTML `<img>` or `<picture>` elements

Semantic HTML markup helps crawlers find and process images. By using the `<picture>` element you can also specify multiple options for different screen sizes for responsive images. You might also use the `loading="lazy"` attribute on images to make your page load faster for your users.

Avoid:

- Using CSS to display images that you want us to index.

#### Use the `alt` attribute

Provide a descriptive filename and `alt` attribute description for images. The `alt` attribute allows you to specify alternative text for the image if it cannot be displayed for some reason.

![Illustration showing the usefulness of good alt text for an image.](https://lh3.googleusercontent.com/eN2M5XXdOXP65rSV_Jwh7zXhrpumCybURa49rEtMNgeh-5FzoNFASEJ2RTtF_ryLIZ-e=w317)

Why use this attribute? If a user is viewing your site using assistive technologies, such as a screen reader, the contents of the `alt` attribute provide information about the picture.

Another reason is that if you're using an image as a link, the alt text for that image will be treated similarly to the anchor text of a text link. However, we don't recommend using too many images for links in your site's navigation when text links could serve the same purpose. Lastly, optimizing your image filenames and alt text makes it easier for image search projects like Google Images to better understand your images.

##### Use brief but descriptive filenames and alt text

Like many of the other parts of the page targeted for optimization, filenames and alt text are best when they're short, but descriptive.

##### Avoid:

- Using generic filenames like `image1.jpg`, `pic.gif`, `1.jpg` when possible---if your site has thousands of images you might want to consider automating the naming of the images.
- Writing extremely lengthy filenames.
- Stuffing keywords into alt text or copying and pasting entire sentences.

##### Supply alt text when using images as links

If you do decide to use an image as a link, filling out its alt text helps Google understand more about the page you're linking to. Imagine that you're writing anchor text for a text link.

##### Avoid:

- Writing excessively long alt text that would be considered spammy.
- Using only image links for your site's navigation.

### Help search engines find your images

An [Image sitemap](https://developers.google.com/search/docs/advanced/sitemaps/image-sitemaps) can provide Googlebot with more information about the images found on your site. This increases the likelihood that your images can be found in Google Images results. The structure of this file is similar to the XML sitemap file for your web pages.

### Use standard image formats

Use commonly supported filetypes; most browsers support JPEG, GIF, PNG, BMP and WebP image formats. It's also a good idea to have the extension of your filename match with the file type.

## Make your site mobile-friendly

The world is mobile today. Most people are searching on Google using a mobile device. The desktop version of a site might be difficult to view and use on a mobile device. As a result, having a mobile ready site is critical to your online presence. In fact, starting in late 2016, [Google has begun experiments to primarily use the mobile version of a site's content](https://developers.google.com/search/blog/2016/11/mobile-first-indexing) for ranking, parsing structured data, and generating snippets.

Understand the difference between devices

- Smartphone - In this document, "mobile" or "mobile devices" refers to smartphones, such as devices running Android, iPhone, or Windows Phone. Mobile browsers are similar to desktop browsers in that they can render a broad set of the HTML5 specification, although their screen size is smaller and in almost all cases their default orientation is vertical.
- Tablet - We consider tablets as devices in their own class, so when we speak of mobile devices, we generally do not include tablets in the definition. Tablets tend to have larger screens, which means that, unless you offer tablet-optimized content, you can assume that users expect to see your site as it would look on a desktop browser rather than on a smartphone browser.
- Multimedia phone - These are phones with browsers that are able to render pages coded to meet XHTML standards, support HTML5 Markup, JavaScript/ECMAScript but might not support some of the extension APIs in the HTML5 standard. This generally describes the browser in most 3G-ready phones that are not smartphones.
- Feature phones - On these phones, browsers lack the capability to render normal desktop web pages coded using standard HTML. This includes browsers that render only cHTML (iMode), WML, XHTML-MP, etc.

Our recommendations are geared toward smartphones, but we encourage multimedia and feature phones site owners to follow the same advice where they feel appropriate.

### Choose a mobile strategy

There are multiple ways of making your website mobile ready and Google supports different implementation methods :

- [Responsive web design](https://developers.google.com/search/mobile-sites/mobile-seo/responsive-design) (_Recommended_)
- [Dynamic serving](https://developers.google.com/search/mobile-sites/mobile-seo/dynamic-serving)
- [Separate URLs](https://developers.google.com/search/mobile-sites/mobile-seo/separate-urls)

After you have created a mobile-ready site, you can use [Google's Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to check if pages on your site meet the criteria for being labeled mobile-friendly on Google Search result pages. You can also check out the [Search Console Mobile Usability report](https://www.google.com/webmasters/tools/mobile-usability) to fix mobile usability issues affecting your site.

If your site serves lots of static content (like blog posts or product landing pages) across multiple pages, consider implementing it using [AMP](https://www.ampproject.org/) (Accelerated Mobile Pages). It's a special flavor of HTML that ensures your site stays fast and user friendly, and can be further accelerated by various platforms, including Google Search.

### Configure mobile sites so that they can be indexed accurately

Regardless of which configuration you choose to set up your mobile site, take note of these key points:

1.  If you use Dynamic Serving or have a separate mobile site, signal to Google when a page is formatted for mobile (or has an equivalent page that's formatted for mobile). This helps Google accurately serve mobile searchers your content in search results.
2.  If you are using Responsive Web Design, use the `meta name="viewport"` tag to tell the browser how to adjust the content. If you use Dynamic Serving, use the Vary HTTP header to signal your changes depending on the user agent. If you are using separate URLs, signal the relationship between two URLs by adding the `<link>` tag with `rel="canonical"` and `rel="alternate"` elements to the page.
3.  Keep resources crawlable. Blocking page resources can give Google an incomplete picture of your website. This often happens when your robots.txt file is blocking access to some or all of your page resources. If Googlebot doesn't have access to a page's resources, such as CSS, JavaScript, or images, we may not detect that it's built to display and work well on a mobile browser. In other words, we may not detect that the page is mobile-friendly, and therefore not properly serve it to mobile searchers.
4.  Avoid common mistakes that frustrate mobile visitors, such as featuring unplayable videos.
5.  Mobile pages that provide a poor searcher experience can be demoted in rankings or displayed with a warning in mobile search results. This includes but is not limited to [full page interstitials](https://developers.google.com/search/blog/2016/08/helping-users-easily-access-content-on) on mobile that hinder user experience.
6.  Provide full functionality on all devices. Mobile users expect the same functionality---such as commenting and check-out---and content on mobile as well as on all other devices that your website supports. In addition to textual content, make sure that all important images and videos are embedded and accessible on mobile devices. For search engines, provide all structured data and other metadata---such as titles, descriptions, link-elements, and other meta-tags---on all versions of the pages.
7.  Make sure that the structured data, images, videos, and metadata you have on your desktop site are also included on the mobile site.

#### Best Practices

- Test your mobile pages with the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to see if Google thinks your website works well on mobile devices.
- If you use separate URLs for your mobile pages, make sure to test both the mobile and the desktop URLs, so you can confirm that the redirect is recognized and crawlable.

[For more information, see Google's mobile-friendly guide](https://developers.google.com/search/mobile-sites).

## Promote your website

While most of the links to your site will be added gradually, as people discover your content through search or other ways and link to it, Google understands that you'd like to let others know about the hard work you've put into your content. Effectively promoting your new content will lead to faster discovery by those who are interested in the same subject. As with most points covered in this document, taking these recommendations to an extreme could actually harm the reputation of your site.

A blog post on your own site letting your visitor base know that you added something new is a great way to get the word out about new content or services. Other website owners who follow your site or RSS feed could pick the story up as well.

Putting effort into the offline promotion of your company or site can also be rewarding. For example, if you have a business site, make sure its URL is listed on your business cards, letterhead, posters, etc. You could also send out recurring newsletters to clients through the mail letting them know about new content on the company's website.

If you run a local business, adding its information to [Google My Business](https://www.google.com/business/) will help you reach customers on Google Maps and Google Search.

![Sample Google Search result showing rich results for physical stores.](https://lh3.googleusercontent.com/wXGGe452xamg85_c3dws7bOtaLdoTAefoISO8eIwH1BHrnm42PNI5bsE8-4-vr9JFUk=w400)

### Know about social media sites

Sites built around user interaction and sharing have made it easier to match interested groups of people up with relevant content.

Avoid:

- Attempting to promote each new, small piece of content you create; go for big, interesting items.
- [Involving your site in schemes](https://developers.google.com/search/docs/advanced/guidelines/link-schemes) where your content is artificially promoted to the top of these services.

### Reach out to those in your site's related community

Chances are, there are a number of sites that cover topic areas similar to yours. Opening up communication with these sites is usually beneficial. Hot topics in your niche or community could spark additional ideas for content or building a good community resource.

Avoid:

- Spamming link requests out to all sites related to your topic area.
- Purchasing links from another site with the aim of getting PageRank.

## Analyze your search performance and user behavior

### Analyzing your search performance

Major search engines, including Google, provide free tools for website owners to analyze their performance in their search engine. For Google, that tool is [Search Console](https://www.google.com/webmasters/tools/home).

Search Console provides two important categories of information: Can Google find my content? How am I performing in Google Search results?

Using Search Console won't help your site get preferential treatment; however, it can help you identify issues that, if addressed, can help your site perform better in search results.

With the service, website owners can:

- See which parts of a site Googlebot had problems crawling
- Test and submit sitemaps
- Analyze or generate robots.txt files
- Remove URLs already crawled by Googlebot
- Specify your preferred domain
- Identify issues with `title` and `description` meta tags
- Understand the top searches used to reach a site
- Get a glimpse at how Googlebot sees pages
- Receive notifications of quality guidelines violations and request a site reconsideration

# Webmaster guidelines

Following the [General guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines?visit_id=637688295615606112-2319924219&rd=1#general) will help Google find, index, and rank your site.

We strongly encourage you to pay very close attention to the [Quality guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines?visit_id=637688295615606112-2319924219&rd=1#quality_guidelines), which outline some of the illicit practices that may lead to a site being removed entirely from the Google index or otherwise affected by an algorithmic or manual spam action. If a site has been affected by a spam action, it may no longer show up in results on Google.com or on any of Google's partner sites.

## General guidelines

### Help Google find your pages

- Ensure that all pages on the site can be reached by a link from another findable page. Make sure the referring link includes either text or, for images, an `alt` attribute, that is relevant to the target page. Crawlable links are [`<a>` tags with an `href` attribute](https://developers.google.com/search/docs/advanced/guidelines/links-crawlable).
- Provide a [sitemap file](https://developers.google.com/search/docs/advanced/sitemaps/overview) with links that point to the important pages on your site. Also provide a page with a human-readable list of links to these pages (sometimes called a site index or site map page).
- Limit the number of links on a page to a reasonable number (a few thousand at most).
- Make sure that your web server correctly supports the `If-Modified-Since` HTTP header. This feature directs your web server to tell Google if your content has changed since we last crawled your site. Supporting this feature saves you bandwidth and overhead.
- Use the robots.txt file on your web server to manage your crawling budget by preventing crawling of infinite spaces such as search result pages. Keep your robots.txt file up to date. [Learn how to manage crawling with the robots.txt file](https://developers.google.com/search/docs/advanced/robots/intro). Test the coverage and syntax of your robots.txt file using the [robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool).

Ways to help Google find your site:

- [Ask Google to crawl your pages](https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl).
- Make sure that any sites that should know about your pages are aware your site is online.

### Help Google understand your pages

- Create a useful, information-rich site, and write pages that clearly and accurately describe your content.
- Think about the words users would type to find your pages, and make sure that your site actually includes those words within it.
- Ensure that your `<title>` elements and `alt` attributes are descriptive, specific, and accurate.
- Design your site to have a clear conceptual page hierarchy.
- Follow our recommended best practices for [images](https://developers.google.com/search/docs/advanced/guidelines/google-images), [video](https://developers.google.com/search/docs/advanced/guidelines/video), and [structured data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data).
- When using a content management system (for example, Wix or WordPress), make sure that it creates pages and links that search engines can crawl.
- To help Google fully understand your site's contents, allow all site assets that would significantly affect page rendering to be crawled: for example, CSS and JavaScript files that affect the understanding of the pages. The Google indexing system renders a web page as the user would see it, including images, CSS, and JavaScript files. To see which page assets that Googlebot cannot crawl, use the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289). To debug directives in your robots.txt file, use the [robots.txt Tester](https://support.google.com/webmasters/answer/6062598) tool.
- Allow search bots to crawl your site without session IDs or URL parameters that track their path through the site. These techniques are useful for tracking individual user behavior, but the access pattern of bots is entirely different. Using these techniques may result in incomplete indexing of your site, as bots may not be able to eliminate URLs that look different but actually point to the same page.
- Make your site's important content visible by default. Google is able to crawl HTML content hidden inside navigational elements such as tabs or expanding sections. However, we consider this content less accessible to users, and recommend that you make your most important information visible in the default page view.
- Make a reasonable effort to ensure that advertisement links on your pages do not affect search engine rankings. For example, use [robots.txt](https://developers.google.com/search/docs/advanced/robots/intro), `rel="nofollow"`, or `rel="sponsored"` to prevent advertisement links from being followed by a crawler.

### Help visitors use your pages

- Try to use text instead of images to display important names, content, or links. If you must use images for textual content, use the `alt` attribute to include a few words of descriptive text.
- Ensure that all links go to live web pages. Use [valid HTML](https://validator.w3.org/).
- Optimize your page loading times. Fast sites make users happy and improve the overall quality of the web (especially for those users with slow Internet connections). Google recommends that you use tools like [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and [Webpagetest.org](https://www.webpagetest.org/) to test the performance of your page.
- Design your site for all device types and sizes, including desktops, tablets, and smartphones. Use the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to test how well your pages work on mobile devices, and get feedback on what needs to be fixed.
- Ensure that your site [appears correctly in different browsers](https://developers.google.com/search/docs/advanced/guidelines/browser-compatibility).
- If possible, [secure your site's connections](https://developers.google.com/search/docs/advanced/security/https) with HTTPS. Encrypting interactions between the user and your website is a good practice for communication on the web.
- Ensure that your pages are useful for readers with visual impairments, for example, by testing usability with a screen-reader.

## Quality guidelines

These quality guidelines cover the most common forms of deceptive or manipulative behavior, but Google may respond negatively to other misleading practices not listed here. It's not safe to assume that just because a specific deceptive technique isn't included on this page, Google approves of it. Website owners who spend their energies upholding the spirit of the basic principles will provide a much better user experience and subsequently enjoy better ranking than those who spend their time looking for loopholes they can exploit.

If you believe that another site is abusing Google's quality guidelines, please let us know by [filing a spam report](https://www.google.com/webmasters/tools/spamreport). Google prefers developing scalable and automated solutions to problems, and will use the report for further improving our spam detection systems.

### Basic principles

- Make pages primarily for users, not for search engines.
- Don't deceive your users.
- Avoid tricks intended to improve search engine rankings. A good rule of thumb is whether you'd feel comfortable explaining what you've done to a website that competes with you, or to a Google employee. Another useful test is to ask, "Does this help my users? Would I do this if search engines didn't exist?"
- Think about what makes your website unique, valuable, or engaging. Make your website stand out from others in your field.

### Specific guidelines

Avoid the following techniques:

- [Automatically generated content](https://developers.google.com/search/docs/advanced/guidelines/auto-gen-content)
- Participating in [link schemes](https://developers.google.com/search/docs/advanced/guidelines/link-schemes)
- Creating pages with [little or no original content](https://developers.google.com/search/docs/advanced/guidelines/thin-content)
- [Cloaking](https://developers.google.com/search/docs/advanced/guidelines/cloaking)
- [Sneaky redirects](https://developers.google.com/search/docs/advanced/guidelines/sneaky-redirects)
- [Hidden text or links](https://developers.google.com/search/docs/advanced/guidelines/hidden-text-links)
- [Doorway pages](https://developers.google.com/search/docs/advanced/guidelines/doorway-pages)
- [Scraped content](https://developers.google.com/search/docs/advanced/guidelines/scraped-content)
- Participating in [affiliate programs without adding sufficient value](https://developers.google.com/search/docs/advanced/guidelines/affiliate-programs)
- Loading pages with [irrelevant keywords](https://developers.google.com/search/docs/advanced/guidelines/irrelevant-keywords)
- Creating pages with [malicious behavior](https://developers.google.com/search/docs/advanced/guidelines/malicious-behavior), such as phishing or installing viruses, trojans, or other badware
- Abusing [structured data](https://developers.google.com/search/docs/advanced/structured-data/sd-policies) markup
- Sending [automated queries](https://developers.google.com/search/docs/advanced/guidelines/automated-queries) to Google

Follow good practices:

- Monitoring your site for [hacking](https://developers.google.com/search/docs/advanced/security/what-is-hacked) and removing hacked content as soon as it appears
- Preventing and removing [user-generated spam](https://developers.google.com/search/docs/advanced/guidelines/user-gen-spam) on your site

If your site violates one or more of these guidelines, then Google may take [manual action](https://support.google.com/webmasters/answer/9044175) against it. Once you have remedied the problem, you can [submit your site for reconsideration](https://support.google.com/webmasters/answer/35843).

## 1\. Google Search Console

![Google Search Console. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-4.jpg)

[Google Search Console](https://search.google.com/search-console/about) is a collection of services you can use to figure out how the search engine views your website. This service provides you with a wide array of free SEO tools, covering many different aspects of optimization.

For example, Google Search Console enables you to check out any crawling errors that have occurred on your website so you can correct them right away. It can also point out when your site is [affected by malware](https://www.dreamhost.com/blog/what-is-malware/), what keyword phrases people are using to find your site, the backlinks you've received, and more.

The many features this service offers makes it a near necessity if you're concerned about your [Search Engine Results Page (SERP)](https://en.wikipedia.org/wiki/Search_engine_results_page) rankings. There's a clear focus on Google results here, but don't worry. If you can rank well on Google, the chances are high that you'll also do OK in other search engines.

As far as actually using the service goes, Google Search Console is very simple to understand. It's also easy to [add your website and get started](https://support.google.com/webmasters/answer/34592?hl=en), so there are no reasons to avoid it.

Key Features:

- Monitor how Google perceives your website.
- Keep track of what keywords visitors are using to reach you.
- Stay on top of any crawl, [meta tag](https://www.dreamhost.com/blog/how-to-write-meta-descriptions/), or sitemap errors.
- Update your [robots.txt file](https://help.dreamhost.com/hc/en-us/articles/216105077-How-can-I-control-bots-spiders-and-crawlers-).
- Monitor your site's backlinks.
- Get alerts if your site is infected with malware.

Price: Free!

#### Related: [13 Simple Ways to Boost SEO on Your WordPress Website](https://www.dreamhost.com/blog/boost-seo-wordpress-website/)

## 2\. Semrush

[![](https://dhblog.dream.press/blog/wp-content/uploads/2021/07/Dreamhost1.png)](http://semrush.sjv.io/c/2904698/1107705/13053)

[Semrush](https://semrush.sjv.io/c/2904698/1107705/13053) is a keyword research tool that enables you to get data about how many people are looking for specific terms. On top of that, it also provides you with information on similar keywords, related ads, product listings, and a lot more.

Along with being an excellent keyword tool, Semrush can also offer information about your competitors' strategies. For example, it can tell you how much traffic they're getting, how much of that comes from paid ads, and what their backlinks are.

If you're the kind of person who loves [doing keyword research](https://www.dreamhost.com/blog/how-to-do-keyword-research-wordpress-blog/), you need a tool like Semrush in your arsenal. With it, you'll be able to figure out exactly what keywords will give you the best results for your efforts and check which terms your competitors are ranking for.

This service even enables you to peek into your competitors' text and media ads, which can save you big money when it comes to testing. However, keep in mind that all this data means the learning curve with this service can be a bit steep.

Key Features:

- Research the value of specific queries.
- Check out what keywords your competitors are ranking for and how much traffic they're getting.
- Find information about other websites' backlinks.
- Look into your competitors' text and media ads.

Price: You can get up to 10 results for free per day or sign up for a premium account. The good news? We've worked out a [special 14-day trial with Semrush](https://semrush.sjv.io/c/2904698/1107705/13053) so you can see if they're a good fit for your site!

## 3\. BuzzStream

![BuzzStream website. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-8.jpg)

[BuzzStream](http://www.buzzstream.com/) offers you a collection of tools to help with domain research, email marketing, and project management. It's a very all-in-one type of platform, and the sheer number of options it provides can be intimidating. With that in mind, let's focus on how it can help you tackle your SEO needs.

When it comes to research, BuzzStream can help you collate lists of results for the keywords you look into. Then it provides you with information about each of those websites, including overall rankings, related social media accounts, domain age and authority, and more.

In practice, you can use these features to help you do a thorough SEO audit, researching who your competitors are and the content they're publishing. Moreover, it can even help you create lists of their authors and what each one is up to, so you can keep an even closer eye on their strategies.

Key Features:

- Research your competitors based on any keywords you want to target.
- Collect data about domain age and authority for specific websites.
- Find out what your competitors' rankings are in the SERPs.
- Locate the social media accounts for your competition's sites.
- Create lists of authors who write for competing websites and follow what they're doing.

Price: BuzzStream plans [start at $24 per month](http://www.buzzstream.com/plans-pricing).

## 4\. DreamHost SEO Toolkit

Want to grow traffic without blowing your budget on enterprise-level tools or a private contractor? If you're a DreamHost customer, you can take advantage of [SEO Toolkit](https://www.dreamhost.com/products/seo-toolkit/) and become your own SEO pro.

With more than 100 automated checks and verifications, SEO Toolkit starts by auditing your site to find potential issues. Then, it creates a personalized SEO plan with a checklist of simple tasks you can tackle to start seeing ranking improvements. For example, SEO Toolkit analyzes your site's pages and provides targeted recommendations on where to position keywords to optimize your content.

SEO Toolkit also makes it much easier to track competitors --- we've talked before about the benefits to [monitoring your online competition](https://www.dreamhost.com/blog/how-to-beat-your-competition/) --- so you can tweak your keyword strategy and land at the top of the SERPs.

Key Features:

- Get a comprehensive website audit to identify potential SEO issues.
- Generate a personalized SEO plan with tasks to improve your site's search engine performance.
- Stay up to date with weekly progress reports.
- Take advantage of SEO toolkits on-page optimization tools to improve keyword placement.
- Track up to 20 keywords and four competitors.

Price: [SEO Toolkit](https://www.dreamhost.com/products/seo-toolkit/) costs just $4.99 per month. New DreamHost customers can add SEO Toolkit when signing up for a hosting plan. Existing customers can enable SEO Toolkit directly in their panel.

## 5\. Moz Pro

![Moz Pro homepage.](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-13.jpg)

[Moz Pro](https://moz.com/products/pro) is a suite of SEO tools created to help you tackle optimization using a data-driven approach. To give you a quick overview, Moz Pro is somewhat similar to [SEMrush](https://semrush.sjv.io/c/2904698/1107705/13053), in that it enables you to research both specific long-tail keywords and other domains. You can use this information to avoid keywords with little potential and to improve on what your competitors are doing.

When you look into a keyword using Moz Pro, it will show you a difficulty score that illustrates how challenging it will likely be to rank for that term. You also get an overview of how many people are searching for that phrase, and you can even create lists of keywords for easy comparison. These are all features you'd expect from a reliable keyword research tool, but Moz Pro stands out thanks to a very intuitive interface.[\
](https://moz.com/products/pro)

As for what's so unique about Moz Pro, the platform offers a Chrome extension you can use to get information on any domain you visit. Moreover, it can provide suggestions about on-page optimization and alert you about crawling errors, much like Google Search Console.[\
](https://moz.com/products/pro)

Key Features:

- Research how competitive a keyword is, as well as its search volume.
- Get suggestions on related keywords.
- Investigate your competitors, including which keywords they're targeting.
- Use a Chrome extension to look into other domains without going to the Moz website.
- Compare multiple keywords using custom lists.
- Get on-page optimization suggestions and error alerts.

Price: A 30-day free trial is available for the Pro plan, while regular pricing [starts at $99 per month](https://moz.com/products/pro/pricing).[\
](https://moz.com/products/pro)

## 6\. Linkody

![Linkody website. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-3.jpg)

[Linkody](https://www.linkody.com/) is all about backlinks. This tool allows you to find out who's linking to your website, learn what keywords they're using, and even "disavow" links you don't like. That last feature can be handy if you think someone is linking to your website as spam since you don't want search engines thinking you're trying to game the system.

While the main attraction here is the backlink reports, Linkody also offers a few notable extras. For example, it provides you with the option to generate reports that you can send to clients, monitor your site's social shares, and connect to [Google Analytics](https://help.dreamhost.com/hc/en-us/articles/216474217-Google-Analytics).

Overall, it's a pretty niche tool, but quite useful if you need some help with link building. More importantly, it's a lot cheaper than the massive do-it-all services we've talked about so far.

Key Features:

- Analyze your website's backlinks.
- Disavow bad links that might affect your SEO.
- Generate backlink reports for your clients.
- Connect to Google Analytics to gain access to more data.
- Monitor your site's social shares.

Price: Linkody plans [start at $14.90 per month](https://www.linkody.com/en/plans) for up to two domains, but you can also try it free for 30 days without a credit card.

## 7\. Ontolo

![Ontolo home page. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-7.jpg)

[Ontolo](https://ontolo.com/) is a research tool you can use to find marketing and SEO opportunities. It can also help you find backlinking and guest posting opportunities, which is not something you'd expect an automated tool to do so well.

The idea behind Ontolo is that it helps you find ways to grow your traffic beyond keyword research. If you want your website to become more authoritative, backlinks are essential, but finding the right opportunities can be daunting.

Ontolo helps you locate those opportunities, so all you have to do is pitch them (which sadly can't be automated). It can pull prospects from over 80 sources, so chances are you'll find excellent options regardless of what keywords you're trying to rank for.

Key Features:

- Look for guest posting and backlink opportunities.
- Collect data from over 80 sources to find the best prospects.
- Carry out research using simple-to-understand reports.
- Export your prospects to share them with others.

Price: Ontolo plans [start at $97 per month](https://ontolo.com/#sign-up) and come with a 30-day money-back guarantee.

## 8\. HubSpot's Website Grader

![HubSpot's Website Grader tool.](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-9.jpg)

[HubSpot's Website Grader](https://website.grader.com/) is a lot more straightforward than the other SEO tools we've featured so far. To use it, all you have to do is enter a domain and wait for HubSpot to generate a report. When you get that report back, you'll find separate scores for your site's performance, [mobile-friendliness](https://www.dreamhost.com/blog/optimize-your-website-for-mobile/), SEO, and security.

It's crucial to keep in mind that performance, mobile-friendliness, and solid security practices [directly impact your SEO](https://www.dreamhost.com/blog/google-declares-mobile-%C2%ADfriendly-a-must-for-seo/). In a way, your entire report is one giant analysis of how your site is faring from an SEO perspective. Better yet, this tool breaks down each part of the report and provides you with tips on how to improve every element.

HubSpot's Website Grader is incredibly simple to use, and it can help you improve your website quickly. Plus, it won't cost you a thing, so this one definitely deserves your attention.

Key Features:

- Analyze your website's performance, mobile-friendliness, security, and SEO.
- Receive separate scores for each aspect of your site.
- Get recommendations for how to improve each score.

Price: Free!

#### Related: [The Top 11 SEO Best Practices for Domains](https://www.dreamhost.com/blog/seo-best-practices-for-domains/)

## 9\. Google AdWords Keyword Planner

![Google AdWords Keyword Planner. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-5.jpg)

[Google AdWords Keyword Planner](https://adwords.google.com/home/tools/keyword-planner/) is one of the most comprehensive keyword research tools you can use. With it, you can look up keywords and get traffic estimates about them. More importantly, it can help you figure out how competitive keywords are based on their [AdWords ](https://adwords.google.com/)price.

To avoid overwhelming you with information, this tool lets you filter keywords out based on [Cost-per-Click (CPC)](https://www.dreamhost.com/blog/ppc-guide/) or search volume. This way, you can get reports based only on the estimates you want to aim for.

Overall, the Keyword Planner offers much of the same functionality we've seen from other SEO tools on this list. The difference is that this one is part of the Google ecosystem, and you can get amazingly detailed reports for free.

Key Features:

- Find out the search volume for any keyword you want.
- Determine a keyword's competitiveness from its CPC.
- Get detailed reports for specific keywords.

Price: Free!

## 10\. WooRank

![WooRank website scoring tool. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-11.jpg)

[WooRank](https://www.woorank.com/) is similar to HubSpot's Website Grader in that you give it a link, and it provides you with a full report card. In this case, it gives you a single score for your entire website. After that, it launches into a list of everything you can do to improve its SEO and mobile-friendliness.

The main selling point, in this case, is that WooRank also provides you with tips to improve your site's usability and performance. From our experience, its recommendations are solid. To top it all off, you also get an analysis of how well you're doing from a backlink perspective.

Overall, this is an excellent tool if you want a quick rundown of what you're doing right and wrong on your website, including when it comes to SEO.

Key Features:

- Analyze your website's overall status, including SEO, usability, performance, and backlinks.
- Receive tips on how to improve your website and tackle SEO tasks.
- Analyze your domain's authority.

Price: Free, with premium options [starting at $59.99 per month](https://www.woorank.com/en/p/pricing).

## 11\. Varvy SEO Tool

![Varvy SEO tool. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-6.jpg)

Our next pick is another tool of the "Enter a URL and get a report" variety. However, this one is different from those we've introduced so far. What the [Varvy SEO tool](https://varvy.com/) does is check to see if your website is following all of [Google's SEO guidelines](https://support.google.com/webmasters/answer/7451184?hl=en). It can produce a full report in seconds.

What's more, that report is very extensive. It checks for several things, including page speed issues, mobile-friendliness, on-page SEO, and more. However, the best part is that Varvy SEO Tool really takes the time to explain why each setting is vital.

If you're new to SEO (or [website optimization](https://www.dreamhost.com/blog/optimize-wordpress-website-speed/) in general), you'll probably welcome all the information this tool has to offer. It even provides links to further reading for each setting it covers, in case you want to learn more about them.

Key Features:

- Check to see if your website follows Google's SEO guidelines.
- Receive a quick report, including precise information on how to fix each issue.

Price: Free!

## 12\. Screaming Frog

![Screaming Frog SEO Spider Tool. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-12.jpg)

[Screaming Frog](https://www.screamingfrog.co.uk/) offers an SEO Spider Tool, a sophisticated crawler that can accomplish a host of optimization tasks. This includes finding and fixing broken links and redirects.

If you operate an online store, Screaming Frog has some especially helpful options. For example, you can use the crawler to extract data from HTML pages on your site using CSS Path. This means you can [use XPath](https://www.w3schools.com/xml/xpath_intro.asp) or regex to gather data about prices, SKUs, and more.

You can even use this tool to generate XML sitemaps and connect them up to Google Analytics. What's more, Screaming Frog has a pretty robust free version, so you can try out the main functionality before you decide to leap in.

Key Features:

- Analyze titles and metadata.
- Crawl your site to find and fix broken links.
- Discover and resolve duplicate content and pages.

Price: You can access the free version with limited features and URLs, or get the full version for [£149 per year](https://www.screamingfrog.co.uk/seo-spider/pricing/) (about $191).

## Be Awesome on the Internet

Join our monthly newsletter for tips and tricks to build your dream website!

[Sign Me Up](http://messages.dreamhost.com/public/webform/render_form/0d5r88n319d4z8oihazkjsxjn2xwo/0eb6cc6c0d15e420a3ff54f02356d3eb/addcontact)

![](https://dhblog.dream.press/blog/wp-content/uploads/2020/07/CTA-guy-with-laptop-2.png)

## 13\. Yoast SEO

![Yoast SEO tool. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/04/DreamHost-seo-tools-1.jpg)

[Yoast SEO](https://yoast.com/wordpress/plugins/seo/) is often touted as the number-one WordPress SEO plugin. Its features cover the full spectrum when it comes to SEO. You can conduct readability checks, for example, and set canonical URLs to avoid confusing Google with duplicate content.

Other functionality on offer includes keyword optimization and the ability to preview pages in Google, Facebook, and Twitter. With the upgraded version of the plugin, you will also get some content assistance, since Yoast will offer you internal linking suggestions as you write pages and posts.

Yoast SEO has [a robust knowledge database](https://kb.yoast.com/) to help you get started. Plus, with the premium version, you'll have access to one year of 24/7 help from an expert support team.

Key Features:

- Optimize your content for specific keywords.
- Provide search engines with the metadata they need to understand your content.
- Avoid duplicate content.
- Handle critical SEO tasks automatically, such as creating a sitemap and optimizing permalinks.

Price: You can download a limited free version or get the premium version for [$89 per year](https://yoast.com/wordpress/plugins/seo/).

## 14\. Link-able

![ Link-able SEO linking tool. ](https://dhblog.dream.press/blog/wp-content/uploads/2019/09/how-to-optimize-site-success-8.jpg)

[Link-able](https://link-able.com/) offers a fairly unique approach to optimizing your website, boosting SEO, and expanding your traffic. You can think of this service as a highly-specialized job board. It's designed to provide marketers with a reliable way to create backlinks for their content.

The process starts with a marketer posting a specific request on the Link-able website. This request will include details about the kind of backlinks the marketer wants to build. They'll also provide any other information that might be helpful, much like a job posting.

Authors who have been thoroughly vetted by Link-able will be able to access the project database. They can submit proposals for specific projects and wait for the marketers to respond. If a marketer likes a proposal, Link-able connects the two parties, and the work is guaranteed.

Key Features:

- Find highly-qualified authors who have passed a rigorous testing process.
- Receive highly-relevant author matches and proposals for your projects.
- Focus on your content while employing others to handle link building.

Price: While this is a free service for both marketers and authors to join, Link-able does [charge a percentage](https://link-able.com/faqs/) of the paid transactions.

## What is an SEO?

SEO is an acronym for "search engine optimization" or "search engine optimizer." Deciding to hire an SEO is a big decision that can potentially improve your site and save time, but you can also risk damage to your site and reputation. Make sure to research the potential advantages as well as the damage that an irresponsible SEO can do to your site. Many SEOs and other agencies and consultants provide useful services for website owners, including:

- Review of your site content or structure
- Technical advice on website development: for example, hosting, redirects, error pages, use of JavaScript
- Content development
- Management of online business development campaigns
- Keyword research
- SEO training
- Expertise in specific markets and geographies.

Advertising with Google won't have any effect on your site's presence in our search results. Google never accepts money to include or rank sites in our search results, and it costs nothing to appear in our organic search results. Free resources such as [Search Console](https://search.google.com/search-console), the official [Google Search Central blog](https://developers.google.com/search/blog), and our [discussion forum](http://www.google.com/support/forum/p/webmasters) can provide you with a great deal of information about how to optimize your site for organic search.

## Getting started

If you run a small local business, you can probably do much of the work yourself. Here are some good resources:

- Check out our [30-minute video series](https://goo.gl/I4giIX) on building an online presence for your business.
- [Google Webmaster Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines)
- [Google 101: How Google crawls, indexes and serves the web.](https://developers.google.com/search/docs/beginner/how-search-works)
- The [SEO starter guide](https://developers.google.com/search/docs/beginner/seo-starter-guide) describes much of what your SEO will do for you. Although you don't need to know this guide well yourself if you're hiring a professional to do the work for you, it is useful to be familiar with these techniques, so that you can be aware if an SEO wants to use a technique that is not recommended or, worse, strongly discouraged.

Remember that it will take time for you to see results: typically from four months to a year from the time you begin making changes until you start to see the benefits.

If you think that you still need extra help from a professional, continue reading about how to choose an SEO.

## Choosing an SEO

If you're thinking about hiring an SEO, the earlier the better. A great time to hire is when you're considering a site redesign, or planning to launch a new site. That way, you and your SEO can ensure that your site is designed to be search engine-friendly from the bottom up. However, a good SEO can also help improve an existing site.

1.  Be committed to implementing the recommended changes. Making the changes recommended by an SEO takes time and effort; if you aren't going to take the time to make these changes, it's not worthwhile hiring a professional.
2.  Interview your potential SEO. Some useful questions to ask an SEO include:
    - Can you show me examples of your previous work and share some success stories?
    - Do you follow the Google Webmaster Guidelines?
    - Do you offer any online marketing services or advice to complement your organic search business?
    - What kind of results do you expect to see, and in what timeframe? How do you measure your success?
    - What's your experience in my industry?
    - What's your experience in my country/city?
    - What's your experience developing international sites?
    - What are your most important SEO techniques?
    - How long have you been in business?
    - How can I expect to communicate with you? Will you share with me all the changes you make to my site, and provide detailed information about your recommendations and the reasoning behind them?
    - See if the SEO is interested in you and your business. If they're not interested, find someone who is. Your SEO should ask questions such as:
      - What makes your business or service unique and valuable to customers?
      - Who are your customers?
      - How does your business make money, and how can search results help?
      - What other advertising channels are you using?
      - Who are your competitors?
3.  Check your SEO's business references. Ask past clients if they felt that this SEO provided useful service, was easy to work with, and produced positive results.
4.  Ask for a technical and search audit for your site to learn what they think needs to be done, why, and what the expected outcome should be. You'll probably have to pay for this. You will probably have to give them read-only access to your site on Search Console. (At this stage, don't grant them write access.) Your prospective SEO should be able to give you realistic estimates of improvement, and an estimate of the work involved. If they guarantee you that their changes will give you first place in search results, find someone else.
5.  Decide if you want to hire.

### Precautions

While SEOs can provide clients with valuable services, some unethical SEOs have given the industry a black eye by using overly aggressive marketing efforts and attempting to manipulate search engine results in unfair ways. Practices that violate [our guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines) may result in a negative adjustment of your site's presence in Google, or even the removal of your site from our index.

When your SEO comes up with a set of recommendations for your site, ask her to corroborate these recommendations with a trusted source, such as a Search Console help page, Google Search Central blog entry, or Google-sanctioned response in the [forum](https://productforums.google.com/forum/#!forum/webmasters).

Here are some things to consider:

- One common scam is the creation of "shadow" domains that funnel users to a site by using deceptive redirects. These shadow domains often will be owned by the SEO who claims to be working on a client's behalf. However, if the relationship sours, the SEO may point the domain to a different site, or even to a competitor's domain. If that happens, the client has paid to develop a competing site owned entirely by the SEO.
- Another illicit practice is to place "doorway" pages loaded with keywords on the client's site somewhere. The SEO promises this will make the page more relevant for more queries. This is inherently false since individual pages are rarely relevant for a wide range of keywords. More insidious, however, is that these doorway pages often contain hidden links to the SEO's other clients as well. Such doorway pages drain away the link popularity of a site and route it to the SEO and its other clients, which may include sites with unsavory or illegal content.
- Finally, avoid getting involved in [link schemes](https://developers.google.com/search/docs/advanced/guidelines/link-schemes), such as buying links from other sites to increase your ranking. This is against Google's quality guidelines and can result in a [manual action against some or all of your site](https://support.google.com/webmasters/answer/9044175?hl=en&ref_topic=7440006#unnatural-links-to-your-site), which will negatively affect your site ranking.

If you feel that you were deceived by an SEO in some way, you may want to report it.

In the United States, the Federal Trade Commission (FTC) handles complaints about deceptive or unfair business practices. To file a complaint, visit: <http://www.ftc.gov/> and click on "File a Complaint Online," call 1-877-FTC-HELP, or write to:

> Federal Trade Commission\
> CRC-240\
> Washington, D.C. 20580

If your complaint is against a company in a country other than the United States, please file it at <http://www.econsumer.gov/>.

## Helpful guidelines

- Be wary of SEO firms and web consultants or agencies that email you out of the blue.

  Amazingly, we get these spam emails too:

  > _"Dear google.com,\
  > I visited your website and noticed that you are not listed in most of the major search engines and directories..."_

  Reserve the same skepticism for unsolicited email about search engines as you do for "burn fat at night" diet pills or requests to help transfer funds from deposed dictators.

- No one can guarantee a #1 ranking on Google.

  Beware of SEOs that claim to guarantee rankings, allege a "special relationship" with Google, or advertise a "priority submit" to Google. There is no priority submit for Google. In fact, the only way to submit a site to Google directly is through our [Add URL](http://www.google.com/addurl/?continue=/addurl) page or by submitting a [Sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview) and you can do this yourself at no cost whatsoever.

- Be careful if a company is secretive or won't clearly explain what they intend to do.

  Ask for explanations if something is unclear. If an SEO creates deceptive or misleading content on your behalf, such as doorway pages or "throwaway" domains, your site could be removed entirely from Google's index. Ultimately, you are responsible for the actions of any companies you hire, so it's best to be sure you know exactly how they intend to "help" you. If an SEO has FTP access to your server, they should be willing to explain all the changes they are making to your site.

- You should never have to link to an SEO.

  Avoid SEOs that talk about the power of "free-for-all" links, link popularity schemes, or submitting your site to thousands of search engines. These are typically useless exercises that don't affect your ranking in the results of the major search engines -- at least, not in a way you would likely consider to be positive.

- Choose wisely.

  While you consider whether to go with an SEO, you may want to do some research on the industry. Google is one way to do that, of course. While Google doesn't comment on specific companies, we've encountered firms calling themselves SEOs who follow practices that are clearly beyond the pale of accepted business behavior. Be careful.

- Be sure to understand where the money goes.

  While Google never sells better ranking in our search results, several other search engines combine pay-per-click or pay-for-inclusion results with their regular web search results. Some SEOs will promise to rank you highly in search engines, but place you in the advertising section rather than in the search results. A few SEOs will even change their bid prices in real time to create the illusion that they "control" other search engines and can place themselves in the slot of their choice. This scam doesn't work with Google because our advertising is clearly labeled and separated from our search results, but be sure to ask any SEO you're considering which fees go toward permanent inclusion and which apply toward temporary advertising.

- What are some other things to look out for?

  There are a few warning signs that you may be dealing with a rogue SEO. It's far from a comprehensive list, so if you have any doubts, trust your instincts. By all means, feel free to walk away if the SEO:

  - Owns shadow domains
  - Puts links to their other clients on doorway pages
  - Offers to sell keywords in the address bar
  - Doesn't distinguish between actual search results and ads that appear on search results pages
  - Guarantees ranking, but only on obscure, long keyword phrases you would get anyway
  - Operates with multiple aliases or falsified WHOIS info
  - Gets traffic from "fake" search engines, spyware, or scumware
  - Has had domains removed from Google's index or is not itself listed in Google

How Google Search Works (for beginners)
Google gets information from many different sources, including:

Web pages
User-submitted content such as Google My Business and Maps user submissions
Book scanning
Public databases on the internet
Many other sources
However, this page focuses on web pages. Google follows three basic steps to generate results from web pages:

Crawling
Indexing
Serving (and ranking)
Crawling
The first step is finding out what pages exist on the web. There isn't a central registry of all web pages, so Google must constantly search for new pages and add them to its list of known pages. Some pages are known because Google has already visited them before. Other pages are discovered when Google follows a link from a known page to a new page. Still other pages are discovered when a website owner submits a list of pages (a sitemap) for Google to crawl. If you're using a managed web host, such as Wix or Blogger, they might tell Google to crawl any updated or new pages that you make.

Once Google discovers a page URL, it visits, or crawls, the page to find out what's on it. Google renders the page and analyzes both the text and non-text content and overall visual layout to decide where it can appear in Search results. The better that Google can understand your site, the better we can match it to people who are looking for your content.

To improve your site crawling:

Verify that Google can reach the pages on your site, and that they look correct. Google accesses the web as an anonymous user (a user with no passwords or information). Google must be able to see all the images and other elements of the page to be able to understand it correctly. You can do a quick check by typing your page URL in the Mobile-Friendly Test.
If you've created or updated a single page, you can submit an individual URL to Google. To tell Google about many new or updated pages at once, use a sitemap.
If you ask Google to crawl only one page, make it your home page. Your home page is the most important page on your site, as far as Google is concerned. To encourage a complete site crawl, be sure that your home page (and all pages) contain a good site navigation system that links to all the important sections and pages on your site; this helps users (and Google) find their way around your site. For smaller sites (less than 1,000 pages), making Google aware of only your homepage is all you need, provided that Google can reach all your other pages by following a path of links that start from your homepage.
Get your page linked to by another page that Google already knows about. However, be warned that links in advertisements, links that you pay for in other sites, links in comments, or other links that don't follow the Google Webmaster Guidelines won't be followed by Google.
Google doesn't accept payment to crawl a site more frequently, or rank it higher. If anyone tells you otherwise, they're wrong.
Indexing
After a page is discovered, Google tries to understand what the page is about. This process is called indexing. Google analyzes the content of the page, catalogs images and video files embedded on the page, and otherwise tries to understand the page. This information is stored in the Google index, a huge database stored in many, many (many!) computers.

To improve your page indexing:

Create short, meaningful page titles.
Use page headings that convey the subject of the page.
Use text rather than images to convey content. Google can understand some image and video, but not as well as it can understand text. At minimum, annotate your video and images with alt text and other attributes as appropriate.
Serving (and ranking)
When a user types a query, Google tries to find the most relevant answer from its index based on many factors. Google tries to determine the highest quality answers, and factor in other considerations that will provide the best user experience and most appropriate answer, by considering things such as the user's location, language, and device (desktop or phone). For example, searching for "bicycle repair shops" would show different answers to a user in Paris than it would to a user in Hong Kong. Google doesn't accept payment to rank pages higher, and ranking is done programmatically.

To improve your serving and ranking:

Make your page fast to load, and mobile-friendly.
Put useful content on your page and keep it up to date.
Follow the Google Webmaster Guidelines, which help ensure a good user experience.
Read more tips and best practices in our SEO starter guide.
You can find more information here, including the guidelines that we provide to our quality raters to ensure that we're providing good results.
An even longer version

# How Google Search Works (for beginners)

Google gets information from many different sources, including:

- Web pages
- User-submitted content such as Google My Business and Maps user submissions
- Book scanning
- Public databases on the internet
- Many other sources

However, this page focuses on web pages. Google follows three basic steps to generate results from web pages:

- [Crawling](https://developers.google.com/search/docs/beginner/how-search-works#crawling)
- [Indexing](https://developers.google.com/search/docs/beginner/how-search-works#indexing)
- [Serving (and ranking)](https://developers.google.com/search/docs/beginner/how-search-works#serving)

## Crawling

The first step is finding out what pages exist on the web. There isn't a central registry of all web pages, so Google must constantly search for new pages and add them to its list of known pages. Some pages are known because Google has already visited them before. Other pages are discovered when Google follows a link from a known page to a new page. Still other pages are discovered when a website owner submits a list of pages (a [_sitemap_](https://developers.google.com/search/docs/advanced/sitemaps/overview)) for Google to crawl. If you're using a managed web host, such as Wix or Blogger, they might tell Google to crawl any updated or new pages that you make.

Once Google discovers a page URL, it visits, or *crawls*, the page to find out what's on it. Google renders the page and analyzes both the text and non-text content and overall visual layout to decide where it can appear in Search results. The better that Google can understand your site, the better we can match it to people who are looking for your content.

To improve your site crawling:

- Verify that Google can reach the pages on your site, and that they look correct. Google accesses the web as an anonymous user (a user with no passwords or information). Google must be able to see all the images and other elements of the page to be able to understand it correctly. You can do a quick check by typing your page URL in the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly).
- If you've created or updated a single page, you can [submit an individual URL to Google.](https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl) To tell Google about many new or updated pages at once, use a [sitemap](https://developers.google.com/search/docs/advanced/sitemaps/overview).
- If you ask Google to crawl only one page, make it your home page. Your home page is the most important page on your site, as far as Google is concerned. To encourage a complete site crawl, be sure that your home page (and all pages) contain a good site navigation system that links to all the important sections and pages on your site; this helps users (and Google) find their way around your site. For smaller sites (less than 1,000 pages), making Google aware of only your homepage is all you need, provided that Google can reach all your other pages by following a path of links that start from your homepage.
- Get your page linked to by another page that Google already knows about. However, be warned that links in advertisements, links that you pay for in other sites, links in comments, or other links that don't follow the [Google Webmaster Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines) won't be followed by Google.

Google doesn't accept payment to crawl a site more frequently, or rank it higher. If anyone tells you otherwise, they're wrong.

## Indexing

After a page is discovered, Google tries to understand what the page is about. This process is called *indexing*. Google analyzes the content of the page, catalogs images and video files embedded on the page, and otherwise tries to understand the page. This information is stored in the *Google index*, a huge database stored in many, many (many!) computers.

To improve your page indexing:

- Create [short, meaningful page titles](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets).
- Use page headings that convey the subject of the page.
- Use text rather than images to convey content. Google can understand some image and video, but not as well as it can understand text. At minimum, annotate your [video](https://developers.google.com/search/docs/advanced/guidelines/video) and [images](https://developers.google.com/search/docs/advanced/guidelines/google-images) with alt text and other attributes as appropriate.

## Serving (and ranking)

When a user types a query, Google tries to find the most relevant answer from its index based on many factors. Google tries to determine the highest quality answers, and factor in other considerations that will provide the best user experience and most appropriate answer, by considering things such as the user's location, language, and device (desktop or phone). For example, searching for "bicycle repair shops" would show different answers to a user in Paris than it would to a user in Hong Kong. Google doesn't accept payment to rank pages higher, and ranking is done programmatically.

To improve your serving and ranking:

- Make your page fast to load, and mobile-friendly.
- Put useful content on your page and keep it up to date.
- Follow the [Google Webmaster Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines), which help ensure a good user experience.
- Read more tips and best practices in our [SEO starter guide](https://developers.google.com/search/docs/beginner/seo-starter-guide).
- You can find [more information here](https://www.google.com/search/howsearchworks/), including [the guidelines that we provide to our quality raters to ensure that we're providing good results](https://static.googleusercontent.com/media/www.google.com/en//insidesearch/howsearchworks/assets/searchqualityevaluatorguidelines.pdf).

## An even longer version 

Want more in-depth information about how Search works? Read our [Advanced guide to how Google Search works](https://developers.google.com/search/docs/advanced/guidelines/how-search-works).

# Advanced: How Search Works

Understanding how Google Search crawls, indexes, and serves content is important when you're debugging issues and anticipating Search behavior on your site.

## Crawling

Crawling is the process by which [Googlebot](https://developers.google.com/search/docs/advanced/crawling/googlebot) visits new and updated pages to be added to the Google index.

We use a huge set of computers to fetch (or "crawl") billions of pages on the web. The program that does the fetching is called Googlebot (also known as a robot, bot, or spider). Googlebot uses an algorithmic process to determine which sites to crawl, how often, and how many pages to fetch from each site.

Google's crawl process begins with a list of web page URLs, generated from previous crawl processes, augmented by Sitemap data provided by website owners. When Googlebot visits a page it finds links on the page and adds them to its list of pages to crawl. New sites, changes to existing sites, and dead links are noted and used to update the Google index.

During the crawl, Google renders the page using a recent version of Chrome. As part of the rendering process, it runs any page scripts it finds. If your site uses dynamically-generated content, be sure that you [follow the JavaScript SEO basics](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics).

Primary crawl / secondary crawl

Google uses two different crawlers for crawling websites: a mobile crawler and a desktop crawler. Each crawler type simulates a user visiting your page with a device of that type.

Google uses one crawler type (mobile or desktop) as the *primary crawler* for your site. All pages on your site that are crawled by Google are crawled using the primary crawler. The primary crawler for all new websites is the mobile crawler.

In addition, Google recrawls a few pages on your site with the other crawler type (mobile or desktop). This is called the *secondary crawl*, and is done to see how well your site works with the other device type.

### How does Google know which pages not to crawl?

- Pages blocked in robots.txt won't be crawled, but still might be indexed if linked to by another page. Google can infer the content of the page by a link pointing to it, and index the page without parsing its contents.
- Google can't crawl any pages not accessible by an anonymous user. Thus, any login or other authorization protection will prevent a page from being crawled.
- Pages that have already been crawled and are considered [duplicates](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) of another page, are crawled less frequently.

### Improve your crawling

Use these techniques to help Google discover the right pages on your site:

- [Submit a sitemap.](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Submit crawl requests for individual pages](https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl).
- Use a [simple, human-readable, and logical URL paths for your pages](https://developers.google.com/search/docs/advanced/guidelines/url-structure) and provide clear and direct internal links within the site.
- If you use URL parameters on your site for navigation, for instance if you indicate the user's country in a global shopping site, [use the URL parameters tool to tell Google about important parameters](https://support.google.com/webmasters/answer/6080550).
- Use robots.txt wisely: Use robots.txt to indicate to Google which pages you'd prefer Google to know about or crawl first, in order to protect your server load, not as a method to block material from appearing in the Google index.
- Use [hreflang](https://developers.google.com/search/docs/advanced/crawling/localized-versions) to point to alternate versions of your page in other languages.
- Clearly identify your [canonical page and alternate pages](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls).
- View your crawl and index coverage using the [Index Coverage Report](https://support.google.com/webmasters/answer/7440203).
- Be sure that Google can access the key pages, and also the important resources (images, CSS files, scripts) needed to render the page properly.
- Confirm that Google can access and render your page properly by running the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289) on the live page.

## Indexing

Googlebot processes each page it crawls in order to understand the content of the page. This includes processing the textual content, key content tags and attributes, such as `<title>` tags and alt attributes, images, videos, and more. Googlebot can process many, but not all, content types. For example, we cannot process the content of some rich media files.

Somewhere between crawling and indexing, Google determines if a page is a [duplicate or canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) of another page. If the page is considered a duplicate, it will be crawled much less frequently. Similar pages are grouped together into a *document,* which is a group of one or more pages that includes the canonical page (the most representative of the group) and any duplicates found (which might simply be alternate URLs to reach the same page, or might be alternate mobile or desktop versions of the same page).

Note that Google doesn't index pages with a [`noindex` directive](https://developers.google.com/search/docs/advanced/crawling/block-indexing) (header or tag). However, it must be able to see the directive; if the page is blocked by a [robots.txt file](https://developers.google.com/search/docs/advanced/robots/intro), a login page, or other device, it is possible that the page might be indexed even if Google didn't visit it!

### Improve your indexing

There are many techniques to improve Google's ability to understand the content of your page:

- Prevent Google from crawling or finding pages that you want to hide using the [`noindex`](https://developers.google.com/search/docs/advanced/crawling/block-indexing) tag. Don't "noindex" a page that is blocked by robots.txt; if you do so, the `noindex` tag won't be seen and the page might still be indexed.
- [Use structured data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data).
- Follow the [Google Webmaster Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines).
- Read our [SEO starter guide](https://developers.google.com/search/docs/beginner/seo-starter-guide) and [advanced user guide](https://developers.google.com/search/docs/advanced/guidelines/get-started) for more tips.

### What is a "document"?

Internally, Google represents the web as an enormous set of *documents*. Each document represents one or more web pages. These pages are either identical or very similar, but are essentially the same content, reachable by different URLs. The different URLs in a document can lead to exactly the same page (for instance, example.com/dresses/summer/1234 and example.com?product=1234 might show the same page), or the same page with small variations intended for users on different devices (for example, example.com/mypage for desktop users and m.example.com/mypage for mobile users).

Google chooses one of the URLs in a document and defines it as the document's *[canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) URL*. The document's canonical URL is the one that Google crawls and indexes most often; the other URLs are considered *duplicates* or *alternates*, and may [occasionally be crawled](https://developers.google.com/search/docs/advanced/crawling/googlebot), or served according to the user request. For instance, if a document's canonical URL is the mobile URL, Google will still probably serve the desktop (alternate) URL for users searching on desktop.

Most reports in Search Console attribute data to the document's canonical URL. Some tools (such as the URL Inspection tool) support testing alternate URLs, but inspecting the canonical URL provides information about the alternate URLs as well.

You can [tell Google which URL you prefer to be canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls), but Google may choose a different canonical for various reasons.

Here is a summary of terms, and how they are used in Search Console:

- Document: A collection of similar pages. Has a canonical URL, and possibly alternate URLs, if your site has duplicate pages. URLs in the document can be from the same or different *organization* (the root domain, for example "google" in www.google.com). Google chooses the best URL to show in Search results according to the platform (mobile/desktop), user language or location, and many other variables. Google discovers related pages on your site by organic crawling, or by site-implemented features such as redirects or `<link rel=alternate/canonical>` tags. Related pages on other organizations can only be marked as alternates if explicitly coded by your site (through redirects or link tags).

  Pages with the same content in different languages are stored in different documents that reference each other using [hreflang tags](https://developers.google.com/search/docs/advanced/crawling/localized-versions); this is why it's important to use hreflang tags for translated content.

- URL: The URL used to reach a given piece of content on a site.
- Page: A given web page, reached by one or more URLs. There can be different *versions* of a page, depending on the user's platform (mobile, desktop, tablet, and so on).
- Version: One variation of the page, typically categorized as "mobile", "desktop", and "AMP" (although AMP can itself have mobile and desktop versions). Each version can have a different URL (example.com vs m.example.com) or the same URL (if your site uses [dynamic serving](https://developers.google.com/search/mobile-sites/mobile-seo/dynamic-serving) or [responsive web design](https://developers.google.com/search/mobile-sites/mobile-seo/responsive-design), the same URL can show different versions of the same page) depending on your site configuration. Language variations are not considered different versions, but different documents.
- Canonical page or URL: The URL that Google considers as most representative of the document. Google always crawls this URL; duplicate URLs in the document are occasionally crawled as well.
- Alternate/duplicate page or URL: The document URL that Google might occasionally crawl. Google also serves these URLs if they are appropriate to the user and request (for example, an alternate URL for desktop users will be served for desktop requests rather than a canonical mobile URL).
- Site: Usually used as a synonym for a website (a conceptually related set of web pages), but sometimes used as a synonym for a Search Console property, although a property can actually be defined as only part of a site. A site can span subdomains (and even domains, for properly linked AMP pages).

## Serving results

When a user enters a query, our machines search the index for matching pages and return the results we believe are the most relevant to the user. Relevancy is determined by hundreds of factors, and we always work on improving our algorithm. Google considers the user experience in choosing and ranking results, so be sure that your page [loads fast](https://developers.google.com/speed) and is [mobile-friendly](https://developers.google.com/search/mobile-sites).

### Improve your serving

There are many ways to improve how Google serves the content of your page:

- If your results are aimed at users in specific locations or languages, you can [tell Google your preferences](https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites).
- Be sure that your page [loads fast](https://developers.google.com/speed) and is [mobile-friendly](https://developers.google.com/search/mobile-sites).
- Follow the [Webmaster Guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines) to avoid common pitfalls and improve your site's ranking.
- Consider [implementing Search result features](https://developers.google.com/search/docs/advanced/structured-data/search-gallery) for your site, such as recipe cards or article cards.
- [Implement AMP](https://developers.google.com/search/docs/advanced/experience/about-amp) for faster loading pages on mobile devices. Some AMP pages are also eligible for additional search features, such as the top stories carousel.
- Google's algorithm is constantly being improved; rather than trying to guess the algorithm and design your page for that, work on creating good, fresh content that users want, and following our guidelines.

# Googlebot

Googlebot is the generic name for Google's [web crawler](https://developers.google.com/search/docs/beginner/how-search-works). Googlebot is the general name for two different types of crawlers: a desktop crawler that simulates a user on desktop, and a mobile crawler that simulates a user on a mobile device.

Your website will probably be crawled by both Googlebot Desktop and Googlebot Smartphone. You can identify the subtype of Googlebot by looking at the [user agent string](https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) in the request. However, both crawler types obey the same product token (user agent token) in robots.txt, and so you cannot selectively target either Googlebot Smartphone or Googlebot Desktop using robots.txt.

If your site has been converted to [mobile first](https://developers.google.com/search/blog/2018/03/rolling-out-mobile-first-indexing) on Google, then the majority of Googlebot crawl requests will be made using the mobile crawler, and a minority using the desktop crawler. For sites that haven't yet been converted, the majority of crawls will be made using the desktop crawler. In both cases, the minority crawler crawls only URLs that have already been crawled by the majority crawler.

## How Googlebot accesses your site

For most sites, Googlebot shouldn't access your site more than once every few seconds on average. However, due to delays it's possible that the rate will appear to be slightly higher over short periods.

Googlebot was designed to be run simultaneously by thousands of machines to improve performance and scale as the web grows. Also, to cut down on bandwidth usage, we run many crawlers on machines located near the sites that they might crawl. Therefore, your logs may show visits from several machines at google.com, all with the Googlebot user agent. Our goal is to crawl as many pages from your site as we can on each visit without overwhelming your server's bandwidth. If your site is having trouble keeping up with Google's crawling requests, you can [request a change in the crawl rate.](https://support.google.com/webmasters/answer/48620)

Generally, Googlebot crawls over HTTP/1.1. However, starting November 2020, Googlebot may crawl sites that may benefit from it over [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) if it's supported by the site. This may save computing resources (for example, CPU, RAM) for the site and Googlebot, but otherwise it doesn't affect indexing or ranking of your site.

To opt out from crawling over HTTP/2, instruct the server that's hosting your site to respond with a 421 HTTP status code when Googlebot attempts to crawl your site over HTTP/2. If that's not feasible, you [can send a message to the Googlebot team](https://www.google.com/webmasters/tools/googlebot-report) (however this solution is temporary).

## Blocking Googlebot from visiting your site

It's almost impossible to keep a web server secret by not publishing links to it. For example, as soon as someone follows a link from your "secret" server to another web server, your "secret" URL may appear in the referrer tag and can be stored and published by the other web server in its referrer log. Similarly, the web has many outdated and broken links. Whenever someone publishes an incorrect link to your site or fails to update links to reflect changes in your server, Googlebot will try to crawl an incorrect link from your site.

If you want to prevent Googlebot from crawling content on your site, you have a [number of options](https://support.google.com/webmasters/answer/93708). Be aware of the difference between preventing Googlebot from crawling a page, preventing Googlebot from indexing a page, and preventing a page from being accessible at all by both crawlers or users.

## Verifying Googlebot

Before you decide to block Googlebot, be aware that the user agent string used by Googlebot is often spoofed by other crawlers. It's important to verify that a problematic request actually comes from Google. The best way to verify that a request actually comes from Googlebot is to [use a reverse DNS lookup](https://developers.google.com/search/docs/advanced/crawling/verifying-googlebot) on the source IP of the request.

Googlebot and all respectable search engine bots will respect the directives in robots.txt, but some nogoodniks and spammers do not. Google actively fights spammers; if you notice spam pages or sites in Google Search results, you can [report spam to Google.](https://developers.google.com/search/docs/advanced/guidelines/report-spam)
