var child_process = require( 'child_process' );

// execute Bash command
child_process.exec( 'echo Hello World!', function( error, stdout ) {
    console.log( 'stdout: ', stdout );
} );

// simple log statement
console.log( '-end-of-the-program-' );