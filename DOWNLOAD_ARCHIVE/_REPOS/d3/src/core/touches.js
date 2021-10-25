var d3_eventSource = require("./event")._eventSource,
    d3_array = require("./array")._array,
    d3_mousePoint = require("./mouse")._mousePoint;

var D3Touches = function(container, touches) {
  if (arguments.length < 2) touches = d3_eventSource().touches;
  return touches ? d3_array(touches).map(function(touch) {
    var point = d3_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
  }) : [];
};

module.exports = D3Touches;
