function locationAvailable() {
	var i = 0;
	/*var puntos = new Array({latitude:  37.2242423, longitude: -3.6775460999999994},
		{latitude:  27.2242423, longitude: -3.6775460999999994},
		{latitude:  17.2242423, longitude: -3.6775460999999994});*/
	var puntos = new Array();
	var distancia_recorrida = 0;

	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(function (pos) {
			puntos.push(pos);
			document.write("Latitude: " + pos.coords.latitude + "<br/>");
			document.write("Longitude: " + pos.coords.longitude + "<br/>");
			if (puntos.length >= 2) {
				for (let i = puntos.length -2; i < puntos.length -1; i++) {
					distancia_recorrida += getDistanceFromLatLonInKm(puntos[i].latitude, puntos[i].longitude, puntos[i+1].latitude, puntos[i+1].longitude);
				}
				document.write("Distancia recorrida: " + distancia_recorrida + "Km");
			}
		}, saltaError);
	} else {
		document.write("La geolocalización no está activa");
	}
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function saltaError(error){
    switch(error.code) {

	    case error.PERMISSION_DENIED:
	        document.write("User denied the request for Geolocation.")
	        break;

	    case error.POSITION_UNAVAILABLE:
	        document.write("Location information is unavailable.")
	        break;

	    case error.TIMEOUT:
	       document.write("The request to get user location timed out.")
	        break;

	    case error.UNKNOWN_ERROR:
	       document.write("An unknown error occurred.")
	        break;
	}

}

locationAvailable();