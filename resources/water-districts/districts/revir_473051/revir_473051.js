const imageBoxes = document.querySelectorAll('.revirGallery__imageBox');

imageBoxes.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle('active');
}));