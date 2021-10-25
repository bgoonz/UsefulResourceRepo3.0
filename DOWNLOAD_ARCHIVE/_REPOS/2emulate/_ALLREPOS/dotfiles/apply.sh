#!/usr/bin/env bash

export DOTFILES_PATH="$HOME/dotfiles";
export PRIVATE_DOTFILES_PATH="$HOME/private-dotfiles";

# echo $(pwd);

function updateRepo() {
  cd $DOTFILES_PATH
  git pull origin master;
  cd -
}

function checkDiff() {
  for dotfile in $(ls -A $DOTFILES_PATH | egrep '^\.' | grep -v ".DS_Store"); do
    [ -f "$HOME/$dotfile" ] && git diff --stat "$HOME/$dotfile" "$DOTFILES_PATH/$dotfile";
    [ -f "$HOME/$dotfile" ] && git diff --minimal "$HOME/$dotfile" "$DOTFILES_PATH/$dotfile";
  done;
}

function doIt() {
  rsync --exclude ".git/" \
    --exclude ".DS_Store" \
    --exclude ".osx" \
    --exclude ".gitignore" \
    --exclude "bootstrap.sh" \
    --exclude "apply.sh" \
    --exclude "README.md" \
    --exclude "README.adoc" \
    --exclude "LICENSE-MIT.txt" \
    -avh --no-perms $DOTFILES_PATH/ $HOME;
}

updateRepo;

if [ "$1" == "--force" -o "$1" == "-f" ]; then
  doIt;
else
  checkDiff;

  read -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " -n 1;
  echo "";
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    doIt;
    echo "Changes applied!";
  else
    echo "Changes NOT applied.";
  fi;
fi;

unset doIt;
unset checkDiff;
