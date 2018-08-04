var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

// function to write wait in percent
function writingWaitPercent( p ) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write( `waiting ... ${p}% `);
}

// timeout function to wait for some time interval
setTimeout( function() {
  
  clearInterval( interval );
  writingWaitPercent( 100 );
  console.log("\nComplete\n");

}, waitTime);

// setInterval function call again and again after given time period
var interval = setInterval( function() {

  currentTime += waitInterval;
  percentWaited = Math.floor( ( currentTime / waitTime ) * 100 );
  writingWaitPercent( percentWaited );

}, waitInterval);

process.stdout.write("\n\n");
writingWaitPercent(percentWaited);
