// Hover efekt u navigace
let headerUnderline = document.querySelector('#header__underline');
let headerItem = document.querySelectorAll('.header__item');
let headerList = document.querySelector('.header__list');

function setUnderline(navElem) {
    headerUnderline.style.left = navElem.offsetLeft + "px";
    headerUnderline.style.width = navElem.offsetWidth + "px";
};

headerItem.forEach(item => {
    item.addEventListener('mouseenter', event => {
        setUnderline(event.target);
    });
});

headerList.onmouseleave = () => {
    headerUnderline.style.visibility = 'hidden';
};

headerList.onmouseenter = () => {
    headerUnderline.style.visibility = 'visible';
};