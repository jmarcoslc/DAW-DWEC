function largestNumber(arr) {
	return arr.sort()[arr.length-1];
}

function longestString(arr) {
	return arr.sort(function(a, b) {
		return a > b;
	})[arr.length-1];
}

function evenNumbers(arr) {
	var arr_evens = new Array();

	arr.forEach(function(item, index){
		if (item % 2 == 1) {
			arr_evens.push(item);
		}
	});

	return arr_evens;
}

function oddNumbers(arr) {
	var arr_odds = new Array();

	arr.forEach(function(item, index){
		if (item % 2 == 0) {
			arr_odds.push(item);
		}
	});

	return arr_odds;
}

function findInChain(arr) {
	var items = new Array();
	
	arr.find(function(elemento){
		if (elemento.indexOf("is") >= 0) {
			items.push(elemento);
		}
	});

	return items;
}

window.onload = function() {
	var arr = [1,2,5,789,20];
	var arr_str = ["12345", "ads", "asdasdad", "askdgaskjdgsakjhda asdas is"];

	document.getElementById("insert").innerHTML += largestNumber(arr) + "<br>";
	document.getElementById("insert").innerHTML += longestString(arr_str) + "<br>";
	document.getElementById("insert").innerHTML += evenNumbers(arr) + "<br>";
	document.getElementById("insert").innerHTML += oddNumbers(arr) + "<br>";
	document.getElementById("insert").innerHTML += findInChain(arr_str) + "<br>";
}