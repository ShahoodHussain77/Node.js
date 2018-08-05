var fs = require("fs");

var stream = sf.createReadStream("./chat_log", "UTF-8");

var data = "";

stream.once("data", function() {
  console.log("\n\n\n");
  console.log("Started Reading File");
  console.log("\n\n\n\n");
});

stream.on("data", function(chunk) {
  process.stdin.write(`   chunk: ${chunk.length} || `);
  data += chunk;
});

stream.on("end", function() {
  console.log("\n\n\n");
  console.log(`Finished reading file ${data.length}`);
  console.log("\n\n\n");
});
