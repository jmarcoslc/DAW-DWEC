function peticionAJAX() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
    		 document.getElementById("insert").innerHTML = this.responseText;
    	}
	}

	xhttp.open("GET", "AJAX.txt", true);
  	xhttp.send();
}

function comprobarCorreo() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		 if (this.readyState == 4 && this.status == 200) {
		 	var xml = this.responseXML;
		 	var insert = document.getElementById("insert");
		 	insert.innerHTML = "";
		 	var correos = xml.getElementsByTagName("email");

		 	for (let i=0; i < correos.length; i++) {
		 		var email = correos[i];

		 		insert.innerHTML += "Correo: <br>";
		 		insert.innerHTML += email.getElementsByTagName('heading')[0].innerHTML + "<br>";
		 		insert.innerHTML += email.getElementsByTagName('body')[0].innerHTML + "<br>";
		 	}
    	}
	}

	xhttp.open("GET", "correos.xml", true);
  	xhttp.send();
}

window.onload = function() {
	document.getElementById("push").addEventListener("click", function() {
		peticionAJAX();
	});

	setInterval(function() {
		comprobarCorreo();
	}, 3000);
}