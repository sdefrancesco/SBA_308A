import Countries, { fetchCountries } from "./countries.js";
const parent = document.getElementById('countries');

const createCol = (size, parent, name, flag) => {
    let col = document.createElement('div');
    col.classList.add(`col-lg-${size}`);
    col.appendChild(createCard(name, flag));
    parent.appendChild(col);
};

const createCard = (name, flag) => {
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

const populateCountries = async () => {
    try {
        let countries = await fetchCountries()
        countries.forEach((country) => {
            createCol(3, parent, country.name.common, country.flags.png);
        });
    } catch(err) {
        console.log(err)
    }

};


document.addEventListener('DOMContentLoaded', async () => {
    populateCountries()
});
