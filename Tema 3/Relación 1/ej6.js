/*Crea una función para calcular potencias de un modo recursivo.*/

function potenciaRecursiva(numero, potencia) {
	if (potencia == 1) {
		return numero;
	} else {
		return numero * potenciaRecursiva(numero, potencia-1);
	}
}

window.onload = function() {
	document.getElementById("insert").innerHTML = potenciaRecursiva(2,4);
};