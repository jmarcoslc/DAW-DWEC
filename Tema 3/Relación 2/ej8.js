function lanzarDado(max) {
	return Math.floor(Math.random() * max) +1;
}

function contarTiradas(n_tiradas) {
	var ocurrencias = [[],[],[],[],[],[],[],[],[],[],[]];

	for(let i=0; i<n_tiradas; i++) {
		var dado1 = lanzarDado(6);
		var dado2 = lanzarDado(6);
		var sumatoria_dados = dado1 + dado2;

		ocurrencias[sumatoria_dados-2].push(dado1+"+"+dado2);
	}

	return ocurrencias;
}

window.onload = function() {
	var tiradas = contarTiradas(1000);
	var html = "";

	for (let i=0; i<tiradas.length; i++) {
		html += "<h1>Tiradas de resultado " + (i+2) + ": "+tiradas[i].length+"</h1>";

		for (let j=0; j<tiradas[i].length; j++) {
			html += "<b>" + tiradas[i][j] + "</b><br/>"
		}
	}

	document.getElementById("insert").innerHTML = html;
}