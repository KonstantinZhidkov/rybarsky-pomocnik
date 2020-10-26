$(document).ready(() => {
    // Navigace burger
    $('.header__toggle').on('click', () => {
        $('.header__toggle, .header__burger, .header__navigation').toggleClass('active');
        $('body').toggleClass('block');
    });

    $('.header__list').on('click', () => {
        $('.header__toggle, .header__burger, .header__navigation').removeClass('active');
        $('body').removeClass('block');
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop()) {
            $('.header__body').addClass('nonstick');
        } else {
            $('.header__body').removeClass('nonstick');
        }
    });

    // Navigace hover efekt (testuji čistý JavaScript + jQuery)
    let headerUnderline = document.querySelector('#header__underline');
    let headerItem = document.querySelectorAll('.header__item');

    function setUnderline(navElem) {
        headerUnderline.style.left = navElem.offsetLeft + "px";
        headerUnderline.style.width = navElem.offsetWidth + "px";
    }

    headerItem.forEach(item => {
        item.addEventListener('mouseenter', event => {
            setUnderline(event.target);
        });
    });

    $('.header__list').on('mouseleave', () => {
        $('#header__underline').css('visibility', 'hidden');
    }).on('mouseenter', () => {
        $('#header__underline').css('visibility', 'visible');
    });
});