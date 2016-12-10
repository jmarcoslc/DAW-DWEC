function establecerNombre() {
	var nombre = null;

	if (!leerCookie("nusuario")) {
		nombre = window.prompt("Introduce un nombre de usuario");
		crearCookie("nusuario", nombre, new Date(new Date().getTime()+ 5*60000).toUTCString());
	}
	alert("Hola " + leerCookie("nusuario"));
}

function borrarCookie(cookie) {
	document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function crearCookie(id_cookie, valor, expiracion) {
	if (expiracion) {
		document.cookie = id_cookie + "=" + valor + "; expires=" + expiracion + ";";
	} else {
		document.cookie = id_cookie + "=" + valor + ";";
	}
}

function leerCookie(id_cookie) {
	var cookies = document.cookie.split(";");

	for (var i = cookies.length - 1; i >= 0; i--) {
		var cookie = cookies[i].split("=");

		if (cookie[0].trim() == id_cookie) {
			return cookie[1];
		}
	}
}

function colorFondo() {
	var color = leerCookie("bgcolor"), 
	color_parrafo = leerCookie("color_parr"), 
	tamano_texto = leerCookie("tam_text");

	if (!color) {
		color = window.prompt("Introduce un color de fondo");
		crearCookie("bgcolor", color);
	}

	if (!color_parrafo) {
		color_parrafo = window.prompt("Introduce un color de fondo para el párrafo");
		crearCookie("color_parr", color_parrafo);
	}

	if (!tamano_texto) {
		tamano_texto = window.prompt("Introduce un tamaño de fuente");
		crearCookie("tam_text", tamano_texto);
	}

	document.body.style.backgroundColor = color;
	document.body.style.fontSize = tamano_texto;
	var elementos_p = document.getElementsByTagName("p");

	for (let i=0; i<elementos_p.length; i++) {
		elementos_p[i].style.backgroundColor = color_parrafo;
	}
}

window.onload = function() {
	establecerNombre();
	colorFondo();
}