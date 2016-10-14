function cuentaAtras(desde) {
	var actual = desde;
	setTimeout(function() {
		document.write(actual + " ");
		actual -= 1;

		if (actual >= 0) {
			cuentaAtras(actual);
		} else {
			window.location.assign("http://www.google.es");
		}
	}, 1000);
}

cuentaAtras(3);