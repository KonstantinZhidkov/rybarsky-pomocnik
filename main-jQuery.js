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

    // Sticky navigace
    $(window).on('scroll', () => {
        if ($(window).scrollTop()) {
            $('.header__body').addClass('nonstick');
        } else {
            $('.header__body').removeClass('nonstick');
        }
    });
});