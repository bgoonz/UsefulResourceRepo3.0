find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
echo "</body></html>" | tee -a *.html
sudo sed -i '/appacademy/d' ./bookmarks.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
#!/bin/sh
find ./ | grep -i "\.js*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">'   echo ' <link rel="stylesheet" href="./toc.css">';   echo ' <script async defer src="./toc.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
find ./ | grep -i "\.js*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">'   echo ' <link rel="stylesheet" href="./toc.css">';   echo ' <script async defer src="./toc.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">'   echo ' <link rel="stylesheet" href="./toc.css">';   echo ' <script async defer src="./toc.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/images/d' ./index.html
sudo sed -i '/font/d' ./index.html
sudo sed -i '/fonts/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/\.php/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
git add .
echo "</body></html>" | tee -a *.html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
#!/bin/sh
find ./ | grep -i "\.js*$" >files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">'   echo ' <link rel="stylesheet" href="./toc.css">';   echo ' <script async defer src="./toc.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing >>$html
cd ..
cd ..
cd ..
;;
ll
ll
ls 
cd c
ll
ls
cd 0-a-A-October/
cd 00-weeks
ls
cd ..
ls
cd 00-weeks-container/
ll
ls
cd 00-weeks
ls
git init
git add .
git add .
git commit -m "update"
git push 
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/images/d' ./index.html
sudo sed -i '/font/d' ./index.html
sudo sed -i '/fonts/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.php/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.sh/d' ./index.html
sudo sed -i '/\.yml/d' ./index.html
sudo sed -i '/\.py/d' ./index.html
sudo sed -i '/\.html/!d' ./index.html
git commit -m "initial commit"
git add .
git commit -m "autotoc"
git push 
git push -u origin master
cd ..
cd MY-WEB-DEV
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
cd ..
cd home
cd bryan
code .
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
quick-install.bash Windows
./quick-install.bash
docker run -e SHELLCHECK_OPTS="-e SC1091 -e SC1090" -v "$PWD:/mnt" koalaman/shellcheck <Path_To_File>
docker run -e SHELLCHECK_OPTS="-e SC1091 -e SC1090" -v "$PWD:/mnt" koalaman/shellcheck ./README.md
sudo apt install docker.io
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
npm install pandoc
dockerd
su
ll
sudo rm -rf awscliv2.zip
ll
bash get-docker.sh
ll
code .
docker pull amazon/aws-lambda-nodejs
sudo apt install docker.io
docker pull amazon/aws-lambda-nodejs
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
psql -p 5432 -h localhost -U postgres
cd ..
sudo vi postgresql.conf
sudo vi pg_hba.conf
sudo /etc/init.d/postgresql restart
docker push bgoonz/norwex:tag1
sudo service postgresql stop
Summer2015
sudo service postgresql stop
sudo service postgresql start
sudo service postgresql restart
docker run -d -p 80:80 docker/getting-started
sudo systemctl start docker
docker run -t -i ubuntu:20.04 /bin/bash
cd ..
/etc/init.d/dbus start
sudo /etc/init.d/dbus start
docker push bgoonz/norwex:tag1
docker run -t -i ubuntu:20.04 /bin/bash
/etc/init.d/dbus start
docker run -t -i ubuntu:20.04 /bin/bash
sudo service postgresql stop
sudo service postgresql restart
docker run -ti -d --privileged=true images_docker  "/sbin/init"
docker run -ti -d --privileged=true images_docker
# service --status-all
root       192     1  0 Feb20 ?        00:00:10 /usr/lib/systemd/systemd-journald
root       205     1  0 Feb20 ?        00:00:00 /usr/lib/systemd/systemd-udevd
dbus       327     1  0 Feb20 ?        00:00:01 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
root       329     1  0 Feb20 ?        00:00:00 /usr/lib/systemd/systemd-logind
auser    13108     1  0 09:28 ?        00:00:00 /usr/lib/systemd/systemd --user
auser    16359 14228  0 13:27 pts/0    00:00:00 grep systemd
apt remove --purge containerd.io docker-ce docker-ce-cli
wget https://download.docker.com/linux/debian/dists/stretch/pool/stable/amd64/docker-ce_18.06.1~ce~3-0~debian_amd64.deb
dpkg -i docker-ce_18.06.1~ce~3-0~debian_amd64.deb
su
ll
rm-rf docker-ce_18.06.1~ce~3-0~debian_amd64.deb
sudo rm-rf docker-ce_18.06.1~ce~3-0~debian_amd64.deb
pip install -U getgist

ll
sudo apt-get install postgresql
psql
sudo -u postgres psql
ll
git init
git add .
sudo git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/web-dev-enviornment-setup-validator.git
sudo git remote add origin https://github.com/bgoonz/web-dev-enviornment-setup-validator.git
sudo git push -u origin master
git init
git add .
git commit -m "initial commit"
git push 
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
git init
git add .
git commit -m "initial commit"
git push -u origin master
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
git init
sudo 
sudo git init
git add .
git remote add origin https://github.com/bgoonz/Markdown-Html-Converter.git
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
node append.js
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
node append.js
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
sudo git init
git add .
git init
git add .
sudo git push -u origin master
git init
git add .
git commit -m :3rd commit"
git commit -m "please work "
httrack https://mobirise.com/extensions/shopamp/clothingstore.html
https://mobirise.com/extensions/educationm4/university.html
httrack https://mobirise.com/extensions/educationm4/university.html
httrack https://mobirise.com/extensions/organicamp/features.html
httrack https://mobirise.com/extensions/personam4/craftshop.html
httrack https://mobirise.com/extensions/industrym4/industry.html
httrack https://mobirise.com/extensions/modernm4/spa_oasis/
httrack https://mobirise.com/extensions/modernm4/tabs.html#
httrack https://mobirise.com/extensions/industrym4/industry.html
httrack https://mobirise.com/extensions/interioramp/lightingdemo.html
httrack https://mobirise.com/extensions/commercem4/pricing-tables.html
httrack https://mobirise.com/extensions/commercem4/sliders-galleries.html
httrack https://mobirise.com/extensions/businessm4/menu2.html
httrack https://mobirise.com/extensions/commercem4/headphones/
httrack https://mobirise.com/extensions/storem4/footers.html
httrackhttps://mobirise.com/extensions/educationm4/university.html
httrack https://mobirise.com/extensions/educationm4/university.html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
httrack https://mobirise.com/extensions/storem4/
httrack https://mobirise.com/extensions/educationm4/university.html
sudo snap install doctl
udo snap connect doctl:kube-config
sudo snap connect doctl:kube-config
ll
mkdir misccccccccccccccccccccccccccccccccccccccccc
cd  misccccccccccccccccccccccccccccccccccccccccc
git clone https://github.com/realm/RChat.git
cd RChat/RChat-Realm/RChat
realm-cli login --api-key <your new public key> --private-api-key <your new private key>
realm-cli import # Then answer prompts, naming the app "RChat"
r
sudo -u postgres psql
sudo npm install nativefier -g
nativefire -help
apt install hugo
sudo apt install hugo
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
httrack https://p5js.org/reference/
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
curl https://raw.githubusercontent.com/ajenti/ajenti/master/scripts/install.sh | sudo bash -s -
sudo apt install jshint
cd "c:\MY-WEB-DEV\08-my-website\_Outer-STABLE\Stable\public\2-content"
git commit -m "please please please"
sudo service postgresql stop
sudo service postgresql start
sudo service postgresql restart
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
sudo -u postgres psql
rm -rf right.html
find . -empty -type f -print -delete
find . -empty -type d -print -delete
ll
cd ..
ll
cd mnt
cd c
cd MY-WEB-DEV/
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
sudo apt update
sudo apt upgrade
npm install
find . -empty -type f -print -delete
find . -empty -type d -print -delete
git init
git add .
git commit -m "added algo practice"
git push 
sudo apt install tree
tree -d L 4
sudo tree -d L 4 >out.md
sudo tree -d l4 >out.md
tree
c
tree -d
tree -d >out.md
git add .
git commit -m "updated readme"
git push 
git add .
git commit -m "readme"
git push 
git init
git add .
git commit -m "update"
git push 
git add .
git init
cd ..
ll
cd home
cd ..
ll
cd ll
cd home
cd bryan 
ll
ln -s ../../ment/c
ll
cd c
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
rename 's/\.js\.download$/.js/' *.js\.download  
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/Live-htmlRendered-Mocha-Spec--Recursion-Practice.git
git push -u origin master
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              code
code .
code-insiders.exe .
Remote-WSL: New Window
~/code/js$ code .
[main 2019-06-14T05:34:33.398Z] update#setState idle
[main 2019-06-14T05:35:03.409Z] update#setState checking for updates
[main 2019-06-14T05:35:03.451Z] update#setState idle
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
cd ~ && mkdir vscodetest && cd vscodetest && touch ./hello.txt
"/mnt/c/Users/there/AppData/Local/Programs/Microsoft VS Code/bin/code" -n .
WSL_EXT_WLOC=$(ELECTRON_RUN_AS_NODE=1 "$ELECTRON" ".\resources\app\out\cli.js" --locate-extension $WSL_EXT_ID)  
WSL_EXT_WLOC=$(ELECTRON_RUN_AS_NODE=1 "$ELECTRON" "$CLI" --locate-extension $WSL_EXT_ID)  
/mnt/c/Users/martinae/AppData/Roaming/nvm/v10.11.0/node.exe" -e "console.log('hello')
"/mnt/c/Users/martinae/AppData/Roaming/nvm/v10.11.0/node.exe" -e "console.log('hello')"
foo=$("/mnt/c/Users/martinae/AppData/Roaming/nvm/v10.11.0/node.exe" -e "console.log('hello')")
Code - Insiders.exe .
sudo apt install node
[automount]
crossDistro = true
code .
code .
explorer.exe .
ll
su
code .
code 
code .
ll
sudo aput update
sudo apt upgrade
ll
#!/usr/bin/env sh
#
# Copyright (c) Microsoft Corporation. All rights reserved.
#
case "$1" in
ll
code .
code .
ifconfig
sudo nano /etc/network/interfaces
ll
cd .vscode-server
ll
cd bin
ll
cd ..
node thegist2ruledemall.js 
chmod u+x gist-clone-all
chmod u+x thegist2ruledemall.js
thegist2ruledemall bgoonz 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
thegist2ruledemall.js bgoonz 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
node thegist2ruledemall.js
gpg: signing failed: No pinentry
sudo apt install gpg2
git clone https://dev.gnupg.org/source/gnupg.git
./thegist2ruledemall
./thegist2ruledemall.js
sudo ./thegist2ruledemall.js
get-content -path public.key
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
brew install gcc
brew install gnupg pinentry-mac
mkdir -p "$HOME/.gnupg"
chmod 700 "$HOME/.gnupg"
echo "no-greeting" >> "$HOME/.gnupg/gpg.conf"
echo "use-agent" >> "$HOME/.gnupg/gpg.conf"
echo "use-standard-socket" >> "$HOME/.gnupg/gpg-agent.conf"
echo "pinentry-program /usr/local/bin/pinentry-mac" >> "$HOME/.gnupg/gpg-agent.conf"
echo "use-standard-socket" >> "$HOME/.gnupg/gpg-agent.conf"
echo "pinentry-program /usr/local/bin/pinentry-mac" >> "$HOME/.gnupg/gpg-agent.conf"gpg --gen-key
gpg --gen-key
which pinentry-mac
git config --global user.signingkey D3E309F261053FF1
git config --global user.signingkey D3E309F261053FF1 --replace-all
git config --global commit.gpgsign true
mkdir ~/test
cd ~/test
git init
echo "test" >> test
git add test
git commit -m "test"
git log --show-signature
git config --global gpg.program gpg2
echo "test" | gpg2 --clearsign
sudo apt install gnupg2
echo "test" | gpg2 --clearsign
python3 get-gists.py bgoonz
ll
cd _CONTAINER/
python3 get-gists.py bgoonz
Traceback (most recent call last):brew install gist
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
ls
python3 get-gists.py bgoonz
git clone https://dev.gnupg.org/source/gnupg.git
gpg --full-generate-key
git config --global commit.gpgsign true
gpg --full-generate-key
gpg --list-secret-keys --keyid-format LONGgpg --list-secret-keys --keyid-format LONG
gpg --list-secret-keys --keyid-format LONG
gpg --armor --export 6D9FA68D68E977E5
gpg --gen-revoke 6D9FA68D68E977E5
git config --global user.signingkey 6D9FA68D68E977E5
git config --global commit.gpgsign true
git config --global gpg.program "C:/Users/bryan/AppData/Local/Programs/'Microsoft VS Code'"
git config --global gpg.program "/c/Program Files/Git/usr/bin/gpg.exe"
git clone https://dev.gnupg.org/source/gnupg.git
git clone git://git.gnupg.org/gnupg.git
git clone https://dev.gnupg.org/source/gnupg.git
ls
rm -rd gnupg
git clone https://dev.gnupg.org/source/gnupg.git
git clone git://git.gnupg.org/gnupg.git
rmdir gnupg
l
rmdir gnupg
rmdir -d gnupg
rmdir gnupg -f
code .
git clone https://dev.gnupg.org/source/gnupg.git
git clone git://git.gnupg.org/gnupg.git
ll
rm -rf gnupg
ll
rm -rf bryan-g
git clone https://dev.gnupg.org/source/gnupg.git
git clone git://git.gnupg.org/gnupg.git
cd gnupg/
./autogen.sh
ll
find . -name "* *" -type f | rename 's/ /_/g'
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -size +98M -a -print -a -exec rm -f {} \;
ll
ls
gpg --send-keys 6D9FA68D68E977E5
git config --global user.signingkey
git config --global commit.gpgsign true
git config commit.gpgsign true
git commit -a -S -m 'did some stuff'
sudo snap remove vscode
sudo apt-get purge code
cd ~ && rm -rf .vscode && rm -rf .config/Code
ll
code .
python3 get-gists.py bgoonz
python3 gist.py bgoonz
python3 get-gists.py bgoonz
python3 get-gists.py bgoonz
sudo apt install pyhton3.8
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
gpg --version
git commit -a -S -m 'did some stuff'
wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
sudo apt update
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt install python3.8
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
pip install Pillow
py -m ensurepip --default-pip
python -m pip install --upgrade pip setuptools wheel
sudo apt install python3
sudo apt install python
sudo apt update
sudo apt upgradepip3 install requests
sudo apt upgrade
pip33 install requests
sudo apt install pi
pip3 install requests
pip3 install requestspywin32
npm install -g 7zip   # global
npm install 7zip -g
npm i 7zip -g
npm install
npm outdated
npm update
npm config rm proxy
npm config rm https-proxy --tried removing npm proxy
npm ERR! code EAI_AGAIN
npm ERR! syscall getaddrinfo
npm ERR! errno EAI_AGAIN
npx npm-check-updates -u
npm config get proxy
sudo vi /etc/hosts
nvm install latest
node -v
nvm ls-remote
nvm install –lts
nvm ls-remote
nvm install latest
export NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist
nvm install latest
curl: (77) error setting certificate verify locations:
export CURL_CA_BUNDLE=/etc/ssl/certs/ca-certificates.crt
code .
sudo apt-get update -y
#ENABLE LINUX SUBSYTEM IN CONTROL PANEL
#INSTALL WSL2
#INSTALL PREFFERED LINUX DISTRO
#INSTALLING DOCKER ON SUBSYSTEM
#https://dzone.com/articles/wsl2-for-dockerized-net-core-application-subhankar
#Setup WSL2 (Enable Hyper-V)
#Fire up your PowerShell(Administrative mode) and run the below commands.  
#This will enable the virtualization feature which will be used by WSL2
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
#Next you have to find out your Installed Linux Distribution, so that you can set that distribution to work as WSL version 2.
wsl -l -v
#convert your current Linux Distribution to WSL version 2
wsl --set-version Ubuntu 2
#Finally, if you want to use your WSL2 as the default version then execute the command below.
wsl --set-default-version 2
# Update the apt package list.
sudo apt-get update -y
# Install Docker's package dependencies.
sudo apt-get install -y     apt-transport-https     ca-certificates     curl     software-properties-common
# Download and add Docker's official public PGP key.
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# Verify the fingerprint.
sudo apt-key fingerprint 0EBFCD88
# Add the `stable` channel's Docker upstream repository.
#
# If you want to live on the edge, you can change "stable" below to "test" or
# "nightly". I highly recommend sticking with stable!
sudo add-apt-repository    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
# Update the apt package list (for the new apt repo).
sudo apt-get update -y
# Install the latest version of Docker CE.
sudo apt-get install -y docker-ce
# Allow your user to access the Docker CLI without needing root access.
sudo usermod -aG docker $USER
#START DOCKER DAEMON
sudo service docker start
sudo service docker status
#VERIFY
sudo docker info (or docker ps)
explorer.exe .
du -sh /var/cache/apt/archives
sudo du -sh /var/cache/apt/archives
sudo sudo apt-get clean
sudo apt-get autoremove --purge
sudo apt-get autoremove
npx npm-check-updates -u
npm ERR! code EAI_AGAIN
npm ERR! syscall getaddrinfo
npm ERR! errno EAI_AGAIN
npx npm-check-updates -u
ll
npm install -g 7zip   # global
ll
sudo apt update
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null
sudo apt-get update
echo "nameserver 8.8.8.8" | sudo tee /etc/resolvconf/resolv.conf.d/base > /dev/null
echo "nameserver 208.67.222.222" | sudo tee /etc/resolvconf/resolv.conf.d/base > /dev/null
sudo nano /etc/apt/sources.list
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
. ./.bashrc
nvm install --lts
sudo apt install unzip
npm install -g mocha
npm audit fix -F
npm audit fix -f
npm install -g mocha
sudo apt update
sudo apt upgrade
sudo apt install python3
ll
