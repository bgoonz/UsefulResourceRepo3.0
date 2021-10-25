var fs = require( 'fs' );
var path = require( 'path' );

// path to `hello-world.txt`
var filePath = path.resolve( __dirname, 'res/hello-world.txt' );

// read file using `fs.readFile`
// fs.readFile( filePath, { encoding: 'utf-8' }, function( err, data ) {
//     console.log( 'Data: ', data );
// } );

// no need for callback
var data = fs.readFileSync( filePath, { encoding: 'utf-8' } );
console.log( 'Data: ', data );

// simple log statement
console.log( '-end-of-the-program-' );