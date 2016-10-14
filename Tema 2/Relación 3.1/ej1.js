function validateCreditCard(credit_card) {
	var numbers = credit_card.split("-").join("");
	var len = numbers.length;
	var sum = 0;
	var one_type = true;

	for (var i = 0; i < len; i++) {
		sum += parseInt(numbers[i]);
		if (numbers[i] != numbers[0]) {
			one_type = false;
		}
	}

	if (len == 16 && sum != NaN && sum >= 16 && !one_type) {
		return true;
	} else {
		return false;
	}
}

alert(validateCreditCard("1211-1111-1111-1112"));