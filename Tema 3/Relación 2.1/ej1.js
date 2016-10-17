function largestNumber(arr) {
	return arr.sort()[arr.length-1];
}

function longestString(arr) {
	return arr.sort(function(a, b) {
		return a.length - b.length || a > b;
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

function assert3(arr) {
	return arr.every(function(valor) {
		return valor % 3 == 0;
	});
}

function zipArrays(arr1, arr2) {
	return arr1.concat(arr2);
}

function chift(arr) {
	var arr_2 = arr;
	arr_2.shift();

	return arr_2;
}

function unchift(arr, word) {
	var arr_2 = arr;
	arr_2.unshift(word);

	return arr_2;
}

window.onload = function() {
	var arr = [1,2,5,789,20];
	var arr_str = ["12345", "adasdasdasdasdasdasdsaasdasdsadsadasdsas", "asdasdad", "askdgaskjdgsakjhda asdas is"];
	var joined = zipArrays(arr, arr_str);

	document.getElementById("insert").innerHTML += largestNumber(arr) + "<br>";
	document.getElementById("insert").innerHTML += longestString(arr_str) + "<br>";
	document.getElementById("insert").innerHTML += evenNumbers(arr) + "<br>";
	document.getElementById("insert").innerHTML += oddNumbers(arr) + "<br>";
	document.getElementById("insert").innerHTML += findInChain(arr_str) + "<br>";
	document.getElementById("insert").innerHTML += assert3(arr) + "<br>";
	document.getElementById("insert").innerHTML += zipArrays(arr, arr_str) + "<br>";
	document.getElementById("insert").innerHTML += joined.sort(function(a, b) {
		return a.length - b.length || a > b;
	}) + "<br>";
	document.getElementById("insert").innerHTML += chift(arr_str) + "<br>";
	document.getElementById("insert").innerHTML += unchift(arr_str, "new word") + "<br>";
}	