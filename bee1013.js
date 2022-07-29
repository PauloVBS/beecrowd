var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d;

if(a >= b)
    d=a;
else if(b>a)
    d=b;
    
if(c>d)
    console.log(c +" eh o maior");
else
    console.log(d +" eh o maior");