# brew install zsh zsh-completions

# To activate these completions, add the following to your .zshrc:
fpath=(/usr/local/share/zsh-completions $fpath)

# You may also need to force rebuild `zcompdump`:
  # rm -f ~/.zcompdump; compinit

# Additionally, if you receive "zsh compinit: insecure directories" warnings when attempting
# to load these completions, you may need to run this:
  # chmod go-w '/usr/local/share'