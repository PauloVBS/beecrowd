/*se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A² = B² + C², apresente a mensagem: TRIANGULO RETANGULO
se A² > B² + C², apresente a mensagem: TRIANGULO OBTUSANGULO
se A² < B² + C², apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
*/
var input = "1.0 5.0 5.0"
var lines = input.split(' ').map(string => parseFloat(string)).sort((a,b) => b - a);
let aPow = Math.pow(lines[0],2),bPow=Math.pow(lines[1],2),cPow=Math.pow(lines[2],2);
if(lines[0] >= (lines[1] + lines[2])){
    console.log("NAO FORMA TRIANGULO");
    return;
}else if(aPow == (bPow + cPow)){
    console.log("TRIANGULO RETANGULO");
    return;
}else if(aPow > (bPow +cPow)){
    console.log("TRIANGULO OBTUSANGULO");
}else if(aPow < (bPow + cPow)){
    console.log("TRIANGULO ACUTANGULO");
}

if(lines[0] * 3 == lines.reduce((accum, curr)=> accum + curr))
    console.log('TRIANGULO EQUILATERO');
else if(lines[0] == lines[1] || lines[1] == lines[2] || lines[0] == lines[2])
    console.log('TRIANGULO ISOSCELES');


