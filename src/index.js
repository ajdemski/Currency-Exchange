require('dotenv').config();

import './css/styles.css';
import Currency from './currency.js';

function updateDisplay(displayText,) {
  const displayTitle = document.getElementById('display_title');
  displayTitle.textContent = displayText;
}

async function getCurrency(baseCurrency, currency) {
  const response = await Currency.getCurrency(baseCurrency);
  const rates = response.conversion_rates;
  if (currency === baseCurrency) {
    updateDisplay('Error Getting Currency');
  } else if (Object.prototype.hasOwnProperty.call(rates, currency)) {
    const exchangeRate = rates[currency];
    const displayText = `1 ${baseCurrency} = ${exchangeRate} ${currency}`;
    updateDisplay(displayText);
  } else {
    updateDisplay('Invalid Currency');
  }
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const baseCurrency = 'USD';
  const currencyInput = document.getElementById('currency');
  const currency = currencyInput.value;
  getCurrency(baseCurrency, currency);
  currencyInput.value = "";
});