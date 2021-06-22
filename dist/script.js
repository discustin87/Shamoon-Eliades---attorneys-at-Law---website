const openBTN = document.getElementById('open-btn');
const closeBTN = document.getElementById('close-btn');
const openCloseBTN = document.querySelector('.ham-menu');

function toggleShowClass(e) {
    if (e.target.parentElement.classList.contains('open-btn') || e.target.parentElement.classList.contains('close-btn')){
        openCloseBTN.classList.toggle('show');
    

        console.log('did it');
    } else {
        
    }
}

openBTN.addEventListener('click', toggleShowClass);
closeBTN.addEventListener('click', toggleShowClass);


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