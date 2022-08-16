var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let valorfinal = parseFloat(lines[0].replace(",","."))*100;
let notas;
let values = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
console.log("NOTAS:");
for(let n = 0; n < 6; ++n )
{
    notas = Math.trunc(valorfinal/values[n]);
    console.log(notas + " nota(s) de R$ " + (values[n]/100).toFixed(2));
    valorfinal -= (notas*values[n]);
}
console.log("MOEDAS:");
for(let n = 6; n < 12; ++n )
{
    notas = Math.trunc(valorfinal/values[n]);
    valorfinal -= (notas*values[n]);
    console.log(notas + " moeda(s) de R$ " + (values[n]/100).toFixed(2));
}