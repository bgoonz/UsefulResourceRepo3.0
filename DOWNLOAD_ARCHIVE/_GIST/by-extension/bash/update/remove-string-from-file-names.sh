for filename in *badString*; do mv "$filename" "${filename//badstring/replaceString}"; done
