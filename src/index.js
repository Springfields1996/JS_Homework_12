import './styles.css';
import { notification, errorMessage } from './notification.js';
import countryTemplate from './template/countryTemp.hbs';
import fetchCountries from './fetchCountries.js';

import lodash from 'lodash';

const inputCountry = document.querySelector('#input');
const countryList = document.querySelector('.country_list');

inputCountry.addEventListener('input', lodash.debounce(getData, 500));

function getData(event) {
  const form = event.target;
  const countryName = form.value;
  countryList.innerHTML = '';

  fetchCountries(countryName).then(data =>
    data.length !== 0 && data.length > 10 ? notification() : makeMarkup(data),
  );
}

function makeMarkup(data) {
  const insert = countryList.insertAdjacentHTML.bind(countryList);
  if (data.length > 1) {
    data.map(country => insert('afterbegin', `<li>${country.name}</li>`));
  } else if (data.length) {
    data.map(country => insert('afterbegin', countryTemplate(country)));
  } else {
    errorMessage();
  }
}
