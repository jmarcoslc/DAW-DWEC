//AIzaSyDuko4tZ9N27NNQo3qabE0eg86knyefv-g

function initMap() {
	var mapa, marcas = new Array(), ventanas_informativas = new Array(), coords = new Array();
	var coords_des = new Array(), desplazamiento;

	if (navigator.geolocation) {
		mapa = new google.maps.Map(document.getElementById("mapa"), {
			zoom: 15,
			center: {lat: 37.177932, lng: -3.596594} //Por defecto Granada
		});
		navigator.geolocation.watchPosition(function(pos){
			console.log(marcas.length);

			if (marcas.length == 0 || !marcaMismaPosicion(pos, coords[coords.length-1])) {
				mapa.panTo({lat: pos.coords.latitude, lng: pos.coords.longitude});
				coords.push(pos);
				coords_des.push({lat: pos.coords.latitude, lng: pos.coords.longitude});
				marcas.push(new google.maps.Marker({
					position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
					map: mapa,
					title: "Estás aquí",
					animation: google.maps.Animation.DROP
				}));
				ventanas_informativas.push(new google.maps.InfoWindow({
					position: marcas[marcas.length -1]
				}));
				desplazamiento = new google.maps.Polyline({
				    path: coords_des,
				    geodesic: true,
				    strokeColor: '#FF0000',
				    strokeOpacity: 1.0,
				    strokeWeight: 2
				  });
				desplazamiento.setMap(mapa);

				marcas[marcas.length -1].addListener("click", function() {
					obtenerNombreLocalizacion(pos, ventanas_informativas[ventanas_informativas.length -1]);
					ventanas_informativas[ventanas_informativas.length -1].open(mapa, marcas[marcas.length -1]);
				});
			}
		});
	} else {
		document.write("No tiene la localización activa");
	}
}

function obtenerNombreLocalizacion(pos, ventana_informativa){
	var geocoder = new google.maps.Geocoder;
	var ubicacion = {lat: pos.coords.latitude, lng: pos.coords.longitude};

	geocoder.geocode({location: ubicacion}, function(respuesta, estado) {
		if (estado === google.maps.GeocoderStatus.OK) {
			if (respuesta[1]) {
				ventana_informativa.setContent(respuesta[1].formatted_address);
			} else {
				ventana_informativa.setContent("Desconocido");
			}
		} else {
			ventana_informativa.setContent("Error de geolocalización");
		}
	});
}

function insertarMarca(mapa, marcas, ventanas_informativas) {
	marcas.push(new google.maps.Marker({
		position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
		map: mapa,
		title: "Estás aquí"
	}));
	ventanas_informativas.push(new google.maps.InfoWindow({
		position: marcas[marcas.length -1]
	}));
	marcas[marcas.length -1].addListener("click", function() {
		obtenerNombreLocalizacion(pos, ventanas_informativas[ventanas_informativas.length -1]);
		ventanas_informativas[ventanas_informativas.length -1].open(mapa, marcas[marcas.length -1]);
	});
}

function marcaMismaPosicion(pos, posN) {
	if (pos.coords.latitude == posN.coords.latitude && pos.coords.longitude == posN.coords.longitude) {
		return true;
	} else {
		return false;
	}
}

window.onload = function() {
	initMap();
};