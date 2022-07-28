var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
let media = ((2*A) + (3 * B) + (5*C))/10;

console.log("MEDIA = " + media.toFixed(1));
