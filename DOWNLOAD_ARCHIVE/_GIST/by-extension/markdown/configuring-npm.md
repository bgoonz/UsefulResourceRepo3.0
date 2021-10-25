---
section: configuring-npm
title: folders
description: Folder Structures Used by npm
---

# folders(5)

## Folder Structures Used by npm

### Description

npm puts various things on your computer. That's its job.

This document will tell you what it puts where.

#### tl;dr

- Local install (default): puts stuff in `./node_modules` of the current
  package root.
- Global install (with `-g`): puts stuff in /usr/local or wherever node
  is installed.
- Install it **locally** if you're going to `require()` it.
- Install it **globally** if you're going to run it on the command line.
- If you need both, then install it in both places, or use `npm link`.

#### prefix Configuration

The `prefix` config defaults to the location where node is installed.
On most systems, this is `/usr/local`. On Windows, it's `%AppData%\npm`.
On Unix systems, it's one level up, since node is typically installed at
`{prefix}/bin/node` rather than `{prefix}/node.exe`.

When the `global` flag is set, npm installs things into this prefix.
When it is not set, it uses the root of the current package, or the
current working directory if not in a package already.

#### Node Modules

Packages are dropped into the `node_modules` folder under the `prefix`.
When installing locally, this means that you can
`require("packagename")` to load its main module, or
`require("packagename/lib/path/to/sub/module")` to load other modules.

Global installs on Unix systems go to `{prefix}/lib/node_modules`.
Global installs on Windows go to `{prefix}/node_modules` (that is, no
`lib` folder.)

Scoped packages are installed the same way, except they are grouped together
in a sub-folder of the relevant `node_modules` folder with the name of that
scope prefix by the @ symbol, e.g. `npm install @myorg/package` would place
the package in `{prefix}/node_modules/@myorg/package`. See [`scope`](/using-npm/scope) for more details.

If you wish to `require()` a package, then install it locally.

#### Executables

When in global mode, executables are linked into `{prefix}/bin` on Unix,
or directly into `{prefix}` on Windows.

When in local mode, executables are linked into
`./node_modules/.bin` so that they can be made available to scripts run
through npm. (For example, so that a test runner will be in the path
when you run `npm test`.)

#### Man Pages

When in global mode, man pages are linked into `{prefix}/share/man`.

When in local mode, man pages are not installed.

Man pages are not installed on Windows systems.

#### Cache

See [`npm cache`](/cli-commands/npm-cache). Cache files are stored in `~/.npm` on Posix, or
`%AppData%/npm-cache` on Windows.

This is controlled by the `cache` configuration param.

#### Temp Files

Temporary files are stored by default in the folder specified by the
`tmp` config, which defaults to the TMPDIR, TMP, or TEMP environment
variables, or `/tmp` on Unix and `c:\windows\temp` on Windows.

Temp files are given a unique folder under this root for each run of the
program, and are deleted upon successful exit.

### More Information

When installing locally, npm first tries to find an appropriate
`prefix` folder. This is so that `npm install foo@1.2.3` will install
to the sensible root of your package, even if you happen to have `cd`ed
into some other folder.

Starting at the $PWD, npm will walk up the folder tree checking for a
folder that contains either a `package.json` file, or a `node_modules`
folder. If such a thing is found, then that is treated as the effective
"current directory" for the purpose of running npm commands. (This
behavior is inspired by and similar to git's .git-folder seeking
logic when running git commands in a working dir.)

If no package root is found, then the current folder is used.

When you run `npm install foo@1.2.3`, then the package is loaded into
the cache, and then unpacked into `./node_modules/foo`. Then, any of
foo's dependencies are similarly unpacked into
`./node_modules/foo/node_modules/...`.

Any bin files are symlinked to `./node_modules/.bin/`, so that they may
be found by npm scripts when necessary.

#### Global Installation

If the `global` configuration is set to true, then npm will
install packages "globally".

For global installation, packages are installed roughly the same way,
but using the folders described above.

#### Cycles, Conflicts, and Folder Parsimony

Cycles are handled using the property of node's module system that it
walks up the directories looking for `node_modules` folders. So, at every
stage, if a package is already installed in an ancestor `node_modules`
folder, then it is not installed at the current location.

Consider the case above, where `foo -> bar -> baz`. Imagine if, in
addition to that, baz depended on bar, so you'd have:
`foo -> bar -> baz -> bar -> baz ...`. However, since the folder
structure is: `foo/node_modules/bar/node_modules/baz`, there's no need to
put another copy of bar into `.../baz/node_modules`, since when it calls
require("bar"), it will get the copy that is installed in
`foo/node_modules/bar`.

This shortcut is only used if the exact same
version would be installed in multiple nested `node_modules` folders. It
is still possible to have `a/node_modules/b/node_modules/a` if the two
"a" packages are different versions. However, without repeating the
exact same package multiple times, an infinite regress will always be
prevented.

Another optimization can be made by installing dependencies at the
highest level possible, below the localized "target" folder.

#### Example

Consider this dependency graph:

```bash
foo
+-- blerg@1.2.5
+-- bar@1.2.3
|   +-- blerg@1.x (latest=1.3.7)
|   +-- baz@2.x
|   |   `-- quux@3.x
|   |       `-- bar@1.2.3 (cycle)
|   `-- asdf@*
`-- baz@1.2.3
    `-- quux@3.x
        `-- bar
```

In this case, we might expect a folder structure like this:

```bash
foo
+-- node_modules
    +-- blerg (1.2.5) <---[A]
    +-- bar (1.2.3) <---[B]
    |   `-- node_modules
    |       +-- baz (2.0.2) <---[C]
    |       |   `-- node_modules
    |       |       `-- quux (3.2.0)
    |       `-- asdf (2.3.4)
    `-- baz (1.2.3) <---[D]
        `-- node_modules
            `-- quux (3.2.0) <---[E]
```

Since foo depends directly on `bar@1.2.3` and `baz@1.2.3`, those are
installed in foo's `node_modules` folder.

Even though the latest copy of blerg is 1.3.7, foo has a specific
dependency on version 1.2.5. So, that gets installed at [A]. Since the
parent installation of blerg satisfies bar's dependency on `blerg@1.x`,
it does not install another copy under [B].

Bar [B] also has dependencies on baz and asdf, so those are installed in
bar's `node_modules` folder. Because it depends on `baz@2.x`, it cannot
re-use the `baz@1.2.3` installed in the parent `node_modules` folder [D],
and must install its own copy [C].

Underneath bar, the `baz -> quux -> bar` dependency creates a cycle.
However, because bar is already in quux's ancestry [B], it does not
unpack another copy of bar into that folder.

Underneath `foo -> baz` [D], quux's [E] folder tree is empty, because its
dependency on bar is satisfied by the parent folder copy installed at [B].

For a graphical breakdown of what is installed where, use `npm ls`.

#### Publishing

Upon publishing, npm will look in the `node_modules` folder. If any of
the items there are not in the `bundledDependencies` array, then they will
not be included in the package tarball.

This allows a package maintainer to install all of their dependencies
(and dev dependencies) locally, but only re-publish those items that
cannot be found elsewhere. See [`package.json`](/configuring-npm/package.json) for more information.

### See also

- [package.json](/configuring-npm/package-json)
- [npm install](/cli-commands/npm-install)
- [npm pack](/cli-commands/npm-pack)
- [npm cache](/cli-commands/npm-cache)
- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [config](/using-npm/config)
- [npm publish](/cli-commands/npm-publish)

---

section: configuring-npm
title: install
description: Download and install node and npm

---

# install(5)

## Download and Install npm

### Description

To publish and install packages to and from the public npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer. **We strongly recommend using a Node version manager to install Node.js and npm.** We do not recommend using a Node installer, since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally.

### Overview

- [Checking your version of npm and Node.js](#checking-your-version-of-npm-and-node-js)
- [Using a Node version manager to install Node.js and npm](#using-a-node-version-manager-to-install-node-js-and-npm)
- [Using a Node installer to install Node.js and npm](#using-a-node-installer-to-install-node-js-and-npm)

### Checking your version of npm and Node.js

To see if you already have Node.js and npm installed and check the installed version, run the following commands:

```
node -v
npm -v
```

### Using a Node version manager to install Node.js and npm

Node version managers allow you to install and switch between multiple versions of Node.js and npm on your system so you can test your applications on multiple versions of npm to ensure they work for users on different versions.

#### OSX or Linux Node version managers

- [nvm](https://github.com/creationix/nvm)
- [n](https://github.com/tj/n)

#### Windows Node version managers

- [nodist](https://github.com/marcelklehr/nodist)
- [nvm-windows](https://github.com/coreybutler/nvm-windows)

### Using a Node installer to install Node.js and npm

If you are unable to use a Node version manager, you can use a Node installer to install both Node.js and npm on your system.

- [Node.js installer](https://nodejs.org/en/download/)
- [NodeSource installer](https://github.com/nodesource/distributions). If you use Linux, we recommend that you use a NodeSource installer.

#### OS X or Windows Node installers

If you're using OS X or Windows, use one of the installers from the [Node.js download page](https://nodejs.org/en/download/). Be sure to install the version labeled **LTS**. Other versions have not yet been tested with npm.

#### Linux or other operating systems Node installers

If you're using Linux or another operating system, use one of the following installers:

- [NodeSource installer](https://github.com/nodesource/distributions) (recommended)
- One of the installers on the [Node.js download page](https://nodejs.org/en/download/)

Or see [this page](https://nodejs.org/en/download/package-manager/) to install npm for Linux in the way many Linux developers prefer.

#### Less-common operating systems

For more information on installing Node.js on a variety of operating systems, see [this page][pkg-mgr].

[pkg-mgr]: https://nodejs.org/en/download/package-manager/

---

section: configuring-npm
title: npmrc
description: The npm config files

---

# npmrc(5)

## The npm config files

### Description

npm gets its config settings from the command line, environment
variables, and `npmrc` files.

The `npm config` command can be used to update and edit the contents
of the user and global npmrc files.

For a list of available configuration options, see [config](/using-npm/config).

### Files

The four relevant files are:

- per-project config file (/path/to/my/project/.npmrc)
- per-user config file (~/.npmrc)
- global config file ($PREFIX/etc/npmrc)
- npm builtin config file (/path/to/npm/npmrc)

All npm config files are an ini-formatted list of `key = value`
parameters. Environment variables can be replaced using
`${VARIABLE_NAME}`. For example:

```bash
prefix = ${HOME}/.npm-packages
```

Each of these files is loaded, and config options are resolved in
priority order. For example, a setting in the userconfig file would
override the setting in the globalconfig file.

Array values are specified by adding "[]" after the key name. For
example:

```bash
key[] = "first value"
key[] = "second value"
```

#### Comments

Lines in `.npmrc` files are interpreted as comments when they begin with a `;` or `#` character. `.npmrc` files are parsed by [npm/ini](https://github.com/npm/ini), which specifies this comment syntax.

For example:

```bash
# last modified: 01 Jan 2016
; Set a new registry for a scoped package
@myscope:registry=https://mycustomregistry.example.org
```

#### Per-project config file

When working locally in a project, a `.npmrc` file in the root of the
project (ie, a sibling of `node_modules` and `package.json`) will set
config values specific to this project.

Note that this only applies to the root of the project that you're
running npm in. It has no effect when your module is published. For
example, you can't publish a module that forces itself to install
globally, or in a different location.

Additionally, this file is not read in global mode, such as when running
`npm install -g`.

#### Per-user config file

`$HOME/.npmrc` (or the `userconfig` param, if set in the environment
or on the command line)

#### Global config file

`$PREFIX/etc/npmrc` (or the `globalconfig` param, if set above):
This file is an ini-file formatted list of `key = value` parameters.
Environment variables can be replaced as above.

#### Built-in config file

`path/to/npm/itself/npmrc`

This is an unchangeable "builtin" configuration file that npm keeps
consistent across updates. Set fields in here using the `./configure`
script that comes with npm. This is primarily for distribution
maintainers to override default configs in a standard and consistent
manner.

### See also

- [npm folders](/configuring-npm/folders)
- [npm config](/cli-commands/npm-config)
- [config](/using-npm/config)
- [package.json](/configuring-npm/package-json)
- [npm](/cli-commands/npm)

---

section: configuring-npm
title: package.json
description: Specifics of npm's package.json handling

---

# package.json(5)

## Specifics of npm's package.json handling

### Description

This document is all you need to know about what's required in your package.json
file. It must be actual JSON, not just a JavaScript object literal.

A lot of the behavior described in this document is affected by the config
settings described in [`config`](/using-npm/config).

### name

If you plan to publish your package, the _most_ important things in your
package.json are the name and version fields as they will be required. The name
and version together form an identifier that is assumed to be completely unique.
Changes to the package should come along with changes to the version. If you don't
plan to publish your package, the name and version fields are optional.

The name is what your thing is called.

Some rules:

- The name must be less than or equal to 214 characters. This includes the scope for
  scoped packages.
- The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
- New packages must not have uppercase letters in the name.
- The name ends up being part of a URL, an argument on the command line, and a
  folder name. Therefore, the name can't contain any non-URL-safe characters.

Some tips:

- Don't use the same name as a core Node module.
- Don't put "js" or "node" in the name. It's assumed that it's js, since you're
  writing a package.json file, and you can specify the engine using the "engines"
  field. (See below.)
- The name will probably be passed as an argument to require(), so it should
  be something short, but also reasonably descriptive.
- You may want to check the npm registry to see if there's something by that name
  already, before you get too attached to it. <https://www.npmjs.com/>

A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`. See
[`scope`](/using-npm/scope) for more detail.

### version

If you plan to publish your package, the _most_ important things in your
package.json are the name and version fields as they will be required. The name
and version together form an identifier that is assumed to be completely unique.
Changes to the package should come along with changes to the version. If you don't
plan to publish your package, the name and version fields are optional.

Version must be parseable by
[node-semver](https://github.com/isaacs/node-semver), which is bundled
with npm as a dependency. (`npm install semver` to use it yourself.)

More on version numbers and ranges at [semver](/using-npm/semver).

### description

Put a description in it. It's a string. This helps people discover your
package, as it's listed in `npm search`.

### keywords

Put keywords in it. It's an array of strings. This helps people
discover your package as it's listed in `npm search`.

### homepage

The url to the project homepage.

Example:

```json
"homepage": "https://github.com/owner/project#readme"
```

### bugs

The url to your project's issue tracker and / or the email address to which
issues should be reported. These are helpful for people who encounter issues
with your package.

It should look like this:

```json
{
  "url": "https://github.com/owner/project/issues",
  "email": "project@hostname.com"
}
```

You can specify either one or both values. If you want to provide only a url,
you can specify the value for "bugs" as a simple string instead of an object.

If a url is provided, it will be used by the `npm bugs` command.

### license

You should specify a license for your package so that people know how they are
permitted to use it, and any restrictions you're placing on it.

If you're using a common license such as BSD-2-Clause or MIT, add a
current SPDX license identifier for the license you're using, like this:

```json
{ "license": "BSD-3-Clause" }
```

You can check [the full list of SPDX license IDs](https://spdx.org/licenses/).
Ideally you should pick one that is
[OSI](https://opensource.org/licenses/alphabetical) approved.

If your package is licensed under multiple common licenses, use an [SPDX license
expression syntax version 2.0 string](https://www.npmjs.com/package/spdx), like this:

```json
{ "license": "(ISC OR GPL-3.0)" }
```

If you are using a license that hasn't been assigned an SPDX identifier, or if
you are using a custom license, use a string value like this one:

```json
{ "license": "SEE LICENSE IN <filename>" }
```

Then include a file named `<filename>` at the top level of the package.

Some old packages used license objects or a "licenses" property containing an
array of license objects:

```json
// Not valid metadata
{ "license" :
  { "type" : "ISC"
  , "url" : "https://opensource.org/licenses/ISC"
  }
}

// Not valid metadata
{ "licenses" :
  [
    { "type": "MIT"
    , "url": "https://www.opensource.org/licenses/mit-license.php"
    }
  , { "type": "Apache-2.0"
    , "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}
```

Those styles are now deprecated. Instead, use SPDX expressions, like this:

```json
{ "license": "ISC" }

{ "license": "(MIT OR Apache-2.0)" }
```

Finally, if you do not wish to grant others the right to use a private or
unpublished package under any terms:

```json
{ "license": "UNLICENSED" }
```

Consider also setting `"private": true` to prevent accidental publication.

### people fields: author, contributors

The "author" is one person. "contributors" is an array of people. A "person"
is an object with a "name" field and optionally "url" and "email", like this:

```json
{
  "name": "Barney Rubble",
  "email": "b@rubble.com",
  "url": "http://barnyrubble.tumblr.com/"
}
```

Or you can shorten that all into a single string, and npm will parse it for you:

```json
"Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
```

Both email and url are optional either way.

npm also sets a top-level "maintainers" field with your npm user info.

### funding

You can specify an object containing an URL that provides up-to-date
information about ways to help fund development of your package, or
a string URL, or an array of these:

    "funding": {
      "type" : "individual",
      "url" : "http://example.com/donate"
    }

    "funding": {
      "type" : "patreon",
      "url" : "https://www.patreon.com/my-account"
    }

    "funding": "http://example.com/donate"

    "funding": [
      {
        "type" : "individual",
        "url" : "http://example.com/donate"
      },
      "http://example.com/donateAlso",
      {
        "type" : "patreon",
        "url" : "https://www.patreon.com/my-account"
      }
    ]

Users can use the `npm fund` subcommand to list the `funding` URLs of all
dependencies of their project, direct and indirect. A shortcut to visit each
funding url is also available when providing the project name such as:
`npm fund <projectname>` (when there are multiple URLs, the first one will be
visited)

### files

The optional `files` field is an array of file patterns that describes
the entries to be included when your package is installed as a
dependency. File patterns follow a similar syntax to `.gitignore`, but
reversed: including a file, directory, or glob pattern (`*`, `**/*`, and such)
will make it so that file is included in the tarball when it's packed. Omitting
the field will make it default to `["*"]`, which means it will include all files.

Some special files and directories are also included or excluded regardless of
whether they exist in the `files` array (see below).

You can also provide a `.npmignore` file in the root of your package or
in subdirectories, which will keep files from being included. At the
root of your package it will not override the "files" field, but in
subdirectories it will. The `.npmignore` file works just like a
`.gitignore`. If there is a `.gitignore` file, and `.npmignore` is
missing, `.gitignore`'s contents will be used instead.

Files included with the "package.json#files" field _cannot_ be excluded
through `.npmignore` or `.gitignore`.

Certain files are always included, regardless of settings:

- `package.json`
- `README`
- `CHANGES` / `CHANGELOG` / `HISTORY`
- `LICENSE` / `LICENCE`
- `NOTICE`
- The file in the "main" field

`README`, `CHANGES`, `LICENSE` & `NOTICE` can have any case and extension.

Conversely, some files are always ignored:

- `.git`
- `CVS`
- `.svn`
- `.hg`
- `.lock-wscript`
- `.wafpickle-N`
- `.DS_Store`
- `npm-debug.log`
- `.npmrc`
- `node_modules`
- `config.gypi`
- `package-lock.json` (use shrinkwrap instead)
- All files containing a `*` character (incompatible with Windows)

### main

The main field is a module ID that is the primary entry point to your program.
That is, if your package is named `foo`, and a user installs it, and then does
`require("foo")`, then your main module's exports object will be returned.

This should be a module ID relative to the root of your package folder.

For most modules, it makes the most sense to have a main script and often not
much else.

### browser

If your module is meant to be used client-side the browser field should be
used instead of the main field. This is helpful to hint users that it might
rely on primitives that aren't available in Node.js modules. (e.g. `window`)

### bin

A lot of packages have one or more executable files that they'd like to
install into the PATH. npm makes this pretty easy (in fact, it uses this
feature to install the "npm" executable.)

To use this, supply a `bin` field in your package.json which is a map of
command name to local file name. On install, npm will symlink that file into
`prefix/bin` for global installs, or `./node_modules/.bin/` for local
installs.

For example, myapp could have this:

```json
{ "bin": { "myapp": "./cli.js" } }
```

So, when you install myapp, it'll create a symlink from the `cli.js` script to
`/usr/local/bin/myapp`.

If you have a single executable, and its name should be the name
of the package, then you can just supply it as a string. For example:

```json
{ "name": "my-program", "version": "1.2.5", "bin": "./path/to/program" }
```

would be the same as this:

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": { "my-program": "./path/to/program" }
}
```

Please make sure that your file(s) referenced in `bin` starts with
`#!/usr/bin/env node`, otherwise the scripts are started without the node
executable!

### man

Specify either a single file or an array of filenames to put in place for the
`man` program to find.

If only a single file is provided, then it's installed such that it is the
result from `man <pkgname>`, regardless of its actual filename. For example:

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}
```

would link the `./man/doc.1` file in such that it is the target for `man foo`

If the filename doesn't start with the package name, then it's prefixed.
So, this:

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/bar.1"]
}
```

will create files to do `man foo` and `man foo-bar`.

Man files must end with a number, and optionally a `.gz` suffix if they are
compressed. The number dictates which man section the file is installed into.

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": ["./man/foo.1", "./man/foo.2"]
}
```

will create entries for `man foo` and `man 2 foo`

### directories

The CommonJS [Packages](http://wiki.commonjs.org/wiki/Packages/1.0) spec details a
few ways that you can indicate the structure of your package using a `directories`
object. If you look at [npm's package.json](https://registry.npmjs.org/npm/latest),
you'll see that it has directories for doc, lib, and man.

In the future, this information may be used in other creative ways.

#### directories.lib

Tell people where the bulk of your library is. Nothing special is done
with the lib folder in any way, but it's useful meta info.

#### directories.bin

If you specify a `bin` directory in `directories.bin`, all the files in
that folder will be added.

Because of the way the `bin` directive works, specifying both a
`bin` path and setting `directories.bin` is an error. If you want to
specify individual files, use `bin`, and for all the files in an
existing `bin` directory, use `directories.bin`.

#### directories.man

A folder that is full of man pages. Sugar to generate a "man" array by
walking the folder.

#### directories.doc

Put markdown files in here. Eventually, these will be displayed nicely,
maybe, someday.

#### directories.example

Put example scripts in here. Someday, it might be exposed in some clever way.

#### directories.test

Put your tests in here. It is currently not exposed, but it might be in the
future.

### repository

Specify the place where your code lives. This is helpful for people who
want to contribute. If the git repo is on GitHub, then the `npm docs`
command will be able to find you.

Do it like this:

```json
"repository": {
  "type" : "git",
  "url" : "https://github.com/npm/cli.git"
}

"repository": {
  "type" : "svn",
  "url" : "https://v8.googlecode.com/svn/trunk/"
}
```

The URL should be a publicly available (perhaps read-only) url that can be handed
directly to a VCS program without any modification. It should not be a url to an
html project page that you put in your browser. It's for computers.

For GitHub, GitHub gist, Bitbucket, or GitLab repositories you can use the same
shortcut syntax you use for `npm install`:

```json
"repository": "npm/npm"

"repository": "github:user/repo"

"repository": "gist:11081aaa281"

"repository": "bitbucket:user/repo"

"repository": "gitlab:user/repo"
```

If the `package.json` for your package is not in the root directory (for example
if it is part of a monorepo), you can specify the directory in which it lives:

```json
"repository": {
  "type" : "git",
  "url" : "https://github.com/facebook/react.git",
  "directory": "packages/react-dom"
}
```

### scripts

The "scripts" property is a dictionary containing script commands that are run
at various times in the lifecycle of your package. The key is the lifecycle
event, and the value is the command to run at that point.

See [`scripts`](/using-npm/scripts) to find out more about writing package scripts.

### config

A "config" object can be used to set configuration parameters used in package
scripts that persist across upgrades. For instance, if a package had the
following:

```json
{ "name": "foo", "config": { "port": "8080" } }
```

and then had a "start" command that then referenced the
`npm_package_config_port` environment variable, then the user could
override that by doing `npm config set foo:port 8001`.

See [`config`](/using-npm/config) and [`scripts`](/using-npm/scripts) for more on package
configs.

### dependencies

Dependencies are specified in a simple object that maps a package name to a
version range. The version range is a string which has one or more
space-separated descriptors. Dependencies can also be identified with a
tarball or git URL.

**Please do not put test harnesses or transpilers in your
`dependencies` object.** See `devDependencies`, below.

See [semver](/using-npm/semver) for more details about specifying version ranges.

- `version` Must match `version` exactly
- `>version` Must be greater than `version`
- `>=version` etc
- `<version`
- `<=version`
- `~version` "Approximately equivalent to version" See [semver](/using-npm/semver)
- `^version` "Compatible with version" See [semver](/using-npm/semver)
- `1.2.x` 1.2.0, 1.2.1, etc., but not 1.3.0
- `http://...` See 'URLs as Dependencies' below
- `*` Matches any version
- `""` (just an empty string) Same as `*`
- `version1 - version2` Same as `>=version1 <=version2`.
- `range1 || range2` Passes if either range1 or range2 are satisfied.
- `git...` See 'Git URLs as Dependencies' below
- `user/repo` See 'GitHub URLs' below
- `tag` A specific version tagged and published as `tag` See [`npm dist-tag`](/cli-commands/npm-dist-tag)
- `path/path/path` See [Local Paths](#local-paths) below

For example, these are all valid:

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

#### URLs as Dependencies

You may specify a tarball URL in place of a version range.

This tarball will be downloaded and installed locally to your package at
install time.

#### Git URLs as Dependencies

Git urls are of the form:

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
specified, then `master` is used.

Examples:

```bash
git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git#v1.0.27
```

#### GitHub URLs

As of version 1.1.65, you can refer to GitHub urls as just "foo":
"user/foo-project". Just as with git URLs, a `commit-ish` suffix can be
included. For example:

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature/branch"
  }
}
```

#### Local Paths

As of version 2.0.0 you can provide a path to a local directory that contains a
package. Local paths can be saved using `npm install -S` or
`npm install --save`, using any of these forms:

```bash
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

in which case they will be normalized to a relative path and added to your
`package.json`. For example:

```json
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

This feature is helpful for local offline development and creating
tests that require npm installing where you don't want to hit an
external server, but should not be used when publishing packages
to the public registry.

### devDependencies

If someone is planning on downloading and using your module in their
program, then they probably don't want or need to download and build
the external test or documentation framework that you use.

In this case, it's best to map these additional items in a `devDependencies`
object.

These things will be installed when doing `npm link` or `npm install`
from the root of a package, and can be managed like any other npm
configuration param. See [`config`](/using-npm/config) for more on the topic.

For build steps that are not platform-specific, such as compiling
CoffeeScript or other languages to JavaScript, use the `prepare`
script to do this, and make the required package a devDependency.

For example:

```json
{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepare": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

The `prepare` script will be run before publishing, so that users
can consume the functionality without requiring them to compile it
themselves. In dev mode (ie, locally running `npm install`), it'll
run this script as well, so that you can test it easily.

### peerDependencies

In some cases, you want to express the compatibility of your package with a
host tool or library, while not necessarily doing a `require` of this host.
This is usually referred to as a _plugin_. Notably, your module may be exposing
a specific interface, expected and specified by the host documentation.

For example:

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

This ensures your package `tea-latte` can be installed _along_ with the second
major version of the host package `tea` only. `npm install tea-latte` could
possibly yield the following dependency graph:

```bash
├── tea-latte@1.3.5
└── tea@2.2.0
```

**NOTE: npm versions 1 and 2 will automatically install `peerDependencies` if
they are not explicitly depended upon higher in the dependency tree. In the
next major version of npm (npm@3), this will no longer be the case. You will
receive a warning that the peerDependency is not installed instead.** The
behavior in npms 1 & 2 was frequently confusing and could easily put you into
dependency hell, a situation that npm is designed to avoid as much as possible.

Trying to install another plugin with a conflicting requirement will cause an
error. For this reason, make sure your plugin requirement is as broad as
possible, and not to lock it down to specific patch versions.

Assuming the host complies with [semver](https://semver.org/), only changes in
the host package's major version will break your plugin. Thus, if you've worked
with every 1.x version of the host package, use `"^1.0"` or `"1.x"` to express
this. If you depend on features introduced in 1.5.2, use `">= 1.5.2 < 2"`.

### bundledDependencies

This defines an array of package names that will be bundled when publishing
the package.

In cases where you need to preserve npm packages locally or have them
available through a single file download, you can bundle the packages in a
tarball file by specifying the package names in the `bundledDependencies`
array and executing `npm pack`.

For example:

If we define a package.json like this:

```json
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundledDependencies": ["renderized", "super-streams"]
}
```

we can obtain `awesome-web-framework-1.0.0.tgz` file by running `npm pack`.
This file contains the dependencies `renderized` and `super-streams` which
can be installed in a new project by executing `npm install awesome-web-framework-1.0.0.tgz`. Note that the package names do not include
any versions, as that information is specified in `dependencies`.

If this is spelled `"bundleDependencies"`, then that is also honored.

### optionalDependencies

If a dependency can be used, but you would like npm to proceed if it cannot be
found or fails to install, then you may put it in the `optionalDependencies`
object. This is a map of package name to version or url, just like the
`dependencies` object. The difference is that build failures do not cause
installation to fail. Running `npm install --no-optional` will prevent these
dependencies from being installed.

It is still your program's responsibility to handle the lack of the
dependency. For example, something like this:

```js
try {
  var foo = require("foo");
  var fooVersion = require("foo/package.json").version;
} catch (er) {
  foo = null;
}
if (notGoodFooVersion(fooVersion)) {
  foo = null;
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings();
}
```

Entries in `optionalDependencies` will override entries of the same name in
`dependencies`, so it's usually best to only put in one place.

### engines

You can specify the version of node that your stuff works on:

```json
{ "engines": { "node": ">=0.10.3 <0.12" } }
```

And, like with dependencies, if you don't specify the version (or if you
specify "\*" as the version), then any version of node will do.

If you specify an "engines" field, then npm will require that "node" be
somewhere on that list. If "engines" is omitted, then npm will just assume
that it works on node.

You can also use the "engines" field to specify which versions of npm
are capable of properly installing your program. For example:

```json
{ "engines": { "npm": "~1.0.20" } }
```

Unless the user has set the `engine-strict` config flag, this
field is advisory only and will only produce warnings when your package is installed as a dependency.

### engineStrict

**This feature was removed in npm 3.0.0**

Prior to npm 3.0.0, this feature was used to treat this package as if the
user had set `engine-strict`. It is no longer used.

### os

You can specify which operating systems your
module will run on:

```json
"os" : [ "darwin", "linux" ]
```

You can also blacklist instead of whitelist operating systems,
just prepend the blacklisted os with a '!':

```json
"os" : [ "!win32" ]
```

The host operating system is determined by `process.platform`

It is allowed to both blacklist, and whitelist, although there isn't any
good reason to do this.

### cpu

If your code only runs on certain cpu architectures,
you can specify which ones.

```json
"cpu" : [ "x64", "ia32" ]
```

Like the `os` option, you can also blacklist architectures:

```json
"cpu" : [ "!arm", "!mips" ]
```

The host architecture is determined by `process.arch`

### preferGlobal

**DEPRECATED**

This option used to trigger an npm warning, but it will no longer warn. It is
purely there for informational purposes. It is now recommended that you install
any binaries as local devDependencies wherever possible.

### private

If you set `"private": true` in your package.json, then npm will refuse
to publish it.

This is a way to prevent accidental publication of private repositories. If
you would like to ensure that a given package is only ever published to a
specific registry (for example, an internal registry), then use the
`publishConfig` dictionary described below to override the `registry` config
param at publish-time.

### publishConfig

This is a set of config values that will be used at publish-time. It's
especially handy if you want to set the tag, registry or access, so that
you can ensure that a given package is not tagged with "latest", published
to the global public registry or that a scoped module is private by default.

Any config values can be overridden, but only "tag", "registry" and "access"
probably matter for the purposes of publishing.

See [`config`](/using-npm/config) to see the list of config options that can be
overridden.

### DEFAULT VALUES

npm will default some values based on package contents.

- `"scripts": {"start": "node server.js"}`

  If there is a `server.js` file in the root of your package, then npm
  will default the `start` command to `node server.js`.

- `"scripts":{"install": "node-gyp rebuild"}`

  If there is a `binding.gyp` file in the root of your package and you have not defined an `install` or `preinstall` script, npm will
  default the `install` command to compile using node-gyp.

- `"contributors": [...]`

  If there is an `AUTHORS` file in the root of your package, npm will
  treat each line as a `Name <email> (url)` format, where email and url
  are optional. Lines which start with a `#` or are blank, will be
  ignored.

### SEE ALSO

- [semver](/using-npm/semver)
- [npm init](/cli-commands/npm-init)
- [npm version](/cli-commands/npm-version)
- [npm config](/cli-commands/npm-config)
- [npm help](/cli-commands/npm-help)
- [npm install](/cli-commands/npm-install)
- [npm publish](/cli-commands/npm-publish)
- [npm uninstall](/cli-commands/npm-uninstall)

---

section: configuring-npm
title: package-lock.json
description: A manifestation of the manifest

---

# package-lock.json(5)

## A manifestation of the manifest

### Description

`package-lock.json` is automatically generated for any operations where npm
modifies either the `node_modules` tree, or `package.json`. It describes the
exact tree that was generated, such that subsequent installs are able to
generate identical trees, regardless of intermediate dependency updates.

This file is intended to be committed into source repositories, and serves
various purposes:

- Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.

- Provide a facility for users to "time-travel" to previous states of `node_modules` without having to commit the directory itself.

- To facilitate greater visibility of tree changes through readable source control diffs.

- And optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.

One key detail about `package-lock.json` is that it cannot be published, and it
will be ignored if found in any place other than the toplevel package. It shares
a format with [npm-shrinkwrap.json](/configuring-npm/shrinkwrap-json), which is essentially the same file, but
allows publication. This is not recommended unless deploying a CLI tool or
otherwise using the publication process for producing production packages.

If both `package-lock.json` and `npm-shrinkwrap.json` are present in the root of
a package, `package-lock.json` will be completely ignored.

### File Format

#### name

The name of the package this is a package-lock for. This must match what's in
`package.json`.

#### version

The version of the package this is a package-lock for. This must match what's in
`package.json`.

#### lockfileVersion

An integer version, starting at `1` with the version number of this document
whose semantics were used when generating this `package-lock.json`.

#### packageIntegrity

This is a [subresource
integrity](https://w3c.github.io/webappsec/specs/subresourceintegrity/) value
created from the `package.json`. No preprocessing of the `package.json` should
be done. Subresource integrity strings can be produced by modules like
[`ssri`](https://www.npmjs.com/package/ssri).

#### preserveSymlinks

Indicates that the install was done with the environment variable
`NODE_PRESERVE_SYMLINKS` enabled. The installer should insist that the value of
this property match that environment variable.

#### dependencies

A mapping of package name to dependency object. Dependency objects have the
following properties:

##### version

This is a specifier that uniquely identifies this package and should be
usable in fetching a new copy of it.

- bundled dependencies: Regardless of source, this is a version number that is purely for informational purposes.
- registry sources: This is a version number. (eg, `1.2.3`)
- git sources: This is a git specifier with resolved committish. (eg, `git+https://example.com/foo/bar#115311855adb0789a0466714ed48a1499ffea97e`)
- http tarball sources: This is the URL of the tarball. (eg, `https://example.com/example-1.3.0.tgz`)
- local tarball sources: This is the file URL of the tarball. (eg `file:///opt/storage/example-1.3.0.tgz`)
- local link sources: This is the file URL of the link. (eg `file:libs/our-module`)

##### integrity

This is a [Standard Subresource
Integrity](https://w3c.github.io/webappsec/specs/subresourceintegrity/) for this
resource.

- For bundled dependencies this is not included, regardless of source.
- For registry sources, this is the `integrity` that the registry provided, or if one wasn't provided the SHA1 in `shasum`.
- For git sources this is the specific commit hash we cloned from.
- For remote tarball sources this is an integrity based on a SHA512 of
  the file.
- For local tarball sources: This is an integrity field based on the SHA512 of the file.

##### resolved

- For bundled dependencies this is not included, regardless of source.
- For registry sources this is path of the tarball relative to the registry
  URL. If the tarball URL isn't on the same server as the registry URL then
  this is a complete URL.

##### bundled

If true, this is the bundled dependency and will be installed by the parent
module. When installing, this module will be extracted from the parent
module during the extract phase, not installed as a separate dependency.

##### dev

If true then this dependency is either a development dependency ONLY of the
top level module or a transitive dependency of one. This is false for
dependencies that are both a development dependency of the top level and a
transitive dependency of a non-development dependency of the top level.

##### optional

If true then this dependency is either an optional dependency ONLY of the
top level module or a transitive dependency of one. This is false for
dependencies that are both an optional dependency of the top level and a
transitive dependency of a non-optional dependency of the top level.

All optional dependencies should be included even if they're uninstallable
on the current platform.

##### requires

This is a mapping of module name to version. This is a list of everything
this module requires, regardless of where it will be installed. The version
should match via normal matching rules a dependency either in our
`dependencies` or in a level higher than us.

##### dependencies

The dependencies of this dependency, exactly as at the top level.

### See also

- [npm shrinkwrap](/cli-commands/npm-shrinkwrap)
- [shrinkwrap.json](/configuring-npm/shrinkwrap-json)
- [package-locks](/configuring-npm/package-locks)
- [package.json](/configuring-npm/package-json)
- [npm install](/cli-commands/npm-install)

---

section: configuring-npm
title: package-locks
description: An explanation of npm lockfiles

---

# package-locks(5)

## An explanation of npm lockfiles

### Description

Conceptually, the "input" to [`npm install`](/cli-commands/npm-install) is a [package.json](/configuring-npm/package-json), while its
"output" is a fully-formed `node_modules` tree: a representation of the
dependencies you declared. In an ideal world, npm would work like a pure
function: the same `package.json` should produce the exact same `node_modules`
tree, any time. In some cases, this is indeed true. But in many others, npm is
unable to do this. There are multiple reasons for this:

- different versions of npm (or other package managers) may have been used to install a package, each using slightly different installation algorithms.

- a new version of a direct semver-range package may have been published since the last time your packages were installed, and thus a newer version will be used.

- A dependency of one of your dependencies may have published a new version, which will update even if you used pinned dependency specifiers (`1.2.3` instead of `^1.2.3`)

- The registry you installed from is no longer available, or allows mutation of versions (unlike the primary npm registry), and a different version of a package exists under the same version number now.

As an example, consider package A:

```json
{
  "name": "A",
  "version": "0.1.0",
  "dependencies": {
    "B": "<0.1.0"
  }
}
```

package B:

```json
{
  "name": "B",
  "version": "0.0.1",
  "dependencies": {
    "C": "<0.1.0"
  }
}
```

and package C:

```json
{
  "name": "C",
  "version": "0.0.1"
}
```

If these are the only versions of A, B, and C available in the
registry, then a normal `npm install A` will install:

```json
A@0.1.0
`-- B@0.0.1
    `-- C@0.0.1
```

However, if B@0.0.2 is published, then a fresh `npm install A` will
install:

```bash
A@0.1.0
`-- B@0.0.2
    `-- C@0.0.1
```

assuming the new version did not modify B's dependencies. Of course,
the new version of B could include a new version of C and any number
of new dependencies. If such changes are undesirable, the author of A
could specify a dependency on B@0.0.1. However, if A's author and B's
author are not the same person, there's no way for A's author to say
that he or she does not want to pull in newly published versions of C
when B hasn't changed at all.

To prevent this potential issue, npm uses [package-lock.json](/configuring-npm/package-lock-json) or, if present, [npm-shrinkwrap.json](/configuring-npm/shrinkwrap-json). These files are called package locks, or lockfiles.

Whenever you run `npm install`, npm generates or updates your package lock,
which will look something like this:

```json
{
  "name": "A",
  "version": "0.1.0",
  ...metadata fields...
  "dependencies": {
    "B": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/B/-/B-0.0.1.tgz",
      "integrity": "sha512-DeAdb33F+"
      "dependencies": {
        "C": {
          "version": "git://github.com/org/C.git#5c380ae319fc4efe9e7f2d9c78b0faa588fd99b4"
        }
      }
    }
  }
}
```

This file describes an _exact_, and more importantly _reproducible_
`node_modules` tree. Once it's present, any future installation will base its
work off this file, instead of recalculating dependency versions off
[package.json](/configuring-npm/package-json).

The presence of a package lock changes the installation behavior such that:

1. The module tree described by the package lock is reproduced. This means
   reproducing the structure described in the file, using the specific files
   referenced in "resolved" if available, falling back to normal package resolution
   using "version" if one isn't.

2. The tree is walked and any missing dependencies are installed in the usual
   fashion.

If `preshrinkwrap`, `shrinkwrap` or `postshrinkwrap` are in the `scripts`
property of the `package.json`, they will be executed in order. `preshrinkwrap`
and `shrinkwrap` are executed before the shrinkwrap, `postshrinkwrap` is
executed afterwards. These scripts run for both `package-lock.json` and
`npm-shrinkwrap.json`. For example to run some postprocessing on the generated
file:

```json
  "scripts": {
    "postshrinkwrap": "json -I -e \"this.myMetadata = $MY_APP_METADATA\""
  }
```

#### Using locked packages

Using a locked package is no different than using any package without a package
lock: any commands that update `node_modules` and/or `package.json`'s
dependencies will automatically sync the existing lockfile. This includes `npm install`, `npm rm`, `npm update`, etc. To prevent this update from happening,
you can use the `--no-save` option to prevent saving altogether, or
`--no-shrinkwrap` to allow `package.json` to be updated while leaving
`package-lock.json` or `npm-shrinkwrap.json` intact.

It is highly recommended you commit the generated package lock to source
control: this will allow anyone else on your team, your deployments, your
CI/continuous integration, and anyone else who runs `npm install` in your
package source to get the exact same dependency tree that you were developing
on. Additionally, the diffs from these changes are human-readable and will
inform you of any changes npm has made to your `node_modules`, so you can notice
if any transitive dependencies were updated, hoisted, etc.

#### Resolving lockfile conflicts

Occasionally, two separate npm install will create package locks that cause
merge conflicts in source control systems. As of `npm@5.7.0`, these conflicts
can be resolved by manually fixing any `package.json` conflicts, and then
running `npm install [--package-lock-only]` again. npm will automatically
resolve any conflicts for you and write a merged package lock that includes all
the dependencies from both branches in a reasonable tree. If
`--package-lock-only` is provided, it will do this without also modifying your
local `node_modules/`.

To make this process seamless on git, consider installing
[`npm-merge-driver`](https://npm.im/npm-merge-driver), which will teach git how
to do this itself without any user interaction. In short: `$ npx npm-merge-driver install -g` will let you do this, and even works with
pre-`npm@5.7.0` versions of npm 5, albeit a bit more noisily. Note that if
`package.json` itself conflicts, you will have to resolve that by hand and run
`npm install` manually, even with the merge driver.

### See Also

- https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527
- [package.json](/configuring-npm/package-json)
- [package-lock.json](/configuring-npm/package-lock-json)
- [shrinkwrap.json](/configuring-npm/shrinkwrap-json)
- [npm shrinkwrap](/cli-commands/npm-shrinkwrap)

---

section: configuring-npm
title: shrinkwrap.json
description: A publishable lockfile

---

# npm-shrinkwrap.json(5)

## A publishable lockfile

### Description

`npm-shrinkwrap.json` is a file created by [`npm shrinkwrap`](/cli-commands/npm-shrinkwrap). It is identical to
`package-lock.json`, with one major caveat: Unlike `package-lock.json`,
`npm-shrinkwrap.json` may be included when publishing a package.

The recommended use-case for `npm-shrinkwrap.json` is applications deployed
through the publishing process on the registry: for example, daemons and
command-line tools intended as global installs or `devDependencies`. It's
strongly discouraged for library authors to publish this file, since that would
prevent end users from having control over transitive dependency updates.

Additionally, if both `package-lock.json` and `npm-shrinkwrap.json` are present
in a package root, `package-lock.json` will be ignored in favor of this file.

For full details and description of the `npm-shrinkwrap.json` file format, refer
to the manual page for [package-lock.json](/configuring-npm/package-lock-json).
