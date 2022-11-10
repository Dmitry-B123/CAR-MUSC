const btnBurger = document.querySelector('.burger--active');
const menu = document.querySelector('.header__list-burger');

btnBurger.addEventListener('click', (e) => {
   e.preventDefault;
   menu.classList.toggle('header__list-burger--active');
});