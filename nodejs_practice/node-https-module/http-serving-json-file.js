var http = require("http");

var data = require("./data/invevntory.json");

http.createServer( function( request, response ) {

  if( request.url === '/') {
    response.writeHead(200, {"Content-Type": "text/json"});
    response.end( JSON.stringify(data));
  } else if( request.url === '/instock' ) {
    listInStock(reponse);
  } else if( request.url === '/inorder' ) {
    listInOder(reponse);    
  } else {
    respnose.writeHead(404, {"Content-Type": "text/plain"});
    response.end("No data foound");
  }

}).listen(5000);

console.log("Sever is listening on port 5000");

function listInStock( res ) {
  var inStock = data.filter( function( item ){
    return item.avail === "In Stock";
  });
  res.end(JSON.stringify( inStock ));
}

function listInOrder( res ) {
  var inOrder = data.filter( function( item ){
    return item.avail === "On Order";
  });
  res.end(JSON.stringify( inOreder ));
}
