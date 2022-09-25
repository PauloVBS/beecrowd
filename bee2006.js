var input = "1\n1 2 3 2 1";
var [tipo, respostas] = input.split('\n').map(arr => arr.split(' '));

console.log(`${respostas.filter(resposta => resposta == tipo).length}`)