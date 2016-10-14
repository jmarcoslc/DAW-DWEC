currentYear = new Date().getFullYear();

birthYear = window.prompt("Enter your birth year");
age = currentYear - parseInt(birthYear);

alert("You're " + age + " or " + (age - 1) + " years old.");

