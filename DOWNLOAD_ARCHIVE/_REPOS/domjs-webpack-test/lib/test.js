var domjs = require('domjs/lib/html5')(document, require);

var mydom = domjs.build("./templates/example");

document.body.appendChild(mydom);