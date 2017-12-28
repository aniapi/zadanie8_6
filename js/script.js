var a = 10,
 	b = 20,
	value = (a * a) - (2 * a * b) + (b * b);

alert(value);

console.log(value);

if (value > 0) {
	console.log('wynik dodatni');
} else if (value < 0) {
	console.log('wynik ujemny');
}

if (value == 0) {
	console.log('yes');
} else if (value != 0) {
	console.log('no');
}