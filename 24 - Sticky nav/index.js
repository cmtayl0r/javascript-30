const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const fixNav = function () {
    if (window.scrollY >= topOfNav) {
        // off set the height of the nav so there is no glitch as nav becomes static
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        // Strategy to add class to body and target child elements in CSS
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
};

window.addEventListener('scroll', fixNav);
