// Hover efekt u navigace
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

// Počasí block

const enterAreaInput = document.querySelector('.enterArea__input');
const enterAreaSubmitButton = document.querySelector('.enterArea__submitButton');
const api = {
    key: "b42ee8f264297822fbae61139212bbd8",    // Můj unikátní klíč
    url: "https://api.openweathermap.org/data/2.5/"
}

enterAreaSubmitButton.addEventListener('click', () => {
    getResults(enterAreaInput.value);
});

function getResults(param) {
    fetch(`${api.url}weather?q=${param}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let mesto = document.querySelector('.pocasi__mesto');
    let datum = document.querySelector('.pocasi__datum');
    let teplota = document.querySelector('.pocasi__teplota');
    let now = new Date();

    mesto.innerText = `${weather.name}, ${weather.sys.country}`;
    datum.innerText = datumGenerator(now);
    teplota.innerHTML = `${Math.round(weather.main.temp)}&deg;`;
}

function datumGenerator(param) {
    const mesice = ["Ledena", "Února", "Březena", "Dubna", "Května", "Června", "Července", "Srpena", "Září", "Října", "Listopadu", "Prosince"];
    const dny = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];

    let den = dny[param.getDay()];
    let datum = param.getDate();
    let mesic = mesice[param.getMonth()];
    let rok = param.getFullYear();

    return `${den} ${datum} ${mesic} ${rok}`;
}