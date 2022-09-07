import '../sass/main.scss';
import Player from '@vimeo/player';
import { save, load } from './localStorageService';
import _ from 'lodash';

const PLAYER_POSITION = 'videoplayer-current-time';

const iFrameRef = document.querySelector('iframe#vimeo-player');
const player = new Player(iFrameRef);
setCurrentTime();

player.on('timeupdate', _.throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  console.log(e.seconds);
  save(PLAYER_POSITION, e.seconds);
}

function setCurrentTime(e) {
  let currentTime = load(PLAYER_POSITION);

  if (!currentTime) {
    currentTime = 0;
  }

  player.setCurrentTime(currentTime);
}
