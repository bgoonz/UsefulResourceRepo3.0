var ch = csp.chan();

csp.go(function* () {
  var ch2 = csp.chan();
  ch2.id = "channel 2";

  yield csp.put(ch, ch2);

  for (var i = 0; i < 5; i++) {
    if (i % 2 === 1) yield csp.take(csp.timeout(100));
    yield csp.put(ch2, i);
  }

  ch2.close();
});

csp.go(function* () {
  var ch3 = csp.chan();
  ch3.id = "channel 3";

  yield csp.put(ch, ch3);

  for (var i = 0; i < 5; i++) {
    if (i % 2 === 0) yield csp.take(csp.timeout(100));
    yield csp.put(ch3, i * 2);
  }

  ch3.close();
});

csp.go(function* () {
  var ch2 = yield csp.take(ch);
  var ch3 = yield csp.take(ch);

  ch.close();

  var r;

  while (!ch2.closed || !ch3.closed) {
    r = yield csp.alts([ch2, ch3]);
    if (r.value === csp.CLOSED) {
      if (r.channel === ch2) {
        console.log("ch2 closed");
      } else if (r.channel === ch3) {
        console.log("ch3 closed");
      } else {
        console.log("close oops");
      }
    } else {
      if (r.channel === ch2) {
        console.log("ch2:", r.value);
      } else if (r.channel === ch3) {
        console.log("ch3:", r.value);
      } else {
        console.log("value oops:", r.value);
      }
    }
  }
});

// "ch2:" 0
// "ch3:" 0
// "ch3:" 2
// "ch2:" 1
// "ch2:" 2
// "ch2 closed"   (repeated hundreds of times)
// "ch3:" 8
// "ch2 closed"
