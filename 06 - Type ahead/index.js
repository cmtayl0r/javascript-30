'use strict';
// -----------------------------------------------------------------------------
// 06 - Type Ahead
// -----------------------------------------------------------------------------

const searchInput = document.querySelector('.search');
const searchSuggestions = document.querySelector('.suggestions');

const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const fetchCities = async function (url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error! ${response.status}`);
        const data = await response.json();
        // we can't use push method because it will create a nested array
        // so we use spread operator to push each element of the array from the API into the cities array
        cities.push(...data);
    } catch (err) {
        console.error(err);
    }
};

const numWithComma = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const findMatches = function (wordToMatch, cities) {
    return cities.filter(place => {
        // Figure out if city matches what was inputted
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

const displayMatches = async function () {
    await fetchCities(endpoint);
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
        .map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(
                regex,
                `<span class="hl">${this.value}</span>`
            );
            const stateName = place.state.replace(
                regex,
                `<span class="hl">${this.value}</span>`
            );
            return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numWithComma(
                    place.population
                )}</span>
            </li>
        `;
        })
        .join('');
    searchSuggestions.innerHTML = html;
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
