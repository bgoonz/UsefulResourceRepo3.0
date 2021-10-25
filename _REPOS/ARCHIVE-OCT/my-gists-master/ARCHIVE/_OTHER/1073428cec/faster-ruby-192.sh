curl https://raw.github.com/gist/1008945/7532898172cd9f03b4c0d0db145bc2440dcbb2f6/load.patch > /tmp/load.patch
rvm get head # always good to make sure you're up to date with RVM
rvm reload
rvm install ruby-1.9.2-p180 --patch /tmp/load.patch -n patched
rvm use ruby-1.9.2-p180-patched

