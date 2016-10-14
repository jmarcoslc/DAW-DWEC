function mayorDe4() {
	var numeros = new Array();
	var mayor = null;

	for (let i=0; i < 4; i++) {
		let numero_introducido;
		do {
			numero_introducido = parseInt(window.prompt("Introduce un número"));
		} while (!Number.isInteger(numero_introducido));

		numeros.push(numero_introducido);
	}
	mayor = numeros[numeros.length-1];

	for (let i=0; i < numeros.length-1; i++) {
		if (numeros[i] > mayor) {
			mayor = numeros[i];
		}
	}

	return mayor;
}

window.onload = function() {
	document.write(mayorDe4());
}