# About apps

You can build integrations with the GitHub APIs to add flexibility and reduce friction in your own workflow. You can also share integrations with others on [GitHub Marketplace](https://github.com/marketplace).

Apps on GitHub allow you to automate and improve your workflow. You can build apps to improve your workflow. You can also share or sell apps in [GitHub Marketplace](https://github.com/marketplace). To learn how to list an app on GitHub Marketplace, see "[Getting started with GitHub Marketplace](https://docs.github.com/en/marketplace/getting-started)."

GitHub Apps are the officially recommended way to integrate with GitHub because they offer much more granular permissions to access data, but GitHub supports both OAuth Apps and GitHub Apps. For information on choosing a type of app, see "[Differences between GitHub Apps and OAuth Apps](https://docs.github.com/en/developers/apps/differences-between-github-apps-and-oauth-apps)."

If you are using your app with GitHub Actions and want to modify workflow files, you must authenticate on behalf of the user with an OAuth token that includes the `workflow` scope. The user must have admin or write permission to the repository that contains the workflow file. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/en/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)."

For a walkthrough of the process of building a GitHub App, see "[Building Your First GitHub App](https://docs.github.com/en/apps/building-your-first-github-app)."

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps#about-github-apps)About GitHub Apps

GitHub Apps are first-class actors within GitHub. A GitHub App acts on its own behalf, taking actions via the API directly using its own identity, which means you don't need to maintain a bot or service account as a separate user.

GitHub Apps can be installed directly on organizations and user accounts and granted access to specific repositories. They come with built-in webhooks and narrow, specific permissions. When you set up your GitHub App, you can select the repositories you want it to access. For example, you can set up an app called `MyGitHub` that writes issues in the `octocat` repository and *only* the `octocat` repository. To install a GitHub App, you must be an organization owner or have admin permissions in a repository.

By default, only organization owners can manage the settings of GitHub Apps in an organization. To allow additional users to manage GitHub Apps in an organization, an owner can grant them GitHub App manager permissions. See "[GitHub App Managers](https://docs.github.com/en/articles/permission-levels-for-an-organization/#github-app-managers)" to learn how to add and remove GitHub App managers in your organization.

GitHub Apps are applications that need to be hosted somewhere. For step-by-step instructions that cover servers and hosting, see "[Building Your First GitHub App](https://docs.github.com/en/apps/building-your-first-github-app)."

To improve your workflow, you can create a GitHub App that contains multiple scripts or an entire application, and then connect that app to many other tools. For example, you can connect GitHub Apps to GitHub, Slack, other in-house apps you may have, email programs, or other APIs.

Keep these ideas in mind when creating GitHub Apps:

- A user or organization can own up to 100 GitHub Apps.

- A GitHub App should take actions independent of a user (unless the app is using a [user-to-server](https://docs.github.com/en/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) token). To keep user-to-server access tokens more secure, you can use access tokens that will expire after 8 hours, and a refresh token that can be exchanged for a new access token. For more information, see "[Refreshing user-to-server access tokens](https://docs.github.com/en/apps/building-github-apps/refreshing-user-to-server-access-tokens)."

- Make sure the GitHub App integrates with specific repositories.

- The GitHub App should connect to a personal account or an organization.

- Don't expect the GitHub App to know and do everything a user can.

- Don't use a GitHub App if you just need a "Login with GitHub" service. But a GitHub App can use a [user identification flow](https://docs.github.com/en/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps) to log users in *and* do other things.

- Don't build a GitHub App if you *only* want to act as a GitHub user and do everything that user can do.

- If you are using your app with GitHub Actions and want to modify workflow files, you must authenticate on behalf of the user with an OAuth token that includes the `workflow` scope. The user must have admin or write permission to the repository that contains the workflow file. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/en/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)."

To begin developing GitHub Apps, start with "[Creating a GitHub App](https://docs.github.com/en/apps/building-github-apps/creating-a-github-app)." To learn how to use GitHub App Manifests, which allow people to create preconfigured GitHub Apps, see "[Creating GitHub Apps from a manifest](https://docs.github.com/en/apps/building-github-apps/creating-github-apps-from-a-manifest)."

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps#about-oauth-apps)About OAuth Apps

OAuth2 is a protocol that lets external applications request authorization to private details in a user's GitHub account without accessing their password. This is preferred over Basic Authentication because tokens can be limited to specific types of data and can be revoked by users at any time.

Warning: Revoking all permission from an OAuth App deletes any SSH keys the application generated on behalf of the user, including [deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys).

An OAuth App uses GitHub as an identity provider to authenticate as the user who grants access to the app. This means when a user grants an OAuth App access, they grant permissions to *all* repositories they have access to in their account, and also to any organizations they belong to that haven't blocked third-party access.

Building an OAuth App is a good option if you are creating more complex processes than a simple script can handle. Note that OAuth Apps are applications that need to be hosted somewhere.

Keep these ideas in mind when creating OAuth Apps:

- A user or organization can own up to 100 OAuth apps.
- An OAuth App should always act as the authenticated GitHub user across all of GitHub (for example, when providing user notifications).
- An OAuth App can be used as an identity provider by enabling a "Login with GitHub" for the authenticated user.
- Don't build an OAuth App if you want your application to act on a single repository. With the `repo` OAuth scope, OAuth Apps can act on *all* of the authenticated user's repositories.
- Don't build an OAuth App to act as an application for your team or company. OAuth Apps authenticate as a single user, so if one person creates an OAuth App for a company to use, and then they leave the company, no one else will have access to it.
- If you are using your OAuth App with GitHub Actions and want to modify workflow files, your OAuth token must have the `workflow` scope and the user must have owner or write permission to the repository that contains the workflow file. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/en/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)."

For more on OAuth Apps, see "[Creating an OAuth App](https://docs.github.com/en/apps/building-oauth-apps/creating-an-oauth-app)" and "[Registering your app](https://docs.github.com/en/rest/guides/basics-of-authentication#registering-your-app)."

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps#personal-access-tokens)Personal access tokens

A [personal access token](https://docs.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) is a string of characters that functions similarly to an [OAuth token](https://docs.github.com/en/apps/building-oauth-apps/authorizing-oauth-apps) in that you can specify its permissions via [scopes](https://docs.github.com/en/apps/building-oauth-apps/understanding-scopes-for-oauth-apps). A personal access token is also similar to a password, but you can have many of them and you can revoke access to each one at any time.

As an example, you can enable a personal access token to write to your repositories. If then you run a cURL command or write a script that [creates an issue](https://docs.github.com/en/rest/reference/issues#create-an-issue) in your repository, you would pass the personal access token to authenticate. You can store the personal access token as an environment variable to avoid typing it every time you use it.

Keep these ideas in mind when using personal access tokens:

- Remember to use this token to represent yourself only.
- You can perform one-off cURL requests.
- You can run personal scripts.
- Don't set up a script for your whole team or company to use.
- Don't set up a shared user account to act as a bot user.
- Do set an expiration for your personal access tokens, to help keep your information secure.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps#determining-which-integration-to-build)Determining which integration to build

Before you get started creating integrations, you need to determine the best way to access, authenticate, and interact with the GitHub APIs. The following image offers some questions to ask yourself when deciding whether to use personal access tokens, GitHub Apps, or OAuth Apps for your integration.

![Intro to apps question flow](https://docs.github.com/assets/images/intro-to-apps-flow.png)

Consider these questions about how your integration needs to behave and what it needs to access:

- Will my integration act only as me, or will it act more like an application?
- Do I want it to act independently of me as its own entity?
- Will it access everything that I can access, or do I want to limit its access?
- Is it simple or complex? For example, personal access tokens are good for simple scripts and cURLs, whereas an OAuth App can handle more complex scripting.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps#requesting-support)Requesting support

For questions, bug reports, and discussions about GitHub Apps, OAuth Apps, and API development, explore the [GitHub API Development and Support Forum](https://github.community/c/github-api-development-and-support/37). The forum is moderated and maintained by GitHub staff, but questions posted to the forum are not guaranteed to receive a reply from GitHub staff.

Consider reaching out to [GitHub Support](https://github.com/contact) directly using the contact form for:

- guaranteed response from GitHub staff
- support requests involving sensitive data or private concerns
- feature requests
- feedback about GitHub products

# Activating optional features for apps

You can test new optional features for your GitHub Apps and OAuth Apps.

Warning: Optional features are subject to change.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/activating-optional-features-for-apps#activating--optional--features-for-github-apps)Activating optional features for GitHub Apps

1.  In the upper-right corner of any page, click your profile photo, then click Settings.![Settings icon in the user bar](https://docs.github.com/assets/images/settings/userbar-account-settings_post2dot12.png)
2.  In the left sidebar, click Developer settings.![Developer settings section](https://docs.github.com/assets/images/settings/developer_settings.png)
3.  Select the GitHub App you want to enable an optional feature for.
4.  In the left sidebar, click Optional Features.![Optional features tab](https://docs.github.com/assets/images/github-apps/optional-features-option.png)
5.  Next to the optional feature you want to enable for your app, click Opt-in.![Opt-in button to enable an optional feature](https://docs.github.com/assets/images/github-apps/enable-optional-features.png)

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/activating-optional-features-for-apps#activating--optional--features-for-oauth-apps)Activating optional features for OAuth Apps

1.  In the upper-right corner of any page, click your profile photo, then click Settings.![Settings icon in the user bar](https://docs.github.com/assets/images/settings/userbar-account-settings_post2dot12.png)
2.  In the left sidebar, click Developer settings.![Developer settings section](https://docs.github.com/assets/images/settings/developer_settings.png)
3.  In the left sidebar, click OAuth Apps.![OAuth Apps section](https://docs.github.com/assets/images/help/settings/developer-settings-oauth-apps.png)
4.  In the left sidebar, click Optional Features.![Optional features tab](https://docs.github.com/assets/images/github-apps/optional-features-option.png)
5.  Next to the optional feature you want to enable for your app, click Opt-in.![Opt-in button to enable an optional feature](https://docs.github.com/assets/images/github-apps/enable-optional-features.png)

# Differences between GitHub Apps and OAuth Apps

Understanding the differences between GitHub Apps and OAuth Apps will help you decide which app you want to create. An OAuth App acts as a GitHub user, whereas a GitHub App uses its own identity when installed on an organization or on repositories within an organization.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#who-can-install-github-apps-and-authorize-oauth-apps)Who can install GitHub Apps and authorize OAuth Apps?

You can install GitHub Apps in your personal account or organizations you own. If you have admin permissions in a repository, you can install GitHub Apps on organization accounts. If a GitHub App is installed in a repository and requires organization permissions, the organization owner must approve the application.

By default, only organization owners can manage the settings of GitHub Apps in an organization. To allow additional users to manage GitHub Apps in an organization, an owner can grant them GitHub App manager permissions. See "[GitHub App Managers](https://docs.github.com/en/articles/permission-levels-for-an-organization/#github-app-managers)" to learn how to add and remove GitHub App managers in your organization.

By contrast, users *authorize* OAuth Apps, which gives the app the ability to act as the authenticated user. For example, you can authorize an OAuth App that finds all notifications for the authenticated user. You can always revoke permissions from an OAuth App.

Warning: Revoking all permission from an OAuth App deletes any SSH keys the application generated on behalf of the user, including [deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys).

| GitHub Apps                                                                                                                                                                                                                                                      | OAuth Apps                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You must be an organization owner or have admin permissions in a repository to install a GitHub App on an organization. If a GitHub App is installed in a repository and requires organization permissions, the organization owner must approve the application. | You can authorize an OAuth app to have access to resources.                                                                                                                              |
| You can install a GitHub App on your personal repository.                                                                                                                                                                                                        | You can authorize an OAuth app to have access to resources.                                                                                                                              |
| You must be an organization owner, personal repository owner, or have admin permissions in a repository to uninstall a GitHub App and remove its access.                                                                                                         | You can delete an OAuth access token to remove access.                                                                                                                                   |
| You must be an organization owner or have admin permissions in a repository to request a GitHub App installation.                                                                                                                                                | If an organization application policy is active, any organization member can request to install an OAuth App on an organization. An organization owner must approve or deny the request. |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#what-can-github-apps-and-oauth-apps-access)What can GitHub Apps and OAuth Apps access?

Account owners can use a GitHub App in one account without granting access to another. For example, you can install a third-party build service on your employer's organization, but decide not to grant that build service access to repositories in your personal account. A GitHub App remains installed if the person who set it up leaves the organization.

An *authorized* OAuth App has access to all of the user's or organization owner's accessible resources.

| GitHub Apps                                                                                                                                                                            | OAuth Apps                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Installing a GitHub App grants the app access to a user or organization account's chosen repositories.                                                                                 | Authorizing an OAuth App grants the app access to the user's accessible resources. For example, repositories they can access.                                                                                                                                      |
| The installation token from a GitHub App loses access to resources if an admin removes repositories from the installation.                                                             | An OAuth access token loses access to resources when the user loses access, such as when they lose write access to a repository.                                                                                                                                   |
| Installation access tokens are limited to specified repositories with the permissions chosen by the creator of the app.                                                                | An OAuth access token is limited via scopes.                                                                                                                                                                                                                       |
| GitHub Apps can request separate access to issues and pull requests without accessing the actual contents of the repository.                                                           | OAuth Apps need to request the `repo` scope to get access to issues, pull requests, or anything owned by the repository.                                                                                                                                           |
| GitHub Apps aren't subject to organization application policies. A GitHub App only has access to the repositories an organization owner has granted.                                   | If an organization application policy is active, only an organization owner can authorize the installation of an OAuth App. If installed, the OAuth App gains access to anything visible to the token the organization owner has within the approved organization. |
| A GitHub App receives a webhook event when an installation is changed or removed. This tells the app creator when they've received more or less access to an organization's resources. | OAuth Apps can lose access to an organization or repository at any time based on the granting user's changing access. The OAuth App will not inform you when it loses access to a resource.                                                                        |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#token-based-identification)Token-based identification

Note: GitHub Apps can also use a user-based token. For more information, see "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/en/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."

| GitHub Apps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | OAuth Apps                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A GitHub App can request an installation access token by using a private key with a JSON web token format out-of-band.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | An OAuth app can exchange a request token for an access token after a redirect via a web request.                                                       |
| An installation token identifies the app as the GitHub Apps bot, such as @jenkins-bot.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | An access token identifies the app as the user who granted the token to the app, such as @octocat.                                                      |
| Installation tokens expire after a predefined amount of time (currently 1 hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | OAuth tokens remain active until they're revoked by the customer.                                                                                       |
| GitHub Apps making server-to-server requests use the installation's minimum rate limit of 5,000 requests per hour. Organization installations with more than 20 users receive another 50 requests per hour for each user. Installations that have more than 20 repositories receive another 50 requests per hour for each repository. The maximum rate limit for an installation is 12,500 requests per hour. Higher rate limits apply for GitHub Enterprise Cloud. For more information, see "[Rate limits for GitHub Apps](https://docs.github.com/en/developers/apps/rate-limits-for-github-apps)." | OAuth tokens use the user's rate limit of 5,000 requests per hour.                                                                                      |
| Rate limit increases can be granted both at the GitHub Apps level (affecting all installations) and at the individual installation level.                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Rate limit increases are granted per OAuth App. Every token granted to that OAuth App gets the increased limit.                                         |
| GitHub Apps can authenticate on behalf of the user, which is called user-to-server requests. The flow to authorize is the same as the OAuth App authorization flow. User-to-server tokens can expire and be renewed with a refresh token. For more information, see "[Refreshing user-to-server access tokens](https://docs.github.com/en/apps/building-github-apps/refreshing-user-to-server-access-tokens)" and "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/en/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)."                       | The OAuth flow used by OAuth Apps authorizes an OAuth App on behalf of the user. This is the same flow used in GitHub App user-to-server authorization. |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#requesting-permission-levels-for-resources)Requesting permission levels for resources

Unlike OAuth apps, GitHub Apps have targeted permissions that allow them to request access only to what they need. For example, a Continuous Integration (CI) GitHub App can request read access to repository content and write access to the status API. Another GitHub App can have no read or write access to code but still have the ability to manage issues, labels, and milestones. OAuth Apps can't use granular permissions.

| Access                                              | GitHub Apps (`read` or `write` permissions)               | OAuth Apps                                   |
| --------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------- |
| For access to public repositories                   | Public repository needs to be chosen during installation. | `public_repo` scope.                         |
| For access to repository code/contents              | Repository contents                                       | `repo` scope.                                |
| For access to issues, labels, and milestones        | Issues                                                    | `repo` scope.                                |
| For access to pull requests, labels, and milestones | Pull requests                                             | `repo` scope.                                |
| For access to commit statuses (for CI builds)       | Commit statuses                                           | `repo:status` scope.                         |
| For access to deployments and deployment statuses   | Deployments                                               | `repo_deployment` scope.                     |
| To receive events via a webhook                     | A GitHub App includes a webhook by default.               | `write:repo_hook` or `write:org_hook` scope. |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#repository-discovery)Repository discovery

| GitHub Apps                                                                                           | OAuth Apps                                                                                                                      |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Apps can look at `/installation/repositories` to see repositories the installation can access. | OAuth Apps can look at `/user/repos` for a user view or `/orgs/:org/repos` for an organization view of accessible repositories. |
| GitHub Apps receive webhooks when repositories are added or removed from the installation.            | OAuth Apps create organization webhooks for notifications when a new repository is created within an organization.              |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#webhooks)Webhooks

| GitHub Apps                                                                                                                                     | OAuth Apps                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| By default, GitHub Apps have a single webhook that receives the events they are configured to receive for every repository they have access to. | OAuth Apps request the webhook scope to create a repository webhook for each repository they need to receive events from.                                      |
| GitHub Apps receive certain organization-level events with the organization member's permission.                                                | OAuth Apps request the organization webhook scope to create an organization webhook for each organization they need to receive organization-level events from. |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#git-access)Git access

| GitHub Apps                                                                                                                                                                                                                                              | OAuth Apps                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Apps ask for repository contents permission and use your installation token to authenticate via [HTTP-based Git](https://docs.github.com/en/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | OAuth Apps ask for `write:public_key` scope and [Create a deploy key](https://docs.github.com/en/rest/reference/repos#create-a-deploy-key) via the API. You can then use that key to perform Git commands. |
| The token is used as the HTTP password.                                                                                                                                                                                                                  | The token is used as the HTTP username.                                                                                                                                                                    |

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts)Machine vs. bot accounts

Machine user accounts are OAuth-based user accounts that segregate automated systems using GitHub's user system.

Bot accounts are specific to GitHub Apps and are built into every GitHub App.

| GitHub Apps                                                                                   | OAuth Apps                                                                                           |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| GitHub App bots do not consume a GitHub Enterprise seat.                                      | A machine user account consumes a GitHub Enterprise seat.                                            |
| Because a GitHub App bot is never granted a password, a customer can't sign into it directly. | A machine user account is granted a username and password to be managed and secured by the customer. |

# Setting up your development environment to create a GitHub App

Learn the foundations for extending and building new GitHub Apps.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#introduction)Introduction

This guide will walk through the steps needed to configure a GitHub App and run it on a server. GitHub Apps require some setup steps to manage webhook events and connect the app registration on GitHub to your code. The app in this guide serves as a foundation that you can use to extend and build new GitHub Apps.

By the end of this guide you'll have registered a GitHub App and set up a web server to receive webhook events. You'll learn how to use a tool called Smee to capture webhook payloads and forward them to your local development environment. The template app you'll configure in this section won't do anything special yet, but it will serve as a framework you can use to start writing app code using the API or complete other [quickstart guides](https://docs.github.com/en/apps/quickstart-guides). You can check out successful examples of apps on [GitHub Marketplace](https://github.com/marketplace) and [Works with GitHub](https://github.com/works-with).

After completing this project you will understand how to authenticate as a GitHub App and an installation, and how those authentication methods are different.

Here are the steps you'll take to configure the template GitHub App:

1.  [Start a new Smee channel](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-1-start-a-new-smee-channel)
2.  [Register a new GitHub App](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-2-register-a-new-github-app)
3.  [Save your private key and App ID](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-3-save-your-private-key-and-app-id)
4.  [Prepare the runtime environment](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-4-prepare-the-runtime-environment)
5.  [Review the GitHub App template code](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-5-review-the-github-app-template-code)
6.  [Start the server](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-6-start-the-server)
7.  [Install the app on your account](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-7-install-the-app-on-your-account)

Note: This guide demonstrates the app development process using the Ruby programming language. However, there are many [flavors of Octokit](https://docs.github.com/en/rest/overview/libraries). If you prefer JavaScript, you can use [Probot](https://probot.github.io/) and [Node.js](https://octokit.github.io/rest.js/) to develop GitHub Apps.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#prerequisites)Prerequisites

You may find it helpful to have a basic understanding of the following:

- [GitHub Apps](https://docs.github.com/en/apps/about-apps)
- [Webhooks](https://docs.github.com/en/webhooks)
- [The Ruby programming language](https://www.ruby-lang.org/en/)
- [REST APIs](https://docs.github.com/en/rest)
- [Sinatra](http://sinatrarb.com/)

But you can follow along at any experience level. We'll link out to information you need along the way!

Before you begin, you'll need to clone the repository with the template code used in this quickstart. Open your Terminal app and find a directory where you'd like to store the code. Run this command to clone the [GitHub App template](https://github.com/github-developer/github-app-template) repository:

```
$ git clone https://github.com/github-developer/github-app-template.git
```

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-1-start-a-new-smee-channel)Step 1. Start a new Smee channel

To help GitHub send webhooks to your local machine without exposing it to the internet, you can use a tool called Smee. First, go to [https://smee.io](https://smee.io/) and click Start a new channel. If you're already comfortable with other tools that expose your local machine to the internet like [ngrok](https://dashboard.ngrok.com/get-started) or [localtunnel](https://localtunnel.github.io/www/), feel free to use those.

![The Smee new channel button](https://docs.github.com/assets/images/smee-new-channel.png)

Starting a new Smee channel creates a unique domain where GitHub can send webhook payloads. You'll need to know this domain for the next step. Here is an example of a unique domain at `https://smee.io/qrfeVRbFbffd6vD`:

![A Smee unique channel](https://docs.github.com/assets/images/smee-unique-domain.png)

Next, go back to the Terminal and follow these steps to run the Smee command-line interface (CLI) client:

Note: The following steps are slightly different than the "Use the CLI" instructions you'll see in your Smee channel page. You do not need to follow the "Use the Node.js client" or "Using Probot's built-in support" instructions.

1.  Install the client:

    ```
    $ npm install --global smee-client
    ```

2.  Run the client (replacing `https://smee.io/qrfeVRbFbffd6vD` with your own domain):

    ```
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    You should see output like the following:

    ```
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

The `smee --url <unique_channel>` command tells Smee to forward all webhook events received by the Smee channel to the Smee client running on your computer. The `--path /event_handler` option forwards events to the `/event_handler` route, which we'll cover in a [later section](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-5-review-the-github-app-template-code). The `--port 3000` option specifies port 3000, which is the port your server will be listening to. Using Smee, your machine does not need to be open to the public internet to receive webhooks from GitHub. You can also open that Smee URL in your browser to inspect webhook payloads as they come in.

We recommend leaving this Terminal window open and keeping Smee connected while you complete the rest of the steps in this guide. Although you *can* disconnect and reconnect the Smee client without losing your unique domain (unlike ngrok), you may find it easier to leave it connected and do other command-line tasks in a different Terminal window.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-2-register-a-new-github-app)Step 2. Register a new GitHub App

If you don't yet have a GitHub account, now is a [great time to join](https://github.com/join). Don't forget to verify your email before continuing! To register a new app, visit the [app settings page](https://github.com/settings/apps) in your GitHub profile, and click New GitHub App.

![GitHub website, showing the **New App**](https://docs.github.com/assets/images/new-app.png)

You'll see a form where you can enter details about your app. See "[Creating a GitHub App](https://docs.github.com/en/apps/building-github-apps/creating-a-github-app)" for general information about the fields on this page. For the purposes of this guide, you'll need to enter specific data in a few fields:

Note: You can always update these settings later to point to a hosted server.

- For the "Homepage URL", use the domain issued by Smee. For example:

  ![Form with Smee domain filled in for homepage URL](https://docs.github.com/assets/images/homepage-url.png)

- For the "Webhook URL", again use the domain issued by Smee. For example:

  ![Form with Smee domain filled in for webhook URL](https://docs.github.com/assets/images/webhook-url.png)

- For the "Webhook secret", create a password to secure your webhook endpoints. This should be something that only you (and GitHub, via this form) know. The secret is important because you will be receiving payloads from the public internet, and you'll use this secret to verify the webhook sender. Note that the GitHub App settings say the webhook secret is optional, which is true in most cases, but for the template app code to work, you must set a webhook secret.

  ![Form with webhook secret filled in](https://docs.github.com/assets/images/webhook-secret.png)

- On the Permissions & Webhooks page, you can specify a set of permissions for your app, which determines how much data your app has access to. Under the "Repository permissions" section, scroll down to "Metadata" and select `Access: Read-only`. If you decide to extend this template app, you can update these permissions later.

- At the bottom of the Permissions & Webhooks page, specify whether this is a private app or a public app. This refers to who can install it: just you, or anyone in the world? For now, leave the app as private by selecting Only on this account.

  ![GitHub App privacy](https://docs.github.com/assets/images/create_app.png)

Click Create GitHub App to create your app!

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-3-save-your-private-key-and-app-id)Step 3. Save your private key and App ID

After you create your app, you'll be taken back to the [app settings page](https://github.com/settings/apps). You have two more things to do here:

- Generate a private key for your app. This is necessary to authenticate your app later on. Scroll down on the page and click Generate a private key. Save the resulting PEM file (called something like *`app-name`*-_`date`_-private-key.pem) in a directory where you can find it again.

  ![The private key generation dialog](https://docs.github.com/assets/images/private_key.png)

- Note the app ID GitHub has assigned your app. You'll need this to prepare your runtime environment.

  ![Your app's ID number](https://docs.github.com/assets/images/app_id.png)

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-4-prepare-the-runtime-environment)Step 4. Prepare the runtime environment

To keep your information secure, we recommend putting all your app-related secrets in your computer's memory where your app can find them, rather than putting them directly in your code. A handy development tool called [dotenv](https://github.com/bkeepers/dotenv) loads project-specific environment variables from a `.env` file to `ENV`. Never check your `.env` file into GitHub. This is a local file that stores sensitive information that you don't want on the public internet. The `.env` file is already included in the repository's [`.gitignore`](https://docs.github.com/en/github/getting-started-with-github/ignoring-files) file to prevent that.

The template code you downloaded in the [Prerequisites section](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#prerequisites) already has an example file called `.env-example`. Rename the example file from `.env-example` to `.env` or create a copy of the `.env-example` file called `.env`. You haven't installed dotenv yet, but you will install it later in this quickstart when you run `bundle install`. Note: Quickstarts that reference the steps in this guide may include additional environment variables in the `.env-example` file. Reference the quickstart guide for the project you've cloned on GitHub for guidance setting those additional environment variables.

You need to add these variables to the `.env` file:

- _`GITHUB_PRIVATE_KEY`_: Add the private key you [generated and saved previously](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-3-save-your-private-key-and-app-id). Open the `.pem` file with a text editor or use the command line to display the contents of the file: `cat path/to/your/private-key.pem`. Copy the entire contents of the file as the value of `GITHUB_PRIVATE_KEY` in your `.env` file. Note: Because the PEM file is more than one line you'll need to add quotes around the value like the example below.
- _`GITHUB_APP_IDENTIFIER`_: Use the app ID you noted in the previous section.
- _`GITHUB_WEBHOOK_SECRET`_: Add your webhook secret.

Here is an example `.env` file:

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret

```

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-5-review-the-github-app-template-code)Step 5. Review the GitHub App template code

The template app code already contains some code that every GitHub App will need. This sections walks you through the code that already exists in the GitHub App template. There aren't any steps that you need to complete in this section. If you're already familiar with the template code, you can skip ahead to "[Step 6. Start the server](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-6-start-the-server)."

Open up the `template_server.rb` file in your favorite text editor. You'll see comments throughout this file that provide additional context for the template code. We recommend reading those comments carefully and even adding your own comments to accompany new code you write.

At the top of the file you'll see `set :port 3000`, which sets the port used when starting the web server to match the port you redirected your webhook payloads to in "[Step 1. Start a new Smee channel](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-1-start-a-new-smee-channel)."

The next code you'll see is the `class GHApp < Sinatra::Application` declaration. You'll write all of the code for your GitHub App inside this class.

Out of the box, the class in the template does the following things:

- [Read the environment variables](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#read-the-environment-variables)
- [Turn on logging](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#turn-on-logging)
- [Define a before filter](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-a-before-filter)
- [Define the route handler](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-a-route-handler)
- [Define the helper methods](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-the-helper-methods)

### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#read-the-environment-variables)Read the environment variables

The first thing that this class does is read the three environment variables you set in "[Step 4. Prepare the runtime environment](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-4-prepare-the-runtime-environment)" and store them in variables to use later:

```
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']

```

### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#turn-on-logging)Turn on logging

Next is a code block that enables logging during development, which is the default environment in Sinatra. This code turns on logging at the `DEBUG` level to show useful output in the Terminal while you are developing the app:

```
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end

```

### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-a-before-filter)Define a before filter

Sinatra uses [before filters](https://github.com/sinatra/sinatra#filters) that allow you to execute code before the route handler. The `before` block in the template calls four [helper methods](https://github.com/sinatra/sinatra#helpers). The template app defines those helper methods in a [later section](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-the-helper-methods).

```
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end

```

### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-a-route-handler)Define a route handler

An empty route is included in the template code. This code handles all `POST` requests to the `/event_handler` route. You won't write this event handler in this quickstart, but see the other [quickstart guides](https://docs.github.com/en/apps/quickstart-guides) for examples of how to extend this template app.

```
post '/event_handler' do

end

```

### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#define-the-helper-methods)Define the helper methods

The helper methods in this template do most of the heavy lifting. Four helper methods are defined in this section of the code.

#### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#handling-the-webhook-payload)Handling the webhook payload

The first method `get_payload_request` captures the webhook payload and converts it to JSON format, which makes accessing the payload's data much easier.

#### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#verifying-the-webhook-signature)Verifying the webhook signature

The second method `verify_webhook_signature` performs verification of the webhook signature to ensure that GitHub generated the event. To learn more about the code in the `verify_webhook_signature` helper method, see "[Securing your webhooks](https://docs.github.com/en/webhooks/securing)." If the webhooks are secure, this method will log all incoming payloads to your Terminal. The logger code is helpful in verifying your web server is working but you can always remove it later.

#### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#authenticating-as-a-github-app)Authenticating as a GitHub App

To make API calls, you'll be using the [Octokit library](http://octokit.github.io/octokit.rb/). Doing anything interesting with this library will require you, or rather your app, to authenticate. GitHub Apps have two methods of authentication:

- Authenticating as a GitHub App using a [JSON Web Token (JWT)](https://jwt.io/introduction).
- Authenticating as a specific installation of a GitHub App using an installation access token.

You'll learn about authenticating as an installation in the [next section](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#authenticating-as-an-installation).

[Authenticating as a GitHub App](https://docs.github.com/en/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) lets you do a couple of things:

- You can retrieve high-level management information about your GitHub App.
- You can request access tokens for an installation of the app.

For example, you would authenticate as a GitHub App to retrieve a list of the accounts (organization and personal) that have installed your app. But this authentication method doesn't allow you to do much with the API. To access a repository's data and perform operations on behalf of the installation, you need to authenticate as an installation. To do that, you'll need to authenticate as a GitHub App first to request an installation access token.

Before you can use the Octokit.rb library to make API calls, you'll need to initialize an [Octokit client](http://octokit.github.io/octokit.rb/Octokit/Client.html) authenticated as a GitHub App. The `authenticate_app` helper method does just that!

```
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end

```

The code above generates a [JSON Web Token (JWT)](https://jwt.io/introduction) and uses it (along with your app's private key) to initialize the Octokit client. GitHub checks a request's authentication by verifying the token with the app's stored public key. To learn more about how this code works, see "[Authenticating as a GitHub App](https://docs.github.com/en/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)."

#### [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#authenticating-as-an-installation)Authenticating as an installation

An *installation* refers to any user or organization account that has installed the app. Even if someone installs the app on more than one repository, it only counts as one installation because it's within the same account. The last helper method `authenticate_installation` initializes an [Octokit client](http://octokit.github.io/octokit.rb/Octokit/Client.html) authenticated as an installation. This Octokit client is what you'd use to make authenticated API calls.

```
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end

```

The [`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) Octokit method creates an installation token. This method accepts two arguments:

- Installation (integer): The ID of a GitHub App installation
- Options (hash, defaults to `{}`): A customizable set of options

Any time a GitHub App receives a webhook, it includes an `installation` object with an `id`. Using the client authenticated as a GitHub App, you pass this ID to the `create_app_installation_access_token` method to generate an access token for each installation. Since you're not passing any options to the method, the options default to an empty hash. If you look back at [the docs](https://docs.github.com/en/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation), you can see the response for `create_app_installation_access_token` includes two fields: `token` and `expired_at`. The template code selects the token in the response and initializes an installation client.

With this method in place, each time your app receives a new webhook payload, it creates a client for the installation that triggered the event. This authentication process enables your GitHub App to work for all installations on any account.

Now you're ready to start making API calls!

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-6-start-the-server)Step 6. Start the server

Your app doesn't *do* anything yet, but at this point, you can get it running on the server.

Keep Smee running in the current tab in your Terminal. Open a new tab and `cd` into the directory where you [cloned the template app code](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#prerequisites). The Ruby code in this repository will start up a [Sinatra](http://sinatrarb.com/) web server. This code has a few dependencies. You can install these by running:

```
$ gem install bundler
```

Followed by:

```
$ bundle install
```

With the dependencies installed, you can start the server:

```
$ bundle exec ruby template_server.rb
```

You should see a response like:

```
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

If you see an error, make sure you've created the `.env` file in the directory that contains `template_server.rb`.

Once the server is running, you can test it by going to `http://localhost:3000` in your browser. If the app works as expected, you'll see a helpful error page:

![Sinatra's 404 error page](https://docs.github.com/assets/images/sinatra-404.png)

This is good! Even though it's an error page, it's a *Sinatra* error page, which means your app is connected to the server as expected. You're seeing this message because you haven't given the app anything else to show.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-7-install-the-app-on-your-account)Step 7. Install the app on your account

You can test that the server is listening to your app by triggering an event for it to receive. A simple event you can test is installing the app on your GitHub account, which should send the [`installation`](https://docs.github.com/en/webhooks/event-payloads/#installation) event. If the app receives it, you should see some output in the Terminal tab where you started `template_server.rb`.

To install the app, visit the [app settings page](https://github.com/settings/apps), choose your app, and click Install App in the sidebar. Next to your username, click Install.

You'll be asked whether to install the app on all repositories or selected repositories. If you don't want to install the app on *all* of your repositories, that's okay! You may want to create a sandbox repository for testing purposes and install your app there.

![App installation permissions](https://docs.github.com/assets/images/install_permissions.png)

After you click Install, look at the output in your Terminal. You should see something like this:

```
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

This is good news! It means your app received a notification that it was installed on your GitHub account. If you see something like this, your app is running on the server as expected. 🙌

If you don't see the output, make sure Smee is running correctly in another Terminal tab. If you need to restart Smee, note that you'll also need to *uninstall* and *reinstall* the app to send the `installation` event to your app again and see the output in Terminal. If Smee isn't the problem, see the "[Troubleshooting](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#troubleshooting)" section for other ideas.

If you're wondering where the Terminal output above is coming from, it's written in the [app template code](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#prerequisites) in `template_server.rb`.

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#troubleshooting)Troubleshooting

Here are a few common problems and some suggested solutions. If you run into any other trouble, you can ask for help or advice in the [GitHub API Development and Support Forum](https://github.community/c/github-api-development-and-support/37).

- Q: When I try to install the Smee command-line client, I get the following error:

  ```
  > npm: command not found
  ```

  A: Looks like you don't have npm installed. The best way to install it is to download the Node.js package at [https://nodejs.org](https://nodejs.org/) and follow the installation instructions for your system. npm will be installed alongside Node.js.

- Q: When I run the server, I get the following error:

  ```
  > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
  ```

  A: You probably haven't set up your private key environment variable quite right. Your `GITHUB_PRIVATE_KEY` variable should look like this:

  ```
  GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
  ...
  HkVN9...
  ...
  -----END RSA PRIVATE KEY-----"

  ```

  Double-check that you've copied the correct public key into your `.env` file.

- Q: When I run the server, it crashes with this error:

  ```
  > Octokit::Unauthorized ... 401 - Bad credentials`
  ```

  A: You may be authenticated as a GitHub App but not as an installation. Make sure you follow all the steps under "[Authenticate as an installation](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#authenticating-as-an-installation)," and use the `@installation_client` instance variable (authenticated with an installation access token) for your API operations, not the `@app_client` instance variable (authenticated with a JWT). The `@app_client` can only retrieve high-level information about your app and obtain installation access tokens. It can't do much else in the API.

- Q: My server isn't listening to events! The Smee client is running in a Terminal window, and I'm installing the app on a repository on GitHub, but I don't see any output in the Terminal window where I'm running the server.

  A: You may not be running the Smee client, running the Smee command with the wrong parameters or you may not have the correct Smee domain in your GitHub App settings. First check to make sure the Smee client is running in a Terminal tab. If that's not the problem, visit your [app settings page](https://github.com/settings/apps) and check the fields shown in "[Step 2. Register a new GitHub App](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-2-register-a-new-github-app)." Make sure the domain in those fields matches the domain you used in your `smee -u <unique_channel>` command in "[Step 1. Start a new Smee channel](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#step-1-start-a-new-smee-channel)." If none of the above work, check that you are running the full Smee command including the `--path` and `--port` options, for example: `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` (replacing `https://smee.io/qrfeVRbFbffd6vD` with your own Smee domain).

- Q: I'm getting an `Octokit::NotFound` 404 error in my debug output:

  ```
  2018-12-06 15:00:56 - Octokit::NotFound - POST https://api.github.com/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:

  ```

  A: Ensure the variables in your `.env` file are correct. Make sure that you have not set identical variables in any other environment variable files like `bash_profile`. You can check the environment variables your app is using by adding `puts` statements to your app code and re-running the code. For example, to ensure you have the correct private key set, you could add `puts PRIVATE_KEY` to your app code:

  ```
  PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
  puts PRIVATE_KEY

  ```

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#conclusion)Conclusion

After walking through this guide, you've learned the basic building blocks for developing GitHub Apps! To review, you:

- Registered a new GitHub App
- Used Smee to receive webhook payloads
- Ran a simple web server via Sinatra
- Authenticated as a GitHub App
- Authenticated as an installation

## [](https://docs.github.com/en/developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app#next-steps)Next steps

You now have a GitHub App running on a server. It doesn't do anything special yet, but check out some of the ways you can customize your GitHub App template in the other [quickstart guides](https://docs.github.com/en/apps/quickstart-guides).
