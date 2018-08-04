var http = require('http');

var server = http.createServer( function ( request, response ) {
	response.writeHead ( 200, { "Content-Type": "text/plain" } );
	response.end (" Hello Friends! Chai pilo " );
});

server.listen(5000);

console.log('Server listening on port 5000! Visit: http://localhost:5000');

