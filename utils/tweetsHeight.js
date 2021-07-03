// Dinamic Hight

const mainHeight = function () {
  const profile = document.querySelector('.profile');
  const dinamicTweets = document.querySelector('.dinamic-tweets');
  let profileHeight = profile.getBoundingClientRect().height;
  let dinamicTweetsHeight = dinamicTweets.getBoundingClientRect().height;
  const NewProfileheight = profileHeight + 1000;
  let dinamicTweetsNewHight = NewProfileheight;
  console.log(dinamicTweetsNewHight);

  if (dinamicTweetsHeight < profileHeight) {
    profile.style.height = `${dinamicTweetsNewHight}px`;

    console.log(NewProfileheight);
  }
};
mainHeight();

export default mainHeight;
