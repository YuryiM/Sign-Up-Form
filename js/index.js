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

// Valid input checks
let emailValid = false;
let phoneNumValid = false;
let passwordValid = false;
let passwordEqual = false;


let submitBtn = document.getElementById('submit-btn');
let form = document.getElementById('form');

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

const passwordMatch = () => {
    return (passwordInput.value == confirmPasswordInput.value) ? true : false;
}

emailInput.addEventListener('focusout', () => {
    if(emailInput.value){
        if(validateEmail(emailInput.value)){
            emailValid = true;
            emailLabel.style.color = positiveGreen;
        }
        else {
            emailValid = false;
            emailLabel.style.color = negativeRed;
        }
    }
    else {
        emailValid = false;
        emailLabel.style.color = burntOrange;
    }
});

passwordInput.addEventListener('focusout', () => {
    if(passwordInput.value){
        if(validatePassword(passwordInput.value)){
            passwordValid = true;
            passwordLabel.style.color = positiveGreen;
        }
        else {
            passwordValid = false;
            passwordLabel.style.color = negativeRed;
        }
    }
    else {
        passwordValid = false;
        passwordLabel.style.color = burntOrange;
    }
});

confirmPasswordInput.addEventListener('focusout', () => {
    if(confirmPasswordInput.value){
        if(passwordMatch()){
            passwordEqual = true;
            confirmPasswordLabel.style.color = positiveGreen;
        }
        else {
            passwordEqual = false;
            confirmPasswordLabel.style.color = negativeRed;
        }
    }
    else {
        passwordEqual = false;
        confirmPasswordLabel.style.color = burntOrange;
    }
});

phoneInput.addEventListener('focusout', () => {
    if(phoneInput.value){
        if(validatePhoneNum(phoneInput.value)){
            phoneNumValid = true;
            phoneLabel.style.color = positiveGreen;
        }
        else {
            phoneNumValid = false;
            phoneLabel.style.color = negativeRed;
        }
    }
    else {
        phoneNumValid = false;
        phoneLabel.style.color = black;
    }
});

submitBtn.addEventListener('click', () => {
    if(emailValid && phoneNumValid && passwordValid && passwordEqual) console.log("SUBMITTED");
    else console.log("FAILED TO SUBMIT");
});

firstNameInput.addEventListener('focusout', () => {
    if(firstNameInput.value) firstNameLabel.style.color = positiveGreen;
    else firstNameLabel.style.color = burntOrange;
});

lastNameInput.addEventListener('focusout', () => {
    if(lastNameInput.value) lastNameLabel.style.color = positiveGreen;
    else lastNameLabel.style.color = black;
});
