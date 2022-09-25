var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var nPessoas = parseInt(input.split('\n'));
console.log(nPessoas * 4);