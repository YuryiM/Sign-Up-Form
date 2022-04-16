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
const burntOrange = '#ffae00';
const positiveGreen = '#4ed43c';
const negativeRed = '#ec1919';
const black = '#000000';

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

const validatePhoneNum = phoneNumber => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return (phoneNumber.match(phoneRegex)) ? true : false;
}

emailInput.addEventListener('focusout', () => {
    if(emailInput.value){
        if(validateEmail(emailInput.value)){
            emailLabel.style.color = positiveGreen;
        }
        else {
            emailLabel.style.color = negativeRed;
        }
    }
    else {
        emailLabel.style.color = burntOrange;
    }
});

passwordInput.addEventListener('focusout', () => {
    if(passwordInput.value){
        if(validatePassword(passwordInput.value)){
            passwordLabel.style.color = positiveGreen;
        }
        else {
            passwordLabel.style.color = negativeRed;
        }
    }
    else {
        passwordLabel.style.color = burntOrange;
    }
});

phoneInput.addEventListener('focusout', () => {
    if(phoneInput.value){
        if(validatePhoneNum(phoneInput.value)){
            phoneLabel.style.color = positiveGreen;
        }
        else {
            phoneLabel.style.color = negativeRed;
        }
    }
    else {
        phoneLabel.style.color = black;
    }
});

firstNameInput.addEventListener('focusout', () => {
    if(firstNameInput.value) firstNameLabel.style.color = positiveGreen;
    else firstNameLabel.style.color = burntOrange;
});

lastNameInput.addEventListener('focusout', () => {
    if(lastNameInput.value) lastNameLabel.style.color = positiveGreen;
    else lastNameLabel.style.color = black;
});
