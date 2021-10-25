source 'https://rubygems.org'

ruby "2.1.2"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.0.0'

# Use pg as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use less for stylesheets
gem 'less-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'devise'
gem 'less-rails-bootstrap'
gem 'jquery-turbolinks'
gem 'font-awesome-rails'
gem 'simple_form', '>= 3.0.0.rc'
gem 'paypal-sdk-adaptivepayments'
gem 'paypal-sdk-rest'
gem 'video_info'
gem 'redactor-rails'
gem 'carrierwave'
gem 'fog'
gem 'mini_magick'
gem 'google-analytics-rails'
gem 'omniauth-facebook', '1.4.0'
gem 'newrelic_rpm'
gem 'geocoder'
gem 'workflow' # orders' state machine
gem 'rack-cors', :require => 'rack/cors'

group :development, :test do
  gem 'rspec-rails', '~> 2.0'
  gem 'shoulda-matchers'
  gem 'factory_girl_rails'
  gem 'capybara'
  gem 'launchy'
  gem 'annotate'
  gem 'dotenv-rails'
end

group :development do
  gem 'guard-rspec', require: false
  gem 'terminal-notifier-guard'
  gem 'quiet_assets'
  gem 'ruby-graphviz'
  gem 'thin'
end

group :test do
  gem 'codeclimate-test-reporter', require: nil
  gem 'webmock'
  gem 'vcr'
end

group :production do
  gem 'rails_12factor'
  gem 'passenger'
end

