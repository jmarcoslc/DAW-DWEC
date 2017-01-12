google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(dibujarGrafica);

function dibujarGrafica() {
	var datos = google.visualization.arrayToDataTable([
		['Partido político', 'Escaños', {role:'style'}],
    	['PP', 137, "#0BB2FF"],
     	['PSOE', 85, "#ED0A00"],
     	['UP', 71, "#9A559A"],
     	['C\'S', 32, "#FCA136"],
     	['ERC-CATSI', 9, "#00C6A4"],
     	['CDC', 8, "#B9BF00"],
     	['PNV', 5, "#7EC2D6"],
     	['EH BILDU', 2, "#739EB6"],
     	['CCA-PNC', 1, "#F0497E"]
    ]);

    var opciones = {"title":"Resultados de las elecciones generales 2016",
    	"width": 800,
    	"height": 400,
    	"colors": ["#0BB2FF","#ED0A00","#9A559A","#FCA136","#00C6A4","#B9BF00","#7EC2D6","#739EB6","#F0497E"]
	}

	var grafico_circular = new google.visualization.PieChart(document.getElementById("insert"));
	var grafico_barras = new google.visualization.BarChart(document.getElementById("insert2"));
	grafico_circular.draw(datos, opciones);
	grafico_barras.draw(datos, opciones);
}