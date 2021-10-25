#!/bin/bash

# The MIT License (MIT)
# 
# Copyright (c) 2013 https://gist.github.com/rbf
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of
# this software and associated documentation files (the "Software"), to deal in
# the Software without restriction, including without limitation the rights to
# use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
# the Software, and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
# COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
# IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
# CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


### File info:

GP_VERSION="v1.1-1-g3012ced"
GP_SOURCE="https://gist.github.com/rbf/6064734/raw/generate-pdf"
GP_INSTALL_PATH="/usr/local/bin"

###


echoerr() { echo "$@" 1>&2; }

checkpandoc(){
  if [ "$(which pandoc)" == "" ]
  then
    echoerr "[ERROR] pandoc not found!"
    echoerr "[INFO]  For installing info visit: http://johnmacfarlane.net/pandoc/installing.html"
    exit 1
  fi
}

printversion(){
  echo "$(basename ${0}) ${GP_VERSION}"
  checkpandoc
  echo "$(pandoc --version | head -1)"
}

printhelp(){
cat << EOF
Version:
$(printversion)

Usage:

  $ ./generate-pdf [[option] | [path-pattern [target-path]]]

Examples:

  $ ./generate-pdf --help       Prints this help and exits

  $ ./generate-pdf --version    Prints the version of the script and exits

  $ ./generate-pdf --install    Makes a copy of the script to '/usr/local/bin' and exits

  $ ./generate-pdf --uninstall  Deletes the script from '/usr/local/bin' and exits

  $ ./generate-pdf --update     Updates the script installed in '/usr/local/bin' and exits

  $ ./generate-pdf              All .md and .markdown files in the current directory and its
                                subdirectories are converted in pdf in the  ./target directory,
                                maintaining its original sub-folder structure

  $ ./generate-pdf api          All .md and .markdown files in the current directory and its
                                subdirectories containing "api" (case sensitive) in the  file name or
                                the path are converted in pdf in the  ./target directory, maintaining
                                its original sub-folder structure

  $ ./generate-pdf ./doc/*api   All .md and .markdown files in the "doc/" subdirectory and its
                                subdirectories containing "api" (case sensitive) in the  file name or
                                the path are converted in pdf in the  ./target directory, maintaining
                                its original sub-folder structure

  $ ./generate-pdf api pdfs     All .md and .markdown files in the current directory and its
                                subdirectories containing "api" (case sensitive) in the  file name or
                                the path are converted in pdf in the  ./pdfs directory, maintaining
                                its original sub-folder structure

  $ ./generate-pdf api .        All .md and .markdown files in the current directory and its
                                subdirectories containing "api" (case sensitive) in the  file name or
                                the path are converted in pdf in the  current directory, maintaining
                                its original sub-folder structure, i.e. next to their .md counterparts

  $ ./generate-pdf . .          All .md and .markdown files in the current directory and its
                                subdirectories are converted in pdf in the  current directory,
                                maintaining its original sub-folder structure, i.e. next to their .md
                                counterparts

EOF
}

GP_CURL_BASE="curl -sSL ${GP_SOURCE}"
GP_CURL_INSTALL="bash <(${GP_CURL_BASE}) --install"
GP_CURL_VERSION="bash <(${GP_CURL_BASE}) --version"
GP_INSTALLED_SCRIPT="${GP_INSTALL_PATH}/generate-pdf"

updatescript(){
  if [ ! -e "${GP_INSTALLED_SCRIPT}" ]
  then
    echoerr "[ERROR] ${GP_INSTALLED_SCRIPT} not found"
    echoerr "[INFO]  Run following command to install: ${GP_CURL_INSTALL}"
    exit 1
  fi

  if [ "${GP_VERSION}" == "$(eval "${GP_CURL_VERSION}" | head -1 | sed "s/.*\(v.*\)/\1/")" ]
  then
    echo "Already up-to-date."
    exit 0
  fi
  eval ${GP_CURL_INSTALL}
}

installscript(){
  if [ "${0}" == "${GP_INSTALLED_SCRIPT}" ]
  then
    echo "Already using ${0}"
    exit 0
  fi
  checkpandoc
  if [ -e "${GP_INSTALLED_SCRIPT}" ]
  then
    echo -n "Currently installed: ${GP_INSTALL_PATH}/"
    "${GP_INSTALLED_SCRIPT}" --version | head -1
    echo "You are installing version ${GP_VERSION}." 
    read -p "Do you want to continue? [y/n] " GP_ANSWER
    if [ "${GP_ANSWER:0:1}" == "n" ]
    then
      exit 0
    fi
  fi
  if [ "$(dirname ${0})" == "/dev/fd" ]
  then
    # We are installing from the piped version, and we have to redownload a new version of the file
    # since the current one (often in /dev/fd/63) has already been consumed up to here
    ${GP_CURL_BASE} -o "${GP_INSTALLED_SCRIPT}"
  else
    cp -v "${0}" "${GP_INSTALLED_SCRIPT}"
  fi
  chmod +x "${GP_INSTALLED_SCRIPT}"
  echo "[INFO]  Successfully installed to ${GP_INSTALLED_SCRIPT}"
}

uninstallscript(){
  if [ ! -e "${GP_INSTALLED_SCRIPT}" ]
  then
    echo "[WARN]  ${GP_INSTALLED_SCRIPT} not found"
    exit 0
  fi
  echo "[INFO]  This action will remove ${GP_INSTALLED_SCRIPT}"
  read -p "Do you want to continue? [y/n] " GP_ANSWER
  if [ "${GP_ANSWER:0:1}" == "n" ]
  then
    exit 0
  fi
  rm -v ${GP_INSTALLED_SCRIPT}
  if [ "$?" == 0 ]
  then
    echo "[INFO]  ${GP_INSTALLED_SCRIPT} removed successfully"
  else
    echoerr "[ERROR] Removing ${GP_INSTALLED_SCRIPT} failed"
    exit 1
  fi
}

if [ "${1}" == "--help" ]
then
  printhelp
  exit 0
elif [ "${1}" == "--version" ]
then
  printversion
  exit 0
elif [ "${1}" == "--install" ]
then
  installscript
  exit 0
elif [ "${1}" == "--update" ]
then
  updatescript
  exit 0
elif [ "${1}" == "--uninstall" ]
then
  uninstallscript
  exit 0
elif [ "${1:0:2}" == "--" ]
then
  echo "Invalid option: ${1}"
  echo
  printhelp
  exit 1
fi

checkpandoc

GP_BASE_DIR="$(pwd)"
GP_TARGET_DIR="${2:-target}"

for file in $(find . -type f -path "*${1}*" \( -iname "*.md" -or -iname "*.markdown" \) -print)
do
  echo -n "[INFO]  Processing file: $file "
  GP_CURRENT_DIR=$(dirname "$file")
  GP_CURRENT_FILENAME=$(basename "$file")
  GP_TARGET_CURRENT_DIR="${GP_TARGET_DIR}/${GP_CURRENT_DIR}"
  GP_TARGET_CURRENT_FILEPATH="${GP_TARGET_CURRENT_DIR}/$(basename "$file" ".md").pdf"
  # Remove unnecessary (but not wrong) "/./" from path for enhanced prompt in stdout
  GP_TARGET_CURRENT_FILEPATH="${GP_TARGET_CURRENT_FILEPATH/\/.\///}"
  GP_TARGET_CURRENT_FILEPATH="./${GP_TARGET_CURRENT_FILEPATH#./}"
  mkdir -p ${GP_TARGET_CURRENT_DIR}
  # Since pandoc looks for images relatives to where it is called (https://github.com/jgm/pandoc/issues/917)
  # we have to cd into the directory of the given file before pandoc'ing it,
  # and we have to pass the full path in the -o parameter.
  cd "${GP_CURRENT_DIR}"
  GP_PANDOC_OUTPUT=$(pandoc --toc --number-sections "${GP_CURRENT_FILENAME}" -o ${GP_BASE_DIR}/${GP_TARGET_CURRENT_FILEPATH#./} 2>&1) # to capture pandoc stderr output
  if [ "$?" == 0 ]
  then
    echo "--> ${GP_TARGET_CURRENT_FILEPATH}"
  else
    echo -e "\r[ERROR] Processing file: $file - Detail below"
    GP_ERRORS+=("$(echo -e "[ERROR] ${file} - Failed generation of PDF\n[ERROR] Expected target file: ${GP_TARGET_CURRENT_FILEPATH}\n[ERROR] ${GP_PANDOC_OUTPUT}\n\n\n")")
  fi
  cd "${GP_BASE_DIR}"
done

if [ ${#GP_ERRORS[@]} -eq 0 ]
then
  exit 0
fi

echoerr
echoerr "[ERROR] ===================================================================="
echoerr "[ERROR] pandoc failed to generate PDF for ${#GP_ERRORS[@]} file(s)"
echoerr "[ERROR] ===================================================================="

for i in "${GP_ERRORS[@]}"
do
  echoerr
  echoerr "${i}"
  echoerr
done

exit 1
