const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    // Get the coordinates of the link by using getBoundingClientRect()
    // getBoundingClientRect() returns the size of an element and its position relative to the viewport
    const linkCoords = this.getBoundingClientRect();

    // Get the coordinates of the link relative to the window
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    };

    // Set the highlight style to the coordinates of the link
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// Add event listener to each link
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
