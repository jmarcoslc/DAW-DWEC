class Tablero {
	constructor(filas, columnas) {
		this.tablero = new Array();
		this.filas = filas;
		this.columnas = columnas;

		for(let i=0; i<filas; i++) {
			this.tablero.push(new Array());

			for(let j=0; j<columnas; j++) {
				this.tablero[i][j] = [i+","+j, false];
			} 
		}

		this.asignarBlanca();
	}

	solucionado() {
		var piezas_correctas = 0;

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				if (!this.tablero[i][j][0] && this.tablero[i][j][0] == i+","+j) {
					piezas_correctas++;
				}
			}
		}

		return piezas_correctas == (this.filas * this.columnas)-1;
	}

	moverFicha(pos_ini, pos_fin) {
		var pos_ini_arr = pos_ini.split(",");
		var pos_fin_arr = pos_fin.split(",");
		var aux = this.tablero[pos_ini_arr[0]][pos_ini_arr[1]];

		this.tablero[pos_ini_arr[0]][pos_ini_arr[1]] = this.tablero[pos_fin_arr[0]][pos_fin_arr[1]];
		this.tablero[pos_fin_arr[0]][pos_fin_arr[1]] = aux;
	}

	movimientoValido(pos_ini, pos_fin) {
		var pos_ini_arr = pos_ini.split(",");
		var pos_fin_arr = pos_fin.split(",");
		var diferenciaX = parseInt(pos_ini_arr[0]) - parseInt(pos_fin_arr[0]);
		var diferenciaY = parseInt(pos_ini_arr[1]) - parseInt(pos_fin_arr[1]);

		//console.log("Calc: "+pos_ini_arr+" "+pos_fin_arr, "|| DifX: "+(pos_ini_arr[0] - pos_fin_arr[0]), "DifY: "+(pos_ini_arr[1] - pos_fin_arr[1]), Math.abs(diferenciaX -diferenciaY));

		if (Math.abs(diferenciaX - diferenciaY) == 1 && (diferenciaX <= 1 && diferenciaY <= 1)) {
			return true;
		}

		return false;
	}

	obtenerBlanca() {
		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				if (this.tablero[i][j][1]) {
					return i+","+j;
				}
			}
		}
		return "";
	}

	asignarBlanca() {
		var randX = Math.floor(Math.random() * this.tablero.length);
		var randY = Math.floor(Math.random() * this.tablero[0].length);

		this.tablero[randX][randY][0] = "blanca";
		this.tablero[randX][randY][1] = true;
	}

	desordenar() {
		var arr_tablero = new Array();
		var indice = 0;

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				arr_tablero.push(this.tablero[i][j]);
			}
		}

		arr_tablero.sort(function() {return Math.random() - 0.5});

		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++, indice++) {
				this.tablero[i][j] = arr_tablero[indice];
			}
		}
		return this.tablero;
	}
}

class Modelo {
	constructor(filas, columnas) {
		this.tablero = new Tablero(filas, columnas);	
	}
}

class Controlador {
	constructor(filas, columnas, img) {
		this.modelo = new Modelo(filas, columnas);
		this.vista = new Vista(filas, columnas, img, this)

		this.desordenar();
	}

	desordenar() {
		var tablero_desordenado = this.modelo.tablero.desordenar();

		this.vista.desordenar(tablero_desordenado);
	}

	moverFicha(pos_modelo, id_vista) {
		var pos_blanca = this.modelo.tablero.obtenerBlanca();
		//var pos_destino_fix = this.obtenerPosModelo(pos_destino);

		if (!this.modelo.tablero.solucionado()) {
			if (this.modelo.tablero.movimientoValido(pos_blanca, pos_modelo)) {
				this.modelo.tablero.moverFicha(pos_blanca, pos_modelo);
				this.vista.moverFicha(id_vista);
			}
		} else {
			this.vista.mostrarSolucion();
		}
	}

}

class Vista {
	constructor(filas, columnas, img, controlador) {
		this.filas = filas;
		this.columnas = columnas;
		this.img = img;
		this.controlador = controlador;

		this.pintarPuzzle();
		this.addListeners();
	}

	desordenar(tablero_desordenado) {
		for (let i=0; i<tablero_desordenado.length; i++) {
			for (let j=0; j<tablero_desordenado[i].length; j++) {
				var casilla = document.getElementById(i+","+j);
				var aux = new Array();

				aux.push(casilla.getAttribute("id"));
				aux.push(casilla.style.backgroundPosition);

				if (tablero_desordenado[i][j][1]) {
					casilla.setAttribute("id", "blanca");
					casilla.style.backgroundImage = "none";
				} else {
					casilla.setAttribute("id", tablero_desordenado[i][j][0]);
					casilla.style.backgroundPosition = document.getElementById(tablero_desordenado[i][j][0]).style.backgroundPosition;
					document.getElementById(tablero_desordenado[i][j][0]).style.backgroundPosition = aux[1];
					document.getElementById(tablero_desordenado[i][j][0]).setAttribute("id", aux[0]);
				}
			}
		}
	}

	addListeners() {
		var tds = document.getElementsByTagName("td");

		for (let td=0; td<tds.length; td++) {
			tds[td].addEventListener("click", (e)=>this.casillaPinchada(e));
		}
	}

	casillaPinchada(event) {
		var id_casilla = event.target.getAttribute("id");
		var casilla = event.target.getAttribute("c");

		this.controlador.moverFicha(casilla, id_casilla);
	}

	moverFicha(id_vista) {
		var celda_destino = document.getElementById(id_vista);
		var celda_blanca = document.getElementById("blanca");
		var aux = new Array();

		aux.push(celda_destino.getAttribute("id"));
		aux.push(celda_destino.style.backgroundPosition);
		aux.push(celda_destino.style.backgroundImage);

		celda_destino.setAttribute("id", "blanca");
		celda_destino.style.backgroundPosition = "none";
		celda_destino.style.backgroundImage = "none";
		

		celda_blanca.setAttribute("id", aux[0]);
		celda_blanca.style.backgroundPosition = aux[1];
		celda_blanca.style.backgroundImage = aux[2];
	}

	mostrarSolucion() {
		document.getElementById("blanca").style.backgroundImage = this.img;
	}

	pintarPuzzle() {
		var html = "<table>";

		for (let i = 0; i<this.filas; i++) {
			html += "<tr>";
			for (let j = 0; j<this.columnas; j++) {
				
				html += "<td style='background-repeat: no-repeat;\
				background-position: -"+parseInt(((window.innerWidth/this.columnas)))*(j)+"px -"+parseInt(((window.innerHeight/this.filas)))*(i)+"px;\
				background-size: "+window.innerWidth+"px "+window.innerHeight+"px;\
				background-image: url(\""+this.img+"\"); \
				width: "+100/this.columnas+"%;\
				height:"+parseInt(((window.innerHeight/this.filas)))+"px;' c='"+i+","+j+"' id='"+i+","+j+"'></td>";
			}
			html += "</tr>";
		}

		html += "</table>";

		document.getElementById("insert").innerHTML = html;
	}
}

window.onload = function() {
	var controlador = new Controlador(3, 3, "puzzle_bg.jpg");
}