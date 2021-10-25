// just a silly number generator that's promise-async
function getVal() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (!getVal.__number) getVal.__number = 0;
      resolve((getVal.__number += 10));
    }, 100);
  });
}

// **********************

ASQ(2, 3)
  .runner(
    // machine 1
    function* (token) {
      token.messages; // [2, 3]

      token.messages[0] += yield getVal(); // pauses generator while promise resolves
      token.messages[1] += yield getVal(); // pauses generator while promise resolves
      token.messages.push(token.messages[0] + token.messages[1]);

      token.messages; // [12, 23, 35]

      yield token; // hand control over to next machine

      token.messages; // [ 100 ]

      token.messages[0] += yield getVal(); // pauses generator while promise resolves

      // implicit finish means transfer control to next machine
    },
    // machine 2
    function* (token) {
      token.messages; // [12, 23, 35]

      token.messages = [
        token.messages[0] + token.messages[1] + token.messages[2],
      ];
      token.messages; // [ 70 ]

      token.messages[0] += yield getVal(); // pauses generator while promise resolves
      token.messages; // [ 100 ]

      yield token; // hand control over to next machine

      token.messages; // [ 140 ]

      token.messages.push("Hello World");

      yield token.messages;
    }
  )
  .val(function (msgs) {
    console.log(msgs[0], msgs[1]); // 140 "Hello World"
  });
