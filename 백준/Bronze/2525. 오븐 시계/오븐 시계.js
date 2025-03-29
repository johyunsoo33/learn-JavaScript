const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let hour = parseInt(input[0].split(" ")[0]);
let min = parseInt(input[0].split(" ")[1]);
let cooking_min = parseInt(input[1]);

let cooked_hour = hour;
let cooked_min = min + cooking_min;

if (cooked_min >= 60) {
  cooked_hour += Math.floor(cooked_min / 60);
  cooked_min %= 60;
  if (cooked_hour >= 24) {
    cooked_hour %= 24;
  }
}
console.log(cooked_hour, cooked_min);

