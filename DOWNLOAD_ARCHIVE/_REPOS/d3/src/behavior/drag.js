var D3CoreEvent = require("../core/event"),
    D3 = require("../core/core"),
    d3_eventDispatch = D3CoreEvent._eventDispatch,
    d3_window = D3._window,
    d3_eventCancel = D3CoreEvent._eventCancel,
    D3Select = require("../core/selection-root"),
    D3Touches = require("../core/touches"),
    D3Mouse = require("../core/mouse"),
    D3Rebind = require("../core/rebind");

var D3BehaviorDrag = function() {
  var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
      origin = null;

  function drag() {
    this.on("mousedown.drag", mousedown)
        .on("touchstart.drag", mousedown);
  }

  function mousedown() {
    var target = this,
        event_ = event.of(target, arguments),
        eventTarget = D3.event.target,
        touchId = D3.event.touches ? D3.event.changedTouches[0].identifier : null,
        offset,
        origin_ = point(),
        moved = 0;

    var w = D3Select(d3_window)
        .on(touchId != null ? "touchmove.drag-" + touchId : "mousemove.drag", dragmove)
        .on(touchId != null ? "touchend.drag-" + touchId : "mouseup.drag", dragend, true);

    if (origin) {
      offset = origin.apply(target, arguments);
      offset = [offset.x - origin_[0], offset.y - origin_[1]];
    } else {
      offset = [0, 0];
    }

    // Only cancel mousedown; touchstart is needed for draggable links.
    if (touchId == null) d3_eventCancel();
    event_({type: "dragstart"});

    function point() {
      var p = target.parentNode;
      return touchId != null
          ? D3Touches(p).filter(function(p) { return p.identifier === touchId; })[0]
          : D3Mouse(p);
    }

    function dragmove() {
      if (!target.parentNode) return dragend(); // target removed from DOM

      var p = point(),
          dx = p[0] - origin_[0],
          dy = p[1] - origin_[1];

      moved |= dx | dy;
      origin_ = p;
      d3_eventCancel();

      event_({type: "drag", x: p[0] + offset[0], y: p[1] + offset[1], dx: dx, dy: dy});
    }

    function dragend() {
      event_({type: "dragend"});

      // if moved, prevent the mouseup (and possibly click) from propagating
      if (moved) {
        d3_eventCancel();
        if (D3.event.target === eventTarget) w.on("click.drag", click, true);
      }

      w .on(touchId != null ? "touchmove.drag-" + touchId : "mousemove.drag", null)
        .on(touchId != null ? "touchend.drag-" + touchId : "mouseup.drag", null);
    }

    // prevent the subsequent click from propagating (e.g., for anchors)
    function click() {
      d3_eventCancel();
      w.on("click.drag", null);
    }
  }

  drag.origin = function(x) {
    if (!arguments.length) return origin;
    origin = x;
    return drag;
  };

  return D3Rebind(drag, event, "on");
};

module.exports = D3BehaviorDrag;
