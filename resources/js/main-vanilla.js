// *** Hover efekt u navigace ***
let headerUnderline = document.querySelector('#header__underline');
let headerItem = document.querySelectorAll('.header__item');
let headerList = document.querySelector('.header__list');

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


//*** Gallery block ***

// Swiper.js slider

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


// *** Počasí block ***

const enterAreaInput = document.querySelector('.enterArea__input');
const enterAreaSubmitButton = document.querySelector('.enterArea__submitButton');
const api = {
    key: "b42ee8f264297822fbae61139212bbd8", // Můj unikátní klíč
    url: "https://api.openweathermap.org/data/2.5/"
}

// Posluchače událostí

enterAreaInput.addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        getResults(enterAreaInput.value);
    }
});

enterAreaSubmitButton.addEventListener('click', () => {
    getResults(enterAreaInput.value);
});

// Funkce, ktera pracuje s požadavkem

function getResults(param) {
    fetch(`${api.url}weather?q=${param}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

// Funkce, zobrazujicí na strance údaje

function displayResults(weather) {
    let mesto = document.querySelector('.pocasi__mesto');
    let datum = document.querySelector('.pocasi__datum');
    let teplota = document.querySelector('.pocasi__teplota');
    let icon = document.querySelector('.pocasi__icon');
    let tlak = document.querySelector('.podrobnosti__tlakHodnota');
    let vlhkost = document.querySelector('.podrobnosti__vlhkostHodnota');
    let vitr = document.querySelector('.podrobnosti__vitrHodnota');
    let now = new Date();
    let smerVetruStupen = weather.wind.deg;

    teplota.innerHTML = `${Math.round(weather.main.temp)}&deg;`;
    mesto.innerText = `${weather.name}, ${weather.sys.country}`;
    datum.innerText = datumGenerator(now);
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0]['icon']}@2x.png">`;
    tlak.innerText = `${weather.main.pressure}hPa`;
    vlhkost.innerText = `${weather.main.humidity}%`;
    vitr.innerText = `${Math.round(weather.wind.speed)}m/s, ${kompilator(smerVetruStupen)}`;
}

// Funkce, která převádí stupně do směru

function kompilator(param) {
    let smerVetruSmer = '';

    if (param >= 0 && param <= 22) {
        smerVetruSmer = 'S';
    } else if (param >= 23 && param <= 66) {
        smerVetruSmer = 'SV';
    } else if (param >= 67 && param <= 111) {
        smerVetruSmer = 'V';
    } else if (param >= 112 && param <= 156) {
        smerVetruSmer = 'JV';
    } else if (param >= 157 && param <= 201) {
        smerVetruSmer = 'J';
    } else if (param >= 202 && param <= 246) {
        smerVetruSmer = 'JZ';
    } else if (param >= 247 && param <= 291) {
        smerVetruSmer = 'Z';
    } else if (param >= 292 && param <= 336) {
        smerVetruSmer = 'SZ';
    } else if (param >= 337 && param <= 360) {
        smerVetruSmer = 'S';
    }

    return smerVetruSmer;
}

// Funkce, generujicí současné období

function datumGenerator(param) {
    const mesice = ["Ledena", "Února", "Březena", "Dubna", "Května", "Června", "Července", "Srpena", "Září", "Října", "Listopadu", "Prosince"];
    const dny = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];

    let den = dny[param.getDay()];
    let datum = param.getDate();
    let mesic = mesice[param.getMonth()];
    let rok = param.getFullYear();

    return `${den} ${datum} ${mesic} ${rok}`;
}

getResults("Opava");


// *** O projektu block ***

// Parallax

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);