import tweets from './utils/api.js';
import mainHeight from './utils/tweetsHeight.js';
import changeColor from './utils/changeColorIcons.js';
import btnsProfile from './utils/menuBtns.js';
import followBtn from './utils/followBtn.js';
import dinamicIcon from './utils/dinamicBtn.js';
import { sidebarFix } from './utils/sideBarRight.js';
import { topFix } from './utils/topFixed.js';

// DISPLAY TWEETS
const dinamicTweets = document.querySelector('.dinamic-tweets');
function displayDinamicTweets() {
  window.addEventListener('DOMContentLoaded', function () {
    let displayTweets = tweets.map(function (tweet) {
      return `<article article class="single-tweet">
       <div class="pin"><i class="${tweet.pinnedIcon}"> </i>
    <p>${tweet.pinnedText}</p>
    </div>
    <img src="${tweet.img}" alt="" class="tweet-img  ">
    <div class="tweet-top">
    <div class="tweet-info">
      <h6 class="user-name">${tweet.name}</h6>
      <p class="user-id">${tweet.id}</p>    
      <p p class="date"> ${tweet.dateTweeted}</p>
      </div>
      <span><i class=" dots-tweet fas fa-ellipsis-h"></i></span>
    </div>
    <div class="tweet-content">
        <p class="tweet-text">${tweet.text}</p>
      </div>
      <div class="tweet-btns">
        <ul>
          <li class="tweet-btn comment btn-twitter"><i class="far fa-comment"></i></li>
          <li class="tweet-btn retweet"><i class="fas fa-retweet"></i></li>
          <li class="tweet-btn heart"><i class="fas fa-heart"></i></li>
          <li class="tweet-btn share btn-twitter"><i class="fas fa-external-link-alt"></i></li>
        </ul>
      </div>
  </article>`;
    });
    displayTweets = displayTweets.join('');
    dinamicTweets.innerHTML = displayTweets;
    dinamicIcon();
  });
}
displayDinamicTweets();

// NUMBER OF TWEETS
const numberOfTweets = tweets.length + 2;
const tweetNumber = document.querySelector('.tweets-number');

tweetNumber.textContent = ` ${numberOfTweets} Tweets`;
