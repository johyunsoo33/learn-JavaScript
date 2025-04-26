const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");
for (let i = 0; i < input.length; i++) {
  input[i] = input[i].toLowerCase();
}
const count = {};
for (let i = 0; i < input.length; i++) {
  if (count[input[i]]) {
    count[input[i]]++;
  } else {
    count[input[i]] = 1;
  }
}
let maxNum = 0;
let maxKey = "";
for (let key in count) {
  if (count[key] > maxNum) {
    maxNum = count[key];
    maxKey = key;
    duplicate = false; 
  } else if (count[key] === maxNum) {
    duplicate = true;
  }
}
if (duplicate) {
  console.log("?");
} else {
  console.log(maxKey.toUpperCase());
}
