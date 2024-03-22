const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// used to keep track of the last checkbox that was checked
let lastChecked;

// This function will be called whenever a checkbox is clicked.
const handlecheck = function (evt) {
    // Boolean flag used to indicate when checkboxes are within the selection range.
    // Determines if the checkboxes being looped over are between ...
    // ... the currently clicked checkbox and the last checked checkbox
    let inBetween = false;

    // Checks if the shift key was pressed (evt.shiftKey) and if the ...
    // ... checkbox that was clicked is currently checked (this.checked).
    if (evt.shiftKey && this.checked) {
        // Loops over each checkbox in the NodeList.
        checkboxes.forEach(checkbox => {
            // If the current checkbox is either the one just clicked or the last one checked ...
            // ... toggle the inBetween flag.
            // This marks the start or end of the range to select.
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            // If the current checkbox is within the range to select ...
            // ... set its checked property to true.
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    // Updates lastChecked with the checkbox that triggered the current event...
    // ... for use in subsequent selections.
    lastChecked = this;
};

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handlecheck);
});
