var https = require("https");

var fs = require("fs");

// setting object for request on web
var options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/Muhammad_Ali_Jinnah",
  method: "GET"
};

// setting https request with options as headers and callback for response
var request = https.request( options, function(res) {
  
  var responseBody = "";

  console.log("Response from server started.");
  console.log(`Server Status: ${res.statusCode}`);
  console.log("Response Headers: %j", res.headers);

  // encoding response in text
  res.setEncoding("UTF-8");

  res.once("data", function(chunk) {
    console.log(chunk);
  });

  res.on("data", function(chunk) {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  res.on("end", function() {
    fs.writeFile("Quaid-e-Azam.html", responseBody, function(err) {
      if( err ) {
        throw err;
      }
    	console.log("File Downloaded");
    });
  });
});

request.on("error", function(err) {
  console.log(`Problem with request: ${err.message}`);
});

request.end();
