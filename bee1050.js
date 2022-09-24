var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [ddd] = input.split('\n');

const index = {
    "61":"Brasilia",
    "71":"Salvador",
    "11":"Sao Paulo",
    "21":"Rio de Janeiro",
    "32":"Juiz de Fora",
    "19":"Campinas",
    "27":"Vitoria",
    "31":"Belo Horizonte"
};
if(index[ddd])
    console.log(index[ddd]);
else{
    console.log("DDD nao cadastrado")
}
