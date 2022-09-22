var input = "16 2";
var [inicio, fim] = input.split(' ').map(value =>parseInt(value));
let duracao = 0;
if(inicio == fim){
    duracao = 24;
}else if(inicio > fim){
    duracao = (24 - inicio + fim);
}else if(inicio < fim){
    duracao = fim - inicio;
}
console.log(`O JOGO DUROU ${duracao} HORA(S)`);

