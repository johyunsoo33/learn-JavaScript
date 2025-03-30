const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let num = Math.floor(parseInt(input) / 4);
console.log(`${"long ".repeat(num)}int`);
