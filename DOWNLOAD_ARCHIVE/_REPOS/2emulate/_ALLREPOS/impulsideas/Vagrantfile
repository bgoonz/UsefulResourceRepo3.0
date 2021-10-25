# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT

# Ubuntu: Curl development headers with SSL support
sudo apt-get install -y libcurl4-openssl-dev curl zsh postgresql-contrib-9.3

curl -Lo- https://bit.ly/janus-bootstrap | bash

curl -L http://install.ohmyz.sh | sh
chsh -s $(which zsh) $(whoami)

SCRIPT

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Use Ubuntu 14.04 Trusty Tahr 64-bit as our operating system
  config.vm.box = "ubuntu/trusty64"

  # Configurate the virtual machine to use 2GB of RAM
  config.vm.provider :virtualbox do |vb|
    host = RbConfig::CONFIG['host_os']

    # Give VM 1/4 system memory & access to all cpu cores on the host
    if host =~ /darwin/
      cpus = `sysctl -n hw.ncpu`.to_i
      # sysctl returns Bytes and we need to convert to MB
      mem = `sysctl -n hw.memsize`.to_i / 1024 / 1024 / 4
    elsif host =~ /linux/
      cpus = `nproc`.to_i
      # meminfo shows KB and we need to convert to MB
      mem = `grep 'MemTotal' /proc/meminfo | sed -e 's/MemTotal://' -e 's/ kB//'`.to_i / 1024 / 4
    else # sorry Windows folks, I can't help you
      cpus = 2
      mem = 1024
    end

    vb.customize ["modifyvm", :id, "--memory", mem]
    vb.customize ["modifyvm", :id, "--cpus", cpus]
  end

  # ssh-add -K ~/.ssh/id_rsa
  config.ssh.forward_agent = true

  # Forward the Rails server default port to the host
  config.vm.network :forwarded_port, guest: 3000, host: 4000
  config.vm.network :forwarded_port, guest: 3333, host: 5000

  # Folder Sync

  #config.vm.synced_folder '.', '/vagrant', type: 'rsync'
  #config.vm.network 'private_network', ip: '192.168.50.4' # ensure this is available

  # http://chase-seibert.github.io/blog/2014/03/09/vagrant-cachefilesd.html
  config.vm.synced_folder '.', '/vagrant', type: 'nfs', mount_options: ['rw', 'vers=3', 'tcp', 'fsc']  # the fsc is for cachedfilesd
  config.vm.network :private_network, ip: "10.11.12.13"

  config.vm.provision "shell", inline: $script

  # Use Chef Solo to provision our virtual machine
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"

    chef.add_recipe "apt"
    chef.add_recipe "nodejs"
    chef.add_recipe "ruby_build"
    chef.add_recipe "rbenv::user"
    chef.add_recipe "rbenv::vagrant"
    chef.add_recipe "vim"
    chef.add_recipe "postgresql::server"
    chef.add_recipe "postgresql::client"
    chef.add_recipe "imagemagick::devel"

    # Install Ruby 2.1.2 and Bundler
    # Set an empty root password for MySQL to make things simple
    chef.json = {
      rbenv: {
        user_installs: [{
          user: 'vagrant',
          rubies: ["2.1.2"],
          global: "2.1.2",
          gems: {
            "2.1.2" => [
              { name: "bundler" }
            ]
          }
        }]
      },
      postgresql: {
        password: {
          postgres: "password"
        },
        pg_hba: [
          { type: 'local', db: 'all', user: 'all', addr: nil, method: 'trust' },
          { type: 'local', db: 'all', user: 'postgres', addr: nil, method: 'trust' },
          { type: 'host', db: 'all', user: 'all', addr: '127.0.0.1/32', method: 'trust' }
        ]
      }
    }
  end
end
