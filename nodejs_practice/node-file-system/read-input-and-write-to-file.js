// readline module is for read user input
var readline = require('readline');
var fs = require("fs");

// creating a interface to read and write
var rl = readline.createInterface( process.stdin, process.stdout );

// creating javascript object
var personDetails = {
  name: '',
  education: []
};

// a question will e raised and on input answer the callack will respond
rl.question("What is your name ? " , function(answer) {

  // setting answer to personDetails
  personDetails.name = answer;

  fs.writeFileSync(personDetails.name + ".md", `${personDetails.name}\n=====================\n\n`);

  // prompting a different question using setPrompt
  rl.setPrompt( `What's your education ${personDetails.name} ? ` );

  // taking answer of setPrompt using prompt
  rl.prompt();

  // execute callback when user input line or press enter
  rl.on('line', function(edu) {

    personDetails.education.push(edu.trim());

    fs.appendFileSync(personDetails.name + ".md", `* ${edu.trim()}\n`);

    // checking if user exit or giving extra details
    if ( edu.toLowerCase().trim() === 'exit' ) {
      rl.close();
    } else {
      rl.setPrompt( `Entering another ${personDetails.name} education ? (type 'exit' to leave) : ` );
      rl.prompt();
    }

  });

  // setting close event when user type exit
  rl.on('close', function() {
    console.log("%s's education we have is %j ", personDetails.name, personDetails.education );
    process.exit();
  });

});
