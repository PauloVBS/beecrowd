var input = "576"
var lines = input.split('\n');
let value = parseInt(lines[0]);
console.log(value);

function contador(valor, numero)
{
    if(numero<=6)
    {
    let arr = [100, 50, 20, 10, 5, 2, 1];
    let notas = Math.trunc(valor/arr[numero]);
    valor -= notas*arr[numero]
    console.log(notas +" nota(s) de R$ " + arr[numero] +",00");
    contador(valor, ++numero);
    }
}
contador(value, 0);
