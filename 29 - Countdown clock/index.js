let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const today = document.querySelector('.display__today');

const timer = function (seconds) {
    // Clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
};

const displayTimeLeft = function (seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${
        remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
};

const displayEndTime = function (timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minutes}`;
};

const startTimer = function () {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
};

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset(); // reset the input
});

const displayToday = function () {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    today.textContent = `Today is ${date}`;
};
displayToday();
