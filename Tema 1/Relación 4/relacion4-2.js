function helloWorld(lang) {
	if (lang == "en") {
		return "Hello World!";
	} else if (lang == "ge") {
		return "Hallo Welt!";
	} else {
		return "¡Hola Mundo!";
	}
}

document.write("<p>" + helloWorld("es") + "</p>");
document.write("<p>" + helloWorld("en") + "</p>");
document.write("<p>" + helloWorld("ge") + "</p>");