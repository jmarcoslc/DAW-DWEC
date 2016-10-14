primeraVariable = parseInt(window.prompt("Introduce un número"));
segundaVariable = parseInt(window.prompt("Introduce otro número"));

if (primeraVariable != segundaVariable) {
	if (primeraVariable > segundaVariable) {
		alert(primeraVariable + " es mayor que " + segundaVariable);
	} else {
		alert(segundaVariable + " es mayor que " + primeraVariable);
	}
} else {
	alert("Son iguales");
}