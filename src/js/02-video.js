import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(setCurrentTimeOnStorage, 1000));
    

function setCurrentTimeOnStorage(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
}



player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


