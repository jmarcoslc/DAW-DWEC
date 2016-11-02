function aler() {
	alert("Lalalala");
}

function moveListener() {
	document.getElementById("mm").onmousemove = function(e){leerCoords(e)};
}

function leerCoords(c){
	var x = c.clientX;
	var y = c.clientY;

	document.getElementById("insert").innerHTML = x+","+y;
}

function pintarTabla(filas, columnas) {
	var html = "<table style='border: 1px solid #333'>";

	for (let i=0; i<filas; i++) {
		html += "<tr>";

		for (let j=0; j<columnas; j++) {
			html += "<td style='width: 2px; height: 2px;'></td>";
		}

		html += "</tr>";
	}

	html += "</table>";

	document.getElementById("insert").innerHTML = html;
}

window.onload = function() {
	pintarTabla(80, 80);
}