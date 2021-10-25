function replace() {
  var input = document.getElementById("input").value;
  var output = input.replace(/"/g, "'");
  document.getElementById("output").value = output;
}
