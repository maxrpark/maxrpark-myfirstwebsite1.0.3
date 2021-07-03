// FOLLOW BTN
const btnCloseFollow = document.querySelector('.close-btn-follow');
const followMe = document.querySelector('.follow-me');
const btnFollow = document.querySelectorAll('.btn-twitter');

function followBtn() {
  btnFollow.forEach(function (btn) {
    btn.addEventListener('click', function () {
      followMe.classList.add('follow-me-active');
    });
    btnCloseFollow.addEventListener('click', function () {
      followMe.classList.remove('follow-me-active');
    });
  });
}
followBtn();

export default followBtn;
