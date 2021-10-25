#!/bin/bash

#
# Convenience script for downloading and configuring pypy under virtualenv
#
# Dependencies:
# * pip install virtualenv

# Configure these variables to your liking...
project_name="my_tornado_project"
app_root="$HOME/www/$project_name"

mkdir -p "$app_root/pypy"
cd "$app_root/pypy"

pypy_version="1.5"

unamestr=$(uname)
if [[ "$unamestr" == 'Linux' ]]; then
  pypy_download_url="https://bitbucket.org/pypy/pypy/downloads/pypy-$pypy_version-linux64.tar.bz2"
  pypy_build="$app_root/pypy/pypy-c-jit-43780-b590cf6de419-linux64"

elif [[ "$unamestr" == 'Darwin' ]]; then
  pypy_download_url="https://bitbucket.org/pypy/pypy/downloads/pypy-$pypy_version-osx64.tar.bz2"
  pypy_build="$app_root/pypy/pypy-c-jit-43780-b590cf6de419-osx64"

fi

echo "Downloading PyPy project from $pypy_download_url..."
curl --compressed --location --silent --output "$app_root/pypy/pypy-compressed.tar.bz2" "$pypy_download_url"
echo

echo "Extracting PyPy project..."
tar xzf "$app_root/pypy/pypy-compressed.tar.bz2"
rm -f "$app_root/pypy/pypy-compressed.tar.bz2"
echo

echo "Creating pypy environment for project: $project_name..."
virtualenv -p "$pypy_build/bin/pypy" --no-site-packages pypy-env
echo

echo "Activating pypy-env..."
source "$app_root/pypy/pypy-env/bin/activate"
echo
