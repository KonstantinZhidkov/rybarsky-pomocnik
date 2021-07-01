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

// Sticky navigation 10px gap fix
window.addEventListener('scroll', () => {
    const top = window.pageYOffset;
    if (top > 0) {
        document.querySelector('.revirGallery').style.marginTop = '80px';
    } else {
        document.querySelector('.revirGallery').style.marginTop = '90px';
    }
});

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
/*
const revirGalleryImages = document.querySelectorAll('.revirGallery__image');

revirGalleryImages.forEach(item => {
   item.addEventListener('click', function(event) {
       event.target.classList.add('popup');

       switch (event.target.id) {
           case '1':
               event.target.attributes.src.nodeValue = '../../districts-images/revir_473051/deeper-test.jpg';
               break;
       }

       if(!event.target.classList.contains('popup') && event.target.parentNode.classList.contains('active')) {
           switch (event.target.id) {
                 case '1':
                   event.target.attributes.src.nodeValue = '../../districts-images/revir_473051/1.jpg';
                   break;
           }
       }

       console.log(event.target)
   });
});*/
