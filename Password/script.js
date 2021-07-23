function generatePassword(passwordLength, alphabet) {
	const randomValues = new Uint32Array(passwordLength);
  window.crypto.getRandomValues(randomValues); // generate random values
  
  password = "";
  for (let i = 0; i < passwordLength; i++) {
  	password += alphabet[randomValues[i] % alphabet.length];
  }
  
  return password;
}


function generate() {
	const alphabet = document.getElementById("alphabet").value;
	const pwLength = parseInt(document.getElementById("length").value);
	
	if (pwLength <= 0) {
		alert("Das Passwort braucht eine Mindestlänge von 1!");
	}
	
	document.getElementById("password").value = generatePassword(pwLength, alphabet);
}


function toggleHidden() {
	const pwField = document.getElementById("password");
	const toggleState = document.getElementById("toggle").checked;
	
	if (!toggleState) {
		pwField.type = "text";
	} else {
		pwField.type = "password";
	}
}
