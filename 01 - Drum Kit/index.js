'use strict';

const keys = document.querySelectorAll('.key');

// Play the sound when the keydown event is triggered
const playSound = function (e) {
    // Select the audio element with the data-key attribute that matches the key code
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Select the key element with the data-key attribute that matches the key code
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // If no audio element is found, return (guard clause)
    if (!audio) return;
    // rewind the audio to the start
    audio.currentTime = 0;
    // Play the audio
    audio.play();
    // Add the playing class to the key
    key.classList.add('playing');
};

// Remove the playing class from the key
const removeTransition = function (e) {
    // Skip if it's not a transform
    // (we're looking for the transform property to end)
    // Otherwise, the transitionend event will be triggered by every property
    if (e.propertyName !== 'transform') return;
    // this = the key element
    this.classList.remove('playing');
};

// Listen for the transitionend event on each key
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

// Listen for the keydown event on the window
window.addEventListener('keydown', playSound);
