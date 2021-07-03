// DINAMICS TWEETS BTNS

function dinamicIcon() {
  const dinamicTweets = document.querySelector('.dinamic-tweets');
  dinamicTweets.addEventListener('click', function () {
    const followMe = document.querySelector('.follow-me');
    followMe.classList.add('follow-me-active');
  });
}
export default dinamicIcon;
