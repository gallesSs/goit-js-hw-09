const form = document.querySelector(".feedback-form");
const inputEmail = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

updateFormInformation();

form.addEventListener("input", getFormInformation);
function getFormInformation() {
    const formObj = {
        email: inputEmail.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formObj));
};

function updateFormInformation() {
    const savedFormInfo = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    inputEmail.value = savedFormInfo.email ?? "";
    if (savedFormInfo) {
        textarea.value = savedFormInfo.message ?? "";
    }
};

form.addEventListener("submit", sentInformation);
function sentInformation(evt) {
    evt.preventDefault();
    const savedFormInfo = JSON.parse(localStorage.getItem(localStorageKey)) || {};

    if (savedFormInfo.email && savedFormInfo.message) {
        console.log(savedFormInfo);
    }
    localStorage.removeItem(localStorageKey);
    form.reset();
};