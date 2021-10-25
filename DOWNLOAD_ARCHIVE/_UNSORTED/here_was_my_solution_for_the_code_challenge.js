function vowelCount(str) {
  // in the end i went with a one liner 
  //after reading up on a few more bits of regex
  // replace any non vowel with an empty String
  // then return the length
return str.replace(/[^aeiou]/gi, "").length;
}
