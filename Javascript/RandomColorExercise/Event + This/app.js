const generateRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb( ${r}, ${g}, ${b})`;
}

// const btn = document.querySelectorAll('button');

// for (let button of btn) {
//     btn.addEventListener('click', () => {
//         console.log('clicked');
//     })
// }

const btn = document.querySelectorAll('button');

for (let button of btn) {
    button.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = generateRandColor();
    this.style.color = generateRandColor();
}