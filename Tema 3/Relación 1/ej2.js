/*Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. */

function lanzarDado(caras=6) {
	return parseInt(Math.random() * caras) +1;
}

window.onload = function () {
	document.getElementById("insert").innerHTML = lanzarDado();
};