class Juego {
	constructor(ancho, alto, bolas) {
		this.ancho = ancho;
		this.alto = alto;
		this.n_bolas = bolas;
		this.bolas = new Array();
		this.base = null;
	}

	start() {
		this.pintarSVG();
		this.pintarBolas();
		this.pintarBase();
		this.asignarEventos();
		this.loop();
	}

	loop() {
		var self = this;

		setInterval(function() {
			for (let i=0; i<self.bolas.length; i++) {
				//Colisión horizontal
				if (self.bolas[i].x >= self.ancho || 
					self.bolas[i].x < 0 && self.bolas[i].vx < 0) {
					self.bolas[i].vx *= -1;
				}

				//Colisión vertical
				if (self.bolas[i].y < 0 && self.bolas[i].vy < 0) {
					self.bolas[i].vy *= -1;
				} else if (self.bolas[i].y >= self.alto) {
					document.getElementById(i).style.display = "none";
				}

				//Colisión con la base
				if (self.bolas[i].x >= self.base.x && self.bolas[i].x <= self.base.x + self.base.ancho &&
					self.bolas[i].y >= self.base.y && self.bolas[i].y <= self.base.y + self.base.alto) {
					self.bolas[i].vy *= -1;
				}

				var posx = self.bolas[i].x + self.bolas[i].vx;
				var posy = self.bolas[i].y + self.bolas[i].vy;

				document.getElementById(i).setAttribute("cx", posx);
				document.getElementById(i).setAttribute("cy", posy);

				self.bolas[i].x = posx;
				self.bolas[i].y = posy;
			}
		}, 1000/60);
	}

	asignarEventos() {
		this.listenerBase();
	}

	listenerBase() {
		var self = this;

		window.addEventListener("keydown", function(e) {
			console.log(e.key, self.base.x);

			if (e.key == "ArrowLeft") {
				self.base.x -= self.base.vx;
				document.getElementById("base").setAttribute("x", self.base.x);
			} else if (e.key == "ArrowRight"){
				self.base.x += self.base.vx;
				document.getElementById("base").setAttribute("x", self.base.x);
			}
		});
	}

	pintarBase() {
		this.base = new Base(Math.floor(this.ancho/2) - 75, this.alto - 15, 150, 15);

		var base_grafica = document.createElementNS("http://www.w3.org/2000/svg", 
				"rect");
		base_grafica.setAttribute("width", this.base.ancho);
		base_grafica.setAttribute("height", this.base.alto);
		base_grafica.setAttribute("x", this.base.x);
		base_grafica.setAttribute("y", this.base.y);
		base_grafica.setAttribute("id", "base");
		base_grafica.setAttribute("style", "fill:"+this.base.color+";");
		this.svg.appendChild(base_grafica);
	}

	pintarBolas() {
		var rand_vx;
		var rand_vy;

		for (let i=0; i<this.n_bolas; i++) {
			rand_vx = Math.floor(Math.random() * 10 + 1);
			rand_vy = Math.floor(Math.random() * 10 + 1);

			this.bolas.push(new Bola(10, rand_vx, rand_vy));

			var bola_grafica = document.createElementNS("http://www.w3.org/2000/svg", 
				"circle");
			bola_grafica.setAttribute("cx", this.bolas[i].x);
			bola_grafica.setAttribute("cy", this.bolas[i].y);
			bola_grafica.setAttribute("r", this.bolas[i].r);
			bola_grafica.setAttribute("fill", this.bolas[i].fill);
			bola_grafica.setAttribute("id", i);
			this.svg.appendChild(bola_grafica);
		}
	}

	pintarSVG() {
		this.svg = document.createElementNS("http://www.w3.org/2000/svg", 
			"svg");
		this.svg.setAttribute("width", this.ancho);
		this.svg.setAttribute("height", this.alto);
		document.getElementById("insert").appendChild(this.svg);
	}
}

class Base {
	constructor(posx, posy, ancho, alto, color="#888") {
		this.x = posx;
		this.y = posy;
		this.ancho = ancho;
		this.alto = alto;
		this.color = color;
		this.vx = 20;
	}
}

class Bola {
	constructor(radio, vx, vy) {
		this.x = radio;
		this.y = radio;
		this.r = radio;
		this.vx = vx;
		this.vy = vy;
		this.fill = this.colorAleatorio();
	}

	colorAleatorio() {
		var letras = "0123456789ABCDEF";
		var color = "#";

		for (let i = 0; i < 6; i++) {
			color += letras[Math.floor(Math.random() * letras.length)];		
		}

		return color;
	}
}

window.onload = function() {
	var juego = new Juego(700, 400, 1);
	juego.start();
}