[Sponsor](https://github.com/users/jgm/sponsorship)

<img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />

<span class="big">Pandoc</span>   <span class="small">a universal
document converter</span>

<span class="sr-only">Toggle navigation</span> <span
class="icon-bar"></span> <span class="icon-bar"></span> <span
class="icon-bar"></span>

- [About](index.html)
- [Installing](installing.html)
- [Getting started](getting-started.html)
- <a href="#" id="demobtn" class="tree-toggle nav-header">Demos</a>
  - [Try pandoc online](try)
  - [Examples](demos.html)
- <a href="#" id="docbtn" class="tree-toggle nav-header">Documentation</a>
  - [User's Guide](MANUAL.html)
  - [User's Guide (PDF)](MANUAL.pdf)
  - [Making an ebook](epub.html)
  - [Filters](filters.html)
  - [Lua filters](lua-filters.html)
  - [Contributing](CONTRIBUTING.html)
  - [FAQ](faqs.html)
  - [Press](press.html)
  - [Emacs Org mode support](org.html)
  - [JATS support](jats.html)
  - [Using the Pandoc API](using-the-pandoc-api.html)
  - [API documentation](http://hackage.haskell.org/package/pandoc)
- [Help](help.html)
- [Extras](extras.html)
- [Releases](releases.html)

- [Windows](#windows)
- [macOS](#macos)
- [Linux](#linux)
- [Chrome OS](#chrome-os)
- [BSD](#bsd)
- [Docker](#docker)
- [GitHub Actions](#github-actions)
- [Compiling from source](#compiling-from-source)
  - [Getting the pandoc source
    code](#getting-the-pandoc-source-code)
  - [Quick stack method](#quick-stack-method)
  - [Quick cabal method](#quick-cabal-method)
  - [Custom cabal method](#custom-cabal-method)
  - [Creating a relocatable binary](#creating-a-relocatable-binary)
  - [Running tests](#running-tests)
  - [Running benchmarks](#running-benchmarks)

The simplest way to get the latest pandoc release is to use the
installer.

<a href="https://github.com/jgm/pandoc/releases/latest" id="downloadInstallerBtn" class="btn btn-primary">Download the latest installer</a>

For alternative ways to install pandoc, see below under the heading for
your operating system.

## Windows

There is a package installer at pandoc’s [download
page](https://github.com/jgm/pandoc/releases/latest). This will install
pandoc, replacing older versions, and update your path to include the
directory where pandoc’s binaries are installed.

If you prefer not to use the msi installer, we also provide a zip file
that contains pandoc’s binaries and documentation. Simply unzip this
file and move the binaries to a directory of your choice.

Alternatively, you can install pandoc using
[Chocolatey](https://chocolatey.org):

    choco install pandoc

Chocolatey can also install other software that integrates with Pandoc.
For example, to install <span class="nowrap">`rsvg-convert`</span> (from
[librsvg](https://wiki.gnome.org/Projects/LibRsvg), covering formats
without SVG support), [Python](https://www.python.org) (to use Pandoc
filters), and [MiKTeX](https://miktex.org/) (to typeset PDFs with
[LaTeX](https://www.latex-project.org)):

    choco install rsvg-convert python miktex

By default, Pandoc creates PDFs using LaTeX. We recommend installing it
via [MiKTeX](https://miktex.org/).

## macOS

There is a package installer at pandoc’s [download
page](https://github.com/jgm/pandoc/releases/latest). If you later want
to uninstall the package, you can do so by downloading [this
script](https://raw.githubusercontent.com/jgm/pandoc/master/macos/uninstall-pandoc.pl)
and running it with <span
class="nowrap">`perl uninstall-pandoc.pl`</span>.

Alternatively, you can install pandoc using [Homebrew](https://brew.sh):

     brew install pandoc

Homebrew can also install other software that integrates with Pandoc.
For example, to install
[librsvg](https://wiki.gnome.org/Projects/LibRsvg) (its <span
class="nowrap">`rsvg-convert`</span> covers formats without SVG
support), [Python](https://www.python.org) (to use Pandoc filters), and
[BasicTeX](https://www.tug.org/mactex/morepackages.html) (to typeset
PDFs with [LaTeX](https://www.latex-project.org)):

     brew install librsvg python homebrew/cask/basictex

Note: On unsupported versions of macOS (more than three releases old),
Homebrew installs from source, which takes additional time and disk
space for the <span class="nowrap">`ghc`</span> compiler and dependent
Haskell libraries.

We also provide a zip file containing the binaries and man pages, for
those who prefer not to use the installer. Simply unzip the file and
move the binaries and man pages to whatever directory you like.

By default, Pandoc creates PDFs using LaTeX. Because a full
[MacTeX](https://tug.org/mactex/) installation uses four gigabytes of
disk space, we recommend
[BasicTeX](https://www.tug.org/mactex/morepackages.html) or
[TinyTeX](https://yihui.org/tinytex/) and using the <span
class="nowrap">`tlmgr`</span> tool to install additional packages as
needed. If you receive errors warning of fonts not found:

    tlmgr install collection-fontsrecommended

## Linux

Check whether the pandoc version in your package manager is not
outdated. Pandoc is in the [Debian](https://packages.debian.org/pandoc),
[Ubuntu](https://packages.ubuntu.com/pandoc),
[Slackware](https://www.slackbuilds.org/result/?search=pandoc&sv=),
[Arch](https://www.archlinux.org/packages/community/x86_64/pandoc/),
[Fedora](https://apps.fedoraproject.org/packages/pandoc),
[NiXOS](https://nixos.org/nixos/packages.html),
[openSUSE](https://software.opensuse.org/package/pandoc),
[gentoo](https://packages.gentoo.org/package/app-text/pandoc) and
[Void](https://voidlinux.org/) repositories.

To get the latest release, we provide a binary package for amd64
architecture on the **[download
page](https://github.com/jgm/pandoc/releases/latest)**.

The executable is statically linked and has no dynamic dependencies or
dependencies on external data files. Note: because of the static
linking, the pandoc binary from this package cannot use lua filters that
require external lua modules written in C.

Both a tarball and a deb installer are provided. To install the deb:

    sudo dpkg -i $DEB

where <span class="nowrap">`$DEB`</span> is the path to the downloaded
deb. This will install the <span class="nowrap">`pandoc`</span>
executable and man page.

If you use an RPM-based distro, you may be able to install the deb from
our download page using <span class="nowrap">`alien`</span>.

On any distro, you may install from the tarball into <span
class="nowrap">`$DEST`</span> (say, <span
class="nowrap">`/usr/local/`</span> or <span
class="nowrap">`$HOME/.local`</span>) by doing

    tar xvzf $TGZ --strip-components 1 -C $DEST

where <span class="nowrap">`$TGZ`</span> is the path to the downloaded
zipped tarball. For Pandoc versions before 2.0, which don’t provide a
tarball, try instead

    ar p $DEB data.tar.gz | tar xvz --strip-components 2 -C $DEST

You can also install from source, using the instructions below under
[Compiling from source](#compiling-from-source). Note that most distros
have the Haskell platform in their package repositories. For example, on
Debian/Ubuntu, you can install it with <span
class="nowrap">`apt-get install haskell-platform`</span>.

For PDF output, you’ll need LaTeX. We recommend installing [TeX
Live](https://www.tug.org/texlive/) via your package manager. (On
Debian/Ubuntu, <span class="nowrap">`apt-get install texlive`</span>.)

## Chrome OS

On Chrome OS, pandoc can be installed using the
[chromebrew](https://github.com/skycocker/chromebrew) package manager
with the command:

    crew install pandoc

This will automatically build and configure pandoc for the specific
device you are using.

## BSD

Pandoc is in the [NetBSD](https://pkgsrc.se/wip/pandoc) and [FreeBSD
ports](https://www.freshports.org/textproc/hs-pandoc/) repositories.

## Docker

The official Docker images for pandoc can be found at
<a href="https://github.com/pandoc/dockerfiles" class="uri">https://github.com/pandoc/dockerfiles</a>
and at [dockerhub](https://hub.docker.com/).

The [pandoc/core](https://hub.docker.com/r/pandoc/core) image contains
<span class="nowrap">`pandoc`</span>.

The [pandoc/latex](https://hub.docker.com/r/pandoc/latex) image also
contains the minimal LaTeX installation needed to produce PDFs using
pandoc.

To run pandoc using Docker, converting <span
class="nowrap">`README.md`</span> to <span
class="nowrap">`README.pdf`</span>:

    docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex README.md -o README.pdf

## GitHub Actions

Pandoc can be run through [GitHub
Actions](https://github.com/features/actions). For some examples, see
<a href="https://github.com/pandoc/pandoc-action-example" class="uri">https://github.com/pandoc/pandoc-action-example</a>.

## Compiling from source

If for some reason a binary package is not available for your platform,
or if you want to hack on pandoc or use a non-released version, you can
install from source.

### Getting the pandoc source code

Source tarballs can be found at
<a href="https://hackage.haskell.org/package/pandoc" class="uri">https://hackage.haskell.org/package/pandoc</a>.
For example, to fetch the source for version 1.17.0.3:

    wget https://hackage.haskell.org/package/pandoc-1.17.0.3/pandoc-1.17.0.3.tar.gz
    tar xvzf pandoc-1.17.0.3.tar.gz
    cd pandoc-1.17.0.3

Or you can fetch the development code by cloning the repository:

    git clone https://github.com/jgm/pandoc
    cd pandoc

Note: there may be times when the development code is broken or depends
on other libraries which must be installed separately. Unless you really
know what you’re doing, install the last released version.

### Quick stack method

The easiest way to build pandoc from source is to use
[stack](https://docs.haskellstack.org/en/stable/install_and_upgrade.html):

1.  Install
    [stack](https://docs.haskellstack.org/en/stable/install_and_upgrade.html).
    Note that Pandoc requires stack &gt;= 1.7.0.

2.  Change to the pandoc source directory and issue the following
    commands:

        stack setup
        stack install

    <span class="nowrap">`stack setup`</span> will automatically
    download the ghc compiler if you don’t have it. <span
    class="nowrap">`stack install`</span> will install the <span
    class="nowrap">`pandoc`</span> executable into <span
    class="nowrap">`~/.local/bin`</span>, which you should add to your
    <span class="nowrap">`PATH`</span>. This process will take a while,
    and will consume a considerable amount of disk space.

### Quick cabal method

1.  Install the [Haskell
    platform](https://hackage.haskell.org/platform/). This will give you
    [GHC](https://www.haskell.org/ghc/) and the
    [cabal-install](https://hackage.haskell.org/package/cabal-install)
    build tool. Note that pandoc requires GHC &gt;= 7.10 and cabal &gt;=
    2.0.

2.  Update your package database:

        cabal update

3.  Check your cabal version with

        cabal --version

    If you have a version less than 2.0, install the latest with:

        cabal install cabal-install

4.  Use <span class="nowrap">`cabal`</span> to install pandoc and its
    dependencies:

        cabal install pandoc

    This procedure will install the released version of pandoc, which
    will be downloaded automatically from HackageDB.

    If you want to install a modified or development version of pandoc
    instead, switch to the source directory and do as above, but without
    the ‘pandoc’:

        cabal install

5.  Make sure the <span class="nowrap">`$CABALDIR/bin`</span> directory
    is in your path. You should now be able to run <span
    class="nowrap">`pandoc`</span>:

        pandoc --help

    [Not sure where <span class="nowrap">`$CABALDIR`</span>
    is?](https://wiki.haskell.org/Cabal-Install#The_cabal-install_configuration_file)

6.  By default <span class="nowrap">`pandoc`</span> uses the
    “i;unicode-casemap” method to sort bibliography entries (RFC 5051).
    If you would like to use the locale-sensitive unicode collation
    algorithm instead, specify the <span class="nowrap">`icu`</span>
    flag (which affects the dependency <span
    class="nowrap">`citeproc`</span>):

        cabal install pandoc -ficu

    Note that this requires the <span class="nowrap">`text-icu`</span>
    library, which in turn depends on the C library <span
    class="nowrap">`icu4c`</span>. Installation directions vary by
    platform. Here is how it might work on macOS with Homebrew:

        brew install icu4c
        stack install pandoc \
          --flag "citeproc:icu" \
          --extra-lib-dirs=/usr/local/opt/icu4c/lib \
          --extra-include-dirs=/usr/local/opt/icu4c/include

7.  The <span class="nowrap">`pandoc.1`</span> man page will be
    installed automatically. cabal shows you where it is installed: you
    may need to set your <span class="nowrap">`MANPATH`</span>
    accordingly. If <span class="nowrap">`MANUAL.txt`</span> has been
    modified, the man page can be rebuilt: <span
    class="nowrap">`make man/pandoc.1`</span>.

### Custom cabal method

This is a step-by-step procedure that offers maximal control over the
build and installation. Most users should use the quick install, but
this information may be of use to packagers. For more details, see the
[Cabal User’s Guide](https://cabal.readthedocs.io/). These instructions
assume that the pandoc source directory is your working directory. You
will need cabal version 2.0 or higher.

1.  Install dependencies: in addition to the [Haskell
    platform](https://hackage.haskell.org/platform/), you will need a
    number of additional libraries. You can install them all with

        cabal update
        cabal install --only-dependencies

2.  Configure:

        cabal configure --prefix=DIR --bindir=DIR --libdir=DIR \
          --datadir=DIR --libsubdir=DIR --datasubdir=DIR --docdir=DIR \
          --htmldir=DIR --program-prefix=PREFIX --program-suffix=SUFFIX \
          --mandir=DIR --flags=FLAGSPEC --enable-tests

    All of the options have sensible defaults that can be overridden as
    needed.

    <span class="nowrap">`FLAGSPEC`</span> is a list of Cabal
    configuration flags, optionally preceded by a <span
    class="nowrap">`-`</span> (to force the flag to <span
    class="nowrap">`false`</span>), and separated by spaces. Pandoc’s
    flags include:

    - <span class="nowrap">`embed_data_files`</span>: embed all data
      files into the binary (default no). This is helpful if you want
      to create a relocatable binary.

    - <span class="nowrap">`https`</span>: enable support for
      downloading resources over https (using the <span
      class="nowrap">`http-client`</span> and <span
      class="nowrap">`http-client-tls`</span> libraries).

3.  Build:

        cabal build
        cabal test

4.  Build API documentation:

        cabal haddock --html-location=URL --hyperlink-source

5.  Copy the files:

        cabal copy --destdir=PATH

    The default destdir is <span class="nowrap">`/`</span>.

6.  Register pandoc as a GHC package:

        cabal register

    Package managers may want to use the <span
    class="nowrap">`--gen-script`</span> option to generate a script
    that can be run to register the package at install time.

### Creating a relocatable binary

It is possible to compile pandoc such that the data files pandoc uses
are embedded in the binary. The resulting binary can be run from any
directory and is completely self-contained. With cabal, add <span
class="nowrap">`-fembed_data_files`</span> to the <span
class="nowrap">`cabal configure`</span> or <span
class="nowrap">`cabal install`</span> commands.

With stack, use <span
class="nowrap">`--flag pandoc:embed_data_files`</span>.

### Running tests

Pandoc comes with an automated test suite. To run with cabal, <span
class="nowrap">`cabal test`</span>; to run with stack, <span
class="nowrap">`stack test`</span>.

To run particular tests (pattern-matching on their names), use the <span
class="nowrap">`-p`</span> option:

    cabal install pandoc --enable-tests
    cabal test --test-options='-p markdown'

Or with stack:

    stack test --test-arguments='-p markdown'

It is often helpful to add <span class="nowrap">`-j4`</span> (run tests
in parallel) and <span class="nowrap">`--hide-successes`</span> (don’t
clutter output with successes) to the test arguments as well.

If you add a new feature to pandoc, please add tests as well, following
the pattern of the existing tests. The test suite code is in <span
class="nowrap">`test/test-pandoc.hs`</span>. If you are adding a new
reader or writer, it is probably easiest to add some data files to the
<span class="nowrap">`test`</span> directory, and modify <span
class="nowrap">`test/Tests/Old.hs`</span>. Otherwise, it is better to
modify the module under the <span class="nowrap">`test/Tests`</span>
hierarchy corresponding to the pandoc module you are changing.

### Running benchmarks

To build and run the benchmarks:

    cabal configure --enable-benchmarks && cabal build
    cabal bench

or with stack:

    stack bench

To use a smaller sample size so the benchmarks run faster:

    cabal bench --benchmark-options='-s 20'

To run just the markdown benchmarks:

    cabal bench --benchmark-options='markdown'
