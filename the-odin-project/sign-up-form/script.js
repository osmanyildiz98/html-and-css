const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const passwordInput = document.getElementById('password');
const error = document.getElementById('error');
const confirmPasswordInput = document.getElementById('confirmPassword');
const button = document.getElementById('button');
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const formFooter = document.getElementById('form-footer');

const inputValues = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    password: '',
    confirmPassword: ''
};

firstNameInput.addEventListener('input', () => {
    inputValues.firstName = firstNameInput.value;
});

lastNameInput.addEventListener('input', () => {
    inputValues.lastName = lastNameInput.value;
});

emailInput.addEventListener('input', () => {
    inputValues.email = emailInput.value;

});

telInput.addEventListener('input', () => {
    inputValues.tel = telInput.value;
});

passwordInput.addEventListener('input', () => {
    inputValues.password = passwordInput.value;
});

confirmPasswordInput.addEventListener('input', () => {
    inputValues.confirmPassword = confirmPasswordInput.value;
});

let isFormValid = true;

button.addEventListener('click', () => {

    isFormValid = true;

    for (const inputName in inputValues) {
        const inputValue = inputValues[inputName];
        const inputElement = document.getElementById(inputName);

        if (inputValue === '') {
            inputElement.classList.add('red-border-color');
            isFormValid = false;
        }
        else {
            inputElement.classList.remove('red-border-color');
            inputElement.classList.add('green-border-color');
        }
    }

    if (inputValues.password === '' || inputValues.confirmPassword === '') {
        passwordInput.classList.add('red-border-color');
        confirmPasswordInput.classList.add('red-border-color');
    }
    else if (inputValues.password !== inputValues.confirmPassword) {
        isFormValid = false;
        error.textContent = 'Password Do Not Match';
        passwordInput.classList.remove('green-border-color');
        confirmPasswordInput.classList.remove('green-border-color');
        passwordInput.classList.add('red-border-color');
        confirmPasswordInput.classList.add('red-border-color');
    }
    else {
        error.textContent = '';
        passwordInput.classList.add('green-border-color');
        confirmPasswordInput.classList.add('green-border-color');
    };

});

form.addEventListener('submit', (e) => {
    if (!isFormValid) {
        e.preventDefault();
    }
    else {
        form.remove();
        const signTextContainer = document.createElement('div');
        signTextContainer.className = 'sign-text-container';
        const signText = document.createElement('p');
        signText.className = 'sign-text';
        formContainer.insertBefore(signTextContainer, formFooter);
        signTextContainer.appendChild(signText);
        signText.textContent = `Welcome ${inputValues.firstName} ${inputValues.lastName}!`;
    }
});
