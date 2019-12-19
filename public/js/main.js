const navbarBurger = document.querySelector('.navbar__burger');
const navbarList = document.querySelector('.navbar__list');

navbarBurger.addEventListener('click', () => {
    navbarList.classList.toggle('--visible')
})

function toggleNavBurger(open, closed) {
    open.classList.toggle('')
    closed.classList.toggle('')
}
