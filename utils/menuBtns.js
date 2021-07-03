// PROFILE MENU BTNS
const menuBtns = document.querySelectorAll('.menu-btn');
const btnCloseMenu = document.querySelector('.btn-close-menu');

const btnsProfile = menuBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const menuTwiter = document.querySelector('.menu-btns');
    menuTwiter.classList.add('menu-btns-active');
    btnCloseMenu.addEventListener('click', function () {
      menuTwiter.classList.remove('menu-btns-active');
    });
  });
});

export default btnsProfile;
