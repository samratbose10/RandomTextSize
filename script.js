const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

inputText.addEventListener('input', updateText);

function updateText() {
    const text = inputText.value;
    outputText.innerHTML = '';
    for (let char of text) {
        const span = document.createElement('span');
        span.classList.add('char');
        span.textContent = char;
        setRandomStyle(span);
        outputText.appendChild(span);
    }
}

function setRandomStyle(element) {
    const randomSize = Math.floor(Math.random() * 30) + 10; 
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
    element.style.fontSize = `${randomSize}px`;
    element.style.color = randomColor;
}

setInterval(() => {
    document.querySelectorAll('.char').forEach(setRandomStyle);
}, 1000);