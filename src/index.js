import './styles/index.scss';

import Swal from 'sweetalert2'

const inputName = document.querySelector("#input-name");
const inputSurname = document.querySelector("#input-surname");
const inputEmail = document.querySelector("#input-email");
const inputNumber = document.querySelector("#input-number");

const formElement = document.querySelector('#form');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const numberRegex = /[0-9]/;

formElement.addEventListener('submit', (e) => {
	e.preventDefault();

	validate();
});

inputName.addEventListener('keyup', validateTextField);
inputSurname.addEventListener('keyup', validateTextField);
inputNumber.addEventListener('keyup', validateNumberField);
inputEmail.addEventListener('keyup', validateEmailField);

function validateTextField(e) {
	if (e.target.classList.contains('invalid')) {
		if (e.target.value.length > 0) {
			e.target.classList.remove('invalid');
		}
	}
}

function validateEmailField(e) {
	if (emailRegex.test(e.target.value)) {
		e.target.classList.remove('invalid');
	}
}
function validateNumberlField(e) {
	if (numberRegex.test(e.target.value)) {
		e.target.classList.remove('invalid');
	}
}

function validate() {
	let isValid = true;

	if (inputName.value == "") {
		isValid = false;
		inputName.classList.add('invalid');
	}

	if (inputSurname.value == "") {
		isValid = false;
		inputSurname.classList.add('invalid');
	}

	if (inputEmail.value == "" || !emailRegex.test(inputEmail.value)) {
		isValid = false;
		inputEmail.classList.add('invalid');
	}

	if (inputNumber.value == "" || !numberRegex.test(inputNumber.value)) {
		isValid = false;
		inputNumber.classList.add('invalid');
	}

	if (isValid) {
		Swal.fire({
			title: 'Thanks for submitting!',
			text: 'The form is working well :)',
			icon: 'success',
			confirmButtonText: 'Cool',
			confirmButtonColor: '#9b5860'
		});
	} else {
		Swal.fire({
			title: 'Error!',
			text: 'Please fill all the fields.',
			icon: 'error',
			confirmButtonText: 'OK',
			confirmButtonColor: '#9b5860'
		});
	}
}