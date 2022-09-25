var input = "4520.00"
var salary = parseFloat(input.split('\n'));
let taxes = 0;
if(salary <= 0){
    console.log("Valor inválido");
    return;
}
if(salary <= 2000){
    console.log("Isento");
    return;
}
if(salary <= 3000 && salary > 2000){
    taxes = (salary- 2000)/100*8    
}else if(salary <= 4500 && salary > 3000){
    taxes = ((salary - 3000)/100*18 )+((1000)/100*8)
}else{
    taxes = ((salary - 4500)/100 * 28)+((1500)/100*18 )+((1000)/100*8)
}

console.log(`R$ ${taxes.toFixed(2)}`)

