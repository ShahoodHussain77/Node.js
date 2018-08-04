// require events
var events = require('events');
var EventEmitter = require('events').EventEmitter;

// require utilities
var util = require('util');

// Creating function in person variable 
var Person = function(name){
  this.name = name;
};

// inherting eventemitter utilites to person object
util.inherits( Person, EventEmitter );

module.exports = Person;
