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

// Galerie
const popup = document.querySelector('.popup');
const revirGalleryImages = document.querySelectorAll('.revirGallery__image');
const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');
const popupCloseIcon = document.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const timeout = 800;
let unlock = true;

revirGalleryImages.forEach(image => {
    image.addEventListener('click', function (event) {
        switch (event.target.id) {
            case '1':
                popupImage.setAttribute('src', '../../districts-images/revir_473051/473051_1-1.png');
                break;
            case '2':
                popupImage.setAttribute('src', '../../districts-images/revir_473051/473051_2-2.png');
                break;
            case '3':
                popupImage.setAttribute('src', '../../districts-images/revir_473051/473051_3-3.png');
                break;
            case '4':
                popupImage.setAttribute('src', '../../districts-images/revir_473051/473051_4-4.png');
                break;
            case '5':
                popupImage.setAttribute('src', '../../districts-images/revir_473051/473051_5-5.png');
                break;
            case '6':
                popupImage.setAttribute('src', '../../districts-images/revir_473051/473051_6-6.png');
                break;
        }

        popupOpen(popup);
        popup.classList.add('open');
    });
});

popupCloseIcon.addEventListener('click', function(event) {
    event.preventDefault();
    popupClose(event.target.closest('.popup'));
});

function popupOpen(currentPopup) {
    if(currentPopup && unlock) {
        bodyLock();
    }
    currentPopup.addEventListener('click', function (event) {
       if(!event.target.closest('.popup__content')) {
           popupClose(event.target.closest('.popup'));
       }
    });
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.revirGallery').offsetWidth + "px";

    lockPadding.style.paddingRight = lockPaddingValue;
    document.querySelector('.header__navigation').style.marginRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function popupClose(popupActive) {
    popupActive.classList.remove('open');
    bodyUnlock();
}

function bodyUnlock() {
    setTimeout(function() {
        document.querySelector('.header__navigation').style.marginRight = '0px';
        lockPadding.style.paddingRight = '0px';
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(event) {
    if(event.which === 27) {
        popupClose(document.querySelector('.popup.open'));
    }
})