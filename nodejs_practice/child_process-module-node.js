// requiring child process module
var exec = require('child_process').exec;

// entering command in exec function and recieve call back 
exec("git version", function(error, result) {
  
  if ( error ) {
    throw error;
  } else {
    console.log("Git version command executed");
    console.log(result);
  }

});
