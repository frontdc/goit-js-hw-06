const sizeControl = document.querySelector('input#font-size-control')
const text = document.querySelector('span#text')


sizeControl.addEventListener('input', event => {
    text.style.fontSize = `${event.target.value}px`
})