# factory_girl [![Build Status](https://secure.travis-ci.org/thoughtbot/factory_girl.png)](http://travis-ci.org/thoughtbot/factory_girl?branch=master) [![Dependency Status](https://gemnasium.com/thoughtbot/factory_girl.png)](https://gemnasium.com/thoughtbot/factory_girl)

factory_girl is a fixtures replacement with a straightforward definition syntax, support for multiple build strategies (saved instances, unsaved instances, attribute hashes, and stubbed objects), and support for multiple factories for the same class (user, admin_user, and so on), including factory inheritance.

If you want to use factory_girl with Rails, see
[factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails).

Documentation
-------------

You should find the documentation for your version of factory_girl on [Rubygems](https://rubygems.org/gems/factory_girl).

See [GETTING_STARTED](https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md) for information on defining and using factories.

Install
--------

```shell
gem install factory_girl
```
or add the following line to Gemfile:

```ruby
gem 'factory_girl'
```
and run `bundle install` from your shell.

Supported Ruby versions
-----------------------

The FactoryGirl 3.x series supports Ruby 1.9.x.

For older versions of Ruby, please use the FactoryGirl 2.x series.

More Information
----------------

* [Rubygems](https://rubygems.org/gems/factory_girl)
* [Mailing list](http://groups.google.com/group/factory_girl)
* [Issues](https://github.com/thoughtbot/factory_girl/issues)
* [GIANT ROBOTS SMASHING INTO OTHER GIANT ROBOTS](http://robots.thoughtbot.com/)

Contributing
------------

Please see the [contribution guidelines](https://github.com/thoughtbot/factory_girl/blob/master/CONTRIBUTION_GUIDELINES.md).

Credits
-------

factory_girl was written by Joe Ferris with contributions from several authors, including:

* Alex Sharp
* Eugene Bolshakov
* Jon Yurek
* Josh Nichols
* Josh Owens
* Nate Sutton
* Josh Clayton
* Thomas Walpole

The syntax layers are derived from software written by the following authors:

* Pete Yandell
* Rick Bradley
* Yossef Mendelssohn

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

factory_girl is maintained and funded by [thoughtbot, inc](http://thoughtbot.com/community)

The names and logos for thoughtbot are trademarks of thoughtbot, inc.

License
-------

factory_girl is Copyright ?? 2008-2011 Joe Ferris and thoughtbot. It is free software, and may be redistributed under the terms specified in the LICENSE file.
