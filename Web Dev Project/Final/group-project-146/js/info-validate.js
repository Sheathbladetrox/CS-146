function handleFormSubmit(event){
	event.preventDefault();
	if (validate()){
		let form = document.querySelector('.section .section');
		form.innerHTML = '';

		let h2 = document.createElement('h2');
		h2.innerHTML = 'Thank you for requesting more information!';
		form.appendChild(h2);
		form.classList.add('centered');
	}
}


function validate(){
	form = document.querySelector('form');
	if (form.name.value == ""){
		alert("Please enter a name!");
		// Change DOM
		return false;
	}

	if ((!Number.isInteger(parseInt(form.id.value, 10))) || form.id.value.toString().length != 8){
		alert("Invalid ID!");
		return false;
	}
	console.log(form.email.value);
	atpos_first = form.email.value.indexOf('@');
	atpos_last = form.email.value.lastIndexOf('@');
	dotpos_last = form.email.value.lastIndexOf('.');
	if (atpos_first == -1 || dotpos_last == -1 ||atpos_first != atpos_last || dotpos_last - atpos_first < 2){
		alert("Please enter a valid email!");
		return false;
	}

	if (form.major.value == ""){
		alert('Please select a major!');
		return false;
	}

	return true;
}

window.addEventListener('load', function() {
   // Once our window is loaded, we add the event listener for our post form
   document.querySelector('form').addEventListener('submit', handleFormSubmit);
});