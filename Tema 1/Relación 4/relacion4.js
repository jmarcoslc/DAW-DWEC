function greaterNum(num1, num2) {
	if (num1 < num2) {
		return num1;
	} else {
		return num2;
	}
}

function getNumber() {
	var number = window.prompt("Enter a number");
	return number;
}

var number1 = getNumber();
var number2 = getNumber();
document.write("<p>Between numbers " + number1 + " and " + number2 + ", " + greaterNum(number1, number2) + " is the greatest number</p>");

var number1 = getNumber();
var number2 = getNumber();
document.write("<p>Between numbers " + number1 + " and " + number2 + ", " + greaterNum(number1, number2) + " is the greatest number</p>"); 

var number1 = getNumber();
var number2 = getNumber();
document.write("<p>Between numbers " + number1 + " and " + number2 + ", " + greaterNum(number1, number2) + " is the greatest number</p>"); 