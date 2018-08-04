
var fs = require("fs");

// synchronously read "lib" folder
// var files = fs.readdirSync('./lib');

// if reading files asynchorounsly use callback method 
fs.readdir('./lib', function(error, files) {
  if( error ) {
    throw error;
  } else {
    console.log(files);
  }
});
console.log('Reading Files....');
