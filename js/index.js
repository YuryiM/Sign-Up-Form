// Input field objects
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone-number');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('password-confirm');

// Input labels
let emailLabel = document.getElementById('email-label');


// Colors
const burnOrange = '#ffae00';
const positiveGreen = '#4ed43c';
const negativeRed = '#ec1919';


const validateEmail = address => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (address.match(emailRegex)) ? true : false;
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
