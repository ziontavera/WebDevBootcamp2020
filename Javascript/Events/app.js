const btn = document.querySelector('#v2');


btn.onclick = function () {
    console.log('clicked');
    console.log('asdas');
}


btn.addEventListener('mouseenter', e => {
    console.log('hello');
    enterEventCount++;
    console.log('mouseenter event' + enterEventCount + '.');
});

btn.addEventListener('mouseleave', e => {
    console.log('goodbye');
    leaveEventCount++;
    console.log('mouseleave event' + leaveEventCount + '.');
});


document.querySelector('h1').onclick = () => {
    alert('u clicked h1')
}
// btn.onmouseenter = console.log('mouse enter');