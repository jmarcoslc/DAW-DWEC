/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

a) find largest number

b) find longest string

c) find even numbers

d) find odd numbers

e) find words that contain 'is'

f) assert all numbers are divisible by three

g)  zip two arrays together

h) sort joined array from smallest to largest

i) remove the first word in the array

j) place a new word at the start of the array

k) replace some elements

l) Over an array with names, find all entries whose firstname starts with 'J',  create projection combined of only the initials of the name and then sort alphabetically
*/

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

function changeValues(arr, start, end, value) {
	for (let i=start; i<=end; i++) {
		arr[i] = value;
	}
	/*arr.forEach(function(value, index) {
		if (start <= index <= end) {
			arr[index] = value
		} else {
			return;
		}
	});*/
}

function names(arr, start_letter) {
	var match = new Array();
	var initials = new Array();

	arr.forEach(function(item, index) {
		if (item[0] == start_letter) {
			match.push(item);
		}

		var initials_container = "";

		item.split(" ").forEach(function(item) {
			initials_container += item[0];
		});

		initials.push(initials_container);
	});

	return [match, initials];
}

window.onload = function() {
	var arr = [1,2,5,789,20];
	var arr_str = ["12345", "adasdasdasdasdasdasdsaasdasdsadsadasdsas", "asdasdad", "askdgaskjdgsakjhda asdas is"];
	var arr_names = ["Mónica Daza", "Marcos Leyva", "Cristian Soria", "José Fernández"];
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
	changeValues(arr_str, 1,2, "lalalal");
	document.getElementById("insert").innerHTML += changeValues(arr_str, 1,2, "lalalal") + "<br>";
	document.getElementById("insert").innerHTML += names(arr_names, "J") + "<br>";
}	