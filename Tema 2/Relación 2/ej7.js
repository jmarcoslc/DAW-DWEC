function pintarTablaDeSenos(filas) {
	var tabla = "<table style='border: 1px solid #777;'>";
	for (let i = 0; i < filas; i++) {
		tabla += "<tr>";
		tabla += "<td style='border: 1px solid #777;'>" + i + "</td>";
		tabla += "<td style='border: 1px solid #777;'>" + Math.sin(i) + "</td>";
		tabla += "</tr>";
	}
	tabla += "</table>";

	document.write(tabla);
}

pintarTablaDeSenos(80);