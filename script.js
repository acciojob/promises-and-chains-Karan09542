//your JS code here. If required.
function formValidation(e) {
	e.preventDefault()
	const age = document.getElementById("age").value.trim();
	const name = document.getElementById("name").value.trim();
	if(!age || !name){
		alert("Please enter valid details.")
		return
	}
	

	const showMessage = (message, delay=4000) => {
		setTimeout(()=> alert(message), delay)
	}

	if(age > 18){
		showMessage("Welcome,. You can vote.")
	}else {
		showMessage("Oh sorry Doe. You aren't old enough.")
	}
}