function reloj() {
	var hora, minutos, segundos;

	setTimeout(function() {
		hora = new Date().getHours();
		minutos = new Date().getMinutes();
		segundos = new Date().getSeconds();
		document.body.innerHTML = '';
		document.write(`${hora}:${minutos}:${segundos}`);
		reloj();
	}, 1000);
}

reloj();