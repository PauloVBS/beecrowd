var input = "69 24 11"
var lines = input.split(' ').map(valor => parseInt(valor));
let maxValue = lines.reduce(function(prev, current) { 
	return prev + current 
});
console.log(maxValue +" eh o total");