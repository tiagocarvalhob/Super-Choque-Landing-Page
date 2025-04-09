let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let itens = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator ? indicator.querySelectorAll('ul li') : [];
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }

    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = "0" + (active + 1);
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', '1');
    active = (active < lastPosition) ? active + 1 : firstPosition;
    setSlider();
    itens[active].classList.add('active');
};

prevButton.onclick = () => {
    list.style.setProperty('--calculation', '-1');
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }
    active = (active > firstPosition) ? active - 1 : lastPosition;
    setSlider();
    itens[active].classList.add('active');
};


