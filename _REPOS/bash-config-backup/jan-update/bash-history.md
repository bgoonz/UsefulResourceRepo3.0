sed -i '/Copyright/d' ./_.html
sed -i '/license/d' ./_.html
pm-reademe-comp*exitstatus:0 ====>
sed -i '/MIT/d' ./*.html
sed -i '/pm-reademe-comp*exitstatus:0 ====>/d' ./*.html
sed -i '/&copy;/d' ./_.html
sed -i '/legal/d' ./_.html
sed -i '/copyright/d' ./_.html
sed -i '/trademark/d' ./_.html

sed -i '/U.\S.\/d' ./_.html
sed -i '/U\.S\./d' ./_.html
sed -i '/Support/d' ./_.html
sed -i '/MIT/d' ./_.html
sed -i '/License/d' ./_.html
sed -i '/Contributors/d' ./_.html
sed -i '/Copyright/d' ./_.html
sed -i '/copyright/d' ./_.html
sed -i '/Copyright &copy; /d' ./_.html
git init
git add .
git commit -m " backup"
git add .
sed -i '/Copyright/d' ./_.html
sed -i '/COPYRIGHT/d' ./_.html
sed -i '/SOFTWARE/d' ./_.html
sed -i '/Permission/d' ./_.html
sed -i '/software/d' ./_.html
sed -i '/DAMAGES/d' ./_.html
sed -i '/LIABILITY/d' ./_.html
sed -i '/MERCHANTABILITY/d' ./_.html
sed -i '/CONTRACT/d' ./_.html
sed -i '/portions of/d' ./_.html
sed -i '/subject to/d' ./_.html
sed -i '/without restriction/d' ./_.html
sed -i '/publish, the/d' ./_.html
sed -i '/without limitation/d' ./_.html
sed -i '/following conditions/d' ./_.html
sed -i '/{}/d' ./_.css
sed -i '/{/d' ./_.css
}
git add .
git commit -m "formatting"
git push
git add .
git commit -m "index file"
git push
git add .
git commit -m "index file"
git push
git add .
git commit -m "backup"
git push
git remote add https://github.com/bgoonz/archive.git
git remote add https://github.com/bgoonz/archive.git -f
git remote add origin https://github.com/bgoonz/archive.git
git push
git push -u origin master
git push -u origin master -f
git add .
git commit -m "please work again"
git commit -m "refactor"
git push
git add .
git commit -m "refactor"
git push
git add .
git commit -m "fixed alignment hopefully"
git push
git add .
git commit -m "added js to autogenerate a table of contents for the headers"
git push
git add .
git commit -m "added js to autogenerate a table of contents for the headers"
git push
npm init -y
npm install clipboard --save
npm install clipboard
npm install clipboard -g
git add .
git commit -m "added copy to clip mod"
git push
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\._$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
git add .
cd MY-WEB-Dev
cd ..
cd..
cd MY-WEB-Dev
cd ..
cd MY-WEB-Dev
cd MY-WEB-DEV
cd 08-my-website/
cd experimental/
code .
cd ..
cd..
cd ..
cd c
cd MY-WEB-DEV/
cd 08-my-website/
cd experimental
wget -r http://videopro.cactusthemes.com/v2/
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
youtube-dl https://www.youtube.com/watch?v=LiouJsnYytI&ab_channel=PlayingForChange
code .
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_index.html' HEAD
git pull
git add .
git commit -m "pleaseeeee"
git push
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/\_00-4-all-time/\_0-Random-Repo/zipped.zip' HEAD
git push
git push -u origin master
git remote remove origin
git remote add origin https://github.com/bgoonz/WEB-DEV-NOTES.git
git push
git push -u origin master
git rm -r 00-4-all-time/\_0-Random-Repo/zipped.zip
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch 00-4-all-time/\_0-Random-Repo/zipped.zip' HEAD
git push
git push -u origin master
git push -u origin master -f
git remote add origin https://github.com/bgoonz/web-dev-notes-backup.git
git init
git remote add origin https://github.com/bgoonz/web-dev-notes-backup.git
git add .
git init
git add .
git commit-m "npm reademe's"
git commitc-m "npm reademe's"
git commitc-m "npm reademe's"git commit -m "j"
pandoc _.md> -o output.html
chmod +x cut-vid.sh
bash cut-vid.sh Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4 3:30
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./output/leanonme.mp4
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4'
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The Wsplit –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./output/leanonme.mp4
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./output
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' './output/leanonme.mp4'
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4'
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./
sudo apt install mkvmerge
wget -q -O - https://mkvtoolnix.download/gpg-pub-moritzbunkus.txt | sudo apt-key add -
mkvmerge -o .mp4 --split 10MB Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4
mkvmerge -o .mp4 --split 10MB playing-4-change.mp4.mp4
sudo apt install mkvtoolnix
mkvmerge -o .mp4 --split 10MB playing-4-change.mp4.mp4
mkvmerge -o .mp4 --split 10MB playing-4-change.mp4
mkvmerge -o .mp4 --split 10M playing-4-change.mp4
mkvmerge -o .mp4 --split 10M ./playing-4-change.mp4
mkvmerge -o .mp4 --split 10M './playing-4-change.mp4'
sudo mkvmerge -o .mp4 --split 10M './playing-4-change.mp4'
sudo apt install avconv
avconv -i srcFileName -c:a copy -c:v copy -ss 00:03:40 -t 00:01:12 targetFileName
npm init -y
npm i broken-link-checker
git add .
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
sed -i '/node*modules/d' ./*.html
sed -i '/\.git/d' ./_.html
find . -name "*.ini" -type f -print -delete
find . -name "*desktop.ini" -type f -print -delete
git add .
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -name '_.README.md' | cpio -pdm './extension-readme'
find . -type f -name '_.md' | cpio -p -d -v './extensionReadme'
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -type f -name '_.png' | cpio -p -d -v './\_ext'
find . -depth -exec rmdir {} \;
sudo apt install ROBOCOPY
robocopy
git add .
pandoc \_.html> -o \_EXTENSIONS.html
cat \*.html > \_EXTENSIONS.html
git init
git add .
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\._$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() { echo ' <!DOCTYPE html>'; echo '<html>'; echo '<head>' echo ' <meta http-equiv="Content-Type" content="text/html">' echo ' <meta name="Author" content="Bryan Guner">'; echo '<link rel="stylesheet" href="./assets/prism.css">'; echo ' <link rel="stylesheet" href="./assets/style.css">'; echo ' <script async defer src="./assets/prism.js"></script>' echo " <TITLE> directory </TITLE> </head>" echo "" echo '</head>' echo '<body>' echo "" echo "" echo "" echo "<ul>" awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing echo "" echo "</ul>" echo "</body>" echo "</html>" }
sudo sed -i '/\.git/d' ./files.md
sudo sed -i '/\.md/d' ./_.md
find . -depth -exec rmdir {} \;  
git add .
git init
git add .
git commit -m "initial commit"
git add .
git commit -m "lost html files"
git remote add origin https://github.com/bgoonz/vscode-Extension-readmes.git
git push -u origin master
git add .
git commit -m "updated readme"
git push
git add .
git commit -m "updated readme"
git push
git add .
git commit -m "linked to live web for this repo"
git push
git add .
git commit -m "linked to live web for this repo"
git push
git add .
git commit -m "linked to live web for this repo"
git push
cat _.html > node-mod-readme.html
find ./ -iname "_.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find . -name '_.jpg' | grep test1 | while read aline; do newname="$(echo ${FILE} | grep -o "[0-9]_" | tr "\n" "_" | sed s/2016_//;s/\_$/.md\n/;')"
     mv "${FILE}" "${newname}" ;
done

exit
;
#!/bin/bash
find . -name '_.jpg' | grep test1 | while read aline; do newname="$(echo ${FILE} | grep -o "[0-9]_" | tr "\n" "_" | sed s/2016_//;s/\_$/.md\n/;')"
     mv "${FILE}" "${newname}" ;
done
exit 0

git add .
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
git
find . -name "_.zip" -type f -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git add .
git commit -m "major cleanup update"
git push
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch 0-assets/0-embeded-repos/code-mirror/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome'
git pull
git add --all
git commit -m "please work"
git push
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch 0-assets/0-embeded-repos/code-mirror/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome'
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/algebra#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Algebra
wget -r -A.pdf http://www.wolframalpha.com/examples/Algebra.html
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/algebra#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Algebra
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Algebra_Cheat_Sheet.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Algebra_Cheat_Sheet_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Algebra_Cheat_Sheet.pdf
wget -r -A.pdf https://overapi.com/static/cs/Algebra_Cheat_Sheet_Reduced.pdf
wget -r -A.pdf http://www.glump.net/content/abstract_algebra_cheat
wget -r -A.pdf https://overapi.com/static/cs/abstract_algebra_cheat
wget -r -A.pdf http://www.docstoc.com/docs/7389/Review-of-Algebra
wget -r -A.pdf https://overapi.com/static/cs/ess-reviewofalgebra.pdf
wget -r -A.pdf https://overapi.com/math
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/assembly#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Assembly_language
wget -r -A.pdf http://www.jegerlehner.ch/intel/IntelCodeTable.pdf
wget -r -A.pdf https://overapi.com/static/cs/IntelCodeTable.pdf
wget -r -A.pdf http://www.strchr.com/assembly_cheat_sheet
wget -r -A.pdf https://overapi.com/static/cs/Win32AssemblyCheatSheet.png
wget -r -A.pdf http://www.cs.uaf.edu/2005/fall/cs301/support/x86/index.html
wget -r -A.pdf https://overapi.com/static/cs/Intel.x86-64.Architecture.2012011000.pdf
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/calculus#more
wget -r -A.pdf http://www.wolframalpha.com/examples/Calculus.html
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/calculus#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Calculus
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_All_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_All_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_Limits_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_Limits_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_Derivatives_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_Derivatives_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_Integrals_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_Integrals_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Common_Derivatives_Integrals_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Common_Derivatives_Integrals_Reduced.pdf
wget -r -A.pdf https://overapi.com/math
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/express#more
wget -r -A.pdf http://expressjs.com/4x/api.html#express
wget -r -A.pdf http://expressjs.com/4x/api.html#app-settings
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/java#more
wget -r -A.pdf http://www.oracle.com/technetwork/java/index.html
find . -depth -exec rmdir {} \;  
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/emmet#more
wget -r -A.pdf http://docs.emmet.io/
wget -r -A.pdf http://en.wikipedia.org/wiki/Zen_Coding
wget -r -A.pdf http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf
wget -r -A.pdf https://overapi.com/static/cs/ZenCodingCheatSheet.pdf
find . -depth -exec rmdir {} \;  
find . -depth -exec rmdir {} \;  
wget -r -A.pdf https://overapi.com/git
npm init
firebase login
git init
git\
git add .
git push -u origin master
git push
git remote add origin https://github.com/bgoonz/web-dev-notes-backup.git
git push -u origin master
git add .
npm install -g firebase-tools
find . -depth -exec rmdir {} \;  
git init
git add .
git remote add origin https://github.com/bgoonz/stalk-photos-web-assets.git
git commit -m "initial commit "
git add .
git commit -m "initial commit "
git push -u origin master
git add .
git commit -m "organized photos by extension"
git push
git add .
git commit -m "added links to assets"
git push
git add .
git commit -m "readme"
git push
git add .
git commit -m "readme"
git push
forfiles /S /M _ /C "cmd /c rename @file @fname.html"
for files /S /M _ /C "cmd /c rename @file @fname.html"
forfiles /S /M _ /C "cmd /c rename @file @fname.html"
wget -r -A.pdf https://overapi.com/html-dom
sed -i '/normalizerEmpty/d' ./js-in-one-page.html
node atags.js
node upgrade.js
npm install -g bower
npm-recursive-install
npm i -g recursive-install
npm-recursive-install
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
npm-recursive-install
code .
sudo sed -i '/CODE-MIRROR/!d' resources.html
sudo sed -i '/CODE-MIRROR/d' ./resources.html
sudo sed -i '/code-mirror/d' ./resources.html
sudo sed '/\.html\/!d' scrap.md
sudo sed '/\.html/!d' scrap.md
sudo sed -i '/\.html/!d' scrap.md
sudo sed -i '/overapi/d' ./output.txt
pandoc _.txt> combined.txt
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'; echo'<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'; echo'<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>';   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/\.json/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.php/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.svg/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.jpg/d' ./index.html
sudo sed -i '/\.scss/d' ./index.html
sudo sed -i '/scss/d' ./index.html
sudo sed -i '/\.txt/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.pdf/d' ./index.html
sudo sed -i '/\.mp4/d' ./index.html
sudo sed -i '/\.pug/d' ./index.html
sudo sed -i '/\.DS_store/d' ./index.html
sudo sed -i '/\.DS_Store/d' ./index.html
sudo sed -i '/\.sql/d' ./index.html
sudo sed -i '/\.py/d' ./index.html
sudo sed -i '/\.xlsx/d' ./index.html
sudo sed -i '/\.JPG/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.eot/d' ./index.html
sudo sed -i '/\.ttc/d' ./index.html
sudo sed -i '/\.PNG/d' ./index.html
sudo sed -i '/\.java/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.go/d' ./index.html
sudo sed -i '/\.vue/d' ./index.html
sed -i "" "s/.git/d" index.html
sed -i "" "s/.git/d" ./index.html
sed -i "" "s/.git/d" './index.html'
sed -i "./" "s/.git/d" 'index.html'
sed -i "./" "s/.git/d" index.html
sed -i "./" "s/\.git/d" index.html
sed -i "./" "s/\.git/d" ./index.html
sed '/.git/d' ./index.html
sed '/\.git/d' ./index.html
sed -i '/\.git/d' ./index.html
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/images/d' ./index.html
sudo sed -i '/font/d' ./index.html
sudo sed -i '/fonts/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
git add .
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\._$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
git add .
git commit -m "cleanup and link fixing"
git push
git add .
git commit -m "oops"
git push
for file in _.; do sed -i '/U.\S.\/d' ./_.html; sed -i '/U\.S\./d' ./_.html; sed -i '/Support/d' ./_.html; sed -i '/MIT/d' ./_.html; sed -i '/License/d' ./_.html; sed -i '/Contributors/d' ./_.html; sed -i '/Copyright/d' ./_.html; sed -i '/copyright/d' ./_.html; sed -i '/Copyright &copy; /d' ./_.html; sed -i '/U.\S.\/d' ./_.html; sed -i '/U\.S\./d' ./_.html; sed -i '/Support/d' ./_.html; sed -i '/MIT/d' ./_.html; sed -i '/License/d' ./_.html; sed -i '/Contributors/d' ./_.html; sed -i '/Copyright/d' ./_.html; sed -i '/copyright/d' ./_.html; sed -i '/Copyright &copy; /d' ./_.html; sed -i '/U.\S.\/d' ./_.html; sed -i '/U\.S\./d' ./_.html; sed -i '/Support/d' ./_.html; sed -i '/MIT/d' ./_.html; sed -i '/License/d' ./_.html; sed -i '/Contributors/d' ./_.html; sed -i '/Copyright/d' ./_.html; sed -i '/copyright/d' ./_.html; sed -i '/Copyright &copy; /d' ./_.html; sed -i '/U.\S.\/d' ./_.html; sed -i '/U\.S\./d' ./_.html; sed -i '/Support/d' ./_.html; sed -i '/MIT/d' ./_.html; sed -i '/License/d' ./_.html; sed -i '/Contributors/d' ./_.html; sed -i '/Copyright/d' ./_.html; sed -i '/copyright/d' ./_.html; sed -i '/Copyright &copy; /d' ./_.html; done
for file in _.; do sudo sed -i '/U.\S.\/d' ./_.html; sudo sed -i '/U\.S\./d' ./_.html; sudo sed -i '/Support/d' ./_.html; sudo sed -i '/MIT/d' ./_.html; sudo sed -i '/License/d' ./_.html; sudo sed -i '/Contributors/d' ./_.html; sudo sed -i '/Copyright/d' ./_.html; sudo sed -i '/copyright/d' ./_.html; sudo sed -i '/Copyright &copy; /d' ./_.html done
for file in _.; do sudo sed -i '/Support/d' ./_.html done
for file in _.; do sudo sed -i '/Copyright/d' ./_.html done
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
wget-r https://awesomeopensource.com/categories/software-development
wget -r https://awesomeopensource.com/categories/software-development
wget -r -A.pdf https://github.com/galoget/free-programming-books/blob/master/free-programming-books.md
find . -depth -exec rmdir {} \;  
wget -r -A.pdf https://github.com/galoget/free-programming-books/blob/master/javascript-frameworks-resources.md
find . -depth -exec rmdir {} \;  
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
for f in * ; do    mv "$f" "$f.html"; done
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\._$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
for f in _ ; do mv "$f" "$f.html"; done
for f in _ ; do mv "$f" "$f.html"
find . -type f -exec mv '{}' '{}'.html \;
find . -type f -exec mv '{}' '{}'.html \;
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -type f -name '*.html' | cpio -p -d -v './../../../'
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \; find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
bin/elasticsearch
#!/bin/bash

# CONTROLLING STARTUP:

#

# This script relies on a few environment variables to determine startup

# behavior, those variables are:

#

# ES_PATH_CONF -- Path to config directory

# ES_JAVA_OPTS -- External Java Opts on top of the defaults set

#

# Optionally, exact memory values can be set using the `ES_JAVA_OPTS`. Example

# values are "512m", and "10g".

#

# ES_JAVA_OPTS="-Xms8g -Xmx8g" ./bin/elasticsearch

source "`dirname "$0"`"/elasticsearch-env
CHECK_KEYSTORE=true
DAEMONIZE=false
for option in "$@"; do   case "$option" in -h|--help|-V|--version) CHECK_KEYSTORE=false; ;; -d|--daemonize) DAEMONIZE=true; ;; esac; done
if [ -z "$ES_TMPDIR" ]; then ES_TMPDIR=`"$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.TempDirectory`; fi

# get keystore password before setting java options to avoid

# conflicting GC configurations for the keystore tools

unset KEYSTORE_PASSWORD
KEYSTORE_PASSWORD=
if [[$CHECK_KEYSTORE = true]] && bin/elasticsearch-keystore has-passwd --silent; then if ! read -s -r -p "Elasticsearch keystore password: " KEYSTORE_PASSWORD ; then echo "Failed to read keystore password on console" 1>&2; exit 1; fi; fi

# The JVM options parser produces the final JVM options to start Elasticsearch.

# It does this by incorporating JVM options in the following way:

# - first, system JVM options are applied (these are hardcoded options in the

# parser)

# - second, JVM options are read from jvm.options and jvm.options.d/\*.options

# - third, JVM options from ES_JAVA_OPTS are applied

# - fourth, ergonomic JVM options are applied

ES_JAVA_OPTS=`export ES_TMPDIR; "$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.JvmOptionsParser "$ES_PATH_CONF"`

# manual parsing to find out, if process should be detached

if [[$DAEMONIZE = false]]; then exec "$JAVA"     "$XSHARE" $ES_JAVA_OPTS     -Des.path.home="$ES_HOME" -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR" -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK" -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@" <<<"$KEYSTORE_PASSWORD"; else   exec     "$JAVA" "$XSHARE"     $ES_JAVA_OPTS     -Des.path.home="$ES_HOME" -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR" -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK" -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@" <<<"$KEYSTORE_PASSWORD" &   retval=$?; pid=$!;   [ $retval -eq 0 ] || exit $retval;   if [ ! -z "$ES_STARTUP_SLEEP_TIME" ]; then sleep $ES_STARTUP_SLEEP_TIME; fi; if ! ps -p $pid > /dev/null ; then exit 1; fi; exit 0; fi
#!/bin/bash

# CONTROLLING STARTUP:

#

# This script relies on a few environment variables to determine startup

# behavior, those variables are:

#

# ES_PATH_CONF -- Path to config directory

# ES_JAVA_OPTS -- External Java Opts on top of the defaults set

#

# Optionally, exact memory values can be set using the `ES_JAVA_OPTS`. Example

# values are "512m", and "10g".

#

# ES_JAVA_OPTS="-Xms8g -Xmx8g" ./bin/elasticsearch

source "`dirname "$0"`"/elasticsearch-env
CHECK_KEYSTORE=true
DAEMONIZE=false
for option in "$@"; do   case "$option" in -h|--help|-V|--version) CHECK_KEYSTORE=false; ;; -d|--daemonize) DAEMONIZE=true; ;; esac; done
if [ -z "$ES_TMPDIR" ]; then ES_TMPDIR=`"$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.TempDirectory`; fi

# get keystore password before setting java options to avoid

# conflicting GC configurations for the keystore tools

unset KEYSTORE_PASSWORD
KEYSTORE_PASSWORD=
if [[$CHECK_KEYSTORE = true]] && bin/elasticsearch-keystore has-passwd --silent; then if ! read -s -r -p "Elasticsearch keystore password: " KEYSTORE_PASSWORD ; then echo "Failed to read keystore password on console" 1>&2; exit 1; fi; fi

# The JVM options parser produces the final JVM options to start Elasticsearch.

# It does this by incorporating JVM options in the following way:

# - first, system JVM options are applied (these are hardcoded options in the

# parser)

# - second, JVM options are read from jvm.options and jvm.options.d/\*.options

# - third, JVM options from ES_JAVA_OPTS are applied

# - fourth, ergonomic JVM options are applied

ES_JAVA_OPTS=`export ES_TMPDIR; "$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.JvmOptionsParser "$ES_PATH_CONF"`

# manual parsing to find out, if process should be detached

if [[$DAEMONIZE = false]]; then exec "$JAVA"     "$XSHARE" $ES_JAVA_OPTS     -Des.path.home="$ES*HOME" -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR" -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK" -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@" <<<"$KEYSTORE_PASSWORD"; else   exec     "$JAVA" "$XSHARE"     $ES_JAVA_OPTS     -Des.path.home="$ES_HOME" -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR" -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK" -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@" <<<"$KEYSTORE_PASSWORD" &   retval=$?; pid=$!;   [ $retval -eq 0 ] || exit $retval;   if [ ! -z "$ES_STARTUP_SLEEP_TIME" ]; then sleep $ES_STARTUP_SLEEP_TIME; fi; if ! ps -p $pid > /dev/null ; then exit 1; fi; exit 0; fi
#!/bin/bash
set -e -o pipefail
source "`dirname "$0"`"/elasticsearch-env
curl -X GET http://localhost:9200/
sudo curl -X GET http://localhost:9200/
curl -X POST 'http://localhost:9200/my-index-000001/\_doc?pretty' -H 'Content-Type: application/json' -d '
{
"@timestamp": "2099-11-15T13:12:00",
"message": "GET /search HTTP/1.1 200 1070000",
"user": {
"id": "kimchy"
}
}'
curl -X POST 'http://localhost:9200/my-index-000001/\_doc?pretty' -H 'Content-Type: application/json' -d '
{
"@timestamp": "2099-11-15T14:12:12",
"message": "GET /search HTTP/1.1 200 1070000",
"user": {
"id": "elkbee"
}
}'
curl -X POST 'http://localhost:9200/my-index-000001/\_doc?pretty' -H 'Content-Type: application/json' -d '
{
"@timestamp": "2099-11-15T01:46:38",
"message": "GET /search HTTP/1.1 200 1070000",
"user": {
"id": "elkbee"
}
}'
curl -X GET http://localhost:9200/
code .
cd ..
code .
sudo service docker start
sudo dockerd
chmod -x elasticsearch
bash elasticsearch
curl -X GET http://localhost:9200/
sudo systemctl start elasticsearch
sudo service docker start
curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt update
sudo apt install elasticsearch
env
export XDG_RUNTIME_DIR=/run/user/`id -u`
sudo systemctl restart systemd-logind.service
export XDG_RUNTIME_DIR=/run/user/`id -u`
sudo apt upgrade
curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt update
sudo apt install elasticsearch
sudo code /etc/elasticsearch/elasticsearch.yml
sudo nano /etc/elasticsearch/elasticsearch.yml
sudo systemctl start elasticsearch
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is downservice --status-all
service --status-all
docker run -d --name redis --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro jrei/systemd-ubuntu:18.04
sudo docker run -d --name redis --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro jrei/systemd-ubuntu:18.04
sudo dockerd
cd ..
code .
curl -X GET http://localhost:9200/
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2-linux-x86_64.tar.gz
tar -xvf elasticsearch-7.10.2-linux-x86_64.tar.gz
cd elasticsearch-7.10.2/bin
./elasticsearch
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; find . -name "*.zip" -type f -print -delete find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
npm run start
npm run start
npm install mongodb
npm audit fix
npm install
wget -r -A.pdf https://www.beamjobs.com/resumes/web-developer-resume-examples
wget -r https://insights.stackoverflow.com/survey/2019#overview
youtube-dl https://vimeo.com/aacurriculum
git add .
git commit -m "added index page"
git push
git add .
git init
git add .
git remote add origin https://github.com/bgoonz/Mihir_Beg_Final.git
git commit -m "initial commit"
git push -u origin master
git init
git add .
git commit -m "fixed deploy issue"
git push
git add .
git commit -m "fixed deploy issue"
git push
git add .
git commit -m "fixed deploy issue"
git push
git clone git://github.com/jquery/jquery.git
wget -r https://learn.jquery.com/about-jquery/
git add .
git commit -m "resize toc"
git push
git add .
git commit -m "resize toc"
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/bgoonz.github.io.git
git push -u origin master
tree -d -L 4
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "added powerpoint portfolio"
git push
git add .
git commit -m "fixed deploy issue"
git push
git add .
git commit -m "fixed deploy issue"
git push
git add .
git commit -m "fixed deploy issue"
git push
git add .
git commit -m "fixed deploy issue"
git add .
git push
npm init -y
npm install jquery
find ./ -iname "\_.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.png/d' ./index.html

sudo sed -i '/\.json/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sed -i "" "s/.git/d" ./index.html
sudo sed -i '/images/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.html/!d' index.html
wget -r https://www.facebook.com/bryan.guner
wget -r http://country.io/data/
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2-amd64.deb
sudo dpkg -i elasticsearch-7.10.2-amd64.deb
npm install
cd ..
bin/elasticsearch-setup-passwords interactive
cd etc
bin/elasticsearch-setup-passwords interactive
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.10.2-arm64
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.2
cd ..
cd /etc/sysctl.conf
cd ./etc/sysctl.conf
cd etc
cdsysctl.conf
grep vm.max_map_count /etc/sysctl.conf
cd home
cd ..
cd home
cd bryan
grep vm.max_map_count /etc/sysctl.conf
npm run dev
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
npm run dev
./metricbeat modules enable elasticsearch
./metricbeat modules enable elasticsearch
git add .
chmod +x elastic.sh
bash elastic.sh
docker-compose up
The command 'docker-compose' could not be found in this WSL 2 distro.
wsl --list --verbose
docker-machine restart
docker-compose up
The command 'docker-compose' could not be found in this WSL 2 distro.
curl -X GET "localhost:9200/\_cat/nodes?v=true&pretty"
bin/elasticsearch-setup-passwords interactive
grep vm.max_map_count /etc/sysctl.conf
vm.max_map_count=262144
sysctl -w vm.max_map_count=262144
wsl -d docker-desktop
sysctl -w vm.max_map_count=262144
/resources/item[@id="index.php"]/description/text()
curl --location --header "Accept: application/rdf+xml" http://www.test.com | xmllint --format --xpath '//title' -
curl foo.com/somefile.xml | xmllint --format -curl foo.com/somefile.xml | xmllint --format -
curl foo.com/somefile.xml | xmllint --format -
docker-compose up
mkdir esdatadir
chmod g+rwx esdatadir
chgrp 0 esdatadir
sudo mkdir esdatadir
sudo chmod g+rwx esdatadir
sudo chgrp 0 esdatadir
docker run --rm centos:8 /bin/bash -c 'ulimit -Hn && ulimit -Sn && ulimit -Hu && ulimit -Su'
docker run -e "bootstrap.memory_lock=true" --ulimit memlock=-1:-1
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.2 -e "bootstrap.memory_lock=true" --ulimit memlock=-1:-1
-v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
The container runs Elasticsearch as user elasticsearch using uid:gid 1000:0. Bind mounted host directories and files must be accessible by this user, and the data and log directories must be writable by this user.
Mounting an Elasticsearch keystoreedit
By default, Elasticsearch will auto-generate a keystore file for secure settings. This file is obfuscated but not encrypted. If you want to encrypt your secure settings with a password, you must use the elasticsearch-keystore utility to create a password-protected keystore and bind-mount it to the container as /usr/share/elasticsearch/config/elasticsearch.keystore. In order to provide the Docker container with the password at startup, set the Docker environment value KEYSTORE_PASSWORD to the value of your password. For example, a docker
run command might have the following options:
-v full_path_to/elasticsearch.keystore:/usr/share/elasticsearch/config/elasticsearch.keystore
-E KEYSTORE_PASSWORD=mypassword
Using custom Docker imagesedit
In some environments, it might make more sense to prepare a custom image that contains your configuration. A Dockerfile to achieve this might be as simple as:
FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2
COPY --chown=elasticsearch:elasticsearch elasticsearch.yml /usr/share/elasticsearch/config/
You could then build and run the image with:
docker build --tag=elasticsearch-custom .
docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
Some plugins require additional security permissions. You must explicitly accept them either by:
Attaching a tty when you run the Docker image and allowing the permissions when prompted.
Inspecting the security permissions and accepting them (if appropriate) by adding the --batch flag to the plugin install command.
See Plugin management for more information.
Next stepsedit
You now have a test Elasticsearch environment set up. Before you start serious development or go into production with Elasticsearch, you must do some additional setup:
Learn how to configure Elasticsearch.
Configure important Elasticsearch settings.
Configure important system settings.
« Install Elasticsearch with Windows MSI InstallerInstall Elasticsearch on macOS with Homebrew »
On this page
Pulling the image
Starting a single node cluster with Docker
Starting a multi-node cluster with Docker Compose
Using the Docker images in production
Configuring Elasticsearch with Docker
Next steps
What's New

Elastic Cloud Free Trial

Visualizing Data with Kibana Lens

Managing Logs, Metrics & APM

Elasticsearch Reference:
7.10 (current)
What is Elasticsearch?
What's new in 7.10
Getting started with Elasticsearch
Set up Elasticsearch
Installing Elasticsearch
Install Elasticsearch from archive on Linux or MacOS
Install Elasticsearch with .zip on Windows
Install Elasticsearch with Debian Package
Install Elasticsearch with RPM
Install Elasticsearch with Windows MSI Installer
Install Elasticsearch with Docker
Install Elasticsearch on macOS with Homebrew
Configuring Elasticsearch
Important Elasticsearch configuration
Important System Configuration
Bootstrap Checks
Bootstrap Checks for X-Pack
Starting Elasticsearch
Stopping Elasticsearch
Discovery and cluster formation
Add and remove nodes in your cluster
Full-cluster restart and rolling restart
Remote clusters
Set up X-Pack
Configuring X-Pack Java Clients
Plugins
Upgrade Elasticsearch
Index modules
Mapping
Text analysis
Index templates
Data streams
Ingest node
Search your data
Query DSL
Aggregations
EQL
SQL access
Scripting
Data management
ILM: Manage the index lifecycle
Monitor a cluster
Frozen indices
Roll up or transform your data
Set up a cluster for high availability
Snapshot and restore
Secure a cluster
Watch for cluster and index events
Command line tools
How To
Glossary of terms
REST APIs
Migration guide
Rel

docker run -v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2
COPY --chown=elasticsearch:elasticsearch elasticsearch.yml /usr/share/elasticsearch/config/
docker build --tag=elasticsearch-custom .
docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
sudo docker build --tag=elasticsearch-custom .
sudo docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
git add .
curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.10.2-darwin-x86_64.tar.gz
tar xzvf metricbeat-7.10.2-darwin-x86_64.tar.gz
cd metricbeat-7.10.2-darwin-x86_64/
curl -X GET "localhost:9200/\_cat/nodes?v=true&pretty"
--ulimit nofile=65535:65535
tar -xf metricbeat-7.10.2-darwin-x86_64.tar.gz
git add .
git commit -m "elastic search makes my head hurt"
git push
git pull
curl -X POST 'https://782dcfa71c754bbab08578a094719315.ent-search.us-central1.gcp.cloud.es.io/api/as/v1/engines/web-dev-hub-search/documents' -H 'Content-Type: application/json' -H 'Authorization: Bearer private-37bi975o9ef3ww4y4u5ry6gj' -d '[
{
"id": "park_rocky-mountain",
"title": "Rocky Mountain",
"description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).",
"nps_link": "https://www.nps.gov/romo/index.htm",
"states": [
"Colorado"
],
"visitors": 4517585,
"world_heritage_site": false,
"location": "40.4,-105.58",
"acres": 265795.2,
"square_km": 1075.6,
"date_established": "1915-01-26T06:00:00Z"
},
{
"id": "park_saguaro",
"title": "Saguaro",
"description": "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.",
"nps_link": "https://www.nps.gov/sagu/index.htm",
"states": [
"Arizona"
],
"visitors": 820426,
"world_heritage_site": false,
"location": "32.25,-110.5",
"acres": 91715.72,
"square_km": 371.2,
"date_established": "1994-10-14T05:00:00Z"
}
]'

# [

# {

# "id": "park_rocky-mountain",

# "errors": []

# },

# {

# "id": "park_saguaro",

# "errors": []

# }

# ]

curl -X POST 'https://782dcfa71c754bbab08578a094719315.ent-search.us-central1.gcp.cloud.es.io/api/as/v1/engines/web-dev-hub-search/documents' -H 'Content-Type: application/json' -H 'Authorization: Bearer private-37bi975o9ef3ww4y4u5ry6gj' -d '[
{
"id": "park_rocky-mountain",
"title": "Rocky Mountain",
"description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).",
"nps_link": "https://www.nps.gov/romo/index.htm",
"states": [
"Colorado"
],
"visitors": 4517585,
"world_heritage_site": false,
"location": "40.4,-105.58",
"acres": 265795.2,
"square_km": 1075.6,
"date_established": "1915-01-26T06:00:00Z"
},
{
"id": "park_saguaro",
"title": "Saguaro",
"description": "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.",
"nps_link": "https://www.nps.gov/sagu/index.htm",
"states": [
"Arizona"
],
"visitors": 820426,
"world_heritage_site": false,
"location": "32.25,-110.5",
"acres": 91715.72,
"square_km": 371.2,
"date_established": "1994-10-14T05:00:00Z"
}
]'

# [

# {

# "id": "park_rocky-mountain",

# "errors": []

# },

# {

# "id": "park_saguaro",

# "errors": []

# }

./metricbeat modules enable elasticsearch
chmod -x ./metricbeat modules enable elasticsearch
ll
cd elasticsearch-7.10.2/
grep vm.max*map_count /etc/sysctl.conf
code .
npm install lunr
npm install @elastic/app-search-node
curl -X GET "localhost:9200/my-index-000001/\_msearch?pretty" -H 'Content-Type: application/json' -d'
{ }
{"query" : {"match" : { "message": "this is a test"}}}
{"index": "my-index-000002"}
{"query" : {"match_all" : {}}}
'
npm i headless-chrome-crawler
npm audit fix
pip install scrapy
scrapy startproject tutorial
scrapy crawl quotes
scrapy crawl quotes
scrapy shell 'https://goofy-euclid-1cd736.netlify.app/'
scrapy crawl quotes
scrapy crawl quotes -O quotes.json
scrapy crawl quotes -o quotes.jl
for href in response.css('ul.pager a::attr(href)'):
scrapy crawl quotes
scrapy crawl quotes -O quotes-humor.json -a tag=humor
scrapy crawl LxmlParserLinkExtractor
scrapy crawl myspider -s LOG_FILE=scrapy.log
mkdir keep-unsorted
cd keep-unsorted
wget -r https://www.atlassian.com/agile/scrum
for f in * ; do mv "$f" "$f.html"; done
find . -type f -exec mv '"$f" "$f.html"'{} +
find . -type f mv '"$f" "$f.html"'{} +
find . -type f -exec rename 's/"$f"/"$f.html"/g' {} +
find . -type f rename 's/"$f"/"$f.html"/g' {} +
find . -type f -exec rename 's/"$f"/"$f.html"/g' {} +
find ./ -type f -exec rename 's/"$f"/"$f.html"/g' {} +
find ./ -type f rename 's/"$f"/"$f.html"/g' {} +
find ./ -type f rename 's/"_$f"/"*$f.html"/g' {} +
find ./ -type f rename 's/"_$f"/"_$f.html"/' {} +
wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://www.atlassian.com/agile/scrum
for f in _ ; do mv "$f" "$f.html"; done
for f in _ ; do mv "$f" "$f.html"; done
find . -type f -exec rename 's/html//g' {} +
chmod -x make-html.sh
bash make-html.sh
for f in _ ; do mv "$f" "$f.html"; done
for file in ./_/_ ; do for f in _ ; do mv "$f" "$f.html"; done done
for d in ./\*/ ; do (cd "$d" && cmd(){for f in _ ; do
done}); done
done
cd keep-unsorted/
code .
find . -type f -name '_.md' | cpio -p -d -v './../'
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.html/d' ./index.html
sudo sed -i '/\.html/!d' ./index.html
sudo sed -i '/\.html/d' ./index.html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\._$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/Copyright/d' '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "*.md" \) -a -exec sed
ll
cd c
npm install
sudo sed -i '/\.html/!d' index.html
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git init
git remote add origin https://github.com/bgoonz/Resource-Hub-Mark_II.git
git add .
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE*OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
ll
cd ..
cd MY-WEB-DEV
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
ll
cd 02-cloned-repos/
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; code . find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} + find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} + find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + cd .. cd 0-a-A-October find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + cd .. cd 0-a-A-October cd 00-weeks-container/ find . -name "*.zip" -type f -print -delete cd .. cd MY-WEB-DEV 02-cloned-repos/ find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
npm install
npm install list.js
npm audit fix
npm audit fix -force
for file in _.; do rename 's/package\.html$/package\.json/' *package\.html; done
for file in *.; do rename 's/\.txt$/.html/' _.txt; done
for file in _.; do rename 's/\.txt$/.html/' *.txt; done
for file in *.; do rename 's/\.txt$/.html/' _.txt; done
for file in _.; do rename 's/\package\.html$/.json/' *package\.html; done
for file in *.; do rename 's/package\.html$/.json/' _package\.html; done
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
npm install
npm install
npm install
git add .
git remote add origin https://github.com/bgoonz/web-dev-notes-resource-site.git
git init
git remote add origin https://github.com/bgoonz/web-dev-notes-resource-site.git
git push
git push -u origin master
git add .
git add .
git commit -m "deleted stuff"
git add .
git commit -m "deleted stuff"
git push
git push -f
git add .
git commit -m "update"
wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://npm.broofa.com/
wget --wait=2 --level=inf --limit-rate=20K --recursive https://npm.broofa.com/
cd ..
cd mnt
cd c
cd Users
cd bryan
sudo apt-get install checkinstall
sudo ./configure
sudo dpkg --install --force-overwrite python35_3.5.9-1_amd64.deb
du -sh /var/cache/apt/archives
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -name "_.gz" -type f -print -delete
find . -name "_\.gz" -type f -print -delete
find . -name "_.gz" -type f -print -delete
npm i -g trash-cli
alias rm='trash'
sudo apt-get update
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
sudo find . -depth -exec rmdir {} \;  
npm cache clean --force
nvm cache clear
alias start-pg='sudo service postgresql start'
alias run-pg='sudo -u postgres psql'
npm install
cd ..
cd mnt
cd c
cd ..
cd 0-a-A-October
cd ..
cd mnt
cd c
find . -name "_.zip" -type f -print -delete
find . -name "\*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
git init
git remote add origin https://github.com/bgoonz/bryan.git
git add .
find . -depth -exec rmdir {} \;  
git add .
yarn install
sudo yarn install
npm init -y
npm install pdfjs-dist --save
gulp dist-install
sudo apt install gulp
gulp dist-install
npm install gulp-cli
gulp dist-install
npm install canvas
npm install pdfjs-dist --save-dev
git init
git add .
git commit -m "update"
git push -u origin master
git push -u origin master -f
git remote add origin https://github.com/bgoonz/bryan.git
git push
git push -u origin master -f
src refspec master does not match any
git remote -v
git pull
git branch --set-upstream-to=origin/ master
git prune
git commit -m "initial commit "
git add .
git commit -m "push"
git push
git push -u origin master
git pull
git pull https://github.com/bgoonz/web-dev-notes-resource-site.git master
git push -u origin master -force
git push -u origin master --force
git init
git add .
git remote add origin https://github.com/bgoonz/live-form.git
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "useless pdf stuff i will delete"
git push
git push -f
git commit -m "live-form"
git add .
git commit -m "live-form"
git push
git add .
git commit -m "added profile pic"
git push
git add .
git commit -m "content"
git push
git add .
git commit -m "content"
git push
git add .
git commit -m "resume scale"
git push
git add .
git commit -m "resume scale"
git push
git init
git remote add origin https://github.com/bgoonz/Javascript-Best-Practices_--Tools.git
git add .
git commit -m "deploy"
git push
git push -u origin master
git push -u origin master -f
wget --recursive \ # Download the whole site.
wget --recursive \ # Download the whole site.
wget -r https://victoria.dev/blog/
git add .
git commit -m "english dictonary"
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/bgoonz.git
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
npm install
npm audit fix -f
node web2.js
npm run test
npm install --save nightmare
npm install nightmare
node web1.js
node web.js
node web1.js
sudo npm install website-to-json -g
wtj https: //tender-bartik-074feb.netlify.app/
wtj https://tender-bartik-074feb.netlify.app/
node web1.js
npm init -y
npm install website-to-json --save
npm run start:production
npm install
npm install -g npm
npm install use-subscriptionnpm install use-subscription
npm install use-subscription
npm install
git clone https://github.com/relayjs/relay-examples.git
npm install
yarn
prepack VectorWidget.js--out script - processed.js
prepack VectorWidget.js--out script - processed.js
find . -depth -exec rmdir {} \;  
npm install -g prepack
$ npm audit fix
npm install
cd ..
npm install my-react@npm:react
sudo npm install my-react@npm:react
npm i -g recursive-install
sudo service postgresql restart
code .
sudo rm -rf /var/lib/docker
code .
npx create-react-app my-app
sudo npx create-react-app my-app
find . -depth -exec rmdir {} \;
find . -empty -type f -print -delete
tree
tree > keep-tree.md
ll
tree - L 8 > keep-tree.md
tree > keep-tree.md
for file in _.; do tree > tree1.md; done
for file in _.; do tree > tree1.md
for D in `find . -type d`; do tree > tree1.md; done
for D in `find . -type d`; do tree > tree1.md; done
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
npm run start
npm run start
npm-recursive-install
sudo -u postgres psql
npm install postgresql
npm audit fix -f
code .
npm install
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
tree -d -L 6
git add .
git commit -m "initial commit"
git push -u origin master
npm run build
npx create-react-app my-app --use-npm
npm start
git add .
npm run build
npm start
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
git push -u origin master
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git init
git add .
git remote add origin https://github.com/bgoonz/old-c-and-cpp-repos-from-undergrad.git
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git remote add origin https://github.com/gunerb1/create-my-app.git
git push -u origin master
npm run build
npm install -g serve
serve -s build
npm run start
npm install env-cmd --save
npm install -g firebase-tools
code .
git add .
git remote add origin https://github.com/bgoonz/bgoonz.git
git init
git add .
git remote add origin https://github.com/bgoonz/bgoonz.git
git push -u origin master
git push -u origin master -f
npm run start
find . -name "*.zip" -type f -print -delete
npm install
git add .
git commit -m "initial commit"
git push -u origin master
wget -r https://www.darcyclarke.me/
npm run build
npm run publish:ws
npm run release
npm run edit
npm run compress
npm run version
npm run publish:ws
npm run compress
npm run compress
npm run version
npm run compress
npm run version
npm run start
npm run build
npm i recursive-install
npm-recursive-install
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; find . -name "*.zip" -type f -print -delete find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} + git remote add origin https://github.com/gunerb1/octofiles-master.git git init git add . git init git add . git init git add . find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} + find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
find . -name "_.gz" -type f -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE*OF_CONDUCT.md" -o -name "\_CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -size +75M -a -print -a -exec rm -f {} \;
git add .
git commit -m "initial commit"
git add .
git init
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -name "*.tgz" -type f -print -delete
find . -name 'node*modules' -type d -prune -exec rm -rf '{}' +
git init
git add .
git init
git remote add origin https://github.com/bgoonz/sorting-algorithms.git
git add .
git commit -m "no more ini"
git push
git push -u origin master
git push -u origin master -f
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
-name ".gitattributes"
\) -exec rm -rf -- {} +
-name ".gitattributes"
\) -exec rm -rf -- {} +
serve -s build -l 4000
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "_CODE_OF_CONDUCT.md" -o -name "\_CONTRIBUTING.md" \) -exec rm -rf -- {} +
git init
git remote add origin https://github.com/gunerb1/test-dashboard-react.git
git add .
git commit -m "initial commit"
git push
git push -u origin master
git add .
git commit -m "path to index"
git push
git prune
-name ".gitattributes"
\) -exec rm -rf -- {} +
npm run build
git add .
git commit -m "go "
git push
git push -u origin master
npm run start
npm run publish:aom
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/file-serve-git.git
git push -u origin master
npm install
git add .
git commit -m "node modules"
npm run publish:ws
npm run compress
npm run publish:ws
npm run release
git commit -m "github server"
git push
git add .
git commit -m "update and testing"
git push
git add .
git commit -m "repojs"
git push
git add .
git commit -m "embeded repos"
git push
npm install
git init
outube-dl https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8090848#overview
sudo apt install youtube-dl
youtube-dl https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8090848#overview
git add .
git commit -m "initial commit"
npm install create-react-app -g
create react app react-complete-guide --scripts-version 1.1.5
npx create react app react-complete-guide --scripts-version 1.1.5
npm init -y
npm install webpack webpack-cli --save-dev
npm install --save-dev babel-loader @babel/core
npm install @babel/preset-env --save-dev
npx create-react-app my-app
npm install --save-dev nodemon
npm run dev
git add .
npm install --save express pg knex bcrypt
knex migrate:make create-users-table
sudo apt install nvi
knex migrate:make create-users-table
npm install
git add .
npm run dev
npm run test
npm run build
npm run start
npm install
npm run build
npm run start
npm run start
npm insta;;
npm install
git add .
git commit -m "updated resume"
git push
git push -u origin master
git pull
git remote add origin https://github.com/bgoonz/bgoonz.git
git push -u origin master -f
git add .
git commit -m "updated resume"
git push
git add .
git commit -m "hopefully two images side by side"
git push
git add .
git commit -m "markdown image syntax"
git push
git add .
git commit -m "folder structure"
git push
git add .
git commit -m "folder structure"
git push
git add .
git commit -m "folder structure"
git push
git add .
git commit -m "ig videos"
git push
mkdir devhub
cd devhub
git init
git checkout -b 1.0.x
echo "web-dev-resource-hub" > README.txt
git add README.txt
git commit -m "Initial commit."
git remote add origin git@git.drupal.org:project/devhub.git
git push origin 1.0.x
sudo git push origin 1.0.x
git push origin 1.0.x
git pull
git pull git.drupal.org:project/devhub.git
git remote add origin git@git.drupal.org:project/devhub.git
sudo git push origin 1.0.x
git push origin 1.0.x
cd ssh
ll
cd .ssh
ll
code .
cd ..
cd MY-WEB-DEV
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
cd ..
cd mnt
cd c
cd OneDrive
cd Users/
cd bryan
cd OneDrive/
cd Documents/
cd ..
cd Desktop/
cd ..
cd Documents/
cd ..
cd Downloads/
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; find . -name "*.zip" -type f -print -delete git add . git commit -m "page display bug fix" git push git pull git push git add . git commit -m "page display bug fix" git push git add . git commit -m "page display bug fix" git push git add . git commit -m "about me page" git push git add . git commit -m "about me page" git push git add . git commit -m "content update" git push curl -sSL https://www.drupal.org/download-latest/tar.gz | tar -xz --strip-components=1 unzip drupal-9.2.x.zip npm run test npm init -y npm install draft-js react react-dom npm install draft-js react react-dom find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
git remote add https://github.com/eengineergz/node_modules.git
git init
git remote add origin https://github.com/eengineergz/node_modules.git
git add .
npm install --global postcss-cli autoprefixer
npm install
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
npx create-react-app my-app
sudo npx create-react-app my-app
node Startup.cs
npm i concurrently -g
npm install -g concurrently
docker run --name darkwire-redis --rm -p 6379:6379 -d redis redis-server --appendonly yes
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git add .
git commit -m "update"
git push
git add .
git commit -m "update"
git push
git remote add origin https://github.com/bgoonz/mesibo-messenger.git
git init
git add .
git commit -m "hmm"
git add .
git commit -m "hmm"
git push
git init
git add .
git remote add origin https://github.com/bgoonz/mesibo-messenger.git
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.\*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
html="index.html"sudo sed -i '/\.gif/d' ./index.html
git add .
git commit -m "linking"
git push
git add .
git commit -m "linking"
git push
git add .
git commit -m "naming convention established"
git push
git add .
git commit -m "naming convention established"
git push
git add .
git commit -m "naming convention established"
git push
git add .
git init
git add .
git remote add origin https://github.com/bgoonz/mesibo-messenger.git
git add .
git commit -m "initial commit"
git push
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "index linking"
git push
git add .
git commit -m "index linking"
git push
#!/bin/sh

# find ./ | grep -i "\.\*$" >files

find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
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
git add .
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git init
git add .
git remote add origin https://github.com/bgoonz/mesibo-messenger.git
git commit -m "another one"
git push -u origin master
git push -u origin master -f
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
find . -name "_.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "_.zip" -type f -print -delete
git clone https://github.com/mesibo/conferencing
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/Copyright/d' '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/MIT/d' '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/License/d' '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" \) -a -exec sed -i '/author/d' '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" -o -name "_.php" \) -a -exec sed -i '/author/d' '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" -o -name "_.php" \) -a -exec sed -i '/MIT/ '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" -o -name "_.php" \) -a -exec sed -i '/MIT/d '{}' +
find . -type f -a \( -name "_.html" -o -name "_.js" -o -name "_.css" -o -name "_.md" -o -name "_.php" \) -a -exec sed -i '/MIT/d' '{}' +
find . -name '*mesibo' -type f -exec bash -c 'mv "$1" "${1/\/mesibo/chatApp/}"' -- {} \;
find . -name '*mesibo' -type d -exec bash -c 'mv "$1" "${1/\/mesibo/chatApp/}"' -- {} \;
find . -type f -name '_.md' | cpio -p -d -v './..'
for file in _.html; do sed -i '

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>' "$file" &&   echo '</body></html>' >> "$file"; done
find . -type f -name '*.md' | cpio -p -d -v './..'
for file in *.html; do   sed -i `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>` "$file" &&   echo '</body></html>' >> "$file"; done
for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>;' . x | ex "$f"; done
for f in *.html; do printf '%s\n' $a '</body></html>;' . x | ex "$f"; done
for f in *.html; do printf '%s\n' $a '</body></html>' . x | ex "$f"; done
for f in *.html; do printf '%s\n' $a '</body></html>;' . x | ex "$f"; done
sudo for f in *.html; do printf '%s\n' $a '</body></html>;' . x | ex "$f"; done
for f in *.html; do printf '%s\n' $a '.
</body></html>
.
;' . x | ex "$f"; done
echo "</body></html>" | tee -a *.html
find . -type f -name '*.html' | cpio -p -d -v './../'
find . -type f -name '*.md' | cpio -p -d -v './..'\
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
git init
git add .
git remote add origin https://github.com/bgoonz/mesibo-messenger.git
git commit -m "re initial commit lol"
git push -u origin master
git push -u origin master -f
for filename in *mesibo*; do echo mv \"$filename\" \"${filename//mesibo/zumzi}\"; done > rename.md
for filename in *mesibo*; do mv "$filename" "${filename//mesibo/zumzi}"; done
find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" -o -name "*.php" \) -a
-exec sed -i  '/MIT/d' '{}' +
find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" -o -name "*.php" \) -a -exec sed -i  '/MIT/d' '{}' +
find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" -o -name "*.php" \) -a -exec sed -i  '/Copyright/d' '{}' +
find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" -o -name "*.php" \) -a -exec sed -i  '/License/d' '{}' +
