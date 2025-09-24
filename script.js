//your JS code here. If required.
function formValidation(e) {
	e.preventDefault()
	const age = document.getElementById("age").value.trim();
	const name = document.getElementById("name").value.trim();
	if(!age || !name){
		alert("Please enter valid details")
		return
	}
	const showMessage = (message, delay=4000) => {
		setTimeout(()=> alert(message), delay)
	}
	validateWithPromise(age, name)
	.then(message => showMessage(message))
	.catch(error => showMessage(error))
}

function validateWithPromise(age, name){
	return new Promise((resolve, reject) => {
	if(age > 18){
		resolve(`Welcome, ${name}. You can vote.`)
	}else {
		reject(`Oh sorry ${name}. You aren't old enough.`)
	}
	})
}