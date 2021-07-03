// CHANGE COLOR ICONS
const hearts = document.querySelectorAll('.heart');
const retweets = document.querySelectorAll('.retweet');
function changeColor(item, color) {
  const element = item;
  element.forEach(function (e) {
    e.addEventListener('click', function () {
      e.classList.toggle(`${color}`);
    });
  });
}
changeColor(hearts, 'heart-active');
changeColor(retweets, 'retweet-active');

export default changeColor;
