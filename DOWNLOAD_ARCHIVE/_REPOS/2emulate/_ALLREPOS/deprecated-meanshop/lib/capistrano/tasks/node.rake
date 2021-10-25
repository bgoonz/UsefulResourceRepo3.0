namespace :node do
  # set :node_version, '0.10'

  desc 'Install nvm and node'
  task :install_nvm do
    on roles :app do
      execute :curl, '-o-', 'https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh', '|', 'bash'
      # SSHKit.config.command_map[:nvm] = "/home/#{fetch(:user)}/.nvm/nvm-exec"
      execute :source, "/home/#{fetch(:user)}/.nvm/nvm.sh"
      within "/home/#{fetch(:user)}" do
        execute :nvm, 'install', fetch(:node_version, '0.10')
        execute :nvm, 'use', fetch(:node_version, '0.10')
        execute :nvm, 'alias', fetch(:node_version, '0.10')
      end
    end
  end

  desc 'Install node'
  task :install do
    on roles :app do
      execute :sudo, 'add-apt-repository', '-y', 'ppa:chris-lea/node.js'
      execute :sudo, 'apt-get', '-y', 'update'
      execute :sudo, 'apt-get', 'install', '-y', 'nodejs'
    end
  end

  desc 'Install and setup all NodeJS depencies'
  task default: [:install]
end
