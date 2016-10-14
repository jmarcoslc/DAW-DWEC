function initWebCam() {
	var opciones = {video: true};

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

	if (navigator.getUserMedia) {
		navigator.getUserMedia(opciones, insertarWebCam, error);
	}
}

function initAudio() {
	var opciones = {audio: true};

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

	if (navigator.getUserMedia) {
		navigator.getUserMedia(opciones, insertarAudio, error);
	}
}

function insertarWebCam(flujo) {
	document.getElementById("webcam").src = window.URL.createObjectURL(flujo);
}

function insertarAudio(flujo) {
	document.getElementById("audio").src = window.URL.createObjectURL(flujo);
}

function initWebAudio() {
	var opciones = {video: true, audio: true};

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

	if (navigator.getUserMedia) {
		navigator.getUserMedia(opciones, insertarWebCam, error);
	}
}

function error(error) {
	console.log(error);
}

window.onload = function() {
	initWebAudio();
}