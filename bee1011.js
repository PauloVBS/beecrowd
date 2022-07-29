var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let volume = (Math.pow(parseFloat(lines[0]),3)*3.14159*4/3);
console.log("VOLUME = " + volume.toFixed(3));