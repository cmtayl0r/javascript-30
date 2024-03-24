const tally = document.querySelector('.total-time');

// 1 - Select all DOM elements with a 'data-time' attribute

// Convert the NodeList to an array for easier manipulation
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// 2 - Calculate the total time in seconds

const seconds = timeNodes
    // Extract the 'data-time' attribute value from each selected node
    .map(node => node.dataset.time)
    // Split the time into minutes and seconds
    .map(timeCode => {
        // Split time into minutes and seconds and convert strings to numbers
        // map() is used to convert the strings to numbers using parseFloat
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        // Convert minutes to seconds and add to seconds
        return mins * 60 + secs;
    })
    // Sum up all seconds to get a total using reduce
    .reduce((acc, num) => {
        return acc + num;
    }, 0);

// 3 - Convert the total time in seconds to hours, minutes, and seconds

// Initialize a variable to keep track of remaining seconds after converting to hours and minutes
let secondsLeft = seconds;

// Calculate total hours and update secondsLeft to remain only minutes and seconds
const hours = Math.floor(secondsLeft / 3600);
// Update secondsLeft to remainder after dividing by 3600 (seconds in an hour)
secondsLeft = secondsLeft % 3600;

// Calculate total minutes and update secondsLeft to remain only seconds
const mins = Math.floor(secondsLeft / 60);
// Update secondsLeft to remainder after dividing by 60 (seconds in a minute)
secondsLeft = secondsLeft % 60;

tally.innerHTML = `Total time: ${hours}hrs ${mins}mins ${secondsLeft}secs`;
