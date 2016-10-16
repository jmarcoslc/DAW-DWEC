function lanzarDado(max=6) {
	return Math.floor(Math.random() * max) +1;
}

function simularTiradas(n_tiradas, n_dados) {
	var ocurrencias = new Array();

	for (let i=0; i<n_dados; i++) {
		ocurrencias.push(new Array());
	}

	for(let i=0; i<n_tiradas; i++) {
		var sumatoria_dados = 0;

		for (let dado=0; dado<n_dados; dado++) {
			sumatoria_dados += lanzarDado();
		}

		ocurrencias[sumatoria_dados-2].push(dado1+"+"+dado2);
	}

	return ocurrencias;
}

window.onload = function() {
	var tiradas = simularTiradas(1000, 2);
	var html = "";

	for (let i=0; i<tiradas.length; i++) {
		html += "<h1>Tiradas de resultado " + (i+2) + ": "+tiradas[i].length+"</h1>";

		for (let j=0; j<tiradas[i].length; j++) {
			html += "<b>" + tiradas[i][j] + "</b><br/>"
		}
	}

	document.getElementById("insert").innerHTML = html;
}