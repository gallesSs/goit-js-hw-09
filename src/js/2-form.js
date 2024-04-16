const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const email = document.querySelector("input");

form.addEventListener("input", handleForm);
form.addEventListener("submit", handleSubmit);

populateForm();

function handleForm() {
    const formObj = {
        mail: email.value.trim(),
        message: textarea.value.trim()
    }
    const formObjJSON = JSON.stringify(formObj);
    localStorage.setItem(STORAGE_KEY, formObjJSON);
}

function populateForm(event) {
    const savedInfo = localStorage.getItem(STORAGE_KEY);
    const savedInfoJSON = JSON.parse(savedInfo);
    if (savedInfoJSON.mail && savedInfoJSON.message) {
        textarea.value = savedInfoJSON.message;
        email.value = savedInfoJSON.mail;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}