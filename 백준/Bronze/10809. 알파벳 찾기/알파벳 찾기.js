const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = new Array(alphabet.length).fill(-1);
for (let i = 0; i < alphabet.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] === alphabet[i]) {
      result[i] = j;
      break;
    }
  }
}
console.log(result.join(" "));
