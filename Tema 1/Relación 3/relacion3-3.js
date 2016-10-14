var maxYears = 90;

function calculateSupply(age, amountPerDay) {
	document.write("You will need " + ((maxYears - age) * 365) * amountPerDay + " to last you until the ripe old age of " + maxYears + "<br>");
}

function getYearsOld() {
	var yearsOld = window.prompt("Enter your age");
	return yearsOld;
}

function getEstimatedAmount() {
	var amount = window.prompt("Enter stimated amount of snack per day");
	return amount;
}

var yearsOld = getYearsOld();
var amount = getEstimatedAmount();
calculateSupply(yearsOld, amount);
var yearsOld = getYearsOld();
var amount = getEstimatedAmount();
calculateSupply(yearsOld, amount);
var yearsOld = getYearsOld();
var amount = getEstimatedAmount();
calculateSupply(yearsOld, amount);