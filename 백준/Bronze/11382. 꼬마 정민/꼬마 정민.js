const fs = require('fs');
const input=fs.readFileSync(0).toString().trim().split(" ");
const a = parseInt(input[0]); 
const b = parseInt(input[1]); 
const c = parseInt(input[2]); 

console.log(a+b+c);