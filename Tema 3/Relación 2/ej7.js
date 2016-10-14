/*Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una 
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.*/

function diezElementos(array, valor) {
	var array_modificado = array;
	var cont = 0;

	while (array_modificado[cont] != undefined && cont < 10) {
		array_modificado[cont] = valor;
		cont++;
	}

	return array_modificado;
}

function sumarUno(array) {
	var array_modificado = array;

	for (let i=0; i<array_modificado.length; i++) {
		array_modificado[i] += 1;
	}

	return array_modificado;
}

function mostrarValores(array) {
	document.getElementById("insert").innerHTML = array.join(" ");
}

window.onload = function() {
	var arr = [0,1,2,3,4,5];

	document.getElementById("insert").innerHTML = diezElementos(arr, 0);
}