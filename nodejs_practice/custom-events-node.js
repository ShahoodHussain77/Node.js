var Person = require('./cutom-event-lib/PersonModule');
// atributing perons function in ben
var ben = new Person("Shahood");

// setting function for say event
ben.on('say', function(said) {
  console.log( `${this.name}: ${said}` );
});

/**
// emit function when say happens
ben.emit('say',"This is happening");

// creating new object for event to emit
var emitter = new events.EventEmitter();

// emitter function when emit customevent
emitter.on( 'customEvent', function(message, status) {
  console.log( `${message} ${status}` );
});
**/

// emitting customevent along with message and status
ben.emit( 'say', "Yes it is", 200 );
