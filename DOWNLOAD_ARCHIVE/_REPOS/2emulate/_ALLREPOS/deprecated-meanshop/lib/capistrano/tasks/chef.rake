file "cookbooks.tar.gz" => FileList["cookbooks/**/*"] do |t|
  sh "tar -cvzf #{t.name} #{t.prerequisites.join('  ')}"
end

namespace :'chef-solo' do
  desc "Package and upload the cookbooks"
  task :'upload-cookbooks' => 'cookbooks.tar.gz' do
    tarball = t.prerequisites.first
    on roles(:all) do
      execute :mkdir, '-p', '/tmp/chef-solo'
      upload! tarball, '/tmp/chef-solo'
      execute :tar, '-xzf', "/tmp/chef-solo/#{tarball}"
    end
  end

  desc "Uploads host specific configuration for chef solo"
  task :'upload-host-config' do
    on roles(:all) do |host|
      template_path = File.expand_path('chef-solo.rb.erb')
      host_config   = ERB.new(File.new(template_path).read).result(host)
      upload! StringIO.new(host_config), '/tmp/chef-solo.rb'
    end
  end

  desc "Upload cookbooks and configuration and execute chef-solo."
  task default: [:'upload-cookbooks', :'upload-host-config'] do
    on roles(:all) do |host|
      execute :'chef-solo', '--config', '/tmp/chef-solo.rb', '--log_level', 'info'
    end
  end
end

