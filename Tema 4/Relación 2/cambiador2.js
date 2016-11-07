var TAMANO_POR_DEFECTO = "16px";

function listeners() {
	document.getElementById("letraPequeña").addEventListener("click", disminuirTamanoLetra);
	document.getElementById("letraNormal").addEventListener("click", tamanoNormal);
	document.getElementById("letraGrande").addEventListener("click", aumentarTamanoLetra);
	document.getElementById("textoIzquierda").addEventListener("click", textoIzquierda);
	document.getElementById("textoJustificado").addEventListener("click", textoJustificado);
}

function aumentarTamanoLetra() {
	document.body.style.fontSize = (obtenerTamanoLetra() + 1) + "px";
}

function disminuirTamanoLetra() {
	document.body.style.fontSize = (obtenerTamanoLetra() - 1) + "px";
}

function tamanoNormal() {
	document.body.style.fontSize = TAMANO_POR_DEFECTO;
}

function obtenerTamanoLetra() {
	var tamano_actual = document.body.style.fontSize;

	if (!tamano_actual) {
		tamano_actual = TAMANO_POR_DEFECTO;
	}

	return parseInt(tamano_actual.substring(0, tamano_actual.length -2));
}

function textoIzquierda() {
	document.body.style.textAlign = "left";
}

function textoJustificado() {
	document.body.style.textAlign = "justify";
}

window.onload = function() {
	listeners();
}