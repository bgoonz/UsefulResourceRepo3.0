// i have a depedency, so i need to have a loader wrapping me
import_scripts(["baz.js"], function () {
  alert("foo.js is loaded, including baz.js");
  // put the payload for foo.js
});
