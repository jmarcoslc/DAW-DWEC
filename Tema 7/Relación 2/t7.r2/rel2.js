function validarDatos() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
    		 document.getElementById("insert").innerHTML = this.responseText;
    	}
	}
	//console.log("/validar.php?fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value);
	xhttp.open("GET", "/t7.r2/validar.php?fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value, true);
  	xhttp.send();
}

function validarDatosPOST() {
	var xhttp = new XMLHttpRequest();
	document.getElementById("insert").innerHTML = "<div class='uil-ring-css' style='transform:scale(1);'><div>";

	xhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
		 	var xml = this.responseXML;	
    		document.getElementById("insert").innerHTML = xml.getElementsByTagName("fecha")[0].innerHTML + "<br>";
    		document.getElementById("insert").innerHTML += xml.getElementsByTagName("codigoPostal")[0].innerHTML + "<br>";
    		document.getElementById("insert").innerHTML += xml.getElementsByTagName("telefono")[0].innerHTML;
    	}
	}
	//console.log("/validar.php?fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value);
	setTimeout(function(){
		xhttp.open("POST", "/t7.r2/validar.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  		xhttp.send("fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value);
	}, 2000);
}

function comprobarNombre() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
		 	var xml = this.responseXML;	
    		if (xml.getElementsByTagName("usuario")[0].innerHTML == 0) {
    			var alternativas = xml.getElementsByTagName("alternativa");
    			document.getElementById("insert").innerHTML = "El usuario no está disponible, prueba con: </br>";

    			for (let i=0; i<alternativas.length; i++) {
    				document.getElementById("insert").innerHTML += alternativas[i].innerHTML + "</br>";
    			}
    		}
    	}
	}
	//console.log("/validar.php?fecha_nacimiento="+document.getElementById("fn").value+"&codigo_postal="+document.getElementById("cp").value+"&telefono="+document.getElementById("tl").value);
	xhttp.open("POST", "/t7.r2/validar-nombre.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("usuario="+document.getElementById("usu").value);
}

window.onload = function() {
	document.getElementById("push").addEventListener("click", function() {
		validarDatos();
	});

	document.getElementById("push_p").addEventListener("click", function() {
		validarDatosPOST();
	});

	document.getElementById("push_pusu").addEventListener("click", function() {
		comprobarNombre();
	});
}