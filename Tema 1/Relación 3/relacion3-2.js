function ageCalculator(currentYear, birthYear) {
	var age = currentYear - parseInt(birthYear);

	alert("You're " + age + " or " + (age - 1) + " years old.");
}

function getBirthyear() {
	var birthYear = window.prompt("Enter your birth year");
	return birthYear;
}

var currentYear = new Date().getFullYear();
var birthYear = getBirthyear();
ageCalculator(currentYear, birthYear);
birthYear = getBirthyear();
ageCalculator(currentYear, birthYear);
birthYear = getBirthyear();
ageCalculator(currentYear, birthYear);