// -----------------------------------------------------------------------------
// ARRAY
// -----------------------------------------------------------------------------
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

// -----------------------------------------------------------------------------
// DOM ELEMENTS
// -----------------------------------------------------------------------------

const bandList = document.querySelector('#bands');

// -----------------------------------------------------------------------------
// DISPLAY
// -----------------------------------------------------------------------------

// Function to strip 'the', 'a' and 'an' from band names
const strip = function (bandName) {
    return bandName.replace(/^(the|a|an)\s/i, '').toUpperCase();
};

// Sort bands array
// 1. Sort bands array by stripping 'the', 'a' and 'an' from band names
// 2. Return sorted array
const sorted = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// Display sorted bands array
bandList.innerHTML = sorted
    .map(band => {
        // Map each band from sorted array to a list item
        return `<li>${band}</li>`;
    })
    .join(''); // Join list items into a string
