

const parent = document.getElementById('countries')
let countries;

const createCol = (size, parent) => {
    let col = document.createElement('div')
    col.classList.add(`col-lg-${size}`)
}

// get countries
const getCountries = async() => {

    try {
        let response = await axios.get('https://restcountries.com/v3.1/all')
        countries = response.data
        console.log(countries)
    } catch(err) {
        console.log(err)
    }

}

document.addEventListener('DOMContentLoaded', ()=> {
    getCountries()
})


