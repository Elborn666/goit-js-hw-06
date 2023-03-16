const textRef = document.querySelector('#text')
const controlerRef = document.querySelector('#font-size-control')


const onMouseMove = ({currentTarget}) => 
(textRef.style.fontSize = `${currentTarget.value}px`);


controlerRef.addEventListener('input', onMouseMove)