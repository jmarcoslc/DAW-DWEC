class Posit {
	costructor(id) {
		this.id = id;
		this.texto = "";
		this.titulo = "";
		this.x = 0;
		this.y = 0;
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
	}

	buscarPosPosit(id) {
		for (let i=0; i<this.modelo.posits.length; i++) {
			console.log(this.modelo.posits[i].id, id);
			if (this.modelo.posits[i].id == id) {
				return i;
			}
		}
	}

	insertarPosit() {
		this.vista.insertarPosit(this.modelo.id);
		this.modelo.posits.push(new Posit(this.modelo.id));
		console.log(this.modelo.posits[this.modelo.id], this.modelo.id);
		this.modelo.id += 1;
	}

	cerrarPosit(id) {
		this.modelo.posits.splice(this.buscarPosPosit(id), 1);
		console.log(this.modelo.posits);
		this.vista.cerrarPosit(id);
	}

	cambiarTituloPosit(texto, id) {
		this.modelo.posits[this.buscarPosPosit(id)].titulo = texto;
		console.log(this.modelo.posits[this.buscarPosPosit(id)].titulo);
	}

	cambiarTextoPosit(texto, id) {
		this.modelo.posits[this.buscarPosPosit(id)].texto = texto;
		console.log(this.modelo.posits[this.buscarPosPosit(id)].texto);
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

	insertarPosit(id) {
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
		list_tit = title.addEventListener("keyup", function() {
			self.controlador.cambiarTituloPosit(title.value, id);
		});

		text_a = document.createElement("textarea");
		list_text = text_a.addEventListener("keyup", function() {
			self.controlador.cambiarTextoPosit(text_a.value, id);
		});
		text_a.setAttribute("placeholder", "Contenido");

		var cerrar_posit = document.createElement("span");
		cerrar_posit.setAttribute("class", "cerrar-posit");
		cerrar_posit.addEventListener("click", function() {
			self.controlador.cerrarPosit(id);
		});

		posit_head.appendChild(title);
		posit_head.appendChild(cerrar_posit);
		posit.appendChild(posit_head);
		posit_wrap.appendChild(text_a);
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