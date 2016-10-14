textoPrimerScript = "Soy el primer Script";
holaMundo = "Hola Mundo \nQué fácil es incluir 'comillas simples'\n y \"comillas dobles\"";
primeraVariable = parseInt(window.prompt("Introduce un número"));
segundaVariable = parseInt(window.prompt("Introduce otro número"));

alert(holaMundo); /*Muestra un mensaje con "hola mundo"*/
alert(textoPrimerScript);

document.write("El valor de la primera variable es: " + primeraVariable + " y el valor de la segunda es " + segundaVariable + ". La suma de ambas es: " + (primeraVariable + segundaVariable));