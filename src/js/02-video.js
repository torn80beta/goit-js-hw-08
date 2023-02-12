import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function load(key) {
  try {
    const time = localStorage.getItem(key);
    return time === null ? undefined : JSON.parse(time).seconds;
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

player
  .setCurrentTime(load('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    // throttling check:
    console.log(JSON.parse(localStorage.getItem('videoplayer-current-time')));
  }, 1000)
);
