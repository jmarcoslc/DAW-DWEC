function lanzarDado(caras) {
	return Math.floor(Math.random() * caras) +1;
}

function simularTiradas(n_tiradas, n_dados, caras_dado) {
	var ocurrencias = new Array();

	for (let i=0; i<n_dados*caras_dado-1; i++) {
		ocurrencias.push(new Array());
	}

	for(let i=0; i<n_tiradas; i++) {
		var sumatoria_dados = 0;
		var resultado_dados = new Array();

		for (let dado=0; dado<n_dados; dado++) {
			var lanzamiento_dado = lanzarDado(caras_dado);
			resultado_dados.push(lanzamiento_dado);
			sumatoria_dados += lanzamiento_dado;
		}

		ocurrencias[sumatoria_dados-2].push(resultado_dados.join("+"));
	}

	return ocurrencias;
}

window.onload = function() {
	var tiradas = simularTiradas(1000, 2, 6);
	var html = "";

	for (let i=0; i<tiradas.length; i++) {
		html += "<h1>Tiradas de resultado " + (i+2) + ": "+tiradas[i].length+"</h1>";

		for (let j=0; j<tiradas[i].length; j++) {
			html += "<b>" + tiradas[i][j] + "</b><br/>"
		}
	}

	document.getElementById("insert").innerHTML = html;
}