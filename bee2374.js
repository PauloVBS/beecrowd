var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [pressao1,pressao2] = input.split('\n').map(value => parseInt(value));
console.log(pressao1 - pressao2)
