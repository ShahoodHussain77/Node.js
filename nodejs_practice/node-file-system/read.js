
var fs = require("fs");

var path = require("path");

s.readdir('./lib', function(error, files) {
  
  // iterate through all files
  files.forEach( function(fileName) {

    // join path with dir name
    var file = path.join(__dirname, "lib", fileName );

    // get stats of single file synchonoursly
    var stats = fs.statSync( file );

    // check if its file
    if ( stats.isFile() ) {
      fs.readFile( file, "UTF-8", function(error, contents) {
        console.log(contents);
      });
    }
  });
});
