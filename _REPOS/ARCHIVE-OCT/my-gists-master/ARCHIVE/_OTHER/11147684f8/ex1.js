// using asynquence+iterable sequences

var domready;

ASQ()
  // wait for `domready` before we proceed
  .seq((domready = ASQ.iterable()))
  .gate(requestJSON("foo.json"), requestJSON("bar.json"))
  .val(transformJSONs)
  .seq(uploadJSON)
  .seq(displayRecords)
  .or(handleError);

$(document).ready(domready.next);
