class Tablero3R {
	constructor(casillas_anch=3, casillas_alt=3) {
		this.tablero = new Array();

		for(let i=0; i<casillas_anch; i++) {
			this.tablero.push(new Array());

			for(let j=0; j<casillas_alt; j++) {
				this.tablero[i][j] = "";
			} 
		}
	}

	insertarFicha(fila, columna, ficha) {
		this.tablero[fila][columna] = ficha;
	}

	casillaDisponible(fila, columna) {
		if (this.tablero[fila][columna] == "") {
			return true;
		}

		return false;
	}

	comprobarGanador(ficha) {
		return ganadorHorizontal(ficha) || ganadorVertical(ficha) || ganadorCruzado(ficha);
	}

	ganadorHorizontal(ficha) {
		var consecutivas = 0;

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				if (tablero[i][j] == ficha) {
					consecutivas++;
				} else {
					consecutivas = 0;
				}
			}

			if (consecutivas == 3) {
				return true;
			}
		}

		return false;
	}

	ganadorVertical(ficha) {
		var consecutivas = 0;

		for (let j=0; j<this.tablero.length; j++) {
			for (let i=0; i<this.tablero[i].length; i++) {
				if (tablero[i][j] == ficha) {
					consecutivas++;
				} else {
					consecutivas = 0;
				}
			}

			if (consecutivas == 3) {
				return true;
			}
		}

		return false;
	}

	ganadorCruzado(ficha) {
		if ((this.tablero[0][0] == ficha && this.tablero[1][1] == ficha && this.tablero[2][2] == ficha) || 
			(this.tablero[0][2] == ficha && this.tablero[1][1] == ficha && this.tablero[1][1] == ficha)) {
			return true;
		}

		return false;
	}
}

class Jugador {
	constructor(ficha) {
		this.ficha = ficha;
	}
}

class Modelo {
	constructor() {
		this.tablero = new Tablero3R(3, 3);
		this.jugador1 = new Jugador("X");
		this.jugador2 = new Jugador("O");
	}
} 

class Controlador {
	constructor(modelo) {
		this.modelo = modelo;
		this.vista = new Vista(this);
	}

	insertarFicha(fila, columna) {
		this.modelo.tablero
	}
}

class Vista {
	constructor(controlador) {
		this.controlador = controlador;

		this.pintarTabla(3, 3);
		this.addListeners();
	}

	addListeners() {
		var tds = document.getElementsByTagName("td");

		for (let td=0; td<tds.length; td++) {
			tds[td].addEventListener("click", this.casillaPinchada);
		}
	}

	casillaPinchada(event) {
		var celda = event.target.getAttribute("c").split(",");

		this.controlador.insertarFicha(celda[0], celda[1]);
	}

	pintarTabla(filas, columnas) {
		var html = "<table id='raya3'>";

		for(let i=0; i<filas; i++) {
			html += "<tr>";

			for(let j=0; j<columnas; j++) {
				html += "<td c='"+i+","+j+"'></td>";
			}

			html += "</tr>";
		}

		html += "</table>";

		document.getElementById("insert").innerHTML = html;
	}	
}

window.onload = function() {
	var modelo = new Modelo();
	var controlador = new Controlador(modelo);
}