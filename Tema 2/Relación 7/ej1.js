function anclas() {
	document.getElementById("info").innerHTML = document.anchors.length + "<br/>";
	document.getElementById("info").innerHTML += document.anchors[0].innerHTML;
}

function imagenes() {
	document.getElementById("info").innerHTML = document.images.length + "<br/>";
	document.getElementById("info").innerHTML += document.images[0].id;
}

function enlaces() {
	document.getElementById("info").innerHTML = document.links.length + "<br/>";
}

function cambiarTitulo() {
	document.title = window.prompt("Inserta un nuevo título");
}