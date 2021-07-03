// TOP FIXED

export const topFix = window.addEventListener('scroll', function () {
  const scroll = window.pageYOffset;
  const followFixed = document.querySelector('.follow-fixed');
  const titleSection = document.querySelector('.title-section');
  const topMobile = document.querySelector('.top-mobile');

  if (scroll > 240) {
    titleSection.classList.add('title-section-fixed');
    followFixed.classList.add('follow-fixed-show');
  } else {
    titleSection.classList.remove('title-section-fixed');
    followFixed.classList.remove('follow-fixed-show');
  }
  if (scroll > 240) {
    topMobile.classList.add('top-fixed');
  } else {
    topMobile.classList.remove('top-fixed');
  }
});
