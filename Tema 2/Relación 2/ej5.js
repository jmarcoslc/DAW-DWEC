function getCoefficientsFromUser() {
	var a, b, c;

	a = parseInt(window.prompt("Enter a coefficient 'a'"));
	b = parseInt(window.prompt("Enter a coefficient 'b'"));
	c = parseInt(window.prompt("Enter a coefficient 'c'"));

	return new Array(a, b, c);
}

function getQuadraticEquationSolutions(a, b, c) {
	var x1, x2;

	x1 = (-b + Math.sqrt(Math.pow(b,2) - (4*a*c))) / (2*a);
	x2 = (-b - Math.sqrt(Math.pow(b,2) - (4*a*c))) / (2*a);

	return new Array(x1, x2);
}

var coefs = getCoefficientsFromUser();
var solutions = getQuadraticEquationSolutions(coefs[0], coefs[1], coefs[2]);

document.write(solutions);