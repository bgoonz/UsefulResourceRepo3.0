# Strapi documentation!

# API reference

- strapi
  - [.admin](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-admin)
  - [.api](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-api)
  - [.app](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-app)
  - [.config](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-config)
  - [.controllers](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-controllers)
  - [.hook](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-hook)
  - [.load()](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-load)
  - [.log](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-log)
  - [.middleware](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-middleware)
  - [.models](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-models)
  - [.plugins](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-plugins)
  - [.query()](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-query)
  - [.reload()](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-reload)
  - [.router](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-router)
  - [.server](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-server)
  - [.services](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-services)
  - [.start()](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-start)
  - [.stop()](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-stop)

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-admin)strapi.admin

This object contains the controllers, models, services and configurations contained in the `strapi-admin` package.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-api)strapi.api

This object contains APIs contained in the `./api` folder. And by using `strapi.api[:name]` you can access the controllers, services, the model definition and also the configurations of the `./api/:name` folder

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-app)strapi.app

Returns the Koa instance.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-config)strapi.config

Returns an object that represents the configurations of the project. Every JavaScript or JSON file located in the `./config` folder will be parsed into the `strapi.config` object.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-controllers)strapi.controllers

Returns an object of the controllers which is available in the project. Every JavaScript file located in the `./api/**/controllers` folder will be parsed into the `strapi.controllers` object. Thanks to this object, you can access every controller's actions everywhere in the project.

✏️ NOTE

This object doesn't include the admin's controllers and plugin's controllers.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-hook)strapi.hook

Returns an object of the hooks available in the project. Every folder that follows this pattern `strapi-*` and located in the `./node_modules` or `/hooks` folder will be mounted into the `strapi.hook` object.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-load)strapi.load

Returns a function that parses the configurations, hooks, middlewares and APIs of your app. It also loads the middlewares and hooks with the previously loaded configurations. This method could be useful to update references available through the `strapi` global variable without having to restart the server. However, without restarting the server, the new configurations will not be taken in account.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-log)strapi.log

Returns the Logger (Pino) instance.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-middleware)strapi.middleware

Returns an object of the middlewares available in the project. Every folder in the `./middlewares` folder will be also mounted into the `strapi.middleware` object.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-models)strapi.models

Returns an object of models available in the project. Every JavaScript or JSON file located in the `./api/**/models` folders will be parsed into the `strapi.models` object. Also every `strapi.models.**` object is merged with the model's instance returned by the ORM (Mongoose, Bookshelf). It allows to call the ORM methods through the `strapi.models.**` object (ex: `strapi.models.users.find()`).

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-plugins)strapi.plugins

Returns an object of plugins available within the project. Each plugin object contains the associated controllers, models, services and configurations.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-query)strapi.query

This utility function allows to bind models with query functions specific to each ORM (e.g: `mongoose` or `bookshelf`). For more details, see the [Queries section](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#queries).

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-reload)strapi.reload

Returns a function that reloads the entire app (with downtime).

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-router)strapi.router

Returns the Router (Joi router) instance.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-server)strapi.server

Returns the [`http.Server` (opens new window)](https://nodejs.org/api/http.md#http_class_http_server)instance.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-services)strapi.services

Returns an object of services available in the project. Every JavaScript file located in the `./api/**/services` folders will be parsed into the `strapi.services` object.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-start)strapi.start

Returns a function that loads the configurations, middlewares and hooks. Then, it executes the bootstrap file, freezes the global variable and listens the configured port.

## [#](https://strapi.io/documentation/developer-docs/latest/developer-resources/global-strapi/api-reference.html#strapi-stop)strapi.stop

Returns a function that shuts down the server and destroys the current connections.

# Frequently Asked Questions

Below are answers and solutions to most common issues that you may experience when working with Strapi.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#why-can-t-i-create-or-update-content-types-in-production-staging)Why can't I create or update content-types in production/staging?

Strapi stores model configuration files (what defines the model schema) in files such as `api/restaurant/models/restaurant.settings.json`. Due to how Node.js works, in order for changes to take effect, that would require Node to restart the server. This could potentially cause downtime of your production service and likewise these changes should be tracked in some kind of source control.

Generally your "flow" of development would follow the following path:

- Development - Develop your Strapi application locally on your host machine, then push changes into source control
- Staging - Deploy changes from source control to a "production-like" environment for testing
- Production - If no other changes are needed, deploy into production
- Repeat as needed, it is recommended that you properly version and test your application as you go

At this time and in the future there is no plan to allow model creating or updating while in a production environment, and there is currently no plans to move model settings into the database. There are no known nor recommended workarounds for this.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#does-strapi-handle-deploying-or-migrating-of-content)Does Strapi handle deploying or migrating of content?

Strapi does not currently provide any tools for migrating or deploying your data changes between different environments (_ie. from development to production_). With the exception being the Content-Manager settings, to read more about this option please see the following [CLI documentation](https://strapi.io/documentation/developer-docs/latest/developer-resources/cli/CLI.html#strapi-configuration-dump).

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#user-can-t-login-to-the-admin-panel)User can't login to the admin panel

With the release of the Strapi beta version a fundamental change occurred in that the "end-users" (REST and GraphQL users) were split from the Administrators (admin panel users) in such a way that normal users can not be given access to the admin panel. If you would like to read more on why this change was done, you can read the Strapi [blog post (opens new window)](https://strapi.io/blog/why-we-split-the-management-of-the-admin-users-and-end-users)about it.

Strapi has released the new Admin & Permissions (RBAC - Role based access control) that does allow for some degree of control over what users can access within the admin panel and includes some field level permissions. You can now also give roles specific permissions for things like content-types, single-types, plugins, and settings.

When this new plugin release, there is two versions:

- Community Edition
- Enterprise Edition

By default, the Community Edition includes 3 pre-defined roles (Administrators, Editor, Author). Upgrading to the Enterprise Edition will unlock an unlimited number of roles. There will be certain other field level permission limitations based on the edition and we will be building a detailed guide as to what is included within the "Basic" vs "Advanced" RBAC features. To learn more about what is included as well as pricing please see our [pricing page (opens new window)](https://strapi.io/pricing-self-hosted).

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#relations-aren-t-maintaining-their-sort-order)Relations aren't maintaining their sort order

With the components there is a hidden field called `order` that allows entries to maintain their sort, however with relations there is no such field. If you consider the typical count of of component entries vs relational based entries (in retrospect they function in the backend the same) there is generally a much higher number of relations. If relations were to have an `order` field applied to them as well it could cause significant performance degradation when trying to update the order, and likewise in the case where a relation could be attached to multiple entries it would be quite difficult to maintain the order.

For the time being there is no recommended way to handle this automatically and instead it may be required for you to create custom controllers to handle this within your own project.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#why-is-my-app-s-database-and-uploads-resetting-on-paas)Why is my app's database and uploads resetting on PaaS

If you used `--quickstart` to create your Strapi project, by default this uses the SQLite database. PaaS systems (Heroku, DigitalOcean Apps, Google App Engine, ect) file systems are typically [ephemeral (opens new window)](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem)or read-only meaning that each time a dyno (container) is reset all filesystem changes are lost. And since both SQLite and local uploads are stored on the filesystem, any changes made to these since the last dyno reset will be deleted. Typically dynos are reset at least once a day, and in most cases multiple times per day or when new code is pushed to these services.

It is recommended you use a database add-on like Heroku's PostgreSQL or use something like MongoDB's Atlas for your database. For file uploads, you will need to use one of the 3rd party providers such as Cloudinary or AWS S3.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#can-i-store-my-content-manager-layout-configurations-in-the-model-settings)Can I store my Content Manager layout configurations in the model settings

Currently Strapi does not support this, a `config:dump` and `config:restore` command has been added to make migration of these settings easier when moving between different deployments and environments.

We don't offer the ability to store these configurations in the model settings for several reasons:

- It will create conflicts in case of content internationalization and translations in the admin interface.
- The layout might be different according to the roles and permissions.
- While the model is the same whatever the content created, the contribution interface can be different. For instance, we have an idea to create a mobile application for contributors only. The labels and layout configurations could be different according the device & interface.

For all these reasons, and others, we think it'll be a mistake and might confuse users if we store the configuration in the model settings file. The final solution is to make the migration and deployment across environment easier.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#how-do-i-customize-a-plugin)How do I customize a plugin

Strapi uses a system called [extensions](https://strapi.io/documentation/developer-docs/latest/development/plugin-customization.html) as plugins are stored in the `node_modules` folder. Due to this extensions work by Strapi detecting newer versions of files and using that as a replacement for the ones stored within the `node_modules`. If you are familiar with React and "ejecting" a file, the concept is similar.

You gain the ability to modify these files without forking the plugin package, however you lose the ability to easily update. After each version release you will need to compare your changes to those in the new version and modify your version of the files accordingly.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#can-i-add-my-own-3rd-party-auth-provider)Can I add my own 3rd party auth provider

Yes, you can either follow the following [guide](https://strapi.io/documentation/developer-docs/latest/development/plugins/users-permissions.html#adding-a-new-provider-to-your-project) or you can take a look at the [users-permissions (opens new window)](https://github.com/strapi/strapi/tree/master/packages/strapi-plugin-users-permissions)and submit a pull request to include the provider for everyone. Eventually Strapi does plan to move from the current grant/purest provider to a split natured system similar to the upload providers.

There is currently no ETA on this migration however.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#does-strapi-allow-me-to-change-the-default-id-type-or-name)Does Strapi allow me to change the default ID type or name

No, currently does not have the ability to allow for changing the default id name nor does it allow you to switch the data type (such as UUID on bookshelf and integer on mongoose), support for this is being looked at for Strapi v4.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#can-you-filter-deep-filter-on-components-dynamic-zones-and-polymorphic-relations)Can you filter / deep filter on components, dynamic zones, and polymorphic relations

Currently it is not possible to filter on components, dynamic zones, or polymorphic relations. This is something we are looking into, if you want see more information please take a look at the following [GitHub issue (opens new window)](https://github.com/strapi/strapi/issues/5124).

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/troubleshooting.html#how-do-i-setup-ssl-with-strapi)How do I setup SSL with Strapi

Strapi implements no SSL solution natively, this is due to the fact that it is extremely insecure to directly offer a Node.js application to the public web on a low port.

On Linux based operating systems you need root permissions to bind to any port below 1024 and with typical SSL being port 443 you would need to run your application as root.

Likewise since Strapi is Node.js based, in order for changes with the SSL certificate to take place (say when it expires) you would need to restart your application for that change to take effect.

Due to these two issues, it is recommended you use a proxy application such as Nginx, Apache, Traefik, or many others to handle your edge routing to Strapi. There are settings in the environment [server.json](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#server) to handle upstream proxies. The proxy block requires all settings to be filled out and will modify any backend plugins such as authentication providers and the upload plugin to replace your standard `localhost:1337` with the proxy URL.

# Quick Start Guide

Strapi offers a lot of flexibility. Whether you want to go fast and quickly see the final result, or would rather dive deeper into the product, we got you covered.

PREREQUISITES

Make sure [Node.js and npm are properly installed](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/cli.html#preparing-the-installation) on your machine. It is also possible to use Yarn instead of npm (see [install the Yarn package (opens new window)](https://yarnpkg.com/en/)).

👇 Let's get started! Using the big buttons below, please choose between:

- the Hands-on path for a DIY approach to run your project
- or the Starters path for the quickest way to spin up a fullstack application powered by a Strapi back end.

Hands-on

Starters

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#%F0%9F%9A%80-part-a-create-a-new-project-with-strapi-starters)🚀 Part A: Create a new project with Strapi starters

Strapi [starters (opens new window)](https://strapi.io/starters)are the fastest way to kickstart your project. They cover many use cases (blog, e-commerce solution, corporate website, portfolio) and integrate with various technologies (Gatsby, Gridsome, Next, Nuxt).

This quick start guide has been specifically tailored to use the [Gatsby blog starter (opens new window)](https://strapi.io/starters/strapi-starter-gatsby-blog). We highly recommend you to follow along with this starter. Once you get a better understanding of Strapi, you will be able to play with other starters on your own.

### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-1-run-the-installation-script-2)Step 1: Run the installation script

To create a [Gatsby (opens new window)](https://www.gatsbyjs.com/)blog using Strapi, run the following command in a terminal:

npm

yarn

```
  npx create-strapi-starter my-project gatsby-blog

```

During the installation, when terminal asks `Choose your installation type`: select the default `Quickstart (recommended)` option by pressing Enter. The installation then resumes --- just let the magic happen!

### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-2-register-have-a-look-at-your-blog)Step 2: Register & have a look at your blog

Once the installation is complete, your browser automatically opens 2 tabs:

- The first tab ([http://localhost:1337/admin/auth/register-admin (opens new window)](http://localhost:1337/admin/auth/register-admin)) is the admin panel, it's for the back end of your application.
- The second tab ([http://localhost:8000 (opens new window)](http://localhost:8000/)) is for the front end of your application, and you can already see the Gatsby blog in action.

![](https://strapi.io/documentation/assets/img/qsg-starters-part1-01-register.3f64017d.png)![](https://strapi.io/documentation/assets/img/qsg-starters-part1-01-gatsby_fe.a0f78fbe.png)

By completing the form in the first tab, you create your own account. Once done, you become the first administator user of this Strapi application. Welcome aboard, commander!

CONGRATULATIONS! 🥳

Your blog is ready! You can start playing with Strapi and discover the product by yourself using our [User Guide](https://strapi.io/documentation/user-docs/latest/getting-started/introduction.html), or proceed to part B below.

Writing a blog is not your cup of tea? You can leave this guide and play with other [Starters (opens new window)](https://strapi.io/starters)on your own.

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#%F0%9F%8E%A8-part-b-play-with-your-content)🎨 Part B: Play with your content

Strapi [starters (opens new window)](https://strapi.io/starters)build a full stack application and a data structure for you, so you can start playing with your content faster.

We are about to contribute to the blog we have just created. Let's play with your application, by adding yourself as a writer and creating your own article, updating the homepage, and restarting the servers to look at the final result.

💡 TIP

If the Strapi server is not already running, in your terminal, `cd` into the `my-project` folder and run `npm run develop` (or `yarn develop`) to launch it.

### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-1-add-yourself-as-a-writer)Step 1: Add yourself as a writer

You have several ideas for great articles in mind. But first, the world needs to know who you are!

Click on [Collection types > Writers (opens new window)](http://localhost:1337/admin/plugins/content-manager/collectionType/application::writer.writer?page=1&pageSize=10&_sort=name:ASC)in the main navigation, and click the Add New Writers button.

![Screenshot: Create a new writer in admin panel](https://strapi.io/documentation/assets/img/qsg-starters-part2-01-writer.e46a371e.png)

1.  Add your *Name* and *Email* in the corresponding fields.
2.  Add your favorite selfie in the *Picture* field. You can either drag and drop an image or click the field and upload a file. Saying 'Cheese!' during the process is optional. 😄
3.  Click Save.

### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-2-write-publish-your-first-article)Step 2: Write & publish your first article

To write an article, we need to add a new entry to the "Articles" collection type and fill in a few fields.

![Animated GIF to create an article](https://strapi.io/documentation/assets/img/qsg-starters-part2-03-write_publish_article.a06d6ad3.gif)

Click on [Collection types > Articles (opens new window)](http://localhost:1337/admin/plugins/content-manager/collectionType/application::article.article?page=1&pageSize=10&_sort=title:ASC)in the main navigation, and click the Add New Articles button.

#### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#give-your-article-a-title-a-description-and-add-some-content)Give your article a title, a description, and add some content

1.  Type `Hello World!` in the *Title* field.
2.  Type `My very first article with Strapi` in the *Description* field.
3.  Write a few lines in the *Content* field. If you're lacking some inspiration, just type `This is my first blog article with Strapi and using it feels like a breeze!`.
4.  Scroll down and add a picture in the *Image* field.

#### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#choose-an-author-and-a-category-for-your-article)Choose an author and a category for your article

In the sidebar on the right, choose your name in the *Author* drop-down list. You have just signed your first article with Strapi. Take a few seconds to contemplate this historic moment!

While there, you might also want to choose a *Category* for your article from the list.

#### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#turn-your-draft-into-a-publication)Turn your draft into a publication

By default, your new article would be saved as a draft. Let's not be too shy and publish it right away.

To publish an article, click the Publish button at the top of the window.

You have just created and published your first article, "Hello World!". You can find it in the [Collection types > Articles (opens new window)](http://localhost:1337/admin/plugins/content-manager/collectionType/application::article.article?page=1&pageSize=10&_sort=id:DESC)view.

### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-3-update-the-homepage-single-type)Step 3: Update the `Homepage` single type

It's time to make this blog a bit more yours.

Click on [Single Types > Homepage (opens new window)](http://localhost:1337/admin/plugins/content-manager/singleType/application::homepage.homepage)in the main navigation. Let's edit this homepage:

1.  Replace the image in the *ShareImage* field.
2.  At the bottom of the page, update the *Title* to `My Wonderful Strapi Blog` in the *Hero* field group.
3.  Click Save.

### [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#step-4-restart-the-servers-to-reflect-latest-changes)Step 4: Restart the servers to reflect latest changes

Gatsby is a static-site generator. It means that you need to restart the servers for changes to appear on the front end:

1.  In your terminal, press `Ctrl-C` to stop the servers.
2.  Make sure you are in the `my-project` folder. If not, type `cd my-project` and press Enter.
3.  Restart the servers by typing `npm run develop` (or `yarn develop`) and press Enter.

After a few moments, you should see your blog with its updated title running at [http://localhost:8000 (opens new window)](http://localhost:8000/). The "Hello World!" article you have just created is also visible at the bottom of the page.

![GIF: Updated Gatsby blog front end](https://strapi.io/documentation/assets/img/qsg-starters-part2-04-restart_servers.8e72e782.gif)

CONGRATULATIONS! 🥳

Now you know how to use Strapi to create and update your blog. Keep on creating amazing content!

## [#](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#%E2%8F%A9-what-to-do-next-2)⏩ What to do next?

The beauty of using Strapi [starters (opens new window)](https://strapi.io/starters)is that the Strapi back end comes with a front end ready out-of-the-box. Now you probably want to show your shiny new website to the world! The next step is then to deploy both the Strapi back end and the front end on the platforms of your choice:

👉 You can deploy the Strapi back end on various services: Amazon AWS, Microsoft Azure, DigitalOcean, Google App Engine, Heroku, and many more (see our [Deployment guides](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html)).

👉 Deploying the front end mostly depends on the technology it's based on. The easiest way to deploy your Gatsby blog front end is probably to [deploy on Gatsby Cloud (opens new window)](https://support.gatsbyjs.com/hc/en-us/articles/360052324714-Connecting-to-Strapi).

🤓 To go further with starters

- Read more about the [starters CLI (opens new window)](https://strapi.io/blog/announcing-the-strapi-starter-cli)on our blog.
- Start another project! We have lots of other [Starters (opens new window)](https://strapi.io/starters)you can use to kickstart your blog, e-commerce, corporate website, or portfolio project.

# Project structure

By default, the structure of your Strapi project looks as shown below:

- `/.cache`: contains files used to build your admin panel.
- [`/admin`](https://strapi.io/documentation/developer-docs/latest/development/admin-customization.html): *(optional)* contains your admin customization files.
- `/api`: contains the business logic of your project split into sub-folders per API.
  - `**`
    - `/config`: contains the API's configurations ([`routes`](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#routing), [`policies`](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#policies), etc.).
    - [`/controllers`](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#controllers): contains the API's custom controllers.
    - [`/models`](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#models): contains the API's models.
    - [`/services`](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#services): contains the API's custom services.
- `/build`: contains your admin panel UI build.
- [`/config`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html)
  - [`/functions`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#functions): contains lifecycle or generic functions of the project.
    - [`/responses`](https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#requests-responses): contains custom responses.
      - `404.js`: contains a template for constructing your custom 404 message.
    - [`bootstrap.js`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap): contains the code executed at the application start.
    - [`cron.js`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks): contains the cron tasks.
  - [`server.js`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#server): contains the general configurations of the project.
  - [`database.js`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#database): contains the database configurations of the project.
- `/extensions`: contains the files to extend installed plugins.
- [`/hooks`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#hooks): contains the custom hooks of the project.
- [`/middlewares`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#middlewares): contains the custom middlewares of the project.
- [`/plugins`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#plugins): contains your local plugins.
- [`/public`](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#public-assets): contains the files accessible to the outside world.
- `/node_modules`: contains the npm packages used by the project.

If your Strapi project was created with the [starter CLI (opens new window)](https://strapi.io/blog/announcing-the-strapi-starter-cli), the project structure looks like this:

```
my-project
  /frontend # starter folder
  /backend  # template folder
  /node_modules

```

and the `backend` folder has the default structure described above.
