function largestNumber(arr) {
	return arr.sort()[arr.length-1];
}

function longestString(arr) {
	return arr.sort(function(a, b) {
		return a > b;
	})[arr.length-1];
}

window.onload = function() {
	var arr = [1,2,5,789,20];
	var arr_str = ["12345", "ads", "asdasdad", "askdgaskjdgsakjhda asdas ss"];

	//document.getElementById("insert").innerHTML = largestNumber(arr);
	document.getElementById("insert").innerHTML = longestString(arr_str);
}