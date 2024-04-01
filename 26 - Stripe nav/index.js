const background = document.querySelector('.dropdownBackground');
const triggers = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');

const handleEnter = function () {
    console.log('ENTER!');
};

const handleLeave = function () {
    console.log('LEAVE!');
};

triggers.forEach(trigger =>
    trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach(trigger =>
    trigger.addEventListener('mouseleave', handleLeave)
);
