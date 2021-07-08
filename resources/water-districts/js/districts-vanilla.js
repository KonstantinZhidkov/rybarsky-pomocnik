// Navigace
const headerUnderline = document.querySelector('#header__underline');
const headerItem = document.querySelectorAll('.header__item');
const headerList = document.querySelector('.header__list');

function setUnderline(navElem) {
    headerUnderline.style.left = navElem.offsetLeft + "px";
    headerUnderline.style.width = navElem.offsetWidth + "px";
}

headerItem.forEach(item => {
    item.addEventListener('mouseenter', event => {
        setUnderline(event.target);
    });
});

headerList.onmouseleave = () => {
    headerUnderline.style.visibility = 'hidden';
}

headerList.onmouseenter = () => {
    headerUnderline.style.visibility = 'visible';
}

// Tabs
document.querySelectorAll('.revirGallery__navigationItem').forEach(item => {
   item.addEventListener('click', function (event) {
       event.preventDefault();
       const id = event.target.getAttribute('href').replace('#', '');

       document.querySelectorAll('.revirGallery__navigationItem').forEach(navItem => {
           navItem.classList.remove('revirGallery__navigationItem-active')
       });
       document.querySelectorAll('.revirGallery__tab').forEach(navItem => {
           navItem.classList.remove('revirGallery__tab-active')
       });

       item.classList.add('revirGallery__navigationItem-active');
       document.getElementById(id).classList.add('revirGallery__tab-active');
   }) 
});

document.querySelector('.revirGallery__navigationItem').click();