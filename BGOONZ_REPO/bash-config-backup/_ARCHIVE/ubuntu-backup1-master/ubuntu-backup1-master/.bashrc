# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
   PS1="\[\033[m\]|\[\033[1;35m\]\t\[\033[m\]|\[\e[1;31m\]\u\[\e[1;36m\]\[\033[m\]@\[\e[1;36m\]\h\[\033[m\]:\[\e[0m\]\[\e[1;32m\][\W]\[\033[1;31m\] \W_exitstatus:\$?\[\033[00m\]__________________________________________________________o>\n\n"
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.
# ------------------------------------------------------------------------------
# ---------------------------- general shortcuts--------------------------------
# ------------------------------------------------------------------------------

# -- easy reverse cd --

alias .1='cd ..'
alias .2='cd ../../'
alias .3='cd ../../../'
alias .4='cd ../../../../'
alias .5='cd ../../../../../'

# -- easy ls with color--

alias l='ls -CF'
alias la='ls -A'
alias ll='ls -alF'
alias ls='ls --color=auto'

#order by size
alias lt='ls --human-readable --size -1 -S --classify'

#only show hidden files
alias lh='ls -lisAd .[^.]*'

# -- grep with color --

alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'

# -- safety nets --

alias mv='mv -i'
alias rm='rm -i'

# -- system checks --

alias meminfo='free -m -l -t'
alias topmem='ps auxf | sort -nr -k 4'
alias gpumeminfo='grep -i --color memory /var/log/Xorg.0.log'
alias  getipe='curl ipinfo.io/ip'
alias speed='speedtest-cli --server 2406 --simple'

# -- true laziness --

alias c='clear'
alias update='sudo apt update && sudo apt upgrade'
alias install='sudo apt install'
alias change-terminal='sudo update-alternatives --config x-terminal-emulator'
alias pip="pip3"
alias www='python -m SimpleHTTPServer 8000'
alias vim='nvim'


# ------------------------------------------------------------------------------
# ------------------------------ git shortcuts----------------------------------
# ------------------------------------------------------------------------------

alias commit='git commit -m'
alias gc='git checkout'
alias log='git log --oneline'
alias status='git status'
alias setremote='git remote set-url origin'


# ------------------------------------------------------------------------------
# ------------------------------ psql shortcuts---------------------------------
# ------------------------------------------------------------------------------

alias psql='psql -h localhost'
alias sc='npx sequelize-cli'
alias sc-init='npx sequelize-cli init'

alias sc-makedb='npx sequelize-cli db:create'
alias sc-makemodel='npx sequelize-cli model:generate'

alias sc-migrate='npx sequelize-cli db:migrate'

alias sc-genseed='npx sequelize-cli seed:generate'
alias sc-seed='npm sequelize-cli db:seed:all'
###-begin-npm-completion-###
#
# npm command completion script
#
# Installation: npm completion >> ~/.bashrc  (or ~/.zshrc)
# Or, maybe: npm completion > /usr/local/etc/bash_completion.d/npm
#



##------------------------------------

alias ls='ls --color=auto'

alias ..='cd ..'
alias ...='cd ../..'
alias back='cd -'

alias l='ls'
alias sl='ls'

alias ini="git init && git add . && git commit -m 'initial commit'"
alias norm="git add . && git commit -m 'update'"
alias commit='git commit'
alias check='git checkout'
alias status='git status'
alias push='git push'
alias pull='git pull'
alias stash='git stash'
alias pop='git stash pop'



alias unzipa='find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;'


alias run='./manage.py runserver 0.0.0.0:8000'
alias syncdb='./manage.py syncdb'
alias numFiles='echo $(ls -1 | wc -l)'       # numFiles:     Count of non-hidden files in current dir
alias make1mb='truncate -s 1m ./1MB.dat'     # make1mb:      Creates a file of 1mb size (all zeros)
alias make5mb='truncate -s 5m ./5MB.dat'     # make5mb:      Creates a file of 5mb size (all zeros)
alias make10mb='truncate -s 10m ./10MB.dat'  # make10mb:     Creates a file of 10mb size (all zeros)


#   ---------------------------
#   2.  SEARCHING
#   ---------------------------

alias qfind="find . -name "                 # qfind:    Quickly search for file


#   ---------------------------
#   3.  PROCESS MANAGEMENT
#   ---------------------------

#   memHogsTop, memHogsPs:  Find memory hogs
#   -----------------------------------------------------
    alias memHogsTop='top -l 1 -o rsize | head -20'
    alias memHogsPs='ps wwaxm -o pid,stat,vsize,rss,time,command | head -10'

#   cpuHogs:  Find CPU hogs
#   -----------------------------------------------------
    alias cpu_hogs='ps wwaxr -o pid,stat,%cpu,time,command | head -10'

#   topForever:  Continual 'top' listing (every 10 seconds)
#   -----------------------------------------------------
    alias topForever='top -l 9999999 -s 10 -o cpu'

#   ttop:  Recommended 'top' invocation to minimize resources
#   ------------------------------------------------------------
#       Taken from this macosxhints article
#       http://www.macosxhints.com/article.php?story=20060816123853639
#   ------------------------------------------------------------
    alias ttop="top -R -F -s 10 -o rsize"


#   ---------------------------
#   4.  NETWORKING
#   ---------------------------

alias netCons='lsof -i'                                   # netCons:      Show all open TCP/IP sockets
alias lsock='sudo /usr/sbin/lsof -i -P'                   # lsock:        Display open sockets
alias lsockU='sudo /usr/sbin/lsof -nP | grep UDP'         # lsockU:       Display only open UDP sockets
alias lsockT='sudo /usr/sbin/lsof -nP | grep TCP'         # lsockT:       Display only open TCP sockets
alias ipInfo0='ifconfig getpacket en0'                    # ipInfo0:      Get info on connections for en0
alias ipInfo1='ifconfig getpacket en1'                    # ipInfo1:      Get info on connections for en1
alias openPorts='sudo lsof -i | grep LISTEN'              # openPorts:    All listening connections
alias showBlocked='sudo ipfw list'                        # showBlocked:  All ipfw rules inc/ blocked IPs


#   ---------------------------------------
#   5.  SYSTEMS OPERATIONS & INFORMATION
#   ---------------------------------------

alias mountReadWrite='/sbin/mount -uw /'    # mountReadWrite:   For use when booted into single-user


#   ---------------------------------------
#   6.  DATE & TIME MANAGEMENT
#   ---------------------------------------

alias bdate="date '+%a, %b %d %Y %T %Z'"
alias cal3='cal -3'
alias da='date "+%Y-%m-%d %A    %T %Z"'
alias daysleft='echo "There are $(($(date +%j -d"Dec 31, $(date +%Y)")-$(date +%j))) left in year $(date +%Y)."'
alias epochtime='date +%s'
alias mytime='date +%H:%M:%S'
alias secconvert='date -d@1234567890'
alias stamp='date "+%Y%m%d%a%H%M"'
alias timestamp='date "+%Y%m%dT%H%M%S"'
alias today='date +"%A, %B %-d, %Y"'
alias weeknum='date +%V'
# Example aliases
# alias bashconfig="mate ~/.bashrc"
# alias ohmybash="mate ~/.oh-my-bash"
# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# ------------------------------------------------------------------------------
# ---- controls what displays on every line of terminal that is not the output log-----------
#--- the \W outputs the current working directory
# ------------------------------------------------------------------------------

#--------------------function that ls's every time I cd into a new directory-----------
#   i.e.)       home ====>cd ..
#bin   dev  home  lib    lib64   lost+found  mnt  proc  run   snap  sys  usr
#boot  etc  init  lib32  libx32  media       opt  root  sbin  srv   tmp  var
#/ ====>
#--------------------------------------------------------------------------------------------------------
# List all files colorized in long format, including dot files
alias la="ls -Gla"

# List only directories
alias lsd='ls -l | grep "^d"'

# Always use color output for `ls`
if [[ "$OSTYPE" =~ ^darwin ]]; then
	alias ls="command ls -G"
else
	alias ls="command ls --color"
	export LS_COLORS='no=00:fi=00:di=01;34:ln=01;36:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.avi=01;35:*.fli=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.ogg=01;35:*.mp3=01;35:*.wav=01;35:'
fi

# Enable aliases to be sudo’ed
alias sudo='sudo '

# Get OS X Software Updates, update Homebrew itself, and upgrade installed Homebrew packages
alias update='sudo softwareupdate -i -a; brew update; brew upgrade'

# IP addresses
alias ip="dig +short myip.opendns.com @resolver1.opendns.com"
alias localip="ipconfig getifaddr en1"
alias ips="ifconfig -a | perl -nle'/(\d+\.\d+\.\d+\.\d+)/ && print $1'"

# Enhanced WHOIS lookups
alias whois="whois -h whois-servers.net"

# Flush Directory Service cache
alias flush="dscacheutil -flushcache"

# View HTTP traffic
alias sniff="sudo ngrep -d 'en1' -t '^(GET|POST) ' 'tcp and port 80'"
alias httpdump="sudo tcpdump -i en1 -n -s 0 -w - | grep -a -o -E \"Host\: .*|GET \/.*\""

# Canonical hex dump; some systems have this symlinked
type -t hd > /dev/null || alias hd="hexdump -C"

# OS X has no `md5sum`, so use `md5` as a fallback
type -t md5sum > /dev/null || alias md5sum="md5"

# Trim new lines and copy to clipboard
alias c="tr -d '\n' | pbcopy"

# Recursively delete `.DS_Store` files
alias cleanup="find . -type f -name '*.DS_Store' -ls -delete"

# File size
alias fs="stat -f \"%z bytes\""

# ROT13-encode text. Works for decoding, too! ;)
alias rot13='tr a-zA-Z n-za-mN-ZA-M'

# Empty the Trash on all mounted volumes and the main HDD
# Also, clear Apple’s System Logs to improve shell startup speed
alias emptytrash="sudo rm -rfv /Volumes/*/.Trashes; sudo rm -rfv ~/.Trash; sudo rm -rfv /private/var/log/asl/*.asl"

# Show/hide hidden files in Finder
alias show="defaults write com.apple.Finder AppleShowAllFiles -bool true && killall Finder"
alias hide="defaults write com.apple.Finder AppleShowAllFiles -bool false && killall Finder"

# Hide/show all desktop icons (useful when presenting)
alias hidedesktop="defaults write com.apple.finder CreateDesktop -bool false && killall Finder"
alias showdesktop="defaults write com.apple.finder CreateDesktop -bool true && killall Finder"

# URL-encode strings
alias urlencode='python -c "import sys, urllib as ul; print ul.quote_plus(sys.argv[1]);"'

# Disable Spotlight
alias spotoff="sudo mdutil -a -i off"
# Enable Spotlight
alias spoton="sudo mdutil -a -i on"

# PlistBuddy alias, because sometimes `defaults` just doesn’t cut it
alias plistbuddy="/usr/libexec/PlistBuddy"

# One of @janmoesen’s ProTip™s
for method in GET HEAD POST PUT DELETE TRACE OPTIONS; do
	alias "$method"="lwp-request -m '$method'"
done


alias sc="screen"
alias scls="screen -ls"
alias scr="screen -r"
alias cact='conda activate'
alias cdact='conda deactivate'
alias gst='git status'
alias gd='git diff'
alias glg='git log'
alias gb='git branch'
alias gck='git checkout'
alias gp='git push'
alias gpl='git pull'
alias gc='git commit'
alias ga='git add'
alias g='git'
alias tb='tensorboard'
alias jpyn='jupyter notebook'
alias p='python'
alias pi='pip install'



# <!-------------------------------------SUPER NEW------------------------------------------------------------->
alias giacp='git init && git add . &&  git commit -m "update" && git push -u origin master'
#-----------------------------------------------------------------------------------------------
function lazygit {
    git add .
    git commit -a -m "$1 hi"
    git push
}
#This allows you to provide a commit message, such as
#lazygit "My commit msg"
#
#------------------------------------------------------------------------------------------------
function cd {
    if [ -z "$1" ]; then
        builtin cd
    else
        builtin cd "$1"
    fi
    if [ $? -eq 0 ]; then
    printf '\n'
        ls
    fi
}

#------------------------------------------------------------------------------------------------
# use coreutils `ls` if possible…
hash gls >/dev/null 2>&1 || alias gls="ls"

# always use color, even when piping (to awk,grep,etc)
if gls --color > /dev/null 2>&1; then colorflag="--color"; else colorflag="-G"; fi;
export CLICOLOR_FORCE=1

# ls options: A = include hidden (but not . or ..), F = put `/` after folders, h = byte unit suffixes
alias ls='gls -AFh ${colorflag} --group-directories-first'
alias lsd='ls -l | grep "^d"' # only directories
#    `la` defined in .functions
###


#------------------------------------------------------------------------------------------------

# Create a new directory and enter it
function md() {
	mkdir -p "$@" && cd "$@"
}


# find shorthand
function f() {
	find . -name "$1" 2>&1 | grep -v 'Permission denied'
}

# List all files, long format, colorized, permissions in octal
function la(){
 	ls -l  "$@" | awk '
    {
      k=0;
      for (i=0;i<=8;i++)
        k+=((substr($1,i+2,1)~/[rwx]/) *2^(8-i));
      if (k)
        printf("%0o ",k);
      printf(" %9s  %3s %2s %5s  %6s  %s %s %s\n", $3, $6, $7, $8, $5, $9,$10, $11);
    }'
}

# cd into whatever is the forefront Finder window.
cdf() {  # short for cdfinder
  cd "`osascript -e 'tell app "Finder" to POSIX path of (insertion location as alias)'`"
}





# Copy w/ progress
cp_p () {
  rsync -WavP --human-readable --progress $1 $2
}



# get gzipped size
function gz() {
	echo "orig size    (bytes): "
	cat "$1" | wc -c
	echo "gzipped size (bytes): "
	gzip -c "$1" | wc -c
}

# whois a domain or a URL
function whois() {
	local domain=$(echo "$1" | awk -F/ '{print $3}') # get domain from URL
	if [ -z $domain ] ; then
		domain=$1
	fi
	echo "Getting whois record for: $domain …"

	# avoid recursion
					# this is the best whois server
													# strip extra fluff
	/usr/bin/whois -h whois.internic.net $domain | sed '/NOTICE:/q'
}

function localip(){
	function _localip(){ echo "📶  "$(ipconfig getifaddr "$1"); }
	export -f _localip
	local purple="\x1B\[35m" reset="\x1B\[m"
	networksetup -listallhardwareports | \
		sed -r "s/Hardware Port: (.*)/${purple}\1${reset}/g" | \
		sed -r "s/Device: (en.*)$/_localip \1/e" | \
		sed -r "s/Ethernet Address:/📘 /g" | \
		sed -r "s/(VLAN Configurations)|==*//g"
}

# preview csv files. source: http://stackoverflow.com/questions/1875305/command-line-csv-viewer
function csvpreview(){
      sed 's/,,/, ,/g;s/,,/, ,/g' "$@" | column -s, -t | less -#2 -N -S
}

# Extract archives - use: extract <file>
# Based on http://dotfiles.org/~pseup/.bashrc
function extract() {
	if [ -f "$1" ] ; then
		local filename=$(basename "$1")
		local foldername="${filename%%.*}"
		local fullpath=`perl -e 'use Cwd "abs_path";print abs_path(shift)' "$1"`
		local didfolderexist=false
		if [ -d "$foldername" ]; then
			didfolderexist=true
			read -p "$foldername already exists, do you want to overwrite it? (y/n) " -n 1
			echo
			if [[ $REPLY =~ ^[Nn]$ ]]; then
				return
			fi
		fi
		mkdir -p "$foldername" && cd "$foldername"
		case $1 in
			*.tar.bz2) tar xjf "$fullpath" ;;
			*.tar.gz) tar xzf "$fullpath" ;;
			*.tar.xz) tar Jxvf "$fullpath" ;;
			*.tar.Z) tar xzf "$fullpath" ;;
			*.tar) tar xf "$fullpath" ;;
			*.taz) tar xzf "$fullpath" ;;
			*.tb2) tar xjf "$fullpath" ;;
			*.tbz) tar xjf "$fullpath" ;;
			*.tbz2) tar xjf "$fullpath" ;;
			*.tgz) tar xzf "$fullpath" ;;
			*.txz) tar Jxvf "$fullpath" ;;
			*.zip) unzip "$fullpath" ;;
			*) echo "'$1' cannot be extracted via extract()" && cd .. && ! $didfolderexist && rm -r "$foldername" ;;
		esac
	else
		echo "'$1' is not a valid file"
	fi
}

# who is using the laptop's iSight camera?
camerausedby() {
	echo "Checking to see who is using the iSight camera… 📷"
	usedby=$(lsof | grep -w "AppleCamera\|USBVDC\|iSight" | awk '{printf $2"\n"}' | xargs ps)
	echo -e "Recent camera uses:\n$usedby"
}


# animated gifs from any video
# from alex sexton   gist.github.com/SlexAxton/4989674
gifify() {
  if [[ -n "$1" ]]; then
	if [[ $2 == '--good' ]]; then
	  ffmpeg -i "$1" -r 10 -vcodec png out-static-%05d.png
	  time convert -verbose +dither -layers Optimize -resize 900x900\> out-static*.png  GIF:- | gifsicle --colors 128 --delay=5 --loop --optimize=3 --multifile - > "$1.gif"
	  rm -f out-static*.png
	else
	  ffmpeg -i "$1" -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > "$1.gif"
	fi
  else
	echo "proper usage: gifify <input_movie.mov>. You DO need to include extension."
  fi
}

# turn that video into webm.
# brew reinstall ffmpeg --with-libvpx
webmify(){
	ffmpeg -i "$1" -vcodec libvpx -acodec libvorbis -isync -copyts -aq 80 -threads 3 -qmax 30 -y "$2" "$1.webm"
}

# direct it all to /dev/null
function nullify() {
  "$@" >/dev/null 2>&1
}

# `shellswitch [bash |zsh]`
#   Must be in /etc/shells
shellswitch () {
	chsh -s $(brew --prefix)/bin/$1
}

###
# GIT STUFF

function clone() {
    git clone --depth=1 $1
    cd $(basename ${1%.*})
    yarn install
}
alias push="git push"

# Undo a `git push`
alias undopush="git push -f origin HEAD^:master"

# git root
alias gr='[ ! -z `git rev-parse --show-cdup` ] && cd `git rev-parse --show-cdup || pwd`'
alias master="git checkout main 2>/dev/null || git checkout master"

# Networking. IP address, dig, DNS
alias ip="dig +short myip.opendns.com @resolver1.opendns.com"
# alias dig="dig +nocmd any +multiline +noall +answer"
# wget sucks with certificates. Let's keep it simple.
alias wget="curl -O"

# Recursively delete `.DS_Store` files
alias cleanup_dsstore="find . -name '*.DS_Store' -type f -ls -delete"

alias diskspace_report="df -P -kHl"
alias free_diskspace_report="diskspace_report"

# Update installed Ruby gems, Homebrew, npm, and their installed packages
alias brew_update="brew -v update; brew upgrade --force-bottle --cleanup; brew cleanup; brew cask cleanup; brew prune; brew doctor; npm-check -g -u"
alias update_brew_npm_gem='brew_update; npm install npm -g; npm update -g; sudo gem update --system; sudo gem update --no-document'

# Shortcuts
alias g="git"
alias v="vim"
alias ungz="gunzip -k"

# File size
alias fs="stat -f \"%z bytes\""

# Empty the Trash on all mounted volumes and the main HDD. then clear the useless sleepimage
alias emptytrash=" \
    sudo rm -rfv /Volumes/*/.Trashes; \
    rm -rfv ~/.Trash/*; \
    sudo rm -v /private/var/vm/sleepimage; \
    rm -rv \"/Users/paulirish/Library/Application Support/stremio/Cache\";  \
    rm -rv \"/Users/paulirish/Library/Application Support/stremio/stremio-cache\" \
"

function colors {
  for code in {0..255}
    do echo -e "\e[38;5;${code}m"'\\e[38;5;'"$code"m"\e[0m"
  done
}
#------------------------------------------------------------------------------------------------
# 
# #!/usr/bin/env bash
# 
# for i in {0..12}; do
#   if ! (($i % 4)); then
#     printf "\e[1K\rloading"
#   else
#     printf "."
#   fi
#   sleep 1
# done && printf "\e[2K\r"


if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
