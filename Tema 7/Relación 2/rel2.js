function validarDatos() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
    		 document.getElementById("insert").innerHTML = this.responseText;
    	}
	}
	console.log("/validar.php?fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value);
	xhttp.open("GET", "/t7.r2/validar.php?fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value, true);
  	xhttp.send();
}

window.onload = function() {
	document.getElementById("push").addEventListener("click", function() {
		validarDatos();
	});
}