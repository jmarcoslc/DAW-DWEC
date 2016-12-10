function Ejercicio2(n_numeros) {
	var n_numeros_acumulador = n_numeros;
	var resultado = 1;

	while(n_numeros_acumulador>0){
		resultado *= parseInt(window.prompt("Introduce un número"));
		n_numeros_acumulador--;
	}

	return resultado;
}

function Ejercicio3(...params) {
	var resultado = 1;

	for (let i=0; i<params.length; i++) {
		resultado *= params[i];
	}

	return resultado;
}

function Ejercicio4(titulo_pagina="") {
	document.title = titulo_pagina;

	console.log("Nº de links: " + document.links.length);

	if (document.links.length > 0) {
		for (let i=0; i<document.links.length; i++) {
			console.log("Link "+i+": "+document.links[i].href);
		}
	}

	var intervalo = setInterval(function(){
		var segundo_actual = new Date().getSeconds();
		alert(segundo_actual);

		if (segundo_actual == 0) {
			clearInterval(intervalo);
			window.location.assign(window.prompt("Introduce una url"));
		}
	}, 4000);
}

function Ejercicio5(tamano_matriz, pos_devolver) {
	var matriz = new Array();
	var x = null;
	var y = null;

	for (let i=0; i<tamano_matriz; i++) {
		matriz.push(new Array());
	}

	//Generacion aleatoria de valores
	for (let i=0; i<tamano_matriz; i++) {
		for(let j=0; j<tamano_matriz; j++) {
			x = Math.floor(Math.random() * (50 - 10) + 10);
			y = Math.floor(Math.random() * (50 - 10) + 10);

			matriz[i].push(x+","+y);
		}
	}

	return matriz[pos_devolver[0]][pos_devolver[1]];
}

class inFormacionLugar {
	constructor(lat=null, long=null) {
		this.latitud = lat;
		this.longitud = long;
		var pais = "";
		var direccion = "";
		this.mapa = null;
		this.marcador = null;
		this.etiqueta = null;
		var esto = this;

		if (this.latitud == null || this.longitud == null) {
			if (navigator.geolocation.getCurrentPosition(function(pos){
				esto.latitud = pos.coords.latitude;
				esto.longitud = pos.coords.longitude;
			}));
		}

		this.establecerNombreLocalizacion();
	}

	establecerCoordenadas() {
		if (navigator.geolocation.getCurrentPosition((pos)=>function(pos){
				this.latitud = pos.coords.latitude;
				this.longitud = pos.coords.longitude;
				alert(this.latitud);
		}));
	}

	dibujaMapa(elemento_html) {
		this.mapa = new google.maps.Map(elemento_html, {
			zoom: 15,
			center: {lat: this.latitud, lng: this.longitud}
		});
	}

	dibujaMarcador() {
		this.marcador = new google.maps.Marker({
			position: {lat: this.latitud, lng: this.longitud},
			map: this.mapa,
			title: "Estás aquí",
			animation: google.maps.Animation.DROP
		});
	}

	dibujaEtiqueta() {
		this.etiqueta = new google.maps.InfoWindow({
			position: {lat: this.latitud, lng: this.longitud}
		});

		this.etiqueta.setContent(this.direccion);
	}

	establecerNombreLocalizacion(){
		var geocoder = new google.maps.Geocoder;
		var ubicacion = {lat: this.latitud, lng: this.longitud};

		geocoder.geocode({location: ubicacion}, function(respuesta, estado) {
			if (estado === google.maps.GeocoderStatus.OK) {
				if (respuesta[1]) {
					this.direccion = respuesta[1].formatted_address;
					this.pais = respuesta[2].types.country;
				} else {
					this.pais = this.direccion = "Desconocido";
				}
			} else {
				this.pais = this.direccion = "Error de geolocalización";
			}
		});

		this.pais = this.direccion = "Error desconocido";
	}

	get pais() {
		return this.pais;
	}

	set pais(pais) {
		this.pais = pais
	}

	get direccion() {
		return this.direccion;
	}

	set direccion(direccion) {
		this.direccion = direccion;
	}

}

/*window.onload = function() {
	var info = new inFormacionLugar();
	var objeto_html = document.getElementById("insert");

	info.dibujaMapa(objeto_html);
	alert(info.pais);
}*/