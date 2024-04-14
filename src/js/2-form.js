const STORAGE_KEY = "feedback-form-state";
const MAIL_KEY = "email-form-state";

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const email = document.querySelector("input");

textarea.addEventListener("input", onTextareaInput);
form.addEventListener("submit", handleSubmit);
email.addEventListener("input", onEmailInput);

populateTextarea();
populateEmail();


function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}

function onEmailInput(event) {
    const mail = event.target.value;
    localStorage.setItem(MAIL_KEY, mail);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        textarea.value = savedMessage;
    }
}

function populateEmail() {
    const savedMail = localStorage.getItem(MAIL_KEY);
    if (savedMail) {
        email.value = savedMail;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(MAIL_KEY)
}