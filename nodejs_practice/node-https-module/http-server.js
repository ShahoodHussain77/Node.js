var http = require("http");

// any every request cause createServer callback to invoke
var server = http.createServer( function(request, response) {
  
  // complete response with writing on head and response result
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server response in html</title>
      </head>
      <body>
        <h1>Simple text in html format</h1>
        <p>${request.url}</p>
        <p>${request.method}</p>
      </body>
    </html>
  `);
});

server.listen(5000);

console.log("Sever is listening on port 5000");
