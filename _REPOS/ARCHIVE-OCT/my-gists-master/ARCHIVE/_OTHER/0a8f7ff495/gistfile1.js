function *router(token) {
	var req = token.messages[0], res = token.messages[1], route, error;

	for (route of routes) {
		try {
			route = route(req,res);
			if (ASQ.isSequence(route)) {
				// wait to resolve the route
				route = yield route;
			}
			if (route === true) {
				break;
			}
		}
		catch (err) {
			error = err;
		}
	}

	// response error?
	if (error) {
		throw {
			req: req,
			res: res,
			reason: error
		};
	}
}

var routes = [];
var httpserv = require("http").createServer();
var ASQ = require("asynquence");
require("asynquence-contrib");

// SETUP THE ROUTES

routes.push(function(req,res){
	// handle the route? if so, return `true`
	// need more time to decide (async)? just return a promise/sequence
});

routes.push(function(req,res){
	// ditto
});


ASQ.react(function listen(trigger){
	httpserv.on("request",trigger);
})
.runner(router)
.or(function responseError(respErr){
	// respErr.res.end(..)
});

httpserv.listen(..);
