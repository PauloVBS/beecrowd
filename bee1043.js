var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(num => parseFloat(num));
let major = Math.max(...lines);
let minors = lines.reduce((prev , current) => prev + current, 0) - major;
if(minors > major){
    console.log(`Perimetro = ${(minors + major).toFixed(1)}`)
}else{
    console.log(`Area = ${(((lines[0] + lines[1])*lines[2])/2).toFixed(1)}`)
}