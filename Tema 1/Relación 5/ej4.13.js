function pintarTabla(filas, columnas, ancho, alto) {
	var tabla = "<table style='border: 1px solid #777;'>";
	var i = j = 0;

	while (i < filas) {

		tabla += "<tr>";

		while (j < columnas) {
			tabla += "<td style='border: 1px solid #777;' width=" + ancho + " height=" + alto + ">&nbsp;</td>";
			j++;
		}

		tabla += "</table>";
		i++;
		j = 0;
	}

	document.write(tabla);
}

function getFilas() {
	return window.prompt("Introduce el número de filas");
}

function getColumnas() {
	return window.prompt("Introduce el número de columnas");
}

function getAncho() {
	return window.prompt("Introduce el ancho de celdas");
}

function getAlto() {
	return window.prompt("Introduce el alto de las celdas");
}

var filas = getFilas();
var columnas = getColumnas();
var ancho = getAncho();
var alto = getAlto();

pintarTabla(filas, columnas, ancho, alto);