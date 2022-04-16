// Input field objects
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone-number');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('password-confirm');

// Input label objects
let firstNameLabel = document.getElementById('first-name-label');
let lastNameLabel = document.getElementById('last-name-label');
let emailLabel = document.getElementById('email-label');
let phoneLabel = document.getElementById('phone-label');
let passwordLabel = document.getElementById('password-label');
let confirmPasswordLabel = document.getElementById('confirm-password-label');

// Colors
const burnOrange = '#ffae00';
const positiveGreen = '#4ed43c';
const negativeRed = '#ec1919';


const validateEmail = address => {
    // Checks if address is a valid email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (address.match(emailRegex)) ? true : false;
}

const validatePassword = password => {
    // Checks if password has at least one number, one special character, and is between 8 and 32 chars long
    const passwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    return (password.match(passwdRegex)) ? true : false;
}

emailInput.addEventListener('focusout', () => {
    if(emailInput.value){
        if(validateEmail(emailInput.value)){
            emailLabel.style.color = positiveGreen;
        }
        else {
            console.log('failed!');
            emailLabel.style.color = negativeRed;
        }
    }
    else {
        emailLabel.style.color = burnOrange;
    }
});

passwordInput.addEventListener('focusout', () => {
    if(passwordInput.value){
        if(validatePassword(passwordInput.value)){
            passwordLabel.style.color = positiveGreen;
        }
        else {
            console.log('failed!');
            passwordLabel.style.color = negativeRed;
        }
    }
    else {
        passwordLabel.style.color = burnOrange;
    }
});

firstNameInput.addEventListener('focusout', () => {
    if(firstNameInput.value) firstNameLabel.style.color=positiveGreen;
    else firstNameLabel.style.color=burnOrange;
});
