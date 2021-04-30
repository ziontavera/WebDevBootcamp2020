const btn = document.querySelector('button');
const h3 = document.querySelector('h3');

btn.addEventListener('click', () => {
    const newColor = generateRandColor();
    document.body.style.backgroundColor = newColor;
    document.body.style.transition = '1s';
    h3.innerText = newColor;
})

const generateRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb( ${r}, ${g}, ${b})`;
}