const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')
const counterValue = document.querySelector('#value')

btnDecrement.addEventListener('click',() => {
    console.log('Click on decrement')
})

btnIncrement.addEventListener('click',() => {
    console.log('Click on increment')
})