class Posit {
	constructor(id) {
		this.id = id;
		this.texto = "";
		this.titulo = "";
		this.x = 0;
		this.y = 0;
		this.fecha = new Date();
	}
}

class Modelo {
	constructor() {
		this.id = 0;
		this.posits = new Array();
	}
}

class Controlador {
	constructor() {
		this.modelo = new Modelo();
		this.vista = new Vista(this);
		this.cargarLocalStorage();
	}

	buscarPosPosit(id) {
		for (let i=0; i<this.modelo.posits.length; i++) {
			if (this.modelo.posits[i].id == id) {
				return i;
			}
		}
	}

	actualizarLocalStorage() {
		if (typeof(Storage) !== "undefined") {
			localStorage.setItem("posits", JSON.stringify(this.modelo));
			console.log(JSON.stringify(this.modelo));
		}
	}

	cargarLocalStorage() {
		if (typeof(Storage) !== "undefined" && localStorage.getItem("posits") !== null) {
			var modelo = JSON.parse(localStorage.getItem("posits"));

			this.modelo.id = modelo.id;
			this.modelo.posits = modelo.posits;

			for (let i=0; i<modelo.posits.length; i++) {
				this.modelo.posits[i].fecha = new Date(this.modelo.posits[i].fecha)
				this.vista.insertarPosit(this.modelo.posits[i].id, this.modelo.posits[i].fecha, 
					this.modelo.posits[i].titulo, this.modelo.posits[i].texto);
			}
		}
	}

	insertarPosit() {
		this.modelo.posits.push(new Posit(this.modelo.id));
		this.vista.insertarPosit(this.modelo.id, this.modelo.posits[this.buscarPosPosit(this.modelo.id)].fecha);
		this.modelo.id += 1;
		this.actualizarLocalStorage();
	}

	cerrarPosit(id) {
		this.modelo.posits.splice(this.buscarPosPosit(id), 1);
		this.vista.cerrarPosit(id);
		this.actualizarLocalStorage();
	}

	cambiarTituloPosit(texto, id) {
		this.modelo.posits[this.buscarPosPosit(id)].titulo = texto;
		this.actualizarLocalStorage();
	}

	cambiarTextoPosit(texto, id) {
		this.modelo.posits[this.buscarPosPosit(id)].texto = texto;
		this.actualizarLocalStorage();
	}
}

class Vista {
	constructor(controlador) {
		this.controlador = controlador;
		this.addListeners();
	}

	addListeners() {
		var self = this;

		document.getElementById("btn-anadir").addEventListener("click", function() {
			self.controlador.insertarPosit();
		});
	}

	textoEscrito(e) {
		this.controlador.cambiarTextoPosit(e.target.value, e.target.getAttribute("id"));
	}

	tituloEscrito(e) {
		this.controlador.cambiarTituloPosit(e.target.value, e.target.getAttribute("id"));
	}

	insertarPosit(id, fecha, titulo="", texto="") {
		var self = this;
		var list_tit;
		var list_text;
		var title;
		var text_a;

		var corcho = document.getElementById("corcho");
		var posit = document.createElement("div");
		posit.setAttribute("class", "posit");
		posit.setAttribute("id", id);

		var posit_head = document.createElement("div");
		posit_head.setAttribute("class", "posit-head");

		var posit_wrap = document.createElement("div");
		posit_wrap.setAttribute("class", "posit-wrap");

		title = document.createElement("input");
		title.setAttribute("placeholder", "Título");
		title.value = titulo;
		list_tit = title.addEventListener("keyup", function() {
			self.controlador.cambiarTituloPosit(title.value, id);
		});

		text_a = document.createElement("textarea");
		text_a.setAttribute("placeholder", "Contenido");
		text_a.value = texto;
		list_text = text_a.addEventListener("keyup", function() {
			self.controlador.cambiarTextoPosit(text_a.value, id);
		});

		var cerrar_posit = document.createElement("span");
		cerrar_posit.setAttribute("class", "cerrar-posit");
		cerrar_posit.addEventListener("click", function() {
			self.controlador.cerrarPosit(id);
		});

		var fecha_posit = document.createElement("div");
		var fecha_posit_text = document.createTextNode(fecha.toUTCString());
		fecha_posit.setAttribute("class", "fecha-posit");
		fecha_posit.appendChild(fecha_posit_text);

		posit_head.appendChild(title);
		posit_head.appendChild(cerrar_posit);
		posit.appendChild(posit_head);
		posit_wrap.appendChild(text_a);
		posit_wrap.appendChild(fecha_posit);
		posit.appendChild(posit_wrap);
		corcho.appendChild(posit);
	}

	cerrarPosit(id) {
		document.getElementById("corcho").removeChild(document.getElementById(id));
	}
}

window.onload = function() {
	var controlador = new Controlador();
}