---
section: using-npm
title: config
description: More than you probably want to know about npm configuration
---

# config(7)

## More than you probably want to know about npm configuration

### Description

npm gets its configuration values from the following sources, sorted by priority:

#### Command Line Flags

Putting `--foo bar` on the command line sets the `foo` configuration
parameter to `"bar"`. A `--` argument tells the cli parser to stop
reading flags. Using `--flag` without specifying any value will set
the value to `true`.

Example: `--flag1 --flag2` will set both configuration parameters
to `true`, while `--flag1 --flag2 bar` will set `flag1` to `true`,
and `flag2` to `bar`. Finally, `--flag1 --flag2 -- bar` will set
both configuration parameters to `true`, and the `bar` is taken
as a command argument.

#### Environment Variables

Any environment variables that start with `npm_config_` will be
interpreted as a configuration parameter. For example, putting
`npm_config_foo=bar` in your environment will set the `foo`
configuration parameter to `bar`. Any environment configurations that
are not given a value will be given the value of `true`. Config
values are case-insensitive, so `NPM_CONFIG_FOO=bar` will work the
same. However, please note that inside [`scripts`](/using-npm/scripts)
npm will set its own environment variables and Node will prefer
those lowercase versions over any uppercase ones that you might set.
For details see [this issue](https://github.com/npm/npm/issues/14528).

Notice that you need to use underscores instead of dashes, so `--allow-same-version`
would become `npm_config_allow_same_version=true`.

#### npmrc Files

The four relevant files are:

- per-project configuration file (`/path/to/my/project/.npmrc`)
- per-user configuration file (defaults to `$HOME/.npmrc`; configurable via CLI
  option `--userconfig` or environment variable `$NPM_CONFIG_USERCONFIG`)
- global configuration file (defaults to `$PREFIX/etc/npmrc`; configurable via
  CLI option `--globalconfig` or environment variable `$NPM_CONFIG_GLOBALCONFIG`)
- npm's built-in configuration file (`/path/to/npm/npmrc`)

See [npmrc](/configuring-npm/npmrc) for more details.

#### Default Configs

Run `npm config ls -l` to see a set of configuration parameters that are
internal to npm, and are defaults if nothing else is specified.

### Shorthands and Other CLI Niceties

The following shorthands are parsed on the command-line:

- `-v`: `--version`
- `-h`, `-?`, `--help`, `-H`: `--usage`
- `-s`, `--silent`: `--loglevel silent`
- `-q`, `--quiet`: `--loglevel warn`
- `-d`: `--loglevel info`
- `-dd`, `--verbose`: `--loglevel verbose`
- `-ddd`: `--loglevel silly`
- `-g`: `--global`
- `-C`: `--prefix`
- `-l`: `--long`
- `-m`: `--message`
- `-p`, `--porcelain`: `--parseable`
- `-reg`: `--registry`
- `-f`: `--force`
- `-desc`: `--description`
- `-S`: `--save`
- `-P`: `--save-prod`
- `-D`: `--save-dev`
- `-O`: `--save-optional`
- `-B`: `--save-bundle`
- `-E`: `--save-exact`
- `-y`: `--yes`
- `-n`: `--yes false`
- `ll` and `la` commands: `ls --long`

If the specified configuration param resolves unambiguously to a known
configuration parameter, then it is expanded to that configuration
parameter. For example:

```bash
npm ls --par
# same as:
npm ls --parseable
```

If multiple single-character shorthands are strung together, and the
resulting combination is unambiguously not some other configuration
param, then it is expanded to its various component pieces. For
example:

```bash
npm ls -gpld
# same as:
npm ls --global --parseable --long --loglevel info
```

### Per-Package Config Settings

When running scripts (see [`scripts`](/using-npm/scripts)) the package.json "config"
keys are overwritten in the environment if there is a config param of
`<name>[@<version>]:<key>`. For example, if the package.json has
this:

```json
{
  "name": "foo",
  "config": { "port": "8080" },
  "scripts": { "start": "node server.js" }
}
```

and the server.js is this:

```javascript
http.createServer(...).listen(process.env.npm_package_config_port)
```

then the user could change the behavior by doing:

```bash
npm config set foo:port 80
```

See [package.json](/configuring-npm/package-json) for more information.

### Config Settings

#### access

- Default: `restricted`
- Type: Access

When publishing scoped packages, the access level defaults to `restricted`. If
you want your scoped package to be publicly viewable (and installable) set
`--access=public`. The only valid values for `access` are `public` and
`restricted`. Unscoped packages _always_ have an access level of `public`.

#### allow-same-version

- Default: false
- Type: Boolean

Prevents throwing an error when `npm version` is used to set the new version
to the same value as the current version.

#### always-auth

- Default: false
- Type: Boolean

Force npm to always require authentication when accessing the registry,
even for `GET` requests.

#### also

- Default: null
- Type: String

When "dev" or "development" and running local `npm shrinkwrap`,
`npm outdated`, or `npm update`, is an alias for `--dev`.

#### audit

- Default: true
- Type: Boolean

When "true" submit audit reports alongside `npm install` runs to the default
registry and all registries configured for scopes. See the documentation
for [`npm audit`](/cli-commands/npm-audit) for details on what is submitted.

#### audit-level

- Default: `"low"`
- Type: `'low'`, `'moderate'`, `'high'`, `'critical'`

The minimum level of vulnerability for `npm audit` to exit with
a non-zero exit code.

#### auth-type

- Default: `'legacy'`
- Type: `'legacy'`, `'sso'`, `'saml'`, `'oauth'`

What authentication strategy to use with `adduser`/`login`.

#### before

- Alias: enjoy-by
- Default: null
- Type: Date

If passed to `npm install`, will rebuild the npm tree such that only versions
that were available **on or before** the `--before` time get installed.
If there's no versions available for the current set of direct dependencies, the
command will error.

If the requested version is a `dist-tag` and the given tag does not pass the
`--before` filter, the most recent version less than or equal to that tag will
be used. For example, `foo@latest` might install `foo@1.2` even though `latest`
is `2.0`.

#### bin-links

- Default: `true`
- Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around
the fact that some file systems don't support symlinks, even on
ostensibly Unix systems.

#### browser

- Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
- Type: String

The browser that is called by the `npm docs` command to open websites.

#### ca

- Default: The npm CA certificate
- Type: String, Array or null

The Certificate Authority signing certificate that is trusted for SSL
connections to the registry. Values should be in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with newlines
replaced by the string "\n". For example:

```bash
ca="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

Set to `null` to only allow "known" registrars, or to a specific CA cert
to trust only that specific signing authority.

Multiple CAs can be trusted by specifying an array of certificates:

```bash
ca[]="..."
ca[]="..."
```

See also the `strict-ssl` config.

#### cafile

- Default: `null`
- Type: path

A path to a file containing one or multiple Certificate Authority signing
certificates. Similar to the `ca` setting, but allows for multiple CA's, as
well as for the CA information to be stored in a file on disk.

#### cache

- Default: Windows: `%AppData%\npm-cache`, Posix: `~/.npm`
- Type: path

The location of npm's cache directory. See [`npm cache`](/cli-commands/npm-cache)

#### cache-lock-stale

- Default: 60000 (1 minute)
- Type: Number

The number of ms before cache folder lockfiles are considered stale.

#### cache-lock-retries

- Default: 10
- Type: Number

Number of times to retry to acquire a lock on cache folder lockfiles.

#### cache-lock-wait

- Default: 10000 (10 seconds)
- Type: Number

Number of ms to wait for cache lock files to expire.

#### cache-max

- Default: Infinity
- Type: Number

**DEPRECATED**: This option has been deprecated in favor of `--prefer-online`.

`--cache-max=0` is an alias for `--prefer-online`.

#### cache-min

- Default: 10
- Type: Number

**DEPRECATED**: This option has been deprecated in favor of `--prefer-offline`.

`--cache-min=9999 (or bigger)` is an alias for `--prefer-offline`.

#### cert

- Default: `null`
- Type: String

A client certificate to pass when accessing the registry. Values should be in
PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string "\n". For example:

```bash
cert="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

It is _not_ the path to a certificate file (and there is no "certfile" option).

#### cidr

- Default: `null`
- Type: String, Array, null

This is a list of CIDR address to be used when configuring limited access tokens with the `npm token create` command.

#### color

- Default: true
- Type: Boolean or `"always"`

If false, never shows colors. If `"always"` then always shows colors.
If true, then only prints color codes for tty file descriptors.

This option can also be changed using the environment: colors are
disabled when the environment variable `NO_COLOR` is set to any value.

#### depth

- Default: Infinity
- Type: Number

The depth to go when recursing directories for `npm ls`,
`npm cache ls`, and `npm outdated`.

For `npm outdated`, a setting of `Infinity` will be treated as `0`
since that gives more useful information. To show the outdated status
of all packages and dependents, use a large integer value,
e.g., `npm outdated --depth 9999`

#### description

- Default: true
- Type: Boolean

Show the description in `npm search`

#### dev

- Default: false
- Type: Boolean

Install `dev-dependencies` along with packages.

#### dry-run

- Default: false
- Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`. This is NOT currently honored by some network related
commands, eg `dist-tags`, `owner`, etc.

#### editor

- Default: `EDITOR` environment variable if set, or `"vi"` on Posix,
  or `"notepad"` on Windows.
- Type: path

The command to run for `npm edit` or `npm config edit`.

#### engine-strict

- Default: false
- Type: Boolean

If set to true, then npm will stubbornly refuse to install (or even
consider installing) any package that claims to not be compatible with
the current Node.js version.

#### force

- Default: false
- Type: Boolean

Makes various commands more forceful.

- lifecycle script failure does not block progress.
- publishing clobbers previously published versions.
- skips cache when requesting from the registry.
- prevents checks against clobbering non-npm files.

#### format-package-lock

- Default: true
- Type: Boolean

Format `package-lock.json` or `npm-shrinkwrap.json` as a human readable file.

#### fetch-retries

- Default: 2
- Type: Number

The "retries" config for the `retry` module to use when fetching
packages from the registry.

#### fetch-retry-factor

- Default: 10
- Type: Number

The "factor" config for the `retry` module to use when fetching
packages.

#### fetch-retry-mintimeout

- Default: 10000 (10 seconds)
- Type: Number

The "minTimeout" config for the `retry` module to use when fetching
packages.

#### fetch-retry-maxtimeout

- Default: 60000 (1 minute)
- Type: Number

The "maxTimeout" config for the `retry` module to use when fetching
packages.

#### fund

- Default: true
- Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding.
See [`npm fund`](/cli-commands/npm-fund) for details.

#### git

- Default: `"git"`
- Type: String

The command to use for git commands. If git is installed on the
computer, but is not in the `PATH`, then set this to the full path to
the git binary.

#### git-tag-version

- Default: `true`
- Type: Boolean

Tag the commit when using the `npm version` command.

#### commit-hooks

- Default: `true`
- Type: Boolean

Run git commit hooks when using the `npm version` command.

#### global

- Default: false
- Type: Boolean

Operates in "global" mode, so that packages are installed into the
`prefix` folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

- packages are installed into the `{prefix}/lib/node_modules` folder, instead of the
  current working directory.
- bin files are linked to `{prefix}/bin`
- man pages are linked to `{prefix}/share/man`

#### globalconfig

- Default: {prefix}/etc/npmrc
- Type: path

The config file to read for global config options.

#### global-style

- Default: false
- Type: Boolean

Causes npm to install the package into your local `node_modules` folder with
the same layout it uses with the global `node_modules` folder. Only your
direct dependencies will show in `node_modules` and everything they depend
on will be flattened in their `node_modules` folders. This obviously will
eliminate some deduping. If used with `legacy-bundling`, `legacy-bundling` will be
preferred.

#### group

- Default: GID of the current process
- Type: String or Number

The group to use when running package scripts in global mode as the root
user.

#### heading

- Default: `"npm"`
- Type: String

The string that starts all the debugging log output.

#### https-proxy

- Default: null
- Type: url

A proxy to use for outgoing https requests. If the `HTTPS_PROXY` or
`https_proxy` or `HTTP_PROXY` or `http_proxy` environment variables are set,
proxy settings will be honored by the underlying `request` library.

#### if-present

- Default: false
- Type: Boolean

If true, npm will not exit with an error code when `run-script` is invoked for
a script that isn't defined in the `scripts` section of `package.json`. This
option can be used when it's desirable to optionally run a script when it's
present and fail if the script fails. This is useful, for example, when running
scripts that may only apply for some builds in an otherwise generic CI setup.

#### ignore-prepublish

- Default: false
- Type: Boolean

If true, npm will not run `prepublish` scripts.

#### ignore-scripts

- Default: false
- Type: Boolean

If true, npm does not run scripts specified in package.json files.

#### init-module

- Default: ~/.npm-init.js
- Type: path

A module that will be loaded by the `npm init` command. See the
documentation for the
[init-package-json](https://github.com/isaacs/init-package-json) module
for more information, or [npm init](/cli-commands/npm-init).

#### init-author-name

- Default: ""
- Type: String

The value `npm init` should use by default for the package author's name.

#### init-author-email

- Default: ""
- Type: String

The value `npm init` should use by default for the package author's email.

#### init-author-url

- Default: ""
- Type: String

The value `npm init` should use by default for the package author's homepage.

#### init-license

- Default: "ISC"
- Type: String

The value `npm init` should use by default for the package license.

#### init-version

- Default: "1.0.0"
- Type: semver

The value that `npm init` should use by default for the package
version number, if not already set in package.json.

#### json

- Default: false
- Type: Boolean

Whether or not to output JSON data, rather than the normal output.

This feature is currently experimental, and the output data structures for many
commands is either not implemented in JSON yet, or subject to change. Only the
output from `npm ls --json` and `npm search --json` are currently valid.

#### key

- Default: `null`
- Type: String

A client key to pass when accessing the registry. Values should be in PEM
format with newlines replaced by the string "\n". For example:

```json
key="-----BEGIN PRIVATE KEY-----\nXXXX\nXXXX\n-----END PRIVATE KEY-----"
```

It is _not_ the path to a key file (and there is no "keyfile" option).

#### legacy-bundling

- Default: false
- Type: Boolean

Causes npm to install the package such that versions of npm prior to 1.4,
such as the one included with node 0.8, can install the package. This
eliminates all automatic deduping. If used with `global-style` this option
will be preferred.

#### link

- Default: false
- Type: Boolean

If true, then local installs will link if there is a suitable globally
installed package.

Note that this means that local installs can cause things to be
installed into the global space at the same time. The link is only done
if one of the two conditions are met:

- The package is not already installed globally, or
- the globally installed version is identical to the version that is
  being installed locally.

#### local-address

- Default: undefined
- Type: IP Address

The IP address of the local interface to use when making connections
to the npm registry. Must be IPv4 in versions of Node prior to 0.12.

#### loglevel

- Default: "notice"
- Type: String
- Values: "silent", "error", "warn", "notice", "http", "timing", "info",
  "verbose", "silly"

What level of logs to report. On failure, _all_ logs are written to
`npm-debug.log` in the current working directory.

Any logs of a higher level than the setting are shown. The default is "notice".

#### logstream

- Default: process.stderr
- Type: Stream

This is the stream that is passed to the
[npmlog](https://github.com/npm/npmlog) module at run time.

It cannot be set from the command line, but if you are using npm
programmatically, you may wish to send logs to somewhere other than
stderr.

If the `color` config is set to true, then this stream will receive
colored output if it is a TTY.

#### logs-max

- Default: 10
- Type: Number

The maximum number of log files to store.

#### long

- Default: false
- Type: Boolean

Show extended information in `npm ls` and `npm search`.

#### maxsockets

- Default: 50
- Type: Number

The maximum number of connections to use per origin (protocol/host/port
combination). Passed to the `http` `Agent` used to make the request.

#### message

- Default: "%s"
- Type: String

Commit message which is used by `npm version` when creating version commit.

Any "%s" in the message will be replaced with the version number.

#### metrics-registry

- Default: The value of `registry` (which defaults to "https://registry.npmjs.org/")
- Type: String

The registry you want to send cli metrics to if `send-metrics` is true.

#### node-options

- Default: null
- Type: String

Options to pass through to Node.js via the `NODE_OPTIONS` environment
variable. This does not impact how npm itself is executed but it does
impact how lifecycle scripts are called.

#### node-version

- Default: process.version
- Type: semver or false

The node version to use when checking a package's `engines` map.

#### noproxy

- Default: null
- Type: String or Array

A comma-separated string or an array of domain extensions that a proxy should not be used for.

#### offline

- Default: false
- Type: Boolean

Force offline mode: no network requests will be done during install. To allow
the CLI to fill in missing cache data, see `--prefer-offline`.

#### onload-script

- Default: false
- Type: path

A node module to `require()` when npm loads. Useful for programmatic
usage.

#### only

- Default: null
- Type: String

When "dev" or "development" and running local `npm install` without any
arguments, only devDependencies (and their dependencies) are installed.

When "dev" or "development" and running local `npm ls`, `npm outdated`, or
`npm update`, is an alias for `--dev`.

When "prod" or "production" and running local `npm install` without any
arguments, only non-devDependencies (and their dependencies) are
installed.

When "prod" or "production" and running local `npm ls`, `npm outdated`, or
`npm update`, is an alias for `--production`.

#### optional

- Default: true
- Type: Boolean

Attempt to install packages in the `optionalDependencies` object. Note
that if these packages fail to install, the overall installation
process is not aborted.

#### otp

- Default: null
- Type: Number

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

#### package-lock

- Default: true
- Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.

When package package-locks are disabled, automatic pruning of extraneous
modules will also be disabled. To remove extraneous modules with
package-locks disabled use `npm prune`.

This option is an alias for `--shrinkwrap`.

#### package-lock-only

- Default: false
- Type: Boolean

If set to true, it will update only the `package-lock.json`,
instead of checking `node_modules` and downloading dependencies.

#### parseable

- Default: false
- Type: Boolean

Output parseable results from commands that write to
standard output. For `npm search`, this will be tab-separated table format.

#### prefer-offline

- Default: false
- Type: Boolean

If true, staleness checks for cached data will be bypassed, but missing data
will be requested from the server. To force full offline mode, use `--offline`.

This option is effectively equivalent to `--cache-min=9999999`.

#### prefer-online

- Default: false
- Type: Boolean

If true, staleness checks for cached data will be forced, making the CLI look
for updates immediately even for fresh package data.

#### prefix

- Default: see [folders](/configuring-npm/folders)
- Type: path

The location to install global items. If set on the command line, then
it forces non-global commands to run in the specified folder.

#### preid

- Default: ""
- Type: String

The "prerelease identifier" to use as a prefix for the "prerelease" part of a
semver. Like the `rc` in `1.2.0-rc.8`.

#### production

- Default: false
- Type: Boolean

Set to true to run in "production" mode.

1. devDependencies are not installed at the topmost level when running
   local `npm install` without any arguments.
2. Set the NODE_ENV="production" for lifecycle scripts.

#### progress

- Default: true, unless TRAVIS or CI env vars set.
- Type: Boolean

When set to `true`, npm will display a progress bar during time intensive
operations, if `process.stderr` is a TTY.

Set to `false` to suppress the progress bar.

#### proxy

- Default: null
- Type: url

A proxy to use for outgoing http requests. If the `HTTP_PROXY` or
`http_proxy` environment variables are set, proxy settings will be
honored by the underlying `request` library.

#### read-only

- Default: false
- Type: Boolean

This is used to mark a token as unable to publish when configuring limited access tokens with the `npm token create` command.

#### rebuild-bundle

- Default: true
- Type: Boolean

Rebuild bundled dependencies after installation.

#### registry

- Default: https://registry.npmjs.org/
- Type: url

The base URL of the npm package registry.

#### rollback

- Default: true
- Type: Boolean

Remove failed installs.

#### save

- Default: true
- Type: Boolean

Save installed packages to a package.json file as dependencies.

When used with the `npm rm` command, it removes it from the `dependencies`
object.

Only works if there is already a package.json file present.

#### save-bundle

- Default: false
- Type: Boolean

If a package would be saved at install time by the use of `--save`,
`--save-dev`, or `--save-optional`, then also put it in the
`bundleDependencies` list.

When used with the `npm rm` command, it removes it from the
bundledDependencies list.

#### save-prod

- Default: false
- Type: Boolean

Makes sure that a package will be saved into `dependencies` specifically. This
is useful if a package already exists in `devDependencies` or
`optionalDependencies`, but you want to move it to be a production dep. This is
also the default behavior if `--save` is true, and neither `--save-dev` or
`--save-optional` are true.

#### save-dev

- Default: false
- Type: Boolean

Save installed packages to a package.json file as `devDependencies`.

When used with the `npm rm` command, it removes it from the
`devDependencies` object.

Only works if there is already a package.json file present.

#### save-exact

- Default: false
- Type: Boolean

Dependencies saved to package.json using `--save`, `--save-dev` or
`--save-optional` will be configured with an exact version rather than
using npm's default semver range operator.

#### save-optional

- Default: false
- Type: Boolean

Save installed packages to a package.json file as
optionalDependencies.

When used with the `npm rm` command, it removes it from the
`devDependencies` object.

Only works if there is already a package.json file present.

#### save-prefix

- Default: '^'
- Type: String

Configure how versions of packages installed to a package.json file via
`--save` or `--save-dev` get prefixed.

For example if a package has version `1.2.3`, by default its version is
set to `^1.2.3` which allows minor upgrades for that package, but after
`npm config set save-prefix='~'` it would be set to `~1.2.3` which only allows
patch upgrades.

#### scope

- Default: the scope of the current project, if any, or ""
- Type: String

Associate an operation with a scope for a scoped registry. Useful when logging
in to a private registry for the first time:
`npm login --scope=@organization --registry=registry.organization.com`, which
will cause `@organization` to be mapped to the registry for future installation
of packages specified according to the pattern `@organization/package`.

#### script-shell

- Default: `null`
- Type: path

The shell to use for scripts run with the `npm run` command.

#### scripts-prepend-node-path

- Default: "warn-only"
- Type: Boolean, `"auto"` or `"warn-only"`

If set to `true`, add the directory in which the current `node` executable
resides to the `PATH` environment variable when running scripts,
even if that means that `npm` will invoke a different `node` executable than
the one which it is running.

If set to `false`, never modify `PATH` with that.

If set to `"warn-only"`, never modify `PATH` but print a warning if `npm` thinks
that you may want to run it with `true`, e.g. because the `node` executable
in the `PATH` is not the one `npm` was invoked with.

If set to `auto`, only add that directory to the `PATH` environment variable
if the `node` executable with which `npm` was invoked and the one that is found
first on the `PATH` are different.

#### searchexclude

- Default: ""
- Type: String

Space-separated options that limit the results from search.

#### searchopts

- Default: ""
- Type: String

Space-separated options that are always passed to search.

#### searchlimit

- Default: 20
- Type: Number

Number of items to limit search results to. Will not apply at all to legacy
searches.

#### searchstaleness

- Default: 900 (15 minutes)
- Type: Number

The age of the cache, in seconds, before another registry request is made if
using legacy search endpoint.

#### send-metrics

- Default: false
- Type: Boolean

If true, success/failure metrics will be reported to the registry stored in
`metrics-registry`. These requests contain the number of successful and
failing runs of the npm CLI and the time period overwhich those counts were
gathered. No identifying information is included in these requests.

#### shell

- Default: SHELL environment variable, or "bash" on Posix, or "cmd" on
  Windows
- Type: path

The shell to run for the `npm explore` command.

#### shrinkwrap

- Default: true
- Type: Boolean

If set to false, then ignore `npm-shrinkwrap.json` files when installing. This
will also prevent _writing_ `npm-shrinkwrap.json` if `save` is true.

This option is an alias for `--package-lock`.

#### sign-git-commit

- Default: false
- Type: Boolean

If set to true, then the `npm version` command will commit the new package
version using `-S` to add a signature.

Note that git requires you to have set up GPG keys in your git configs
for this to work properly.

#### sign-git-tag

- Default: false
- Type: Boolean

If set to true, then the `npm version` command will tag the version
using `-s` to add a signature.

Note that git requires you to have set up GPG keys in your git configs
for this to work properly.

#### sso-poll-frequency

- Default: 500
- Type: Number

When used with SSO-enabled `auth-type`s, configures how regularly the registry
should be polled while the user is completing authentication.

#### sso-type

- Default: 'oauth'
- Type: 'oauth', 'saml', or null

If `--auth-type=sso`, the type of SSO type to use.

#### strict-ssl

- Default: true
- Type: Boolean

Whether or not to do SSL key validation when making requests to the
registry via https.

See also the `ca` config.

#### tag

- Default: latest
- Type: String

If you ask npm to install a package and don't tell it a specific version, then
it will install the specified tag.

Also the tag that is added to the package@version specified by the `npm tag` command, if no explicit tag is given.

#### tag-version-prefix

- Default: `"v"`
- Type: String

If set, alters the prefix used when tagging a new version when performing a
version increment using `npm-version`. To remove the prefix altogether, set it
to the empty string: `""`.

Because other tools may rely on the convention that npm version tags look like
`v1.0.0`, _only use this property if it is absolutely necessary_. In
particular, use care when overriding this setting for public packages.

#### timing

- Default: `false`
- Type: Boolean

If true, writes an `npm-debug` log to `_logs` and timing information to
`_timing.json`, both in your cache. `_timing.json` is a newline delimited
list of JSON objects. You can quickly view it with this
[json](https://www.npmjs.com/package/json) command line:
`json -g < ~/.npm/_timing.json`.

#### tmp

- Default: TMPDIR environment variable, or "/tmp"
- Type: path

Where to store temporary files and folders. All temp files are deleted
on success, but left behind on failure for forensic purposes.

#### unicode

- Default: false on windows, true on mac/unix systems with a unicode locale
- Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters to draw trees.

#### unsafe-perm

- Default: false if running as root, true otherwise
- Type: Boolean

Set to true to suppress the UID/GID switching when running package
scripts. If set explicitly to false, then installing as a non-root user
will fail.

#### update-notifier

- Default: true
- Type: Boolean

Set to false to suppress the update notification when using an older
version of npm than the latest.

#### usage

- Default: false
- Type: Boolean

Set to show short usage output (like the -H output)
instead of complete help when doing [`npm help`](/cli-commands/npm-help).

#### user

- Default: "nobody"
- Type: String or Number

The UID to set to when running package scripts as root.

#### userconfig

- Default: ~/.npmrc
- Type: path

The location of user-level configuration settings.

#### umask

- Default: 022
- Type: Octal numeric string in range 0000..0777 (0..511)

The "umask" value to use when setting the file creation mode on files
and folders.

Folders and executables are given a mode which is `0777` masked against
this value. Other files are given a mode which is `0666` masked against
this value. Thus, the defaults are `0755` and `0644` respectively.

#### user-agent

- Default: node/{process.version} {process.platform} {process.arch}
- Type: String

Sets a User-Agent to the request header

#### version

- Default: false
- Type: boolean

If true, output the npm version and exit successfully.

Only relevant when specified explicitly on the command line.

#### versions

- Default: false
- Type: boolean

If true, output the npm version as well as node's `process.versions` map, and
exit successfully.

Only relevant when specified explicitly on the command line.

#### viewer

- Default: "man" on Posix, "browser" on Windows
- Type: path

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.

### See also

- [npm config](/cli-commands/npm-config)
- [npmrc](/configuring-npm/npmrc)
- [npm scripts](/using-npm/scripts)
- [npm folders](/configuring-npm/folders)
- [npm](/cli-commands/npm)

---

section: using-npm
title: developers
description: Developer Guide

---

# developers(7)

## Developer Guide

### Description

So, you've decided to use npm to develop (and maybe publish/deploy)
your project.

Fantastic!

There are a few things that you need to do above the simple steps
that your users will do to install your program.

### About These Documents

These are man pages. If you install npm, you should be able to
then do `man npm-thing` to get the documentation on a particular
topic, or `npm help thing` to see the same information.

### What is a package

A package is:

- a) a folder containing a program described by a package.json file
- b) a gzipped tarball containing (a)
- c) a url that resolves to (b)
- d) a `<name>@<version>` that is published on the registry with (c)
- e) a `<name>@<tag>` that points to (d)
- f) a `<name>` that has a "latest" tag satisfying (e)
- g) a `git` url that, when cloned, results in (a).

Even if you never publish your package, you can still get a lot of
benefits of using npm if you just want to write a node program (a), and
perhaps if you also want to be able to easily install it elsewhere
after packing it up into a tarball (b).

Git urls can be of the form:

```bash
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```

The `commit-ish` can be any tag, sha, or branch which can be supplied as
an argument to `git checkout`. The default is `master`.

### The package.json File

You need to have a `package.json` file in the root of your project to do
much of anything with npm. That is basically the whole interface.

See [`package.json`](/configuring-npm/package-json) for details about what goes in that file. At the very
least, you need:

- name:
  This should be a string that identifies your project. Please do not
  use the name to specify that it runs on node, or is in JavaScript.
  You can use the "engines" field to explicitly state the versions of
  node (or whatever else) that your program requires, and it's pretty
  well assumed that it's JavaScript.

  It does not necessarily need to match your github repository name.

  So, `node-foo` and `bar-js` are bad names. `foo` or `bar` are better.

- version:
  A semver-compatible version.

- engines:
  Specify the versions of node (or whatever else) that your program
  runs on. The node API changes a lot, and there may be bugs or new
  functionality that you depend on. Be explicit.

- author:
  Take some credit.

- scripts:
  If you have a special compilation or installation script, then you
  should put it in the `scripts` object. You should definitely have at
  least a basic smoke-test command as the "scripts.test" field.
  See [scripts](/using-npm/scripts).

- main:
  If you have a single module that serves as the entry point to your
  program (like what the "foo" package gives you at require("foo")),
  then you need to specify that in the "main" field.

- directories:
  This is an object mapping names to folders. The best ones to include are
  "lib" and "doc", but if you use "man" to specify a folder full of man pages,
  they'll get installed just like these ones.

You can use `npm init` in the root of your package in order to get you
started with a pretty basic package.json file. See [`npm init`](/cli-commands/npm-init) for
more info.

### Keeping files _out_ of your package

Use a `.npmignore` file to keep stuff out of your package. If there's
no `.npmignore` file, but there _is_ a `.gitignore` file, then npm will
ignore the stuff matched by the `.gitignore` file. If you _want_ to
include something that is excluded by your `.gitignore` file, you can
create an empty `.npmignore` file to override it. Like `git`, `npm` looks
for `.npmignore` and `.gitignore` files in all subdirectories of your
package, not only the root directory.

`.npmignore` files follow the [same pattern rules](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files)
as `.gitignore` files:

- Blank lines or lines starting with `#` are ignored.
- Standard glob patterns work.
- You can end patterns with a forward slash `/` to specify a directory.
- You can negate a pattern by starting it with an exclamation point `!`.

By default, the following paths and files are ignored, so there's no
need to add them to `.npmignore` explicitly:

- `.*.swp`
- `._*`
- `.DS_Store`
- `.git`
- `.hg`
- `.npmrc`
- `.lock-wscript`
- `.svn`
- `.wafpickle-*`
- `config.gypi`
- `CVS`
- `npm-debug.log`

Additionally, everything in `node_modules` is ignored, except for
bundled dependencies. npm automatically handles this for you, so don't
bother adding `node_modules` to `.npmignore`.

The following paths and files are never ignored, so adding them to
`.npmignore` is pointless:

- `package.json`
- `README` (and its variants)
- `CHANGELOG` (and its variants)
- `LICENSE` / `LICENCE`

If, given the structure of your project, you find `.npmignore` to be a
maintenance headache, you might instead try populating the `files`
property of `package.json`, which is an array of file or directory names
that should be included in your package. Sometimes a whitelist is easier
to manage than a blacklist.

#### Testing whether your `.npmignore` or `files` config works

If you want to double check that your package will include only the files
you intend it to when published, you can run the `npm pack` command locally
which will generate a tarball in the working directory, the same way it
does for publishing.

### Link Packages

`npm link` is designed to install a development package and see the
changes in real time without having to keep re-installing it. (You do
need to either re-link or `npm rebuild -g` to update compiled packages,
of course.)

More info at [`npm link`](/cli-commands/npm-link).

### Before Publishing: Make Sure Your Package Installs and Works

**This is important.**

If you can not install it locally, you'll have
problems trying to publish it. Or, worse yet, you'll be able to
publish it, but you'll be publishing a broken or pointless package.
So don't do that.

In the root of your package, do this:

```bash
npm install . -g
```

That'll show you that it's working. If you'd rather just create a symlink
package that points to your working directory, then do this:

```bash
npm link
```

Use `npm ls -g` to see if it's there.

To test a local install, go into some other folder, and then do:

```bash
cd ../some-other-folder
npm install ../my-package
```

to install it locally into the node_modules folder in that other place.

Then go into the node-repl, and try using require("my-thing") to
bring in your module's main module.

### Create a User Account

Create a user with the adduser command. It works like this:

```bash
npm adduser
```

and then follow the prompts.

This is documented better in [npm adduser](/cli-commands/npm-adduser).

### Publish your package

This part's easy. In the root of your folder, do this:

```bash
npm publish
```

You can give publish a url to a tarball, or a filename of a tarball,
or a path to a folder.

Note that pretty much **everything in that folder will be exposed**
by default. So, if you have secret stuff in there, use a
`.npmignore` file to list out the globs to ignore, or publish
from a fresh checkout.

### Brag about it

Send emails, write blogs, blab in IRC.

Tell the world how easy it is to install your program!

### See also

- [npm](/cli-commands/npm)
- [npm init](/cli-commands/npm-init)
- [package.json](/configuring-npm/package-json)
- [npm scripts](/using-npm/scripts)
- [npm publish](/cli-commands/npm-publish)
- [npm adduser](/cli-commands/npm-adduser)
- [npm registry](/using-npm/registry)

---

section: using-npm
title: disputes
description: Handling Module Name Disputes

---

# disputes(7)

## Handling Module Name Disputes

This document describes the steps that you should take to resolve module name
disputes with other npm publishers. It also describes special steps you should
take about names you think infringe your trademarks.

This document is a clarification of the acceptable behavior outlined in the
[npm Code of Conduct](https://www.npmjs.com/policies/conduct), and nothing in
this document should be interpreted to contradict any aspect of the npm Code of
Conduct.

### TL;DR

1. Get the author email with `npm owner ls <pkgname>`
2. Email the author, CC <support@npmjs.com>
3. After a few weeks, if there's no resolution, we'll sort it out.

Don't squat on package names. Publish code or move out of the way.

### Description

There sometimes arise cases where a user publishes a module, and then later,
some other user wants to use that name. Here are some common ways that happens
(each of these is based on actual events.)

1. Alice writes a JavaScript module `foo`, which is not node-specific. Alice
   doesn't use node at all. Yusuf wants to use `foo` in node, so he wraps it in
   an npm module. Some time later, Alice starts using node, and wants to take
   over management of her program.
2. Yusuf writes an npm module `foo`, and publishes it. Perhaps much later, Alice
   finds a bug in `foo`, and fixes it. She sends a pull request to Yusuf, but
   Yusuf doesn't have the time to deal with it, because he has a new job and a
   new baby and is focused on his new Erlang project, and kind of not involved
   with node any more. Alice would like to publish a new `foo`, but can't,
   because the name is taken.
3. Yusuf writes a 10-line flow-control library, and calls it `foo`, and
   publishes it to the npm registry. Being a simple little thing, it never
   really has to be updated. Alice works for Foo Inc, the makers of the
   critically acclaimed and widely-marketed `foo` JavaScript toolkit framework.
   They publish it to npm as `foojs`, but people are routinely confused when
   `npm install foo` is some different thing.
4. Yusuf writes a parser for the widely-known `foo` file format, because he
   needs it for work. Then, he gets a new job, and never updates the prototype.
   Later on, Alice writes a much more complete `foo` parser, but can't publish,
   because Yusuf's `foo` is in the way.

5. `npm owner ls foo`. This will tell Alice the email address of the owner
   (Yusuf).
6. Alice emails Yusuf, explaining the situation **as respectfully as possible**,
   and what she would like to do with the module name. She adds the npm support
   staff <support@npmjs.com> to the CC list of the email. Mention in the email
   that Yusuf can run npm owner `add alice foo` to add Alice as an owner of the
   foo package.
7. After a reasonable amount of time, if Yusuf has not responded, or if Yusuf
   and Alice can't come to any sort of resolution, email support
   <support@npmjs.com> and we'll sort it out. ("Reasonable" is usually at least
   4 weeks.)

### Reasoning

In almost every case so far, the parties involved have been able to reach an
amicable resolution without any major intervention. Most people really do want
to be reasonable, and are probably not even aware that they're in your way.

Module ecosystems are most vibrant and powerful when they are as self-directed
as possible. If an admin one day deletes something you had worked on, then that
is going to make most people quite upset, regardless of the justification. When
humans solve their problems by talking to other humans with respect, everyone
has the chance to end up feeling good about the interaction.

### Exceptions

Some things are not allowed, and will be removed without discussion if they are
brought to the attention of the npm registry admins, including but not limited
to:

1. Malware (that is, a package designed to exploit or harm the machine on which
   it is installed).
2. Violations of copyright or licenses (for example, cloning an MIT-licensed
   program, and then removing or changing the copyright and license statement).
3. Illegal content.
4. "Squatting" on a package name that you plan to use, but aren't actually
   using. Sorry, I don't care how great the name is, or how perfect a fit it is
   for the thing that someday might happen. If someone wants to use it today,
   and you're just taking up space with an empty tarball, you're going to be
   evicted.
5. Putting empty packages in the registry. Packages must have SOME
   functionality. It can be silly, but it can't be nothing. (See also:
   squatting.)
6. Doing weird things with the registry, like using it as your own personal
   application database or otherwise putting non-packagey things into it.
7. Other things forbidden by the npm
   [Code of Conduct](https://www.npmjs.com/policies/conduct) such as hateful
   language, pornographic content, or harassment.

If you see bad behavior like this, please report it to <abuse@npmjs.com> right
away. **You are never expected to resolve abusive behavior on your own. We are
here to help.**

### Trademarks

If you think another npm publisher is infringing your trademark, such as by
using a confusingly similar package name, email <abuse@npmjs.com> with a link to
the package or user account on [https://www.npmjs.com/](https://www.npmjs.com/).
Attach a copy of your trademark registration certificate.

If we see that the package's publisher is intentionally misleading others by
misusing your registered mark without permission, we will transfer the package
name to you. Otherwise, we will contact the package publisher and ask them to
clear up any confusion with changes to their package's `README` file or
metadata.

### Changes

This is a living document and may be updated from time to time. Please refer to
the [git history for this document](https://github.com/npm/cli/commits/latest/doc/misc/npm-disputes.md)
to view the changes.

### License

Copyright (C) npm, Inc., All rights reserved

This document may be reused under a Creative Commons Attribution-ShareAlike
License.

### See also

- [npm registry](/using-npm/registry)
- [npm owner](/cli-commands/npm-owner)

---

section: using-npm
title: orgs
description: Working with Teams & Orgs

---

# orgs(7)

## Working with Teams & Orgs

### Description

There are three levels of org users:

1. Super admin, controls billing & adding people to the org.
2. Team admin, manages team membership & package access.
3. Developer, works on packages they are given access to.

The super admin is the only person who can add users to the org because it impacts the monthly bill. The super admin will use the website to manage membership. Every org has a `developers` team that all users are automatically added to.

The team admin is the person who manages team creation, team membership, and package access for teams. The team admin grants package access to teams, not individuals.

The developer will be able to access packages based on the teams they are on. Access is either read-write or read-only.

There are two main commands:

1. `npm team` see [npm team](/cli-commands/npm-team) for more details
2. `npm access` see [npm access](/cli-commands/npm-access) for more details

### Team Admins create teams

- Check who you’ve added to your org:

```bash
npm team ls <org>:developers
```

- Each org is automatically given a `developers` team, so you can see the whole list of team members in your org. This team automatically gets read-write access to all packages, but you can change that with the `access` command.

- Create a new team:

```bash
npm team create <org:team>
```

- Add members to that team:

```bash
npm team add <org:team> <user>
```

### Publish a package and adjust package access

- In package directory, run

```bash
npm init --scope=<org>
```

to scope it for your org & publish as usual

- Grant access:

```bash
npm access grant <read-only|read-write> <org:team> [<package>]
```

- Revoke access:

```bash
npm access revoke <org:team> [<package>]
```

### Monitor your package access

- See what org packages a team member can access:

```bash
npm access ls-packages <org> <user>
```

- See packages available to a specific team:

```bash
npm access ls-packages <org:team>
```

- Check which teams are collaborating on a package:

```bash
npm access ls-collaborators <pkg>
```

### See also

- [npm team](/cli-commands/npm-team)
- [npm access](/cli-commands/npm-access)
- [npm scope](/using-npm/scope)

---

section: using-npm
title: registry
description: The JavaScript Package Registry

---

# registry(7)

## The JavaScript Package Registry

### Description

To resolve packages by name and version, npm talks to a registry website
that implements the CommonJS Package Registry specification for reading
package info.

npm is configured to use npm, Inc.'s public registry at
<https://registry.npmjs.org> by default. Use of the npm public registry is
subject to terms of use available at <https://www.npmjs.com/policies/terms>.

You can configure npm to use any compatible registry you like, and even run
your own registry. Use of someone else's registry may be governed by their
terms of use.

npm's package registry implementation supports several
write APIs as well, to allow for publishing packages and managing user
account information.

The npm public registry is powered by a CouchDB database,
of which there is a public mirror at
<https://skimdb.npmjs.com/registry>. The code for the couchapp is
available at <https://github.com/npm/npm-registry-couchapp>.

The registry URL used is determined by the scope of the package (see
[`scope`](/using-npm/scope). If no scope is specified, the default registry is used, which is
supplied by the `registry` config parameter. See [`npm config`](/cli-commands/npm-config),
[`npmrc`](/configuring-npm/npmrc), and [`config`](/using-npm/config) for more on managing npm's configuration.

### Does npm send any information about me back to the registry?

Yes.

When making requests of the registry npm adds two headers with information
about your environment:

- `Npm-Scope` – If your project is scoped, this header will contain its
  scope. In the future npm hopes to build registry features that use this
  information to allow you to customize your experience for your
  organization.
- `Npm-In-CI` – Set to "true" if npm believes this install is running in a
  continuous integration environment, "false" otherwise. This is detected by
  looking for the following environment variables: `CI`, `TDDIUM`,
  `JENKINS_URL`, `bamboo.buildKey`. If you'd like to learn more you may find
  the [original PR](https://github.com/npm/npm-registry-client/pull/129)
  interesting.
  This is used to gather better metrics on how npm is used by humans, versus
  build farms.

The npm registry does not try to correlate the information in these headers
with any authenticated accounts that may be used in the same requests.

### Can I run my own private registry?

Yes!

The easiest way is to replicate the couch database, and use the same (or
similar) design doc to implement the APIs.

If you set up continuous replication from the official CouchDB, and then
set your internal CouchDB as the registry config, then you'll be able
to read any published packages, in addition to your private ones, and by
default will only publish internally.

If you then want to publish a package for the whole world to see, you can
simply override the `--registry` option for that `publish` command.

### I don't want my package published in the official registry. It's private.

Set `"private": true` in your package.json to prevent it from being
published at all, or
`"publishConfig":{"registry":"http://my-internal-registry.local"}`
to force it to be published only to your internal registry.

See [`package.json`](/configuring-npm/package-json) for more info on what goes in the package.json file.

### Will you replicate from my registry into the public one?

No. If you want things to be public, then publish them into the public
registry using npm. What little security there is would be for nought
otherwise.

### Do I have to use couchdb to build a registry that npm can talk to?

No, but it's way easier. Basically, yes, you do, or you have to
effectively implement the entire CouchDB API anyway.

### Is there a website or something to see package docs and such?

Yes, head over to <https://www.npmjs.com/>

### See also

- [npm config](/cli-commands/npm-config)
- [config](/using-npm/config)
- [npmrc](/configuring-npm/npmrc)
- [npm developers](/using-npm/developers)
- [npm disputes](/using-npm/disputes)

---

section: using-npm
title: removal
description: Cleaning the Slate

---

# removal(7)

## Cleaning the Slate

### Synopsis

So sad to see you go.

```bash
sudo npm uninstall npm -g
```

Or, if that fails, get the npm source code, and do:

```bash
sudo make uninstall
```

### More Severe Uninstalling

Usually, the above instructions are sufficient. That will remove
npm, but leave behind anything you've installed.

If that doesn't work, or if you require more drastic measures,
continue reading.

Note that this is only necessary for globally-installed packages. Local
installs are completely contained within a project's `node_modules`
folder. Delete that folder, and everything is gone less a package's
install script is particularly ill-behaved).

This assumes that you installed node and npm in the default place. If
you configured node with a different `--prefix`, or installed npm with a
different prefix setting, then adjust the paths accordingly, replacing
`/usr/local` with your install prefix.

To remove everything npm-related manually:

```bash
rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/npm*
```

If you installed things _with_ npm, then your best bet is to uninstall
them with npm first, and then install them again once you have a
proper install. This can help find any symlinks that are lying
around:

```bash
ls -laF /usr/local/{lib/node{,/.npm},bin,share/man} | grep npm
```

Prior to version 0.3, npm used shim files for executables and node
modules. To track those down, you can do the following:

```bash
find /usr/local/{lib/node,bin} -exec grep -l npm \{\} \; ;
```

(This is also in the README file.)

### See also

- [npm uninstall](/cli-commands/npm-uninstall)
- [npm prune](/cli-commands/npm-prune)

---

section: using-npm
title: scope
description: Scoped packages

---

# scope(7)

## Scoped packages

### Description

All npm packages have a name. Some package names also have a scope. A scope
follows the usual rules for package names (URL-safe characters, no leading dots
or underscores). When used in package names, scopes are preceded by an `@` symbol
and followed by a slash, e.g.

```bash
@somescope/somepackagename
```

Scopes are a way of grouping related packages together, and also affect a few
things about the way npm treats the package.

Each npm user/organization has their own scope, and only you can add packages
in your scope. This means you don't have to worry about someone taking your
package name ahead of you. Thus it is also a good way to signal official packages
for organizations.

Scoped packages can be published and installed as of `npm@2` and are supported
by the primary npm registry. Unscoped packages can depend on scoped packages and
vice versa. The npm client is backwards-compatible with unscoped registries,
so it can be used to work with scoped and unscoped registries at the same time.

### Installing scoped packages

Scoped packages are installed to a sub-folder of the regular installation
folder, e.g. if your other packages are installed in `node_modules/packagename`,
scoped modules will be installed in `node_modules/@myorg/packagename`. The scope
folder (`@myorg`) is simply the name of the scope preceded by an `@` symbol, and can
contain any number of scoped packages.

A scoped package is installed by referencing it by name, preceded by an
`@` symbol, in `npm install`:

```bash
npm install @myorg/mypackage
```

Or in `package.json`:

```json
"dependencies": {
  "@myorg/mypackage": "^1.3.0"
}
```

Note that if the `@` symbol is omitted, in either case, npm will instead attempt to
install from GitHub; see [`npm install`](/cli-commands/npm-install).

### Requiring scoped packages

Because scoped packages are installed into a scope folder, you have to
include the name of the scope when requiring them in your code, e.g.

```javascript
require("@myorg/mypackage");
```

There is nothing special about the way Node treats scope folders. This
simply requires the `mypackage` module in the folder named `@myorg`.

### Publishing scoped packages

Scoped packages can be published from the CLI as of `npm@2` and can be
published to any registry that supports them, including the primary npm
registry.

(As of 2015-04-19, and with npm 2.0 or better, the primary npm registry
**does** support scoped packages.)

If you wish, you may associate a scope with a registry; see below.

#### Publishing public scoped packages to the primary npm registry

To publish a public scoped package, you must specify `--access public` with
the initial publication. This will publish the package and set access
to `public` as if you had run `npm access public` after publishing.

#### Publishing private scoped packages to the npm registry

To publish a private scoped package to the npm registry, you must have
an [npm Private Modules](https://docs.npmjs.com/private-modules/intro)
account.

You can then publish the module with `npm publish` or `npm publish --access restricted`, and it will be present in the npm registry, with
restricted access. You can then change the access permissions, if
desired, with `npm access` or on the npmjs.com website.

### Associating a scope with a registry

Scopes can be associated with a separate registry. This allows you to
seamlessly use a mix of packages from the primary npm registry and one or more
private registries, such as npm Enterprise.

You can associate a scope with a registry at login, e.g.

```bash
npm login --registry=http://reg.example.com --scope=@myco
```

Scopes have a many-to-one relationship with registries: one registry can
host multiple scopes, but a scope only ever points to one registry.

You can also associate a scope with a registry using `npm config`:

```bash
npm config set @myco:registry http://reg.example.com
```

Once a scope is associated with a registry, any `npm install` for a package
with that scope will request packages from that registry instead. Any
`npm publish` for a package name that contains the scope will be published to
that registry instead.

### See also

- [npm install](/cli-commands/npm-install)
- [npm publish](/cli-commands/npm-publish)
- [npm access](/cli-commands/npm-access)
- [npm registry](/using-npm/registry)

---

section: using-npm
title: scripts
description: How npm handles the "scripts" field

---

# scripts(7)

## How npm handles the "scripts" field

### Description

The `"scripts"` property of of your `package.json` file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts. These all can be executed by running `npm run-script <stage>` or `npm run <stage>` for short. _Pre_ and _post_ commands with matching names will be run for those as well (e.g. `premyscript`, `myscript`, `postmyscript`). Scripts from dependencies can be run with `npm explore <pkg> -- npm run <stage>`.

### Pre & Post Scripts

To create "pre" or "post" scripts for any scripts defined in the `"scripts"` section of the `package.json`, simply create another script _with a matching name_ and add "pre" or "post" to the beginning of them.

```json
{
  "scripts": {
    "precompress": "{{ executes BEFORE the `compress` script }}",
    "compress": "{{ run command to compress files }}",
    "postcompress": "{{ executes AFTER `compress` script }}"
  }
}
```

### Life Cycle Scripts

There are some special life cycle scripts that happen only in certain situations. These scripts happen in addtion to the "pre" and "post" script.

- `prepare`, `prepublish`, `prepublishOnly`, `prepack`, `postpack`

**prepare** (since `npm@4.0.0`)

- Runs BEFORE the package is packed
- Runs BEFORE the package is published
- Runs on local `npm install` without any arguments
- Run AFTER `prepublish`, but BEFORE `prepublishOnly`
- NOTE: If a package being installed through git contains a `prepare` script, its `dependencies` and `devDependencies` will be installed, and the prepare script will be run, before the package is packaged and installed.

**prepublish** (DEPRECATED)

- Same as `prepare`

**prepublishOnly**

- Runs BEFORE the package is prepared and packed, ONLY on `npm publish`.

**prepack**

- Runs BEFORE a tarball is packed (on "`npm pack`", "`npm publish`", and when installing a git dependencies).
- NOTE: "`npm run pack`" is NOT the same as "`npm pack`". "`npm run pack`" is an arbitrary user defined script name, where as, "`npm pack`" is a CLI defined command.

**postpack**

- Runs AFTER the tarball has been generated and moved to its final destination.

#### Prepare and Prepublish

**Deprecation Note: prepublish**

Since `npm@1.1.71`, the npm CLI has run the `prepublish` script for both `npm publish` and `npm install`, because it's a convenient way to prepare a package for use (some common use cases are described in the section below). It has also turned out to be, in practice, [very confusing](https://github.com/npm/npm/issues/10074). As of `npm@4.0.0`, a new event has been introduced, `prepare`, that preserves this existing behavior. A _new_ event, `prepublishOnly` has been added as a transitional strategy to allow users to avoid the confusing behavior of existing npm versions and only run on `npm publish` (for instance, running the tests one last time to ensure they're in good shape).

See <https://github.com/npm/npm/issues/10074> for a much lengthier justification, with further reading, for this change.

**Use Cases**

If you need to perform operations on your package before it is used, in a way that is not dependent on the operating system or architecture of the target system, use a `prepublish` script. This includes tasks such as:

- Compiling CoffeeScript source code into JavaScript.
- Creating minified versions of JavaScript source code.
- Fetching remote resources that your package will use.

The advantage of doing these things at `prepublish` time is that they can be done once, in a single place, thus reducing complexity and variability. Additionally, this means that:

- You can depend on `coffee-script` as a `devDependency`, and thus
  your users don't need to have it installed.
- You don't need to include minifiers in your package, reducing
  the size for your users.
- You don't need to rely on your users having `curl` or `wget` or
  other system tools on the target machines.

### Life Cycle Operation Order

#### [`npm publish`](/cli-commands/npm-publish)

- `prepublishOnly`
- `prepare`
- `prepublish`
- `publish`
- `postpublish`

#### [`npm pack`](/cli-commands/npm-pack)

- `prepack`
- `postpack`

#### [`npm install`](/cli-commands/npm-install)

- `preinstall`
- `install`
- `postinstall`

Also triggers

- `prepublish` (when on local)
- `prepare` (when on local)

#### [`npm start`](/cli-commands/npm-start)

`npm run start` has an `npm start` shorthand.

- `prestart`
- `start`
- `poststart`

### Default Values

npm will default some script values based on package contents.

- `"start": "node server.js"`:

  If there is a `server.js` file in the root of your package, then npm
  will default the `start` command to `node server.js`.

- `"install": "node-gyp rebuild"`:

  If there is a `binding.gyp` file in the root of your package and you
  haven't defined your own `install` or `preinstall` scripts, npm will
  default the `install` command to compile using node-gyp.

### User

If npm was invoked with root privileges, then it will change the uid
to the user account or uid specified by the `user` config, which
defaults to `nobody`. Set the `unsafe-perm` flag to run scripts with
root privileges.

### Environment

Package scripts run in an environment where many pieces of information
are made available regarding the setup of npm and the current state of
the process.

#### path

If you depend on modules that define executable scripts, like test
suites, then those executables will be added to the `PATH` for
executing the scripts. So, if your package.json has this:

```json
{
  "name": "foo",
  "dependencies": {
    "bar": "0.1.x"
  },
  "scripts": {
    "start": "bar ./test"
  }
}
```

then you could run `npm start` to execute the `bar` script, which is
exported into the `node_modules/.bin` directory on `npm install`.

#### package.json vars

The package.json fields are tacked onto the `npm_package_` prefix. So,
for instance, if you had `{"name":"foo", "version":"1.2.5"}` in your
package.json file, then your package scripts would have the
`npm_package_name` environment variable set to "foo", and the
`npm_package_version` set to "1.2.5". You can access these variables
in your code with `process.env.npm_package_name` and
`process.env.npm_package_version`, and so on for other fields.

#### configuration

Configuration parameters are put in the environment with the
`npm_config_` prefix. For instance, you can view the effective `root`
config by checking the `npm_config_root` environment variable.

#### Special: package.json "config" object

The package.json "config" keys are overwritten in the environment if
there is a config param of `<name>[@<version>]:<key>`. For example,
if the package.json has this:

```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

and the server.js is this:

```javascript
http.createServer(...).listen(process.env.npm_package_config_port)
```

then the user could change the behavior by doing:

```bash
  npm config set foo:port 80
```

#### current lifecycle event

Lastly, the `npm_lifecycle_event` environment variable is set to
whichever stage of the cycle is being executed. So, you could have a
single script used for different parts of the process which switches
based on what's currently happening.

Objects are flattened following this format, so if you had
`{"scripts":{"install":"foo.js"}}` in your package.json, then you'd
see this in the script:

```bash
process.env.npm_package_scripts_install === "foo.js"
```

### Examples

For example, if your package.json contains this:

```json
{
  "scripts": {
    "install": "scripts/install.js",
    "postinstall": "scripts/install.js",
    "uninstall": "scripts/uninstall.js"
  }
}
```

then `scripts/install.js` will be called for the install
and post-install stages of the lifecycle, and `scripts/uninstall.js`
will be called when the package is uninstalled. Since
`scripts/install.js` is running for two different phases, it would
be wise in this case to look at the `npm_lifecycle_event` environment
variable.

If you want to run a make command, you can do so. This works just
fine:

```json
{
  "scripts": {
    "preinstall": "./configure",
    "install": "make && make install",
    "test": "make test"
  }
}
```

### Exiting

Scripts are run by passing the line as a script argument to `sh`.

If the script exits with a code other than 0, then this will abort the
process.

Note that these script files don't have to be nodejs or even
javascript programs. They just have to be some kind of executable
file.

### Hook Scripts

If you want to run a specific script at a specific lifecycle event for
ALL packages, then you can use a hook script.

Place an executable file at `node_modules/.hooks/{eventname}`, and
it'll get run for all packages when they are going through that point
in the package lifecycle for any packages installed in that root.

Hook scripts are run exactly the same way as package.json scripts.
That is, they are in a separate child process, with the env described
above.

### Best Practices

- Don't exit with a non-zero error code unless you _really_ mean it.
  Except for uninstall scripts, this will cause the npm action to
  fail, and potentially be rolled back. If the failure is minor or
  only will prevent some optional features, then it's better to just
  print a warning and exit successfully.
- Try not to use scripts to do what npm can do for you. Read through
  [`package.json`](/configuring-npm/package-json) to see all the things that you can specify and enable
  by simply describing your package appropriately. In general, this
  will lead to a more robust and consistent state.
- Inspect the env to determine where to put things. For instance, if
  the `npm_config_binroot` environment variable is set to `/home/user/bin`, then
  don't try to install executables into `/usr/local/bin`. The user
  probably set it up that way for a reason.
- Don't prefix your script commands with "sudo". If root permissions
  are required for some reason, then it'll fail with that error, and
  the user will sudo the npm command in question.
- Don't use `install`. Use a `.gyp` file for compilation, and `prepublish`
  for anything else. You should almost never have to explicitly set a
  preinstall or install script. If you are doing this, please consider if
  there is another option. The only valid use of `install` or `preinstall`
  scripts is for compilation which must be done on the target architecture.

### See Also

- [npm run-script](/cli-commands/npm-run-script)
- [package.json](/configuring-npm/package-json)
- [npm developers](/using-npm/developers)
- [npm install](/cli-commands/npm-install)

---

section: using-npm
title: semver
description: The semantic versioner for npm

---

# semver(7) -- The semantic versioner for npm

## Install

```bash
npm install --save semver
```

## Usage

As a node module:

```js
const semver = require("semver");

semver.valid("1.2.3"); // '1.2.3'
semver.valid("a.b.c"); // null
semver.clean("  =v1.2.3   "); // '1.2.3'
semver.satisfies("1.2.3", "1.x || >=2.5.0 || 5.0.0 - 7.2.3"); // true
semver.gt("1.2.3", "9.8.7"); // false
semver.lt("1.2.3", "9.8.7"); // true
semver.minVersion(">=1.0.0"); // '1.0.0'
semver.valid(semver.coerce("v2")); // '2.0.0'
semver.valid(semver.coerce("42.6.7.9.3-alpha")); // '42.6.7'
```

As a command-line utility:

```
$ semver -h

A JavaScript implementation of the https://semver.org/ specification
Copyright Isaac Z. Schlueter

Usage: semver [options] <version> [<version> [...]]
Prints valid versions sorted by SemVer precedence

Options:
-r --range <range>
        Print versions that match the specified range.

-i --increment [<level>]
        Increment a version by the specified level.  Level can
        be one of: major, minor, patch, premajor, preminor,
        prepatch, or prerelease.  Default level is 'patch'.
        Only one version may be specified.

--preid <identifier>
        Identifier to be used to prefix premajor, preminor,
        prepatch or prerelease version increments.

-l --loose
        Interpret versions and ranges loosely

-p --include-prerelease
        Always include prerelease versions in range matching

-c --coerce
        Coerce a string into SemVer if possible
        (does not imply --loose)

Program exits successfully if any valid version satisfies
all supplied ranges, and prints all satisfying versions.

If no satisfying versions are found, then exits failure.

Versions are printed in ascending order, so supplying
multiple versions to the utility will just sort them.
```

## Versions

A "version" is described by the `v2.0.0` specification found at
<https://semver.org/>.

A leading `"="` or `"v"` character is stripped off and ignored.

## Ranges

A `version range` is a set of `comparators` which specify versions
that satisfy the range.

A `comparator` is composed of an `operator` and a `version`. The set
of primitive `operators` is:

- `<` Less than
- `<=` Less than or equal to
- `>` Greater than
- `>=` Greater than or equal to
- `=` Equal. If no operator is specified, then equality is assumed,
  so this operator is optional, but MAY be included.

For example, the comparator `>=1.2.7` would match the versions
`1.2.7`, `1.2.8`, `2.5.3`, and `1.3.9`, but not the versions `1.2.6`
or `1.1.0`.

Comparators can be joined by whitespace to form a `comparator set`,
which is satisfied by the **intersection** of all of the comparators
it includes.

A range is composed of one or more comparator sets, joined by `||`. A
version matches a range if and only if every comparator in at least
one of the `||`-separated comparator sets is satisfied by the version.

For example, the range `>=1.2.7 <1.3.0` would match the versions
`1.2.7`, `1.2.8`, and `1.2.99`, but not the versions `1.2.6`, `1.3.0`,
or `1.1.0`.

The range `1.2.7 || >=1.2.9 <2.0.0` would match the versions `1.2.7`,
`1.2.9`, and `1.4.6`, but not the versions `1.2.8` or `2.0.0`.

### Prerelease Tags

If a version has a prerelease tag (for example, `1.2.3-alpha.3`) then
it will only be allowed to satisfy comparator sets if at least one
comparator with the same `[major, minor, patch]` tuple also has a
prerelease tag.

For example, the range `>1.2.3-alpha.3` would be allowed to match the
version `1.2.3-alpha.7`, but it would _not_ be satisfied by
`3.4.5-alpha.9`, even though `3.4.5-alpha.9` is technically "greater
than" `1.2.3-alpha.3` according to the SemVer sort rules. The version
range only accepts prerelease tags on the `1.2.3` version. The
version `3.4.5` _would_ satisfy the range, because it does not have a
prerelease flag, and `3.4.5` is greater than `1.2.3-alpha.7`.

The purpose for this behavior is twofold. First, prerelease versions
frequently are updated very quickly, and contain many breaking changes
that are (by the author's design) not yet fit for public consumption.
Therefore, by default, they are excluded from range matching
semantics.

Second, a user who has opted into using a prerelease version has
clearly indicated the intent to use _that specific_ set of
alpha/beta/rc versions. By including a prerelease tag in the range,
the user is indicating that they are aware of the risk. However, it
is still not appropriate to assume that they have opted into taking a
similar risk on the _next_ set of prerelease versions.

Note that this behavior can be suppressed (treating all prerelease
versions as if they were normal versions, for the purpose of range
matching) by setting the `includePrerelease` flag on the options
object to any
[functions](https://github.com/npm/node-semver#functions) that do
range matching.

#### Prerelease Identifiers

The method `.inc` takes an additional `identifier` string argument that
will append the value of the string as a prerelease identifier:

```javascript
semver.inc("1.2.3", "prerelease", "beta");
// '1.2.4-beta.0'
```

command-line example:

```bash
$ semver 1.2.3 -i prerelease --preid beta
1.2.4-beta.0
```

Which then can be used to increment further:

```bash
$ semver 1.2.4-beta.0 -i prerelease
1.2.4-beta.1
```

### Advanced Range Syntax

Advanced range syntax desugars to primitive comparators in
deterministic ways.

Advanced ranges may be combined in the same way as primitive
comparators using white space or `||`.

#### Hyphen Ranges `X.Y.Z - A.B.C`

Specifies an inclusive set.

- `1.2.3 - 2.3.4` := `>=1.2.3 <=2.3.4`

If a partial version is provided as the first version in the inclusive
range, then the missing pieces are replaced with zeroes.

- `1.2 - 2.3.4` := `>=1.2.0 <=2.3.4`

If a partial version is provided as the second version in the
inclusive range, then all versions that start with the supplied parts
of the tuple are accepted, but nothing that would be greater than the
provided tuple parts.

- `1.2.3 - 2.3` := `>=1.2.3 <2.4.0`
- `1.2.3 - 2` := `>=1.2.3 <3.0.0`

#### X-Ranges `1.2.x` `1.X` `1.2.*` `*`

Any of `X`, `x`, or `*` may be used to "stand in" for one of the
numeric values in the `[major, minor, patch]` tuple.

- `*` := `>=0.0.0` (Any version satisfies)
- `1.x` := `>=1.0.0 <2.0.0` (Matching major version)
- `1.2.x` := `>=1.2.0 <1.3.0` (Matching major and minor versions)

A partial version range is treated as an X-Range, so the special
character is in fact optional.

- `""` (empty string) := `*` := `>=0.0.0`
- `1` := `1.x.x` := `>=1.0.0 <2.0.0`
- `1.2` := `1.2.x` := `>=1.2.0 <1.3.0`

#### Tilde Ranges `~1.2.3` `~1.2` `~1`

Allows patch-level changes if a minor version is specified on the
comparator. Allows minor-level changes if not.

- `~1.2.3` := `>=1.2.3 <1.(2+1).0` := `>=1.2.3 <1.3.0`
- `~1.2` := `>=1.2.0 <1.(2+1).0` := `>=1.2.0 <1.3.0` (Same as `1.2.x`)
- `~1` := `>=1.0.0 <(1+1).0.0` := `>=1.0.0 <2.0.0` (Same as `1.x`)
- `~0.2.3` := `>=0.2.3 <0.(2+1).0` := `>=0.2.3 <0.3.0`
- `~0.2` := `>=0.2.0 <0.(2+1).0` := `>=0.2.0 <0.3.0` (Same as `0.2.x`)
- `~0` := `>=0.0.0 <(0+1).0.0` := `>=0.0.0 <1.0.0` (Same as `0.x`)
- `~1.2.3-beta.2` := `>=1.2.3-beta.2 <1.3.0` Note that prereleases in
  the `1.2.3` version will be allowed, if they are greater than or
  equal to `beta.2`. So, `1.2.3-beta.4` would be allowed, but
  `1.2.4-beta.2` would not, because it is a prerelease of a
  different `[major, minor, patch]` tuple.

#### Caret Ranges `^1.2.3` `^0.2.5` `^0.0.4`

Allows changes that do not modify the left-most non-zero digit in the
`[major, minor, patch]` tuple. In other words, this allows patch and
minor updates for versions `1.0.0` and above, patch updates for
versions `0.X >=0.1.0`, and _no_ updates for versions `0.0.X`.

Many authors treat a `0.x` version as if the `x` were the major
"breaking-change" indicator.

Caret ranges are ideal when an author may make breaking changes
between `0.2.4` and `0.3.0` releases, which is a common practice.
However, it presumes that there will _not_ be breaking changes between
`0.2.4` and `0.2.5`. It allows for changes that are presumed to be
additive (but non-breaking), according to commonly observed practices.

- `^1.2.3` := `>=1.2.3 <2.0.0`
- `^0.2.3` := `>=0.2.3 <0.3.0`
- `^0.0.3` := `>=0.0.3 <0.0.4`
- `^1.2.3-beta.2` := `>=1.2.3-beta.2 <2.0.0` Note that prereleases in
  the `1.2.3` version will be allowed, if they are greater than or
  equal to `beta.2`. So, `1.2.3-beta.4` would be allowed, but
  `1.2.4-beta.2` would not, because it is a prerelease of a
  different `[major, minor, patch]` tuple.
- `^0.0.3-beta` := `>=0.0.3-beta <0.0.4` Note that prereleases in the
  `0.0.3` version _only_ will be allowed, if they are greater than or
  equal to `beta`. So, `0.0.3-pr.2` would be allowed.

When parsing caret ranges, a missing `patch` value desugars to the
number `0`, but will allow flexibility within that value, even if the
major and minor versions are both `0`.

- `^1.2.x` := `>=1.2.0 <2.0.0`
- `^0.0.x` := `>=0.0.0 <0.1.0`
- `^0.0` := `>=0.0.0 <0.1.0`

A missing `minor` and `patch` values will desugar to zero, but also
allow flexibility within those values, even if the major version is
zero.

- `^1.x` := `>=1.0.0 <2.0.0`
- `^0.x` := `>=0.0.0 <1.0.0`

### Range Grammar

Putting all this together, here is a Backus-Naur grammar for ranges,
for the benefit of parser authors:

```bnf
range-set  ::= range ( logical-or range ) *
logical-or ::= ( ' ' ) * '||' ( ' ' ) *
range      ::= hyphen | simple ( ' ' simple ) * | ''
hyphen     ::= partial ' - ' partial
simple     ::= primitive | partial | tilde | caret
primitive  ::= ( '<' | '>' | '>=' | '<=' | '=' ) partial
partial    ::= xr ( '.' xr ( '.' xr qualifier ? )? )?
xr         ::= 'x' | 'X' | '*' | nr
nr         ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *
tilde      ::= '~' partial
caret      ::= '^' partial
qualifier  ::= ( '-' pre )? ( '+' build )?
pre        ::= parts
build      ::= parts
parts      ::= part ( '.' part ) *
part       ::= nr | [-0-9A-Za-z]+
```

## Functions

All methods and classes take a final `options` object argument. All
options in this object are `false` by default. The options supported
are:

- `loose` Be more forgiving about not-quite-valid semver strings.
  (Any resulting output will always be 100% strict compliant, of
  course.) For backwards compatibility reasons, if the `options`
  argument is a boolean value instead of an object, it is interpreted
  to be the `loose` param.
- `includePrerelease` Set to suppress the [default
  behavior](https://github.com/npm/node-semver#prerelease-tags) of
  excluding prerelease tagged versions from ranges unless they are
  explicitly opted into.

Strict-mode Comparators and Ranges will be strict about the SemVer
strings that they parse.

- `valid(v)`: Return the parsed version, or null if it's not valid.
- `inc(v, release)`: Return the version incremented by the release
  type (`major`, `premajor`, `minor`, `preminor`, `patch`,
  `prepatch`, or `prerelease`), or null if it's not valid
  - `premajor` in one call will bump the version up to the next major
    version and down to a prerelease of that major version.
    `preminor`, and `prepatch` work the same way.
  - If called from a non-prerelease version, the `prerelease` will work the
    same as `prepatch`. It increments the patch version, then makes a
    prerelease. If the input version is already a prerelease it simply
    increments it.
- `prerelease(v)`: Returns an array of prerelease components, or null
  if none exist. Example: `prerelease('1.2.3-alpha.1') -> ['alpha', 1]`
- `major(v)`: Return the major version number.
- `minor(v)`: Return the minor version number.
- `patch(v)`: Return the patch version number.
- `intersects(r1, r2, loose)`: Return true if the two supplied ranges
  or comparators intersect.
- `parse(v)`: Attempt to parse a string as a semantic version, returning either
  a `SemVer` object or `null`.

### Comparison

- `gt(v1, v2)`: `v1 > v2`
- `gte(v1, v2)`: `v1 >= v2`
- `lt(v1, v2)`: `v1 < v2`
- `lte(v1, v2)`: `v1 <= v2`
- `eq(v1, v2)`: `v1 == v2` This is true if they're logically equivalent,
  even if they're not the exact same string. You already know how to
  compare strings.
- `neq(v1, v2)`: `v1 != v2` The opposite of `eq`.
- `cmp(v1, comparator, v2)`: Pass in a comparison string, and it'll call
  the corresponding function above. `"==="` and `"!=="` do simple
  string comparison, but are included for completeness. Throws if an
  invalid comparison string is provided.
- `compare(v1, v2)`: Return `0` if `v1 == v2`, or `1` if `v1` is greater, or `-1` if
  `v2` is greater. Sorts in ascending order if passed to `Array.sort()`.
- `rcompare(v1, v2)`: The reverse of compare. Sorts an array of versions
  in descending order when passed to `Array.sort()`.
- `diff(v1, v2)`: Returns difference between two versions by the release type
  (`major`, `premajor`, `minor`, `preminor`, `patch`, `prepatch`, or `prerelease`),
  or null if the versions are the same.

### Comparators

- `intersects(comparator)`: Return true if the comparators intersect

### Ranges

- `validRange(range)`: Return the valid range or null if it's not valid
- `satisfies(version, range)`: Return true if the version satisfies the
  range.
- `maxSatisfying(versions, range)`: Return the highest version in the list
  that satisfies the range, or `null` if none of them do.
- `minSatisfying(versions, range)`: Return the lowest version in the list
  that satisfies the range, or `null` if none of them do.
- `minVersion(range)`: Return the lowest version that can possibly match
  the given range.
- `gtr(version, range)`: Return `true` if version is greater than all the
  versions possible in the range.
- `ltr(version, range)`: Return `true` if version is less than all the
  versions possible in the range.
- `outside(version, range, hilo)`: Return true if the version is outside
  the bounds of the range in either the high or low direction. The
  `hilo` argument must be either the string `'>'` or `'<'`. (This is
  the function called by `gtr` and `ltr`.)
- `intersects(range)`: Return true if any of the ranges comparators intersect

Note that, since ranges may be non-contiguous, a version might not be
greater than a range, less than a range, _or_ satisfy a range! For
example, the range `1.2 <1.2.9 || >2.0.0` would have a hole from `1.2.9`
until `2.0.0`, so the version `1.2.10` would not be greater than the
range (because `2.0.1` satisfies, which is higher), nor less than the
range (since `1.2.8` satisfies, which is lower), and it also does not
satisfy the range.

If you want to know if a version satisfies or does not satisfy a
range, use the `satisfies(version, range)` function.

### Coercion

- `coerce(version)`: Coerces a string to semver if possible

This aims to provide a very forgiving translation of a non-semver string to
semver. It looks for the first digit in a string, and consumes all
remaining characters which satisfy at least a partial semver (e.g., `1`,
`1.2`, `1.2.3`) up to the max permitted length (256 characters). Longer
versions are simply truncated (`4.6.3.9.2-alpha2` becomes `4.6.3`). All
surrounding text is simply ignored (`v3.4 replaces v3.3.1` becomes
`3.4.0`). Only text which lacks digits will fail coercion (`version one`
is not valid). The maximum length for any semver component considered for
coercion is 16 characters; longer components will be ignored
(`10000000000000000.4.7.4` becomes `4.7.4`). The maximum value for any
semver component is `Number.MAX_SAFE_INTEGER || (2**53 - 1)`; higher value
components are invalid (`9999999999999999.4.7.4` is likely invalid).
