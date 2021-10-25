var ASQ = require("asynquence-contrib");


ASQ()
.runner(
	ASQ.csp.go(function*(ch){
		var ch2 = ASQ.csp.chan();
		ch2.id = "channel 2";

		yield ASQ.csp.put(ch,ch2);

		for (var i=0; i<5; i++) {
			if (i % 2 === 1) yield ASQ.csp.take(csp.timeout(100));
			yield ASQ.csp.put(ch2,i);
		}

		ch2.close();
	}),
	csp.go(function*(ch){
		var ch3 = ASQ.csp.chan();
		ch3.id = "channel 3";

		yield ASQ.csp.put(ch,ch3);

		for (var i=0; i<5; i++) {
			if (i % 2 === 0) yield ASQ.csp.take(csp.timeout(100));
			yield ASQ.csp.put(ch3,i*2);
		}

		ch3.close();
	}),
	csp.go(function*(ch){
		var ch2 = yield ASQ.csp.take(ch);
		var ch3 = yield ASQ.csp.take(ch);

		ch.close();

		var r;

		while (!ch2.closed || !ch3.closed) {
			r = yield ASQ.csp.alts([ch2,ch3]);
			if (r.value === ASQ.csp.CLOSED) {
				if (r.channel === ch2) {
					console.log("ch2 closed");
				}
				else if (r.channel === ch3) {
					console.log("ch3 closed");
				}
				else {
					console.log("close oops");
				}
			}
			else {
				if (r.channel === ch2) {
					console.log("ch2:",r.value);
				}
				else if (r.channel === ch3) {
					console.log("ch3:",r.value);
				}
				else {
					console.log("value oops:",r.value);
				}
			}
		}
	})

.val(function(){
	console.log("all done:", arguments);
})
.or(function(err){
	console.log(err.stack || err);
});

// ch2: 0
// ch3: 2
// ch2: 2
// ch3: 6
// ch2: 4
// ch3 closed
// all done: {}