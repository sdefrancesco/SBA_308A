let Countries = [];

// fetch countries
export const fetchCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        Countries = response.data;
        console.log('Countries fetched:', Countries);
        return Countries;  // Return the populated Countries array
    } catch (err) {
        console.error('Error fetching countries:', err);
    }
}

export default Countries