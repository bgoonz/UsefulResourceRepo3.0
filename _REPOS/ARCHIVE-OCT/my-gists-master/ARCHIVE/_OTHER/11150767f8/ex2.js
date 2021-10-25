// using native promises

function waitForIt() {
	// extract trigger from promise
	var trigger;
	var p = new Promise(function(resolve){
		trigger = resolve;
	});
	// chain promise
	events = events.then(function(){ return p; });
	// return extracted trigger
	return trigger;
}

var events = Promise.resolve();

document.addEventListener("event1",waitForIt());
document.addEventListener("event2",waitForIt());
document.addEventListener("event3",waitForIt());

events
.then( .. )
.then( .. )
.then( .. );
