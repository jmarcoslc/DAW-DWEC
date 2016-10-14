function insertarContenidoEn1() {
	parent.frames[0].document.body.innerHTML += "<p>hksjhglkhflksdjhfkadsjhfaslkjhflkjfhlsj asdjhgs</p><br/>\
	<img src='http://www.definicionabc.com/wp-content/uploads/Paisaje-Natural.jpg'></img><br/>\
	<img src='https://s-media-cache-ak0.pinimg.com/236x/2b/b3/6c/2bb36c85bfdd46d9c72f4521932e6188.jpg'></img><br/>\
	<a href='#'>Esto es un enlace</a>"; 
}

function cambiarColor() {
	if (parent.frames[0].document.body.style.backgroundColor == "red") {
		parent.frames[0].document.body.style.backgroundColor = "white";
	} else {
		parent.frames[0].document.body.style.backgroundColor = "red";
	}
}

function cambiarImagen() {
	parent.frames[0].document.images[0].src = window.prompt("Introduce una nueva url de imagen");
}

function cambiarLinks() {
	var enlace =  window.prompt("Introduce la URL del enlace");
	var contenido = window.prompt("Introduce el contenido del enlace");

	parent.frames[0].document.links[0].href = enlace;
	parent.frames[0].document.links[0].innerHTML = contenido;
}

function cambiarTitulo() {
	parent.document.title = "Titulo alternativo";
}

function mostrarEstadisticas() {
	var enlaces_if2 = document.links;
	var enlaces_if1 = parent.frames[0].document.links;
	var info_if2 = document.getElementById("info");
	var info_if1 = parent.frames[0].document.getElementById("info");

	info_if2.innerHTML = "Enlaces totales: " + enlaces_if2.length + "<br/>";
	for (let i = 0; i < enlaces_if2.length; i++) {
		info_if2.innerHTML += "Enlaces: " + enlaces_if2[i].href;
	}
	parent.frames[0].document.getElementById("info").innerHTML = "Enlaces totales: " + enlaces_if1.length + "<br/>";
	for (let i = 0; i < enlaces_if1.length; i++) {
		info_if1.innerHTML += "Enlaces: " + enlaces_if1[i].href;
	}


}

insertarContenidoEn1();