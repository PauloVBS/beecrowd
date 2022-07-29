var input = "800";
var lines = input.split('\n');
let inicial = parseInt(lines[0]);
let anos = Math.trunc(inicial/365);
let meses = Math.trunc((inicial - (anos*365))/30);
let dias = Math.trunc(inicial - (anos*365) - (meses*30));

console.log(anos +" ano(s)\n" + meses + " mes(es)\n" + dias + " dia(s)");