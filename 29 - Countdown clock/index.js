// -----------------------------------------------------------------------------
// DOM ELEMENTS
// -----------------------------------------------------------------------------

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
// Selects all DOM elements (buttons) that have a 'data-time' attribute, used for setting the timer.
const buttons = document.querySelectorAll('[data-time]');
const today = document.querySelector('.display__today');

// -----------------------------------------------------------------------------
// VARIABLES
// -----------------------------------------------------------------------------

// Declares a variable to store the countdown interval ID.
let countdown;

// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

// 01 - Starts the timer with a given number of seconds
const timer = function (seconds) {
    // Clear any existing timers
    clearInterval(countdown);

    // Gets the current time in milliseconds.
    const now = Date.now();
    // Calculates the future time (end of countdown) in milliseconds.
    const then = now + seconds * 1000;
    // Immediately displays the time left based on the input seconds.
    displayTimeLeft(seconds);
    // Displays the calculated end time.
    displayEndTime(then);

    // Starts an interval that updates every second to countdown.
    countdown = setInterval(() => {
        // Calculates the seconds left by subtracting the current time from the end time.
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // If no seconds are left (timer is done), stops the interval.
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // Updates the display with the remaining time.
        displayTimeLeft(secondsLeft);
    }, 1000);
};

// 02 - Displays the time left in the timer
const displayTimeLeft = function (seconds) {
    // Calculates minutes and seconds from the total seconds left.
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // Formats the time to ensure two digits for minutes and seconds.
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${
        remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    // Updates the document title with the time left.
    document.title = display;
    // Updates the timer display on the webpage with the formatted time
    timerDisplay.textContent = display;
};

// 03 - Displays the time when the timer will end
const displayEndTime = function (timestamp) {
    // Converts the timestamp into a Date object.
    // the timestamp is the date number of milliseconds since January 1, 1970
    const end = new Date(timestamp);
    // Extracts hours and minutes from the end date.
    const hour = end.getHours();
    const minutes = end.getMinutes();
    // Added zero padding to the hour and minutes for consistent formatting
    const formattedHour = `${hour < 10 ? '0' : ''}${hour}`;
    const formattedMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;
    // Updates the end time display on the webpage.
    endTime.textContent = `Be back at ${formattedHour}:${formattedMinutes}`;
};

// 04 - Starts the timer when a button is clicked
const startTimer = function () {
    // Parses the time (in seconds) from the clicked button's data attribute.
    const seconds = parseInt(this.dataset.time);
    // Starts the timer with the specified seconds.
    timer(seconds);
};

// 05 - Displays the current date
const displayToday = function () {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    // show the date in the format of 'Day, Month Date, Year'
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    today.textContent = `Today is ${formattedDate}`;
};

window.addEventListener('DOMContentLoaded', displayToday);

// ----------------------------------------------------------------------------
// EVENT LISTENERS
// ----------------------------------------------------------------------------

// 01 - Event listeners for the buttons
// Sets up event listeners for each timer button to start the timer with predefined times
buttons.forEach(button => button.addEventListener('click', startTimer));

// 02 - Event listener for the custom form
// Handles the custom form submission for setting a custom time
document.customForm.addEventListener('submit', function (evt) {
    // Prevents the form from submitting in the traditional way (page reload).
    evt.preventDefault();
    // Parses the input value to a float and checks if it's a valid, positive number.
    const mins = parseFloat(this.minutes.value);
    if (!isNaN(mins) && mins > 0) {
        // Checking if the input is a number and greater than 0
        timer(mins * 60);
    } else {
        // Alerting the user for invalid input
        alert('Please enter a valid number of minutes.');
    }
    this.reset(); // reset the input
});
