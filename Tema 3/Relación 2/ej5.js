/*Crear una función llamada paresImpares
 que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén 
juntos los elementos pares y los impares. Después, volver a mostrar el array*/

function numAleatorio(max) {
	return parseInt(Math.random() * max) +1;
}

function arrayAleatorios() {
	var numeros = new Array();

	for (let i=0; i<100; i++) {
		numeros.push(numAleatorio(1000));
	}

	document.getElementById("insert").innerHTML = numeros + "<br/>";
	document.getElementById("insert").innerHTML += numeros.sort(function(a,b){
		return a%2 - b%2 || a-b;
	});
}

window.onload = function() {
	arrayAleatorios();
}