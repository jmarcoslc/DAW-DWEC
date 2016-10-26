class Tablero {
	constructor(filas, columnas) {
		this.tablero = new Array();

		for(let i=0; i<filas; i++) {
			this.tablero.push(new Array());

			for(let j=0; j<columnas; j++) {
				this.tablero[i][j] = 1;
			} 
		}
	}
}

class Modelo {
	constructor() {
		this.tablero = new Tablero();	
	}
}

class Controlador {
	constructor(vista) {
		this.modelo = new Modelo();
	}

}

class Vista {
	constructor(filas, columnas, img) {
		this.filas = filas;
		this.columnas = columnas;
		this.img = img;

		this.pintarPuzzle();
	}

	pintarPuzzle() {
		var html = "<table>";

		for (let i = 0; i<this.filas; i++) {
			html += "<tr>";
			for (let j = 0; j<this.columnas; j++) {
				html += "<td style='background-repeat: no-repeat;\
				background-position: -"+parseInt(((window.innerWidth/this.columnas)-1)-1)*(j)+"px -"+parseInt(((window.innerHeight/this.filas)-1)-1)*(i)+"px;\
				background-size: "+window.innerWidth+"px "+window.innerHeight+"px;\
				background-image: url(\""+this.img+"\"); \
				width: "+100/this.columnas+"%;\
				height:"+parseInt(((window.innerHeight/this.filas)-1)-1)+"px;' c='"+i+","+j+"'></td>";
			}
			html += "</tr>";
		}

		html += "</table>";

		document.getElementById("insert").innerHTML = html;
	}
}

window.onload = function() {
	var vista = new Vista(5, 5, "puzzle_bg.jpg");
	var controlador = new Controlador(vista);
	vista.controlador = controlador;
}