import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');

const onPlay = function (data) {
  const currentSeconds = data.seconds;
  console.log(currentSeconds);
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentSeconds));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
