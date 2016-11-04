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
	var html = "<table style='border-collapse:collapse; border: 1px solid #333'>";

	for (let i=0; i<filas; i++) {
		html += "<tr>";

		for (let j=0; j<columnas; j++) {
			html += "<td style='width: 4px; height: 4px;'></td>";
		}

		html += "</tr>";
	}

	html += "</table>";

	document.getElementById("insert").innerHTML = html;
}

function resetTabla() {
	var todas_celdas = document.getElementsByTagName("td");

	for (let i=0; i<todas_celdas.length; i++) {
		todas_celdas[i].style.backgroundColor = "#FFF";
	}
}

function listenersACT4() {
	window.addEventListener("keydown", function(e){
		if (e.key == "r") {
			resetTabla();
		}
	});

	var todas_celdas = document.getElementsByTagName("td");

	for (let i=0; i<todas_celdas.length; i++) {
		todas_celdas[i].addEventListener("mousemove", function(e){colorear(e)});
	}
}

function colorear(e) {
	if (e.ctrlKey) {
		e.target.style.backgroundColor = "blue";
	} else if (e.shiftKey) {
		e.target.style.backgroundColor = "red";
	} else if (e.altKey) {
		e.target.style.backgroundColor = "white";
	}
}

var offsetX = 0
var offsetY = 0;
var moverim = false;
var primera_vez = true;
var moverims = new Array();

class imagenMovible {
	constructor(id_imagen, wrapper) {
		this.id_imagen = id_imagen;
		this.moverim = false;
		this.offsetX = 0;
		this.offsetY = 0;
		this.wrapper = wrapper;

		this.addEventClick();
		this.addEventMouseMove();
	}

	addEventClick() {
		var esto = this;
		document.getElementById(this.id_imagen).addEventListener("click", function(e){
			if (!esto.moverim) {
				esto.moverim = true;
				esto.offsetX = e.offsetX;
				esto.offsetY = e.offsetY;
			} else {
				esto.moverim = false;
			}
		});
	}

	addEventMouseMove() {
		var esto = this;
		document.getElementById(this.wrapper).addEventListener("mousemove", function(e){
		e.preventDefault();
			if (esto.moverim) {
				document.getElementById(esto.id_imagen).style.left = e.clientX - esto.offsetX;
				document.getElementById(esto.id_imagen).style.top = e.clientY - esto.offsetY;
			}
		});
	}
}

function moverImagen() {
	var imagenes = document.images;

	for (let i=0; i<imagenes.length; i++) {
		moverims.push(new imagenMovible(imagenes[i].id, "moverimg"));
	}

	/*document.getElementById("imgMover").addEventListener("mousedown", function(e){

		if (!moverim) {
			moverim = true;
			offsetX = e.offsetX;
			offsetY = e.offsetY;
			document.getElementById("insert2").innerHTML = e.clientX+","+e.clientY;
		} else {
			moverim = false;
		}
	});

	document.getElementById("moverimg").addEventListener("mousemove", function(p){
		p.preventDefault();
		if (moverim) {
			document.getElementById("insert").innerHTML = p.clientX+","+p.clientY;

			document.getElementById("imgMover").style.left = p.clientX - offsetX;
			document.getElementById("imgMover").style.top = p.clientY - offsetY;
		}
	});*/
}

window.onload = function() {
	/*pintarTabla(200, 200);
	listenersACT4();*/
	moverImagen();
}