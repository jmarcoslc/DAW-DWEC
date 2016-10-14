/*Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/

function lanzarDado(caras=6) {
	return parseInt(Math.random() * caras) +1;
}

function contarTiradas(n_tiradas) {
	var ocurrencias = [0,0,0,0,0,0];

	for(let i=0; i<n_tiradas; i++) {
		ocurrencias[lanzarDado()-1] += 1;
	}

	return ocurrencias;
}

window.onload = function () {
	document.getElementById("insert").innerHTML = contarTiradas(6000);
};