#!/usr/bin/env python3
#
# Archey [version 0.3.0]
#
# Archey is a simple system information tool written in Python.
#
# Copyright 2010 Melik Manukyan <melik@archlinux.us>
# Copyright 2010 David Vazgenovich Shakaryan <dvshakaryan@gmail.com>
#
# ASCII art by Brett Bohnenkamper <kittykatt@silverirc.com>
# Changes Jerome Launay <jerome@projet-libre.org>
# Fedora support by YeOK <yeok@henpen.org>
#
# Distributed under the terms of the GNU General Public License v3.
# See http://www.gnu.org/licenses/gpl.txt for the full license text.

# Import libraries

import os, sys, subprocess, optparse, re, linecache
from subprocess import Popen, PIPE
from optparse import OptionParser
from getpass import getuser
from time import ctime, sleep

# ---------------Output---------------#

output = [
    "User",
    "Hostname",
    "Distro",
    "Kernel",
    "Uptime",
    "WindowManager",
    "DesktopEnvironment",
    "Shell",
    "Terminal",
    "Packages",
    "CPU",
    "RAM",
    "Disk",
]

# ---------------Dictionaries---------------#

colorDict = {
    "Arch Linux": ["\x1b[0;34m", "\x1b[1;34m"],
    "Ubuntu": ["\x1b[0;31m", "\x1b[1;31m", "\x1b[0;33m"],
    "Debian": ["\x1b[0;31m", "\x1b[1;31m"],
    "Mint": ["\x1b[0;32m", "\x1b[1;37m"],
    "Crunchbang": ["\x1b[1;37m"],
    "Fedora": ["\x1b[0;34m", "\x1b[1;37m"],
    "Sensors": ["\x1b[0;31m", "\x1b[0;32m", "\x1b[0;33m"],
    "Clear": ["\x1b[0m"],
}

deDict = {
    "cinnamon-sessio": "Cinnamon",
    "gnome-session": "GNOME",
    "mate-session": "MATE",
    "ksmserver": "KDE",
    "xfce4-session": "Xfce",
    "lxsession": "LXDE",
}

wmDict = {
    "awesome": "Awesome",
    "beryl": "Beryl",
    "blackbox": "Blackbox",
    "compiz": "Compiz",
    "dwm": "DWM",
    "enlightenment": "Enlightenment",
    "herbstluftwm": "herbstluftwm",
    "fluxbox": "Fluxbox",
    "fvwm": "FVWM",
    "i3": "i3",
    "icewm": "IceWM",
    "kwin": "KWin",
    "metacity": "Metacity",
    "musca": "Musca",
    "nemo": "Nemo",
    "openbox": "Openbox",
    "pekwm": "PekWM",
    "ratpoison": "ratpoison",
    "scrotwm": "ScrotWM",
    "wmaker": "Window Maker",
    "wmfs": "Wmfs",
    "wmii": "wmii",
    "xfwm4": "Xfwm",
    "xmonad": "xmonad",
}

logosDict = {
    "Arch Linux": """{color[1]}
{color[1]}               +                {results[0]}
{color[1]}               #                {results[1]}
{color[1]}              ###               {results[2]}
{color[1]}             #####              {results[3]}
{color[1]}             ######             {results[4]}
{color[1]}            ; #####;            {results[5]}
{color[1]}           +##.#####            {results[6]}
{color[1]}          +##########           {results[7]}
{color[1]}         ######{color[0]}#####{color[1]}##;         {results[8]}
{color[1]}        ###{color[0]}############{color[1]}+        {results[9]}
{color[1]}       #{color[0]}######   #######        {results[10]}
{color[0]}     .######;     ;###;`\".      {results[11]}
{color[0]}    .#######;     ;#####.       {results[12]}
{color[0]}    #########.   .########`     {results[13]}
{color[0]}   ######'           '######    {results[14]}
{color[0]}  ;####                 ####;   {results[15]}
{color[0]}  ##'                     '##   {results[16]} 
{color[0]} #'                         `#  {results[17]}
\x1b[0m"""
}

processes = (
    str(
        subprocess.check_output(("ps", "-u", getuser(), "-o", "comm", "--no-headers")),
        encoding="utf8",
    )
    .rstrip("\n")
    .split("\n")
)

# ---------------Classes---------------#


class Output:
    results = []
    results.extend([""] * (18 - len(output)))

    def __init__(self):
        self.distro = self.__detectDistro()

    def __detectDistro(self):
        if os.path.exists("/etc/pacman.conf"):
            return "Arch Linux"
        else:
            sys.exit(1)

    def append(self, display):
        self.results.append(
            "%s%s: %s%s"
            % (
                colorDict[self.distro][1],
                display.key,
                colorDict["Clear"][0],
                display.value,
            )
        )

    def output(self):
        print(
            logosDict[self.distro].format(
                color=colorDict[self.distro], results=self.results
            )
        )


class User:
    def __init__(self):
        self.key = "User"
        self.value = os.getenv("USER")


class Hostname:
    def __init__(self):
        hostname = (
            Popen(["uname", "-n"], stdout=PIPE)
            .communicate()[0]
            .decode("Utf-8")
            .rstrip("\n")
        )
        self.key = "Hostname"
        self.value = hostname


class Distro:
    def __init__(self):
        if os.path.exists("/etc/pacman.conf"):
            distro = "Arch Linux"
        self.key = "Distro"
        self.value = distro


class Kernel:
    def __init__(self):
        kernel = (
            Popen(["uname", "-r"], stdout=PIPE)
            .communicate()[0]
            .decode("Utf-8")
            .rstrip("\n")
        )
        self.key = "Kernel"
        self.value = kernel


class Uptime:
    def __init__(self):
        fuptime = int(open("/proc/uptime").read().split(".")[0])
        day = int(fuptime / 86400)
        fuptime = fuptime % 86400
        hour = int(fuptime / 3600)
        fuptime = fuptime % 3600
        minute = int(fuptime / 60)
        uptime = ""
        if day == 1:
            uptime += "%d day, " % day
        if day > 1:
            uptime += "%d days, " % day
        uptime += "%d:%02d" % (hour, minute)
        self.key = "Uptime"
        self.value = uptime


class WindowManager:
    def __init__(self):
        wm = ""
        for key in wmDict.keys():
            if key in processes:
                wm = wmDict[key]
                break

        self.key = "Window Manager"
        self.value = wm


class DesktopEnvironment:
    def __init__(self):
        de = ""
        for key in deDict.keys():
            if key in processes:
                de = deDict[key]
                break

        self.key = "Desktop Environment"
        self.value = de


class Shell:
    def __init__(self):
        self.key = "Shell"
        self.value = os.getenv("SHELL")


class Terminal:
    def __init__(self):
        self.key = "Terminal"
        self.value = os.getenv("TERM")


class Packages:
    def __init__(self):
        p1 = Popen(["pacman", "-Q"], stdout=PIPE).communicate()[0].decode("Utf-8")
        packages = len(p1.rstrip("\n").split("\n"))
        self.key = "Packages"
        self.value = packages


class CPU:
    def __init__(self):
        file = open("/proc/cpuinfo").readlines()
        cpuinfo = re.sub("  +", " ", file[4].replace("model name\t: ", "").rstrip("\n"))
        self.key = "CPU"
        self.value = cpuinfo


class RAM:
    def __init__(self):
        raminfo = (
            Popen(["free", "-m"], stdout=PIPE)
            .communicate()[0]
            .decode("Utf-8")
            .split("\n")
        )
        ram = "".join(filter(re.compile("M").search, raminfo)).split()
        used = int(ram[1]) - int(ram[5]) - int(ram[6])
        usedpercent = (float(used) / float(ram[1])) * 100
        if usedpercent <= 33:
            ramdisplay = "%s%s MB %s/ %s MB" % (
                colorDict["Sensors"][1],
                used,
                colorDict["Clear"][0],
                ram[1],
            )
        if usedpercent > 33 and usedpercent < 67:
            ramdisplay = "%s%s MB %s/ %s MB" % (
                colorDict["Sensors"][2],
                used,
                colorDict["Clear"][0],
                ram[1],
            )
        if usedpercent >= 67:
            ramdisplay = "%s%s MB %s/ %s MB" % (
                colorDict["Sensors"][0],
                used,
                colorDict["Clear"][0],
                ram[1],
            )
        self.key = "RAM"
        self.value = ramdisplay


class Disk:
    def __init__(self):
        p1 = (
            Popen(
                [
                    "df",
                    "-Tlh",
                    "--total",
                    "-t",
                    "ext4",
                    "-t",
                    "ext3",
                    "-t",
                    "ext2",
                    "-t",
                    "reiserfs",
                    "-t",
                    "jfs",
                    "-t",
                    "ntfs",
                    "-t",
                    "fat32",
                    "-t",
                    "btrfs",
                    "-t",
                    "fuseblk",
                    "-t",
                    "xfs",
                ],
                stdout=PIPE,
            )
            .communicate()[0]
            .decode("Utf-8")
        )
        total = p1.splitlines()[-1]
        used = total.split()[3]
        size = total.split()[2]
        usedpercent = float(total.split()[5][:-1])

        if usedpercent <= 33:
            disk = "%s%s %s/ %s" % (
                colorDict["Sensors"][1],
                used,
                colorDict["Clear"][0],
                size,
            )
        if usedpercent > 33 and usedpercent < 67:
            disk = "%s%s %s/ %s" % (
                colorDict["Sensors"][2],
                used,
                colorDict["Clear"][0],
                size,
            )
        if usedpercent >= 67:
            disk = "%s%s %s/ %s" % (
                colorDict["Sensors"][0],
                used,
                colorDict["Clear"][0],
                size,
            )
        self.key = "Disk"
        self.value = disk


classes = {
    "User": User,
    "Hostname": Hostname,
    "Distro": Distro,
    "Kernel": Kernel,
    "Uptime": Uptime,
    "WindowManager": WindowManager,
    "DesktopEnvironment": DesktopEnvironment,
    "Shell": Shell,
    "Terminal": Terminal,
    "Packages": Packages,
    "CPU": CPU,
    "RAM": RAM,
    "Disk": Disk,
}

out = Output()
for x in output:
    out.append(classes[x]())
out.output()
