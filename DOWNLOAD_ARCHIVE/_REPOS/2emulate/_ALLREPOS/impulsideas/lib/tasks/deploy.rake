# rake deploy                      # Push app to heroku:production, migrate, restarts and tail logs
# rake deploy:production           # Push app to production, migrate, restarts, tag and tail logs
# rake deploy:production:config    # production config
# rake deploy:production:console   # production console
# rake deploy:production:logs      # production logs
# rake deploy:production:ps        # production ps
# rake deploy:production:releases  # production releases
# rake deploy:staging              # Push app to staging, migrate, restarts, tag and tail logs
# rake deploy:staging:config       # staging config
# rake deploy:staging:console      # staging console
# rake deploy:staging:logs         # staging logs
# rake deploy:staging:ps           # staging ps
# rake deploy:staging:releases     # staging releases

# use pty to monitor git push and stop further tasks in case of error (it helps to avoid tagging in case of error during deployment)
require 'pty'

desc "Push app to heroku:production, migrate, restarts and tail logs"
task deploy: 'deploy:default'

namespace :deploy do
  PRODUCTION_APP = 'impulsideas-2014'
  STAGING_APP = 'impulsideas-stage'

  %w[staging production].each do |mode|
    task "#{mode}_migrations" => ["set_#{mode}_app", :push, :off, :migrate, :restart, :on, :tag]
    task "#{mode}_rollback" => ["set_#{mode}_app", :off, :push_previous, :restart, :on]

    desc "Push app to #{mode}, migrate, restarts, tag and tail logs"
    task "#{mode}" => ["set_#{mode}_app", :push, :off, :tag, :migrate, :restart, :on, 'app:logs']

    %w[logs console config ps releases].each do |app_task|
      desc "#{mode} #{app_task}"
      task "#{mode}:#{app_task}" => ["set_#{mode}_app", "app:#{app_task}"]
    end
  end

  task :set_staging_app do
    puts "setting app to #{STAGING_APP}"
    APP = STAGING_APP
  end

  task :set_production_app do
    puts "Setting app to #{PRODUCTION_APP}..."
  	APP = PRODUCTION_APP
  end

  task default: [:set_production_app, :push, :off, :migrate, :restart, :on, 'app:logs']

  task :push do
    puts "Pushing branch..."
    git_status = `git status -v`
    abort("Local branch is out of sync with github origin. Please push there first.") if git_status.match(/\*[^\]]+?\[staged|ahead|behind/s) != nil
    current_branch = `git rev-parse --abbrev-ref HEAD`.chomp
    current_branch += ":master" if current_branch != "master"
    puts "Deploying #{current_branch} to #{APP} ..."
    cmd = "git push -f git@heroku.com:#{APP}.git #{current_branch}"
    begin
      PTY.spawn(cmd) do |stdin, stdout, pid|
        begin
          # display log in real time; stop task in case fatal error or not changes in git repo found
          stdin.each { |line| print line; abort('EXIT!') if line.match(/fatal:|Everything up-to-date/); }
        rescue Errno::EIO => err
          puts "Errno:EIO error: #{err}"
        end
      end
    rescue PTY::ChildExited => err2
      puts "PTY::ChildExited: #{err2}"
    end
  end

  task :restart do
    puts 'Restarting app servers ...'
    Bundler.with_clean_env do
      puts `heroku restart --app #{APP}`
    end
  end

  task :tag do
    release_name = "#{APP}-release-#{Time.now.utc.strftime("%Y%m%d%H%M%S")}"
    puts "Tagging release as '#{release_name}'"
    puts `git tag -a #{release_name} -m 'Tagged release'`
    puts `git push --tags git@heroku.com:#{APP}.git`
    puts `git push --tags origin`
  end

  task :migrate do
    puts 'Running database migrations ...'
    Bundler.with_clean_env do
      puts `heroku run rake db:migrate --app #{APP}`
      # alternative for multitenant app
      #puts `heroku run rake apartment:migrate --app #{APP}`
    end
  end

  task :off do
    puts 'Putting the app into maintenance mode ...'
    Bundler.with_clean_env do
      puts `heroku maintenance:on --app #{APP}`
    end
  end

  task :on do
    puts 'Taking the app out of maintenance mode ...'
    Bundler.with_clean_env do
      puts `heroku maintenance:off --app #{APP}`
    end
  end

  task :push_previous do
    puts "Pushing last tagged release..."
    prefix = "#{APP}_release-"
    releases = `git tag`.split("\n").select { |t| t[0..prefix.length-1] == prefix }.sort
    current_release = releases.last
    previous_release = releases[-2] if releases.length >= 2
    if previous_release
      puts "Rolling back to '#{previous_release}' ..."

      puts "Checking out '#{previous_release}' in a new branch on local git repo ..."
      puts `git checkout #{previous_release}`
      puts `git checkout -b #{previous_release}`

      puts "Removing tagged version '#{previous_release}' (now transformed in branch) ..."
      puts `git tag -d #{previous_release}`
      puts `git push git@heroku.com:#{APP}.git :refs/tags/#{previous_release}`

      puts "Pushing '#{previous_release}' to Heroku master ..."
      puts `git push git@heroku.com:#{APP}.git +#{previous_release}:master --force`

      puts "Deleting rollbacked release '#{current_release}' ..."
      puts `git tag -d #{current_release}`
      puts `git push git@heroku.com:#{APP}.git :refs/tags/#{current_release}`

      puts "Retagging release '#{previous_release}' in case to repeat this process (other rollbacks)..."
      puts `git tag -a #{previous_release} -m 'Tagged release'`
      puts `git push --tags git@heroku.com:#{APP}.git`

      puts "Turning local repo checked out on master ..."
      puts `git checkout master`
      puts 'All done!'
    else
      puts "No release tags found - can't roll back!"
      puts releases
    end
  end
end

namespace :app do
  task :logs do
    puts "tailing logs..."
    Bundler.clean_exec "heroku logs --tail --app #{APP}"
  end

  task :config do
    puts "config..."
    Bundler.with_clean_env do
      puts `heroku config --app #{APP}`
    end
  end

  task :console do
    puts "console..."
    Bundler.with_clean_env do
      sh "heroku run rails c --app #{APP}"
    end
  end

  task :ps do
    puts "running processes..."
    Bundler.with_clean_env do
      puts `heroku ps --app #{APP}`
    end
  end

  task :releases do
    puts "releases..."
    Bundler.with_clean_env do
      puts `heroku releases --app #{APP}`
    end
  end
end
