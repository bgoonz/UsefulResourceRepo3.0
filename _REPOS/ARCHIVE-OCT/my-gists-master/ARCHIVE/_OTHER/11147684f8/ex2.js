// using native promises

var domready;

Promise.all([
  new Promise(function (resolve) {
    domready = resolve;
  }),
  requestJSON("foo.json"),
  requestJSON("bar.json"),
])
  .then(transformJSONs)
  .then(uploadJSON)
  .then(displayRecords)
  .catch(handleError);

$(document).ready(domready);
