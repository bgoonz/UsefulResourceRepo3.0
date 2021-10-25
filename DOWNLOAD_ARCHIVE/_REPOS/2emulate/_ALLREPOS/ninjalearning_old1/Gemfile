# require 'rbconfig'
# HOST_OS = RbConfig::CONFIG['host_os']
# case HOST_OS
#   when /darwin/i
#    gem 'rb-fsevent', :group => :development
#    gem 'growl', :group => :development
#   when /linux/i
#     gem 'libnotify', :group => :development
#     gem 'rb-inotify', :group => :development
#   when /mswin|windows/i
#     gem 'rb-fchange', :group => :development
#     gem 'win32console', :group => :development
#     gem 'rb-notifu', :group => :development
# end
source 'https://rubygems.org'
gem 'rails'
gem 'thin'
group :development, :test do
  gem 'sqlite3'
  gem 'spork', '~> 1.0rc'
end
group :production do
  gem 'pg'
end
group :developement do
  gem 'growl'       # mac os x
  gem 'rb-fsevent'  # mac os x
end
group :assets do
  gem 'sass-rails',   '>= 3.2.3'
  gem 'coffee-rails', '>= 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end
gem 'jquery-rails'
gem "haml", ">= 3.1.6"
gem "haml-rails", ">= 0.3.4", :group => :development
gem "rspec-rails", ">= 2.10.1", :group => [:development, :test]
gem "factory_girl_rails", ">= 3.3.0", :group => [:development, :test]
gem "email_spec", ">= 1.2.1", :group => :test
gem "cucumber-rails", ">= 1.3.0", :group => :test, :require => false
gem "capybara", ">= 1.1.2", :group => :test
gem "database_cleaner", ">= 0.8.0", :group => :test
gem "launchy", ">= 2.1.0", :group => :test
gem "guard", ">= 0.6.2", :group => :development  
gem "guard-bundler", ">= 0.1.3", :group => :development
gem "guard-rails", ">= 0.0.3", :group => :development
gem "guard-livereload", ">= 0.3.0", :group => :development
gem "guard-rspec", ">= 0.4.3", :group => :development
gem "guard-cucumber", ">= 0.6.1", :group => :development
gem "devise", ">= 2.1.0"
gem "devise_invitable", ">= 1.0.2"
gem "cancan", ">= 1.6.7"
gem "rolify", ">= 3.1.0"
gem "bootstrap-sass", ">= 2.0.3"
gem "simple_form"
gem "rails-footnotes", ">= 3.7", :group => :development
gem "will_paginate", ">= 3.0.3"