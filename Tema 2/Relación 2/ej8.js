function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomImage(imgs) {
	var imgCount = imgs.length - 1;

	document.write("<img src='"+imgs[randomNumber(0, imgCount)]+"'></img>");
}

var imgs = new Array(
		"http://imagenesbonitasdepaisajes.com/wp-content/uploads/2016/03/imagenes-paisajes-hermosos-para-descargar.png",
		"http://www.paisajesbonitos.org/wp-content/uploads/2015/11/paisajes-bonitos-de-oto%C3%B1o-lago.jpg",
		"http://2.bp.blogspot.com/-OJuFp6JYatU/Ulyvp1MX10I/AAAAAAAB7CM/LmFsKsEjA8g/s1600/3-fotos-de-cascadas-en-paisajes-naturales-waterfalls-and-amazing-natural-landscapes-r%C3%ADos-rivers+(13).jpg"
	);

randomImage(imgs);