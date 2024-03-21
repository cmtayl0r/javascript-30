// -----------------------------------------------------------------------------
// Day 08 HTML5 Canvas
// -----------------------------------------------------------------------------

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// When clicking and dragging, draw a line
let isDrawing = false; // flag to check if mouse is down
let lastX = 0; // last x position
let lastY = 0; // last y position
let hue = 0; // color

const draw = function (evt) {
    // Stop the fn from running when they are not moused down
    if (!isDrawing) return;

    // Set color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // Drawing
    ctx.beginPath(); // begin a path
    ctx.moveTo(lastX, lastY); // start from
    ctx.lineTo(evt.offsetX, evt.offsetY); // go to
    ctx.stroke(); // draw the line
    lastX = evt.offsetX;
    lastY = evt.offsetY;

    // Change color on each draw
    hue++;
};

canvas.addEventListener('mousedown', evt => {
    isDrawing = true;
    lastX = evt.offsetX;
    lastY = evt.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
