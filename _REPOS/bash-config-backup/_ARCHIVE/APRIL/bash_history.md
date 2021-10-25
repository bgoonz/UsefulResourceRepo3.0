`apt list --installed`

`dpkg --get-selections | grep -v deinstall`

`dpkg --get-selections > list.txt`

`sudo apt-get autoremove`

`sudo apt-get dselect-upgrade`

`dpkg-query -W -f='${PackageSpec} ${Status}\n' | grep installed | sort -u | cut -f1 -d \ > installed-pkgs`

`dpkg -l | grep ^ii | sed 's_ _\t_g' | cut -f 2 > installed-pkgs`

`sudo apt update`

`sudo apt update --force`

`su`

`sudo apt-clone clone path-to/apt-clone-state-ubuntu-$(lsb_release -sr)-$(date +%F).tar.gz`

`sudo apt-clone clone ./apt-clone-state-ubuntu-$(lsb_release -sr)-$(date +%F).tar.gz`

`find . -depth -exec rmdir {} \; `

`apt-mark showmanual`

`ll`

`cd ..`

`..`

`cd MY-WEB-DEV`

`cd temp`

`.\vcpkg\bootstrap-vcpkg.bat`

`npm install`

`sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 5C808C2B65558117`

`find . -empty -type f -print -delete`

`find . -empty -type d -print -delete`

`lebab --replace ./ --transform obj-method`

`lebab --replace ./ --transform class`

`lebab --replace ./ --transform arrow`

`lebab --replace ./ --transform let`

`lebab --replace ./ --transform arg-spread`

`lebab --replace ./ --transform arg-rest`

`lebab --replace ./ --transform for-each`

`python3 pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`

`sudo apt purge python2.x-minimal`

`# Remove python2`

`sudo apt purge -y python2.7-minimal`

`sudo ln -s /usr/bin/python3 /usr/bin/python`

`sudo apt install -y python3-pip`

`sudo ln -s /usr/bin/pip3 /usr/bin/pip`

`python --version`

`. /bin/activate`

`` find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done; ``

`find . -name "*.zip" -type f -print -delete`

`find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +`

`find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +`

`node filerTests.js `

`#!/bin/sh`

`if [ ! -f "github-top" ]; then curl -L -O https://github.com/lauripiispanen/most-active-github-users-counter/releases/download/v1.21/github-top.cgo_disabled; mv github-top.cgo_disabled github-top; chmod u+x github-top; fi`

`OUTPUT_FILE_NAME=$(echo "$2" | sed 's/ /_/')`

`./github-top --token "$1" --preset "$2" --output yaml --file "$OUTPUT_FILE_NAME.yml"`

`echo "page: $OUTPUT_FILE_NAME.html\ntitle: $3" | cat - "$OUTPUT_FILE_NAME.yml" > "_data/locations/$OUTPUT_FILE_NAME.yml"`

`echo "---\ntype: location\nlocation: $OUTPUT_FILE_NAME\nmode: commits\n---" > "$OUTPUT_FILE_NAME.md"`

`echo "---\ntype: location\nlocation: $OUTPUT_FILE_NAME\nmode: all\n---" > "${OUTPUT_FILE_NAME}_private.md"`

`echo "---\ntype: location\nlocation: $OUTPUT_FILE_NAME\nmode: contributions\n---" > "${OUTPUT_FILE_NAME}_public.md"`

`npm install locate-path`

`npm start`

`./vcpkg/bootstrap-vcpkg.sh`

`./bootstrap-vcpkg.sh`

`cmake -B [build directory] -S . -DCMAKE_TOOLCHAIN_FILE=[path to vcpkg]/scripts/buildsystems/vcpkg.cmake`

`sudo apt install cmake`

`sudo apt-get install build-essential tar curl zip unzip`

`git clone https://github.com/microsoft/vcpkg`

`npm i --save lodash`

`git init`

`git add .`

`babel --plugins transform-ternary-to-if-else replace.js`

`sudo apt install babel`

`npm install babel`

`lebab --replace ./ --transform for-of`

`lebab --replace ./ --transform commonjs `

`lebab --replace ./ --transform exponent`

`lebab --replace ./ --transform multi-var`

`lebab --replace ./ --transform template`

`lebab --replace ./ --transform default-param`

`lebab --replace ./ --transform destruct-param `

`lebab --replace ./ --transform includes`

`npm init`

`npm install loadash`

`node election.js`

`npm install underscore`

`npm i underscore`

`cat README.md* | codedown javascript > code.js`

`cat README.md | codedown javascript | node >code.js`

`cat README.md | codedown javascript | node `

`cat README.md | codedown javascript `

`codedown javascript README.md > out.js`

. `npm i babel-plugin-transform-ternary-to-if-else`

. `git commit -m "initial commit"`

. `git remote add origin https://github.com/bgoonz/loadash-es6-refactor.git`

. `git push -u origin master`

. `npm init `

. `git commit -m "package.json"`

. `git push `

. `npm login`

. `npm publish`

. `node Runkit-ds-algo-dynamic.js`

. `python3 get-gists.py bgoonz`

. `git commit -m "coderpad"`

. `git pul`

. `git pull`

. `sed -n '/^`/,/^`/ p' < README.md`

. `sed -n '/^`/,/^`/ p' < README.md >`

. `sed -n '/^`/,/^`/ p' < README.md > README-code.js`

. `find . -name "*.\.js\.download" -exec rename 's/\.js\.download$/.js/' '{}' +`

. `rename 's/\.js\.download$/.js/' *.js\.download `

. `git commit -m "update and cleanup"`

. `git pull -s recursive -X theirs https://github.com/bgoonz/Medium_Articles.git`

. `git pull -f`

. `git commit -m "merge"`

. `# find ./ | grep -i "\.*$" >files`

. `find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files`

. `listing="files"`

. `out=""`

. `html="index.html"`

. `out="basename $out.html"`

. `cmd() { echo ' <!DOCTYPE html>'; echo '<html>'; echo '<head>' echo ' <meta http-equiv="Content-Type" content="text/html">' echo ' <meta name="Author" content="Bryan Guner">'; echo '<link rel="stylesheet" href="./assets/prism.css">'; echo ' <link rel="stylesheet" href="./assets/style.css">'; echo ' <script async defer src="./assets/prism.js"></script>' echo " <title> directory </title>" echo ""; echo '<style>' echo ' a {'; echo ' color: black;'; echo ' }'; echo ''; echo ' li {'; echo ' border: 1px solid black !important;'; echo ' font-size: 20px;'; echo ' letter-spacing: 0px;'; echo ' font-weight: 700;'; echo ' line-height: 16px;'; echo ' text-decoration: none !important;'; echo ' text-transform: uppercase;'; echo ' background: #194ccdaf !important;'; echo ' color: black !important;'; echo ' border: none;'; echo ' cursor: pointer;'; echo ' justify-content: center;'; echo ' padding: 30px 60px;'; echo ' height: 48px;'; echo ' text-align: center;'; echo ' white-space: normal;'; echo ' border-radius: 10px;'; echo ' min-width: 45em;'; echo ' padding: 1.2em 1em 0;'; echo ' box-shadow: 0 0 5px;'; echo ' margin: 1em;'; echo ' display: grid;'; echo ' -webkit-border-radius: 10px;'; echo ' -moz-border-radius: 10px;'; echo ' -ms-border-radius: 10px;'; echo ' -o-border-radius: 10px;'; echo ' }'; echo ' </style>'; echo '</head>' echo '<body>' echo "" echo "" echo "" echo "<ul>" awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing echo "" echo "</ul>" echo "</body>" echo "</html>" }`

. `cmd $listing --sort=extension >>$html`

. `sudo sed -i '/\.html/!d' ./index.html`

. `git commit -m "folder structure`

. `"`

. `git commit -m "formatted html"`

. `tree -d >README.md`

. `tree -d -L 5 >README.md`

. `tree -L 5 >README.md`

. `git commit -m "readme"`

. `find ./ -mindepth 2 -type f -exec mv -t ./ --backup=t '{}' +`

. `find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;`

. `for f in *.html; do printf '%s\n' 0a '<!DOCTYPE html>`

. `<html lang="en">`

. ```<head>

. ` `<meta charset="UTF-8">

` `<meta name="viewport" content="width=device-width, initial-scale=1.0">

` `<title>Document</title>

````



. ```<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">```



. ```<link rel="stylesheet" href="./prism.css">```



. ```<script async defer src="./prism.js"></script>```



. ```</head>```



. ```<body>;' . x | ex "$f"; done```



. ```echo "</body></html>" | tee -a *.html```



. ```sudo sed -i '/right\.html/d' ./index.html```



. ```for f in * ; do    mv "$f" "$f.md"; done```



. ```find . -type f -exec mv '{}' '{}'.md \;```



. ```httrack https://apply.lambdaschool.com/courses/web/```



. ```httrack https://en.wikipedia.org/wiki/List_of_lists_of_lists```



. ```git clone "https://gerrit.wikimedia.org/r/labs/tools/VideoCutTool"   # clone front-end```



. ```cd ./VideoCutTool                                                    # move to front-end directory```



. ```npm install                                                          # install node dependencies```



. ```google-chrome http://localhost:3000         ```



. ```git commmit -m "initial commit"```



. ```git remote add origin https://github.com/bgoonz/BackgroundImages.git```



. ```npm i docsify-cli -g```



. ```sudo apt upgrade```



. ```find . -size +75M -a -exec rm -f {} \;```



. ```git```



. ```mke```



. ```make```



. ```git remote add origin https://github.com/bgoonz/Lambda-Repo-Resources.git```



. ```npm i -g jest-cli```



. ```git remote prune origin```



. ```git gc```



. ```git fsck --full```



. ```git reflog expire --expire=0 --all```



. ```git update-ref -d 0d998c99b6d01e8aabca72b1934802acf90b8fc9```



. ```git gc --aggressive```



. ```git remote update --prune```



. ```git commit -m "I love github but this repo is causing hair loss"```



. ```git commit -m "ughhhhhhhhhh"```



. ```git push -u origin master -f```



. ```git rm --cached 2-content/awesome-resources/Cumulative-Resource-List-master```



. ```git commit -m "fixing submodule deployment bug"```



. ```git commit -m "please deploy"```



. ```git commit -m "deploy"```



. ```git commit -m "please pease just work"```



. ```httrack https://flounder-flower-xpaw.squarespace.com/```



. ```git clone  https://github.com/bgoonz/ecommerce-interactive.git```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://flounder-flower-xpaw.squarespace.com/config/settings/domains/flounder-flower-xpaw.squarespace.com```



. ```git commit -m "update"```



. ```git remote remove origin```



. ```cd ecommerce-interactive```



. ```git commit -m "content update"```



. ```git commit -m "not initial commit"```



. ```sudo sed -i '/This is Squarespace/d' ./*.html```



. ```sudo sed -i '/\<\!\-\- flounder\-flower\-xpaw \-\-\>/d' ./*.html```



. ```sudo sed -i '/flounder\-flower\-xpaw/d' ./*.html```



. ```sudo sed -i '/Added by HTTrack/d' ./*.html```



. ```pandoc *.html >/ALL.html```



. ```sudo pandoc *.html >/ALL.html```



. ```$ cat * > merged-file```



. ```$ cat *html > merged-file.html```



. ```cat *html > merged-file.html```



. ```cat *.html > merged-file.html```



. ```git push```



. ```git commit -m "format"```



. ```npm install -g create-react-app```



. ```create-react-app hello-world```



. ```cd hello-world```



. ```npm run build```



. ```npm install netlify-cli -g```



. ```git commit -m "react on netlify"```



. ```git remote add origin https://github.com/bgoonz/react-netlify-deploy.git```



. ```npm i -g eslint```



. ```wget -r https://thepiratebay.org/search.php?q=user:tuts756```



. ```httrack https://thepiratebay.org/search.php?q=user:tuts756```



. ```sudo httrack --ext-depth=4 https://thepiratebay.org/search.php?q=user:tuts756```



. ```sudo httrack --ext-depth=4 https://product.directredirection.com/smartprice/indexDDD.php?p=919824&v=399#smartpricepower@gmail.comlhjonckbjkggopmliabjfmdfhcoinhgc```



. ```cd sandbox```



. ```lebab --replace ./ --transform includeslebab --replace ./ --transform obj-method```



. ```eeslint file1.js file2.js```



. ```eslint file1.js file2.js```



. ```eslint index.js```



. ```eslint parse.js```



. ```npminstall eslint```



. ```sudo apt install eslint```



. ```unzip```



. ```find ./ -type f -name *.tar.gz -exec tar -xf {} \;```



. ```git commit -m "right folder"```



. ```find -name "* *" -type d | rename 's/ /_/g'    # do the directories first```



. ```find -name "* *" -type f | rename 's/ /_/g'```



. ```pandoc *.html>  ./OUTPUT.html```



. ```git checkoout```



. ```checkout```



. ```git checkout```



. ```cd Medium_Articles/```



. ```git git ```



. ```code .```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://soybean-tulip-em56.squarespace.com/```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://bryans-spectacular-project-fae067.webflow.io/ ```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off http://creado-template.webflow.io/v1/works```



. ```httrack https://bryans-spectacular-project-fae067.webflow.io/```



. ```httrack https://soybean-tulip-em56.squarespace.com/```



. ```httrack http://creado-template.webflow.io/v1/works```



. ```git push  -u origin master```



. ```git push  -u origin master -f```



. ```find . -type f -exec rename 's/MASTER//g' {} +```



. ```find . -type f -exec rename 's/master//g' {} +```



. ```awk '{gsub(" ","",$0); print $0;}' *```



. ```awk '{gsub(regex, substitution_text, $field#); print $0;}' *```



. ```wget -r https://soybean-tulip-em56.squarespace.com/config/```



. ```find . ! -name '.*' ! -type d -exec rm -- {} +```



. ```find FOLDER -type f -delete```



. ```find . ! -type d -exec rm '{}' \;```



. ```npm install -g npm```



. ```httrack --ext-depth=1 https://flounder-flower-xpaw.squarespace.com/```



. ```httrack --ext-depth=2 https://flounder-flower-xpaw.squarespace.com/```



. ```git commit -m "cleanup"```



. ```find . -type f -exec sed -i '/Clone the project from/d' ./*.html {} \; ```



. ```git init ```



. ```git remote add origin https://github.com/bgoonz/norwex-split-testing.git```



. ```wget -r --no-parent https://soybean-tulip-em56.squarespace.com/```



. ```wget -4 https://soybean-tulip-em56.squarespace.com/```



. ```wget -r https://soybean-tulip-em56.squarespace.com/```



. ```wget --user=bryan.guner.dev@gmail.com -password=R6A3J5JX57M3O5HRAYNGKJ3Z2R2UUVIG -r https://soybean-tulip-em56.squarespace.com/```



. ```curl https://soybean-tulip-em56.squarespace.com/```



. ```wget -r -np -k https://soybean-tulip-em56.squarespace.com/```



. ```for file in $(curl -s https://soybean-tulip-em56.squarespace.com/ |



            1. ```  ```grep href |







            1. ```  ```sed 's/.*href="//' |







            2. ```  ```sed 's/".*//' |







            3. ```  ```grep '^[a-zA-Z].*'); do     curl -s -O https://soybean-tulip-em56.squarespace.com//$file; done



             1. ```



. ```wget      --recursive      --no-clobber      --page-requisites      --html-extension      --convert-links      --restrict-file-names=windows      --domains website.org      --no-parent \ ```



. ```wget      --recursive      --no-clobber      --page-requisites      --html-extension      --convert-links      --restrict-file-names=windows      --domains website.org      --no-parent       https://soybean-tulip-em56.squarespace.com/config/pages```



. ```wget      --recursive      https://soybean-tulip-em56.squarespace.com/config/pages```



. ```wget -r -A.html https://soybean-tulip-em56.squarespace.com/config/pages```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://soybean-tulip-em56.squarespace.com/home```



. ```rm -r```



. ```rm -rd```



. ```rm -rf```



. ```explorer.exe .```



. ```npm install -g modernizr```



. ```python3 get-gists.py Colt```



. ```rm -rf *```



. ```npm run serve```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://az-aurora.webflow.io/```



. ```wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://brian-miller.webflow.io/```



. ```npm install recursive```



. ```npm-recursive-install```



. ```python3 get-gists.py joe-alves```



. ```python3 get-gists.py gardensgreen```



. ```python3 get-gists.py```



. ```python3 get-gists.py cynthiaspence7827```



. ```python3 get-gists.py alimirakim```



. ```python3 get-gists.py Erick-Bravo```



. ```python3 get-gists.py DerekInhoKim```



. ```python3 get-gists.py gootieno```



. ```python3 get-gists.py bartdorsey```



. ```python3 get-gists.py ericelliott```



. ```python3 get-gists.py noelbundick```



. ```python3 get-gists.py jhnns```



. ```python3 get_gists.py anders```



. ```python3 get-gists.py anders```



. ```python3 get-gists.py E-Bo```



. ```npx @appnest/readme generate```



. ```rm-rf *```



. ```modernizr -c modernizr-config.json```



. ```tree > README.md```



. ```git remote add origin https://github.com/bgoonz/mini-project-showcase.git```



. ```git push -u  origin master```



. ```ls -R './' | awk '```



. ```/:$/&&f{s=$0;f=0}```



. ```/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}```



. ```NF&&f{ print s"/"$0 }'>listing.md```



. ```find / -iname "*.htm" -o -iname "*.html" >listing.md```



. ```find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +```



. ```setopt extendedglob nullglob```



. ```for pathname in /**/*(/e{'[[ -n $REPLY/(#i)*.htm(l#)(#q.) ]]'}); do     printf '%s:\n' $pathname;     ls -l $pathname; done```



. ```git remote add origin https://github.com/bgoonz/Project-Showcase.git```



. ```git commit -m "directory structure"```



. ```git commit -m "deleted broken project"```



. ```git commit -m "refactored chess to have less repeating code"```



. ```git commit -m "refactored chess to be more compact"```



. ```pyhton3 get-gists.py bgoonz```



. ```find . \( -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +```



. ```find . \( -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +```



. ```node appender.js```



. ```npm init -y```



. ```find . -type f -exec sed -i '/Blog at WordPress/d' ./* {} \;```



. ```find . -iname '*\.html' -type f -exec sed -i '/Blog at WordPress/d' ./* {} \;```



. ```sudo sed -i '/Blog at WordPress/d' ./index.html```



. ```sudo sed -i '/Blog at WordPress/d' ./*.html```



. ```function RecurseDirs () {     oldIFS=$IFS;     IFS=$'\n';     for f in "$@";     do   ```



. ```sudo sed -i '/Blog at WordPress/d' ./*.html              if [[ -d "${f}" ]]; then             cd "${f}";             RecurseDirs $(ls -1 ".");             cd ..;         fi;     done;     IFS=$oldIFS; }```



. ```RecurseDirs "./"```



. ```npm install webpack webpack-cli --save-dev```



. ```npx webpack```



. ```npm install --save lodash```



. ```git add  .```



. ```sudo apt-get update```



. ```sudo apt-get install apache2```



. ```sudo apt-get install curl```



. ```sudo apt-get install php libapache2-mod-php php-mysql```



. ```sudo apt-get install php7.1-zip # (Replace version number with whatever version you want)```



. ```sudo apt-get install php7.1-gd # (Replace version number with whatever version you want)```



. ```sudo apt-get install php-curl```



. ```find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;```



. ```git remote add origin https://github.com/bgoonz/TexTools.git```



. ```git commit -m "dark-theme styling```



. ```'```



. ```npm i magic-string```



. ```git commit -m "major update... and spectrogram music lab"```



. ```tree -L 4 >README.md```



. ```git commit -m "services and blog under construction"```



. ```git inti```



. ```git commit -m "fixed twitter link"```



. ```git commit -m "formatting"```



. ```find . -type f -exec sed -i '/ Created by <span class=\x27author\x27>/d' ./*.html {} \; ```



. ```find . -type f -exec sed -i '/Created by/d' ./*.html {} \; ```



. ```git remote add origin https://github.com/bgoonz/GIT-HTML-PREVIEW-TOOL.git```



. ```git checkout --orphan gh-pages```



. ```git reset --hard```



. ```git commit --allow-empty -m "Initializing gh-pages branch"```



. ```git commit -m "gh pages"```



. ```git push origin gh-pagesgit push origin gh-pages```



. ```git push -u origin gh-pages```



. ```git commit -m "readme```



. ```git commit -m "readme and styling"```



. ```git commit -m "demo readme"```



. ```sudo ```



. ```sudo pandoc *./html > ALL.html```



. ```sudo pandoc *.html > ALL.html```



. ```cat ./*.html > ./combined.html```



. ```lebab --replace ./ --transform arrow\```



. ```lebab --replace ./ --transform arrow-return```



. ```git iinit```



. ```git remote add origin https://github.com/bgoonz/TetrisJS.git```



. ```git commit -m "refactor"```



. ```npm install honkit```



. ```cd site_demo-master/```



. ```npx honkit serve```



. ```find ./ -iname "*.html" -type f -exec sh -c 'sed "/\<script type=\"application/ld+json\"\>\n\{\"description\":/d" *.html' {} \; >testOut.html```



. ```sudo sed -i '/\<script type=\"application/ld+json\"\>\n\{\"description\":/d' ./index.html```



. ```find . -type f -exec sed -i '/\<script type=\"application/ld+json\"\>\n\{\"description\":/d' ./* {} \;```



. ```find . -type f -exec sed -i '/\<script type=\"application/ld+json\"\>\n\{\"description/d' ./* {} \;```



. ```sudo sed -i '/\<script type=/d' *.html```



. ```sudo sed -i '/\{\"description/d' *.html```



. ```sudo sed -i '/\{"description/d' *.html```



. ```sudo sed -i '/Interactive algorithms/d' *.html```



. ```sudo sed -i '/iframe class="algorithm"/d' *.html```



. ```sudo sed -i '/meta name="description"/d' *.html```



. ```sudo sed -i '/property="og:description" /d' *.html```



. ```sudo sed -i '/description/d' *.html```



. ```pandoc -s *.html > output.html```



. ```git remote add origin https://github.com/bgoonz/web-dev-utils-package.git```



. ```npm publish ```



. ```git commit -m "updated readme"```



. ```yarn add jquery```



. ```npm install jquery```



. ```npm install mout```



. ```npm i loadashes6```



. ```git commit -m "hi"```



. ```git commit -m "formatting cleanup and new content"```



. ```git commit -m "favicon.ico"```



. ```git commit -m "image loader"```



. ```sudo sed -i '/\/\/ Date   :/d' *.js```



. ```sudo sed -i '/Date      /d' *.js```



. ```git commit -m "github = free cloud storage"```



. ```sudo sed -i '/Mirrored from/d' ./*.html```



. ```sudo sed -i '/Last updated on /d' ./*.html```



. ```sudo sed -i '/Found a bug/d' ./*.html```



. ```sudo sed -i '/The Python Software Foundation is a non-profit corporation/d' ./*.html```



. ```sudo sed -i '/Please donate/d' ./*.html```



. ```sudo sed -i '/Multimedia Services/d' ./*.html```



. ```sudo sed -i '/  Created using/d' ./*.html```



. ```Summer2015```



. ```sudo sed -i '/Python Software Foundation/d' ./*.html```



. ```sudo sed -i '/Networking and Interprocess Communication/d' ./*.html```



. ```git commit -m "update content"```



. ```git commit -m "update-folder-names"```



. ```npm i web-dev-utils```



. ```npm run test```



. ```git commit -m "production ready"```



. ```npm install node-fetch```



. ```node app.js```



. ```const fetch = require('node-fetch');



. ```(a```sync () => {



````

. `npm run start`

. `npx @docusaurus/init@latest init my-website classic`

. `npm audit fix -f`

. `tree `

. `npm install --force`

. `git pull -s recursive -X theirs https://github.com/bgoonz/React_Notes_V3.git`

. `git pull -u origin master`

. `git pull `

. `git clone https://github.com/bgoonz/React_Notes_V3.git`

. `git remote add origin https://github.com/bgoonz/web-crawler-node.git`

. `node scrape.js`

. `node scrape_genus.js `

. `git commit -m "navigation bug fixed"`

. `set -e`

. `if [ $# -eq 0 ]; then dir="."; else dir="$1"; fi`

. `if [ ! -d "$dir" ]; then echo "not a dir: $dir"; exit 1; fi`

. `if [ ! -d "$dir/.git" ]; then echo "not a git repo: $dir"; exit 1; fi`

. `cd "$dir"`

. `files=$(find .git/refs -type f)`

. `for f in $files; do id=$(cat "$f"); if ! git rev-parse --quiet "$id" >/dev/null 2>&1; then continue; fi; if ! git rev-parse --quiet --verify "$id^{commit}" >/dev/null 2>&1; then echo "Removing ref $f with missing commit $id"; rm "$f"; fi; done`

. `if [ ! -f .git/packed-refs ]; then exit 0; fi`

. ```packfiles=$(cat .git/packed-refs \

. ` `| grep -v '#' \

. ` `| awk '{print $2}')

1. ```

   ```

. `for f in $packfiles; do if ! git rev-parse --quiet --verify "$f" >/dev/null 2>&1; then continue; fi; id=$(git rev-parse "$f"); if ! git rev-parse --quiet --verify "$id" >/dev/null 2>&1; then continue; fi; if ! git rev-parse --quiet --verify "$id^{commit}" >/dev/null 2>&1; then echo "Removing packed ref $f with missing commit $id"; git update-ref -d $f; fi; done`

. `git commit -m "please please please"`

. `heroku login`

. `heroku deploy`

. `git push heroku master`

. `heroku create`

. `git remote -v`

. `wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://designer-portfolio-template.webflow.io/`

. `find . -type f -exec sed -i '/This site was created in Webflow/d' ./*.html {} \; `

. `find . -type f -exec sed -i '/Last Published/d' ./*.html {} \; `

. `git remote add origin https://github.com/bgoonz/Knowledge-Bank.git`

. `git commit -m "initial commit "`

. `git commit -m "first session"`

. `git commit -m "views counter"`

. `git commit -m "javascript examples`

. `sudo sed -i '/walkthrough/d' ./*.html`

. ```find . -type f -exec sed -i '/walkthrough/d' ./\* {} \;
