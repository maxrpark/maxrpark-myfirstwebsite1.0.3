// SIDEBAR
export const sidebarFix = window.addEventListener('scroll', function () {
  const topic = document.querySelector('.topic-container');
  function fixed(item) {
    const fix = window.pageYOffset;

    if (fix > 970) {
      item.classList.add('fixed');
      // followFixed.classList.add('follow-fixed-show');
    } else {
      item.classList.remove('fixed');
      // followFixed.classList.remove('follow-fixed-show');
    }
  }

  fixed(topic);
});
