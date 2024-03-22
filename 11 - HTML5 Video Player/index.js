// DOM elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// TODO: Show current time
// TODO: Show volume amount
// TODO: full-size button toggle
// TODO: Accessibility considerations

// Build functions

const togglePlay = function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};
//
const updateButton = function () {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
};
//
const skip = function () {
    video.currentTime += parseFloat(this.dataset.skip);
};
//
const handleRangeUpdate = function () {
    video[this.name] = this.value;
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(evt) {
    const scrubTime = (evt.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(evt);
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', evt => mouseDown && scrub(evt));
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
