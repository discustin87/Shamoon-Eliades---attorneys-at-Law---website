const openBTN = document.getElementById('open-btn');
const closeBTN = document.getElementById('close-btn');
const openCloseBTN = document.querySelector('.ham-menu');

const consulBTN = document.getElementById('consul-btn');
const widget = document.getElementById('widget');


// Email animation
const labels = document.querySelectorAll('.form-control label');

function toggleShowClass(e) {
    if (e.target.parentElement.classList.contains('open-btn') || e.target.parentElement.classList.contains('close-btn')){
        openCloseBTN.classList.toggle('show');
    } else {
        
    }
}


// consul btn
consulBTN.addEventListener('click', toggleWidgetShowClass);

function toggleWidgetShowClass(e) {
    if (e.target.classList.contains('consul-btn') || e.target.parentElement.classList.contains('close-widget-btn')){
        widget.classList.toggle('widget-show');
    }
}

// consulBTN.addEventListener('click', toggleWidgetShowClass);
// closeBTN.addEventListener('click', toggleShowClass);
// consul btnend



// scoll animation *******************************************************
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show');
        }
    })
}

// EMAIL ANIMATION
labels.forEach(label => {
    label.innerHTML = label.innerText 
        .split('')
        .map((letter, idx) => `<span  style="transition-delay: ${idx * 50}ms;">${letter}</span>`)
        .join('')
});

// ripple BTN
const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const X = e.clientX
        const Y = e.clientY
        
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = X - buttonLeft
        const yInside = Y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle');
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500);
    })
});