<a href="/categories/coding/" class="category-link">Coding</a>

# How to build a Node.js eCommerce website for free

<span title="Last time this post was updated"> Last updated May 14th 2019 </span> <span class="m-x-2" title="Pageviews"> 19.5k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/How-to-build-a-Node-js-eCommerce-website-for-free/">0</span>](#disqus_thread) </span>

- <a href="/tags/nodejs/" class="tag-list-link">nodejs</a><span class="tag-list-count">12</span>

![How to build a Node.js eCommerce website for free](/images/ecommerce-app-nodejs-large.png)

Running an online store that sells digital goods is easier than ever. Thanks to generous free plans for developers, you don’t have to spend a dime to run your e-commerce site for a decent amount of users. In this post, I’ll go over how I put together [books.adrianmejia.com](https://books.adrianmejia.com/) to sell my eBook.

<span id="more"></span>

A 10,000-feet view description would be something like this:

> Finished creating my own system to sell ebooks! <https://t.co/9w0DHBU8T8> It was harder than I thought but it was fun. When payments are completed, a webhook is sent to my server, which grabs the ebook PDF from S3. A [\#Node](https://twitter.com/hashtag/Node?src=hash&ref_src=twsrc%5Etfw) process stamp the document and uses API to send it by email
>
> — Adrian.js (@iAmAdrianMejia) [May 13, 2019](https://twitter.com/iAmAdrianMejia/status/1127918275705413632?ref_src=twsrc%5Etfw)

**TL; DR:** The e-Commerce site final stack is the following:

- Node.js (Backend processing: payment webhooks)
- Stripe (Payment gateway)
- Heroku (Run server code)
- Netlify (Host static files)
- Amazon S3 (Host assets)
- CircleCI (Test code and generate assets)
- Mailgun (emails platform)

This diagram shows how each part interacts with each other: ![nodejs e-commerce app](/images/e-commerce-app-nodejs3.png)

## <a href="#Automating-the-generation-of-the-assets-PDF" class="headerlink" title="Automating the generation of the assets (PDF)"></a>Automating the generation of the assets (PDF)

I have Github repository where the book docs and code live:

<https://github.com/amejiarosario/dsa.js>

Every time I made a change (or somebody in the community), it triggers some process on CI that run all tests and generate a new updated document and store it AWS S3.

Generating assets automatically is useful because I want every buyer to get the latest copy.

## <a href="#Hosting-e-Commerce-site" class="headerlink" title="Hosting e-Commerce site"></a>Hosting e-Commerce site

I always want to try out new JavaScript/CSS frameworks. However, I resisted the temptation and asked my self: Does a page for selling a book need to be dynamic? Nope. So, it will be more performant if I use plain old CSS and HTML. That’s what I did. Static pages also have the advantage that can be cached and served from a CDN.

I used Netlify to host the static website for free. One single `git push` will update the site on the domain name of choice (e.g. [books.adrianmejia.com](https://books.adrianmejia.com/)). It also uses a global CDN so your page loads faster from anywhere in the world!

## <a href="#Processing-Payments" class="headerlink" title="Processing Payments"></a>Processing Payments

The next part is to add a `Buy` button. Stripe provides a helpful checkout page that they host themselves and take care of the PCI compliance when dealing with credit cards. So, I used that, and they process the payment for me.

But how do I know if the customer bought my book or got distracted? For that, I need a server that listens for a payment webhook. In the Stripe configuration page, you tell them to send a POST request (webhook) with the customer information when a particular event.

Here is the code for a simple webhook server

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29</code></pre></td><td><pre><code>const express = require(&#39;express&#39;);
const bodyParser = require(&#39;body-parser&#39;);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(port, () =&gt; {
console.log(`Listening for webhooks: http://localhost:${port}`);
});

app.post(&#39;/webhook&#39;, async (req, res) =&gt; {
const event = req.body;

res.sendStatus(200);

if (event.type === &#39;payment_intent.succeeded&#39;) {
// TODO: send event to RabbitMQ instead of generating the PDF here.
// It&#39;s not good practice to block a request handler with long processes
const { sendPdfToBuyer } = require(&#39;./process-pdf&#39;);
sendPdfToBuyer(event);
}
});

// all other routes, prevent node crashing for undefined routes
app.route(&#39;\*&#39;, async (req, res) =&gt; {
res.json({ ok: 1 });
});</code></pre></td></tr></tbody></table>

And that brings us to the next part, the Node.js server to take care of the rest.

## <a href="#Backend-processing" class="headerlink" title="Backend processing"></a>Backend processing

I created a Node.js server that listened for webhook requests. When a customer paid for the book an event with the details is sent to this server, and the document pipeline is kicked off.

The server first downloads the book from AWS S3 bucket, where the latest raw document is. Later, the server uses a library that allows to manipulate the PDF and add the buyer’s stamp on the eBook. Finally, the material is attached to and send through email.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><pre><code>1
2
3
4
5
6
7
8</code></pre></td><td><pre><code>async function sendPdfToBuyer(webhookEvent) {
  const email = webhookEvent.data.object.charges.data.map(d =&gt; d.billing_details.email).join(&#39;, &#39;);
  const pdfUrl = await getLatestPdfUrl();
  const fileName = pdfUrl.split(&#39;/&#39;).pop();
  const pdfBuffer = await downloadPdf(pdfUrl);
  const stampedPdfPath = await stampedPdfWithBuyerData({ pdfBuffer, email, fileName });
  await sendEmail({ stampedPdfPath, email, fileName });
}</code></pre></td></tr></tbody></table>

## <a href="#Sending-emails" class="headerlink" title="Sending emails"></a>Sending emails

Sending emails was a little trickier than I thought.

### <a href="#DNS-settings-and-authentication" class="headerlink" title="DNS settings and authentication"></a>DNS settings and authentication

First, I was using my domain name, so I have to set up the DNS settings to make it work. However, I notice all my test emails to myself ended up on the junk mail.

Reading more about the topic I realized that I have to authenticate emails using SPF and DKIM, I still don’t know what they are in details, but they allow email providers (Gmail, Yahoo) to verify you are who you say you are. They are setup also using DNS settings given by the emailing service provides.

I set up the setting initially with Sendgrid but was still getting my emails to the junk folder. I moved to Mailgun and got better results. For some reason, `hotmail.com` would always reject the emails. As I learned unless you pay for a dedicated IP address the email service provider would use a “shared” IP in many accounts. If for some reason the IP gets a bad reputation then your emails will go to spam folder even if you have never sent an email before! I got this fixed by opening a support ticket and after they changed the IP it was working fine with any address.

### <a href="#Email-Templates" class="headerlink" title="Email Templates"></a>Email Templates

The final part related to emails is doing a template. I have never done it before. The difference between HTML for email templates and web pages HTML is that on the email you should embed everything into the message itself. Spam filters don’t like external link loading additional resources. So, every CSS should be inline and has to also be responsible.

Well, there you have it: an e-commerce store that collects the payments and sends digital goods to buyers. Let’s close talking about the cost of maintenance.

## <a href="#Cost-of-running-the-e-Commerce-store" class="headerlink" title="Cost of running the e-Commerce store"></a>Cost of running the e-Commerce store

This is the breakdown of the monthly costs:

- Hosting static websites: **$0** (if you use Netlify or Github pages)
- Payment Gateway: **$0** (Stripe will only a 2.9% charge if you sell something otherwise $0)
- Node.js server: **$0** (Heroku, AWS, Google Cloud and many others have a free plan for developers)
- Email Service: **$0** (Mailgun and Sendgrid both have free plans. The former allows you to send 10K emails per month)

The total is: **$0** / mo.

Note: Like any website, If you want to use a custom domain as I do, you have to pay for it which is about $1/mo.

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2019-05-14-How-to-build-a-Node-js-eCommerce-website-for-free.md).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/asynchronous-vs-synchronous-handling-concurrency-in-javascript/" class="article-nav-newer"><strong><em></em> newer</strong></a>

What every programmer should know about Synchronous vs. Asynchronous Code

<a href="/How-to-perform-Atomic-Operations-on-MongoDB/" class="article-nav-older"><strong>older <em></em></strong></a>

How to perform Atomic Operations on MongoDB?

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#Automating-the-generation-of-the-assets-PDF" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">Automating the generation of the assets (PDF)</span></a>
2.  <a href="#Hosting-e-Commerce-site" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Hosting e-Commerce site</span></a>
3.  <a href="#Processing-Payments" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Processing Payments</span></a>
4.  <a href="#Backend-processing" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Backend processing</span></a>
5.  <a href="#Sending-emails" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Sending emails</span></a>
    1.  <a href="#DNS-settings-and-authentication" class="toc-link"><span class="toc-number">5.1.</span> <span class="toc-text">DNS settings and authentication</span></a>
    2.  <a href="#Email-Templates" class="toc-link"><span class="toc-number">5.2.</span> <span class="toc-text">Email Templates</span></a>
6.  <a href="#Cost-of-running-the-e-Commerce-store" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Cost of running the e-Commerce store</span></a>
