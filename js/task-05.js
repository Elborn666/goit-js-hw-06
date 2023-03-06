const elem = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};


elem.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    elem.span.textContent = event.currentTarget.value;
}