import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('iframe');

const player = new Player(playerEl);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(handleSaveStopPlayback, 1000));

function handleSaveStopPlayback(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

let currentTime = localStorage.getItem(STORAGE_KEY) || 0;

player.setCurrentTime(currentTime);
