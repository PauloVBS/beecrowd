var input = "12 10 12 50";
var lines = input.split(' ').map(number => parseInt(number));
let diff = ((lines[2] * 60) + lines[3]) - ((lines[0] * 60) + lines[1])
let horaTotal = parseInt(diff / 60) < 0 ? 23 + parseInt(diff / 60): parseInt(diff / 60),
minutoTotal = parseInt(diff % 60) < 0 ? 60 + parseInt(diff % 60): parseInt(diff % 60);

if(horaTotal === 0 && minutoTotal === 0){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
    console.log(`O JOGO DUROU ${horaTotal} HORA(S) E ${minutoTotal} MINUTO(S)`);
}