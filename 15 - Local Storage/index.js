// FIXME: checked attribute not being set when check box is clicked
// FIXME: "Add an item" is showing when an item is added

// -----------------------------------------------------------------------------
// DOM elements
// -----------------------------------------------------------------------------
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearBtn = document.querySelector('#clear-btn');
const uncheckBtn = document.querySelector('#uncheck-btn');

// -----------------------------------------------------------------------------
// Initialization of items array
// -----------------------------------------------------------------------------
// Retrieve 'items' array from localStorage and parse it,
// or initialize as empty array if null
const items = JSON.parse(localStorage.getItem('items')) || [];

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Encapsulate localStorage logic
// JSON.stringify() to convert the array to a string
// This is because localStorage only stores strings
const saveItems = () => localStorage.setItem('items', JSON.stringify(items));

// Function: add an item to the list
const addItem = function (evt) {
    // Prevent the form from submitting and refreshing the page
    evt.preventDefault();

    // 1 - Extract text value from the input field within the form
    // 'this' refers to the form element
    const text = this.querySelector('[name=item]').value;

    // 2 - Create a new item object and push to array
    const item = {
        text, // ES6 shorthand for text: text
        done: false,
    };
    items.push(item);

    // 3 - Append new item to the list
    // The index is the length of the array - 1 because the index is zero-based
    appendItemToList(item, items.length - 1);

    // 4 - Save the items to localStorage
    saveItems();

    // 5 - Clear the form input after submission
    this.reset();
};

// Helper function: append an item to the list
const appendItemToList = function (item, index) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="checkbox" data-index=${index} id="item${index}" ${
        item.done ? 'checked' : ''
    }/>
        <label for="item${index}">${item.text}</label>
    `;
    itemsList.appendChild(listItem);
};

// Function: render the list of items
const renderList = function (arr = [], listContainer) {
    // Show a message if the list is empty
    listContainer.innerHTML = arr.length ? '' : '<li>Add an item ...</li>';
    // Loop through the array and append each item to the list
    arr.forEach((item, index) => appendItemToList(item, index));
};

// Function: for each item in the list, toggle the done property
const toggleDone = function (evt) {
    // Event delegation
    // Elements added after page loaded need to be interactive too
    // Listen for a click on something higher (ul)
    // Then inside it we check if its the thing we want (input)
    if (!evt.target.matches('input')) return; // Skip this unless its an input
    // Get the index which is stored in the data-index attribute
    const index = evt.target.dataset.index;
    // If this is true, the value will be false and vice versa
    items[index].done = !items[index].done;

    // Set the checked property of the input to the done property of the item
    // evt.target.checked = items[index].done;
    // Directly toggle the 'checked' attribute to reflect the change
    if (items[index].done) {
        evt.target.setAttribute('checked', '');
    } else {
        evt.target.removeAttribute('checked');
    }

    // Save the updated array to localStorage
    saveItems();
};

const clearList = function () {
    // Clear the list by removing all items from the array and localStorage
    localStorage.removeItem('items');
    // Clear the list by removing all items from the DOM
    items.splice(0, items.length);
    // Render the list with the updated items because the array is now empty
    renderList(items, itemsList);
};

const uncheckAll = function () {
    // Set the done property of all items to false
    items.forEach(item => (item.done = false));
    // Save the updated array to localStorage
    saveItems();
    // Render the list with the updated items because the done property has changed
    renderList(items, itemsList);
};

// -----------------------------------------------------------------------------
// Event listeners
// -----------------------------------------------------------------------------

// Listen for the submit event on the form
addItems.addEventListener('submit', addItem);
// Listen for the click event on the list
itemsList.addEventListener('click', toggleDone);
// Listen for the click event on the clear button
clearBtn.addEventListener('click', clearList);
// Listen for the click event on the uncheck button
uncheckBtn.addEventListener('click', uncheckAll);

// On page load render the list
// We need to render the list on page load because the items are stored in localStorage
// This is important because if we don't render the list on page load, the items will not be displayed
window.addEventListener('DOMContentLoaded', () => {
    renderList(items, itemsList);
});
