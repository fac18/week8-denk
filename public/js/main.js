const navbarBurger = document.querySelector('.navbar__burger');
const navbarList = document.querySelector('.navbar__list');

navbarBurger.addEventListener('click', () => {
    navbarList.classList.toggle('--visible')
})

function toggleNavBurger(open, closed) {
    open.classList.toggle('')
    closed.classList.toggle('')
}
// home form submission sends you to preps page for that apocalypse

const homeForm = document.querySelector('.home-section__form')

// homeForm.addEventListener('submit', e => {
//   e.preventDefault();
//   window.location.href = `/preps/${e.target.apocalypse.value}`;
// })
