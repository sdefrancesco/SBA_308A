import Countries, { fetchCountries } from "./countries.js";
import { sortCountries } from './sort.js';

const parent = document.querySelector('#countries');
const sortBtn = document.getElementById('sortBtn');
let countries = []; 
let filteredCountries = []; 

const sort = () => {
    console.log("sorting, a-z");
    sortBtn.setAttribute('disabled', 'true'); 
    parent.innerHTML = ''; 
    sortCountries(filteredCountries);
    populateCountries(false, filteredCountries);
};

const createCol = (size, parent, name, flag, countryData) => {
    let col = document.createElement('div');
    col.classList.add(`col-lg-${size}`);
    col.appendChild(createCard(name, flag, countryData));
    parent.appendChild(col);
};

const createCard = (name, flag, countryData) => {
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    card.classList.add('card');
    cardBody.classList.add('card-body');

    card.classList.add('text-center');
    card.classList.add('mb-3');
    card.classList.add('hover');

    cardBody.appendChild(renderFlag(flag));
    let title = document.createElement('h6');
    title.classList.add('mt-3');
    title.innerHTML = name;
    cardBody.appendChild(title);

    // click event listener to the card to open the modal
    card.addEventListener('click', () => {
        openModal(countryData);
    });

    card.appendChild(cardBody);
    return card;
};

const renderFlag = (flag) => {
    let flagImg = document.createElement('img');
    flagImg.src = flag;
    flagImg.width = '50';
    flagImg.height = '50';
    return flagImg;
};

const populateCountries = async (sort, countriesList) => {
    parent.innerHTML = '';
    if (sort) {
        sortCountries(countriesList);
    }

    countriesList.forEach((country) => {
        createCol(3, parent, country.name.common, country.flags.png, country);
    });

    updateCountryCount(countriesList);
};

// add search functionality
const filterCountries = (term, countriesList) => {
    const filteredCountries = countriesList.filter((country) => {
        return country.name.common.toLowerCase().includes(term.toLowerCase());
    });
    return filteredCountries;
};

const updateCountryCount = (array) => {
    document.getElementById('countryCount').innerHTML = array.length;
};

// modal - related
const openModal = (countryData) => {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="text-center">
            <img src="${countryData.flags.png}" width="100" height="100" alt="${countryData.name.common} flag" />
            <h3 class="mt-3">${countryData.name.common}</h3>
            <p><strong>Capital:</strong> ${countryData.capital ? countryData.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> ${countryData.region}</p>
            <p><strong>Population:</strong> ${countryData.population.toLocaleString()}</p>
            <p><strong>Area:</strong> ${countryData.area.toLocaleString()} km²</p>
        </div>
    `;
    
    // show bootstrap modal
    const modal = new bootstrap.Modal(document.getElementById('countryModal'));
    modal.show();
};

// close modal
const closeModal = () => {
    const modal = new bootstrap.Modal(document.getElementById('countryModal'));
    modal.hide();
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        countries = await fetchCountries();
        filteredCountries = countries; 
        populateCountries(false, filteredCountries);

        // search functionality
        document.getElementById('search').addEventListener('input', (e) => {
            if (e.target.value.length < 1) {
                // reset if search term is empty
                filteredCountries = countries;
                populateCountries(false, filteredCountries);
                sortBtn.removeAttribute('disabled')
            } else {
                // apply the filter based on the search term
                filteredCountries = filterCountries(e.target.value, countries);
                populateCountries(false, filteredCountries);
            }
        });

        // sort Button Event Listener
        sortBtn.addEventListener('click', () => {
            sort()
        });
    } catch (err) {
        console.log(err);
    }
});
