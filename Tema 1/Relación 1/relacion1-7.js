nota = parseInt(window.prompt("Introduce una nota"));

switch(nota) {
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		alert("Suspenso");
		break;
	case 5:
	case 6:
		alert("Aprobado");
		break;
	case 7:
	case 8:
		alert("Notable");
		break;
	case 9:
	case 10:
		alert("Sobresaliente");
		break;
	default:
		alert("Has introducido una nota inválida");
		break;
}
