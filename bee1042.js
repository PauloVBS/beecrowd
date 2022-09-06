var input = "-14 21 7";
var lines = input.split(' ').map(val => parseInt(val));

let linesUnsorted = [...lines];
lines.sort(function(x,y){return x-y});
for(let i = 0; i <= 2; i++){
    console.log(lines[i] + (i ==2 ? '\n':''));
}
for(let j = 0; j <= 2; j++){
    console.log(linesUnsorted[j]);
}