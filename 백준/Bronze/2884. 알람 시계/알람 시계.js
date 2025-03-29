const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let hour = parseInt(input[0]);
let min = parseInt(input[1]);
let wakeup_min = min - 45;
let wakeup_hour = hour;

if (wakeup_min < 0) {
  wakeup_hour -= 1;
  wakeup_min += 60;

  if (wakeup_hour < 0) {
    wakeup_hour = 23;
  }
}

console.log(wakeup_hour, wakeup_min);
