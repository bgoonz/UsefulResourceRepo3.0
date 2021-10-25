var d3_arraySubclass = require("./array")._arraySubclass,
    d3_ease_cubicInOut = require("./ease")._cubicInOut,
    d3_selectionPrototype = require("./selection")._selectionPrototype,
    d3_selectionRoot = require("./selection-root")._selectionRoot,
    d3_Map = require("./map")._Map,
    D3Dispatch = require("./dispatch"),
    D3Timer = require("./timer");

function d3_transition(groups, id) {
  d3_arraySubclass(groups, d3_transitionPrototype);

  groups.id = id; // Note: read-only!

  return groups;
}

var d3_transitionPrototype = [],
    d3_transitionId = 0,
    d3_transitionInheritId,
    d3_transitionInherit = {ease: d3_ease_cubicInOut, delay: 0, duration: 250};

d3_transitionPrototype.call = d3_selectionPrototype.call;
d3_transitionPrototype.empty = d3_selectionPrototype.empty;
d3_transitionPrototype.node = d3_selectionPrototype.node;

var D3Transition = function(selection) {
  return arguments.length
      ? (D3Transition._transitionInheritId ? selection.transition() : selection)
      : d3_selectionRoot.transition();
};

D3Transition.prototype = d3_transitionPrototype;

function d3_transitionNode(node, i, id, inherit) {
  var lock = node.__transition__ || (node.__transition__ = {active: 0, count: 0}),
      transition = lock[id];

  if (!transition) {
    var time = inherit.time;

    transition = lock[id] = {
      tween: new d3_Map,
      event: D3Dispatch("start", "end"), // TODO construct lazily?
      time: time,
      ease: inherit.ease,
      delay: inherit.delay,
      duration: inherit.duration
    };

    ++lock.count;

    D3Timer(function(elapsed) {
      var d = node.__data__,
          ease = transition.ease,
          event = transition.event,
          delay = transition.delay,
          duration = transition.duration,
          tweened = [];

      return delay <= elapsed
          ? start(elapsed)
          : D3Timer(start, delay, time), 1;

      function start(elapsed) {
        if (lock.active > id) return stop();
        lock.active = id;
        event.start.call(node, d, i);

        transition.tween.forEach(function(key, value) {
          if (value = value.call(node, d, i)) {
            tweened.push(value);
          }
        });

        if (!tick(elapsed)) D3Timer(tick, 0, time);
        return 1;
      }

      function tick(elapsed) {
        if (lock.active !== id) return stop();

        var t = (elapsed - delay) / duration,
            e = ease(t),
            n = tweened.length;

        while (n > 0) {
          tweened[--n].call(node, e);
        }

        if (t >= 1) {
          stop();
          event.end.call(node, d, i);
          return 1;
        }
      }

      function stop() {
        if (--lock.count) delete lock[id];
        else delete node.__transition__;
        return 1;
      }
    }, 0, time);

    return transition;
  }
}

D3Transition._transitionPrototype = d3_transitionPrototype;
D3Transition._transitionId = d3_transitionId;
D3Transition._transitionInheritId = d3_transitionInheritId;
D3Transition._transitionInherit = d3_transitionInherit;
D3Transition._transition = d3_transition;
D3Transition._transitionNode = d3_transitionNode;

module.exports = D3Transition;
