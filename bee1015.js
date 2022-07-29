var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(values => values.split(' ').map(valor => parseFloat(valor).toFixed(1)));

let distancia = Math.sqrt((Math.pow((lines[1][0]-lines[0][0]), 2)+Math.pow((lines[1][1]-lines[0][1]), 2))).toFixed(4);

console.log(distancia);