const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
const inputArr = input;
let result = 0;

for (let ch of input) { //inpt배열을 한글자씩 반복함
  if (arr[0].includes(ch)) {
    result += 3;
  } else if (arr[1].includes(ch)) {
    result += 4;
  } else if (arr[2].includes(ch)) {
    result += 5;
  } else if (arr[3].includes(ch)) {
    result += 6;
  } else if (arr[4].includes(ch)) {
    result += 7;
  } else if (arr[5].includes(ch)) {
    result += 8;
  } else if (arr[6].includes(ch)) {
    result += 9;
  } else if (arr[7].includes(ch)) {
    result += 10;
  }
}
console.log(result);
