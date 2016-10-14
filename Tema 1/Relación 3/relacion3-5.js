function toFarenheit(celsius) {
	return 1.8 * celsius + 32;
}

function toCelsius(farenheit) {
	return (farenheit - 32) / 1.8;
}


function getDegrees() {
	return window.prompt("Enter a degree");
}

var dg = getDegrees();
document.write(dg + "°C is " + toFarenheit(dg) + "°F");

var dg = getDegrees();
document.write(dg + "°F is " + toCelsius(dg) + "°C");