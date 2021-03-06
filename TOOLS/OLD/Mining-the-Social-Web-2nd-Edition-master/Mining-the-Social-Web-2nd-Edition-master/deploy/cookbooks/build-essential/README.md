# Description

Installs packages required for compiling C software from source. Use
this cookbook if you wish to compile C programs, or install RubyGems
with native extensions.

# Requirements

Chef version 0.10.10+ and Ohai 0.6.12+ are required.

## Platform

Supported platforms by platform family:

- debian (debian, ubuntu)
- fedora
- mac_os_x (10.6+)
- rhel (centos, redhat, amazon, scientific)
- smartos
- solaris2
- omnios

**Note for OmniOS**: Currently, OmniOS's Ruby package is built with
GCC 4.6.3, and the path is hardcoded, as the gcc binaries are not
installed in the default $PATH. This means that in order to install
RubyGems into the "system" Ruby, one must install `developer/gcc46`.
[An issue](https://github.com/omniti-labs/omnios-build/issues/19) is
open upstream w/ OmniOS to rebuild the Ruby package with GCC 4.7.2.

## Cookbooks

This cookbook suggests the following external cookbooks:

- [pkgin](http://community.opscode.com/cookbooks/pkgin) (someara) - SmartOS only
- [pkgutil](http://community.opscode.com/cookbooks/pkgutil) (marthag) - Solaris 2 only

# Attributes

- `node['build_essential']['compiletime']` - Whether the resources in
  the default recipe should be configured at the "Compile" phase of the
  Chef run. Defaults to false, see **Usage** for more information.
- `node['build_essential']['osx']['gcc_installer_url']` - The URL of
  the OS X GCC package installer (.pkg).
- `node['build_essential']['osx']['gcc_installer_checksum']` - The
  SHA256 checksum of the OS X GCC installer.

# Recipes

The main entrypoint for this cookbook is the `default` recipe. This
recipe includes a platform specific recipe based on the node's platform
family.

On Linux platforms (see **Platform** above for a supported list of
families), packages required to build C source projects are installed.
This includes GCC, make, autconf and others. On Debian-family
distributions, the apt-cache may need to be updated, especially during
compile time installation. See **Usage** for further information.

On Mac OS X, the GCC standalone installer by Kenneth Reitz is
installed. Note that this is _not_ the Xcode CLI package, as that does
not include all programs and headers required to build some common
GNU-style C projects, such as those that are available from projects
such as MacPorts or Homebrew. Changing the attributes for the GCC
installer URL and checksum to the Xcode values may work, but this is
untested.

# Usage

Simply include the `build-essential` and the required tools will be
installed to the system, and later recipes will be able to compile
software from C source code.

For RubyGems that include native C extensions you wish to use with
Chef, you should do two things.

0. Ensure that the C libraries, include files and other assorted "dev"
   type packages are installed. You should do this in the compile phase
   after the build-essential recipe.
1. Use the `chef_gem` resource in your recipes. This requires Chef version 0.10.10+.
2. Set the `compiletime` attribute in roles where such recipes are
   required. This will ensure that the build tools are available to
   compile the RubyGems' extensions, as `chef_gem` happens during the
   compile phase, too.

Example installation of a devel package at compile-time in a recipe:

    package "mypackage-dev" do
      action :nothing
    end.run_action(:install)

Example use of `chef_gem`:

    chef_gem "mygem"

Example role:

    name "myapp"
    run_list(
      "recipe[build-essential]",
      "recipe[myapp]"
    )
    default_attributes(
      "build_essential" => {
        "compiletime" => true
      }
    )

The compile time option (via the attribute) is to ensure that the
proper packages are available at the right time in the Chef run. It is
recommended that the build-essential recipe appear early in the run
list.

The Chef wiki has documentation on
[the anatomy of a chef run](http://wiki.opscode.com/display/chef/Anatomy+of+a+Chef+Run).

# Limitations

It is not in the scope of this cookbook to handle installing the
required headers for individual software projects in order to compile
them, or to compile RubyGems with native C extensions. You should
create a cookbook for handling that.

# License and Author

Author:: Joshua Timberman (<joshua@opscode.com>)
Author:: Seth Chisamore (<schisamo@opscode.com>)

Copyright 2009-2011, Opscode, Inc. (<legal@opscode.com>)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
