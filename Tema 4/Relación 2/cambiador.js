function listeners() {
	document.getElementById("temaMinimalista").addEventListener("click", minimalista);
	document.getElementById("temaNormal").addEventListener("click", normal);
	document.getElementById("cambiarHoja").addEventListener("click", cambiarHoja);
}

function minimalista() {
	document.body.style.fontFamily = "Serif";
	document.getElementById("margenIzquierdo").style.display = "none";
	document.getElementById("wrapper").style.backgroundColor = "#FFF";
	document.getElementById("cambiarTema").style.backgroundColor = "#FFF";
	document.getElementById("cambiarTema").style.border = "none";
	document.getElementById("temaNormal").style.fontWeight = "normal";
	document.getElementById("temaMinimalista").style.fontWeight = "normal";
	document.getElementsByClassName("ocultarparrafosimple")[0].style.display = "none";
	document.getElementsByClassName("marco")[0].style.backgroundColor = "#FFF";
	document.getElementsByClassName("marco")[0].style.border = "none";
	document.getElementsByClassName("marco")[0].style.padding = "0px";
}

function normal() {
	document.body.style.fontFamily = "Arial";
	document.getElementById("margenIzquierdo").style.display = "block";
	document.getElementById("wrapper").style.backgroundColor = "#FFFFCC";
	document.getElementById("cambiarTema").style.backgroundColor = "#EEEEFF";
	document.getElementById("cambiarTema").style.borderTop = "1px solid #C2C2FF";
	document.getElementById("cambiarTema").style.borderLeft = "1px solid #C2C2FF";
	document.getElementById("cambiarTema").style.borderRight = "1px solid #20209D";
	document.getElementById("cambiarTema").style.borderBottom = "1px solid #20209D";
	document.getElementById("temaNormal").style.fontWeight = "bold";
	document.getElementById("temaMinimalista").style.fontWeight = "bold";
	document.getElementsByClassName("ocultarparrafosimple")[0].style.display = "block";
	document.getElementsByClassName("marco")[0].style.backgroundColor = "#FFFF45";
	document.getElementsByClassName("marco")[0].style.border = "1px solid #000";
	document.getElementsByClassName("marco")[0].style.padding = "10px";
}

function cambiarHoja() {
	var estilo_actual = document.getElementById("hojaEstilo").getAttribute("href");

	if (estilo_actual == "estilo.css") {
		document.getElementById("hojaEstilo").setAttribute("href", "estilo.min.css");
	} else {
		document.getElementById("hojaEstilo").setAttribute("href", "estilo.css");
	}
}

window.onload = function() {
	listeners();
}