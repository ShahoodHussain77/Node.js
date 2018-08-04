// function for grabing flag 
function grab( flag ) {
	
	// taking index of flag process
	var index = process.argv.indexOf( flag );

	// checking index is empty or null and returning flag process end state
	return ( index === -1 ) ? null : process.argv[ index + 1 ];
}

var greeting = grab( '--greeting' );
var user = grab( '--user' );

// condition if user provide flags
if( !user || !greeting ) {
	console.log(' No flag available' );
} else {
	console.log(` welcome ${ user }, ${ greeting } `);
}

console.log( 'provide flag of user and greeting like --user human' );
