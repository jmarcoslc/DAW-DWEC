function recargar() {
	document.getElementById("info").innerHTML = "Última modificacion: " + document.lastModified;
}

function referred() {
	document.getElementById("info").innerHTML = document.referrer;
}

function getTitle() {
	document.getElementById("info").innerHTML = document.title;
}

function getURL() {
	document.getElementById("info").innerHTML = document.URL;
}

function sobreEscribir() {
	document.write("Esto debe de sobreescribir el contenido");
}