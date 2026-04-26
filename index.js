const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const menu = document.querySelector('.header__menu');
const heroBtn = document.querySelector('.hero__button');
const headerAccount = document.querySelector('.header__account--help');

const body = document.querySelector('body');

burger.addEventListener('click', () => {
    body.classList.toggle('active');
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    menu.classList.toggle('active');
    heroBtn.classList.toggle('active');
    headerAccount.classList.toggle('active');
});


document.querySelectorAll('.header__item').forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('active');
    burger.classList.remove('active');
    nav.classList.remove('active');
    menu.classList.remove('active');
    heroBtn.classList.remove('active');
    headerAccount.classList.remove('active');
  });
});