function fetchCountries(countryName) {
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
  return fetch(url).then(response => response.json());
}

export default fetchCountries;
