// return the index of the first occurence of needle in haystack, or -1 if needle is not part of haystack
// **should ask what to do if needle is empty => in this case, we'll return 0

/*
  Example:
    Input: Haystack: "hello", Needle: "ll"
    Output: 2

    Input: Haystack: "aaaaa", Needle: "bba"
    Output: -1
*/

function needleInHaystack(haystack, needle) {
  if (!needle.length) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let check = haystack.slice(i, i + needle.length);
      if (check.includes(needle)) return i
    }
  }

  return -1
}

console.log(needleInHaystack("mississippi", "issip"))