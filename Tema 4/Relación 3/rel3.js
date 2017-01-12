function listeners() {
	document.getElementById("myform").addEventListener("submit", function(e){
		
		var uid_success = checkFormFieldLength("uid", 5, 12);
		var pass_success = checkFormFieldLength("pass", 7, 12);
		var name_success = checkAlphabetesOnly("name");
		var email_success = checkEmail("email");
		var zip_success = checkNumericOnly("zip");
		var country_success = checkSelectedDropDown("country");
		var sex_success = checkSelectedRadio("sex-male") || checkSelectedRadio("sex-female");
		var lang_success = checkSelectedCheckbox("lang-en") || checkSelectedCheckbox("lang-nen");

		if (!uid_success || !pass_success || !name_success || !email_success || !zip_success ||
			!country_success || !sex_success || !lang_success){
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else {
			return true;
		}
	});
}

function checkFormFieldLength(form_field_id, min, max, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var sucess = form_field.value.length >= min && form_field.value.length <= max;

	if (!sucess && highlight) {
		document.getElementById(form_field_id).style.backgroundColor = "#EF6464";
		document.getElementById(form_field_id).style.color = "#FFF";
		document.getElementById(form_field_id).value = "";
		document.getElementById(form_field_id).placeholder = "Error: must be " + min + "-" + max + "characters";
	}
	
	return sucess;
}

function checkEmail(form_field_id, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var reg_exp = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
	var sucess = reg_exp.test(form_field.value);

	if (!sucess && highlight) {
		document.getElementById(form_field_id).style.backgroundColor = "#EF6464";
		document.getElementById(form_field_id).style.color = "#FFF";
		document.getElementById(form_field_id).value = "";
		document.getElementById(form_field_id).placeholder = "Error: invalid email format";
	}

	return sucess;
}

function checkAlphabetesOnly(form_field_id, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var reg_exp = new RegExp(/^[a-zA-Z]+$/);
	var sucess = reg_exp.test(form_field.value);

	if (!sucess && highlight) {
		document.getElementById(form_field_id).style.backgroundColor = "#EF6464";
		document.getElementById(form_field_id).style.color = "#FFF";
		document.getElementById(form_field_id).value = "";
		document.getElementById(form_field_id).placeholder = "Error: alphabetes characters";
	}

	return sucess;
}

function checkNumericOnly(form_field_id, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var reg_exp = new RegExp(/^[0-9]{5}$/);
	var sucess = reg_exp.test(form_field.value);

	if (!sucess && highlight) {
		document.getElementById(form_field_id).style.backgroundColor = "#EF6464";
		document.getElementById(form_field_id).style.color = "#FFF";
		document.getElementById(form_field_id).value = "";
		document.getElementById(form_field_id).placeholder = "Error: only numeric";
	}

	return sucess;
}

function checkSelectedDropDown(form_field_id, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var success = form_field.selectedIndex != 0;
	
	if (!success) {
		document.getElementById(form_field_id).style.backgroundColor = "#EF6464";
		document.getElementById(form_field_id).style.color = "#FFF";
	}

	return success;
}

function checkSelectedRadio(form_field_id, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var success = form_field.checked;
	
	if (!success) {
		document.getElementById("lab-"+form_field_id).style.color = "#EF6464";
	}

	return success;
}

function checkSelectedCheckbox(form_field_id, highlight=true) {
	var form_field = document.getElementById(form_field_id);
	var success = form_field.checked;
	
	if (!success) {
		document.getElementById("lab-"+form_field_id).style.color = "#EF6464";
	}

	return success;
}

window.onload = function() {
	listeners();
}