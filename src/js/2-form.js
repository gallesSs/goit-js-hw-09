const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;
const STORAGE_KEY = "feedback-form-state";

populateForm();

form.addEventListener("input", getFormInformation);
function getFormInformation() {
    const formObj = {
        email: input.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObj));
};

function populateForm() {
    const savedFormInfo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    input.value = savedFormInfo.email ?? "";
    if (savedFormInfo) {
        textarea.value = savedFormInfo.message ?? "";
    }
};

form.addEventListener("submit", sentInformation);
function sentInformation(event) {
    event.preventDefault();
    const savedFormInfo = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    if (savedFormInfo.email && savedFormInfo.message) {
        console.log(savedFormInfo);
    }
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
};