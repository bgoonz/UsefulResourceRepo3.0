var cycle,
  schedule_queue = [],
  timer =
    typeof setImmediate !== "undefined"
      ? function timer(fn) {
          return setImmediate(fn);
        }
      : setTimeout;
function doQueue() {
  cycle = null;
  for (var i = 0; i < schedule_queue.length; i++) {
    schedule_queue[i]();
  }
  schedule_queue.length = 0;
}

function schedule(fn) {
  schedule_queue.push(fn);
  if (!cycle) {
    cycle = timer(doQueue, 0);
  }
}
