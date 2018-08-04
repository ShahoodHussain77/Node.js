// requiring spawn
var spawn = require('child_process').spawn;

// importing alwaystalking file using spawn in cp
var cp = spawn( "node", ["alwaysTalking"] );

// writing data when data recieve
cp.stdout.on("data", function(data) {
  console.log( 'stdout ${data.toString()}` );
});

// close function when close event happens
cp.on("close", function() {
  console.log("child process ended");
  process.exit();
});

// 
setTimeout( function() {
  cp.stdin.write("stop");
}, 4000 );
