var input = "0.0 0.0";
var lines = input.split(' ').map(coordinates => parseFloat(coordinates));

let x = lines[0], y = lines[1];

function quadrante(x,y){
if(x === 0 || y === 0){
    if(x !== 0)
        return "Eixo X";
    else if(y !== 0)
        return "Eixo Y";
    else 
        return "Origem";
}
if(x > 0){
    if(y > 0)
        return "Q1";
    else if(y < 0)
        return "Q4";
}else if(x < 0){
    if(y > 0)
        return "Q2";
    else if(y < 0)
        return "Q3";
}
}
console.log(quadrante(x,y));



