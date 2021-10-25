const timeOut = (x) => {
	setTimeout(function() {
		console.log(x);
	}, 0);
};

for (var i = 1; i <= 10; i++) {
	timeOut(i);
}