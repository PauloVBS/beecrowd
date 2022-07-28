var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = lines[0];
let B = parseInt(lines[1]);
let C = parseFloat(lines[2]);
let D = (B * C).toFixed(2);

console.log("NUMBER = " + A + "\n" + "SALARY = U$ " + D);