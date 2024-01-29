const form = document.querySelector('.feedback-form');
form.addEventListener('input', onFormInput);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('input');
    const message = document.querySelector('textarea');
    const emailValue = email.value;
    const messageValue = message.value;
    const data = {
        email: emailValue,
        message: messageValue,
    }
    if (emailValue.trim() !== '' && messageValue.trim() !== '') {
    console.log(data);
    localStorage.clear();
    form.reset();
    }
});

function onFormInput() {
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const data = {
        email,
        message,
    };
    saveToLocSt('feedback-form-state', data);
}

function saveToLocSt(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}

function loadFromLocSt(key) {
    const zip = localStorage.getItem(key);
    try {
        JSON.parse(zip);
    } catch {
        return zip;
    }

}
function init() {
    const data = loadFromLocSt('feedback-form-state') || {};
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}

init()