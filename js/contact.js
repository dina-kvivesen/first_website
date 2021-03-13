const form = document.querySelector("form");
const formName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");
const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");

// function to run when the form is submitted
function validateForm(event) {
    event.preventDefault();
    
    message.innerHTML = '<div class="message">Your message has been sent</div>';

    if (checkLength(formName.value, 1)  === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        message.innerHTML = "";
    }
    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        message.innerHTML = "";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        message.innerHTML = "";
    }
    // clear all input values
    form.reset();
}

form.addEventListener("submit", validateForm);

// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}