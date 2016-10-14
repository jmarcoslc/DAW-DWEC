function tablaTexto(str) {
	var tabla = "<table style='border: 1px solid #333;'>"

	for (let i = 0; i < str.length; i++) {
		tabla += "<tr>";
		for (let j = 0; j < str.length; j++) {
			if (j == 0) {
				tabla += "<td style='border: 1px solid #333;'>"+str[i]+"</td>";
			} else if (j == str.length -1){
				tabla += "<td style='border: 1px solid #333;'>"+str[str.length - 1 - i]+"</td>";
			} else if (i == 0) {
				tabla += "<td style='border: 1px solid #333;'>"+str[j]+"</td>";
			} else if (i == str.length -1) {
				tabla += "<td style='border: 1px solid #333;'>"+str[str.length - 1 - j]+"</td>";
			} else {
				tabla += "<td style='border: 1px solid #333;'></td>";
			}
		}
		tabla += "</tr>";
	}

	tabla += "</table>"

	document.write(tabla);
}

tablaTexto("PRUEBA");