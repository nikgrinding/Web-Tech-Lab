const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const tshirtSelect = document.getElementById('tshirt');

// function to show error on the screen
function showError(field) {
	field.parentElement.classList.add('isError');
}

// function to clear error on the screen
function clearError(field) {
	field.parentElement.classList.remove('isError');
}

// function to check if name is valid
function validateName() {
	const nameValue = nameInput.value.trim();
	if (nameValue === '' || nameValue.length < 3) {
		showError(nameInput);
		return false;
	}
	clearError(nameInput);
	return true;
}

// function to check if email id is valid
function validateEmail() {
	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(emailInput.value.trim())) {
		showError(emailInput);
		return false;
	}
	clearError(emailInput);
	return true;
}

// function to check if phone number is valid
function validatePhone() {
	const phoneRegex = /^\d{10}$/;
	const phoneValue = phoneInput.value.trim();
	if (phoneValue !== '' && !phoneRegex.test(phoneValue)) {
		showError(phoneInput);
		return false;
	}
	clearError(phoneInput);
	return true;
}

// function to check if age is valid
function validateAge() {
	const ageValue = parseInt(ageInput.value);
	if (isNaN(ageValue) || ageValue < 18 || ageValue > 25) {
		showError(ageInput);
		return false;
	}
	clearError(ageInput);
	return true;
}

// function to check if tshirt size is select
function validateTshirt() {
	if (tshirtSelect.value === '') {
		showError(tshirtSelect);
		return false;
	}
	clearError(tshirtSelect);
	return true;
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const isNameValid = validateName();
	const isEmailValid = validateEmail();
	const isPhoneValid = validatePhone();
	const isAgeValid = validateAge();
	const isTshirtValid = validateTshirt();

	if (
		isNameValid &&
		isEmailValid &&
		isPhoneValid &&
		isAgeValid &&
		isTshirtValid
	) {
		alert('Registration successful!');
		form.reset();
	}
});

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
ageInput.addEventListener('input', validateAge);
tshirtSelect.addEventListener('change', validateTshirt);
