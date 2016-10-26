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

	casillasLibres() {
		var casillas_libres = 0;

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				if (this.tablero[i][j] == "") {
					casillas_libres += 1;
				}
			}
		}

		return casillas_libres;
	}

	casillaDisponible(fila, columna) {
		if (this.tablero[fila][columna] == "") {
			return true;
		}

		return false;
	}

	comprobarGanador(ficha) {
		return this.ganadorHorizontal(ficha) || this.ganadorVertical(ficha) || this.ganadorCruzado(ficha);
	}

	ganadorHorizontal(ficha) {
		var consecutivas = 0;

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				if (this.tablero[i][j] == ficha) {
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
			for (let i=0; i<this.tablero[j].length; i++) {
				if (this.tablero[i][j] == ficha) {
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
			(this.tablero[0][2] == ficha && this.tablero[1][1] == ficha && this.tablero[2][0] == ficha)) {
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
		this.jugadores = [new Jugador("X"), new Jugador("O")];
	}
} 

class Controlador {
	constructor(modelo) {
		this.modelo = new Modelo();
		this.vista = new Vista(this);
		this.turno = 0;
	}

	insertarFicha(fila, columna) {
		if (this.modelo.tablero.casillaDisponible(fila, columna) && this.turno != -1) {
			this.modelo.tablero.insertarFicha(fila, columna, this.modelo.jugadores[this.turno].ficha);
			this.vista.insertarFicha(fila, columna, this.modelo.jugadores[this.turno].ficha);

			if (this.modelo.tablero.comprobarGanador(this.modelo.jugadores[this.turno].ficha)) {
				this.vista.anunciarGanador(this.turno);
				this.turno = -1;
			} else if (this.modelo.tablero.casillasLibres() == 0) {
			this.vista.anunciarEmpate();
			} else {
				this.pasarTurno();
			}
		}
	}

	pasarTurno() {
		if (this.turno == 0) {
			this.turno = 1;
		} else {
			this.turno = 0;
		}
	}
}

class Vista {
	constructor(controlador) {
		this.controlador = controlador;

		this.pintarTabla(3, 3);
		this.addListeners();
	}

	anunciarGanador(n_jugador) {
		document.getElementById("insert").innerHTML += "<h2 id='ganador'> Ha ganado Jugador " + n_jugador + "</h2>";
	}

	anunciarEmpate() {
		document.getElementById("insert").innerHTML += "<h2 id='ganador'>Empate :(</h2>";
	}

	addListeners() {
		var tds = document.getElementsByTagName("td");

		for (let td=0; td<tds.length; td++) {
			tds[td].addEventListener("click", (e)=>this.casillaPinchada(e));
		}
	}

	casillaPinchada(event) {
		var celda = event.target.getAttribute("c").split(",");

		this.controlador.insertarFicha(celda[0], celda[1]);
	}

	insertarFicha(fila, columna, ficha) {
		var tds = document.getElementsByTagName("td");

		for (let td=0; td<tds.length; td++) {
			var atr = tds[td].getAttribute("c").split(",");

			if (atr[0] == fila && atr[1] == columna) {
				tds[td].innerHTML = ficha;
			}
		}
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
	var controlador = new Controlador();
	//var vista = new Vista(controlador);
	//controlador.vista = vista;
}