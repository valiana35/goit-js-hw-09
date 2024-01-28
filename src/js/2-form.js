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
    if (emailValue && messageValue !== '');
    console.log(data);
    localStorage.clear();
    form.reset();
});

function onFormInput() {
    const name = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const data = {
        name,
        message,
    };
    saveToLocSt('feedback-form-state', data);
    loadFromLocSt('feedback-form-state');
}

function saveToLocSt(key, value) {
    const zip = JSON.stringify(value);
    localStorage.setItem(key, zip);
}

function loadFromLocSt(key) {
    const zip = localStorage.getItem(key);
    localStorage.setItem(key, zip);
    try {
        JSON.parse(zip);
    } catch {
        return zip;
    }
}