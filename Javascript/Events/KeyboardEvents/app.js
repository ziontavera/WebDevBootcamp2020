const button = document.querySelector('button')

const generateRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb( ${r}, ${g}, ${b})`;
}


button.addEventListener('click', colorize)


function colorize() {
    this.style.backgroundColor = generateRandColor();
    this.style.color = generateRandColor();
}

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            // button.style.marginBo = '5em';
            console.log("up");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
        case 'ArrowLeft':
            console.log("left");
            break;
        case 'ArrowRight':
            console.log("right");
            break;
        default:
            console.log('invalid')
    }
})