
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
    hamburgerToggle(hamburger);
})

function hamburgerToggle(hamburger) {
    console.log('toggle');
    if (hamburger.classList == 'hamburger') {
        hamburger.classList = 'navbar-cross';
        document.querySelector('nav ul').classList = 'nav-ul-display';
    } else {
        hamburger.classList = 'hamburger';
        document.querySelector('nav ul').classList = '';
    }
}