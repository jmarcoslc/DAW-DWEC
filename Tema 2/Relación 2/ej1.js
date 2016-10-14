function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


function getNumberFromUser() {
	return parseInt(window.prompt("Enter a number"));
}

document.write(Math.random() + "<br>");
document.write(Math.floor((Math.random() * (100 + 1)) + 100) + "<br>");
document.write(randomNumber(getNumberFromUser(),getNumberFromUser()));