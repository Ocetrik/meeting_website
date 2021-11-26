const burgerMenu = document.querySelector('.class');
if (burgerMenu) {
   const itemMenu = document.querySelector('.header__menu');
   burgerMenu.addEventListener("click", function () {
      itemMenu.classList.toggle('_active');
   });
}