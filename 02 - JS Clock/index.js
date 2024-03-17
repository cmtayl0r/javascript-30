'use strict';
// -----------------------------------------------------------------------------
// 02 - JS Clock
// -----------------------------------------------------------------------------

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); // get the current date

    const seconds = now.getSeconds(); // get the seconds
    const secondDegrees = (seconds / 60) * 360; // convert seconds to degrees
    secondHand.style.rotate = `${secondDegrees}deg`; // apply the rotation

    const mins = now.getMinutes(); // get the minutes
    const minDegrees = (mins / 60) * 360; // convert minutes to degrees
    minHand.style.rotate = `${minDegrees}deg`; // apply the rotation

    const hours = now.getHours(); // get the hours
    const hourDegrees = (hours / 12) * 360; // convert hours to degrees
    hourHand.style.rotate = `${hourDegrees}deg`; // apply the rotation

    // Add a transition of none to .hand when seconds === 0
    // Set transition style on .hand to empty string when seconds !== 0
    // The normal transition class style will then be applied again
    // Otherwise you'd get a glitch as each .hand moves from 0 to 90 degrees
    if (seconds === 0) {
        secondHand.style.transition = 'none';
        minHand.style.transition = 'none';
        hourHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
        minHand.style.transition = '';
        hourHand.style.transition = '';
    }
}

// run the setDate function every second
setInterval(setDate, 1000);
