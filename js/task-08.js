const emailRef = document.querySelector('[name="email"]')
const paswRef = document.querySelector('[name="password"]')
const btnRef = document.querySelector('button')

const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", handleSubmit);

const elem = {}

function handleSubmit(event) {
    event.preventDefault();

const emailRef = event.currentTarget.elements.email;
const paswRef = event.currentTarget.elements.password;

if (!emailRef.value || !paswRef.value){
    return alert('Заповніть всі поля')
} else {
    elem.emailRef = emailRef.value
    elem.paswRef = paswRef.value
    console.log(elem);
}
event.currentTarget.reset();
}


