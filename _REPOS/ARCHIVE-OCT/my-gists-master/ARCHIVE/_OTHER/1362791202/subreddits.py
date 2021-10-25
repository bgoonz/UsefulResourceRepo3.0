#!/usr/bin/env python

# Requires lxml 2.0.3 and httplib2.  Public domain.

first_uri = 'http://www.reddit.com/reddits/'

import httplib2
import urlparse
import lxml.html.soupparser

def get_page(uri):
    print 'Processing %s' % uri
    http = httplib2.Http()
    response, content = http.request(uri)
    return lxml.html.soupparser.fromstring(content)

def fetch_reddits():
    reddit_list = []
    current_uri = first_uri
    while True:
        page = get_page(current_uri)
        reddits = page.xpath('//div[contains(@class, \'subreddit\')]')
        for reddit in reddits:
            info = reddit.xpath('descendant::a[@class=\'title\']')[0]
            name = info.text or info.attrib['href']
            uri = urlparse.urljoin(current_uri, info.attrib['href'])
            try:
                description = reddit.xpath('descendant::p[@class=\'description\']/text()')[0]
            except:
                description = None
            subscribers = int(reddit.xpath('descendant::span[contains(@class, \'score\')]/text()')[0].split()[0])
            reddit_list.append((name, uri, description, subscribers))
        try:
            next_link = page.xpath('//p[@class=\'nextprev\']/a[contains(text(),\'next\')]')[0]
            current_uri = urlparse.urljoin(current_uri, next_link.attrib['href'])
        except:
            break
    return reddit_list

if __name__ == '__main__':
    reddits = fetch_reddits()
    reddits.sort(key=lambda reddit: reddit[3])
    reddits.reverse()
    html = open('subreddits.html', 'w+')
    html.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"><meta content="text/html; charset=utf-8" http-equiv="Content-Type"><title>List of subreddits</title><h1>List of subreddits</h1><ul>')
    for reddit in reddits:
        name, uri, description, subscribers = reddit[0].encode('utf-8'), reddit[1].encode('utf-8'), (reddit[2] or '').encode('utf-8'), reddit[3]
        html.write('<li><h2><a href="%s">%s</a></h2><p>%d subscribers</p><p>%s</p></li>' % (uri, name, subscribers, description))
    html.write('</ul><p>Generated with <a href="subreddits.py">this Python script</a>.</p>')
    html.close()
    print 'Found %d subreddits, saved to subreddits.html.' % len(reddits)
