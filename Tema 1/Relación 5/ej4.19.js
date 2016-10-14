function pintarTabla(filas, columnas, ancho, alto) {
	var tabla = "<table style='border-collapse: collapse;border: 1px solid #777;'>";
	for (var i = 0; i < filas; i++) {
		tabla += "<tr>";

		for (var j = i % 2; j < columnas + i % 2; j++) {
			if (j % 2 != 0) {
				tabla += "<td style='border: 1px solid #777;' width=" + ancho + " height=" + alto + ">&nbsp;</td>";
			} else if (j % 2 == 0) {
				tabla += "<td style='border: 1px solid #777;background-color:#000;' width=" + ancho + " height=" + alto + ">&nbsp;</td>";
			}
		}

		tabla += "</tr>";
	}
	tabla += "</table>";

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

var filas = 8;
var columnas = 8;
var ancho = getAncho();
var alto = getAlto();

pintarTabla(filas, columnas, ancho, alto);