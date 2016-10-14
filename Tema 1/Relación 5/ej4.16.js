function getNumber() {
	return parseInt(window.prompt("Enter a number"));
}

var number_j1 = getNumber();
var number_j2;

do {
	number_j2 = getNumber();

	if (number_j1 > number_j2) {
		alert("Is greater");
	} else if (number_j1 < number_j2){
		alert("Is lower");
	}

} while (number_j1 != number_j2)

document.write("Correct!!");