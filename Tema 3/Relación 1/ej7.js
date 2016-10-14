/*Crea   una   función   que   calcule   el   factorial   de   un   número   dado.   Para   comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.*/

function factorial(numero) {
	var suma_factorial = 1;

	for (let i=1; i<=numero; i++) {
		suma_factorial *= i;
	}

	return suma_factorial;
}

function mostrarTablaFacts(numero) {
	var html = "<table><tr><th>Factorial</th><th>Numero</th></tr>";

	for(let i=1; i<=numero; i++) {
		html += "<tr><td>"+i+"!</td>";
		html += "<td>"+factorial(i)+"</td></tr>";
	}

	return html += "</table>"; 
}

window.onload = function() {
	document.getElementById("insert").innerHTML = mostrarTablaFacts(10);
};