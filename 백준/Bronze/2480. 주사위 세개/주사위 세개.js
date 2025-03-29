const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let first = parseInt(input[0]);
let second = parseInt(input[1]);
let thrid = parseInt(input[2]);
let num = 0;
let same = 0;
let up = 0;

if (first == second && second == thrid) {
  num = 10000 + first * 1000;
} else if (first == second || first == thrid || second == thrid) {
  if (first == second) {
    same = first;
  } else if (first == thrid) {
    same = first;
  } else if (second == thrid) {
    same = second;
  } else {
    same = thrid;
  }
  num = 1000 + same * 100;
} else {
  up = Math.max(first, second, thrid);
  num = up * 100;
}

console.log(num);
