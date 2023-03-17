const formInput = document.querySelector('#validation-input')

formInput.addEventListener('blur', onBlurBorderColor)

function onBlurBorderColor(event) {
    let valueInput = event.currentTarget.value
    if (valueInput.length === Number(formInput.dataset.length)) {
        formInput.classList.add('valid');
        formInput.classList.remove('invalid');
      }
      if (!formInput.value.length ) {
        formInput.classList.remove('valid');
        formInput.classList.remove('invalid');
      }
      if (
        formInput.value.length !== Number(formInput.dataset.length) &&
        formInput.value.length
      ) {
        formInput.classList.add('invalid');
      }
}