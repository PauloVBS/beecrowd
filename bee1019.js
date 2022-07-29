let input = "140100";
var lines = input.split('\n');
let inicial = parseInt(lines[0])
let segundos = inicial % 60;
let minutos = Math.trunc(((inicial-segundos)/60)%60);
let horas = Math.trunc((inicial - segundos)/3600);

console.log(horas + ":" + minutos + ":" + segundos);