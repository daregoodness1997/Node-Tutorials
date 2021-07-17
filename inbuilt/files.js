const fs = require("fs");

const files = fs.readdirSync("./inbuilt");
console.log(files);
fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
