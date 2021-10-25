// using asynquence + iterable-sequence

function waitForIt() {
	// setup dummy step in sequence
	events.then(function(){});
	return events.next;
}

var events = ASQ.iterable();

document.addEventListener("event1",waitForIt());
document.addEventListener("event2",waitForIt());
document.addEventListener("event3",waitForIt());

ASQ()
.seq( events )
.then( .. )
.then( .. )
.then( .. );
