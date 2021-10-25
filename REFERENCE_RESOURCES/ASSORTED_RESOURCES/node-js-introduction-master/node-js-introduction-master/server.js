var express = require( 'express' );

// create an app (this is a server)
var server = express();

// add `/` access endpoints for `GET` http method
server.get( '/', function ( request, response ) {
    response.send( "Hello World!" );
} );

// start server on 9000 port
server.listen( 9000, function() {
    console.log( 'Callback: server started.' );
} );