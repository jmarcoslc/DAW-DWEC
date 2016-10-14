function tablaMultiplicar () {
	var html = "";

	for (let i = 0; i <= 10; i++) {
		html += "<p><b>Tabla del " + i + ":</b></p>"; 
		for(let j = 0; j <= 10; j++) {
			html += i+"x"+j+"="+i*j+"<br/>";
		}
	}

	document.write(html);
}

tablaMultiplicar();