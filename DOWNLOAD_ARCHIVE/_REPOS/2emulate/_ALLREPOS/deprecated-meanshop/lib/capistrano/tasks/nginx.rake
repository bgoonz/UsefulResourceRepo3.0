namespace :nginx do
  task :info do
    on roles :all do |host|
      info "host #{host}:#{host.properties.inspect} (#{host.roles.to_a.join}): #{capture(:uptime)}"
    end
  end

  desc 'Install nginx'
  task :install do
    on roles :web do
      execute :sudo, 'add-apt-repository', '-y', 'ppa:nginx/stable'
      execute :sudo, 'apt-get', '-y', 'update'
      execute :sudo, 'apt-get', 'install', '-y', 'nginx'
    end
  end

  task :remove do
    on roles :web do
      execute :sudo, :'apt-get', :remove, :'-y', :nginx
    end
  end

  task :setup do
    on roles :web do |host|
      info "host #{host} (#{host.roles.to_a}): #{capture(:uptime)}"
    end
  end

  %w[start stop restart status].each do |command|
    desc "run #{command} on nginx"
    task command do
      on roles :web do
        execute :sudo, 'service', 'nginx', command
      end
    end
  end

  desc 'Install nginx and setup config files'
  task default: [:install, :setup]
end
