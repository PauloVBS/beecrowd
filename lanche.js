    
var input = "3 2";
var lines = input.split(' ');

const codPreco = {"1":4,'2':4.50,'3':5,'4':2,'5':1.5}
    console.log(`Total: R$ ${(codPreco[lines[0]]*lines[1]).toFixed(2)}`)
