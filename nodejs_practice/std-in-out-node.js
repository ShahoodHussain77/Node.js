// list of question to ask
var question = [
  "What is your name?",
  "Where do you live?",
  "What is your mother tongue"
];

// answer array
var answer = [];

// get answer on index (i)
function ask ( i ) {

  // standard output to write 
  process.stdout.write( `\n\n\n ${ question[i] }` );
  process.stdout.write( "  >  " );

}

// take standard input ( 'data' ) event call when input data and press enter
process.stdin.on( 'data', function( data ) {

  // push answer in to answers array and convert to string and trim
  answer.push( data.toString().trim() );

  // check if all questions have answered
  if ( answer.length < question.length ) {
    ask( answer.length );
  } else {
    process.exit();
  }

});

// exit process function trigger when app is exit
process.on( 'exit', function() {
  process.stdout.write(`\n\n So your name is ${answer[0]} \n you live in ${answer[1]} \n and you speak ${answer[2]}\n\n`);
});

ask( 0 );
