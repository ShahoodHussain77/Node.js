
var fs = require("fs");

var path = require("path");

s.readdir('./lib', function(error, files) {
  files.forEach( function(fileName) {
    var file = path.join(__dirname, "lib", fileName );
  });
});
