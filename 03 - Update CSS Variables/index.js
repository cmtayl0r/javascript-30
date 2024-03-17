'use strict';
// -----------------------------------------------------------------------------
// 03 - Update CSS Variables with JS
// -----------------------------------------------------------------------------

// Get all the inputs
const inputs = document.querySelectorAll('.controls input');

const handleUpdate = e => {
    // Suffix for the input, or an empty string if it doesn't exist
    // data-set is a custom attribute in HTML, in this case it's used to store the suffix
    const suffix = e.target.dataset.sizing || '';
    // Set the value of the input to the value of the CSS variable
    // On input change, update the CSS variable based on the new value of the input
    document.documentElement.style.setProperty(
        `--${e.target.name}`, // The name of the CSS variable
        e.target.value + suffix // Change value of the input, add the suffix if it exists
    );
};

// Add event listeners to all the inputs
// Listen for changes on the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
