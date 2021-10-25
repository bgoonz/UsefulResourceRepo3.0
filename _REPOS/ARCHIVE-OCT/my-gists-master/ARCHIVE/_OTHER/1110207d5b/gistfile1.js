// do the hack
document.childNodes[1].style.width = "100%"; // set the HTML to 100%/100%
document.childNodes[1].style.height = "100%";
document.body.style.width = "100%"; // set the <body> to 100%/100%
document.body.style.height = "100%";

var viewportDimsHack = this.treeBrowserDocument.createElement("div");
viewportDimsHack.style.position = "fixed";
viewportDimsHack.style.left = "0px";
viewportDimsHack.style.top = "0px";
viewportDimsHack.style.width = "100%";
viewportDimsHack.style.height = "100%";
document.body.appendChild(viewportDimsHack);

// get the viewport width/height
var viewportWidth = viewportDimsHack.offsetWidth;
var viewportHeight = viewportDimsHack.offsetHeight;

// undo the hack
document.body.removeChild(viewportDimsHack);

document.childNodes[1].style.width = "";
document.childNodes[1].style.height = "";
document.body.style.width = "";
document.body.style.height = "";
