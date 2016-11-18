class Juego {
	constructor(ancho, alto, bolas) {
		this.ancho = ancho;
		this.alto = alto;
		this.n_bolas = bolas;
		this.bolas = new Array();
	}

	start() {
		this.pintarSVG();
		this.meterBolas();
		this.loop();
	}

	loop() {
		var self = this;

		setInterval(function() {
			for (let i=0; self.bolas.length; i++) {
				if (document.getElementById(i).getAttribute("cx") >= self.ancho || 
					document.getElementById(i).getAttribute("cx") < 0 && self.bolas[i].vx < 0) {
					self.bolas[i].vx *= -1;
				}

				if (document.getElementById(i).getAttribute("cy") >= self.alto || 
					document.getElementById(i).getAttribute("cy") < 0 && self.bolas[i].vy < 0) {
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

	meterBolas() {
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
	var juego = new Juego(700, 400, 15);
	juego.start();
}