var a = 2;
var b = 5;
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);
prompt('Wynik działania to: '+ value);
if (value < 0) {
	console.log('wynik ujemny');
	prompt('wynik ujemny');  
}
else if (value > 0) {
	console.log('wynik dodatni');
	prompt('wynik dodatni'); 
}
else {
	console.log('wynik równa się 0');
	prompt('wynik równa się 0'); 
}