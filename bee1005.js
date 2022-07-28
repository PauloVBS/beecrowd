var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let media = ((3.5*A)+(7.5*B))/11;

console.log( "MEDIA = " + media.toFixed(5));
