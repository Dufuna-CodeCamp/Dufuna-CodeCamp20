const root = document.documentElement
const range = document.querySelector('.slider')

let inputValue = ""

range.addEventListener('input', handleSlider)

function handleSlider(e) {
    let value = e.target.value
    console.log(value)
    root.style.setProperty('--slider', value)
}

function handleInputValue() {
    
}