var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let saida = (parseInt(lines[0])/parseFloat(lines[1])).toFixed(3);

console.log(saida + " km/l");