var PI = 3.1416;

function calcCircunference(radius) {
	var perimeter = 2 * 3.1416 * PI;
	document.write("The circumference is " + perimeter + "<br>");
}

function calcArea(radius) {
	var area = PI * radius*radius;
	document.write("The area is " + area + "<br>");
}

var radius = parseInt(window.prompt("Enter area"));

calcArea(radius);
calcCircunference(radius);