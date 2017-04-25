function validateSignupForm(){
	resetErrorMsgs();
	signupForm = document.forms["signup-form"];
	usernameValid = validateUsername(signupForm.elements["username-field"].value);
	if(!usernameValid){
		document.getElementById("invalid-username").innerText = "Error: Usernames must consist of 4-20 Alphanumeric characters.";
	}
	firstNameValid = validateName(signupForm.elements["firstname-field"].value);
	if(!firstNameValid){
		document.getElementById("invalid-firstname").innerText = "Error: Names must consist of up 1-50 letters and whitespaces.";
	}
	lastNameValid = validateName(signupForm.elements["lastname-field"].value);
	if(!lastNameValid){
		document.getElementById("invalid-lastname").innerText = "Error: Names must consist of 1-50 letters and whitespaces";
	}
	passwordValid = validatePassword(signupForm.elements["password-field"].value);
	if(!passwordValid){
		document.getElementById("invalid-password").innerText = "Error: Passwords must consist of 4-20 visible ASCII characters. No whitespaces.";
	}
	passwordMatch = signupForm.elements["password-field"].value == signupForm.elements["confirmpassword-field"].value;
	if(!passwordMatch){
		document.getElementById("password-mismatch").innerText = "Error: The passwords you entered did not match";
	}
	if(passwordValid && usernameValid && passwordMatch&& firstNameValid && lastNameValid)
	{
	}
	return passwordValid && usernameValid && passwordMatch&& firstNameValid && lastNameValid;
}


function validateUsername(username){
	regex = /[\w]{4,20}/;
	return regex.test(username);
}


function validatePassword(password){
	regex = /[\w.!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]{4,20}/;
	return regex.test(password);
}


function validateName(name){
	regex = /[A-Z a-z - \s]{1,50}/;
	return regex.test(name);
}


function resetErrorMsgs(){
	document.getElementById("invalid-username").innerText = "";
	document.getElementById("invalid-firstname").innerText = "";
	document.getElementById("invalid-lastname").innerText = "";
	document.getElementById("invalid-password").innerText = "";
	document.getElementById("password-mismatch").innerText = "";
}