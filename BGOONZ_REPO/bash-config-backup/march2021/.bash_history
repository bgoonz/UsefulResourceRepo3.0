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
ll
code .
sudo  npm cache clean --force
npm install -g npm
ll
code .
sudo vi /usr/lib/x86_64-linux-gnu/libxcb.so.1.1.0
vim -r /usr/lib/x86_64-linux-gnu/libxcb.so.1.1.0
sudo apt install neovim
vim -r /usr/lib/x86_64-linux-gnu/libxcb.so.1.1.0
httrack https://wiki.nikitavoloboev.xyz/
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
cd ..
ll
cd mnt
cd c
cd ..
ll
ln -s ./mnt/c/MY-WEB-DEV
sudo ln -s ./mnt/c/MY-WEB-DEV
cd MY-WEB-DEV
ll
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
npm install
npm run test
npm run build
npm run start
npm run build
npm run deploy
npm run build
hyper i hyper-search
powershell
mkdir -p ~/bin && cd ~/bin && git clone https://github.com/Konfekt/wsl-gui-bins
[ -z ${WSLENV+x} ] || export PATH="${PATH:+"$PATH:"}$HOME/bin/wsl-gui-bins"
o .
ProgramFiles="$(wslpath "$(cmd.exe /c "<nul set /p=%ProgramFiles%" 2>/dev/null)")"
mkdir -p ~/bin && cd ~/bin && git clone https://github.com/therealkenc/EnumWSL.git
enum
sudo apt install enum
enum
enum -b LEFT STEP RIGHT
enum -b 
npm install
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
html="index1.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<iframe height="800px" width="100%" src=\""$1"\" scrolling="yes" frameborder="yes"
        allowtransparency="true" allowfullscreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
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
sudo sed -i '/\.html/!d' ./index.html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
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
sudo sed -i '/right\.html/d' ./index.html
git init 
git init
git add .
git commit -m "deploy"
git push 
git add .
git commit -m "deploy"
git push 
git add .
git commit -m "deploy"
git push 
git add .
git commit -m "deploy"
git push 
git init
git add .
node create-dir-arr.js
npm install
npm test
node index.js
node create-dir-arr.js
npm install --global javascripting
javascripting
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
git init
git add .
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
   for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
find . -name 'node_modules' -type d -print -prune -exec rm -rf '{}' +
function RecurseDirs {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do          for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
function RecurseDirs {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do          for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
chmod a+x rename.sh
find ./ -type d -exec ./rename.sh \{\} \;
#!/bin/bash
RUN_SCRIPT=$1
recurseCheck() {     local f;     for f in $1/* ; do         if [ -d "$f" ]; then             (             cd "$f" || break;             RESULT=$(eval "$RUN_SCRIPT");             local RESULT_CODE=$?;             if [ $RESULT_CODE -eq 0 ]; then                 echo "$f";                 echo "$RESULT";                 echo;             else                 recurseCheck "$f";             fi;             );         fi;     done; }
START_DIR=$(pwd)
recurseCheck "$START_DIR"
#!/bin/bash
RUN_SCRIPT= for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done
recurseCheck() {     local f;     for f in $1/* ; do         if [ -d "$f" ]; then             (             cd "$f" || break;             RESULT=$(eval "$RUN_SCRIPT");             local RESULT_CODE=$?;             if [ $RESULT_CODE -eq 0 ]; then                 echo "$f";                 echo "$RESULT";                 echo;             else                 recurseCheck "$f";             fi;             );         fi;     done; }
START_DIR=$(pwd)
recurseCheck "$START_DIR"
#!/bin/bash
RUN_SCRIPT=$1
recurseCheck() {     local f;     for f in $1/* ; do         if [ -d "$f" ]; then             (             cd "$f" || break;             RESULT=$(eval "$RUN_SCRIPT");             local RESULT_CODE=$?;             if [ $RESULT_CODE -eq 0 ]; then                 echo "$f";                 echo "$RESULT";                 echo;                  for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done;             else                 recurseCheck "$f";             fi;             );         fi;     done; }
START_DIR=$(pwd)
recurseCheck "$START_DIR"
#!/bin/bash
RUN_SCRIPT=$1
recurseCheck() {     local f;     for f in $1/* ; do         if [ -d "$f" ]; then             (             cd "$f" || break;             RESULT=$(eval "$RUN_SCRIPT");             local RESULT_CODE=$?;             if [ $RESULT_CODE -eq 0 ]; then                 echo "$f";                 echo "$RESULT";                 echo;                  for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done;             else                 recurseCheck "$f";             fi;             );         fi;     done; }
START_DIR=$(pwd)
recurseCheck "$START_DIR"
#!/bin/bash
RUN_SCRIPT=$1
recurseCheck() {     local f;     for f in $1/* ; do         if [ -d "$f" ]; then             (             cd "$f" || break;             RESULT=$(eval "$RUN_SCRIPT");             local RESULT_CODE=$?;             if [ $RESULT_CODE -eq 0 ]; then                 echo "$f";                 echo "$RESULT";                 echo;                  for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done;             else                 recurseCheck "$f";             fi;             );         fi;     done; }
START_DIR=$(pwd)
recurseCheck "$START_DIR"
recurseCheck "./"
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do          for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
node create.js
node test.js
node create.js
find -name "* *" -type f | rename 's/ /_/g'
find /tmp/ -depth -name "* *" -execdir rename 's/ /_/g' "{}" \;
find . -depth -name '* *' | while IFS= read -r f ; do mv -i "$f" "$(dirname "$f")/$(basename "$f"|tr ' ' _)" ; done
find . -depth -name '* *' | while IFS= read -r f ; do mv -i "$f" "$(dirname "$f")/$(basename "$f"|tr ' ' _)" ; done
for f in *\ *; do mv "$f" "${f// /_}"; done
for f in ./; do mv "$f" "${f// /_}"; done
#!/bin/bash
( IFS=$'\n'; for y in $(ls $1); do mv $1/`echo $y | sed 's/ /\\ /g'` $1/`echo "$y" | sed 's/ /_/g'`; done; )
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li> <iframe height="800px" width="100%" src=\""$1"\" scrolling="yes" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>' echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>""&nbsp;<iframe height="800px" width="100%" src=\""$1"\" scrolling="yes" frameborder="yes" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
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
npm init
npm install algorithmpool --save
new nest test
sudo apt install mmh
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get install oracle-java8-installer
sudo apt-get update
sudo apt upgrade
sudo apt-get install 7zip unrar zip unzip
sudo apt-get install filezilla
npm init -y
npm install pg
npm i -g @nestjs/cli
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
   for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;
find . -name "*.zip" -type f -print -delete
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name 'node_modules' -type d -print -prune -exec rm -rf '{}' +
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
find . -type f -exec sed -n -e '/<code class="sourceCode javascript">/,/<\/code>/p' *.html >out.html ./* {} \;
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;
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
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
find . -empty -type f -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name "*.zip" -type f -print -delete
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
find . -type f -exec sed -n -e '/```javascript/,/```/p' *.html >out.js ./* {} \;
npm install -g express-generator
git init
git add .
git commit -m "this is a big file"
git remote add origin https://github.com/bgoonz/mega-snippet-compilation.git
git push -u origin master
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
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
git remote add origin https://github.com/bgoonz/Cheat-Sheets.git
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git init
git remote origin add https://github.com/bgoonz/Cheat-Sheets.git
git remote add origin https://github.com/bgoonz/Cheat-Sheets.git
git add .
git init
git add .
git init
git add .
git commit -m "big one"
git push -u origin master
git pull
git remote add origin https://github.com/bgoonz/Cheat-Sheets.git
git pull
git pull -branch master
git checkout master
git push -u origin master
git push -u origin master -f
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   
   for file in *; do mv "$file" `echo $file | tr ' ' '_'` ; done              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
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
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do    find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \; for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done; echo "</body></html>" | tee -a *.html              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
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
git remote add origin https://github.com/bgoonz/web-dev-notes-resource-site.git
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
git init
git add .
git commit -m "tidying up"
git push 
git pull
git remote remove origin
git remote add origin https://github.com/bgoonz/web-dev-resource-hub.git
git push -u origin master
find . -size +75M -a -print -a -exec rm -f {} \;
git init
git add .
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do    find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \; for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done; echo "</body></html>" | tee -a *.html              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
find . -name '*.md' | cpio -pdm './../Markdown'
find . -type f -name '*.md' | cpio -p -d -v './..'
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git init 
git add .
git commit -m "added extra practice"
git push 
npm install bit-bin -g
npm install
git pull https://github.com/bgoonz/udemy-react-translator.git
git clone https://github.com/bgoonz/udemy-react-translator.git
git init
git remote add origin https://github.com/bgoonz/udemy-react-translator.git
git pull
git pull -f
git add .
git commit -m "initial commit"
git push -u origin master
git pull
git add .
git commit -m "pull"
git push 
git pull
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
cd ..
ll
cd ..
sudo find /./-type d -user root -exec sudo chown -R $USER: {} +~
sudo find /./-type d -user root -exec sudo chown -R $bryan: {} +~
sudo chown -R bryan ./
ll
cd ..
git init
git add .
git commit -m "new home"
git status 
git init
git remote add origin https://github.com/bgoonz/web-dev-resource-hub.git
make git m="your message"
git add .
git hash-object -w Collection/0-assets/Checkout-Later/JavaScript-Simplified-Advanced-Projects-main/JavaScript-Simplified-Advanced-Projects-main/calculator/after/Calculator.js
make git m="trying out a makefile"
npm install bit-bin -g
function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do    find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \; for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" href="./prism.css">
<script async defer src="./prism.js"></script>
</head>
<body>;' . x | ex "$f"; done; echo "</body></html>" | tee -a *.html              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }
RecurseDirs "./"
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
find . -empty -type d -print -delete
git init
git add .
git commit -m "valid file names"
git push
git push -u origin master -f
find . -size +75M -a -print -a -exec rm -f {} \;
find . -size +75M -a -print -a -exec rm -f {} \;
git init
git add .
find . -empty -type f -print -delete
git add .
git commit -m "structure"
git push 
git add .
git commit -m "huh"
git push 
git add .
git commit -m "huh"
git push 
git add .
git commit -m "huh"
git push 
git remote add origin https://github.com/bgoonz/Cheat-Sheets.git
git init
git add .
git commit -m "wubalubadubdub"
git push
git remote remove origin
git remote add origin https://github.com/bgoonz/Cheat-Sheets.git
git add .
git commit -m "ughhhhhhh"
git push -u origin master
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_PDFS/Head_First_Csharp.pdf' HEAD
git init
git add .
git commit -m "ughhhhhhh"
git push -u origin master
git init
git add .
git commit -m "go go go"
git push 
git push -u origin master
git push -u origin master -f
npm install -g create-react-app
sudo apt update
sudo apt install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
cd .nvm
git fetch
sudo git fetch
cd ..
code .
cd..
cd ..
cd etc
cd apt
sudoedit sources.list  
ll
cd .
cd ..
cd
sudo eopkg install nodejs
sudo apt install eopkg
npm install -g n
n lts
sudo npm install -g n
sudo n lts
node -v
npm -v
cd ..
cd /usr/pkgsrc/lang/nodejs && make install
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
mkdir Downloads
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
sudo snap install node --classic --channel=14
git pull
git init
git add .
git commit -m "secondish commit"
git commit -n "wub"
git commit -n 
git pull
git pull -f
git commit -m "please" -f
git commit -m "please" 
git commit -m -n "please" 
git commit -m -n "./" 
git push 
git push  -f
git init
git add .
git commit -m "please" 
npm install
git add .
git commit -m "please" 
node foundation.js
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/the-one-DSPac-2-rule-them-all.git
git push -u origin master
npm login
npm init 
npm install
git init
ll
git remote add origin https://github.com/bgoonz/jsanimate.git
git init
git add .
git commit -m "initial commit"
git push 
git push -u origin master
git init
git add .
git commit -m "outter folder"
git push 
git add .
git commit -m "demo.gif"
git push 
git pull
cd "c:\\MY-WEB-DEV\\02-cloned-repos\\_AA-Clones\\victor\\personal-site-master\\personal-site-master"
npm install
npm init -y
npm install -f
heroku login
npm install -g heroku-cli
heroku login
sudo snap install heroku --classic
sudo apt install snap
sudo snap install heroku --classic
npm install
npm install -f
npm audit fix -f
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/React-Admin-Dashboard.git
git push -u origin master
npm install algoliasearch instantsearch.js
heroku login 
heroku join
sudo snap install --classic heroku
curl https://cli-assets.heroku.com/install.sh | sh
heroku login 
heroku git:remote -a bg-dev-docs
git add .
git commit -am "make it better"
git push heroku master
git init
git add .
git commit -m "heroku"
git push heroku master
git push 
heroku logs --tail
npm run build
npm run serve
npm run swizzle
npm run start
npm run start
git init
git add .
git commit -m "editing"
git push 
git push -u origin master
npm start
git init
git add .
git remote add origin https://github.com/bgoonz/Documentation-site-react.git
git commit -m "vscode commit"
npm install
git init
git add .
git commit -m "fixed link bug"
git push 
git add .
git commit -m "favicon.ico"
git push 
git init
git add .
git commit -m "stable"
git push 
git init
git add .
git commit -m "stable"
git add .
git commit -m "stable"
git push 
git init
git add .
git commit -m "added blog posts"
git push 
git add .
git commit -m "added blog posts"
git push 
git add .
git commit -m "added blog posts"
git push 
npm uninstall -g create-react-app,
find . -type f -exec sed -i '/appacademy/d' ./*.md {} \; 
find . -type f -exec sed -n -e '/```js/,/```/p' *.html >out.js ./* {} \;
npm start
npm start
gh pr checkout 5
sudo apt install gitsome
gh pr checkout 5
tree
tree
npm install
npm start
npm run start
npm run build
npm install
npm install -f
cd ..
cd mnt
cd c
cd MY-WEB-DEV/
cd __Projects/
cd NORWEX_CONTAINER/
find . -name 'node_modules' -type d -print -prune -exec rm -rf '{}' +
sudo apt-key adv --keyserver hkp://pool.sks-keyservers.net:80 --recv-keys 379CE192D401AB61
echo "deb https://dl.bintray.com/stripe/stripe-cli-deb stable main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install stripe
curl https://api.stripe.com/v1/accounts   -u sk_test_51IPNAZIzTmCXpXdEoTXoXjblvqjwD3SYnpDRBnAkZzJgJXBDHwfeTNtnXtEM8vnmjGsCLUmekbdEGRuG4RcBCW3o00QvZqWxOT:   -d "type"="express"
curl https://api.stripe.com/v1/accounts   -u sk_test_51IPNAZIzTmCXpXdEoTXoXjblvqjwD3SYnpDRBnAkZzJgJXBDHwfeTNtnXtEM8vnmjGsCLUmekbdEGRuG4RcBCW3o00QvZqWxOT:   -d "country"="US"   -d "type"="express"   -d "capabilities[card_payments][requested]"="true"   -d "capabilities[transfers][requested]"="true"
curl https://api.stripe.com/v1/account_links   -u sk_test_51IPNAZIzTmCXpXdEoTXoXjblvqjwD3SYnpDRBnAkZzJgJXBDHwfeTNtnXtEM8vnmjGsCLUmekbdEGRuG4RcBCW3o00QvZqWxOT:   -d "account"="acct_1032D82eZvKYlo2C"   -d "refresh_url"="https://example.com/reauth"   -d "return_url"="https://example.com/return"   -d "type"="account_onboarding"
curl https://api.stripe.com/v1/accounts   -u sk_test_51IPNAZIzTmCXpXdEoTXoXjblvqjwD3SYnpDRBnAkZzJgJXBDHwfeTNtnXtEM8vnmjGsCLUmekbdEGRuG4RcBCW3o00QvZqWxOT:   -d "type"="custom"   -d "capabilities[card_payments][requested]"="true"   -d "capabilities[transfers][requested]"="true"
curl https://api.stripe.com/v1/accounts/{{CONNECTED_STRIPE_ACCOUNT_ID}}   -u sk_test_51IPNAZIzTmCXpXdEoTXoXjblvqjwD3SYnpDRBnAkZzJgJXBDHwfeTNtnXtEM8vnmjGsCLUmekbdEGRuG4RcBCW3o00QvZqWxOT:
curl -X POST https://connect.stripe.com/oauth/token -d client_secret=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 -d code=ac_J3UQOIKZt95Eq0L1yAQR9yvhAYjytXOd -d grant_type=authorization_code
curl -X POST https://connect.stripe.com/oauth/token -d client_secret=pk_live_51IPNAZIzTmCXpXdESb5snTJpDZI4c6vlzYmN3Dt7KlZHTacqrDlRXdMnpuwq69SjjU9zUD5kDM2DAMe3Od2QFs3G00xVxgYvuY -d code=ac_J3UQOIKZt95Eq0L1yAQR9yvhAYjytXOd -d grant_type=authorization_code
curl -X POST https://connect.stripe.com/oauth/token -d client_secret=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 -d code=ac_J3UQOIKZt95Eq0L1yAQR9yvhAYjytXOd -d grant_type=authorization_code
stripe login
sudo apt install stripe-cli
pip install --upgrade stripe
ll
mkdir repos
cd repos
git clone https://github.com/stripe-samples/connect-onboarding-for-express
curl https://api.stripe.com/v1/charges/ch_1IROI1AsSzkI1bY8o5o7NM4N   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:   -H "Stripe-Account: acct_1IRNOwAsSzkI1bY8"   -G
curl https://api.stripe.com/v1/charges/ch_1IROI1AsSzkI1bY8o5o7NM4N   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:   -d "expand[]"=customer   -d "expand[]"="invoice.subscription"   -G
curl https://api.stripe.com/v1/charges   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:   -H "Idempotency-Key: buim2Jwfn1lHhFOQ"   -d amount=2000   -d currency=usd   -d description="My First Test Charge (created for API docs)"   -d source=tok_amex
curl https://api.stripe.com/v1/charges   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:   -d amount=2000   -d currency=usd   -d source=tok_mastercard   -d "metadata[order_id]"=6735
# The auto-pagination feature is specific to Stripe's
curl https://api.stripe.com/v1/customers   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:   -D "-"   -X POST
curl https://api.stripe.com/v1/charges   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:   -H "Stripe-Version: 2020-08-27"
curl https://api.stripe.com/v1/balance   -u sk_test_51IRNOwAsSzkI1bY8DXwKwxZBF0Z7myF8xv8ceskuxfBfdnaj7K9TVFIzt3svY5cDVMlbj5lnrPQhpxssdHmvMNMR00acgr6KTz:
npm install
npm start
npm install -g npm@7.6.0
npm audit fix
npm install
npm start
pip install ipyparallel
ipcluster nbextension enable
jupyter nbextension install --sys-prefix --py ipyparallel
jupyter nbextension enable --sys-prefix --py ipyparallel
jupyter serverextension enable --sys-prefix --py ipyparallel
su
ll
code .
cd ..
ll
