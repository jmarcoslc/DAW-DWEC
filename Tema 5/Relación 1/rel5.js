function contarElementos() {
	var enlaces = document.getElementsByTagName("a");
	var parrafos = document.getElementsByTagName("p");
	var enlaces_google = 0;

	document.getElementById("insert").innerHTML = "El número de enlaces es: " + enlaces.length;

	for (let i = 0; i<enlaces.length; i++) {

		if (enlaces[i].getAttribute("href") == "http://www.google.es") {
			enlaces_google += 1;
		}

		if (i == enlaces.length -2) {
			document.getElementById("insert").innerHTML = "El penúltimo enlace redirecciona a " + enlaces[i].getAttribute("href");
			document.getElementById("insert").innerHTML += "</br>Número de enlaces a google: " + enlaces_google;
		}
	}

	document.getElementById("insert").innerHTML += "</br>Número de enlaces del tercer párrafo: " + parrafos[2].getElementsByTagName("a").length;
}

function anadirElementos() {
	var lista = document.getElementById("lista");
	var elemento = document.createElement("li");
	elemento.innerHTML = "Contenido añadido";

	lista.appendChild(elemento);
}

window.onload = function() {
	contarElementos();
}