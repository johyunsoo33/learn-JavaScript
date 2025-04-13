const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
if (input == "") {
  console.log(0);
} else {
  console.log(input.length);
}
