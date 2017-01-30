var first = document.getElementById("firstName");
var last = document.getElementById("lastName");
var email = document.getElementById("emailAddress");
var submit = document.getElementById("submitButton");
var entries = document.getElementById("guestEntries");

submit.addEventListener("click", submitGuest);

function submitGuest(){
	// alert( first.value + " " + last.value );
	var newEntry = document.createElement("h2");
	var newEntryText = document.createTextNode(first.value + " " + last.value + " | " + email.value);
	newEntry.appendChild(newEntryText);
	entries.appendChild(newEntry);
	first.value = "";
	last.value = "";
	email.value = "";
}
