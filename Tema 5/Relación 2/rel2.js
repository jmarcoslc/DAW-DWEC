const ANCHO_LADRILLO = 100;
const ALTO_LADRILLO = 25;
const HUECO_LADRILLOS = 5;

class Juego {
	constructor(ancho, alto, bolas, ladrillos) {
		this.ancho = ancho;
		this.alto = alto;
		this.n_bolas = bolas;
		this.n_ladrillos = ladrillos;
		this.bolas = new Array();
		this.base = null;
		this.ladrillos = new Array();
		this.impactos = 0;
	}

	start() {
		this.pintarSVG();
		this.pintarBolas();
		this.pintarBase();
		this.pintarLadrillos();
		this.asignarEventos();
		this.loop();
	}

	loop() {
		var self = this;
		var inter = null;

		inter = setInterval(function() {
			for (let i=0; i<self.bolas.length; i++) {

				//Colisión con la base
				if (self.bolas[i].x >= self.base.x && self.bolas[i].x <= self.base.x + self.base.ancho &&
					self.bolas[i].y >= self.base.y && self.bolas[i].y <= self.base.y + self.base.alto) {
					self.bolas[i].vy *= -1;
				}

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
					clearInterval(inter);
				}

				//Colisión con ladrillos
				for (let n_ladrillo = 0; n_ladrillo<self.n_ladrillos; n_ladrillo++) {

					//Cálculo de los 8 puntos de impacto de la circunferenbola
					if (document.getElementById("ladrillo"+n_ladrillo).style.display != "none") {
						for (let grad=0; grad<360; grad+=45) {
							var p_x = self.bolas[i].r * Math.cos(grad) + self.bolas[i].x;
							var p_y = self.bolas[i].r * Math.cos(grad) + self.bolas[i].y;
							//console.log(grad);

							if (p_x >= self.ladrillos[n_ladrillo].x && p_x <= self.ladrillos[n_ladrillo].x + self.ladrillos[n_ladrillo].ancho &&
								p_y >= self.ladrillos[n_ladrillo].y && p_y <= self.ladrillos[n_ladrillo].y + self.ladrillos[n_ladrillo].alto) {
								
								switch(grad) {
									case 45:
									case 90:
									case 135:								
									case 270:
									self.bolas[i].vy *= -1;
									break;
									case 0:
									case 180:
									case 225:
									case 285:
									case 315:
									self.bolas[i].vx *= -1;
									break;

									self.impactos += 1;
								}

								document.getElementById("ladrillo"+n_ladrillo).style.display = "none";
								if (self.impactos == self.n_ladrillos) {
									clearInterval(inter);
								}
							}
						}
					}
				}

				if (self.impactos >= self.n_ladrillos) {
					clearInterval(inter);
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
		this.base = new Barra(Math.floor(this.ancho/2) - 75, this.alto - 15, 150, 15);

		var base_grafico = document.createElementNS("http://www.w3.org/2000/svg", 
				"rect");
		base_grafico.setAttribute("width", this.base.ancho);
		base_grafico.setAttribute("height", this.base.alto);
		base_grafico.setAttribute("x", this.base.x);
		base_grafico.setAttribute("y", this.base.y);
		base_grafico.setAttribute("id", "base");
		base_grafico.setAttribute("style", "fill:"+this.base.color+";");
		this.svg.appendChild(base_grafico);
	}

	pintarLadrillos() {
		var ladrillo = 0;
		var ladrillos_fila = Math.floor((this.ancho - (HUECO_LADRILLOS * this.n_ladrillos) * 2) / ANCHO_LADRILLO);
		var n_filas = this.n_ladrillos / ladrillos_fila;
		var pos_ini = ((this.ancho - ladrillos_fila * ANCHO_LADRILLO) / 2) - HUECO_LADRILLOS;

		for(let i=0; i<n_filas; i++) {
			for (let j=0; j<ladrillos_fila && ladrillo<this.n_ladrillos; j++, ladrillo++) {

				this.ladrillos.push(new Barra(pos_ini, i*ALTO_LADRILLO + HUECO_LADRILLOS*i, ANCHO_LADRILLO, ALTO_LADRILLO, "#FA8258"));
				pos_ini += ANCHO_LADRILLO + HUECO_LADRILLOS;
				
				var ladrillo_grafico = document.createElementNS("http://www.w3.org/2000/svg", 
					"rect");
				ladrillo_grafico.setAttribute("width", this.ladrillos[ladrillo].ancho);
				ladrillo_grafico.setAttribute("height", this.ladrillos[ladrillo].alto);
				ladrillo_grafico.setAttribute("x", this.ladrillos[ladrillo].x);
				ladrillo_grafico.setAttribute("y", this.ladrillos[ladrillo].y);
				ladrillo_grafico.setAttribute("id", "ladrillo"+ladrillo);
				ladrillo_grafico.setAttribute("style", "display:block;fill:"+this.ladrillos[ladrillo].color+";");
				this.svg.appendChild(ladrillo_grafico);
			}

			pos_ini = ((this.ancho - ladrillos_fila * ANCHO_LADRILLO) / 2) - HUECO_LADRILLOS;
		}
	}

	pintarBolas() {
		var rand_vx;
		var rand_vy;

		for (let i=0; i<this.n_bolas; i++) {
			/*rand_vx = Math.floor(Math.random() * 10 + 1);
			rand_vy = Math.floor(Math.random() * 10 + 1);*/
			rand_vx = 4.5;
			rand_vy = 4.5;

			this.bolas.push(new Bola(this.ancho/2, this.alto-15, 10, rand_vx, rand_vy));

			var bola_grafico = document.createElementNS("http://www.w3.org/2000/svg", 
				"circle");
			bola_grafico.setAttribute("cx", this.bolas[i].x);
			bola_grafico.setAttribute("cy", this.bolas[i].y);
			bola_grafico.setAttribute("r", this.bolas[i].r);
			bola_grafico.setAttribute("fill", this.bolas[i].fill);
			bola_grafico.setAttribute("id", i);
			this.svg.appendChild(bola_grafico);
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

class Barra {
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
	constructor(x, y, radio, vx, vy) {
		this.x = x;
		this.y = y;
		this.r = radio;
		this.vx = vx;
		this.vy = vy;
		this.fill = this.colorAleatorio();
	}

	colision(objeto) {
		if (this.x > objeto.x && this.x < objeto.x + objeto.ancho &&
			this.y > objeto.y && this.y < objeto.y + objeto.alto) {
			return true;
		}

		return false;
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
	var juego = new Juego(700, 400, 1, 15);
	juego.start();
}