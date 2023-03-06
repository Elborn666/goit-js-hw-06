const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector('#value')
let counterValue = 0

const onClickBtnIncrement = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue
};

const onClickBtnDecrement = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue
};

btnDecrement.addEventListener('click',onClickBtnDecrement) 
btnIncrement.addEventListener('click',onClickBtnIncrement)
