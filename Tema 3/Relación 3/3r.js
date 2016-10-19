class Tablero3R() {
	constructor() {
		this.tablero = new Array();

		for(let i=0; i<casillas_anch; i++) {
			this.tablero.push(new Array());

			for(ĺetj=0; j<casillas_alt; j++) {
				this.tablero[i][j] = "";
			} 
		}
	}

	insertarFicha(fila, columna, ficha) {
		this.tablero[fila][columna] = ficha;
	}

	comprobarGanador(ficha) {
		return ganadorHorizontal || ganadorVertical || ganadorCruzado;
	}

	ganadorHorizontal(ficha) {
		var consecutivas = 0;

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length, j++) {
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
			for (let i=0; i<this.tablero[i].length, i++) {
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
		if ((this.tablero[0][0] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[2][2]) || 
			(this.tablero[0][2] == this.tablero[1][1] && this.tablero[1][1] == this.tablero[0][2])) {
			return true;
		}

		return false;
	}
}

class Jugador() {
	constructor(ficha) {
		this.ficha = ficha;
	}

	set ficha(ficha) {
		this.ficha = ficha;
	}

	get ficha() {
		return this.ficha;
	}
}