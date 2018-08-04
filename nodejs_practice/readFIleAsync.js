var http = require('http');
var fs = require('fs');

var server = http.createServer( function ( request, response ) {
	
	fs.readFile ( 'app.js', { encoding: 'utf-8' }, function( err, data ) {
		if ( !err ) {
			response.writeHead ( 200, { "Content-type": "text/plain" } );
			response.write ( data );
			response.end();
		}
		else {
			console.log('error fetching file', err);	
		}
	});

});


server.listen(5000);

console.log('Server listening on port 5000! Visit: http://localhost:5000');

