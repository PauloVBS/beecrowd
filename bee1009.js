var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines[1]);
let B = parseFloat(lines[2]);
let total = A + (B*15/100);

console.log("TOTAL = R$ " + total.toFixed(2));
