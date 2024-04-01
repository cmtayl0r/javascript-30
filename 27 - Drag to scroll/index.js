const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', evt => {
    isDown = true;
    slider.classList.add('active');
    startX = evt.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', evt => {
    if (!isDown) return; // Guard clause, stop FN from running
    evt.preventDefault();

    const x = evt.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // increase speed by times by 3

    slider.scrollLeft = scrollLeft - walk;
});
