function hora() {
	var fechaHoy = new Date();
	var fecha85 = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(),fechaHoy.getUTCDay() + 85, 
		fechaHoy.getHours(), fechaHoy.getMinutes(), fechaHoy.getSeconds());
	var fecha187 = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(),fechaHoy.getUTCDay() - 187,
		fechaHoy.getHours(), fechaHoy.getMinutes(), fechaHoy.getSeconds());
	var anos2 = new Date(fecha85.getFullYear() + 2, fecha85.getMonth(),fecha85.getUTCDay(), 
		fecha85.getHours(), fecha85.getMinutes(), fecha85.getSeconds());
	var fecha1872hours = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(),fechaHoy.getUTCDay(),
		fechaHoy.getHours() - 24, fechaHoy.getMinutes(), fechaHoy.getSeconds());
	var fechaResto = fecha85 - fecha187;

	document.write(fechaHoy);
	document.write("<br/>");
	document.write(fecha85);
	document.write("<br/>");
	document.write(fecha187);
	document.write("<br/>");
	document.write(anos2);
	document.write("<br/>");
	document.write(fecha1872hours);
	document.write("<br/>");
	document.write(Date(fechaResto));
}

hora();