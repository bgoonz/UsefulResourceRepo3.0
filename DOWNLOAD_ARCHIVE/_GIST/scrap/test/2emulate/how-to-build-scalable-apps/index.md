<a href="/categories/coding/" class="category-link">Coding</a>

# How to build scalable apps?

<span title="Last time this post was updated"> Last updated January 9th 2016 </span> <span class="m-x-2" title="Pageviews"> 3.9k </span> <span class="m-x-2" title="Click to go to the comments section"> [ <span class="disqus-comment-count" data-disqus-url="https://master--bgoonz-blog.netlify.app/how-to-build-scalable-apps/">0</span>](#disqus_thread) </span>

- <a href="/tags/scaling/" class="tag-list-link">scaling</a><span class="tag-list-count">2</span>

![How to build scalable apps?](/images/scaling_apps_2016_large.png)

Scaling application is not an easy topic to cover in one post. So in this first post, you can find “the mindset” to build scalable apps using the 12-factor principles. In the [next post](/blog/2016/03/23/how-to-scale-a-nodejs-app-based-on-number-of-users/), you will find more down to earth examples one how to scale based on the number of users.

The Twelve steps are a compilation of guidelines to ensure apps can scale up without significant changes and tooling. These are very suitable for cloud platforms and continuous deployment. Furthermore, these principles are language agnostic, so it will work with any framework.

<span id="more"></span>

**The Twelve Factor Principles**

## <a href="#One-codebase-per-app-multiple-deployments" class="headerlink" title="One codebase per app, multiple deployments"></a>One codebase per app, multiple deployments

_DO_

- One codebase to rule all deployment environments: production, staging, local and so on and differentiate them from config files (see \#3).

_DON’T_

- Multiple apps sharing the same code. INSTEAD the common code should be extracted from a library and included through a dependency manager.

## <a href="#Declare-and-isolate-dependencies" class="headerlink" title="Declare and isolate dependencies"></a>Declare and isolate dependencies

_DO_

- Have a dependency declaration manifest (e.g. packages.json, Gemfile)
- Execute dependencies in isolation per app (e.g. bundle exec).

_DON’T_

- Rely on implicit existence of system-wide packages (e.g. curl, ImageMagik). INSTEAD vendor them into the app.

## <a href="#Store-the-config-in-the-environment" class="headerlink" title="Store the config in the environment"></a>Store the config in the environment

_DO_

- Separate app’s config (AWS S3, passwords, Google/Fb/Tw/APIs credentials, deployment hostname) from the code.
- Keep the code ready in a way that if were open source, it wouldn’t compromise any credentials.
- Use/commit ‘config’ files with sensitive information into repository. INSTEAD use environmental variables (env, env vars) which are easily changed between deployments and without changing code.

_DON’T_

- Group config variables by environment (e.g. AWS_S3_PRODUCTION, AWS_S3_TEST, AWS_S3_QA, AWS_S3_STAGING, AWS_S3_JOE…). INSTEAD use clean environment variables (e.g. AWS_S3) that are managed individually per deploy.

## <a href="#Swappable-local-and-third-party-services" class="headerlink" title="Swappable local and third party services"></a>Swappable local and third party services

_DO_

- Services like databases (e.g. MongoDB, PostgreSQL), message queues (e.g. RabbitMQ, Beanstalkd) should be accessed via URL or locator/credential stored in config.
- Swapping local to production services should be done without any code changes.

## <a href="#Build-and-runtime" class="headerlink" title="Build and runtime"></a>Build and runtime

_DO_

- Code changes flows in one direction only development -&gt; build -&gt; run time environments.

## <a href="#Execute-the-app-as-share-nothing-stateless-processes" class="headerlink" title="Execute the app as share-nothing stateless processes"></a>Execute the app as share-nothing stateless processes

_DO_

- Store any persistent data in external services (such as databases)

_DON’T_

- Use the filesystem/memory to save states. INSTEAD any instance of the app should be able to handle requests.

## <a href="#Export-services-via-port-binding" class="headerlink" title="Export services via port binding"></a>Export services via port binding

_DO_

- App is completely self-contained and communicates with other processes through port binding.

## <a href="#Scale-out-the-app-horizontally" class="headerlink" title="Scale out the app horizontally"></a>Scale out the app horizontally

_DO_

- Scale app horizontally since the app is a stateless and share-nothing model.

_DON’T_

- Daemonize. INSTEAD use operating system manager such as Upstart or init and Foreman in development.

## <a href="#Fast-startup-and-shutdown" class="headerlink" title="Fast startup and shutdown"></a>Fast startup and shutdown

_DO_

- app start in few seconds to serve requests or jobs.
- shut down gracefully after receiving SIGTERM signal (stop receiving new request/jobs, finish processing current request/job before stopping).

## <a href="#Keep-development-staging-and-production-as-similar-as-possible" class="headerlink" title="Keep development, staging, and production as similar as possible"></a>Keep development, staging, and production as similar as possible

_DO_

- design app for continuous deployment keeping the tools gaps and deployment times as minimum as possible.
- code from development to production should take few hours or just few minutes.
- developers who wrote the code should be able to deploy it to production.
- keep production and development tool the same as possible

_DON’T_

- use different services on production and development (e.g. development using SQLite and production ProtgreSQL).

## <a href="#Logs-goes-to-stdout" class="headerlink" title="Logs goes to stdout"></a>Logs goes to stdout

_DON’T_

- write logs to a particular location in the filesystem. INSTEAD send them to STDOUT, so they can be routed as will depending the environment (e.g. output to terminal in development and output to log file in production)

## <a href="#Admin-processes" class="headerlink" title="Admin processes"></a>Admin processes

_DO_

- favor languages/frameworks that use REPL shell out of the box to do admin tasks such as migrating databases, running consoles or running one-time scripts.

This is just the beginning follow up with [this next post](/blog/2016/03/23/how-to-scale-a-nodejs-app-based-on-number-of-users/).

### Now, your turn!

Thanks for reading this far. Here are some things you can do next:

- Found a typo? [Edit this post](https://github.com/amejiarosario/amejiarosario.github.io/edit/source/source/_posts/2016-01-09-how-to-build-scalable-apps.markdown).
- Got questions? [comment](#comments-section) below.
- Was it useful? Show your support and share it.

<a href="/how-to-scale-a-nodejs-app-based-on-number-of-users/" class="article-nav-newer"><strong><em></em> newer</strong></a>

How to scale a Nodejs app based on number of users

<a href="/grunt-js-tutorial-from-beginner-to-ninja/" class="article-nav-older"><strong>older <em></em></strong></a>

Grunt JS tutorial from Beginner to Ninja

Subscribe & stay up to date!



[<span id="back-to-top" title="Go back to the top of this page"> Top </span>](#) <a href="#" class="p-x-3" title="Improve this post"><em></em> Edit this post</a>

### Contents

1.  <a href="#One-codebase-per-app-multiple-deployments" class="toc-link"><span class="toc-number">1.</span> <span class="toc-text">One codebase per app, multiple deployments</span></a>
2.  <a href="#Declare-and-isolate-dependencies" class="toc-link"><span class="toc-number">2.</span> <span class="toc-text">Declare and isolate dependencies</span></a>
3.  <a href="#Store-the-config-in-the-environment" class="toc-link"><span class="toc-number">3.</span> <span class="toc-text">Store the config in the environment</span></a>
4.  <a href="#Swappable-local-and-third-party-services" class="toc-link"><span class="toc-number">4.</span> <span class="toc-text">Swappable local and third party services</span></a>
5.  <a href="#Build-and-runtime" class="toc-link"><span class="toc-number">5.</span> <span class="toc-text">Build and runtime</span></a>
6.  <a href="#Execute-the-app-as-share-nothing-stateless-processes" class="toc-link"><span class="toc-number">6.</span> <span class="toc-text">Execute the app as share-nothing stateless processes</span></a>
7.  <a href="#Export-services-via-port-binding" class="toc-link"><span class="toc-number">7.</span> <span class="toc-text">Export services via port binding</span></a>
8.  <a href="#Scale-out-the-app-horizontally" class="toc-link"><span class="toc-number">8.</span> <span class="toc-text">Scale out the app horizontally</span></a>
9.  <a href="#Fast-startup-and-shutdown" class="toc-link"><span class="toc-number">9.</span> <span class="toc-text">Fast startup and shutdown</span></a>
10. <a href="#Keep-development-staging-and-production-as-similar-as-possible" class="toc-link"><span class="toc-number">10.</span> <span class="toc-text">Keep development, staging, and production as similar as possible</span></a>
11. <a href="#Logs-goes-to-stdout" class="toc-link"><span class="toc-number">11.</span> <span class="toc-text">Logs goes to stdout</span></a>
12. <a href="#Admin-processes" class="toc-link"><span class="toc-number">12.</span> <span class="toc-text">Admin processes</span></a>
