/* Given a list of directory info including file path, and all files with contents
in the directory, find all groups of duplicate files
* duplicate files are at least 2 with the same content
*/

var findDuplicate = function(paths) {
  let files = {};

  for (let directories of paths) {
    for (let i = 1, files = directories.split(" "); i < files.length; i++) {
      let paren = files[i].indexOf("(")
      let content = files[i].slice(paren + 1, files[i].length - 2)
      files[content] = files[content] || []
      files[content].push(files[0] + '/' + files[i].slice(0, paren))
    }
  }
  return Object.values(files).filter(dups => dups.length > 1)
}

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]));


