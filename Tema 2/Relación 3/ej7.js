function palindromo(str) {
	var str_normal = str.toLowerCase().split("").join("");
	var str_invertido = str.toLowerCase().split("").reverse().join("");

	if (str_normal == str_invertido) {
		return true;
	} else {
		return false;
	}
}

document.write(palindromo("olo"));