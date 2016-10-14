function invierteCadena() {
	var cadena = window.prompt("Introduce una cadena de texto");
	document.write(reverseString(cadena));
}

function invertirPalabras() {
	var texto = window.prompt("Introduce una cadena de texto");
	texto = texto.split(" ");
	texto_invertido = "";

	for (let i=0; i < texto.length; i++) {
		texto_invertido += reverseString(texto[i]) + " ";
	}
	document.write(texto_invertido.trim());
}

function reverseString(str) {
	return str.split("").reverse().join("");
}

function palabraMasLarga(str) {
	var cadena_dividida = str.split(" ");
	var cadena_mayor = "";

	for (let i=0; i < cadena_dividida.length; i++) {
		if (cadena_dividida[i].length > cadena_mayor.length) {
			cadena_mayor = cadena_dividida[i];
		}
	}

	return cadena_mayor;
}

function fltraPalabrasMasLargas(cad_arg, i) {
	var cadena_dividida = cad_arg.split(" ");
	var cadenas = new Array();

	for (let i=0; i < cadena_dividida.length; i++) {
		if (cadena_dividida[i].length > i) {
			cadenas.push(cadena_dividida[i]);
		}
	}

	return cadenas;
}

function cadenaBienFormada(cad_arg) {
	var cad = cad_arg.toLowerCase().trim();
	var primera_letra = cad.substr(0,1).toUpperCase();

	return primera_letra.concat(cad.substr(1));
}