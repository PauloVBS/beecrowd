var input = "800.01"
var salary = parseFloat(input);
let readjustment = 0;

if(salary > 0 && salary <= 400)
    readjustment = 15;
else if( salary > 400 && salary <= 800)
    readjustment = 12;
else if( salary > 800 && salary <= 1200)
    readjustment = 10;
else if( salary >1200 && salary <= 2000)
    readjustment = 7;
else if( salary > 2000)
    readjustment = 4;

console.log(`Novo salario: ${(salary + (salary/100*readjustment)).toFixed(2)}`);
console.log(`Reajuste ganho: ${(salary/100*readjustment).toFixed(2)}`);
console.log(`Em percentual: ${readjustment} %`);
