const fs = require('fs');
const input=fs.readFileSync(0).toString().trim().split("\n");
const num2 = input[1].split("");
const a = parseInt(input[0]) * parseInt(num2[2]);
const b = parseInt(input[0]) * parseInt(num2[1]);
const c = parseInt(input[0]) * parseInt(num2[0]);
console.log(a);
console.log(b);
console.log(c);
console.log(a+(b*10)+(c*100));

