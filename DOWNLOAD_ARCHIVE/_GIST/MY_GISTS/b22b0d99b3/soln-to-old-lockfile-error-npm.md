First, try entering this: `sudo dpkg --configure -a`

This will go a long way toward fixing broken dependencies. If that does not suffice, try: `sudo apt-get install -f`

Then clean and update: `sudo apt-get clean && sudo apt-get update`

Then upgrade: `sudo apt-get upgrade` (say 'y' to upgrades)

If you get a message saying some packages are "held back", do this:

`sudo apt-get dist-upgrade`

Now do these two commands:

```
sudo apt-get purge zlib1g-dev
sudo apt-get autoremove

```

Then see what happens when you enter: `sudo apt-get install libssl-dev`

If it still doesn't work, try this:

```
sudo aptitude install libssl-dev zliblg-dev=1:1.2.8.dfsg-1ubuntu1

```

If it still doesn't work, open up **Synaptic Package Manager** (It should be in your Launcher. If you can't find it, then at the Terminal enter `synaptic-pkexec`).

Search for `zlib1g-dev`. If the box next to zlib1g-dev is not green, click on it and select "Mark for installation". If you see more than one version, pick `1:1.2.8.dfsg-1ubuntu1` . Then search for `libssl-dev`. If the box next to libssl-dev is not green, click on it and select "Mark for installation".

Then select "Apply".
