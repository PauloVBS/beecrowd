var input = '10.0 3.0 5.0';
var lines = input.split(' ').map(number => parseFloat(number));

let a = lines[0],
    b = lines[1],
    c = lines[2];
function bhaskB(a,b,c,deltroot)
{
    return (-b + deltroot)/(a*2);
}
const delt = (a,b,c) =>{
    return Math.pow(b,2)+(-4*a*c);
}

function bhaskara(a,b,c){
    if(delt(a,b,c) < 0 ){
        console.log("Impossivel calcular");
    }else if(a == 0){
        console.log("Impossivel calcular");
    }else if(delt === 0){
        console.log(bhaskB(a,b,c,Math.sqrt(delt(a,b,c))).toFixed(5))
    }else{
        console.log("R1 = " + bhaskB(a,b,c,Math.sqrt(delt(a,b,c))).toFixed(5));
        console.log("R2 = " + bhaskB(a,b,c,(Math.sqrt(delt(a,b,c))*-1)).toFixed(5));
    }
}
bhaskara(a,b,c)

