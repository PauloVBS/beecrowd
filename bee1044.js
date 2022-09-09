var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(num => parseInt(num));

let major = Math.max(...lines), minor = Math.min(...lines);
function multiples(minor, major){
    if(major % minor === 0)
        return "Sao Multiplos";
    else
        return "Nao sao Multiplos";
}
console.log(multiples(minor, major));