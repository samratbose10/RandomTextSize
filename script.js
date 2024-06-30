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
        setRandomSize(span);
        outputText.appendChild(span);
    }
}

function setRandomSize(element) {
    const randomSize = Math.floor(Math.random() * 30) + 10; 
    element.style.fontSize = `${randomSize}px`;
}

setInterval(() => {
    document.querySelectorAll('.char').forEach(setRandomSize);
}, 1000);