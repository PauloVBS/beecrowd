var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let final = lines.map(string => string.split(' '));
let total = ((parseInt(final[0][1])*parseFloat(final[0][2])) + ((parseInt(final[1][1]))*parseFloat(final[1][2])))

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));