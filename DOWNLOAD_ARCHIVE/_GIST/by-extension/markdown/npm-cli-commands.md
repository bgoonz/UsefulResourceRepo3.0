---
section: cli-commands
title: npm-access
description: Set access level on published packages
---

# npm-access(1)

## Set access level on published packages

### Synopsis

```bash
npm access public [<package>]
npm access restricted [<package>]

npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]

npm access 2fa-required [<package>]
npm access 2fa-not-required [<package>]

npm access ls-packages [<user>|<scope>|<scope:team>]
npm access ls-collaborators [<package> [<user>]]
npm access edit [<package>]
```

### Description

Used to set access controls on private packages.

For all of the subcommands, `npm access` will perform actions on the packages
in the current working directory if no package name is passed to the
subcommand.

- public / restricted:
  Set a package to be either publicly accessible or restricted.

- grant / revoke:
  Add or remove the ability of users and teams to have read-only or read-write
  access to a package.

- 2fa-required / 2fa-not-required:
  Configure whether a package requires that anyone publishing it have two-factor
  authentication enabled on their account.

- ls-packages:
  Show all of the packages a user or a team is able to access, along with the
  access level, except for read-only public packages (it won't print the whole
  registry listing)

- ls-collaborators:
  Show all of the access privileges for a package. Will only show permissions
  for packages to which you have at least read access. If `<user>` is passed in,
  the list is filtered only to teams _that_ user happens to belong to.

- edit:
  Set the access privileges for a package at once using `$EDITOR`.

### Details

`npm access` always operates directly on the current registry, configurable
from the command line using `--registry=<registry url>`.

Unscoped packages are _always public_.

Scoped packages _default to restricted_, but you can either publish them as
public using `npm publish --access=public`, or set their access as public using
`npm access public` after the initial publish.

You must have privileges to set the access of a package:

- You are an owner of an unscoped or scoped package.
- You are a member of the team that owns a scope.
- You have been given read-write privileges for a package, either as a member
  of a team or directly as an owner.

If you have two-factor authentication enabled then you'll have to pass in an
otp with `--otp` when making access changes.

If your account is not paid, then attempts to publish scoped packages will fail
with an HTTP 402 status code (logically enough), unless you use
`--access=public`.

Management of teams and team memberships is done with the `npm team` command.

### See Also

- [`libnpmaccess`](https://npm.im/libnpmaccess)
- [npm team](/cli-commands/npm-team)
- [npm publish](/cli-commands/npm-publish)
- [npm config](/cli-commands/npm-config)
- [npm registry](/using-npm/registry)

---

section: cli-commands
title: npm-adduser
description: Set access level on published packages

---

# npm-adduser(1)

## Add a registry user account

### Synopsis

```bash
npm adduser [--registry=url] [--scope=@orgname] [--always-auth] [--auth-type=legacy]

aliases: login, add-user
```

### Description

Create or verify a user named `<username>` in the specified registry, and
save the credentials to the `.npmrc` file. If no registry is specified,
the default registry will be used (see [`config`](/using-npm/config)).

The username, password, and email are read in from prompts.

To reset your password, go to <https://www.npmjs.com/forgot>

To change your email address, go to <https://www.npmjs.com/email-edit>

You may use this command multiple times with the same user account to
authorize on a new machine. When authenticating on a new machine,
the username, password and email address must all match with
your existing record.

`npm login` is an alias to `adduser` and behaves exactly the same way.

### Configuration

#### registry

Default: https://registry.npmjs.org/

The base URL of the npm package registry. If `scope` is also specified,
this registry will only be used for packages with that scope. `scope` defaults
to the scope of the project directory you're currently in, if any. See [`scope`](/using-npm/scope).

#### scope

Default: none

If specified, the user and login credentials given will be associated
with the specified scope. See [`scope`](/using-npm/scope). You can use both at the same time,
e.g.

```bash
    npm adduser --registry=http://myregistry.example.com --scope=@myco
```

This will set a registry for the given scope and login or create a user for
that registry at the same time.

#### always-auth

Default: false

If specified, save configuration indicating that all requests to the given
registry should include authorization information. Useful for private
registries. Can be used with `--registry` and / or `--scope`, e.g.

```bash
    npm adduser --registry=http://private-registry.example.com --always-auth
```

This will ensure that all requests to that registry (including for tarballs)
include an authorization header. This setting may be necessary for use with
private registries where metadata and package tarballs are stored on hosts with
different hostnames. See `always-auth` in [`config`](/using-npm/config) for more details on always-auth. Registry-specific configuration of `always-auth` takes precedence over any global configuration.

#### auth-type

- Default: `'legacy'`
- Type: `'legacy'`, `'sso'`, `'saml'`, `'oauth'`

What authentication strategy to use with `adduser`/`login`. Some npm registries
(for example, npmE) might support alternative auth strategies besides classic
username/password entry in legacy npm.

### See Also

- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm owner](/cli-commands/npm-owner)
- [npm whoami](/cli-commands/npm-whoami)

---

section: cli-commands
title: npm-audit
description: Run a security audit

---

# npm-audit(1)

## Run a security audit

### Synopsis

```bash
npm audit [--json|--parseable|--audit-level=(low|moderate|high|critical)]
npm audit fix [--force|--package-lock-only|--dry-run]

common options: [--production] [--only=(dev|prod)]
```

### Examples

Scan your project for vulnerabilities and automatically install any compatible
updates to vulnerable dependencies:

```bash
$ npm audit fix
```

Run `audit fix` without modifying `node_modules`, but still updating the
pkglock:

```bash
$ npm audit fix --package-lock-only
```

Skip updating `devDependencies`:

```bash
$ npm audit fix --only=prod
```

Have `audit fix` install semver-major updates to toplevel dependencies, not just
semver-compatible ones:

```bash
$ npm audit fix --force
```

Do a dry run to get an idea of what `audit fix` will do, and _also_ output
install information in JSON format:

```bash
$ npm audit fix --dry-run --json
```

Scan your project for vulnerabilities and just show the details, without fixing
anything:

```bash
$ npm audit
```

Get the detailed audit report in JSON format:

```bash
$ npm audit --json
```

Get the detailed audit report in plain text result, separated by tab characters, allowing for
future reuse in scripting or command line post processing, like for example, selecting
some of the columns printed:

```bash
$ npm audit --parseable
```

To parse columns, you can use for example `awk`, and just print some of them:

```bash
$ npm audit --parseable | awk -F $'\t' '{print $1,$4}'
```

Fail an audit only if the results include a vulnerability with a level of moderate or higher:

```bash
$ npm audit --audit-level=moderate
```

### Description

The audit command submits a description of the dependencies configured in
your project to your default registry and asks for a report of known
vulnerabilities. The report returned includes instructions on how to act on
this information. The command will exit with a 0 exit code if no
vulnerabilities were found.

You can also have npm automatically fix the vulnerabilities by running `npm audit fix`. Note that some vulnerabilities cannot be fixed automatically and
will require manual intervention or review. Also note that since `npm audit fix`
runs a full-fledged `npm install` under the hood, all configs that apply to the
installer will also apply to `npm install` -- so things like `npm audit fix --package-lock-only` will work as expected.

By default, the audit command will exit with a non-zero code if any vulnerability
is found. It may be useful in CI environments to include the `--audit-level` parameter
to specify the minimum vulnerability level that will cause the command to fail. This
option does not filter the report output, it simply changes the command's failure
threshold.

### Content Submitted

- npm_version
- node_version
- platform
- node_env
- A scrubbed version of your package-lock.json or npm-shrinkwrap.json

#### Scrubbing

In order to ensure that potentially sensitive information is not included in
the audit data bundle, some dependencies may have their names (and sometimes
versions) replaced with opaque non-reversible identifiers. It is done for
the following dependency types:

- Any module referencing a scope that is configured for a non-default
  registry has its name scrubbed. (That is, a scope you did a `npm login --scope=@ourscope` for.)
- All git dependencies have their names and specifiers scrubbed.
- All remote tarball dependencies have their names and specifiers scrubbed.
- All local directory and tarball dependencies have their names and specifiers scrubbed.

The non-reversible identifiers are a sha256 of a session-specific UUID and the
value being replaced, ensuring a consistent value within the payload that is
different between runs.

### Exit Code

The `npm audit` command will exit with a 0 exit code if no vulnerabilities were found.

If vulnerabilities were found the exit code will depend on the `audit-level`
configuration setting.

### See Also

- [npm install](/cli-commands/npm-install)
- [package-locks](/configuring-npm/package-locks)
- [config](/using-npm/config)

---

section: cli-commands
title: npm-bin
description: Display npm bin folder

---

# npm-bin(1)

## Display npm bin folder

### Synopsis

```bash
npm bin [-g|--global]
```

### Description

Print the folder where npm will install executables.

### See Also

- [npm prefix](/cli-commands/npm-prefix)
- [npm root](/cli-commands/npm-root)
- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-bugs
description: Bugs for a package in a web browser maybe

---

# npm-bugs(1)

## Bugs for a package in a web browser maybe

### Synopsis

```bash
npm bugs [<pkgname>]

aliases: issues
```

### Description

This command tries to guess at the likely location of a package's
bug tracker URL, and then tries to open it using the `--browser`
config param. If no package name is provided, it will search for
a `package.json` in the current folder and use the `name` property.

### Configuration

#### browser

- Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
- Type: String

The browser that is called by the `npm bugs` command to open websites.

#### registry

- Default: https://registry.npmjs.org/
- Type: url

The base URL of the npm package registry.

### See Also

- [npm docs](/cli-commands/npm-docs)
- [npm view](/cli-commands/npm-view)
- [npm publish](/cli-commands/npm-publish)
- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [package.json](/configuring-npm/package-json)

---

section: cli-commands
title: npm-build
description: Build a package

---

# npm-build(1)

## Build a package

### Synopsis

```shell
npm build [<package-folder>]
```

- `<package-folder>`:
  A folder containing a `package.json` file in its root.

### Description

This is the plumbing command called by `npm link` and `npm install`.

It should generally be called during installation, but if you need to run it
directly, run:

```bash
    npm run-script build
```

### See Also

- [npm install](/cli-commands/npm-install)
- [npm link](/cli-commands/npm-link)
- [npm scripts](/using-npm/scripts)
- [package.json](/configuring-npm/package-json)

---

section: cli-commands
title: npm-bundle
description: REMOVED

---

# npm-bundle(1)

## REMOVED

### Description

The `npm bundle` command has been removed in 1.0, for the simple reason
that it is no longer necessary, as the default behavior is now to
install packages into the local space.

Just use `npm install` now to do what `npm bundle` used to do.

### See Also

- [npm install](/cli-commands/npm-install)

---

section: cli-commands
title: npm-cache
description: Manipulates packages cache

---

# npm-cache(1)

## Manipulates packages cache

### Synopsis

```bash
npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <name>@<version>

npm cache clean [<path>]
aliases: npm cache clear, npm cache rm

npm cache verify
```

### Description

Used to add, list, or clean the npm cache folder.

- add:
  Add the specified package to the local cache. This command is primarily
  intended to be used internally by npm, but it can provide a way to
  add data to the local installation cache explicitly.

- clean:
  Delete all data out of the cache folder.

- verify:
  Verify the contents of the cache folder, garbage collecting any unneeded data,
  and verifying the integrity of the cache index and all cached data.

### Details

npm stores cache data in an opaque directory within the configured `cache`,
named `_cacache`. This directory is a `cacache`-based content-addressable cache
that stores all http request data as well as other package-related data. This
directory is primarily accessed through `pacote`, the library responsible for
all package fetching as of npm@5.

All data that passes through the cache is fully verified for integrity on both
insertion and extraction. Cache corruption will either trigger an error, or
signal to `pacote` that the data must be refetched, which it will do
automatically. For this reason, it should never be necessary to clear the cache
for any reason other than reclaiming disk space, thus why `clean` now requires
`--force` to run.

There is currently no method exposed through npm to inspect or directly manage
the contents of this cache. In order to access it, `cacache` must be used
directly.

npm will not remove data by itself: the cache will grow as new packages are
installed.

### A note about the cache's design

The npm cache is strictly a cache: it should not be relied upon as a persistent
and reliable data store for package data. npm makes no guarantee that a
previously-cached piece of data will be available later, and will automatically
delete corrupted contents. The primary guarantee that the cache makes is that,
if it does return data, that data will be exactly the data that was inserted.

To run an offline verification of existing cache contents, use `npm cache verify`.

### Configuration

#### cache

Default: `~/.npm` on Posix, or `%AppData%/npm-cache` on Windows.

The root cache folder.

### See Also

- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm install](/cli-commands/npm-install)
- [npm publish](/cli-commands/npm-publish)
- [npm pack](/cli-commands/npm-pack)
- https://npm.im/cacache
- https://npm.im/pacote

---

section: cli-commands
title: npm-ci
description: Install a project with a clean slate

---

# npm-ci(1)

## Install a project with a clean slate

### Synopsis

```bash
npm ci
```

### Example

Make sure you have a package-lock and an up-to-date install:

```bash
$ cd ./my/npm/project
$ npm install
added 154 packages in 10s
$ ls | grep package-lock
```

Run `npm ci` in that project

```bash
$ npm ci
added 154 packages in 5s
```

Configure Travis to build using `npm ci` instead of `npm install`:

```bash
# .travis.yml
install:
- npm ci
# keep the npm cache around to speed up installs
cache:
  directories:
  - "$HOME/.npm"
```

### Description

This command is similar to [`npm install`](/cli-commands/npm-install), except it's meant to be used in
automated environments such as test platforms, continuous integration, and
deployment -- or any situation where you want to make sure you're doing a clean
install of your dependencies. It can be significantly faster than a regular npm
install by skipping certain user-oriented features. It is also more strict than
a regular install, which can help catch errors or inconsistencies caused by the
incrementally-installed local environments of most npm users.

In short, the main differences between using `npm install` and `npm ci` are:

- The project **must** have an existing `package-lock.json` or `npm-shrinkwrap.json`.
- If dependencies in the package lock do not match those in `package.json`, `npm ci` will exit with an error, instead of updating the package lock.
- `npm ci` can only install entire projects at a time: individual dependencies cannot be added with this command.
- If a `node_modules` is already present, it will be automatically removed before `npm ci` begins its install.
- It will never write to `package.json` or any of the package-locks: installs are essentially frozen.

### See Also

- [npm install](/cli-commands/npm-install)
- [package-locks](/configuring-npm/package-locks)

---

section: cli-commands
title: npm-completion
description: Tab Completion for npm

---

# npm-completion(1)

## Tab Completion for npm

### Synopsis

```bash
source <(npm completion)
```

### Description

Enables tab-completion in all npm commands.

The synopsis above
loads the completions into your current shell. Adding it to
your ~/.bashrc or ~/.zshrc will make the completions available
everywhere:

```bash
npm completion >> ~/.bashrc
npm completion >> ~/.zshrc
```

You may of course also pipe the output of `npm completion` to a file
such as `/usr/local/etc/bash_completion.d/npm` or
`/etc/bash_completion.d/npm` if you have a system that will read
that file for you.

When `COMP_CWORD`, `COMP_LINE`, and `COMP_POINT` are defined in the
environment, `npm completion` acts in "plumbing mode", and outputs
completions based on the arguments.

### See Also

- [npm developers](/using-npm/developers)
- [npm](/cli-commands/npm)

---

section: cli-commands
title: npm-config
description: Manage the npm configuration files

---

# npm-config(1)

## Manage the npm configuration files

### Synopsis

```bash
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list [-l] [--json]
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]

aliases: c
```

### Description

npm gets its config settings from the command line, environment
variables, `npmrc` files, and in some cases, the `package.json` file.

See [npmrc](/configuring-npm/npmrc) for more information about the npmrc files.

See [config](/using-npm/config) for a more thorough discussion of the mechanisms
involved.

The `npm config` command can be used to update and edit the contents
of the user and global npmrc files.

### Sub-commands

Config supports the following sub-commands:

#### set

```bash
npm config set key value
```

Sets the config key to the value.

If value is omitted, then it sets it to "true".

#### get

```bash
npm config get key
```

Echo the config value to stdout.

#### list

```bash
npm config list
```

Show all the config settings. Use `-l` to also show defaults. Use `--json`
to show the settings in json format.

#### delete

```bash
npm config delete key
```

Deletes the key from all configuration files.

#### edit

```bash
npm config edit
```

Opens the config file in an editor. Use the `--global` flag to edit the
global config.

### See Also

- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [package.json](/configuring-npm/package-json)
- [npmrc](/configuring-npm/npmrc)
- [npm](/cli-commands/npm)

---

section: cli-commands
title: npm-dedupe
description: Reduce duplication

---

# npm-dedupe(1)

## Reduce duplication

### Synopsis

```bash
npm dedupe
npm ddp

aliases: find-dupes, ddp
```

### Description

Searches the local package tree and attempts to simplify the overall
structure by moving dependencies further up the tree, where they can
be more effectively shared by multiple dependent packages.

For example, consider this dependency graph:

```bash
a
+-- b <-- depends on c@1.0.x
|   `-- c@1.0.3
`-- d <-- depends on c@~1.0.9
    `-- c@1.0.10
```

In this case, `npm dedupe` will transform the tree to:

```bash
a
+-- b
+-- d
`-- c@1.0.10
```

Because of the hierarchical nature of node's module lookup, b and d
will both get their dependency met by the single c package at the root
level of the tree.

The deduplication algorithm walks the tree, moving each dependency as far
up in the tree as possible, even if duplicates are not found. This will
result in both a flat and deduplicated tree.

If a suitable version exists at the target location in the tree
already, then it will be left untouched, but the other duplicates will
be deleted.

Arguments are ignored. Dedupe always acts on the entire tree.

Modules

Note that this operation transforms the dependency tree, but will never
result in new modules being installed.

### See Also

- [npm ls](/cli-commands/npm-ls)
- [npm update](/cli-commands/npm-update)
- [npm install](/cli-commands/npm-install)

---

section: cli-commands
title: npm-deprecate
description: Deprecate a version of a package

---

# npm-deprecate(1)

## Deprecate a version of a package

### Synopsis

```bash
npm deprecate <pkg>[@<version>] <message>
```

### Description

This command will update the npm registry entry for a package, providing
a deprecation warning to all who attempt to install it.

It works on [version ranges](https://semver.npmjs.com/) as well as specific
versions, so you can do something like this:

```bash
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

Note that you must be the package owner to deprecate something. See the
`owner` and `adduser` help topics.

To un-deprecate a package, specify an empty string (`""`) for the `message`
argument. Note that you must use double quotes with no space between them to
format an empty string.

### See Also

- [npm publish](/cli-commands/npm-publish)
- [npm registry](/using-npm/registry)

---

section: cli-commands
title: npm-dist-tag
description: Modify package distribution tags

---

# npm-dist-tag(1)

## Modify package distribution tags

### Synopsis

```bash
npm dist-tag add <pkg>@<version> [<tag>]
npm dist-tag rm <pkg> <tag>
npm dist-tag ls [<pkg>]

aliases: dist-tags
```

### Description

Add, remove, and enumerate distribution tags on a package:

- add:
  Tags the specified version of the package with the specified tag, or the
  `--tag` config if not specified. If you have two-factor authentication on
  auth-and-writes then you’ll need to include a one-time password on the
  command line with `--otp <one-time password>`.

- rm:
  Clear a tag that is no longer in use from the package.

- ls:
  Show all of the dist-tags for a package, defaulting to the package in
  the current prefix. This is the default action if none is specified.

A tag can be used when installing packages as a reference to a version instead
of using a specific version number:

```bash
npm install <name>@<tag>
```

When installing dependencies, a preferred tagged version may be specified:

```bash
npm install --tag <tag>
```

This also applies to `npm dedupe`.

Publishing a package sets the `latest` tag to the published version unless the
`--tag` option is used. For example, `npm publish --tag=beta`.

By default, `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the `latest` tag.

### Purpose

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream,
e.g., `stable`, `beta`, `dev`, `canary`.

By default, the `latest` tag is used by npm to identify the current version of
a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the `latest` tag. Typically, projects only use the `latest`
tag for stable release versions, and use other tags for unstable versions such
as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

By default, other than `latest`, no tag has any special significance to npm
itself.

### Caveats

This command used to be known as `npm tag`, which only created new tags, and so
had a different syntax.

Tags must share a namespace with version numbers, because they are specified in
the same slot: `npm install <pkg>@<version>` vs `npm install <pkg>@<tag>`.

Tags that can be interpreted as valid semver ranges will be rejected. For
example, `v1.4` cannot be used as a tag, because it is interpreted by semver as
`>=1.4.0 <1.5.0`. See <https://github.com/npm/npm/issues/6082>.

The simplest way to avoid semver problems with tags is to use tags that do not
begin with a number or the letter `v`.

### See Also

- [npm publish](/cli-commands/npm-publish)
- [npm install](/cli-commands/npm-install)
- [npm dedupe](/cli-commands/npm-dedupe)
- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-docs
description: Docs for a package in a web browser maybe

---

# npm-docs(1)

## Docs for a package in a web browser maybe

### Synopsis

```bash
npm docs [<pkgname> [<pkgname> ...]]
npm docs .
npm home [<pkgname> [<pkgname> ...]]
npm home .
```

### Description

This command tries to guess at the likely location of a package's
documentation URL, and then tries to open it using the `--browser`
config param. You can pass multiple package names at once. If no
package name is provided, it will search for a `package.json` in
the current folder and use the `name` property.

### Configuration

#### browser

- Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
- Type: String

The browser that is called by the `npm docs` command to open websites.

#### registry

- Default: https://registry.npmjs.org/
- Type: url

The base URL of the npm package registry.

### See Also

- [npm view](/cli-commands/npm-view)
- [npm publish](/cli-commands/npm-publish)
- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [package.json](/configuring-npm/package-json)

---

section: cli-commands
title: npm-doctor
description: Check your environments

---

# npm-doctor(1)

## Check your environments

### Synopsis

```bash
npm doctor
```

### Description

`npm doctor` runs a set of checks to ensure that your npm installation has
what it needs to manage your JavaScript packages. npm is mostly a standalone tool, but it does
have some basic requirements that must be met:

- Node.js and git must be executable by npm.
- The primary npm registry, `registry.npmjs.com`, or another service that uses
  the registry API, is available.
- The directories that npm uses, `node_modules` (both locally and globally),
  exist and can be written by the current user.
- The npm cache exists, and the package tarballs within it aren't corrupt.

Without all of these working properly, npm may not work properly. Many issues
are often attributable to things that are outside npm's code base, so `npm doctor` confirms that the npm installation is in a good state.

Also, in addition to this, there are also very many issue reports due to using
old versions of npm. Since npm is constantly improving, running `npm@latest` is
better than an old version.

`npm doctor` verifies the following items in your environment, and if there are
any recommended changes, it will display them.

#### `npm ping`

By default, npm installs from the primary npm registry, `registry.npmjs.org`.
`npm doctor` hits a special ping endpoint within the registry. This can also be
checked with `npm ping`. If this check fails, you may be using a proxy that
needs to be configured, or may need to talk to your IT staff to get access over
HTTPS to `registry.npmjs.org`.

This check is done against whichever registry you've configured (you can see
what that is by running `npm config get registry`), and if you're using a
private registry that doesn't support the `/whoami` endpoint supported by the
primary registry, this check may fail.

#### `npm -v`

While Node.js may come bundled with a particular version of npm, it's the
policy of the CLI team that we recommend all users run `npm@latest` if they
can. As the CLI is maintained by a small team of contributors, there are only
resources for a single line of development, so npm's own long-term support
releases typically only receive critical security and regression fixes. The
team believes that the latest tested version of npm is almost always likely to
be the most functional and defect-free version of npm.

#### `node -v`

For most users, in most circumstances, the best version of Node will be the
latest long-term support (LTS) release. Those of you who want access to new
ECMAscript features or bleeding-edge changes to Node's standard library may be
running a newer version, and some of you may be required to run an older
version of Node because of enterprise change control policies. That's OK! But
in general, the npm team recommends that most users run Node.js LTS.

#### `npm config get registry`

Some of you may be installing from private package registries for your project
or company. That's great! Others of you may be following tutorials or
StackOverflow questions in an effort to troubleshoot problems you may be
having. Sometimes, this may entail changing the registry you're pointing at.
This part of `npm doctor` just lets you, and maybe whoever's helping you with
support, know that you're not using the default registry.

#### `which git`

While it's documented in the README, it may not be obvious that npm needs Git
installed to do many of the things that it does. Also, in some cases
– especially on Windows – you may have Git set up in such a way that it's not
accessible via your `PATH` so that npm can find it. This check ensures that Git
is available.

#### Permissions checks

- Your cache must be readable and writable by the user running npm.
- Global package binaries must be writable by the user running npm.
- Your local `node_modules` path, if you're running `npm doctor` with a project
  directory, must be readable and writable by the user running npm.

#### Validate the checksums of cached packages

When an npm package is published, the publishing process generates a checksum
that npm uses at install time to verify that the package didn't get corrupted
in transit. `npm doctor` uses these checksums to validate the package tarballs
in your local cache (you can see where that cache is located with `npm config get cache`, and see what's in that cache with `npm cache ls` – probably more
than you were expecting!). In the event that there are corrupt packages in your
cache, you should probably run `npm cache clean` and reset the cache.

### See Also

- [npm bugs](/cli-commands/npm-bugs)
- [npm help](/cli-commands/npm-help)
- [npm ping](/cli-commands/npm-ping)

---

section: cli-commands
title: npm-edit
description: Edit an installed package

---

# npm-edit(1)

## Edit an installed package

### Synopsis

```bash
npm edit <pkg>[/<subpkg>...]
```

### Description

Selects a (sub)dependency in the current
working directory and opens the package folder in the default editor
(or whatever you've configured as the npm `editor` config -- see
[`npm-config`](npm-config).)

After it has been edited, the package is rebuilt so as to pick up any
changes in compiled packages.

For instance, you can do `npm install connect` to install connect
into your package, and then `npm edit connect` to make a few
changes to your locally installed copy.

### Configuration

#### editor

- Default: `EDITOR` environment variable if set, or `"vi"` on Posix,
  or `"notepad"` on Windows.
- Type: path

The command to run for `npm edit` or `npm config edit`.

### See Also

- [npm folders](/configuring-npm/folders)
- [npm explore](/cli-commands/npm-explore)
- [npm install](/cli-commands/npm-install)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-explore
description: Browse an installed package

---

# npm-explore(1)

## Browse an installed package

### Synopsis

```bash
npm explore <pkg> [ -- <command>]
```

### Description

Spawn a subshell in the directory of the installed package specified.

If a command is specified, then it is run in the subshell, which then
immediately terminates.

This is particularly handy in the case of git submodules in the
`node_modules` folder:

```bash
npm explore some-dependency -- git pull origin master
```

Note that the package is _not_ automatically rebuilt afterwards, so be
sure to use `npm rebuild <pkg>` if you make any changes.

### Configuration

#### shell

- Default: SHELL environment variable, or "bash" on Posix, or "cmd" on
  Windows
- Type: path

The shell to run for the `npm explore` command.

### See Also

- [npm folders](/configuring-npm/folders)
- [npm edit](/cli-commands/npm-edit)
- [npm rebuild](/cli-commands/npm-rebuild)
- [npm build](/cli-commands/npm-build)
- [npm install](/cli-commands/npm-install)

---

section: cli-commands
title: npm-fund
description: Retrieve funding information

---

# npm-fund(1)

## Retrieve funding information

### Synopsis

```bash
    npm fund [<pkg>]
```

### Description

This command retrieves information on how to fund the dependencies of
a given project. If no package name is provided, it will list all
dependencies that are looking for funding in a tree-structure in which
are listed the type of funding and the url to visit. If a package name
is provided then it tries to open its funding url using the `--browser`
config param; if there are multiple funding sources for the package, the
user will be instructed to pass the `--which` command to disambiguate.

The list will avoid duplicated entries and will stack all packages
that share the same type/url as a single entry. Given this nature the
list is not going to have the same shape of the output from `npm ls`.

### Configuration

#### browser

- Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
- Type: String

The browser that is called by the `npm fund` command to open websites.

#### json

- Type: Boolean
- Default: false

Show information in JSON format.

#### unicode

- Type: Boolean
- Default: true

Whether to represent the tree structure using unicode characters.
Set it to `false` in order to use all-ansi output.

#### which

- Type: Number
- Default: undefined

If there are multiple funding sources, which 1-indexed source URL to open.

## See Also

- [npm docs](/cli-commands/npm-docs)
- [npm config](/cli-commands/npm-config)
- [npm install](/cli-commands/npm-install)
- [npm ls](/cli-commands/npm-ls)

---

section: cli-commands
title: npm-help-search
description: Search npm help documentation

---

# npm-help-search(1)

## Search npm help documentation

### Synopsis

```bash
npm help-search <text>
```

### Description

This command will search the npm markdown documentation files for the
terms provided, and then list the results, sorted by relevance.

If only one result is found, then it will show that help topic.

If the argument to `npm help` is not a known help topic, then it will
call `help-search`. It is rarely if ever necessary to call this
command directly.

### Configuration

#### long

- Type: Boolean
- Default: false

If true, the "long" flag will cause help-search to output context around
where the terms were found in the documentation.

If false, then help-search will just list out the help topics found.

### See Also

- [npm](/cli-commands/npm)
- [npm help](/cli-commands/npm-help)

---

section: cli-commands
title: npm-help
description: Get help on npm

---

# npm-help(1)

## Get help on npm

### Synopsis

```bash
npm help <term> [<terms..>]
```

### Description

If supplied a topic, then show the appropriate documentation page.

If the topic does not exist, or if multiple terms are provided, then run
the `help-search` command to find a match. Note that, if `help-search`
finds a single subject, then it will run `help` on that topic, so unique
matches are equivalent to specifying a topic name.

### Configuration

#### viewer

- Default: "man" on Posix, "browser" on Windows
- Type: path

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.

### See Also

- [npm](/cli-commands/npm)
- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [package.json](/configuring-npm/package-json)
- [npm help-search](/cli-commands/npm-help-search)

---

section: cli-commands
title: npm-hook
description: Manage registry hooks

---

# npm-hook(1)

## Manage registry hooks

### Synopsis

```bash
npm hook ls [pkg]
npm hook add <entity> <url> <secret>
npm hook update <id> <url> [secret]
npm hook rm <id>
```

### Example

Add a hook to watch a package for changes:

```bash
$ npm hook add lodash https://example.com/ my-shared-secret
```

Add a hook to watch packages belonging to the user `substack`:

```bash
$ npm hook add ~substack https://example.com/ my-shared-secret
```

Add a hook to watch packages in the scope `@npm`

```bash
$ npm hook add @npm https://example.com/ my-shared-secret
```

List all your active hooks:

```bash
$ npm hook ls
```

List your active hooks for the `lodash` package:

```bash
$ npm hook ls lodash
```

Update an existing hook's url:

```bash
$ npm hook update id-deadbeef https://my-new-website.here/
```

Remove a hook:

```bash
$ npm hook rm id-deadbeef
```

### Description

Allows you to manage [npm hooks](https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm),
including adding, removing, listing, and updating.

Hooks allow you to configure URL endpoints that will be notified whenever a
change happens to any of the supported entity types. Three different types of
entities can be watched by hooks: packages, owners, and scopes.

To create a package hook, simply reference the package name.

To create an owner hook, prefix the owner name with `~` (as in, `~youruser`).

To create a scope hook, prefix the scope name with `@` (as in, `@yourscope`).

The hook `id` used by `update` and `rm` are the IDs listed in `npm hook ls` for
that particular hook.

The shared secret will be sent along to the URL endpoint so you can verify the
request came from your own configured hook.

### See Also

- ["Introducing Hooks" blog post](https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm)

---

section: cli-commands
title: npm-init
description: create a package.json file

---

# npm-init(1)

## create a package.json file

### Synopsis

```bash
npm init [--force|-f|--yes|-y|--scope]
npm init <@scope> (same as `npx <@scope>/create`)
npm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)
```

### Examples

Create a new React-based project using [`create-react-app`](https://npm.im/create-react-app):

```bash
$ npm init react-app ./my-react-app
```

Create a new `esm`-compatible package using [`create-esm`](https://npm.im/create-esm):

```bash
$ mkdir my-esm-lib && cd my-esm-lib
$ npm init esm --yes
```

Generate a plain old package.json using legacy init:

```bash
$ mkdir my-npm-pkg && cd my-npm-pkg
$ git init
$ npm init
```

Generate it without having it ask any questions:

```bash
$ npm init -y
```

### Description

`npm init <initializer>` can be used to set up a new or existing npm package.

`initializer` in this case is an npm package named `create-<initializer>`, which
will be installed by [`npx`](https://npm.im/npx), and then have its main bin
executed -- presumably creating or updating `package.json` and running any other
initialization-related operations.

The init command is transformed to a corresponding `npx` operation as follows:

- `npm init foo` -> `npx create-foo`
- `npm init @usr/foo` -> `npx @usr/create-foo`
- `npm init @usr` -> `npx @usr/create`

Any additional options will be passed directly to the command, so `npm init foo --hello` will map to `npx create-foo --hello`.

If the initializer is omitted (by just calling `npm init`), init will fall back
to legacy init behavior. It will ask you a bunch of questions, and then write a
package.json for you. It will attempt to make reasonable guesses based on
existing fields, dependencies, and options selected. It is strictly additive, so
it will keep any fields and values that were already set. You can also use
`-y`/`--yes` to skip the questionnaire altogether. If you pass `--scope`, it
will create a scoped package.

### See Also

- <https://github.com/isaacs/init-package-json>
- [package.json](/configuring-npm/package-json)
- [npm version](/cli-commands/npm-version)
- [npm scope](/using-npm/scope)

---

section: cli-commands
title: npm-install-ci-test
description: Install a project with a clean slate and run tests

---

# npm install-ci-test(1)

## Install a project with a clean slate and run tests

### Synopsis

```bash
npm install-ci-test

alias: npm cit
```

### Description

This command runs an `npm ci` followed immediately by an `npm test`.

### See Also

- [npm ci](/cli-commands/npm-ci)
- [npm test](/cli-commands/npm-test)

---

section: cli-commands
title: npm-install-test
description: Install package(s) and run tests

---

# npm install-test(1)

## Install package(s) and run tests

### Synopsis

```bash
npm install-test (with no args, in package dir)
npm install-test [<@scope>/]<name>
npm install-test [<@scope>/]<name>@<tag>
npm install-test [<@scope>/]<name>@<version>
npm install-test [<@scope>/]<name>@<version range>
npm install-test <tarball file>
npm install-test <tarball url>
npm install-test <folder>

alias: npm it
common options: [--save|--save-dev|--save-optional] [--save-exact] [--dry-run]
```

### Description

This command runs an `npm install` followed immediately by an `npm test`. It
takes exactly the same arguments as `npm install`.

### See Also

- [npm install](/cli-commands/npm-install)
- [npm test](/cli-commands/npm-test)

---

section: cli-commands
title: npm-install
description: Install a package

---

# npm-install(1)

## Install a package

### Synopsis

```bash
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <alias>@npm:<name>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

aliases: npm i, npm add
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```

### Description

This command installs a package, and any packages that it depends on. If the
package has a package-lock or shrinkwrap file, the installation of dependencies
will be driven by that, with an `npm-shrinkwrap.json` taking precedence if both
files exist. See [package-lock.json](/configuring-npm/package-lock-json) and [`npm shrinkwrap`](/cli-commands/npm-shrinkwrap).

A `package` is:

- a) a folder containing a program described by a [`package.json`](/configuring-npm/package-json) file
- b) a gzipped tarball containing (a)
- c) a url that resolves to (b)
- d) a `<name>@<version>` that is published on the registry (see [`registry`](/using-npm/registry)) with (c)
- e) a `<name>@<tag>` (see [`npm dist-tag`](/cli-commands/npm-dist-tag)) that points to (d)
- f) a `<name>` that has a "latest" tag satisfying (e)
- g) a `<git remote url>` that resolves to (a)

Even if you never publish your package, you can still get a lot of
benefits of using npm if you just want to write a node program (a), and
perhaps if you also want to be able to easily install it elsewhere
after packing it up into a tarball (b).

- `npm install` (in package directory, no arguments):

  Install the dependencies in the local node_modules folder.

  In global mode (ie, with `-g` or `--global` appended to the command),
  it installs the current package context (ie, the current working
  directory) as a global package.

  By default, `npm install` will install all modules listed as dependencies
  in [`package.json`](/configuring-npm/package-json).

  With the `--production` flag (or when the `NODE_ENV` environment variable
  is set to `production`), npm will not install modules listed in
  `devDependencies`. To install all modules listed in both `dependencies`
  and `devDependencies` when `NODE_ENV` environment variable is set to `production`,
  you can use `--production=false`.

  > NOTE: The `--production` flag has no particular meaning when adding a
  > dependency to a project.

- `npm install <folder>`:

  Install the package in the directory as a symlink in the current project.
  Its dependencies will be installed before it's linked. If `<folder>` sits
  inside the root of your project, its dependencies may be hoisted to the
  toplevel `node_modules` as they would for other types of dependencies.

- `npm install <tarball file>`:

  Install a package that is sitting on the filesystem. Note: if you just want
  to link a dev directory into your npm root, you can do this more easily by
  using `npm link`.

  Tarball requirements:

  - The filename _must_ use `.tar`, `.tar.gz`, or `.tgz` as
    the extension.
  - The package contents should reside in a subfolder inside the tarball (usually it is called `package/`). npm strips one directory layer when installing the package (an equivalent of `tar x --strip-components=1` is run).
  - The package must contain a `package.json` file with `name` and `version` properties.

  Example:

          npm install ./package.tgz

- `npm install <tarball url>`:

  Fetch the tarball url, and then install it. In order to distinguish between
  this and other options, the argument must start with "http://" or "https://"

  Example:

          npm install https://github.com/indexzero/forever/tarball/v0.5.6

- `npm install [<@scope>/]<name>`:

  Do a `<name>@<tag>` install, where `<tag>` is the "tag" config. (See
  [`config`](/using-npm/config). The config's default value is `latest`.)

  In most cases, this will install the version of the modules tagged as
  `latest` on the npm registry.

  Example:

          npm install sax

- `npm install <alias>@npm:<name>`:

  Install a package under a custom alias. Allows multiple versions of
  a same-name package side-by-side, more convenient import names for
  packages with otherwise long ones and using git forks replacements
  or forked npm packages as replacements. Aliasing works only on your
  project and does not rename packages in transitive dependencies.
  Aliases should follow the naming conventions stated in
  [`validate-npm-package-name`](https://www.npmjs.com/package/validate-npm-package-name#naming-rules).

  Examples:

          npm install my-react@npm:react
          npm install jquery2@npm:jquery@2
          npm install jquery3@npm:jquery@3
          npm install npa@npm:npm-package-arg

  `npm install` saves any specified packages into `dependencies` by default.
  Additionally, you can control where and how they get saved with some
  additional flags:

  - `-P, --save-prod`: Package will appear in your `dependencies`. This is the
    default unless `-D` or `-O` are present.

  - `-D, --save-dev`: Package will appear in your `devDependencies`.

  - `-O, --save-optional`: Package will appear in your `optionalDependencies`.

  - `--no-save`: Prevents saving to `dependencies`.

  When using any of the above options to save dependencies to your
  package.json, there are two additional, optional flags:

  - `-E, --save-exact`: Saved dependencies will be configured with an
    exact version rather than using npm's default semver range
    operator.

  - `-B, --save-bundle`: Saved dependencies will also be added to your `bundleDependencies` list.

  Further, if you have an `npm-shrinkwrap.json` or `package-lock.json` then it
  will be updated as well.

  `<scope>` is optional. The package will be downloaded from the registry
  associated with the specified scope. If no registry is associated with
  the given scope the default registry is assumed. See [`scope`](/using-npm/scope).

  Note: if you do not include the @-symbol on your scope name, npm will
  interpret this as a GitHub repository instead, see below. Scopes names
  must also be followed by a slash.

  Examples:

  ```bash
  npm install sax
  npm install githubname/reponame
  npm install @myorg/privatepackage
  npm install node-tap --save-dev
  npm install dtrace-provider --save-optional
  npm install readable-stream --save-exact
  npm install ansi-regex --save-bundle
  ```

  **Note**: If there is a file or folder named `<name>` in the current
  working directory, then it will try to install that, and only try to
  fetch the package by name if it is not valid.

- `npm install [<@scope>/]<name>@<tag>`:

  Install the version of the package that is referenced by the specified tag.
  If the tag does not exist in the registry data for that package, then this
  will fail.

  Example:

  ```bash
  npm install sax@latest
  npm install @myorg/mypackage@latest
  ```

- `npm install [<@scope>/]<name>@<version>`:

  Install the specified version of the package. This will fail if the
  version has not been published to the registry.

  Example:

  ```bash
  npm install sax@0.1.1
  npm install @myorg/privatepackage@1.5.0
  ```

- `npm install [<@scope>/]<name>@<version range>`:

  Install a version of the package matching the specified version range. This
  will follow the same rules for resolving dependencies described in [`package.json`](/configuring-npm/package-json).

  Note that most version ranges must be put in quotes so that your shell will
  treat it as a single argument.

  Example:

  ```bash
  npm install sax@">=0.1.0 <0.2.0"
  npm install @myorg/privatepackage@">=0.1.0 <0.2.0"
  ```

- `npm install <git remote url>`:

  Installs the package from the hosted git provider, cloning it with `git`.
  For a full git remote url, only that URL will be attempted.

  ```bash
    <protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
  ```

  `<protocol>` is one of `git`, `git+ssh`, `git+http`, `git+https`, or
  `git+file`.

  If `#<commit-ish>` is provided, it will be used to clone exactly that
  commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
  be any valid semver range or exact version, and npm will look for any tags
  or refs matching that range in the remote repository, much as it would for a
  registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
  specified, then the default branch of the repository is used.

  If the repository makes use of submodules, those submodules will be cloned
  as well.

  If the package being installed contains a `prepare` script, its
  `dependencies` and `devDependencies` will be installed, and the prepare
  script will be run, before the package is packaged and installed.

  The following git environment variables are recognized by npm and will be
  added to the environment when running git:

  - `GIT_ASKPASS`
  - `GIT_EXEC_PATH`
  - `GIT_PROXY_COMMAND`
  - `GIT_SSH`
  - `GIT_SSH_COMMAND`
  - `GIT_SSL_CAINFO`
  - `GIT_SSL_NO_VERIFY`

  See the git man page for details.

  Examples:

  ```bash
  npm install git+ssh://git@github.com:npm/cli.git#v1.0.27
  npm install git+ssh://git@github.com:npm/cli#semver:^5.0
  npm install git+https://isaacs@github.com/npm/cli.git
  npm install git://github.com/npm/cli.git#v1.0.27
  GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install git+ssh://git@github.com:npm/cli.git
  ```

- `npm install <githubname>/<githubrepo>[#<commit-ish>]`:
- `npm install github:<githubname>/<githubrepo>[#<commit-ish>]`:

  Install the package at `https://github.com/githubname/githubrepo` by
  attempting to clone it using `git`.

  If `#<commit-ish>` is provided, it will be used to clone exactly that
  commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
  be any valid semver range or exact version, and npm will look for any tags
  or refs matching that range in the remote repository, much as it would for a
  registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
  specified, then `master` is used.

  As with regular git dependencies, `dependencies` and `devDependencies` will
  be installed if the package has a `prepare` script, before the package is
  done installing.

  Examples:

  ```bash
  npm install mygithubuser/myproject
  npm install github:mygithubuser/myproject
  ```

- `npm install gist:[<githubname>/]<gistID>[#<commit-ish>|#semver:<semver>]`:

  Install the package at `https://gist.github.com/gistID` by attempting to
  clone it using `git`. The GitHub username associated with the gist is
  optional and will not be saved in `package.json`.

  As with regular git dependencies, `dependencies` and `devDependencies` will
  be installed if the package has a `prepare` script, before the package is
  done installing.

  Example:

  ```bash
  npm install gist:101a11beef
  ```

- `npm install bitbucket:<bitbucketname>/<bitbucketrepo>[#<commit-ish>]`:

  Install the package at `https://bitbucket.org/bitbucketname/bitbucketrepo`
  by attempting to clone it using `git`.

  If `#<commit-ish>` is provided, it will be used to clone exactly that
  commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
  be any valid semver range or exact version, and npm will look for any tags
  or refs matching that range in the remote repository, much as it would for a
  registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
  specified, then `master` is used.

  As with regular git dependencies, `dependencies` and `devDependencies` will
  be installed if the package has a `prepare` script, before the package is
  done installing.

  Example:

  ```bash
  npm install bitbucket:mybitbucketuser/myproject
  ```

- `npm install gitlab:<gitlabname>/<gitlabrepo>[#<commit-ish>]`:

  Install the package at `https://gitlab.com/gitlabname/gitlabrepo`
  by attempting to clone it using `git`.

  If `#<commit-ish>` is provided, it will be used to clone exactly that
  commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
  be any valid semver range or exact version, and npm will look for any tags
  or refs matching that range in the remote repository, much as it would for a
  registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
  specified, then `master` is used.

  As with regular git dependencies, `dependencies` and `devDependencies` will
  be installed if the package has a `prepare` script, before the package is
  done installing.

  Example:

  ```bash
  npm install gitlab:mygitlabuser/myproject
  npm install gitlab:myusr/myproj#semver:^5.0
  ```

You may combine multiple arguments, and even multiple types of arguments.
For example:

```bash
npm install sax@">=0.1.0 <0.2.0" bench supervisor
```

The `--tag` argument will apply to all of the specified install targets. If a
tag with the given name exists, the tagged version is preferred over newer
versions.

The `--dry-run` argument will report in the usual way what the install would
have done without actually installing anything.

The `--package-lock-only` argument will only update the `package-lock.json`,
instead of checking `node_modules` and downloading dependencies.

The `-f` or `--force` argument will force npm to fetch remote resources even if a
local copy exists on disk.

```bash
npm install sax --force
```

The `--no-fund` argument will hide the message displayed at the end of each
install that acknowledges the number of dependencies looking for funding.
See `npm-fund(1)`

The `-g` or `--global` argument will cause npm to install the package globally
rather than locally. See [folders](/configuring-npm/folders).

The `--global-style` argument will cause npm to install the package into
your local `node_modules` folder with the same layout it uses with the
global `node_modules` folder. Only your direct dependencies will show in
`node_modules` and everything they depend on will be flattened in their
`node_modules` folders. This obviously will eliminate some deduping.

The `--ignore-scripts` argument will cause npm to not execute any
scripts defined in the package.json. See [`scripts`](/using-npm/scripts).

The `--legacy-bundling` argument will cause npm to install the package such
that versions of npm prior to 1.4, such as the one included with node 0.8,
can install the package. This eliminates all automatic deduping.

The `--link` argument will cause npm to link global installs into the
local space in some cases.

The `--no-bin-links` argument will prevent npm from creating symlinks for
any binaries the package might contain.

The `--no-optional` argument will prevent optional dependencies from
being installed.

The `--no-shrinkwrap` argument, which will ignore an available
package lock or shrinkwrap file and use the package.json instead.

The `--no-package-lock` argument will prevent npm from creating a
`package-lock.json` file. When running with package-lock's disabled npm
will not automatically prune your node modules when installing.

The `--nodedir=/path/to/node/source` argument will allow npm to find the
node source code so that npm can compile native modules.

The `--only={prod[uction]|dev[elopment]}` argument will cause either only
`devDependencies` or only non-`devDependencies` to be installed regardless of the `NODE_ENV`.

The `--no-audit` argument can be used to disable sending of audit reports to
the configured registries. See [`npm-audit`](npm-audit) for details on what is sent.

See [`config`](/using-npm/config). Many of the configuration params have some
effect on installation, since that's most of what npm does.

#### Algorithm

To install a package, npm uses the following algorithm:

```bash
load the existing node_modules tree from disk
clone the tree
fetch the package.json and assorted metadata and add it to the clone
walk the clone and add any missing dependencies
  dependencies will be added as close to the top as is possible
  without breaking any other modules
compare the original tree with the cloned tree and make a list of
actions to take to convert one to the other
execute all of the actions, deepest first
  kinds of actions are install, update, remove and move
```

For this `package{dep}` structure: `A{B,C}, B{C}, C{D}`,
this algorithm produces:

```bash
A
+-- B
+-- C
+-- D
```

That is, the dependency from B to C is satisfied by the fact that A
already caused C to be installed at a higher level. D is still installed
at the top level because nothing conflicts with it.

For `A{B,C}, B{C,D@1}, C{D@2}`, this algorithm produces:

```bash
A
+-- B
+-- C
   `-- D@2
+-- D@1
```

Because B's D@1 will be installed in the top level, C now has to install D@2
privately for itself. This algorithm is deterministic, but different trees may
be produced if two dependencies are requested for installation in a different
order.

See [folders](/configuring-npm/folders) for a more detailed description of the specific folder structures that npm creates.

### Limitations of npm's Install Algorithm

npm will refuse to install any package with an identical name to the
current package. This can be overridden with the `--force` flag, but in
most cases can simply be addressed by changing the local package name.

There are some very rare and pathological edge-cases where a cycle can
cause npm to try to install a never-ending tree of packages. Here is
the simplest case:

```bash
A -> B -> A' -> B' -> A -> B -> A' -> B' -> A -> ...
```

where `A` is some version of a package, and `A'` is a different version
of the same package. Because `B` depends on a different version of `A`
than the one that is already in the tree, it must install a separate
copy. The same is true of `A'`, which must install `B'`. Because `B'`
depends on the original version of `A`, which has been overridden, the
cycle falls into infinite regress.

To avoid this situation, npm flat-out refuses to install any
`name@version` that is already present anywhere in the tree of package
folder ancestors. A more correct, but more complex, solution would be
to symlink the existing version into the new location. If this ever
affects a real use-case, it will be investigated.

### See Also

- [npm folders](/configuring-npm/folders)
- [npm update](/cli-commands/npm-update)
- [npm audit](/cli-commands/npm-audit)
- [npm fund](/cli-commands/npm-fund)
- [npm link](/cli-commands/npm-link)
- [npm rebuild](/cli-commands/npm-rebuild)
- [npm scripts](/using-npm/scripts)
- [npm build](/cli-commands/npm-build)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm registry](/using-npm/registry)
- [npm dist-tag](/cli-commands/npm-dist-tag)
- [npm uninstall](/cli-commands/npm-uninstall)
- [npm shrinkwrap](/cli-commands/npm-shrinkwrap)
- [package.json](/configuring-npm/package-json)

---

section: cli-commands
title: npm-link
description: Symlink a package folder

---

# npm-link(1)

## Symlink a package folder

### Synopsis

```bash
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: npm ln
```

### Description

Package linking is a two-step process.

First, `npm link` in a package folder will create a symlink in the global folder
`{prefix}/lib/node_modules/<package>` that links to the package where the `npm link` command was executed. It will also link any bins in the package to `{prefix}/bin/{name}`.
Note that `npm link` uses the global prefix (see `npm prefix -g` for its value).

Next, in some other location, `npm link package-name` will create a
symbolic link from globally-installed `package-name` to `node_modules/`
of the current folder.

Note that `package-name` is taken from `package.json`,
not from directory name.

The package name can be optionally prefixed with a scope. See [`scope`](/using-npm/npm-scope).
The scope must be preceded by an @-symbol and followed by a slash.

When creating tarballs for `npm publish`, the linked packages are
"snapshotted" to their current state by resolving the symbolic links.

This is handy for installing your own stuff, so that you can work on it and
test it iteratively without having to continually rebuild.

For example:

```bash
    cd ~/projects/node-redis    # go into the package directory
    npm link                    # creates global link
    cd ~/projects/node-bloggy   # go into some other package directory.
    npm link redis              # link-install the package
```

Now, any changes to ~/projects/node-redis will be reflected in
~/projects/node-bloggy/node_modules/node-redis/. Note that the link should
be to the package name, not the directory name for that package.

You may also shortcut the two steps in one. For example, to do the
above use-case in a shorter way:

```bash
cd ~/projects/node-bloggy  # go into the dir of your main project
npm link ../node-redis     # link the dir of your dependency
```

The second line is the equivalent of doing:

```bash
(cd ../node-redis; npm link)
npm link redis
```

That is, it first creates a global link, and then links the global
installation target into your project's `node_modules` folder.

Note that in this case, you are referring to the directory name, `node-redis`,
rather than the package name `redis`.

If your linked package is scoped (see [`scope`](/using-npm/npm-scope)) your link command must include that scope, e.g.

```bash
npm link @myorg/privatepackage
```

### See Also

- [npm developers](/using-npm/developers)
- [package.json](/configuring-npm/package-json)
- [npm install](/cli-commands/npm-install)
- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-logout
description: Log out of the registry

---

# npm-logout(1)

## Log out of the registry

### Synopsis

```bash
npm logout [--registry=<url>] [--scope=<@scope>]
```

### Description

When logged into a registry that supports token-based authentication, tell the
server to end this token's session. This will invalidate the token everywhere
you're using it, not just for the current environment.

When logged into a legacy registry that uses username and password authentication, this will
clear the credentials in your user configuration. In this case, it will _only_ affect
the current environment.

If `--scope` is provided, this will find the credentials for the registry
connected to that scope, if set.

### Configuration

#### registry

Default: https://registry.npmjs.org/

The base URL of the npm package registry. If `scope` is also specified,
it takes precedence.

#### scope

Default: The scope of your current project, if any, otherwise none.

If specified, you will be logged out of the specified scope. See [`scope`](/using-npm/npm-scope).

```bash
npm logout --scope=@myco
```

### See Also

- [npm adduser](/cli-commands/npm-adduser)
- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npm whoami](/cli-commands/npm-whoami)

---

section: cli-commands
title: npm-ls
description: List installed packages

---

# npm-ls(1)

## List installed packages

### Synopsis

```bash
npm ls [[<@scope>/]<pkg> ...]

aliases: list, la, ll
```

### Description

This command will print to stdout all the versions of packages that are
installed, as well as their dependencies, in a tree-structure.

Positional arguments are `name@version-range` identifiers, which will
limit the results to only the paths to the packages named. Note that
nested packages will _also_ show the paths to the specified packages.
For example, running `npm ls promzard` in npm's source tree will show:

```bash
    npm@@VERSION@ /path/to/npm
    └─┬ init-package-json@0.0.4
      └── promzard@0.1.5
```

It will print out extraneous, missing, and invalid packages.

If a project specifies git urls for dependencies these are shown
in parentheses after the name@version to make it easier for users to
recognize potential forks of a project.

The tree shown is the logical dependency tree, based on package
dependencies, not the physical layout of your node_modules folder.

When run as `ll` or `la`, it shows extended information by default.

### Configuration

#### json

- Default: false
- Type: Boolean

Show information in JSON format.

#### long

- Default: false
- Type: Boolean

Show extended information.

#### parseable

- Default: false
- Type: Boolean

Show parseable output instead of tree view.

#### global

- Default: false
- Type: Boolean

List packages in the global install prefix instead of in the current
project.

#### depth

- Type: Int

Max display depth of the dependency tree.

#### prod / production

- Type: Boolean
- Default: false

Display only the dependency tree for packages in `dependencies`.

#### dev / development

- Type: Boolean
- Default: false

Display only the dependency tree for packages in `devDependencies`.

#### only

- Type: String

When "dev" or "development", is an alias to `dev`.

When "prod" or "production", is an alias to `production`.

#### link

- Type: Boolean
- Default: false

Display only dependencies which are linked

#### unicode

- Type: Boolean
- Default: true

Whether to represent the tree structure using unicode characters.
Set it to false in order to use all-ansi output.

### See Also

- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm folders](/configuring-npm/folders)
- [npm install](/cli-commands/npm-install)
- [npm link](/cli-commands/npm-link)
- [npm prune](/cli-commands/npm-prune)
- [npm outdated](/cli-commands/npm-outdated)
- [npm update](/cli-commands/npm-update)

---

section: cli-commands
title: npm-org
description: Manage orgs

---

# npm-org(1)

## Manage orgs

### Synopsis

```bash
npm org set <orgname> <username> [developer | admin | owner]
npm org rm <orgname> <username>
npm org ls <orgname> [<username>]
```

### Example

Add a new developer to an org:

```bash
$ npm org set my-org @mx-smith
```

Add a new admin to an org (or change a developer to an admin):

```bash
$ npm org set my-org @mx-santos admin
```

Remove a user from an org:

```bash
$ npm org rm my-org mx-santos
```

List all users in an org:

```bash
$ npm org ls my-org
```

List all users in JSON format:

```bash
$ npm org ls my-org --json
```

See what role a user has in an org:

```bash
$ npm org ls my-org @mx-santos
```

### Description

You can use the `npm org` commands to manage and view users of an organization.
It supports adding and removing users, changing their roles, listing them, and
finding specific ones and their roles.

### See Also

- [Documentation on npm Orgs](https://docs.npmjs.com/orgs/)

---

section: cli-commands
title: npm-outdated
description: Check for outdated packages

---

# npm-outdated(1)

## Check for outdated packages

### Synopsis

```bash
npm outdated [[<@scope>/]<pkg> ...]
```

### Description

This command will check the registry to see if any (or, specific) installed
packages are currently outdated.

In the output:

- `wanted` is the maximum version of the package that satisfies the semver
  range specified in `package.json`. If there's no available semver range (i.e.
  you're running `npm outdated --global`, or the package isn't included in
  `package.json`), then `wanted` shows the currently-installed version.
- `latest` is the version of the package tagged as latest in the registry.
  Running `npm publish` with no special configuration will publish the package
  with a dist-tag of `latest`. This may or may not be the maximum version of
  the package, or the most-recently published version of the package, depending
  on how the package's developer manages the latest [dist-tag](npm-dist-tag).
- `location` is where in the dependency tree the package is located. Note that
  `npm outdated` defaults to a depth of 0, so unless you override that, you'll
  always be seeing only top-level dependencies that are outdated.
- `package type` (when using `--long` / `-l`) tells you whether this package is
  a `dependency` or a `devDependency`. Packages not included in `package.json`
  are always marked `dependencies`.
- `homepage` (when using `--long` / `-l`) is the `homepage` value contained in the package's `package.json`
- Red means there's a newer version matching your semver requirements, so you should update now.
- Yellow indicates that there's a newer version above your semver requirements (usually new major, or new 0.x minor) so proceed with caution.

### An example

```bash
$ npm outdated
Package      Current   Wanted   Latest  Location
glob          5.0.15   5.0.15    6.0.1  test-outdated-output
nothingness    0.0.3      git      git  test-outdated-output
npm            3.5.1    3.5.2    3.5.1  test-outdated-output
local-dev      0.0.3   linked   linked  test-outdated-output
once           1.3.2    1.3.3    1.3.3  test-outdated-output
```

With these `dependencies`:

```json
{
  "glob": "^5.0.15",
  "nothingness": "github:othiym23/nothingness#master",
  "npm": "^3.5.1",
  "once": "^1.3.1"
}
```

A few things to note:

- `glob` requires `^5`, which prevents npm from installing `glob@6`, which is
  outside the semver range.
- Git dependencies will always be reinstalled, because of how they're specified.
  The installed committish might satisfy the dependency specifier (if it's
  something immutable, like a commit SHA), or it might not, so `npm outdated` and
  `npm update` have to fetch Git repos to check. This is why currently doing a
  reinstall of a Git dependency always forces a new clone and install.
- `npm@3.5.2` is marked as "wanted", but "latest" is `npm@3.5.1` because npm
  uses dist-tags to manage its `latest` and `next` release channels. `npm update`
  will install the _newest_ version, but `npm install npm` (with no semver range)
  will install whatever's tagged as `latest`.
- `once` is just plain out of date. Reinstalling `node_modules` from scratch or
  running `npm update` will bring it up to spec.

### Configuration

#### json

- Default: false
- Type: Boolean

Show information in JSON format.

#### long

- Default: false
- Type: Boolean

Show extended information.

#### parseable

- Default: false
- Type: Boolean

Show parseable output instead of tree view.

#### global

- Default: false
- Type: Boolean

Check packages in the global install prefix instead of in the current
project.

#### depth

- Default: 0
- Type: Int

Max depth for checking dependency tree.

### See Also

- [npm update](/cli-commands/npm-update)
- [npm dist-tag](/cli-commands/npm-dist-tag)
- [npm registry](/using-npm/registry)
- [npm folders](/configuring-npm/folders)

---

section: cli-commands
title: npm-owner
description: Manage package owners

---

# npm-owner(1)

## Manage package owners

### Synopsis

```bash
npm owner add <user> [<@scope>/]<pkg>
npm owner rm <user> [<@scope>/]<pkg>
npm owner ls [<@scope>/]<pkg>

aliases: author
```

### Description

Manage ownership of published packages.

- ls:
  List all the users who have access to modify a package and push new versions.
  Handy when you need to know who to bug for help.
- add:
  Add a new user as a maintainer of a package. This user is enabled to modify
  metadata, publish new versions, and add other owners.
- rm:
  Remove a user from the package owner list. This immediately revokes their
  privileges.

Note that there is only one level of access. Either you can modify a package,
or you can't. Future versions may contain more fine-grained access levels, but
that is not implemented at this time.

If you have two-factor authentication enabled with `auth-and-writes` then
you'll need to include an otp on the command line when changing ownership
with `--otp`.

### See Also

- [npm publish](/cli-commands/npm-publish)
- [npm registry](/using-npm/registry)
- [npm adduser](/cli-commands/npm-adduser)
- [npm disputes](/using-npm/disputes)

---

section: cli-commands
title: npm-pack
description: Create a tarball from a package

---

# npm-pack(1)

## Create a tarball from a package

### Synopsis

```bash
npm pack [[<@scope>/]<pkg>...] [--dry-run]
```

### Description

For anything that's installable (that is, a package folder, tarball,
tarball url, name@tag, name@version, name, or scoped name), this
command will fetch it to the cache, and then copy the tarball to the
current working directory as `<name>-<version>.tgz`, and then write
the filenames out to stdout.

If the same package is specified multiple times, then the file will be
overwritten the second time.

If no arguments are supplied, then npm packs the current package folder.

The `--dry-run` argument will do everything that pack usually does without
actually packing anything. Reports on what would have gone into the tarball.

### See Also

- [npm cache](/cli-commands/npm-cache)
- [npm publish](/cli-commands/npm-publish)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-ping
description: Ping npm registry

---

# npm-ping(1)

## Ping npm registry

### Synopsis

```bash
npm ping [--registry <registry>]
```

### Description

Ping the configured or given npm registry and verify authentication.
If it works it will output something like:

```bash
Ping success: {*Details about registry*}
```

otherwise you will get:

```bash
Ping error: {*Detail about error}
```

### See Also

- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-prefix
description: Display prefix

---

# npm-prefix(1)

## Display prefix

### Synopsis

```bash
npm prefix [-g]
```

### Description

Print the local prefix to standard out. This is the closest parent directory
to contain a `package.json` file or `node_modules` directory, unless `-g` is
also specified.

If `-g` is specified, this will be the value of the global prefix. See
[`npm config`](/cli-commands/npm-config) for more detail.

### See Also

- [npm root](/cli-commands/npm-root)
- [npm bin](/cli-commands/npm-bin)
- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-profile
description: Change settings on your registry profile

---

# npm-profile(1)

## Change settings on your registry profile

### Synopsis

```bash
npm profile get [--json|--parseable] [<property>]
npm profile set [--json|--parseable] <property> <value>
npm profile set password
npm profile enable-2fa [auth-and-writes|auth-only]
npm profile disable-2fa
```

### Description

Change your profile information on the registry. This not be available if
you're using a non-npmjs registry.

- `npm profile get [<property>]`:
  Display all of the properties of your profile, or one or more specific
  properties. It looks like:

```bash
+-----------------+---------------------------+
| name            | example                   |
+-----------------+---------------------------+
| email           | me@example.com (verified) |
+-----------------+---------------------------+
| two factor auth | auth-and-writes           |
+-----------------+---------------------------+
| fullname        | Example User              |
+-----------------+---------------------------+
| homepage        |                           |
+-----------------+---------------------------+
| freenode        |                           |
+-----------------+---------------------------+
| twitter         |                           |
+-----------------+---------------------------+
| github          |                           |
+-----------------+---------------------------+
| created         | 2015-02-26T01:38:35.892Z  |
+-----------------+---------------------------+
| updated         | 2017-10-02T21:29:45.922Z  |
+-----------------+---------------------------+
```

- `npm profile set <property> <value>`:
  Set the value of a profile property. You can set the following properties this way:
  email, fullname, homepage, freenode, twitter, github

- `npm profile set password`:
  Change your password. This is interactive, you'll be prompted for your
  current password and a new password. You'll also be prompted for an OTP
  if you have two-factor authentication enabled.

- `npm profile enable-2fa [auth-and-writes|auth-only]`:
  Enables two-factor authentication. Defaults to `auth-and-writes` mode. Modes are:

  - `auth-only`: Require an OTP when logging in or making changes to your
    account's authentication. The OTP will be required on both the website
    and the command line.
  - `auth-and-writes`: Requires an OTP at all the times `auth-only` does, and also requires one when
    publishing a module, setting the `latest` dist-tag, or changing access
    via `npm access` and `npm owner`.

- `npm profile disable-2fa`:
  Disables two-factor authentication.

### Details

All of the `npm profile` subcommands accept `--json` and `--parseable` and
will tailor their output based on those. Some of these commands may not be
available on non npmjs.com registries.

### See Also

- [npm config](/cli-commands/npm-config)

---

section: cli-commands
title: npm-prune
description: Remove extraneous packages

---

# npm-prune(1)

## Remove extraneous packages

### Synopsis

```bash
npm prune [[<@scope>/]<pkg>...] [--production] [--dry-run] [--json]
```

### Description

This command removes "extraneous" packages. If a package name is
provided, then only packages matching one of the supplied names are
removed.

Extraneous packages are packages that are not listed on the parent
package's dependencies list.

If the `--production` flag is specified or the `NODE_ENV` environment
variable is set to `production`, this command will remove the packages
specified in your `devDependencies`. Setting `--no-production` will
negate `NODE_ENV` being set to `production`.

If the `--dry-run` flag is used then no changes will actually be made.

If the `--json` flag is used then the changes `npm prune` made (or would
have made with `--dry-run`) are printed as a JSON object.

In normal operation with package-locks enabled, extraneous modules are
pruned automatically when modules are installed and you'll only need
this command with the `--production` flag.

If you've disabled package-locks then extraneous modules will not be removed
and it's up to you to run `npm prune` from time-to-time to remove them.

### See Also

- [npm uninstall](/cli-commands/npm-uninstall)
- [npm folders](/configuring-npm/folders)
- [npm ls](/cli-commands/npm-ls)

---

section: cli-commands
title: npm-publish
description: Publish a package

---

# npm-publish(1)

## Publish a package

### Synopsis

```bash
npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode] [--dry-run]

Publishes '.' if no argument supplied
Sets tag 'latest' if no --tag specified
```

### Description

Publishes a package to the registry so that it can be installed by name. All
files in the package directory are included if no local `.gitignore` or
`.npmignore` file exists. If both files exist and a file is ignored by
`.gitignore` but not by `.npmignore` then it will be included. See
[`developers`](/using-npm/developers) for full details on what's included in the published package, as well as details on how the package is built.

By default npm will publish to the public registry. This can be overridden by
specifying a different default registry or using a [`scope`](/using-npm/npm-scope) in the name (see [`package.json`](/configuring-npm/package-json)).

- `<folder>`:
  A folder containing a package.json file

- `<tarball>`:
  A url or file path to a gzipped tar archive containing a single folder
  with a package.json file inside.

- `[--tag <tag>]`
  Registers the published package with the given tag, such that `npm install <name>@<tag>` will install this version. By default, `npm publish` updates
  and `npm install` installs the `latest` tag. See [`npm-dist-tag`](npm-dist-tag) for
  details about tags.

- `[--access <public|restricted>]`
  Tells the registry whether this package should be published as public or
  restricted. Only applies to scoped packages, which default to `restricted`.
  If you don't have a paid account, you must publish with `--access public`
  to publish scoped packages.

- `[--otp <otpcode>]`
  If you have two-factor authentication enabled in `auth-and-writes` mode
  then you can provide a code from your authenticator with this. If you
  don't include this and you're running from a TTY then you'll be prompted.

- `[--dry-run]`
  As of `npm@6`, does everything publish would do except actually publishing
  to the registry. Reports the details of what would have been published.

Fails if the package name and version combination already exists in
the specified registry.

Once a package is published with a given name and version, that
specific name and version combination can never be used again, even if
it is removed with [`npm unpublish`](/cli-commands/npm-unpublish).

As of `npm@5`, both a sha1sum and an integrity field with a sha512sum of the
tarball will be submitted to the registry during publication. Subsequent
installs will use the strongest supported algorithm to verify downloads.

Similar to `--dry-run` see [`npm pack`](/cli-commands/npm-pack), which figures out the files to be
included and packs them into a tarball to be uploaded to the registry.

### See Also

- [npm registry](/using-npm/registry)
- [npm scope](/using-npm/scope)
- [npm adduser](/cli-commands/adduser)
- [npm owner](/cli-commands/owner)
- [npm deprecate](/cli-commands/deprecate)
- [npm dist-tag](/cli-commands/dist-tag)
- [npm pack](/cli-commands/pack)
- [npm profile](/cli-commands/profile)

---

section: cli-commands
title: npm-rebuild
description: Rebuild a package

---

# npm-rebuild(1)

## Rebuild a package

### Synopsis

```bash
npm rebuild [[<@scope>/<name>]...]

alias: npm rb
```

### Description

This command runs the `npm build` command on the matched folders. This is useful when you install a new version of node, and must recompile all your C++ addons with the new binary.

### See Also

- [npm build](/cli-commands/npm-build)
- [npm install](/cli-commands/npm-install)

---

section: cli-commands
title: npm-repo
description: Open package repository page in the browser

---

# npm-repo(1)

## Open package repository page in the browser

### Synopsis

```bash
npm repo [<pkg>]
```

### Description

This command tries to guess at the likely location of a package's
repository URL, and then tries to open it using the `--browser`
config param. If no package name is provided, it will search for
a `package.json` in the current folder and use the `name` property.

### Configuration

#### browser

- Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
- Type: String

The browser that is called by the `npm repo` command to open websites.

### See Also

- [npm docs](/cli-commands/npm-docs)
- [npm config](/cli-commands/npm-config)

---

section: cli-commands
title: npm-restart
description: Restart a package

---

# npm-restart(1)

## Restart a package

### Synopsis

```bash
npm restart [-- <args>]
```

### Description

This restarts a package.

This runs a package's "stop", "restart", and "start" scripts, and associated
pre- and post- scripts, in the order given below:

1. prerestart
2. prestop
3. stop
4. poststop
5. restart
6. prestart
7. start
8. poststart
9. postrestart

### Note

Note that the "restart" script is run **in addition to** the "stop"
and "start" scripts, not instead of them.

This is the behavior as of `npm` major version 2. A change in this
behavior will be accompanied by an increase in major version number

### See Also

- [npm run-script](/cli-commands/npm-run-script)
- [npm scripts](/using-npm/scripts)
- [npm test](/cli-commands/npm-test)
- [npm start](/cli-commands/npm-start)
- [npm stop](/cli-commands/npm-stop)
- [npm restart](/cli-commands/npm-restart)

---

section: cli-commands
title: npm-root
description: Display npm root

---

# npm-root(1)

## Display npm root

### Synopsis

```bash
npm root [-g]
```

### Description

Print the effective `node_modules` folder to standard out.

### See Also

- [npm prefix](/cli-commands/npm-prefix)
- [npm bin](/cli-commands/npm-bin)
- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-run-script
description: Run arbitrary package scripts

---

# npm-run-script(1)

## Run arbitrary package scripts

### Synopsis

```bash
npm run-script <command> [--silent] [-- <args>...]

alias: npm run
```

### Description

This runs an arbitrary command from a package's `"scripts"` object. If no
`"command"` is provided, it will list the available scripts. `run[-script]` is
used by the test, start, restart, and stop commands, but can be called
directly, as well. When the scripts in the package are printed out, they're
separated into lifecycle (test, start, restart) and directly-run scripts.

As of [`npm@2.0.0`](https://blog.npmjs.org/post/98131109725/npm-2-0-0), you can
use custom arguments when executing scripts. The special option `--` is used by
[getopt](https://goo.gl/KxMmtG) to delimit the end of the options. npm will pass
all the arguments after the `--` directly to your script:

```bash
npm run test -- --grep="pattern"
```

The arguments will only be passed to the script specified after `npm run`
and not to any pre or post script.

The `env` script is a special built-in command that can be used to list
environment variables that will be available to the script at runtime. If an
"env" command is defined in your package, it will take precedence over the
built-in.

In addition to the shell's pre-existing `PATH`, `npm run` adds
`node_modules/.bin` to the `PATH` provided to scripts. Any binaries provided by
locally-installed dependencies can be used without the `node_modules/.bin`
prefix. For example, if there is a `devDependency` on `tap` in your package,
you should write:

```bash
"scripts": {"test": "tap test/\*.js"}
```

instead of

```bash
"scripts": {"test": "node_modules/.bin/tap test/\*.js"}
```

to run your tests.

The actual shell your script is run within is platform dependent. By default,
on Unix-like systems it is the `/bin/sh` command, on Windows it is the `cmd.exe`.
The actual shell referred to by `/bin/sh` also depends on the system.
As of [`npm@5.1.0`](https://github.com/npm/npm/releases/tag/v5.1.0) you can
customize the shell with the `script-shell` configuration.

Scripts are run from the root of the module, regardless of what your current
working directory is when you call `npm run`. If you want your script to
use different behavior based on what subdirectory you're in, you can use the
`INIT_CWD` environment variable, which holds the full path you were in when
you ran `npm run`.

`npm run` sets the `NODE` environment variable to the `node` executable with
which `npm` is executed. Also, if the `--scripts-prepend-node-path` is passed,
the directory within which `node` resides is added to the
`PATH`. If `--scripts-prepend-node-path=auto` is passed (which has been the
default in `npm` v3), this is only performed when that `node` executable is
not found in the `PATH`.

If you try to run a script without having a `node_modules` directory and it fails,
you will be given a warning to run `npm install`, just in case you've forgotten.

You can use the `--silent` flag to prevent showing `npm ERR!` output on error.

You can use the `--if-present` flag to avoid exiting with a non-zero exit code
when the script is undefined. This lets you run potentially undefined scripts
without breaking the execution chain.

### See Also

- [npm scripts](/using-npm/scripts)
- [npm test](/cli-commands/npm-test)
- [npm start](/cli-commands/npm-start)
- [npm restart](/cli-commands/npm-restart)
- [npm stop](/cli-commands/npm-stop)
- [npm config](/cli-commands/npm-config)

---

section: cli-commands
title: npm-search
description: Search for packages

---

# npm-search(1)

## Search for packages

### Synopsis

```bash
npm search [-l|--long] [--json] [--parseable] [--no-description] [search terms ...]

aliases: s, se, find
```

### Description

Search the registry for packages matching the search terms. `npm search`
performs a linear, incremental, lexically-ordered search through package
metadata for all files in the registry. If color is enabled, it will further
highlight the matches in the results.

Additionally, using the `--searchopts` and `--searchexclude` options paired with
more search terms will respectively include and exclude further patterns. The
main difference between `--searchopts` and the standard search terms is that the
former does not highlight results in the output and can be used for more
fine-grained filtering. Additionally, both of these can be added to `.npmrc` for
default search filtering behavior.

Search also allows targeting of maintainers in search results, by prefixing
their npm username with `=`.

If a term starts with `/`, then it's interpreted as a regular expression and
supports standard JavaScript RegExp syntax. A trailing `/` will be ignored in
this case. (Note that many regular expression characters must be escaped or
quoted in most shells.)

### A Note on caching

### Configuration

#### description

- Default: true
- Type: Boolean

Used as `--no-description`, disables search matching in package descriptions and
suppresses display of that field in results.

#### json

- Default: false
- Type: Boolean

Output search results as a JSON array.

#### parseable

- Default: false
- Type: Boolean

Output search results as lines with tab-separated columns.

#### long

- Default: false
- Type: Boolean

Display full package descriptions and other long text across multiple
lines. When disabled (default) search results are truncated to fit
neatly on a single line. Modules with extremely long names will
fall on multiple lines.

#### searchopts

- Default: ""
- Type: String

Space-separated options that are always passed to search.

#### searchexclude

- Default: ""
- Type: String

Space-separated options that limit the results from search.

#### searchstaleness

- Default: 900 (15 minutes)
- Type: Number

The age of the cache, in seconds, before another registry request is made.

#### registry

- Default: https://registry.npmjs.org/
- Type: url

Search the specified registry for modules. If you have configured npm to point
to a different default registry, such as your internal private module
repository, `npm search` will default to that registry when searching. Pass a
different registry url such as the default above in order to override this
setting.

### See Also

- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm view](/cli-commands/npm-view)

---

section: cli-commands
title: npm-shrinkwrap
description: Lock down dependency versions for publication

---

# npm-shrinkwrap(1)

## Lock down dependency versions for publication

### Synopsis

```bash
npm shrinkwrap
```

### Description

This command repurposes `package-lock.json` into a publishable
`npm-shrinkwrap.json` or simply creates a new one. The file created and updated
by this command will then take precedence over any other existing or future
`package-lock.json` files. For a detailed explanation of the design and purpose
of package locks in npm, see [package-locks](/configuring-npm/package-locks).

### See Also

- [npm install](/cli-commands/npm-install)
- [npm run-script](/cli-commands/npm-run-script)
- [npm scripts](/using-npm/scripts)
- [package.js](/configuring-npm/package-json)
- [package-locks](/configuring-npm/package-locks)
- [package-lock.json](/configuring-npm/package-lock-json)
- [shrinkwrap.json](/configuring-npm/shrinkwrap-json)
- [npm ls](/cli-commands/npm-ls)

---

section: cli-commands
title: npm-star
description: Mark your favorite packages

---

# npm-star(1)

## Mark your favorite packages

### Synopsis

```bash
npm star [<pkg>...]
npm unstar [<pkg>...]
```

### Description

"Starring" a package means that you have some interest in it. It's
a vaguely positive way to show that you care.

"Unstarring" is the same thing, but in reverse.

It's a boolean thing. Starring repeatedly has no additional effect.

### See Also

- [npm view](/cli-commands/npm-view)
- [npm whoami](/cli-commands/npm-whoami)
- [npm adduser](/cli-commands/npm-adduser)

---

section: cli-commands
title: npm-stars
description: View packages marked as favorites

---

# npm-stars(1)

## View packages marked as favorites

### Synopsis

```bash
npm stars [<user>]
```

### Description

If you have starred a lot of neat things and want to find them again
quickly this command lets you do just that.

You may also want to see your friend's favorite packages, in this case
you will most certainly enjoy this command.

### See Also

- [npm star](/cli-commands/npm-star)
- [npm view](/cli-commands/npm-view)
- [npm whoami](/cli-commands/npm-whoami)
- [npm adduser](/cli-commands/npm-adduser)

---

section: cli-commands
title: npm-start
description: Start a package

---

# npm-start(1)

## Start a package

### Synopsis

```bash
npm start [-- <args>]
```

### Description

This runs an arbitrary command specified in the package's `"start"` property of
its `"scripts"` object. If no `"start"` property is specified on the
`"scripts"` object, it will run `node server.js`.

As of [`npm@2.0.0`](https://blog.npmjs.org/post/98131109725/npm-2-0-0), you can
use custom arguments when executing scripts. Refer to [`npm run-script`](/cli-commands/npm-run-script) for more details.

### See Also

- [npm run-script](/cli-commands/npm-run-script)
- [npm scripts](/using-npm/scripts)
- [npm test](/cli-commands/npm-test)
- [npm restart](/cli-commands/npm-restart)
- [npm stop](/cli-commands/npm-stop)

---

section: cli-commands
title: npm-stop
description: Stop a package

---

# npm-stop(1)

## Stop a package

### Synopsis

```bash
npm stop [-- <args>]
```

### Description

This runs a package's "stop" script, if one was provided.

### See Also

- [npm run-script](/cli-commands/npm-run-script)
- [npm scripts](/using-npm/scripts)
- [npm test](/cli-commands/npm-test)
- [npm start](/cli-commands/npm-start)
- [npm restart](/cli-commands/npm-restart)

---

section: cli-commands
title: npm-team
description: Manage organization teams and team memberships

---

# npm-team(1)

## Manage organization teams and team memberships

### Synopsis

```bash
npm team create <scope:team>
npm team destroy <scope:team>

npm team add <scope:team> <user>
npm team rm <scope:team> <user>

npm team ls <scope>|<scope:team>

npm team edit <scope:team>
```

### Description

Used to manage teams in organizations, and change team memberships. Does not
handle permissions for packages.

Teams must always be fully qualified with the organization/scope they belong to
when operating on them, separated by a colon (`:`). That is, if you have a `wombats` team in a `wisdom` organization, you must always refer to that team as `wisdom:wombats` in these commands.

If you have two-factor authentication enabled in `auth-and-writes` mode, then you can provide a code from your authenticator with `[--otp <otpcode>]`. If you don't include this then you will be prompted.

- create / destroy:
  Create a new team, or destroy an existing one. Note: You cannot remove the `developers` team, <a href="https://docs.npmjs.com/about-developers-team" target="_blank">learn more.</a>
- add / rm:
  Add a user to an existing team, or remove a user from a team they belong to.

- ls:
  If performed on an organization name, will return a list of existing teams
  under that organization. If performed on a team, it will instead return a list
  of all users belonging to that particular team.

- edit:
  Edit a current team.

### Details

`npm team` always operates directly on the current registry, configurable from
the command line using `--registry=<registry url>`.

In order to create teams and manage team membership, you must be a _team admin_
under the given organization. Listing teams and team memberships may be done by
any member of the organizations.

Organization creation and management of team admins and _organization_ members
is done through the website, not the npm CLI.

To use teams to manage permissions on packages belonging to your organization,
use the `npm access` command to grant or revoke the appropriate permissions.

### See Also

- [npm access](/cli-commands/npm-access)
- [npm registry](/using-npm/registry)

---

section: cli-commands
title: npm-test
description: Test a package

---

# npm-test(1)

## Test a package

### Synopsis

```bash
npm test [-- <args>]

aliases: t, tst
```

### Description

This runs a package's "test" script, if one was provided.

### See Also

- [npm run-script](/cli-commands/npm-run-script)
- [npm scripts](/using-npm/scripts)
- [npm start](/cli-commands/npm-start)
- [npm restart](/cli-commands/npm-restart)
- [npm stop](/cli-commands/npm-stop)

---

section: cli-commands
title: npm-token
description: Manage your authentication tokens

---

# npm-token(1)

## Manage your authentication tokens

### Synopsis

```bash
  npm token list [--json|--parseable]
  npm token create [--read-only] [--cidr=1.1.1.1/24,2.2.2.2/16]
  npm token revoke <id|token>
```

### Description

This lets you list, create and revoke authentication tokens.

- `npm token list`:
  Shows a table of all active authentication tokens. You can request this as
  JSON with `--json` or tab-separated values with `--parseable`.

```bash
+--------+---------+------------+----------+----------------+
| id     | token   | created    | read-only | CIDR whitelist |
+--------+---------+------------+----------+----------------+
| 7f3134 | 1fa9ba… | 2017-10-02 | yes      |                |
+--------+---------+------------+----------+----------------+
| c03241 | af7aef… | 2017-10-02 | no       | 192.168.0.1/24 |
+--------+---------+------------+----------+----------------+
| e0cf92 | 3a436a… | 2017-10-02 | no       |                |
+--------+---------+------------+----------+----------------+
| 63eb9d | 74ef35… | 2017-09-28 | no       |                |
+--------+---------+------------+----------+----------------+
| 2daaa8 | cbad5f… | 2017-09-26 | no       |                |
+--------+---------+------------+----------+----------------+
| 68c2fe | 127e51… | 2017-09-23 | no       |                |
+--------+---------+------------+----------+----------------+
| 6334e1 | 1dadd1… | 2017-09-23 | no       |                |
+--------+---------+------------+----------+----------------+
```

- `npm token create [--read-only] [--cidr=<cidr-ranges>]`:
  Create a new authentication token. It can be `--read-only` or accept a list of
  [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) ranges to
  limit use of this token to. This will prompt you for your password, and, if you have
  two-factor authentication enabled, an otp.

```bash
+----------------+--------------------------------------+
| token          | a73c9572-f1b9-8983-983d-ba3ac3cc913d |
+----------------+--------------------------------------+
| cidr_whitelist |                                      |
+----------------+--------------------------------------+
| readonly       | false                                |
+----------------+--------------------------------------+
| created        | 2017-10-02T07:52:24.838Z             |
+----------------+--------------------------------------+
```

- `npm token revoke <token|id>`:
  This removes an authentication token, making it immediately unusable. This can accept
  both complete tokens (as you get back from `npm token create` and will
  find in your `.npmrc`) and ids as seen in the `npm token list` output.
  This will NOT accept the truncated token found in `npm token list` output.

---

section: cli-commands
title: npm-uninstall
description: Remove a package

---

# npm-uninstall(1)

## Remove a package

### Synopsis

```bash
npm uninstall [<@scope>/]<pkg>[@<version>]... [-S|--save|-D|--save-dev|-O|--save-optional|--no-save]

aliases: remove, rm, r, un, unlink
```

### Description

This uninstalls a package, completely removing everything npm installed
on its behalf.

Example:

```bash
npm uninstall sax
```

In global mode (ie, with `-g` or `--global` appended to the command),
it uninstalls the current package context as a global package.

`npm uninstall` takes 3 exclusive, optional flags which save or update
the package version in your main package.json:

- `-S, --save`: Package will be removed from your `dependencies`.

- `-D, --save-dev`: Package will be removed from your `devDependencies`.

- `-O, --save-optional`: Package will be removed from your `optionalDependencies`.

- `--no-save`: Package will not be removed from your `package.json` file.

Further, if you have an `npm-shrinkwrap.json` then it will be updated as
well.

Scope is optional and follows the usual rules for [`scope`](/using-npm/scope).

Examples:

```bash
npm uninstall sax --save
npm uninstall @myorg/privatepackage --save
npm uninstall node-tap --save-dev
npm uninstall dtrace-provider --save-optional
npm uninstall lodash --no-save
```

### See Also

- [npm prune](/cli-commands/npm-prune)
- [npm install](/cli-commands/npm-install)
- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)

---

section: cli-commands
title: npm-unpublish
description: Remove a package from the registry

---

# npm-unpublish(1)

## Remove a package from the registry

### Synopsis

#### Unpublishing a single version of a package

```bash
npm unpublish [<@scope>/]<pkg>@<version>
```

#### Unpublishing an entire package

```bash
npm unpublish [<@scope>/]<pkg> --force
```

### Warning

Consider using the `deprecate` command instead, if your intent is to encourage users to upgrade, or if you no longer want to maintain a package.

### Description

This removes a package version from the registry, deleting its
entry and removing the tarball.

If no version is specified, or if all versions are removed then
the root package entry is removed from the registry entirely.

Even if a package version is unpublished, that specific name and
version combination can never be reused. In order to publish the
package again, a new version number must be used. If you unpublish the entire package, you may not publish any new versions of that package until 24 hours have passed.

To learn more about how unpublish is treated on the npm registry, see our <a href="https://www.npmjs.com/policies/unpublish" target="_blank" rel="noopener noreferrer"> unpublish policies</a>.

### See Also

- [npm deprecate](/cli-commands/npm-deprecate)
- [npm publish](/cli-commands/npm-publish)
- [npm registry](/using-npm/registry)
- [npm adduser](/cli-commands/npm-adduser)
- [npm owner](/cli-commands/npm-owner)

---

section: cli-commands
title: npm-update
description: Update a package

---

# npm-update(1)

## Update a package

### Synopsis

```bash
npm update [-g] [<pkg>...]

aliases: up, upgrade
```

### Description

This command will update all the packages listed to the latest version
(specified by the `tag` config), respecting semver.

It will also install missing packages. As with all commands that install
packages, the `--dev` flag will cause `devDependencies` to be processed
as well.

If the `-g` flag is specified, this command will update globally installed
packages.

If no package name is specified, all packages in the specified location (global
or local) will be updated.

As of `npm@2.6.1`, the `npm update` will only inspect top-level packages.
Prior versions of `npm` would also recursively inspect all dependencies.
To get the old behavior, use `npm --depth 9999 update`.

As of `npm@5.0.0`, the `npm update` will change `package.json` to save the
new version as the minimum required dependency. To get the old behavior,
use `npm update --no-save`.

### Example

IMPORTANT VERSION NOTE: these examples assume `npm@2.6.1` or later. For
older versions of `npm`, you must specify `--depth 0` to get the behavior
described below.

For the examples below, assume that the current package is `app` and it depends
on dependencies, `dep1` (`dep2`, .. etc.). The published versions of `dep1` are:

```json
{
  "dist-tags": { "latest": "1.2.2" },
  "versions": [
    "1.2.2",
    "1.2.1",
    "1.2.0",
    "1.1.2",
    "1.1.1",
    "1.0.0",
    "0.4.1",
    "0.4.0",
    "0.2.0"
  ]
}
```

#### Caret Dependencies

If `app`'s `package.json` contains:

```json
"dependencies": {
  "dep1": "^1.1.1"
}
```

Then `npm update` will install `dep1@1.2.2`, because `1.2.2` is `latest` and
`1.2.2` satisfies `^1.1.1`.

#### Tilde Dependencies

However, if `app`'s `package.json` contains:

```json
"dependencies": {
  "dep1": "~1.1.1"
}
```

In this case, running `npm update` will install `dep1@1.1.2`. Even though the `latest`
tag points to `1.2.2`, this version does not satisfy `~1.1.1`, which is equivalent
to `>=1.1.1 <1.2.0`. So the highest-sorting version that satisfies `~1.1.1` is used,
which is `1.1.2`.

#### Caret Dependencies below 1.0.0

Suppose `app` has a caret dependency on a version below `1.0.0`, for example:

```json
"dependencies": {
  "dep1": "^0.2.0"
}
```

`npm update` will install `dep1@0.2.0`, because there are no other
versions which satisfy `^0.2.0`.

If the dependence were on `^0.4.0`:

```json
"dependencies": {
  "dep1": "^0.4.0"
}
```

Then `npm update` will install `dep1@0.4.1`, because that is the highest-sorting
version that satisfies `^0.4.0` (`>= 0.4.0 <0.5.0`)

#### Updating Globally-Installed Packages

`npm update -g` will apply the `update` action to each globally installed
package that is `outdated` -- that is, has a version that is different from
`wanted`.

Note: Globally installed packages are treated as if they are installed with a caret semver range specified. So if you require to update to `latest` you may need to run `npm install -g [<pkg>...]`

NOTE: If a package has been upgraded to a version newer than `latest`, it will
be _downgraded_.

### See Also

- [npm install](/cli-commands/npm-install)
- [npm outdated](/cli-commands/npm-outdated)
- [npm shrinkwrap](/cli-commands/npm-shrinkwrap)
- [npm registry](/using-npm/registry)
- [npm folders](/configuring-npm/folders)
- [npm ls](/cli-commands/npm-ls)

---

section: cli-commands
title: npm-version
description: Bump a package version

---

# npm-version(1)

## Bump a package version

### Synopsis

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

'npm [-v | --version]' to print npm version
'npm view <pkg> version' to view a package's published version
'npm ls' to inspect current package/dependency versions
```

### Description

Run this in a package directory to bump the version and write the new
data back to `package.json`, `package-lock.json`, and, if present, `npm-shrinkwrap.json`.

The `newversion` argument should be a valid semver string, a
valid second argument to [semver.inc](https://github.com/npm/node-semver#functions) (one of `patch`, `minor`, `major`,
`prepatch`, `preminor`, `premajor`, `prerelease`), or `from-git`. In the second case,
the existing version will be incremented by 1 in the specified field.
`from-git` will try to read the latest git tag, and use that as the new npm version.

If run in a git repo, it will also create a version commit and tag.
This behavior is controlled by `git-tag-version` (see below), and can
be disabled on the command line by running `npm --no-git-tag-version version`.
It will fail if the working directory is not clean, unless the `-f` or
`--force` flag is set.

If supplied with `-m` or `--message` config option, npm will
use it as a commit message when creating a version commit. If the
`message` config contains `%s` then that will be replaced with the
resulting version number. For example:

```bash
npm version patch -m "Upgrade to %s for reasons"
```

If the `sign-git-tag` config is set, then the tag will be signed using
the `-s` flag to git. Note that you must have a default GPG key set up
in your git config for this to work properly. For example:

```bash
$ npm config set sign-git-tag true
$ npm version patch

You need a passphrase to unlock the secret key for
user: "isaacs (http://blog.izs.me/) <i@izs.me>"
2048-bit RSA key, ID 6C481CF6, created 2010-08-31

Enter passphrase:
```

If `preversion`, `version`, or `postversion` are in the `scripts` property of
the package.json, they will be executed as part of running `npm version`.

The exact order of execution is as follows:

1. Check to make sure the git working directory is clean before we get started.
   Your scripts may add files to the commit in future steps.
   This step is skipped if the `--force` flag is set.
2. Run the `preversion` script. These scripts have access to the old `version` in package.json.
   A typical use would be running your full test suite before deploying.
   Any files you want added to the commit should be explicitly added using `git add`.
3. Bump `version` in `package.json` as requested (`patch`, `minor`, `major`, etc).
4. Run the `version` script. These scripts have access to the new `version` in package.json
   (so they can incorporate it into file headers in generated files for example).
   Again, scripts should explicitly add generated files to the commit using `git add`.
5. Commit and tag.
6. Run the `postversion` script. Use it to clean up the file system or automatically push
   the commit and/or tag.

Take the following example:

```json
    "scripts": {
      "preversion": "npm test",
      "version": "npm run build && git add -A dist",
      "postversion": "git push && git push --tags && rm -rf build/temp"
    }
```

This runs all your tests, and proceeds only if they pass. Then runs your `build` script, and
adds everything in the `dist` directory to the commit. After the commit, it pushes the new commit
and tag up to the server, and deletes the `build/temp` directory.

### Configuration

#### allow-same-version

- Default: false
- Type: Boolean

Prevents throwing an error when `npm version` is used to set the new version
to the same value as the current version.

#### git-tag-version

- Default: true
- Type: Boolean

Commit and tag the version change.

#### commit-hooks

- Default: true
- Type: Boolean

Run git commit hooks when committing the version change.

#### sign-git-tag

- Default: false
- Type: Boolean

Pass the `-s` flag to git to sign the tag.

Note that you must have a default GPG key set up in your git config for this to work properly.

### See Also

- [npm init](/cli-commands/npm-init)
- [npm run-script](/cli-commands/npm-run-script)
- [npm scripts](/using-npm/scripts)
- [package.json](/configuring-npm/package-json)
- [semver](/using-npm/semver)
- [config](/using-npm/config)

---

section: cli-commands
title: npm-view
description: View registry info

---

# npm-view(1)

## View registry info

### Synopsis

```bash
npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...]

aliases: info, show, v
```

### Description

This command shows data about a package and prints it to the stream
referenced by the `outfd` config, which defaults to stdout.

To show the package registry entry for the `connect` package, you can do
this:

```bash
npm view connect
```

The default version is "latest" if unspecified.

Field names can be specified after the package descriptor.
For example, to show the dependencies of the `ronn` package at version
0.3.5, you could do the following:

```bash
npm view ronn@0.3.5 dependencies
```

You can view child fields by separating them with a period.
To view the git repository URL for the latest version of npm, you could
do this:

```bash
npm view npm repository.url
```

This makes it easy to view information about a dependency with a bit of
shell scripting. For example, to view all the data about the version of
opts that ronn depends on, you can do this:

```bash
npm view opts@$(npm view ronn dependencies.opts)
```

For fields that are arrays, requesting a non-numeric field will return
all of the values from the objects in the list. For example, to get all
the contributor names for the "express" project, you can do this:

```bash
npm view express contributors.email
```

You may also use numeric indices in square braces to specifically select
an item in an array field. To just get the email address of the first
contributor in the list, you can do this:

```bash
npm view express contributors[0].email
```

Multiple fields may be specified, and will be printed one after another.
For example, to get all the contributor names and email addresses, you
can do this:

```bash
npm view express contributors.name contributors.email
```

"Person" fields are shown as a string if they would be shown as an
object. So, for example, this will show the list of npm contributors in
the shortened string format. (See [`package.json`](/configuring-npm/package.json) for more on this.)

```bash
npm view npm contributors
```

If a version range is provided, then data will be printed for every
matching version of the package. This will show which version of jsdom
was required by each matching version of yui3:

```bash
npm view yui3@'>0.5.4' dependencies.jsdom
```

To show the `connect` package version history, you can do
this:

```bash
npm view connect versions
```

### Output

If only a single string field for a single version is output, then it
will not be colorized or quoted, so as to enable piping the output to
another command. If the field is an object, it will be output as a JavaScript object literal.

If the --json flag is given, the outputted fields will be JSON.

If the version range matches multiple versions, than each printed value
will be prefixed with the version it applies to.

If multiple fields are requested, than each of them are prefixed with
the field name.

### See Also

- [npm search](/cli-commands/npm-search)
- [npm registry](/using-npm/registry)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm docs](/cli-commands/npm-docs)

---

section: cli-commands
title: npm-whoami
description: Display npm username

---

# npm-whoami(1)

## Display npm username

### Synopsis

```bash
npm whoami [--registry <registry>]
```

### Description

Print the `username` config to standard output.

### See Also

- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm adduser](/cli-commands/npm-adduser)

---

section: cli-commands
title: npm
description: javascript package manager

---

# npm(1)

## javascript package manager

### Synopsis

```bash
npm <command> [args]
```

### Version

@VERSION@

### Description

npm is the package manager for the Node JavaScript platform. It puts
modules in place so that node can find them, and manages dependency
conflicts intelligently.

It is extremely configurable to support a wide variety of use cases.
Most commonly, it is used to publish, discover, install, and develop node
programs.

Run `npm help` to get a list of available commands.

### Important

npm is configured to use npm, Inc.'s public registry at
https://registry.npmjs.org by default. Use of the npm public registry is
subject to terms of use available at https://www.npmjs.com/policies/terms.

You can configure npm to use any compatible registry you like, and even run
your own registry. Use of someone else's registry may be governed by their
terms of use.

### Introduction

You probably got npm because you want to install stuff.

Use `npm install blerg` to install the latest version of "blerg". Check out
[`npm install`](/cli-commands/npm-install) for more info. It can do a lot of stuff.

Use the `npm search` command to show everything that's available.
Use `npm ls` to show everything you've installed.

### Dependencies

If a package references to another package with a git URL, npm depends
on a preinstalled git.

If one of the packages npm tries to install is a native node module and
requires compiling of C++ Code, npm will use
[node-gyp](https://github.com/nodejs/node-gyp) for that task.
For a Unix system, [node-gyp](https://github.com/nodejs/node-gyp)
needs Python, make and a buildchain like GCC. On Windows,
Python and Microsoft Visual Studio C++ are needed.
For more information visit
[the node-gyp repository](https://github.com/nodejs/node-gyp) and
the [node-gyp Wiki](https://github.com/nodejs/node-gyp/wiki).

### Directories

See [`folders`](/configuring-npm/folders) to learn about where npm puts stuff.

In particular, npm has two modes of operation:

- global mode:
  npm installs packages into the install prefix at
  `prefix/lib/node_modules` and bins are installed in `prefix/bin`.
- local mode:
  npm installs packages into the current project directory, which
  defaults to the current working directory. Packages are installed to
  `./node_modules`, and bins are installed to `./node_modules/.bin`.

Local mode is the default. Use `-g` or `--global` on any command to
operate in global mode instead.

### Developer Usage

If you're using npm to develop and publish your code, check out the
following help topics:

- json:
  Make a package.json file. See [`package.json`](/configuring-npm/package.json).
- link:
  For linking your current working code into Node's path, so that you
  don't have to reinstall every time you make a change. Use
  `npm link` to do this.
- install:
  It's a good idea to install things if you don't need the symbolic link.
  Especially, installing other peoples code from the registry is done via
  `npm install`
- adduser:
  Create an account or log in. Credentials are stored in the
  user config file.
- publish:
  Use the `npm publish` command to upload your code to the registry.

#### Configuration

npm is extremely configurable. It reads its configuration options from
5 places.

- Command line switches:
  Set a config with `--key val`. All keys take a value, even if they
  are booleans (the config parser doesn't know what the options are at
  the time of parsing). If no value is provided, then the option is set
  to boolean `true`.
- Environment Variables:
  Set any config by prefixing the name in an environment variable with
  `npm_config_`. For example, `export npm_config_key=val`.
- User Configs:
  The file at $HOME/.npmrc is an ini-formatted list of configs. If
  present, it is parsed. If the `userconfig` option is set in the cli
  or env, then that will be used instead.
- Global Configs:
  The file found at ../etc/npmrc (from the node executable, by default
  this resolves to /usr/local/etc/npmrc) will be parsed if it is found.
  If the `globalconfig` option is set in the cli, env, or user config,
  then that file is parsed instead.
- Defaults:
  npm's default configuration options are defined in
  lib/utils/config-defs.js. These must not be changed.

See [`config`](/using-npm/config) for much much more information.
