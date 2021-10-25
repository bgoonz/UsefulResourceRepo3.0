if [ -f ~/.bash_profile ]; then echo "bash_profile exists"; else echo "bash_profile does not exist"; fi
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
