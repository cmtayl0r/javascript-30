'use strict';
// -----------------------------------------------------------------------------
// 04 - Array Cardio Day 1
// -----------------------------------------------------------------------------

// TODO: Loop over outputs, print on page inside a list

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year <= 1599) {
        return true;
    }
});
// console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => {
    return `${inventor.first} ${inventor.last}`;
});

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1)); // if a.year is greater than b.year, return 1, else -1

// console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
    // reduce the inventors array to the total years lived
    return total + (inventor.passed - inventor.year);
}, 0); // start with 0 years then add the years lived

// console.table(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year; // lastGuy is the difference between passed and year
    const nextGuy = b.passed - b.year; // nextGuy is the difference between passed and year
    return lastGuy > nextGuy ? 1 : -1; // if lastGuy is greater than nextGuy, return 1, else -1
});

// console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));

const de = links
    .map(link => link.textContent) // map the links to get the text content
    .filter(streetName => {
        // filter the street names to get the ones that include 'de'
        if (streetName.includes('de')) return true; //
    });

// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name

const alphaPeople = people.sort((lastOne, nextOne) => {
    const [lastA, firstA] = lastOne.split(', '); // split the last and first name
    const [lastB, firstB] = nextOne.split(', '); // split the last and first name
    return lastA > lastB ? 1 : -1; // if lastA is greater than lastB, return 1, else -1
});

// console.log(alphaPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
];

// const totalYears = inventors.reduce((total, inventor) => {
//     return total + (inventor.passed - inventor.year);
// }, 0);

const sumUp = data.reduce(function (obj, item) {
    // obj is the accumulator, item is the current value
    // reduce the data array to an object
    // if the item is not in the object, add it and set it to 0
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++; // increment the item
    return obj; // return the object
}, {}); // start with an empty object then add the items

// console.log(sumUp);

// -----------------------------------------------------------------------------

const output = document.querySelector('#output');
const printOutput = arr => {
    for (let item of arr) {
        const li = document.createElement('li');
        li.textContent = item;
        output.appendChild(li);
    }
};

// printOutput(data);
