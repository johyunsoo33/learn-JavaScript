const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let arr = [];
for (i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}
//console.log(arr);
let list = [];
for (let i = 0; i < arr.length; i++) {
  const currElem = arr[i];
  if (!list.includes(arr[i])) {
    list.push(arr[i]);
  }
}
console.log(list.length);
