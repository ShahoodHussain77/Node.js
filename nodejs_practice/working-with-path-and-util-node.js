
// require path 
var path = require('path');

// require system utilities
var util = require('util');

// v8 module is provide memory details, and based on chrome v8 module
var v8 = require('v8');

// console current file name
util.log('file name ', path.basename(__filename) );

// join path from dirname to provided directory
var dirUploads = path.join(__dirname, 'work', 'node' );

// util log provide etxra time stamp of last modified
util.log(dirUploads);

// provides statistics heap memory details 
util.log(v8.getHeapStatistics());
