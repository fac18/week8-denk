// home form submission sends you to preps page for that apocalypse

const homeForm = document.querySelector('.home-section__form')

homeForm.addEventListener('submit', e => {
  e.preventDefault();
  window.location.href = `/preps/${e.target.apocalypse.value}`;
})
