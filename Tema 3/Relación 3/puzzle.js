class Tablero {
	constructor(filas, columnas) {
		this.tablero = new Array();

		for(let i=0; i<filas; i++) {
			this.tablero.push(new Array());

			for(let j=0; j<columnas; j++) {
				this.tablero[i][j] = [i+","+j, false];
			} 
		}
	}

	moverFicha(pos_ini, pos_fin) {
		var pos_ini_arr = pos_ini.split(",");
		var pos_fin_arr = pos_fin.split(",");
		var aux = this.tablero[pos_ini_arr[0], pos_ini_arr[1]];

		this.tablero[pos_ini_arr[0], pos_ini_arr[1]] = this.tablero[pos_fin_arr[0], pos_fin_arr[1]];
		this.tablero[pos_fin_arr[0], pos_fin_arr[1]] = aux;
	}

	movimientoValido(pos_ini, pos_fin) {
		var pos_ini_arr = pos_ini.split(",");
		var pos_fin_arr = pos_fin.split(",");
		var diferenciaX = pos_ini_arr[0] - pos_fin_arr[0];
		var diferenciaY = pos_ini_arr[1] - pos_fin_arr[1];

		if (diferenciaX - diferenciaY == -1) {
			return true;
		}

		return false;

	}

	obtenerBlanca() {
		for (let i=0; i<this.tablero.length; i++) {
			for (let j=0; j<this.tablero[i].length; j++) {
				if (this.tablero[i][j][1]) {
					return i+","+j
				}
			}
		}
		return "";
	}

	asignarBlanca() {
		var randX = Math.floor(Math.random() * this.tablero.length);
		var randY = Math.floor(Math.random() * this.tablero[0].length);

		this.tablero[randX, randY][1] = true;
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

	moverFicha(pos) {
		return "";
	}

	asignarBlanca() {
		return "";
	}

	casillaPinchada(pos) {
		return "";
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

				casilla.setAttribute("id", tablero_desordenado[i][j][0]);
				casilla.style.backgroundPosition = document.getElementById(tablero_desordenado[i][j][0]).style.backgroundPosition;

				document.getElementById(tablero_desordenado[i][j][0]).style.backgroundPosition = aux[1];
				document.getElementById(tablero_desordenado[i][j][0]).setAttribute("id", aux[0]);
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
		var celda = event.target.getAttribute("id");

		this.controlador.moverFicha(celda);
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
				height:"+parseInt(((window.innerHeight/this.filas)-1)-1)+"px;' id='"+i+","+j+"'></td>";
			}
			html += "</tr>";
		}

		html += "</table>";

		document.getElementById("insert").innerHTML = html;
	}
}

window.onload = function() {
	var controlador = new Controlador(5, 10, "puzzle_bg.jpg");
}