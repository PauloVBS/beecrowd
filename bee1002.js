var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const pi = 3.14159;
let area =  lines[0] * lines[0] * pi;

console.log("A=" + area.toFixed(4));
