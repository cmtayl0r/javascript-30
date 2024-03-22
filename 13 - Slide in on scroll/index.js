const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, delay) {
    // This variable will store the timeout
    let debounceTimer;
    // Return a function
    // Spread operator is used to pass the arguments to the function
    return function (...args) {
        // If the event is triggered again before the delay time has passed, the previous timeout will be cleared
        clearTimeout(debounceTimer);
        // if the timeout is not cleared, the function will be called after the delay time has passed
        debounceTimer = setTimeout(() => {
            // the function is called with the arguments
            func.apply(this, args);
        }, delay);
    };
}

function checkSlide(evt) {
    sliderImages.forEach(sliderImage => {
        // Halfway through the image, the image will slide in
        // The top of the image is calculated by adding the window scrollY value to the window innerHeight value
        const slideInAt =
            window.scrollY + window.innerHeight - sliderImage.height / 2;
        // The bottom of the image is calculated by adding the window scrollY value to the image height
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log(imageBottom, slideInAt);
        // The image is half shown
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        // The image is not scrolled past
        const isNotScrolledPast = window.scrollY < imageBottom;
        // If the image is half shown and not scrolled past, the class is added
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            // If the image is not half shown or scrolled past, the class is removed
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide, 300));
