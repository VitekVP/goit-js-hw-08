import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('iframe');

const player = new Player(playerEl);

player.on('timeupdate', throttle(handleSaveStopPlayback, 1000));

function handleSaveStopPlayback(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

let currentTime = localStorage.getItem('videoplayer-current-time');

let saveTime = currentTime !== 0 ? currentTime : 0;

player.setCurrentTime(saveTime);
