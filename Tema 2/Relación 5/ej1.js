function infoMarcador() {
	var dir = location.href;
	var host = location.host;
	var protocolo = location.protocol;

	document.getElementById("marcador").innerHTML = "Dir: " + dir + ". </br>\
	Host: " + host + "</br>\
	Protocolo: " + protocolo;
}

function abrirPagina() {
	location.href = "http://" + window.prompt("Introduce una URL");
}

function recargar() {
	location.reload();
}

