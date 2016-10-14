function informacion(str) {
	var mayus = str.match("[A-Z]+");
	var minus = str.match("[a-z]+");

	if (mayus != null && minus != null) {
		document.write("Está formada por mayúsculas y minúsculas");
	} else if (mayus != null) {
		document.write("Está formada por mayúsculas");
	} else if (minus != null) {
		document.write("Está formada por minúsculas");
	}
}

var text = window.prompt("Introduce una cadena de texto");

informacion(text);