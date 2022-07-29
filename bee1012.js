var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(nums=> nums.split(' '));
let A = parseFloat(lines[0][0]).toFixed(2);
let B = parseFloat(lines[0][1]).toFixed(2);
let C = parseFloat(lines[0][2]).toFixed(2);
console.log("TRIANGULO: "+ (((A*C)/2)).toFixed(3)+"\n"+"CIRCULO: "+(C*C*3.14159).toFixed(3)+"\n"+"TRAPEZIO: "+ (((parseFloat(A) + parseFloat(B))*C)/2).toFixed(3)+"\n"+"QUADRADO: "+ (B*B).toFixed(3)+"\n"+"RETANGULO: "+(A*B).toFixed(3));
