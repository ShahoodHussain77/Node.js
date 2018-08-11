var http = require("http");
var fs = require("fs");
var path = require("path");

// any every request cause createServer callback to invoke
http.createServer( function(request, response) {
  
  console.log(`${request.method} request for ${request.url}`);

  if( request.url === "/" ) {

    fs.readFile("./public/index.html", "UTF-8", function(error, html) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(html);
    });

  } else if( request.url.match(/.css$/) ) {

      var cssPath = path.join(__dirname, 'public', request.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      response.writeHead(200, {"Content-Type": "text/css"});
      fileStream.pipe(response);

  } else if( request.url.match(/.jpg$/) ) {

      var imgPath = path.join(__dirname, "public", request.url);
      var imgStream = fs.createReadStream(imgPath);
      response.write(200, {"Content-Type": "image/jpeg"});
      imgStream.pipe(response);

  } else {

      response.writeHead(404, {"Content-Type": "text/plain"});
      response.end("404 File not found");

  }

}).listen(5000);

console.log("Sever is listening on port 5000");
