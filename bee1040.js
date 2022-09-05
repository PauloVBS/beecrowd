var input = "2.0 4.0 7.5 8.0\n6.4";
var lines = input.split('\n').map(item => item.split(' ').map(item => parseFloat(item)));


let media = ((lines[0][0] * 2 + lines[0][1] * 3 + lines[0][2] * 4 + lines[0][3])/10),
notaExame = lines[1][0];
console.log(`Media: ${media.toFixed(1)}`);
if(media < 5)
    console.log("Aluno reprovado.")
else if(media >= 5 && media < 7 ){
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    if((media + notaExame)/2 >= 5){
        console.log("Aluno aprovado.")
        console.log(`Media final: ${((media + notaExame)/2).toFixed(1)}`)
    }else{
        console.log("Aluno reprovado")
        console.log(`Media final: ${((media + notaExame)/2).toFixed(1)}`)
    }
}else
    console.log("Aluno aprovado.")

