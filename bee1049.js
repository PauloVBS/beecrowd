var input = "vertebrado\nave\ncarnivoro";
var [filo,classe,alimentacao] = input.split('\n');

const animal ={
vertebrado:{
    ave:{carnivoro:"aguia", onivoro:"pomba"},
    mamifero:{onivoro:"homem", herbivoro:"vaca"}}, 
invertebrado:{
    inseto:{hematofago:"pulga", herbivoro:"lagarta"},
    anelideo:{hematofago:"sanguessuga",onivoro:"minhoca"}}}

console.log(animal[filo][classe][alimentacao])